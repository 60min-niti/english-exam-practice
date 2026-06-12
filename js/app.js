"use strict";
/* ================= TU-GET PBT Practice — app engine ================= */

const PARTS = {
  structure:  { name: "Structure",  thai: "โครงสร้างไวยากรณ์", count: 25, time: 25 * 60, points: 250, icon: '<i class="ti ti-puzzle"></i>' },
  vocabulary: { name: "Vocabulary", thai: "คำศัพท์",            count: 25, time: 25 * 60, points: 250, icon: '<i class="ti ti-book-2"></i>' },
  reading:    { name: "Reading",    thai: "การอ่าน",            count: 50, time: 65 * 60, points: 500, icon: '<i class="ti ti-book"></i>' },
};
const PART_ORDER = ["structure", "vocabulary", "reading"];
const FULL_TIME = 180 * 60;
const PTS = 10; // คะแนนต่อข้อ
const BANDS = [{ at: 500, label: "เกณฑ์ 500" }, { at: 550, label: "เกณฑ์ 550" }];
const LS = { history: "tuget_history", wrong: "tuget_wrong", session: "tuget_session", theme: "tuget_theme", marks: "tuget_marks", name: "tuget_name", fs: "tuget_fs" };

/* ---------- โหลดคลังข้อสอบจาก data/*.js ---------- */
const BANK = { structure: {}, vocabulary: {}, reading: {} };
const INDEX = {}; // qid -> {part, set, q}
(window.TUGET_DATA || []).forEach(pack => {
  let qs = [];
  if (pack.part === "reading") {
    (pack.passages || []).forEach((p, pi) => {
      const passage = { title: p.title || ("Passage " + (pi + 1)), text: p.text };
      p.questions.forEach(q => qs.push(Object.assign({}, q, { passage })));
    });
  } else {
    qs = (pack.questions || []).slice();
  }
  BANK[pack.part][pack.set] = qs;
  qs.forEach(q => { INDEX[q.id] = { part: pack.part, set: pack.set, q }; });
});
function setsOf(part) { return Object.keys(BANK[part]).map(Number).sort((a, b) => a - b); }

/* ---------- localStorage helpers ---------- */
function lsGet(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
  catch (e) { return fallback; }
}
function lsSet(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
function lsDel(key) { localStorage.removeItem(key); }

/* ---------- theme ---------- */
function applyTheme() {
  const t = lsGet(LS.theme, "light");
  document.documentElement.setAttribute("data-theme", t);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = t === "dark" ? "☀️" : "🌙";
}
function toggleTheme() {
  lsSet(LS.theme, lsGet(LS.theme, "light") === "dark" ? "light" : "dark");
  applyTheme();
}

/* ---------- เมนูมือถือ (แฮมเบอร์เกอร์) ---------- */
function toggleNav() {
  const nav = document.getElementById("mainNav");
  if (nav) nav.classList.toggle("open");
}
function closeNav() {
  const nav = document.getElementById("mainNav");
  if (nav) nav.classList.remove("open");
}

/* ---------- ปรับขนาดฟอนต์ (A−/A+) ---------- */
const FS_STEPS = [0.85, 0.925, 1, 1.075, 1.15, 1.25];
function applyFontScale() {
  const fs = lsGet(LS.fs, 1);
  document.documentElement.style.setProperty("--fs", fs);
}
function changeFont(dir) {
  const cur = lsGet(LS.fs, 1);
  // หา step ที่ใกล้ค่าปัจจุบันที่สุด แล้วขยับไปตามทิศ
  let i = FS_STEPS.reduce((best, v, idx) =>
    Math.abs(v - cur) < Math.abs(FS_STEPS[best] - cur) ? idx : best, 2);
  i = Math.min(FS_STEPS.length - 1, Math.max(0, i + dir));
  lsSet(LS.fs, FS_STEPS[i]);
  applyFontScale();
}

/* ---------- ชื่อผู้ใช้ (ทักทายหน้าหลัก) ---------- */
function getName() { return lsGet(LS.name, ""); }
function promptName() {
  const cur = getName();
  const v = prompt("ใส่ชื่อที่อยากให้เว็บเรียก (เว้นว่างเพื่อไม่ระบุ):", cur);
  if (v === null) return;            // กดยกเลิก
  lsSet(LS.name, v.trim().slice(0, 30));
  if (typeof renderHome === "function") renderHome();
}
function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "สวัสดีตอนเช้า";
  if (h < 17) return "สวัสดีตอนบ่าย";
  return "สวัสดีตอนเย็น";
}

/* ---------- utils ---------- */
const $app = () => document.getElementById("app");
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
// ดึงคำ/วลีที่อยู่ในเครื่องหมายคำพูดจากคำถาม (เพื่อนำไปไฮไลต์ในบทความ)
function quotedTerms(s) {
  return (String(s).match(/"([^"]+)"/g) || []).map(t => t.replace(/"/g, "").trim()).filter(Boolean);
}
// ไฮไลต์คำที่ถูกถามถึงให้เป็นตัวหนาสีเข้มภายในบทความ (รับ string ที่ esc แล้ว)
function highlightInPassage(escapedHtml, terms) {
  let html = escapedHtml;
  terms.forEach(t => {
    const et = esc(t);
    const safe = et.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp(safe, "gi"), m => '<b class="kw">' + m + "</b>");
  });
  return html;
}
// ย่อหน้าบทความ + ใส่เลขกำกับ [1]-[x] (ใช้ทั้งหน้าทำข้อสอบและหน้าเฉลย)
function passageParasHTML(passage, terms) {
  return passage.text.split(/\n\s*\n/)
    .map((p, i) => `<p><sup class="para-no">[${i + 1}]</sup>` + highlightInPassage(esc(p), terms || []) + "</p>").join("");
}
function passageHTML(passage, terms) {
  return `<h4>${esc(passage.title)}</h4>${passageParasHTML(passage, terms)}`;
}
function fmtTime(sec) {
  sec = Math.max(0, Math.round(sec));
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return (h ? h + ":" : "") + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}
function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "2-digit" }) +
    " " + d.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
}
function pct(got, max) { return max ? Math.round(got / max * 100) : 0; }
function confirmLeaveExam() {
  if (S && !S.finished) return confirm("กำลังทำข้อสอบอยู่ — ออกจากหน้านี้เลยไหม? (คำตอบถูกบันทึกไว้ กลับมาทำต่อได้)");
  return true;
}

/* ================= Session ================= */
let S = null;       // session ปัจจุบัน
let timerHandle = null;

function buildItems(selections) {
  const items = [];
  selections.forEach(sel => {
    (BANK[sel.part][sel.set] || []).forEach(q =>
      items.push({ part: sel.part, set: sel.set, q }));
  });
  return items;
}

function startSession(cfg) {
  // cfg: {mode:"part"|"full"|"retry", selections:[{part,set}], study:bool, items?:[]}
  const items = cfg.items || buildItems(cfg.selections);
  if (!items.length) { alert("ไม่พบข้อสอบในชุดที่เลือก"); return; }
  let duration = null;
  if (!cfg.study) {
    duration = cfg.mode === "full" ? FULL_TIME : PARTS[cfg.selections[0].part].time;
  }
  S = {
    mode: cfg.mode, selections: cfg.selections || [], study: !!cfg.study,
    items, answers: {}, flags: {}, locked: {}, idx: 0,
    duration, remain: duration, startedAt: Date.now(), finished: false,
    tagLabel: cfg.tagLabel || "",
  };
  saveSession();
  renderExam();
  if (duration != null) startTimer();
}

function sessionLabel(s) {
  if (s.mode === "tag") return s.tagLabel || "ฝึกแยกหัวข้อ";
  if (s.mode === "retry") return "ทบทวนสมุดข้อผิด";
  if (s.mode === "full") return "เต็มชุด 100 ข้อ (ชุด " + s.selections.map(x => x.set).join("/") + ")";
  const sel = s.selections[0];
  return PARTS[sel.part].name + " ชุดที่ " + sel.set;
}

