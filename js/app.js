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
// หัวหน้าแบบ eyebrow (ป้ายเล็กสีหลัก) + ชื่อหน้า — ใช้ทั่วทุกหน้าย่อย
function pageHead(eyebrow, title) {
  return `<div class="page-head"><div class="page-eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1></div>`;
}

/* ---------- มาสคอตคู่หู: หมี + กระต่าย (neo-flat plushie) ----------
   สีตัวเป็น brand asset คงที่ (ครีม/ทอง อ่านออกทั้งโหมดสว่าง/มืด) — ไม่อินเวิร์ตตามธีม
   ดีไซน์: ทรงป้อมกลม ตาหยีพริ้ม ผ้าพันคอเขียว (ปลอกคอ + ชายห้อย) */
function mascotDuoSVG() {
  return `<svg viewBox="96 24 486 344" role="img" aria-label="มาสคอตหมีและกระต่ายของ ExamPrep" xmlns="http://www.w3.org/2000/svg">
    <circle cx="215" cy="205" r="118" fill="#f6ecda"/>
    <circle cx="460" cy="205" r="118" fill="#e2f0ea"/>
    <circle cx="130" cy="62" r="12" fill="none" stroke="#c66a50" stroke-width="5"/>
    <g stroke="#7a52c2" stroke-width="5" stroke-linecap="round"><line x1="340" y1="58" x2="360" y2="58"/><line x1="350" y1="48" x2="350" y2="68"/></g>
    <circle cx="345" cy="322" r="8" fill="#d6a85a"/>
    <circle cx="542" cy="120" r="6" fill="#2f8f73"/>
    <path d="M232 54 q9 -11 18 0 q9 11 18 0" fill="none" stroke="#2f8f73" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="215" cy="348" rx="84" ry="11" fill="#000000" opacity="0.06"/>
    <ellipse cx="183" cy="340" rx="20" ry="13" fill="#b8893f"/>
    <ellipse cx="247" cy="340" rx="20" ry="13" fill="#b8893f"/>
    <ellipse cx="215" cy="280" rx="90" ry="76" fill="#cda06a"/>
    <g transform="rotate(12 140 292)"><ellipse cx="140" cy="292" rx="18" ry="30" fill="#cda06a"/></g>
    <g transform="rotate(-12 290 292)"><ellipse cx="290" cy="292" rx="18" ry="30" fill="#cda06a"/></g>
    <ellipse cx="215" cy="292" rx="52" ry="50" fill="#e6cfa0"/>
    <circle cx="174" cy="120" r="27" fill="#cda06a"/>
    <circle cx="256" cy="120" r="27" fill="#cda06a"/>
    <circle cx="174" cy="115" r="14" fill="#ddb985"/>
    <circle cx="256" cy="115" r="14" fill="#ddb985"/>
    <circle cx="215" cy="180" r="68" fill="#cda06a"/>
    <ellipse cx="215" cy="202" rx="31" ry="24" fill="#efe0c2"/>
    <ellipse cx="215" cy="192" rx="9" ry="6.5" fill="#4a3a2a"/>
    <path d="M215 198 v6 M215 204 q-9 7 -16 1 M215 204 q9 7 16 1" fill="none" stroke="#4a3a2a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M193 174 Q203 165 213 174" fill="none" stroke="#3a2e22" stroke-width="3" stroke-linecap="round"/>
    <path d="M217 174 Q227 165 237 174" fill="none" stroke="#3a2e22" stroke-width="3" stroke-linecap="round"/>
    <circle cx="183" cy="193" r="10" fill="#e08e6e" opacity="0.32"/>
    <circle cx="247" cy="193" r="10" fill="#e08e6e" opacity="0.32"/>
    <path d="M209 250 L204 286 Q210 292 215 287 L215 250 Z" fill="#2f8f73"/>
    <path d="M215 250 L215 287 Q220 292 226 286 L221 250 Z" fill="#2a8169"/>
    <path d="M171 228 Q215 248 259 228 L263 242 Q215 266 167 242 Z" fill="#2f8f73"/>
    <rect x="205" y="240" width="20" height="15" rx="5" fill="#267a62"/>
    <ellipse cx="460" cy="350" rx="80" ry="11" fill="#000000" opacity="0.06"/>
    <ellipse cx="434" cy="342" rx="19" ry="12" fill="#e7ddc9"/>
    <ellipse cx="486" cy="342" rx="19" ry="12" fill="#e7ddc9"/>
    <ellipse cx="460" cy="282" rx="86" ry="76" fill="#f7f4ec"/>
    <g transform="rotate(14 390 294)"><ellipse cx="390" cy="294" rx="17" ry="29" fill="#f7f4ec"/></g>
    <g transform="rotate(-14 530 294)"><ellipse cx="530" cy="294" rx="17" ry="29" fill="#f7f4ec"/></g>
    <ellipse cx="460" cy="294" rx="48" ry="48" fill="#fffdf8"/>
    <g transform="rotate(-9 426 100)"><ellipse cx="426" cy="100" rx="18" ry="55" fill="#f7f4ec"/><ellipse cx="426" cy="104" rx="9" ry="40" fill="#f0b9a4"/></g>
    <g transform="rotate(11 496 100)"><ellipse cx="496" cy="100" rx="18" ry="55" fill="#f7f4ec"/><ellipse cx="496" cy="104" rx="9" ry="40" fill="#f0b9a4"/></g>
    <circle cx="460" cy="182" r="66" fill="#f7f4ec"/>
    <ellipse cx="460" cy="226" rx="38" ry="18" fill="#ece7d8" opacity="0.45"/>
    <ellipse cx="460" cy="198" rx="8" ry="6" fill="#e3a18d"/>
    <ellipse cx="457" cy="196" rx="2.5" ry="1.8" fill="#f4cdbf"/>
    <path d="M460 204 v5 M460 209 q-7 6 -12 1 M460 209 q7 6 12 1" fill="none" stroke="#c08a78" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M438 176 Q448 167 458 176" fill="none" stroke="#3a2e22" stroke-width="3" stroke-linecap="round"/>
    <path d="M462 176 Q472 167 482 176" fill="none" stroke="#3a2e22" stroke-width="3" stroke-linecap="round"/>
    <circle cx="428" cy="197" r="9" fill="#f3b3a0" opacity="0.45"/>
    <circle cx="492" cy="197" r="9" fill="#f3b3a0" opacity="0.45"/>
    <path d="M454 248 L449 284 Q455 290 460 285 L460 248 Z" fill="#2f8f73"/>
    <path d="M460 248 L460 285 Q465 290 471 284 L466 248 Z" fill="#2a8169"/>
    <path d="M416 226 Q460 246 504 226 L508 240 Q460 264 412 240 Z" fill="#2f8f73"/>
    <rect x="450" y="238" width="20" height="15" rx="5" fill="#267a62"/>
  </svg>`;
}

