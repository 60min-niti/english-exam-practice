# CLAUDE.md — TU-GET PBT Practice

เว็บฝึกทำข้อสอบแนว TU-GET PBT แบบ **static** (HTML/CSS/JS ล้วน) เปิด `index.html` ในเบราว์เซอร์ได้เลย ไม่มี server/build/dependency เก็บข้อมูลผู้ใช้ใน LocalStorage

> โจทย์ทั้งหมด **AI แต่งใหม่** (ไม่ใช่ข้อสอบจริง) มี disclaimer ว่าไม่เกี่ยวข้องกับ มธ. — ใช้เอง/แชร์เพื่อน

## โครงสร้างไฟล์
- `index.html` — โหลด `<script>` ของ data ทุกไฟล์ก่อน `js/app.js` (เพิ่มชุดใหม่ = เพิ่ม 1 บรรทัดตรงนี้)
- `css/style.css` — สไตล์ทั้งหมด (มีโหมดมืด ผ่าน `[data-theme="dark"]`)
- `js/app.js` — เครื่องยนต์ทั้งหมด (วานิลลา JS ไม่มี framework)
- `data/<part>-<set>.js` — คลังข้อสอบ แต่ละไฟล์ `window.TUGET_DATA.push({...})`
- `ROADMAP.md` — งานที่เหลือ + จุดบกพร่องที่พักไว้ (อ่านไฟล์นี้ก่อนทำต่อ)

## สถานะปัจจุบัน
- **Structure 1–10, Vocabulary 1–10, Reading 1–8 = 900 ข้อ** (ทุกข้อตรวจ QA ผ่าน)
  - Structure 9–10 + Vocabulary 9–10 = ชุด **Word Choice / Synonym** (ช้อยเป็นคำใกล้เคียงกัน — structure เน้น confusable words, vocab เน้น synonym จาก collocation/น้ำเสียง/ระดับความเข้ม)
- ทุกข้อมี `questionTH` (คำแปลโจทย์) + คำแปลตัวเลือก (`choicesTH` หรือ `glosses`) + `explanation` ไทย

## รูปแบบข้อมูล (data schema)
**Structure / Vocabulary** — pack: `{ part, set, questions:[...] }`; แต่ละข้อ:
```
{ id, type, tag, question, questionTH,
  choices:[4], choicesTH:[4]   // vocab ใช้ glosses:[4] แทน choicesTH ได้
  answer:0-3, explanation }
```
- `type`: structure = `sc` (เติมประโยค มี `______`) / `ei` (หาที่ผิด มี `<u>..</u><sup>(n)</sup>` 4 จุด, answer = index ที่ผิด). vocabulary = `cloze` (มี `______`) / `syn` (มี `<u>คำ</u>`)

**Reading** — pack: `{ part:"reading", set, passages:[{ title, text, questions:[...] }] }` (5 passages × 10 ข้อ); คำถามมี `questionTH` + `choicesTH` (บทความ `text` คงเป็นอังกฤษเพื่อฝึกอ่าน)

## แท็ก (tag) — ใช้ในสถิติ + หน้า "ฝึกแยกหัวข้อ"
- Structure: Tense, Subject-Verb Agreement, Relative Clauses, Passive Voice, Gerund/Infinitive, Conditionals, Comparison, Participle, Inversion, Prepositions/Connectors, Word Form, Parallel Structure ฯลฯ
- Vocabulary: Collocation, Noun, Verb, Adjective, Adverb
- Reading: Main Idea, Detail, Vocabulary in Context, Inference, Purpose, **Tone, Organization, Style**

## ฟีเจอร์ในแอป
ทำเต็มชุด 100 ข้อ (สุ่มชุดจาก 3 พาร์ท) / รายพาร์ท · โหมดสอบจับเวลา + โหมดฝึกเฉลยทันที · autosave-resume · หน้าเฉลย (ยกช้อยมาแสดง เฉลยสีเขียว คำแปลไทย กรองรายพาร์ท ไฮไลต์คำในบทความ) · สถิติ+กราฟ+จุดอ่อนรายแท็ก · ฝึกแยกตามหัวข้อ (tag) · สมุดข้อผิด (spaced repetition) · คลังคำศัพท์ (แฟลชการ์ดจำได้/ยังไม่แม่น + เติมคำ Gap Fill + เกมทายคำแปล) · บุ๊กมาร์ก/โน้ตรายข้อ · export/import · พิมพ์/บันทึก PDF (print CSS: หน้าข้อสอบอังกฤษล้วน + หน้าเฉลยมีคำแปลไทย)

## กติกาเมื่อเพิ่มข้อสอบ/แก้ไข
1. ทำตามแนวข้อสอบจริง: ประโยคเชิงข่าว/วิชาการ, EI ต้องมี **จุดผิดเดียวชัดเจน** (อย่าให้ทุกตัวเลือกถูก)
2. ตรวจ **คำแปลไทยให้ตรงบริบท** ทุกข้อ
3. หลังเพิ่ม/แก้ ให้รัน QA: ตรวจ id ซ้ำ, 4 ตัวเลือก, answer 0–3, มี questionTH + คำแปลตัวเลือกครบ, EI: `<u>` 4 จุด/sup 1-4/ช้อยตรงคำที่ขีด, ตัวเลือกไม่ซ้ำ
4. ลงทะเบียนไฟล์ใหม่ใน `index.html` (ก่อน `js/app.js`)
5. ข้อที่คำตอบขึ้นกับสำเนียง (เช่น ST6-09 `data suggest`, ST7-11 `committee are`) — เก็บไว้ + ใส่ 📌 หมายเหตุในเฉลย

## หมายเหตุงานดีไซน์
ผู้ใช้อยากปรับดีไซน์ทีหลัง (ผนวก Figma + Claude): อ่านง่าย, ธีมใหม่, รองรับมือถือ, ปรับขนาดฟอนต์ — **ยังไม่ต้องแตะจนกว่าจะสั่ง**