/* ---------- autosave / resume ---------- */
function saveSession() {
  // โหมด retry/tag เป็นการฝึกชั่วคราว ไม่ต้อง autosave/resume
  if (!S || S.finished || S.mode === "retry" || S.mode === "tag") return;
  lsSet(LS.session, {
    mode: S.mode, selections: S.selections, study: S.study,
    answers: S.answers, flags: S.flags, locked: S.locked, idx: S.idx,
    duration: S.duration, remain: S.remain, startedAt: S.startedAt,
  });
}
function resumeSession() {
  const saved = lsGet(LS.session, null);
  if (!saved) return;
  const items = buildItems(saved.selections);
  if (!items.length) { lsDel(LS.session); goHome(); return; }
  S = Object.assign({}, saved, { items, finished: false });
  renderExam();
  if (S.duration != null) startTimer();
}
function discardSession() {
  if (confirm("ลบข้อสอบที่ค้างอยู่ทิ้งเลยไหม?")) { lsDel(LS.session); goHome(); }
}

/* ---------- timer ---------- */
function startTimer() {
  stopTimer();
  timerHandle = setInterval(() => {
    if (!S || S.finished) { stopTimer(); return; }
    S.remain--;
    const el = document.getElementById("timer");
    if (el) {
      el.textContent = fmtTime(S.remain);
      el.classList.toggle("low", S.remain <= 300);
    }
    if (S.remain % 15 === 0) saveSession();
    if (S.remain <= 0) { stopTimer(); alert("หมดเวลา! ระบบจะส่งคำตอบให้อัตโนมัติ"); finishExam(); }
  }, 1000);
}
function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; } }

/* ================= Views ================= */
function show(html) { $app().innerHTML = html; window.scrollTo(0, 0); }

function goHome() {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  renderHome();
}

/* ---------- HOME ---------- */
function renderHome() {
  const saved = lsGet(LS.session, null);
  const wrongCount = Object.keys(lsGet(LS.wrong, {})).length;
  const hist = lsGet(LS.history, []);

  let resumeCard = "";
  if (saved) {
    const answered = Object.keys(saved.answers || {}).length;
    resumeCard = `
      <div class="card resume" onclick="resumeSession()">
        <div class="icon"><i class="ti ti-player-pause"></i></div>
        <h3>ทำต่อจากที่ค้างไว้</h3>
        <p>${esc(sessionLabel(saved))} — ตอบแล้ว ${answered} ข้อ${saved.remain != null ? " · เหลือเวลา " + fmtTime(saved.remain) : ""}</p>
        <span class="badge">กดเพื่อทำต่อ</span>
        <p style="margin-top:8px"><a href="javascript:void(0)" onclick="event.stopPropagation();discardSession()" style="color:var(--danger);font-size:.82rem">ลบทิ้ง</a></p>
      </div>`;
  }

  const partCards = PART_ORDER.map(p => {
    const info = PARTS[p];
    return `
      <div class="card" onclick="openSetup('${p}')">
        <div class="icon">${info.icon}</div>
        <h3>${info.name}</h3>
        <p>${info.thai} · ${info.count} ข้อ · ${info.points} คะแนน · ${Math.round(info.time / 60)} นาที</p>
        <span class="badge">${setsOf(p).length} ชุด</span>
      </div>`;
  }).join("");

  const nm = getName();
  const hello = nm
    ? `${greeting()}, <b>${esc(nm)}</b> 👋 <a href="javascript:void(0)" onclick="promptName()" class="name-edit">เปลี่ยนชื่อ</a>`
    : `${greeting()} 👋 <a href="javascript:void(0)" onclick="promptName()" class="name-edit">ตั้งชื่อที่อยากให้เว็บเรียก</a>`;

  let statsRow = "";
  if (hist.length) {
    const totalQ = hist.reduce((s, h) => s + h.max / PTS, 0);
    const best = Math.max(...hist.map(h => pct(h.score, h.max)));
    const lastH = hist[hist.length - 1];
    statsRow = `
      <div class="kpi-row">
        <div class="kpi"><div class="v">${totalQ}</div><div class="l">ข้อที่ทำไปแล้ว</div></div>
        <div class="kpi"><div class="v">${best}%</div><div class="l">คะแนนดีที่สุด</div></div>
        <div class="kpi"><div class="v">${pct(lastH.score, lastH.max)}%</div><div class="l">ครั้งล่าสุด</div></div>
        <div class="kpi"><div class="v">${wrongCount}</div><div class="l">สมุดข้อผิดค้างอยู่</div></div>
      </div>`;
  }

  show(`
    <section class="hero">
      <p class="hi">${hello}</p>
      <h1>พร้อมพิชิต TU-GET ไปด้วยกันวันนี้</h1>
      <p class="lead">ฝึกแนวข้อสอบจริง 800 ข้อ พร้อมเฉลยอธิบายภาษาไทยทุกข้อ — เลือกทำเต็มชุดหรือเจาะรายพาร์ท</p>
      <div class="hero-actions">
        <button class="btn bright" onclick="openSetup('full')">เริ่มทำข้อสอบ <i class="ti ti-arrow-right"></i></button>
        <button class="btn ghost" onclick="openStats()">ดูสถิติของฉัน</button>
      </div>
    </section>
    ${statsRow}
    <h2 style="margin-top:0">เลือกสิ่งที่อยากฝึก</h2>
    <div class="card-grid">
      ${resumeCard}
      <div class="card" onclick="openSetup('full')">
        <div class="icon"><i class="ti ti-clipboard-text"></i></div>
        <h3>ทำเต็มชุด 100 ข้อ</h3>
        <p>Structure 25 + Vocabulary 25 + Reading 50 · 3 ชั่วโมง · 1,000 คะแนน</p>
        <span class="badge">สุ่มชุดจาก 3 พาร์ท</span>
      </div>
      ${partCards}
      <div class="card" onclick="openTagPractice()">
        <div class="icon"><i class="ti ti-target-arrow"></i></div>
        <h3>ฝึกแยกตามหัวข้อ</h3>
        <p>เจาะเฉพาะหัวข้อที่อ่อน ดึงข้อจากทุกชุดมาฝึกแบบเฉลยทันที</p>
        <span class="badge">เจาะจุดอ่อน</span>
      </div>
      <div class="card" onclick="openWrongBank()">
        <div class="icon"><i class="ti ti-refresh"></i></div>
        <h3>สมุดข้อผิด</h3>
        <p>ทบทวนข้อที่เคยตอบผิด ตอบถูก 2 ครั้งติดจึงหลุดจากคลัง</p>
        <span class="badge">${wrongCount} ข้อค้างอยู่</span>
      </div>
      <div class="card" onclick="openVocabList()">
        <div class="icon"><i class="ti ti-notebook"></i></div>
        <h3>คลังคำศัพท์</h3>
        <p>รวมคำศัพท์ทุกชุด พร้อมความหมาย ค้นหาได้ และทบทวนแบบ Flashcard</p>
        <span class="badge">Vocab list</span>
      </div>
      <div class="card" onclick="openBookmarks()">
        <div class="icon"><i class="ti ti-bookmark"></i></div>
        <h3>บุ๊กมาร์ก</h3>
        <p>ข้อที่เก็บไว้ทบทวน พร้อมโน้ตส่วนตัวรายข้อ</p>
        <span class="badge">${Object.keys(lsGet(LS.marks, {})).length} ข้อ</span>
      </div>
      <div class="card" onclick="openStats()">
        <div class="icon"><i class="ti ti-chart-line"></i></div>
        <h3>สถิติของฉัน</h3>
        <p>กราฟพัฒนาการ คะแนนย้อนหลัง และจุดอ่อนรายหัวข้อ</p>
        <span class="badge">${hist.length} ครั้งที่ทำ</span>
      </div>
    </div>`);
}