/* มาสคอตเดี่ยวสำหรับ empty state — who: 'rabbit'|'bear', mood: 'sleepy'|'happy' */
function mascotSpotSVG(who, mood) {
  who = who || 'rabbit'; mood = mood || 'sleepy';
  const R = who === 'rabbit';
  const body = R ? '#f7f4ec' : '#cda06a';
  const earIn = R ? '#f0b9a4' : '#ddb985';
  const belly = R ? '#fffdf8' : '#e6cfa0';
  const foot = R ? '#e7ddc9' : '#b8893f';
  const cheek = R ? '#f3b3a0' : '#e08e6e';
  const cheekOp = R ? '0.45' : '0.32';
  const mouthC = R ? '#c08a78' : '#4a3a2a';
  const bg = R ? '#e2f0ea' : '#f6ecda';
  const ears = R
    ? `<g transform="rotate(-9 74 46)"><ellipse cx="74" cy="44" rx="15" ry="38" fill="${body}"/><ellipse cx="74" cy="48" rx="7.5" ry="27" fill="${earIn}"/></g>
       <g transform="rotate(11 126 46)"><ellipse cx="126" cy="44" rx="15" ry="38" fill="${body}"/><ellipse cx="126" cy="48" rx="7.5" ry="27" fill="${earIn}"/></g>`
    : `<circle cx="66" cy="46" r="21" fill="${body}"/><circle cx="134" cy="46" r="21" fill="${body}"/><circle cx="66" cy="42" r="11" fill="${earIn}"/><circle cx="134" cy="42" r="11" fill="${earIn}"/>`;
  const snout = R ? '' : `<ellipse cx="100" cy="106" rx="24" ry="18" fill="#efe0c2"/>`;
  const nose = R
    ? `<ellipse cx="100" cy="104" rx="7.5" ry="5.5" fill="#e3a18d"/><ellipse cx="97" cy="102" rx="2.2" ry="1.6" fill="#f4cdbf"/>`
    : `<ellipse cx="100" cy="100" rx="8" ry="6" fill="#4a3a2a"/>`;
  let eyes, mouth, extra = '';
  if (mood === 'happy') {
    eyes = `<path d="M74 84 Q84 73 94 84" fill="none" stroke="#3a2e22" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M106 84 Q116 73 126 84" fill="none" stroke="#3a2e22" stroke-width="3.4" stroke-linecap="round"/>`;
    mouth = R
      ? `<path d="M88 112 Q100 124 112 112" fill="none" stroke="${mouthC}" stroke-width="2" stroke-linecap="round"/>`
      : `<path d="M84 110 Q100 124 116 110" fill="none" stroke="${mouthC}" stroke-width="2.4" stroke-linecap="round"/>`;
    extra = `<g stroke="#d6a85a" stroke-width="3" stroke-linecap="round"><line x1="152" y1="44" x2="152" y2="56"/><line x1="146" y1="50" x2="158" y2="50"/></g>
             <g stroke="#d6a85a" stroke-width="2.5" stroke-linecap="round"><line x1="48" y1="58" x2="48" y2="68"/><line x1="43" y1="63" x2="53" y2="63"/></g>`;
  } else {
    eyes = `<path d="M76 84 Q85 75 94 84" fill="none" stroke="#3a2e22" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M106 84 Q115 75 124 84" fill="none" stroke="#3a2e22" stroke-width="3.2" stroke-linecap="round"/>`;
    mouth = R
      ? `<path d="M100 109 v5 M100 114 q-6 5 -11 1 M100 114 q6 5 11 1" fill="none" stroke="${mouthC}" stroke-width="1.8" stroke-linecap="round"/>`
      : `<path d="M100 106 v6 M100 112 q-8 6 -14 1 M100 112 q8 6 14 1" fill="none" stroke="${mouthC}" stroke-width="2.2" stroke-linecap="round"/>`;
  }
  const cy = R ? 104 : 100;
  return `<svg viewBox="0 0 200 210" role="img" aria-label="มาสคอต${R ? 'กระต่าย' : 'หมี'}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="112" r="94" fill="${bg}"/>
    <ellipse cx="100" cy="197" rx="62" ry="8" fill="#000000" opacity="0.06"/>
    <ellipse cx="82" cy="191" rx="15" ry="10" fill="${foot}"/><ellipse cx="118" cy="191" rx="15" ry="10" fill="${foot}"/>
    <ellipse cx="100" cy="142" rx="68" ry="58" fill="${body}"/>
    <g transform="rotate(13 48 152)"><ellipse cx="48" cy="152" rx="14" ry="24" fill="${body}"/></g>
    <g transform="rotate(-13 152 152)"><ellipse cx="152" cy="152" rx="14" ry="24" fill="${body}"/></g>
    <ellipse cx="100" cy="152" rx="40" ry="40" fill="${belly}"/>
    ${ears}
    <circle cx="100" cy="88" r="52" fill="${body}"/>
    ${snout}
    <path d="M94 146 L90 176 Q95 182 100 177 L100 146 Z" fill="#2f8f73"/>
    <path d="M100 146 L100 177 Q105 182 110 176 L106 146 Z" fill="#2a8169"/>
    <path d="M66 126 Q100 144 134 126 L137 137 Q100 158 63 137 Z" fill="#2f8f73"/>
    <rect x="92" y="136" width="16" height="12" rx="4" fill="#267a62"/>
    ${nose}
    ${mouth}
    ${eyes}
    <circle cx="72" cy="${cy}" r="9" fill="${cheek}" opacity="${cheekOp}"/><circle cx="128" cy="${cy}" r="9" fill="${cheek}" opacity="${cheekOp}"/>
    ${extra}
  </svg>`;
}

/* ---------- มาสคอตโต้ตอบเวลาจิ้ม/คลิก ---------- */
// ครอบ SVG มาสคอตให้คลิกได้ + มีเลเยอร์เอฟเฟกต์ (หัวใจ/บับเบิล)
function mascotWrap(art, who, mood) {
  return `<span class="mascot" role="button" tabindex="0" aria-label="จิ้มมาสคอตเล่น" data-who="${who}" data-mood="${mood}"
    onclick="mascotPoke(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();mascotPoke(this);}"
    ><span class="mascot-fx"></span><span class="mascot-art">${art}</span></span>`;
}
const MASCOT_SAY = ["สู้ๆ นะ!", "เก่งมาก! 💪", "ทำได้อยู่แล้ว!", "550+ รออยู่!", "ไปลุยข้อสอบกัน!", "จิ้มเบาๆ สิ~", "เป็นกำลังใจให้นะ", "พักสายตาบ้างน้า"];
const MASCOT_DIZZY = ["เวียนหัวแล้ว 😵", "โอ๊ย จั๊กจี้!", "พอก่อนน้า~"];
function mascotPoke(el) {
  const fx = el.querySelector(".mascot-fx"), art = el.querySelector(".mascot-art");
  if (!fx || !art) return;
  // เด้งตัว
  el.classList.remove("poke"); void el.offsetWidth; el.classList.add("poke");
  clearTimeout(el._t1); el._t1 = setTimeout(() => el.classList.remove("poke"), 600);
  // บับเบิลคำพูด (ทุก 5 ครั้ง = มึน)
  el._pokes = (el._pokes || 0) + 1;
  const say = (el._pokes % 5 === 0 ? MASCOT_DIZZY : MASCOT_SAY);
  const b = document.createElement("span");
  b.className = "mascot-bubble";
  b.textContent = say[Math.floor(Math.random() * say.length)];
  fx.appendChild(b); setTimeout(() => b.remove(), 1500);
  // หัวใจ/ดาวลอยขึ้น
  const icons = ["💚", "⭐", "✨", "💛"];
  for (let i = 0; i < 3; i++) {
    const h = document.createElement("span");
    h.className = "mascot-heart";
    h.textContent = icons[Math.floor(Math.random() * icons.length)];
    h.style.left = (28 + Math.random() * 44) + "%";
    h.style.animationDelay = (i * 0.08) + "s";
    fx.appendChild(h); setTimeout(() => h.remove(), 1100);
  }
  // สลับหน้าเป็นดีใจชั่วครู่ (เฉพาะมาสคอตเดี่ยว — duo เป็นภาพรวมเลยแค่เด้ง)
  const who = el.dataset.who, mood = el.dataset.mood;
  if ((who === "rabbit" || who === "bear") && !el._reacting) {
    el._reacting = true;
    art.innerHTML = mascotSpotSVG(who, "happy");
    clearTimeout(el._t2);
    el._t2 = setTimeout(() => { art.innerHTML = mascotSpotSVG(who, mood); el._reacting = false; }, 1100);
  }
}

