// QA/QC script — ตรวจ data/*.js ทั้งหมดเชิงระบบ (รันด้วย node qa-check.js)
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

// โหลดทุกไฟล์ใน sandbox เดียว เลียนแบบ window
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of files) {
  const code = fs.readFileSync(path.join(dataDir, f), 'utf8');
  try { vm.runInContext(code, sandbox, { filename: f }); }
  catch (e) { console.log(`!! โหลดไฟล์ ${f} ไม่ได้: ${e.message}`); }
}
const packs = sandbox.window.TUGET_DATA || [];

const issues = [];
const add = (id, file, msg) => issues.push({ id, file, msg });
const seenIds = new Map();

let totalQ = 0;
const stripTags = s => String(s).replace(/<[^>]+>/g, '');
const norm = s => stripTags(s).trim().toLowerCase().replace(/\s+/g, ' ');

function checkChoiceQuestion(q, file, part) {
  const id = q.id || '(no id)';
  // id ซ้ำ
  if (q.id) {
    if (seenIds.has(q.id)) add(id, file, `id ซ้ำกับไฟล์ ${seenIds.get(q.id)}`);
    else seenIds.set(q.id, file);
  } else add(id, file, 'ไม่มี id');

  // 4 ตัวเลือก
  if (!Array.isArray(q.choices) || q.choices.length !== 4)
    add(id, file, `choices ต้องมี 4 ตัว (พบ ${q.choices ? q.choices.length : 'none'})`);
  // answer 0-3
  if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3))
    add(id, file, `answer ต้อง 0-3 (พบ ${q.answer})`);
  // ตัวเลือกไม่ซ้ำ
  if (Array.isArray(q.choices)) {
    const seen = new Set();
    q.choices.forEach(c => {
      const n = norm(c);
      if (seen.has(n)) add(id, file, `ตัวเลือกซ้ำ: "${stripTags(c)}"`);
      seen.add(n);
    });
  }
  // questionTH
  if (!q.questionTH || !String(q.questionTH).trim()) add(id, file, 'ไม่มี questionTH');
  // คำแปลตัวเลือก
  const tr = q.choicesTH || q.glosses;
  if (!Array.isArray(tr) || tr.length !== 4)
    add(id, file, `ไม่มีคำแปลตัวเลือกครบ 4 (choicesTH/glosses)`);
  else if (tr.some(t => !t || !String(t).trim()))
    add(id, file, 'คำแปลตัวเลือกมีช่องว่าง');
  // explanation
  if (!q.explanation || !String(q.explanation).trim()) add(id, file, 'ไม่มี explanation');

  // ตาม type
  if (part === 'structure') {
    if (q.type === 'sc') {
      if (!String(q.question).includes('______')) add(id, file, "type sc แต่ไม่มีช่อง ______");
    } else if (q.type === 'ei') {
      const uCount = (String(q.question).match(/<u>/g) || []).length;
      if (uCount !== 4) add(id, file, `EI ต้องมี <u> 4 จุด (พบ ${uCount})`);
      const sups = (String(q.question).match(/<sup>\((\d)\)<\/sup>/g) || []);
      const supNums = sups.map(s => s.match(/\d/)[0]).join('');
      if (supNums !== '1234') add(id, file, `EI sup ต้องเป็น (1)(2)(3)(4) ตามลำดับ (พบ ${supNums || 'none'})`);
      // ช้อยต้องตรงคำที่ขีดเส้นใต้
      const underlined = [...String(q.question).matchAll(/<u>(.*?)<\/u>/g)].map(m => norm(m[1]));
      if (Array.isArray(q.choices) && underlined.length === 4) {
        q.choices.forEach((c, i) => {
          if (norm(c) !== underlined[i])
            add(id, file, `EI ช้อย[${i}] "${stripTags(c)}" ไม่ตรงคำที่ขีด "${underlined[i]}"`);
        });
      }
    } else add(id, file, `type ไม่รู้จัก: ${q.type}`);
  } else if (part === 'vocabulary') {
    if (q.type === 'cloze') {
      if (!String(q.question).includes('______')) add(id, file, "type cloze แต่ไม่มีช่อง ______");
    } else if (q.type === 'syn') {
      if (!String(q.question).includes('<u>')) add(id, file, "type syn แต่ไม่มี <u>คำ</u>");
    } else add(id, file, `vocab type ไม่รู้จัก: ${q.type}`);
  }
}

for (const pack of packs) {
  const part = pack.part;
  const file = `${part}-${pack.set}.js`;
  if (part === 'reading') {
    if (!Array.isArray(pack.passages)) { add('-', file, 'reading ไม่มี passages'); continue; }
    pack.passages.forEach(ps => {
      if (!ps.text || !ps.text.trim()) add('-', file, `passage "${ps.title}" ไม่มี text`);
      (ps.questions || []).forEach(q => {
        totalQ++;
        const id = q.id || '(no id)';
        if (q.id) {
          if (seenIds.has(q.id)) add(id, file, `id ซ้ำกับ ${seenIds.get(q.id)}`);
          else seenIds.set(q.id, file);
        } else add(id, file, 'ไม่มี id');
        if (!Array.isArray(q.choices) || q.choices.length !== 4)
          add(id, file, `choices ต้องมี 4 ตัว (พบ ${q.choices ? q.choices.length : 'none'})`);
        if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3))
          add(id, file, `answer ต้อง 0-3 (พบ ${q.answer})`);
        if (Array.isArray(q.choices)) {
          const seen = new Set();
          q.choices.forEach(c => { const n = norm(c); if (seen.has(n)) add(id, file, `ตัวเลือกซ้ำ: "${stripTags(c)}"`); seen.add(n); });
        }
        if (!q.questionTH) add(id, file, 'ไม่มี questionTH');
        if (!Array.isArray(q.choicesTH) || q.choicesTH.length !== 4) add(id, file, 'ไม่มี choicesTH ครบ 4');
        if (!q.explanation) add(id, file, 'ไม่มี explanation');
      });
    });
  } else {
    if (!Array.isArray(pack.questions)) { add('-', file, `${part} ไม่มี questions`); continue; }
    pack.questions.forEach(q => { totalQ++; checkChoiceQuestion(q, file, part); });
  }
}

// สรุป
const byPart = {};
for (const pack of packs) {
  const p = pack.part;
  byPart[p] = byPart[p] || { sets: 0, q: 0 };
  byPart[p].sets++;
  byPart[p].q += pack.part === 'reading'
    ? (pack.passages || []).reduce((a, ps) => a + (ps.questions || []).length, 0)
    : (pack.questions || []).length;
}
console.log('=== สรุปจำนวน ===');
for (const p in byPart) console.log(`  ${p}: ${byPart[p].sets} ชุด, ${byPart[p].q} ข้อ`);
console.log(`  รวม: ${totalQ} ข้อ`);
console.log(`\n=== พบ ${issues.length} ปัญหา (เชิงโครงสร้าง) ===`);
for (const i of issues) console.log(`  [${i.file} ${i.id}] ${i.msg}`);
if (issues.length === 0) console.log('  ✅ ผ่านการตรวจเชิงโครงสร้างทั้งหมด');