/* ---------- SETUP ---------- */
let setupState = null;
function openSetup(target) {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  setupState = { target, study: false };
  renderSetup();
}
function renderSetup() {
  const t = setupState.target;
  const isFull = t === "full";
  let pickers;
  if (isFull) {
    pickers = `<div class="notice">🎲 ระบบจะ<b>สุ่มชุดข้อสอบจากทั้ง 3 พาร์ทให้อัตโนมัติ</b> (Structure + Vocabulary + Reading) แล้วเริ่มได้ทันที — เลือกแค่โหมดด้านล่าง</div>`;
  } else {
    pickers = `
      <label class="field">${PARTS[t].icon} ${PARTS[t].name} — เลือกชุด</label>
      <select id="set-${t}">${setsOf(t).map(n => `<option value="${n}">ชุดที่ ${n}</option>`).join("")}</select>`;
  }
  const head = isFull
    ? "ทำเต็มชุด 100 ข้อ · 1,000 คะแนน"
    : `${PARTS[t].name} · ${PARTS[t].count} ข้อ · ${PARTS[t].points} คะแนน`;
  show(`
    <h1>${head}</h1>
    <p class="sub">${isFull ? "สุ่มชุดจากทั้ง 3 พาร์ท — เลือกโหมดแล้วเริ่มได้เลย" : "เลือกชุดข้อสอบและโหมดที่ต้องการ"}</p>
    <div class="panel">
      ${pickers}
      <label class="field">โหมด</label>
      <div class="mode-pick">
        <div class="opt ${setupState.study ? "" : "sel"}" onclick="setStudy(false)">
          <b>🕐 โหมดสอบ (จับเวลา)</b>
          <small>นับถอยหลัง ${isFull ? "3 ชั่วโมง" : Math.round(PARTS[t].time / 60) + " นาที"} หมดเวลาส่งอัตโนมัติ เฉลยหลังส่ง</small>
        </div>
        <div class="opt ${setupState.study ? "sel" : ""}" onclick="setStudy(true)">
          <b>🎓 โหมดฝึก (ไม่จับเวลา)</b>
          <small>เฉลยพร้อมคำอธิบายโผล่ทันทีหลังตอบแต่ละข้อ</small>
        </div>
      </div>
      <div style="margin-top:24px">
        <button class="btn" onclick="beginFromSetup()">เริ่มทำข้อสอบ ▶</button>
        <button class="btn secondary" onclick="goHome()">ย้อนกลับ</button>
      </div>
    </div>`);
}
function setStudy(v) { setupState.study = v; renderSetup(); }
function beginFromSetup() {
  const t = setupState.target;
  if (lsGet(LS.session, null) &&
    !confirm("มีข้อสอบที่ทำค้างไว้อยู่ การเริ่มชุดใหม่จะทับของเดิม — เริ่มเลยไหม?")) return;
  let selections;
  if (t === "full") {
    // สุ่มชุดจากแต่ละพาร์ทอย่างละ 1 ชุด
    selections = PART_ORDER.map(p => {
      const sets = setsOf(p);
      return { part: p, set: sets[Math.floor(Math.random() * sets.length)] };
    });
  } else {
    selections = [{ part: t, set: Number(document.getElementById("set-" + t).value) }];
  }
  startSession({ mode: t === "full" ? "full" : "part", selections, study: setupState.study });
}

/* ---------- EXAM ---------- */
function renderExam() {
  const total = S.items.length;
  const timerHtml = S.duration != null
    ? `<div class="timer" id="timer">${fmtTime(S.remain)}</div>`
    : `<div class="timer" style="font-size:.95rem">🎓 โหมดฝึก</div>`;
  show(`
    <div class="exam-head">
      <div class="exam-title">${esc(sessionLabel(S))}<small>ตอบแล้ว <span id="answeredCount">0</span>/${total} ข้อ</small></div>
      ${timerHtml}
    </div>
    <div class="pal-bar">
      <div class="pal-strip" id="palGrid"></div>
      <div class="pal-actions">
        <span class="pal-leg">
          <span class="sw answered"></span> ตอบแล้ว
          <span class="sw flagged"></span> ติดธง
        </span>
        <button class="btn small" onclick="trySubmit()">ส่งคำตอบ ✔</button>
      </div>
    </div>
    <div id="qArea"></div>`);
  renderQuestion();
}

function renderQuestion() {
  const it = S.items[S.idx];
  const q = it.q;
  const total = S.items.length;
  const picked = S.answers[q.id];
  const locked = S.study && S.locked[q.id];

  const choices = q.choices.map((c, i) => {
    let cls = "choice";
    if (locked) {
      cls += " locked";
      if (i === q.answer) cls += " correct";
      else if (i === picked) cls += " wrong";
    } else if (i === picked) cls += " picked";
    const click = locked ? "" : `onclick="pickChoice(${i})"`;
    return `<div class="${cls}" ${click}><span class="no">${i + 1}</span><span>${c}</span></div>`;
  }).join("");

  let feedback = "";
  if (locked) {
    const ok = picked === q.answer;
    feedback = `<div class="feedback ${ok ? "good" : "bad"}">
      <b class="verdict">${ok ? "✔ ถูกต้อง!" : "✘ ยังไม่ถูก — เฉลยคือข้อ " + (q.answer + 1)}</b>
      ${q.explanation}
    </div>`;
  }

  const flagged = S.flags[q.id];
  const qCardHtml = `
    <div class="q-card">
      <div class="q-num">ข้อ ${S.idx + 1} / ${total}<span class="tag">${esc(PARTS[it.part].name)}${q.tag ? " · " + esc(q.tag) : ""}</span></div>
      <div class="q-text">${q.question}</div>
      ${choices}
      ${feedback}
    </div>`;
  const navHtml = `
    <div class="exam-nav">
      <button class="btn secondary" onclick="navQ(-1)" ${S.idx === 0 ? "disabled" : ""}>◀ ข้อก่อนหน้า</button>
      <button class="flag-btn ${flagged ? "on" : ""}" onclick="toggleFlag()">${flagged ? "🚩 ติดธงแล้ว" : "🏳 ติดธงไว้ดูทีหลัง"}</button>
      ${S.idx === total - 1
        ? `<button class="btn" onclick="trySubmit()">ส่งคำตอบ ✔</button>`
        : `<button class="btn" onclick="navQ(1)">ข้อถัดไป ▶</button>`}
    </div>`;

  let body;
  if (q.passage) {
    // Reading: บทความซ้าย (เลื่อนอ่านได้ + เลขย่อหน้า) · คำถาม/ช้อยขวา
    const passageInner = passageParasHTML(q.passage, quotedTerms(q.question));
    body = `
      <div class="reading-body">
        <div class="reading-passage">
          <div class="passage-wrap">
            <div class="passage-hd">
              <span><i class="ti ti-file-text"></i> ${esc(q.passage.title)}</span>
              <span class="scroll-hint"><i class="ti ti-arrows-vertical"></i> เลื่อนเพื่ออ่าน</span>
            </div>
            <div class="passage-box reading">${passageInner}</div>
          </div>
        </div>
        <div class="reading-q">${qCardHtml}${navHtml}</div>
      </div>`;
  } else {
    body = `<div class="single-col">${qCardHtml}${navHtml}</div>`;
  }
  document.getElementById("qArea").innerHTML = body;
  renderPalette();
}

function renderPalette() {
  const grid = document.getElementById("palGrid");
  if (!grid) return;
  grid.innerHTML = S.items.map((it, i) => {
    let cls = "pal-btn";
    if (S.answers[it.q.id] != null) cls += " answered";
    if (S.flags[it.q.id]) cls += " flagged";
    if (i === S.idx) cls += " current";
    return `<button class="${cls}" onclick="jumpQ(${i})">${i + 1}</button>`;
  }).join("");
  const ac = document.getElementById("answeredCount");
  if (ac) ac.textContent = Object.keys(S.answers).length;
}