/* ---------- ไอคอนสัตว์ลายเส้นในการ์ด "เริ่มฝึก" (สีดึงจาก currentColor = --tile) ---------- */
function tileAnimalSVG(name) {
  const A = {
    shark: `<path d="M8 25 C15 16 31 15 41 26"/><path d="M8 25 L3 19 L5 26 L3 33 L11 30"/><path d="M41 26 C34 33 20 34 11 30"/><path d="M21 17 L25 10 L30 18"/><path d="M22 31 L20 39 L29 32"/><path d="M32 23 l-1.5 5"/><path d="M35 22.5 l-1.5 5"/><path d="M41 28 q-4 2 -7 1"/><circle cx="37" cy="24" r="1.4" fill="currentColor" stroke="none"/>`,
    puffer: `<circle cx="23" cy="25" r="10"/><path d="M23 15 v-3.5"/><path d="M23 35 v3.5"/><path d="M16 18 l-2.5 -2.5"/><path d="M16 32 l-2.5 2.5"/><path d="M30 18 l2.5 -2.5"/><path d="M30 32 l2.5 2.5"/><path d="M13 25 h-3.5"/><path d="M33 22 L40 19 L40 31 L33 28"/><circle cx="19" cy="22.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="15.5" cy="27.5" r="1.8"/>`,
    elephant: `<path d="M16 15 Q24 11 32 15 C33 24 30 30 24 30 C18 30 15 24 16 15 Z"/><path d="M16 15 C8 13 6 25 14 28 C16 29 17 25 16 22"/><path d="M32 15 C40 13 42 25 34 28 C32 29 31 25 32 22"/><path d="M24 29 C24 35 21 37 22 41 C22.5 42 24.5 42 24 40"/><path d="M20 31 l-1 3"/><path d="M28 31 l1 3"/><circle cx="20" cy="22" r="1.4" fill="currentColor" stroke="none"/><circle cx="28" cy="22" r="1.4" fill="currentColor" stroke="none"/>`,
    sauropod: `<path d="M13 33 C9 27 14 23 22 23 C30 23 35 27 32 33"/><path d="M17 25 C10 19 12 9 18 7"/><path d="M18 7 C15 6 14 9 16 11 C17 12 20 11 20 9 C20 7.5 19 7 18 7 Z"/><path d="M32 31 C40 30 43 22 39 17"/><path d="M19 33 v6"/><path d="M28 33 v6"/><circle cx="16.5" cy="9" r="1.1" fill="currentColor" stroke="none"/>`,
    croc: `<path d="M6 25 C4 23 6 21 9 21 L22 20 C25 18 28 18 29 21"/><path d="M29 21 C33 21 37 23 40 27"/><path d="M30 21 l1.5 -2 l1.5 2"/><path d="M34 22 l1.5 -2 l1.5 2"/><path d="M40 27 C44 28 44 33 40 35 C39 35 38.5 34 39 32"/><path d="M6 25 C6 27 7 29 10 29 L22 29"/><path d="M22 29 C28 31 33 31 37 29"/><path d="M9 26 L11 28 L13 26 L15 28 L17 26 L19 28 L21 26"/><path d="M24 30.5 l-1.5 4"/><path d="M33 30 l1.5 4"/><circle cx="26" cy="20" r="2"/><circle cx="26" cy="20" r="0.9" fill="currentColor" stroke="none"/><circle cx="8.5" cy="23" r="0.9" fill="currentColor" stroke="none"/>`,
    dog: `<path d="M18 13 C11 11 8 19 11 27 C12 29 16 28 17 23"/><path d="M30 13 C37 11 40 19 37 27 C36 29 32 28 31 23"/><circle cx="24" cy="20" r="9"/><path d="M19 24 Q24 29 29 24"/><path d="M24 24 V26"/><path d="M24 26 Q21.5 27.5 20 26"/><path d="M24 26 Q26.5 27.5 28 26"/><circle cx="24" cy="22" r="2" fill="currentColor" stroke="none"/><circle cx="20" cy="18.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="28" cy="18.5" r="1.5" fill="currentColor" stroke="none"/>`,
    ray: `<path d="M24 12 C33 14 39 23 39 27 C33 25 29 29 24 31 C19 29 15 25 9 27 C9 23 15 14 24 12 Z"/><path d="M24 31 C24 38 25 42 27 45"/><circle cx="20" cy="19" r="1.3" fill="currentColor" stroke="none"/><circle cx="28" cy="19" r="1.3" fill="currentColor" stroke="none"/>`,
  };
  const p = A[name];
  if (!p) return "";
  return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}

function goHome() {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  renderHome();
}

/* ---------- HOME ---------- */
// streak: จำนวนวันต่อเนื่องที่มีการทำข้อสอบ (นับถอยจากวันนี้/เมื่อวาน)
function computeStreak(hist) {
  if (!hist.length) return 0;
  const key = d => d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
  const set = new Set(hist.map(h => key(new Date(h.date))));
  const d = new Date();
  if (!set.has(key(d))) { d.setDate(d.getDate() - 1); if (!set.has(key(d))) return 0; }
  let streak = 0;
  while (set.has(key(d))) { streak++; d.setDate(d.getDate() - 1); }
  return streak;
}
function lockedExam(name) {
  alert(name + " กำลังพัฒนาอยู่ 🚧\nตอนนี้เปิดให้ฝึก TU-GET ก่อนนะครับ");
}