function pickChoice(i) {
  const q = S.items[S.idx].q;
  S.answers[q.id] = i;
  if (S.study) {
    S.locked[q.id] = true;
    if (S.mode === "retry") updateWrongStreak(q.id, i === q.answer);
    else if (i !== q.answer) addToWrongBank(q.id);
  }
  saveSession();
  renderQuestion();
}
function navQ(d) { S.idx = Math.min(S.items.length - 1, Math.max(0, S.idx + d)); saveSession(); renderQuestion(); }
function jumpQ(i) { S.idx = i; saveSession(); renderQuestion(); }
function toggleFlag() {
  const q = S.items[S.idx].q;
  S.flags[q.id] = !S.flags[q.id];
  saveSession(); renderQuestion();
}
function trySubmit() {
  const blank = S.items.filter(it => S.answers[it.q.id] == null).length;
  if (blank > 0 && !confirm("ยังไม่ได้ตอบ " + blank + " ข้อ — ส่งคำตอบเลยไหม?")) return;
  finishExam();
}

/* ---------- FINISH / RESULT ---------- */
function finishExam() {
  stopTimer();
  S.finished = true;
  lsDel(LS.session);

  const perPart = {}, perTag = {};
  let got = 0;
  S.items.forEach(it => {
    const q = it.q;
    const ok = S.answers[q.id] === q.answer;
    if (ok) got += PTS;
    if (!perPart[it.part]) perPart[it.part] = { got: 0, max: 0 };
    perPart[it.part].max += PTS;
    if (ok) perPart[it.part].got += PTS;
    const tag = q.tag || "อื่น ๆ";
    if (!perTag[tag]) perTag[tag] = { c: 0, t: 0 };
    perTag[tag].t++;
    if (ok) perTag[tag].c++;
    // อัปเดตสมุดข้อผิด (โหมดสอบปกติ ที่ไม่ใช่ retry/tag)
    if (!S.study && S.mode !== "retry" && S.mode !== "tag" && !ok) addToWrongBank(q.id);
  });
  const max = S.items.length * PTS;
  const timeUsed = S.duration != null ? S.duration - S.remain : Math.round((Date.now() - S.startedAt) / 1000);

  // retry/tag = ฝึกเฉพาะจุด ไม่บันทึกลงประวัติ/สถิติรวม
  if (S.mode !== "retry" && S.mode !== "tag") {
    const hist = lsGet(LS.history, []);
    hist.push({
      date: new Date().toISOString(), mode: S.mode, label: sessionLabel(S),
      study: S.study, score: got, max, perPart, perTag, timeUsed,
    });
    lsSet(LS.history, hist);
  }
  renderResult({ got, max, perPart, perTag, timeUsed });
}

// สีแถบตามผล: เขียว ≥80% · เหลือง ≥60% · แดง ต่ำกว่านั้น
function barColor(p) {
  return p >= 80 ? "var(--success)" : p >= 60 ? "var(--accent)" : "var(--danger)";
}
function scrollToReview() {
  const el = document.getElementById("reviewHead");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function redoExam() {
  if (!S || !(S.mode === "full" || S.mode === "part")) return;
  startSession({ mode: S.mode, selections: S.selections, study: S.study });
}

function renderResult(r) {
  const isFull = S.mode === "full";
  const percent = pct(r.got, r.max);
  const total = S.items.length;
  const correct = r.got / PTS;
  const unanswered = S.items.filter(it => S.answers[it.q.id] == null).length;
  const wrong = total - correct - unanswered;
  const avgPerQ = (r.timeUsed / total).toFixed(1);

  // เทียบครั้งก่อน (เฉพาะโหมดที่บันทึกประวัติ — current ถูก push เข้า history แล้ว)
  let deltaHtml = "";
  if (S.mode !== "retry" && S.mode !== "tag") {
    const hist = lsGet(LS.history, []);
    if (hist.length >= 2) {
      const d = percent - pct(hist[hist.length - 2].score, hist[hist.length - 2].max);
      const up = d >= 0;
      deltaHtml = `<span class="delta ${up ? "up" : "down"}"><i class="ti ti-trending-${up ? "up" : "down"}"></i> ${up ? "+" : ""}${d}% จากครั้งก่อน</span>`;
    }
  }

  // แถบเทียบเกณฑ์ (เฉพาะเต็มชุด — /1000 ตรงสเกลจริง)
  let bandHtml = "";
  if (isFull) {
    const marks = BANDS.map(b =>
      `<div class="band-mark" style="left:${b.at / 10}%"><i>${b.label}</i></div>`).join("");
    bandHtml = `
      <div class="band-bar"><div class="band-fill" style="width:${percent}%"></div>${marks}</div>
      <p class="sub" style="text-align:center;font-size:.8rem">* เกณฑ์ 500/550 เป็นตัวเลขที่หลักสูตรนิยมใช้ — คะแนนฝึกเป็นค่าประมาณ ไม่ใช่คะแนนจริง</p>`;
  }

  const canRedo = isFull || S.mode === "part";

  const kpiCards = `
    <div class="kpi-row">
      <div class="kpi"><div class="v" style="color:var(--success)">${correct}</div><div class="l"><i class="ti ti-circle-check"></i> ตอบถูก</div></div>
      <div class="kpi"><div class="v" style="color:var(--danger)">${wrong}</div><div class="l"><i class="ti ti-circle-x"></i> ตอบผิด</div></div>
      <div class="kpi"><div class="v">${unanswered}</div><div class="l"><i class="ti ti-circle-dashed"></i> ข้าม</div></div>
      <div class="kpi"><div class="v">${fmtTime(r.timeUsed)}</div><div class="l"><i class="ti ti-clock"></i> เวลา · ${avgPerQ} วิ/ข้อ</div></div>
    </div>`;

  const partKeys = Object.keys(r.perPart);
  let partPanel = "";
  if (partKeys.length > 1) {
    const bars = partKeys.map(p => {
      const v = r.perPart[p], pc = pct(v.got, v.max);
      return `<div class="pbar">
        <div class="pbar-top"><span>${PARTS[p].icon} ${PARTS[p].name}</span><span class="num">${v.got} / ${v.max} · ${pc}%</span></div>
        <div class="bar-track"><i style="width:${pc}%;background:${barColor(pc)}"></i></div>
      </div>`;
    }).join("");
    partPanel = `<div class="panel"><h2 style="margin-top:0">คะแนนรายพาร์ท</h2><div class="part-bars">${bars}</div></div>`;
  }

  const tagRows = Object.keys(r.perTag).sort((a, b) => (r.perTag[a].c / r.perTag[a].t) - (r.perTag[b].c / r.perTag[b].t))
    .map(tag => {
      const v = r.perTag[tag], pc = pct(v.c, v.t);
      return `<tr><td>${esc(tag)}</td><td class="num">${v.c}/${v.t}</td>
        <td><div class="bar-mini"><i style="width:${pc}%;background:${barColor(pc)}"></i></div></td><td class="num">${pc}%</td></tr>`;
    }).join("");

  show(`
    <div class="panel score-hero">
      <div class="result-label">${esc(sessionLabel(S))}${S.study ? " · โหมดฝึก" : ""}</div>
      <div class="big">${r.got}<span class="of"> / ${r.max}</span></div>
      <div class="pct">${percent}% ${deltaHtml}</div>
      ${bandHtml}
      <div class="result-actions">
        <button class="btn" onclick="scrollToReview()"><i class="ti ti-list-search"></i> ดูเฉลยละเอียด</button>
        ${canRedo ? `<button class="btn secondary" onclick="redoExam()"><i class="ti ti-refresh"></i> ทำชุดนี้อีกครั้ง</button>` : ""}
        <button class="btn secondary" onclick="openStats()"><i class="ti ti-chart-line"></i> สถิติ</button>
        <button class="btn secondary" onclick="goHome()"><i class="ti ti-home"></i> หน้าหลัก</button>
      </div>
    </div>
    ${kpiCards}
    ${partPanel}
    <div class="panel"><h2 style="margin-top:0">ความแม่นยำรายหัวข้อ (เรียงจากจุดอ่อน)</h2>
      <table class="stat"><tr><th>หัวข้อ</th><th>ถูก/ทั้งหมด</th><th></th><th>%</th></tr>${tagRows}</table></div>
    <h2 id="reviewHead">เฉลยละเอียด</h2>
    <div id="reviewControls"></div>
    <div id="reviewList"></div>`);
  reviewWhich = (total - correct) > 0 ? "wrong" : "all";
  reviewPart = "all";
  refreshReview();
}

/* ---- ตัวกรองหน้าเฉลย: which = all/wrong, part = all/structure/vocabulary/reading ---- */
let reviewWhich = "all";
let reviewPart = "all";
function currentWrongCount() { return S.items.filter(it => S.answers[it.q.id] !== it.q.answer).length; }
function setReviewWhich(w) { reviewWhich = w; refreshReview(); }
function setReviewPart(p) { reviewPart = p; refreshReview(); }
function refreshReview() {
  const ctl = document.getElementById("reviewControls");
  if (ctl) ctl.innerHTML = renderReviewControls();
  renderReviewList();
}
function renderReviewControls() {
  const wrongCount = currentWrongCount();
  const whichChips = `<div class="review-filters">
      <button class="chip ${reviewWhich === "all" ? "on" : ""}" onclick="setReviewWhich('all')">ทุกข้อ (${S.items.length})</button>
      <button class="chip ${reviewWhich === "wrong" ? "on" : ""}" onclick="setReviewWhich('wrong')">เฉพาะข้อที่ผิด (${wrongCount})</button>
    </div>`;
  // ชิปเลือกพาร์ท แสดงเฉพาะตอนทำเต็มชุด (มีหลายพาร์ท)
  const partsIn = PART_ORDER.filter(p => S.items.some(it => it.part === p));
  let partChips = "";
  if (partsIn.length > 1) {
    const opts = [["all", "ทุกพาร์ท"]].concat(partsIn.map(p => [p, PARTS[p].icon + " " + PARTS[p].name]));
    partChips = `<div class="review-filters">` +
      opts.map(([v, l]) => `<button class="chip ${reviewPart === v ? "on" : ""}" onclick="setReviewPart('${v}')">${l}</button>`).join("") +
      `</div>`;
  }
  return whichChips + partChips;
}
function choiceTH(q, i) {
  if (q.choicesTH && q.choicesTH[i]) return q.choicesTH[i];
  if (q.glosses && q.glosses[i]) return q.glosses[i];
  return "";
}
function choiceReviewHTML(q, picked) {
  return `<div class="rc-list">` + q.choices.map((c, i) => {
    const isAns = i === q.answer, isPick = i === picked;
    let cls = "rc";
    if (isAns) cls += " rc-correct"; else if (isPick) cls += " rc-wrong";
    const th = choiceTH(q, i);
    const gloss = th ? ` <span class="rc-gloss">— ${th}</span>` : "";
    const badge = isAns ? `<span class="rc-badge ok">เฉลย</span>`
      : (isPick ? `<span class="rc-badge no">คุณตอบ</span>` : "");
    return `<div class="${cls}"><span class="rc-no">${i + 1}</span><span class="rc-text">${c}${gloss}</span>${badge}</div>`;
  }).join("") + `</div>`;
}
// แปลโจทย์ไทย (แสดงใต้โจทย์อังกฤษในหน้าเฉลย)
function questionTHHTML(q) {
  return q.questionTH ? `<div class="q-text-th">🇹🇭 ${q.questionTH}</div>` : "";
}
function renderReviewList() {
  const list = document.getElementById("reviewList");
  const showDividers = new Set(S.items.map(it => it.part)).size > 1 && reviewPart === "all";
  let lastPart = null;
  const html = S.items.map((it, i) => {
    const q = it.q;
    const picked = S.answers[q.id];
    const ok = picked === q.answer;
    if (reviewWhich === "wrong" && ok) return "";
    if (reviewPart !== "all" && it.part !== reviewPart) return "";
    let header = "";
    if (showDividers && it.part !== lastPart) {
      header = `<div class="part-divider">${PARTS[it.part].icon} ${PARTS[it.part].name} — ${PARTS[it.part].thai}</div>`;
      lastPart = it.part;
    }
    const passage = q.passage ? `<details style="margin-bottom:8px"><summary style="cursor:pointer;color:var(--primary);font-size:.88rem">📖 ดู ${esc(q.passage.title)}</summary><div class="passage-box" style="margin-top:8px">${passageHTML(q.passage, quotedTerms(q.question))}</div></details>` : "";
    const notAnswered = picked == null ? `<div class="ans-line" style="color:var(--muted)"><i>— ข้อนี้ไม่ได้ตอบ —</i></div>` : "";
    return header + `
      <div class="panel review-item ${ok ? "ok" : "bad"}">
        <div class="q-num">ข้อ ${i + 1} ${ok ? "✔" : "✘"}<span class="tag">${esc(PARTS[it.part].name)}${q.tag ? " · " + esc(q.tag) : ""}</span></div>
        ${passage}
        <div class="q-text" style="font-size:.98rem">${q.question}</div>
        ${questionTHHTML(q)}
        ${choiceReviewHTML(q, picked)}
        ${notAnswered}
        <div class="expl"><b>เฉลยอธิบาย:</b> ${q.explanation}</div>
        ${markBlockHTML(q.id)}
      </div>`;
  }).join("");
  list.innerHTML = html || `<p class="empty">ไม่มีข้อที่ตรงตามตัวกรอง</p>`;
}

/* ================= Wrong Answer Bank ================= */
function addToWrongBank(qid) {
  const bank = lsGet(LS.wrong, {});
  const info = INDEX[qid];
  if (!info) return;
  bank[qid] = { part: info.part, set: info.set, streak: 0, addedAt: bank[qid] ? bank[qid].addedAt : new Date().toISOString() };
  lsSet(LS.wrong, bank);
}
function updateWrongStreak(qid, correct) {
  const bank = lsGet(LS.wrong, {});
  if (!bank[qid]) return;
  if (correct) {
    bank[qid].streak = (bank[qid].streak || 0) + 1;
    if (bank[qid].streak >= 2) delete bank[qid]; // ตอบถูก 2 ครั้งติด → หลุดจากคลัง
  } else {
    bank[qid].streak = 0;
  }
  lsSet(LS.wrong, bank);
}
function openWrongBank() {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  const bank = lsGet(LS.wrong, {});
  const ids = Object.keys(bank).filter(id => INDEX[id]);
  if (!ids.length) {
    show(`<h1>🔁 สมุดข้อผิด</h1><p class="sub">ข้อที่ตอบผิดจะถูกเก็บเข้าคลังอัตโนมัติ — ตอบถูก 2 ครั้งติดจึงหลุดจากคลัง</p>
      <div class="panel"><p class="empty">ยังไม่มีข้อผิดค้างอยู่ 🎉<br>ไปทำข้อสอบก่อน แล้วข้อที่พลาดจะมารออยู่ที่นี่</p></div>`);
    return;
  }
  const rows = ids.map(id => {
    const b = bank[id], info = INDEX[id];
    const qPreview = info.q.question.replace(/<[^>]*>/g, "").slice(0, 90);
    return `<div class="wrong-row">
      <div><b>${PARTS[info.part].name} ชุด ${info.set}</b> — ${esc(qPreview)}…</div>
      <div class="streak">ถูกติดกัน ${b.streak || 0}/2</div>
    </div>`;
  }).join("");
  show(`
    <h1>🔁 สมุดข้อผิด</h1>
    <p class="sub">มี ${ids.length} ข้อค้างอยู่ — ทำซ้ำแบบเฉลยทันที ตอบถูก 2 ครั้งติดข้อนั้นจะหลุดจากคลัง</p>
    <div class="panel">
      <button class="btn" onclick="startRetry()">▶ เริ่มทบทวน ${ids.length} ข้อ</button>
      <button class="btn danger small" style="float:right" onclick="clearWrongBank()">ล้างคลังทั้งหมด</button>
      <div style="margin-top:18px">${rows}</div>
    </div>`);
}
function startRetry() {
  const bank = lsGet(LS.wrong, {});
  const items = Object.keys(bank).filter(id => INDEX[id])
    .map(id => ({ part: INDEX[id].part, set: INDEX[id].set, q: INDEX[id].q }));
  if (!items.length) return;
  // สลับลำดับเพื่อไม่ให้จำคำตอบจากตำแหน่งข้อ
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  startSession({ mode: "retry", selections: [], study: true, items });
}
function clearWrongBank() {
  if (confirm("ล้างสมุดข้อผิดทั้งหมดเลยไหม?")) { lsDel(LS.wrong); openWrongBank(); }
}

/* ================= ฝึกแยกตามหัวข้อ (tag practice) ================= */
// รวบรวมข้อทั้งหมดจัดกลุ่มตามพาร์ท > แท็ก
function collectTags() {
  const out = { structure: {}, vocabulary: {}, reading: {} };
  PART_ORDER.forEach(part => {
    setsOf(part).forEach(set => {
      (BANK[part][set] || []).forEach(q => {
        const tag = q.tag || "อื่น ๆ";
        (out[part][tag] = out[part][tag] || []).push({ part, set, q });
      });
    });
  });
  return out;
}
let _tagCache = null;
function openTagPractice() {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  _tagCache = collectTags();
  // หาจุดอ่อนจากสถิติสะสม เพื่อแนะนำหัวข้อที่ควรเน้น
  const weak = weakestTags(3);
  let weakHtml = "";
  if (weak.length) {
    weakHtml = `<div class="notice">💡 จากสถิติของคุณ หัวข้อที่ควรเน้น: ` +
      weak.map(w => `<b>${esc(w.tag)}</b> (${w.pct}%)`).join(" · ") + `</div>`;
  }
  let html = `<h1>🎯 ฝึกแยกตามหัวข้อ</h1>
    <p class="sub">เลือกหัวข้อที่อยากเจาะ — ระบบดึงข้อจากทุกชุดมาฝึกแบบสุ่ม เฉลยทันทีหลังตอบแต่ละข้อ (ไม่นับรวมในสถิติหลัก)</p>
    ${weakHtml}`;
  PART_ORDER.forEach(part => {
    const tagMap = _tagCache[part];
    const tagNames = Object.keys(tagMap).sort();
    if (!tagNames.length) return;
    html += `<div class="panel"><h2 style="margin-top:0">${PARTS[part].icon} ${PARTS[part].name}</h2>
      <div class="tag-grid">` +
      tagNames.map(t => {
        const acc = tagAccuracy(t);
        const accLabel = acc ? `<span class="tag-acc">${acc.pct}%</span>` : "";
        return `<button class="tag-btn" onclick="startTagPractice('${part}', this.dataset.tag)" data-tag="${esc(t)}">
          <span class="tag-name">${esc(t)}</span>
          <span class="tag-count">${tagMap[t].length} ข้อ</span>${accLabel}</button>`;
      }).join("") +
      `</div></div>`;
  });
  show(html);
}
// ความแม่นยำสะสมของแท็กจากประวัติ (null ถ้ายังไม่เคยทำ)
function tagAccuracy(tag) {
  const hist = lsGet(LS.history, []);
  let c = 0, t = 0;
  hist.forEach(h => { const v = (h.perTag || {})[tag]; if (v) { c += v.c; t += v.t; } });
  return t ? { pct: pct(c, t), c, t } : null;
}
function weakestTags(n) {
  const hist = lsGet(LS.history, []);
  const agg = {};
  hist.forEach(h => Object.keys(h.perTag || {}).forEach(tag => {
    const v = h.perTag[tag];
    if (!agg[tag]) agg[tag] = { c: 0, t: 0 };
    agg[tag].c += v.c; agg[tag].t += v.t;
  }));
  return Object.keys(agg)
    .filter(tag => agg[tag].t >= 3)                 // ต้องเคยทำอย่างน้อย 3 ข้อ
    .map(tag => ({ tag, pct: pct(agg[tag].c, agg[tag].t) }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, n);
}
function startTagPractice(part, tag) {
  const pool = (_tagCache && _tagCache[part] && _tagCache[part][tag]) || [];
  if (!pool.length) return;
  const items = shuffle(pool.slice());
  startSession({ mode: "tag", selections: [], study: true, items, tagLabel: PARTS[part].name + " · " + tag });
}

/* ================= Stats ================= */
function openStats() {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  const hist = lsGet(LS.history, []);
  if (!hist.length) {
    show(`<h1>📈 สถิติของฉัน</h1>
      <div class="panel"><p class="empty">ยังไม่มีประวัติการทำข้อสอบ<br>ทำข้อสอบชุดแรกก่อน แล้วกราฟพัฒนาการจะแสดงที่นี่</p></div>
      ${exportImportHtml()}`);
    bindImport();
    return;
  }

  const best = Math.max(...hist.map(h => pct(h.score, h.max)));
  const last = hist[hist.length - 1];
  const totalQ = hist.reduce((s, h) => s + h.max / PTS, 0);

  // รวมความแม่นยำรายหัวข้อจากทุกครั้ง
  const tagAgg = {};
  hist.forEach(h => Object.keys(h.perTag || {}).forEach(tag => {
    if (!tagAgg[tag]) tagAgg[tag] = { c: 0, t: 0 };
    tagAgg[tag].c += h.perTag[tag].c;
    tagAgg[tag].t += h.perTag[tag].t;
  }));
  const tagRows = Object.keys(tagAgg).sort((a, b) => (tagAgg[a].c / tagAgg[a].t) - (tagAgg[b].c / tagAgg[b].t))
    .map(tag => {
      const v = tagAgg[tag];
      return `<tr><td>${esc(tag)}</td><td class="num">${v.c}/${v.t}</td>
        <td><div class="bar-mini"><i style="width:${pct(v.c, v.t)}%"></i></div></td><td class="num">${pct(v.c, v.t)}%</td></tr>`;
    }).join("");

  const histRows = hist.slice().reverse().map(h => `
    <tr><td>${fmtDate(h.date)}</td><td>${esc(h.label)}${h.study ? " 🎓" : ""}</td>
      <td class="num">${h.score}/${h.max}</td><td class="num">${pct(h.score, h.max)}%</td>
      <td class="num">${fmtTime(h.timeUsed || 0)}</td></tr>`).join("");

  show(`
    <h1>📈 สถิติของฉัน</h1>
    <div class="kpi-row">
      <div class="kpi"><div class="v">${hist.length}</div><div class="l">ครั้งที่ทำ</div></div>
      <div class="kpi"><div class="v">${totalQ}</div><div class="l">ข้อที่ทำไปแล้ว</div></div>
      <div class="kpi"><div class="v">${best}%</div><div class="l">คะแนนดีที่สุด</div></div>
      <div class="kpi"><div class="v">${pct(last.score, last.max)}%</div><div class="l">ครั้งล่าสุด</div></div>
    </div>
    <div class="panel"><h2 style="margin-top:0">กราฟพัฒนาการ (% คะแนนแต่ละครั้ง)</h2>
      <canvas id="chart" width="940" height="260"></canvas></div>
    <div class="panel"><h2 style="margin-top:0">ความแม่นยำรายหัวข้อ (สะสมทุกครั้ง · เรียงจากจุดอ่อน)</h2>
      <table class="stat"><tr><th>หัวข้อ</th><th>ถูก/ทั้งหมด</th><th></th><th>%</th></tr>${tagRows}</table></div>
    <div class="panel"><h2 style="margin-top:0">ประวัติการทำข้อสอบ</h2>
      <div style="overflow-x:auto"><table class="stat">
        <tr><th>วันที่</th><th>ชุด</th><th>คะแนน</th><th>%</th><th>เวลา</th></tr>${histRows}
      </table></div></div>
    ${exportImportHtml()}`);
  drawChart(hist);
  bindImport();
}

function drawChart(hist) {
  const cv = document.getElementById("chart");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  // คมชัดบนจอเรตินา/iPad: ตั้งความละเอียดภายในตาม devicePixelRatio + ความกว้างจริงของกล่อง
  const dpr = window.devicePixelRatio || 1;
  const W = cv.clientWidth || 940, H = 260, padL = 42, padR = 14, padT = 14, padB = 28;
  cv.width = Math.round(W * dpr);
  cv.height = Math.round(H * dpr);
  cv.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const css = getComputedStyle(document.documentElement);
  const cMuted = css.getPropertyValue("--muted").trim() || "#888";
  const cText = css.getPropertyValue("--text").trim() || "#222";
  const cBorder = css.getPropertyValue("--border").trim() || "#ddd";
  const cPrimary = css.getPropertyValue("--primary").trim() || "#4150b5";
  const cAccent = css.getPropertyValue("--accent").trim() || "#0e9488";
  ctx.clearRect(0, 0, W, H);
  ctx.font = '12px "IBM Plex Sans Thai Looped", "IBM Plex Sans", sans-serif';

  // เส้นกริดแนวนอนทุก 25%
  for (let v = 0; v <= 100; v += 25) {
    const y = padT + (H - padT - padB) * (1 - v / 100);
    ctx.strokeStyle = cBorder; ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
    ctx.fillStyle = cMuted; ctx.fillText(v + "%", 6, y + 4);
  }
  const pts = hist.map((h, i) => {
    const x = hist.length === 1 ? (padL + W - padR) / 2
      : padL + (W - padL - padR) * i / (hist.length - 1);
    const y = padT + (H - padT - padB) * (1 - pct(h.score, h.max) / 100);
    return { x, y, h };
  });
  // เส้น
  ctx.strokeStyle = cPrimary; ctx.lineWidth = 2.5; ctx.beginPath();
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();
  // จุด
  pts.forEach(p => {
    ctx.fillStyle = p.h.mode === "full" ? cAccent : cPrimary;
    ctx.beginPath(); ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2); ctx.fill();
  });
  // คำอธิบายใต้กราฟ — ใช้สีตัวอักษรหลัก (เข้ม) + จุดสีตามคำอธิบาย ให้อ่านชัด ไม่จาง
  ctx.font = '12.5px "IBM Plex Sans Thai Looped", "IBM Plex Sans", sans-serif';
  let lx = padL;
  const baseY = H - 7;
  ctx.fillStyle = cAccent; ctx.fillText("●", lx, baseY); lx += ctx.measureText("● ").width;
  ctx.fillStyle = cText; ctx.fillText("เต็มชุด  ", lx, baseY); lx += ctx.measureText("เต็มชุด   ").width;
  ctx.fillStyle = cPrimary; ctx.fillText("●", lx, baseY); lx += ctx.measureText("● ").width;
  ctx.fillStyle = cText; ctx.fillText("รายพาร์ท  —  เรียงตามลำดับครั้งที่ทำ", lx, baseY);
}

/* ---------- export / import ---------- */
function exportImportHtml() {
  return `
    <div class="panel"><h2 style="margin-top:0">สำรอง / ย้ายข้อมูล</h2>
      <p class="sub" style="margin-bottom:12px">ข้อมูลทั้งหมดอยู่ในเบราว์เซอร์เครื่องนี้เท่านั้น — Export เก็บไว้กันหาย หรือย้ายไปเครื่องอื่น</p>
      <button class="btn small" onclick="exportData()">⬇ Export ข้อมูล (.json)</button>
      <label class="btn small secondary" style="cursor:pointer">⬆ Import ข้อมูล<input type="file" id="importFile" accept=".json" style="display:none"></label>
    </div>`;
}
function exportData() {
  const data = {
    exportedAt: new Date().toISOString(),
    history: lsGet(LS.history, []), wrong: lsGet(LS.wrong, {}), marks: lsGet(LS.marks, {}),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "tuget-backup-" + new Date().toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
}
function bindImport() {
  const inp = document.getElementById("importFile");
  if (!inp) return;
  inp.addEventListener("change", e => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!Array.isArray(data.history)) throw new Error("bad format");
        if (!confirm("Import จะแทนที่ประวัติและสมุดข้อผิดปัจจุบัน — ยืนยันไหม?")) return;
        lsSet(LS.history, data.history);
        lsSet(LS.wrong, data.wrong || {});
        lsSet(LS.marks, data.marks || {});
        alert("Import สำเร็จ!");
        openStats();
      } catch (err) { alert("ไฟล์ไม่ถูกต้อง: " + err.message); }
    };
    reader.readAsText(f);
  });
}