function renderHome() {
  const saved = lsGet(LS.session, null);
  const wrongCount = Object.keys(lsGet(LS.wrong, {})).length;
  const markCount = Object.keys(lsGet(LS.marks, {})).length;
  const hist = lsGet(LS.history, []);
  const nm = getName();
  const hello = nm
    ? `${greeting()}, <b>${esc(nm)}</b> 👋 <a href="javascript:void(0)" onclick="promptName()" class="name-edit">เปลี่ยนชื่อ</a>`
    : `${greeting()} 👋 <a href="javascript:void(0)" onclick="promptName()" class="name-edit">ตั้งชื่อที่อยากให้เว็บเรียก</a>`;

  // แถบทำต่อ (ถ้ามี session ค้าง)
  let resumeBar = "";
  if (saved) {
    const answered = Object.keys(saved.answers || {}).length;
    resumeBar = `
      <div class="resume-bar" onclick="resumeSession()">
        <div class="icon"><i class="ti ti-player-pause"></i></div>
        <div class="rb-text"><b>ทำต่อจากที่ค้างไว้</b>
          <small>${esc(sessionLabel(saved))} — ตอบแล้ว ${answered} ข้อ${saved.remain != null ? " · เหลือ " + fmtTime(saved.remain) : ""}</small></div>
        <a href="javascript:void(0)" onclick="event.stopPropagation();discardSession()" class="rb-del">ลบทิ้ง</a>
        <span class="badge">ไปต่อ <i class="ti ti-chevron-right"></i></span>
      </div>`;
  }

  // สัปดาห์นี้ + ล่าสุด (เมื่อมีประวัติ)
  let weekHtml = "";
  if (hist.length) {
    const weekAgo = Date.now() - 7 * 86400000;
    const weekHist = hist.filter(h => new Date(h.date).getTime() >= weekAgo);
    const avgWeek = weekHist.length ? Math.round(weekHist.reduce((s, h) => s + pct(h.score, h.max), 0) / weekHist.length) : 0;
    const streak = computeStreak(hist);
    const recent = hist.slice(-4).reverse().map(h => {
      const p = pct(h.score, h.max);
      return `<div class="recent-row" onclick="openStats()">
        <div><b>${esc(h.label)}</b><div class="rmeta">${fmtDate(h.date)}</div></div>
        <div style="text-align:right"><div class="rscore" style="color:${barColor(p)}">${p}%</div><div class="rmeta">${h.score / PTS} / ${h.max / PTS} ข้อ</div></div>
      </div>`;
    }).join("");
    weekHtml = `
      <div class="home-cols">
        <div>
          <div class="section-label">สัปดาห์นี้ · this week</div>
          <div class="week-list">
            <div class="week-row"><span><i class="ti ti-checkbox" style="color:var(--primary)"></i> ทำข้อสอบ</span><span class="wv">${weekHist.length} ครั้ง</span></div>
            <div class="week-row"><span><i class="ti ti-flame" style="color:var(--accent)"></i> ทำต่อเนื่อง</span><span class="wv">${streak} วัน</span></div>
            <div class="week-row"><span><i class="ti ti-target-arrow" style="color:var(--success)"></i> คะแนนเฉลี่ย</span><span class="wv">${avgWeek}%</span></div>
          </div>
        </div>
        <div>
          <div class="section-label">ล่าสุด · recent</div>
          <div class="recent-list">${recent}</div>
        </div>
      </div>`;
  }

  show(`
    <section class="home-hero">
      <div class="hh-text">
        <p class="hi">${hello}</p>
        <span class="eyebrow"><i class="ti ti-sparkles"></i> ENGLISH EXAM PLATFORM</span>
        <h1>เตรียมสอบอย่างมีเป้าหมาย<br><span class="acc">สอบผ่านอย่างมั่นใจ</span></h1>
        <p class="lead">ฝึกแนวข้อสอบจริง จับเวลา เกมคำศัพท์ และบทอ่าน พร้อมเฉลยอธิบายภาษาไทยทุกข้อ</p>
      </div>
      <div class="hh-art">${mascotWrap(mascotDuoSVG(), 'duo', 'sleepy')}</div>
    </section>

    ${resumeBar}

    <div class="section-label">เลือกข้อสอบ · your exam</div>
    <div class="exam-card featured">
      <div class="ec-top">
        <div class="ec-icon"><i class="ti ti-clipboard-text"></i></div>
        <span class="ec-badge">พร้อมใช้งาน</span>
      </div>
      <h3>TU-GET</h3>
      <div class="ec-sub">Thammasat University General English Test (PBT)</div>
      <div class="skill-pills">
        <span class="sp" onclick="openSetup('structure')">Structure</span>
        <span class="sp" onclick="openSetup('vocabulary')">Vocabulary</span>
        <span class="sp" onclick="openSetup('reading')">Reading</span>
      </div>
      <div class="ec-foot">
        <span class="ec-target"><i class="ti ti-target-arrow"></i> เป้าหมาย 550+ คะแนน · ฝึกได้ 900 ข้อ</span>
        <button class="ec-cta" onclick="openSetup('full')">เริ่มฝึกเต็มชุด <i class="ti ti-arrow-right"></i></button>
      </div>
    </div>
    <div class="exam-locked-grid">
      <div class="exam-card locked" onclick="lockedExam('IELTS')">
        <div class="ec-top"><div class="ec-icon"><i class="ti ti-world"></i></div><span class="ec-badge lock"><i class="ti ti-lock"></i> เร็วๆ นี้</span></div>
        <h3>IELTS</h3><div class="ec-sub">International English Language Testing System</div>
      </div>
      <div class="exam-card locked" onclick="lockedExam('TOEFL')">
        <div class="ec-top"><div class="ec-icon"><i class="ti ti-school"></i></div><span class="ec-badge lock"><i class="ti ti-lock"></i> เร็วๆ นี้</span></div>
        <h3>TOEFL</h3><div class="ec-sub">Test of English as a Foreign Language</div>
      </div>
    </div>

    <div class="section-label" style="margin-top:22px">เริ่มฝึก · start practicing</div>
    <div class="action-grid">
      <div class="action-tile" style="--tile:#2f6aa8" onclick="openSetup('full')"><div class="at-icon"><i class="ti ti-clipboard-text"></i></div><div class="at-animal">${tileAnimalSVG('shark')}</div><b>ทำข้อสอบเต็มชุด</b><small>จับเวลาเสมือนจริง</small></div>
      <div class="action-tile" style="--tile:#7a52c2" onclick="openVocabList()"><div class="at-icon"><i class="ti ti-cards"></i></div><div class="at-animal">${tileAnimalSVG('puffer')}</div><b>คลังคำศัพท์</b><small>เกมทาย + Flashcard</small></div>
      <div class="action-tile" style="--tile:var(--success)" onclick="openTagPractice()"><div class="at-icon"><i class="ti ti-target-arrow"></i></div><div class="at-animal">${tileAnimalSVG('elephant')}</div><b>ฝึกแยกหัวข้อ</b><small>เจาะจุดอ่อน</small></div>
      <div class="action-tile" style="--tile:var(--accent)" onclick="openStats()"><div class="at-icon"><i class="ti ti-chart-line"></i></div><div class="at-animal">${tileAnimalSVG('sauropod')}</div><b>ความก้าวหน้า</b><small>คะแนน + จุดอ่อน</small></div>
      <div class="action-tile" style="--tile:var(--danger)" onclick="openWrongBank()"><div class="at-icon"><i class="ti ti-refresh"></i></div><div class="at-animal">${tileAnimalSVG('croc')}</div><b>สมุดข้อผิด</b><small>${wrongCount} ข้อค้างอยู่</small></div>
      <div class="action-tile" style="--tile:var(--primary)" onclick="openBookmarks()"><div class="at-icon"><i class="ti ti-bookmark"></i></div><div class="at-animal">${tileAnimalSVG('dog')}</div><b>บุ๊กมาร์ก</b><small>${markCount} ข้อ</small></div>
      <div class="action-tile" style="--tile:#6a5e8a" onclick="openPrintSetup()"><div class="at-icon"><i class="ti ti-printer"></i></div><div class="at-animal">${tileAnimalSVG('ray')}</div><b>พิมพ์ / บันทึก PDF</b><small>ข้อสอบฉบับกระดาษ</small></div>
    </div>

    ${weekHtml}`);
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
  const cfg = { mode: t === "full" ? "full" : "part", selections, study: setupState.study };
  // โหมดฝึก (ไม่จับเวลา) เข้าทำเลย · โหมดสอบจับเวลา แสดงหน้าอินโทรก่อน
  if (cfg.study) { startSession(cfg); }
  else { pendingExam = cfg; renderExamIntro(cfg); }
}