/* ================= บุ๊กมาร์ก / โน้ตรายข้อ ================= */
function getMarks() { return lsGet(LS.marks, {}); }
function isMarked(qid) { return !!getMarks()[qid]; }
function getNote(qid) { const m = getMarks()[qid]; return m ? (m.note || "") : ""; }
function toggleMark(qid) {
  const marks = getMarks();
  if (marks[qid]) { if (!getNote(qid) || confirm("เอาออกจากบุ๊กมาร์ก? (โน้ตจะถูกลบด้วย)")) delete marks[qid]; else return isMarked(qid); }
  else marks[qid] = { note: "", at: new Date().toISOString() };
  lsSet(LS.marks, marks);
  return !!marks[qid];
}
function saveNote(qid, text) {
  const marks = getMarks();
  if (!marks[qid]) marks[qid] = { at: new Date().toISOString() };
  marks[qid].note = text;
  lsSet(LS.marks, marks);
}
// ปุ่มบุ๊กมาร์ก + ช่องโน้ต สำหรับแปะในหน้าเฉลย
function markBlockHTML(qid) {
  const on = isMarked(qid);
  return `<div class="mark-block">
    <button class="mark-btn ${on ? "on" : ""}" id="mb-${qid}" onclick="onToggleMark('${qid}')">${on ? "★ บุ๊กมาร์กแล้ว" : "☆ บุ๊กมาร์กข้อนี้"}</button>
    <div class="note-wrap" id="nw-${qid}" style="${on ? "" : "display:none"}">
      <textarea class="note-area" placeholder="โน้ตส่วนตัวของข้อนี้ (พิมพ์แล้วบันทึกอัตโนมัติ)" oninput="saveNote('${qid}', this.value)">${esc(getNote(qid))}</textarea>
    </div>
  </div>`;
}
function onToggleMark(qid) {
  const on = toggleMark(qid);
  const btn = document.getElementById("mb-" + qid);
  const nw = document.getElementById("nw-" + qid);
  if (btn) { btn.classList.toggle("on", on); btn.textContent = on ? "★ บุ๊กมาร์กแล้ว" : "☆ บุ๊กมาร์กข้อนี้"; }
  if (nw) nw.style.display = on ? "" : "none";
}

function openBookmarks() {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  const marks = getMarks();
  const ids = Object.keys(marks).filter(id => INDEX[id]);
  if (!ids.length) {
    show(`<h1>🔖 บุ๊กมาร์ก</h1>
      <div class="panel"><p class="empty">ยังไม่มีข้อที่บุ๊กมาร์กไว้<br>ในหน้าเฉลยของแต่ละข้อ กด "☆ บุ๊กมาร์กข้อนี้" เพื่อเก็บไว้ทบทวน พร้อมจดโน้ตได้</p></div>`);
    return;
  }
  // เรียงตามพาร์ท > ชุด
  ids.sort((a, b) => {
    const A = INDEX[a], B = INDEX[b];
    return PART_ORDER.indexOf(A.part) - PART_ORDER.indexOf(B.part) || A.set - B.set;
  });
  const items = ids.map(id => {
    const info = INDEX[id], q = info.q;
    const note = marks[id].note || "";
    const passage = q.passage ? `<details style="margin-bottom:8px"><summary style="cursor:pointer;color:var(--primary);font-size:.88rem">📖 ดู ${esc(q.passage.title)}</summary><div class="passage-box" style="margin-top:8px">${passageHTML(q.passage, quotedTerms(q.question))}</div></details>` : "";
    return `<div class="panel review-item ok">
      <div class="q-num">${PARTS[info.part].name} ชุด ${info.set}<span class="tag">${q.tag ? esc(q.tag) : ""}</span>
        <button class="mark-btn on" style="float:right" onclick="removeBookmark('${id}')">★ เอาออก</button></div>
      ${passage}
      <div class="q-text" style="font-size:.98rem">${q.question}</div>
      ${questionTHHTML(q)}
      ${choiceReviewHTML(q, null)}
      <div class="expl"><b>เฉลยอธิบาย:</b> ${q.explanation}</div>
      <div class="note-wrap" style="margin-top:10px">
        <textarea class="note-area" placeholder="โน้ตส่วนตัวของข้อนี้ (บันทึกอัตโนมัติ)" oninput="saveNote('${id}', this.value)">${esc(note)}</textarea>
      </div>
    </div>`;
  }).join("");
  show(`<h1>🔖 บุ๊กมาร์ก</h1>
    <p class="sub">${ids.length} ข้อที่เก็บไว้ทบทวน — แก้โน้ตได้ตลอด บันทึกอัตโนมัติ</p>
    ${items}`);
}
function removeBookmark(qid) {
  const marks = getMarks();
  delete marks[qid];
  lsSet(LS.marks, marks);
  openBookmarks();
}