/* ---------- หน้าอินโทรก่อนเริ่มสอบ ---------- */
let pendingExam = null;
function renderExamIntro(cfg) {
  const isFull = cfg.mode === "full";
  const part = isFull ? null : PARTS[cfg.selections[0].part];
  const count = isFull ? 100 : part.count;
  const mins = isFull ? 180 : Math.round(part.time / 60);
  const perQ = Math.round(mins * 60 / count);
  const label = isFull ? "ทำข้อสอบเต็มชุด" : (part.name + " ชุดที่ " + cfg.selections[0].set);
  show(`
    <div class="exam-intro">
      <div class="ei-icon"><i class="ti ti-clipboard-text"></i></div>
      <h1>${esc(label)}</h1>
      <p class="sub">${count} ข้อ · จับเวลา ${mins} นาที · ส่งแล้วดูเฉลยได้ทันที</p>
      <div class="panel ei-tips">
        <div class="section-label">ก่อนเริ่มทำ</div>
        <div class="ei-tip"><span class="ei-n">1</span><span>อ่านโจทย์และบทความให้ครบก่อนเลือกคำตอบ</span></div>
        <div class="ei-tip"><span class="ei-n">2</span><span>ใช้แผงเลขข้อด้านบนข้ามไป-มาได้ และติดธงข้อที่ไม่มั่นใจไว้กลับมาดู</span></div>
        <div class="ei-tip"><span class="ei-n">3</span><span>บริหารเวลา ~${perQ} วินาทีต่อข้อ</span></div>
        <div class="ei-tip"><span class="ei-n">4</span><span>หมดเวลาระบบส่งให้อัตโนมัติ — หรือกด "ส่งคำตอบ" เองได้ตลอด</span></div>
      </div>
      <button class="btn ei-start" onclick="startExamFromIntro()">เริ่มทำข้อสอบ <i class="ti ti-arrow-right"></i></button>
      <button class="btn secondary" onclick="renderSetup()">ย้อนกลับ</button>
    </div>`);
}
function startExamFromIntro() {
  if (!pendingExam) return;
  const cfg = pendingExam; pendingExam = null;
  startSession(cfg);
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
  if (q.passage) { renderReadingScreen(); return; }   // Reading = โชว์ทุกคำถามของบทความเรียงกัน
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
    return `<div class="${cls}" ${click}><span class="no">${String.fromCharCode(65 + i)}</span><span>${c}</span></div>`;
  }).join("");

  let feedback = "";
  if (locked) {
    const ok = picked === q.answer;
    feedback = `<div class="feedback ${ok ? "good" : "bad"}">
      <b class="verdict">${ok ? "✔ ถูกต้อง!" : "✘ ยังไม่ถูก — เฉลยคือข้อ " + String.fromCharCode(65 + q.answer)}</b>
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

  document.getElementById("qArea").innerHTML = `<div class="single-col">${qCardHtml}${navHtml}</div>`;
  renderPalette();
}

/* ---------- Reading: บทความซ้าย + ทุกคำถามของบทความเรียงกันทางขวา ---------- */
// ช่วง index ของข้อที่ใช้ passage เดียวกับข้อปัจจุบัน (ข้อในบทความเดียวกันอยู่ติดกัน)
function readingGroup() {
  const p = S.items[S.idx].q.passage;
  let start = S.idx, end = S.idx;
  while (start > 0 && S.items[start - 1].q.passage === p) start--;
  while (end < S.items.length - 1 && S.items[end + 1].q.passage === p) end++;
  return { p, start, end };
}
function readingTerms(g) {
  let t = [];
  for (let i = g.start; i <= g.end; i++) t = t.concat(quotedTerms(S.items[i].q.question));
  return t;
}
// เนื้อหาในการ์ดคำถาม 1 ข้อ (ใช้ตอนเรนเดอร์ครั้งแรกและอัปเดต in-place)
function readingCardInner(idx) {
  const it = S.items[idx], q = it.q, total = S.items.length;
  const picked = S.answers[q.id];
  const locked = S.study && S.locked[q.id];
  const choices = q.choices.map((c, i) => {
    let cls = "choice";
    if (locked) { cls += " locked"; if (i === q.answer) cls += " correct"; else if (i === picked) cls += " wrong"; }
    else if (i === picked) cls += " picked";
    const click = locked ? "" : `onclick="pickReading(${idx},${i})"`;
    return `<div class="${cls}" ${click}><span class="no">${String.fromCharCode(65 + i)}</span><span>${c}</span></div>`;
  }).join("");
  let feedback = "";
  if (locked) {
    const ok = picked === q.answer;
    feedback = `<div class="feedback ${ok ? "good" : "bad"}"><b class="verdict">${ok ? "✔ ถูกต้อง!" : "✘ ยังไม่ถูก — เฉลยคือข้อ " + String.fromCharCode(65 + q.answer)}</b>${q.explanation}</div>`;
  }
  const flagged = S.flags[q.id];
  return `<div class="q-num">ข้อ ${idx + 1} / ${total}<span class="tag">${esc(PARTS[it.part].name)}${q.tag ? " · " + esc(q.tag) : ""}</span>
      <button class="flag-mini ${flagged ? "on" : ""}" onclick="toggleFlagAt(${idx})" title="ติดธงไว้ดูทีหลัง">${flagged ? "🚩" : "🏳"}</button></div>
    <div class="q-text">${q.question}</div>${choices}${feedback}`;
}
function renderReadingScreen() {
  const g = readingGroup(), total = S.items.length;
  let cards = "";
  for (let i = g.start; i <= g.end; i++) cards += `<div class="q-card reading-q-card" id="qc-${i}">${readingCardInner(i)}</div>`;
  const passageInner = passageParasHTML(g.p, readingTerms(g));
  document.getElementById("qArea").innerHTML = `
    <div class="reading-body">
      <div class="reading-passage">
        <div class="passage-wrap">
          <div class="passage-hd">
            <span><i class="ti ti-file-text"></i> ${esc(g.p.title)}</span>
            <span class="scroll-hint"><i class="ti ti-arrows-vertical"></i> เลื่อนเพื่ออ่าน</span>
          </div>
          <div class="passage-box reading">${passageInner}</div>
        </div>
      </div>
      <div class="reading-q">
        ${cards}
        <div class="exam-nav">
          <button class="btn secondary" onclick="navPassage(-1)" ${g.start === 0 ? "disabled" : ""}>◀ ก่อนหน้า</button>
          ${g.end === total - 1
      ? `<button class="btn" onclick="trySubmit()">ส่งคำตอบ ✔</button>`
      : `<button class="btn" onclick="navPassage(1)">บทความถัดไป ▶</button>`}
        </div>
      </div>
    </div>`;
  renderPalette();
}
function pickReading(idx, ci) {
  const q = S.items[idx].q;
  S.answers[q.id] = ci;
  if (S.study) {
    S.locked[q.id] = true;
    if (S.mode === "retry") updateWrongStreak(q.id, ci === q.answer);
    else if (ci !== q.answer) addToWrongBank(q.id);
  }
  saveSession();
  const card = document.getElementById("qc-" + idx);   // อัปเดตเฉพาะการ์ดนั้น ไม่ re-render ทั้งหน้า (กัน scroll เด้ง)
  if (card) card.innerHTML = readingCardInner(idx);
  renderPalette();
}
function toggleFlagAt(idx) {
  const q = S.items[idx].q;
  S.flags[q.id] = !S.flags[q.id];
  saveSession();
  const card = document.getElementById("qc-" + idx);
  if (card) card.innerHTML = readingCardInner(idx);
  renderPalette();
}
function navPassage(dir) {
  const g = readingGroup();
  S.idx = Math.min(S.items.length - 1, Math.max(0, dir > 0 ? g.end + 1 : g.start - 1));
  saveSession(); renderQuestion();
}

function renderPalette() {
  const grid = document.getElementById("palGrid");
  if (!grid) return;
  // ไฮไลต์ "ปัจจุบัน" ทั้งกลุ่มข้อในบทความเดียวกัน (Reading) หรือข้อเดียว (อื่นๆ)
  let gs = S.idx, ge = S.idx;
  const cp = S.items[S.idx].q.passage;
  if (cp) {
    while (gs > 0 && S.items[gs - 1].q.passage === cp) gs--;
    while (ge < S.items.length - 1 && S.items[ge + 1].q.passage === cp) ge++;
  }
  grid.innerHTML = S.items.map((it, i) => {
    let cls = "pal-btn";
    if (S.answers[it.q.id] != null) cls += " answered";
    if (S.flags[it.q.id]) cls += " flagged";
    if (i >= gs && i <= ge) cls += " current";
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
function jumpQ(i) { S.idx = i; saveSession(); renderQuestion(); const el = document.getElementById("qc-" + i); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" }); }
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
    show(`${pageHead("ทบทวน · review", "สมุดข้อผิด")}<p class="sub">ข้อที่ตอบผิดจะถูกเก็บเข้าคลังอัตโนมัติ — ตอบถูก 2 ครั้งติดจึงหลุดจากคลัง</p>
      <div class="panel"><div class="mascot-spot">${mascotWrap(mascotSpotSVG('rabbit', 'happy'), 'rabbit', 'happy')}</div><p class="empty">ยังไม่มีข้อผิดค้างอยู่ 🎉<br>ไปทำข้อสอบก่อน แล้วข้อที่พลาดจะมารออยู่ที่นี่</p></div>`);
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
    ${pageHead("ทบทวน · review", "สมุดข้อผิด")}
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
  let html = `${pageHead("เจาะจุดอ่อน", "ฝึกแยกตามหัวข้อ")}
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
    show(`${pageHead("TU-GET PROGRESS", "สถิติของฉัน")}
      <div class="panel"><div class="mascot-spot">${mascotWrap(mascotSpotSVG('bear', 'sleepy'), 'bear', 'sleepy')}</div><p class="empty">ยังไม่มีประวัติการทำข้อสอบ<br>ทำข้อสอบชุดแรกก่อน แล้วกราฟพัฒนาการจะแสดงที่นี่</p></div>
      ${exportImportHtml()}`);
    bindImport();
    return;
  }

  const best = Math.max(...hist.map(h => pct(h.score, h.max)));
  const last = hist[hist.length - 1];
  const totalQ = hist.reduce((s, h) => s + h.max / PTS, 0);

  // เทียบครั้งล่าสุดกับครั้งก่อนหน้า
  let lastDelta = "";
  if (hist.length >= 2) {
    const d = pct(last.score, last.max) - pct(hist[hist.length - 2].score, hist[hist.length - 2].max);
    lastDelta = `<div class="kpi-delta ${d >= 0 ? "up" : "down"}">${d >= 0 ? "▲ +" : "▼ "}${d}% จากครั้งก่อน</div>`;
  }
  // ความแม่นยำสะสมรายพาร์ท → โปรไฟล์ทักษะ (radar)
  const partAgg = {};
  hist.forEach(h => Object.keys(h.perPart || {}).forEach(p => {
    if (!partAgg[p]) partAgg[p] = { got: 0, max: 0 };
    partAgg[p].got += h.perPart[p].got; partAgg[p].max += h.perPart[p].max;
  }));
  const radarData = PART_ORDER.filter(p => partAgg[p] && partAgg[p].max > 0)
    .map(p => ({ label: PARTS[p].name, pct: pct(partAgg[p].got, partAgg[p].max) }));
  let skillPanel = "";
  if (radarData.length >= 3) {
    skillPanel = `<div class="panel"><h2 style="margin-top:0">โปรไฟล์ทักษะ (ความแม่นยำสะสมรายพาร์ท)</h2>
      <canvas id="radar" width="360" height="300" style="max-width:380px;display:block;margin:0 auto"></canvas></div>`;
  } else if (radarData.length) {
    const bars = radarData.map(d => `<div class="pbar"><div class="pbar-top"><span>${esc(d.label)}</span><span class="num">${d.pct}%</span></div><div class="bar-track"><i style="width:${d.pct}%;background:${barColor(d.pct)}"></i></div></div>`).join("");
    skillPanel = `<div class="panel"><h2 style="margin-top:0">ความแม่นยำรายพาร์ท</h2><div class="part-bars">${bars}</div></div>`;
  }

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
    ${pageHead("TU-GET PROGRESS", "สถิติของฉัน")}
    <div class="kpi-row">
      <div class="kpi"><div class="v">${hist.length}</div><div class="l">ครั้งที่ทำ</div></div>
      <div class="kpi"><div class="v">${totalQ}</div><div class="l">ข้อที่ทำไปแล้ว</div></div>
      <div class="kpi"><div class="v">${best}%</div><div class="l">คะแนนดีที่สุด</div></div>
      <div class="kpi"><div class="v">${pct(last.score, last.max)}%</div><div class="l">ครั้งล่าสุด</div>${lastDelta}</div>
    </div>
    ${skillPanel}
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
  if (radarData.length >= 3) drawRadar("radar", radarData);
  bindImport();
}