/* ================= คลังคำศัพท์ (Vocab list) ================= */
// สร้างรายการคำศัพท์จากพาร์ท vocabulary ทุกชุด (คำหลัก + ความหมายไทย + ประโยคตัวอย่าง)
function buildVocabList() {
  const out = [];
  setsOf("vocabulary").forEach(set => {
    (BANK.vocabulary[set] || []).forEach(q => {
      let word;
      const u = q.question.match(/<u>(.+?)<\/u>/i);
      if (u) word = u[1];                        // syn: คำที่ขีดเส้นใต้
      else word = q.choices[q.answer];           // cloze: คำที่เป็นคำตอบ
      const meaning = (q.glosses && q.glosses[q.answer]) ? q.glosses[q.answer] : "";
      const example = q.question.replace(/<br>.*$/i, "").trim(); // ตัดคำสั่ง แต่คงไฮไลต์ <u> ไว้
      const exampleTH = q.questionTH || "";
      out.push({ word, meaning, example, exampleTH, set, type: q.type });
    });
  });
  out.sort((a, b) => a.word.toLowerCase().localeCompare(b.word.toLowerCase()));
  return out;
}
let _vocabCache = null;
function openVocabList() {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  _vocabCache = buildVocabList();
  show(`<h1>📒 คลังคำศัพท์</h1>
    <p class="sub">รวมคำศัพท์ ${_vocabCache.length} คำจากพาร์ท Vocabulary ทุกชุด พร้อมความหมายและประโยคตัวอย่าง</p>
    <div class="panel">
      <input type="text" id="vocabSearch" placeholder="🔍 ค้นหาคำหรือความหมาย..." oninput="renderVocabList(this.value)" style="max-width:100%">
      <button class="btn small" style="margin-top:10px" onclick="startFlashcards()">🎮 เล่นเกมทายคำแปล</button>
    </div>
    <div id="vocabListBox"></div>`);
  renderVocabList("");
}
function renderVocabList(term) {
  term = (term || "").toLowerCase().trim();
  const rows = _vocabCache.filter(e =>
    !term || e.word.toLowerCase().includes(term) || (e.meaning && e.meaning.toLowerCase().includes(term)));
  const box = document.getElementById("vocabListBox");
  if (!rows.length) { box.innerHTML = `<p class="empty">ไม่พบคำที่ค้นหา</p>`; return; }
  box.innerHTML = `<div class="panel" style="padding:8px 0">` + rows.map(e => `
    <div class="vocab-row">
      <div class="vocab-head"><b class="vocab-word">${esc(e.word)}</b> <span class="vocab-mean">${esc(e.meaning)}</span>
        <span class="vocab-set">ชุด ${e.set}</span></div>
      <details><summary>ดูประโยคตัวอย่าง</summary><div class="vocab-ex">${e.example}${e.exampleTH ? `<div class="vocab-ex-th">🇹🇭 ${e.exampleTH}</div>` : ""}</div></details>
    </div>`).join("") + `</div>`;
}

/* ---- มินิเกมทายคำแปล: โชว์คำอังกฤษ + ความหมายไทย 2 ตัวเลือก ---- */
let gameDeck = [], gIdx = 0, gScore = 0, gCur = null;
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}
function startFlashcards() {
  gameDeck = shuffle(_vocabCache.filter(e => e.meaning));
  gIdx = 0; gScore = 0;
  nextGameCard();
}
function nextGameCard() {
  if (!gameDeck.length) { openVocabList(); return; }
  if (gIdx >= gameDeck.length) { renderGameResult(); return; }
  const e = gameDeck[gIdx];
  // หา distractor: ความหมายของคำอื่นที่ไม่ซ้ำกับคำตอบ
  const pool = _vocabCache.filter(x => x.meaning && x.meaning !== e.meaning);
  const d = pool.length ? pool[Math.floor(Math.random() * pool.length)] : { meaning: "—" };
  let opts = [{ text: e.meaning, correct: true }, { text: d.meaning, correct: false }];
  if (Math.random() < 0.5) opts.reverse();
  gCur = { e, opts, picked: null };
  renderGameCard();
}
function renderGameCard() {
  const { e, opts, picked } = gCur;
  const answered = picked !== null;
  const optsHtml = opts.map((o, i) => {
    let cls = "game-opt";
    if (answered) {
      if (o.correct) cls += " correct";
      else if (i === picked) cls += " wrong";
    }
    return `<button class="${cls}" ${answered ? "" : `onclick="pickGame(${i})"`}>${esc(o.text)}</button>`;
  }).join("");
  let feedback = "";
  if (answered) {
    const ok = opts[picked].correct;
    feedback = `<div class="feedback ${ok ? "good" : "bad"}" style="max-width:520px;margin:14px auto 0">
      <b class="verdict">${ok ? "✔ ถูกต้อง!" : "✘ ยังไม่ถูก"}</b>
      <b>${esc(e.word)}</b> = ${esc(e.meaning)}</div>`;
  }
  show(`<h1>🎮 เกมทายคำแปล</h1>
    <p class="sub">ข้อ ${gIdx + 1} / ${gameDeck.length} · คะแนน ${gScore} — เลือกความหมายที่ถูกต้องของคำนี้</p>
    <div class="flashcard"><div class="fc-face"><div class="fc-word">${esc(gCur.e.word)}</div></div></div>
    <div class="game-opts">${optsHtml}</div>
    ${feedback}
    <div class="exam-nav" style="max-width:520px;margin:16px auto 0">
      <button class="btn secondary" onclick="openVocabList()">⬅ ออกจากเกม</button>
      ${answered ? `<button class="btn" onclick="gameNext()">${gIdx === gameDeck.length - 1 ? "ดูผล ▶" : "ข้อถัดไป ▶"}</button>` : ""}
    </div>`);
}
function pickGame(i) {
  if (gCur.picked !== null) return;
  gCur.picked = i;
  if (gCur.opts[i].correct) gScore++;
  renderGameCard();
}
function gameNext() { gIdx++; nextGameCard(); }
function renderGameResult() {
  const pctScore = pct(gScore, gameDeck.length);
  show(`<h1>🎮 จบเกม!</h1>
    <div class="panel score-hero">
      <div class="big">${gScore}<span class="of"> / ${gameDeck.length}</span></div>
      <div class="pct">${pctScore}% ทายถูก</div>
      <div style="margin-top:14px">
        <button class="btn" onclick="startFlashcards()">เล่นอีกครั้ง 🔁</button>
        <button class="btn secondary" onclick="openVocabList()">กลับคลังคำศัพท์</button>
      </div>
    </div>`);
}

/* ---------- กันปิดหน้าระหว่างทำข้อสอบ ---------- */
window.addEventListener("beforeunload", e => {
  if (S && !S.finished) { saveSession(); e.preventDefault(); e.returnValue = ""; }
});

/* ---------- init ---------- */
applyTheme();
applyFontScale();
// ปิดเมนูมือถืออัตโนมัติเมื่อกดลิงก์นำทาง (ยกเว้นปุ่มปรับฟอนต์/สลับธีม)
const _nav = document.getElementById("mainNav");
if (_nav) _nav.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn || btn.closest(".fs-control") || btn.id === "themeToggle") return;
  closeNav();
});
renderHome();