// กราฟ radar โปรไฟล์ทักษะ (N แกน, N>=3)
function drawRadar(id, data) {
  const cv = document.getElementById(id);
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const W = cv.clientWidth || 360, H = 300;
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const css = getComputedStyle(document.documentElement);
  const cBorder = css.getPropertyValue("--border").trim() || "#ddd";
  const cMuted = css.getPropertyValue("--muted").trim() || "#888";
  const cText = css.getPropertyValue("--text").trim() || "#222";
  const cPrimary = css.getPropertyValue("--primary").trim() || "#2f8f73";
  ctx.clearRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2 + 4, R = Math.min(W, H) / 2 - 48, N = data.length;
  const ang = i => -Math.PI / 2 + i * 2 * Math.PI / N;
  const base = '"IBM Plex Sans", "Noto Sans Thai Looped", sans-serif';
  // วงกริด
  for (let r = 1; r <= 4; r++) {
    ctx.strokeStyle = cBorder; ctx.beginPath();
    for (let i = 0; i <= N; i++) { const a = ang(i % N), rr = R * r / 4, x = cx + rr * Math.cos(a), y = cy + rr * Math.sin(a); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
    ctx.closePath(); ctx.stroke();
  }
  // แกน + ป้ายชื่อ + %
  data.forEach((d, i) => {
    const a = ang(i);
    ctx.strokeStyle = cBorder; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a)); ctx.stroke();
    const lx = cx + (R + 22) * Math.cos(a), ly = cy + (R + 18) * Math.sin(a);
    ctx.textAlign = Math.abs(Math.cos(a)) < 0.3 ? "center" : (Math.cos(a) > 0 ? "left" : "right");
    ctx.textBaseline = "middle";
    ctx.fillStyle = cText; ctx.font = "600 13px " + base; ctx.fillText(d.label, lx, ly - 7);
    ctx.fillStyle = cPrimary; ctx.font = "700 13px " + base; ctx.fillText(d.pct + "%", lx, ly + 9);
  });
  // รูปข้อมูล
  ctx.beginPath();
  data.forEach((d, i) => { const a = ang(i), rr = R * d.pct / 100, x = cx + rr * Math.cos(a), y = cy + rr * Math.sin(a); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
  ctx.closePath();
  ctx.fillStyle = cPrimary + "33"; ctx.fill();
  ctx.strokeStyle = cPrimary; ctx.lineWidth = 2; ctx.stroke();
  data.forEach((d, i) => { const a = ang(i), rr = R * d.pct / 100; ctx.fillStyle = cPrimary; ctx.beginPath(); ctx.arc(cx + rr * Math.cos(a), cy + rr * Math.sin(a), 3.5, 0, Math.PI * 2); ctx.fill(); });
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
  ctx.font = '12px "IBM Plex Sans", "Noto Sans Thai Looped", sans-serif';

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
  ctx.font = '12.5px "IBM Plex Sans", "Noto Sans Thai Looped", sans-serif';
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
    show(`${pageHead("เก็บไว้ทบทวน", "บุ๊กมาร์ก")}
      <div class="panel"><div class="mascot-spot">${mascotWrap(mascotSpotSVG('rabbit', 'sleepy'), 'rabbit', 'sleepy')}</div><p class="empty">ยังไม่มีข้อที่บุ๊กมาร์กไว้<br>ในหน้าเฉลยของแต่ละข้อ กด "☆ บุ๊กมาร์กข้อนี้" เพื่อเก็บไว้ทบทวน พร้อมจดโน้ตได้</p></div>`);
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
  show(`${pageHead("เก็บไว้ทบทวน", "บุ๊กมาร์ก")}
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
  show(`${pageHead("TU-GET VOCABULARY", "คลังคำศัพท์")}
    <p class="sub">รวมคำศัพท์ ${_vocabCache.length} คำจากพาร์ท Vocabulary ทุกชุด พร้อมความหมายและประโยคตัวอย่าง</p>
    <div class="panel">
      <input type="text" id="vocabSearch" placeholder="🔍 ค้นหาคำหรือความหมาย..." oninput="renderVocabList(this.value)" style="max-width:100%">
      <div class="vmode-row">
        <button class="btn small" onclick="startFlashcardStudy()"><i class="ti ti-cards"></i> แฟลชการ์ด</button>
        <button class="btn small secondary" onclick="startGapFill()"><i class="ti ti-pencil"></i> เติมคำ</button>
        <button class="btn small secondary" onclick="startFlashcards()"><i class="ti ti-bulb"></i> เกมทายคำแปล</button>
      </div>
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

/* ---- โหมดทบทวนคำศัพท์: แฟลชการ์ด (จำได้/ยังไม่แม่น) ---- */
let fcDeck = [], fcCur = null, fcFlipped = false, fcKnown = 0, fcLearning = 0, fcTotal = 0;
function startFlashcardStudy() {
  fcDeck = shuffle(_vocabCache.filter(e => e.meaning).slice());
  fcTotal = fcDeck.length; fcKnown = 0; fcLearning = 0;
  nextFlashcard();
}
function nextFlashcard() {
  if (!fcDeck.length) { renderFlashcardDone(); return; }
  fcCur = fcDeck[0]; fcFlipped = false; renderFlashcard();
}
function flipFlashcard() { fcFlipped = !fcFlipped; renderFlashcard(); }
function rateFlashcard(known) {
  fcDeck.shift();
  if (known) fcKnown++;
  else { fcLearning++; fcDeck.push(fcCur); }   // ยังไม่แม่น → วนกลับมาท้ายแถว
  nextFlashcard();
}
function renderFlashcard() {
  const e = fcCur;
  const front = `<div class="fc-hint">แตะการ์ดเพื่อดูความหมาย</div><div class="fc-word">${esc(e.word)}</div>`;
  const back = `<div class="fc-mean">${esc(e.meaning)}</div>${e.example ? `<div class="fc-ex">${e.example}</div>` : ""}${e.exampleTH ? `<div class="vocab-ex-th">🇹🇭 ${esc(e.exampleTH)}</div>` : ""}`;
  show(`
    <div class="vstudy">
      <div class="section-label">TU-GET VOCABULARY · แฟลชการ์ด</div>
      <div class="vstudy-head">
        <span>เหลือ ${fcDeck.length} คำ</span>
        <span><b style="color:var(--success)">จำได้ ${fcKnown}</b> · <b style="color:var(--accent)">ยังไม่แม่น ${fcLearning}</b></span>
      </div>
      <div class="flashcard" onclick="flipFlashcard()"><div class="fc-face">${fcFlipped ? back : front}</div></div>
      <div class="fc-actions">
        <button class="btn fc-still" onclick="rateFlashcard(false)"><i class="ti ti-rotate-clockwise"></i> ยังไม่แม่น</button>
        <button class="btn fc-got" onclick="rateFlashcard(true)"><i class="ti ti-check"></i> จำได้</button>
      </div>
      <button class="btn secondary" style="margin-top:10px;width:100%" onclick="openVocabList()">ออกจากการทบทวน</button>
    </div>`);
}
function renderFlashcardDone() {
  show(`<div class="panel score-hero">
      <div class="result-label">แฟลชการ์ด — จบรอบ 🎉</div>
      <div class="big" style="color:var(--success)">${fcKnown}<span class="of"> / ${fcTotal}</span></div>
      <div class="pct">จำได้ครบทุกคำแล้ว!</div>
      <div class="result-actions">
        <button class="btn" onclick="startFlashcardStudy()"><i class="ti ti-refresh"></i> เริ่มใหม่</button>
        <button class="btn secondary" onclick="openVocabList()"><i class="ti ti-arrow-left"></i> กลับคลังคำศัพท์</button>
      </div></div>`);
}

/* ---- เติมคำ (Gap Fill): เติมคำที่หายไปในประโยคตัวอย่าง ---- */
let gfDeck = [], gfIdx = 0, gfScore = 0, gfChecked = false;
function gfBlank(e) {
  const input = '<input class="gap-input" id="gapIn" autocomplete="off" spellcheck="false" onkeydown="if(event.key===\'Enter\')checkGap()">';
  if (/<u>.*?<\/u>/i.test(e.example)) return e.example.replace(/<u>.*?<\/u>/i, input);
  return e.example.replace(/_{2,}/, input);
}
function startGapFill() {
  gfDeck = shuffle(_vocabCache.filter(e => e.meaning && (/<u>.*?<\/u>/i.test(e.example) || /_{2,}/.test(e.example))));
  gfIdx = 0; gfScore = 0; renderGapFill();
}
function renderGapFill() {
  if (gfIdx >= gfDeck.length) { renderGapDone(); return; }
  gfChecked = false;
  const e = gfDeck[gfIdx];
  show(`
    <div class="vstudy">
      <div class="section-label">TU-GET VOCABULARY · เติมคำ</div>
      <div class="vstudy-head"><span>ข้อ ${gfIdx + 1} / ${gfDeck.length}</span><span>คะแนน ${gfScore}</span></div>
      <div class="panel">
        <div class="gap-hint">เติมคำที่หายไป — คำใบ้: <b>${esc(e.meaning)}</b></div>
        <div class="gap-sentence">${gfBlank(e)}</div>
        <div id="gapFeedback"></div>
      </div>
      <div class="fc-actions">
        <button class="btn secondary" onclick="revealGap()">เฉลย</button>
        <button class="btn" onclick="checkGap()">ตรวจคำตอบ</button>
      </div>
      <button class="btn secondary" style="margin-top:10px;width:100%" onclick="openVocabList()">ออก</button>
    </div>`);
  const inp = document.getElementById("gapIn"); if (inp) inp.focus();
}
function gapResult(ok, e) {
  const fb = document.getElementById("gapFeedback");
  if (fb) fb.innerHTML = `<div class="feedback ${ok ? "good" : "bad"}" style="margin-top:14px">
      <b class="verdict">${ok ? "✔ ถูกต้อง!" : "✘ ยังไม่ถูก"}</b> เฉลย: <b>${esc(e.word)}</b> — ${esc(e.meaning)}</div>
    <button class="btn" style="margin-top:12px;width:100%" onclick="gapNext()">${gfIdx === gfDeck.length - 1 ? "ดูผล ▶" : "ข้อถัดไป ▶"}</button>`;
  const inp = document.getElementById("gapIn"); if (inp) inp.disabled = true;
}
function checkGap() {
  if (gfChecked) return;
  const e = gfDeck[gfIdx], inp = document.getElementById("gapIn"); if (!inp) return;
  gfChecked = true;
  const ok = inp.value.trim().toLowerCase() === e.word.trim().toLowerCase();
  if (ok) gfScore++;
  gapResult(ok, e);
}
function revealGap() {
  if (gfChecked) return;
  gfChecked = true;
  const e = gfDeck[gfIdx], inp = document.getElementById("gapIn");
  if (inp) inp.value = e.word;
  gapResult(false, e);
}
function gapNext() { gfIdx++; renderGapFill(); }
function renderGapDone() {
  const p = pct(gfScore, gfDeck.length);
  show(`<div class="panel score-hero">
      <div class="result-label">เติมคำ — จบรอบ</div>
      <div class="big">${gfScore}<span class="of"> / ${gfDeck.length}</span></div>
      <div class="pct">${p}% ถูกต้อง</div>
      <div class="result-actions">
        <button class="btn" onclick="startGapFill()"><i class="ti ti-refresh"></i> เล่นอีกครั้ง</button>
        <button class="btn secondary" onclick="openVocabList()"><i class="ti ti-arrow-left"></i> กลับคลังคำศัพท์</button>
      </div></div>`);
}

/* ================= พิมพ์ / บันทึก PDF (print CSS) ================= */
let printCfg = { part: "structure", set: null, withAnswers: true, header: true, notes: false };
function plLetter(i) { return String.fromCharCode(65 + i); }
function posFromTag(tag) { return ({ Verb: "(v.)", Adjective: "(adj.)", Noun: "(n.)", Adverb: "(adv.)" })[tag] || ""; }

function openPrintSetup() {
  if (!confirmLeaveExam()) return;
  stopTimer(); S = null;
  if (printCfg.part !== "full" && (printCfg.set == null || setsOf(printCfg.part).indexOf(printCfg.set) < 0)) printCfg.set = setsOf(printCfg.part)[0];
  renderPrintSetup();
}
function readPrint() {
  const pe = document.getElementById("printPart"); if (pe) printCfg.part = pe.value;
  const se = document.getElementById("printSet"); if (se) printCfg.set = Number(se.value);
  const f = document.querySelector('input[name="pfmt"]:checked'); if (f) printCfg.withAnswers = f.value === "qa";
  const h = document.getElementById("pHeader"); if (h) printCfg.header = h.checked;
  const n = document.getElementById("pNotes"); if (n) printCfg.notes = n.checked;
  if (printCfg.part !== "full" && setsOf(printCfg.part).indexOf(printCfg.set) < 0) printCfg.set = setsOf(printCfg.part)[0];
}
function printChanged() { readPrint(); renderPrintSetup(); }
function renderPrintSetup() {
  show(`
    ${pageHead("พิมพ์ / บันทึก PDF", "ข้อสอบฉบับกระดาษ")}
    <p class="sub">เลือกชุดและรูปแบบ แล้วกด "สร้าง PDF" — ระบบจะเปิดหน้าต่างพิมพ์ของเบราว์เซอร์ให้เลือก "บันทึกเป็น PDF" ได้</p>
    <div class="panel" style="max-width:560px">
      <label class="field">พาร์ท</label>
      <select id="printPart" onchange="printChanged()">
        <option value="full" ${printCfg.part === "full" ? "selected" : ""}>เต็มชุด 100 ข้อ — คละ 3 พาร์ท</option>
        ${PART_ORDER.map(p => `<option value="${p}" ${p === printCfg.part ? "selected" : ""}>${PARTS[p].name} — ${esc(PARTS[p].thai)}</option>`).join("")}
      </select>
      ${printCfg.part === "full"
        ? `<div class="notice" style="margin-top:12px">🎲 ระบบจะสุ่ม 1 ชุดจากแต่ละพาร์ท (Structure 25 + Vocabulary 25 + Reading 50) รวม <b>100 ข้อ</b> เหมือนข้อสอบจริง — สุ่มใหม่ทุกครั้งที่กดสร้าง</div>`
        : `<label class="field">ชุด</label>
      <select id="printSet" onchange="readPrint()">
        ${setsOf(printCfg.part).map(n => `<option value="${n}" ${n === printCfg.set ? "selected" : ""}>ชุดที่ ${n}</option>`).join("")}
      </select>`}
      <label class="field">รูปแบบ</label>
      <div class="mode-pick">
        <label class="opt ${printCfg.withAnswers ? "sel" : ""}"><input type="radio" name="pfmt" value="qa" ${printCfg.withAnswers ? "checked" : ""} onchange="printChanged()"> <b>โจทย์ + เฉลย</b><small>2 หน้า: ข้อสอบ (อังกฤษล้วน) + เฉลย (มีคำแปลไทย + คำอธิบาย)</small></label>
        <label class="opt ${printCfg.withAnswers ? "" : "sel"}"><input type="radio" name="pfmt" value="q" ${printCfg.withAnswers ? "" : "checked"} onchange="printChanged()"> <b>โจทย์อย่างเดียว</b><small>เฉพาะหน้าข้อสอบ (อังกฤษล้วน)</small></label>
      </div>
      <label class="field">ตัวเลือกเสริม</label>
      <label style="display:block;font-size:.95rem"><input type="checkbox" id="pHeader" ${printCfg.header ? "checked" : ""} onchange="readPrint()"> ใส่หัวกระดาษ (ชื่อ-สกุล / วันที่ / เวลา)</label>
      <label style="display:block;font-size:.95rem;margin-top:6px"><input type="checkbox" id="pNotes" ${printCfg.notes ? "checked" : ""} onchange="readPrint()"> เว้นช่องว่างให้จดใต้แต่ละข้อ</label>
      <div style="margin-top:20px">
        <button class="btn" onclick="doPrint()"><i class="ti ti-printer"></i> สร้าง PDF / พิมพ์</button>
        <button class="btn secondary" onclick="goHome()">ยกเลิก</button>
      </div>
    </div>`);
}
function doPrint() { readPrint(); buildPrintDoc(printCfg); window.print(); }

/* ---- สร้างเอกสารสำหรับพิมพ์ลงใน #printArea (นอก #app) ---- */
function plPassage(p) {
  const paras = String(p.text).split(/\n\s*\n/)
    .map((t, i) => `<p class="pa-para"><b>[${i + 1}]</b> ${esc(t)}</p>`).join("");
  return `<div class="pa-passage"><div class="pa-passage-title">${esc(p.title)}</div>${paras}</div>`;
}
function plInstr(part) {
  return part === "reading" ? "Read each passage and choose the best answer."
    : (part === "vocabulary" ? "Choose the word closest in meaning that best fits each sentence."
      : "Choose the word or phrase that best completes each sentence.");
}
function plHead(cfg, page, count, setLabel) {
  if (page === "key") {
    return `<div class="pa-head"><div class="pa-title">Answer Key &amp; Explanations</div><div class="pa-sub">เฉลยและคำอธิบาย — ${setLabel}</div></div>`;
  }
  const info = cfg.header
    ? `<div class="pa-info"><span>Name: <span class="pa-fill"></span></span><span>Date: <span class="pa-fill" style="width:70px"></span></span><span>Time: ____ min</span><span>Total: ${count}</span></div>`
    : "";
  return `<div class="pa-head"><div class="pa-title">ExamPrep</div><div class="pa-sub">Practice Test — ${setLabel}</div>
    <div class="pa-disc">Practice material — not an official exam and not affiliated with Thammasat University.</div></div>${info}`;
}
function plFoot(label) {
  return `<div class="pa-foot"><span>ExamPrep — practice material (not a real exam)</span><span>${label}</span></div>`;
}
// แสดงหัวพาร์ทเฉพาะตอนพิมพ์เต็มชุด (หลายพาร์ท); พิมพ์พาร์ทเดียวไม่ต้องซ้ำหัว
function plExamBody(selections, cfg) {
  let out = "", n = 0;
  const multi = selections.length > 1;
  selections.forEach(sel => {
    const qs = BANK[sel.part][sel.set] || [];
    out += `<div class="pa-parthead">Part — ${PARTS[sel.part].name}${multi ? ` (Set ${sel.set})` : ""}</div><div class="pa-instr">${plInstr(sel.part)}</div>`;
    let lastP = null;
    qs.forEach(q => {
      if (q.passage && q.passage !== lastP) { lastP = q.passage; out += plPassage(q.passage); }
      n++;
      const choices = q.choices.map((c, i) => `(${plLetter(i)}) ${c}`).join("&nbsp;&nbsp;&nbsp; ");
      out += `<div class="pa-q"><div><b>${n}.</b> ${q.question}</div><div class="pa-choices">${choices}</div>${cfg.notes ? '<div class="pa-notes"></div>' : ""}</div>`;
    });
  });
  return out;
}
function plKeyBody(selections, cfg) {
  const all = [];
  selections.forEach(sel => (BANK[sel.part][sel.set] || []).forEach(q => all.push(q)));
  const grid = all.map((q, i) => `<span class="pa-gi"><b>${i + 1}.</b> ${plLetter(q.answer)}</span>`).join("");
  let out = `<div class="pa-grid">${grid}</div>`;
  let n = 0;
  const multi = selections.length > 1;
  selections.forEach(sel => {
    const qs = BANK[sel.part][sel.set] || [];
    if (multi) out += `<div class="pa-parthead">Part — ${PARTS[sel.part].name} (Set ${sel.set})</div>`;
    let lastP = null;
    qs.forEach(q => {
      if (q.passage && q.passage !== lastP) { lastP = q.passage; out += plPassage(q.passage); }
      n++;
      const pos = posFromTag(q.tag);
      const choices = q.choices.map((c, i) => {
        const g = choiceTH(q, i), ok = i === q.answer;
        return `<div class="pa-kc ${ok ? "ok" : ""}">(${plLetter(i)}) ${c}${pos ? " " + pos : ""}${g ? " " + g : ""}${ok ? " ✓" : ""}</div>`;
      }).join("");
      out += `<div class="pa-q"><div><b>${n}.</b> ${q.question}</div>${q.questionTH ? `<div class="pa-qth">${q.questionTH}</div>` : ""}${choices}<div class="pa-expl"><b>อธิบาย:</b> ${q.explanation}</div></div>`;
    });
  });
  return out;
}
function buildPrintDoc(cfg) {
  let selections, setLabel;
  if (cfg.part === "full") {
    // สุ่ม 1 ชุดจากแต่ละพาร์ท เหมือนโหมดทำเต็มชุด 100 ข้อ
    selections = PART_ORDER.map(p => {
      const sets = setsOf(p);
      return { part: p, set: sets[Math.floor(Math.random() * sets.length)] };
    });
    setLabel = `TU-GET Full Test · ${PART_ORDER.map(p => `${PARTS[p].name} ${selections.find(s => s.part === p).set}`).join(" + ")}`;
  } else {
    selections = [{ part: cfg.part, set: cfg.set }];
    setLabel = `TU-GET ${PARTS[cfg.part].name} (Set ${cfg.set})`;
  }
  const total = selections.reduce((s, sel) => s + (BANK[sel.part][sel.set] || []).length, 0);
  let html = `<section class="pa-page">${plHead(cfg, "exam", total, setLabel)}${plExamBody(selections, cfg)}${plFoot("แบบฝึกหัด (ไม่ใช่ข้อสอบจริง)")}</section>`;
  if (cfg.withAnswers) html += `<section class="pa-page pa-key">${plHead(cfg, "key", total, setLabel)}${plKeyBody(selections, cfg)}${plFoot("เฉลย")}</section>`;
  let pa = document.getElementById("printArea");
  if (!pa) { pa = document.createElement("div"); pa.id = "printArea"; document.body.appendChild(pa); }
  pa.innerHTML = html;
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
