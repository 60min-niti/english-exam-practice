// Structure ชุดที่ 1 — Sentence Completion (ข้อ 1-13) + Error Identification (ข้อ 14-25)
// questionTH = คำแปลไทยของโจทย์, choicesTH = คำแปล/บทบาทไทยของแต่ละตัวเลือก (ใช้ในหน้าเฉลย)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 1,
  questions: [
    // ===== Sentence Completion =====
    {
      id: "ST1-01", type: "sc", tag: "Tense",
      question: "By the time the rescue team arrived, the villagers ______ to higher ground.",
      questionTH: "เมื่อถึงตอนที่ทีมกู้ภัยมาถึง ชาวบ้าน ______ ไปยังที่สูงแล้ว",
      choices: ["already moved", "had already moved", "have already moved", "were already moving"],
      choicesTH: ["ย้ายไปแล้ว (อดีตธรรมดา)", "ได้ย้ายไปแล้ว (อดีตสมบูรณ์)", "ได้ย้ายไปแล้ว (ปัจจุบันสมบูรณ์)", "กำลังย้ายอยู่ (อดีตต่อเนื่อง)"],
      answer: 1,
      explanation: "เหตุการณ์ 'ย้ายไปที่สูง' เกิด<b>ก่อน</b>เหตุการณ์ในอดีตอีกเหตุการณ์ (ทีมกู้ภัยมาถึง) จึงต้องใช้ Past Perfect คือ <b>had already moved</b> — ตัวเลือก 3 (Present Perfect) ใช้เชื่อมอดีตกับปัจจุบัน ไม่ใช่อดีตกับอดีต ส่วนตัวเลือก 1 (Past Simple) ไม่แสดงลำดับก่อน-หลังเมื่อมี 'By the time' นำหน้า"
    },
    {
      id: "ST1-02", type: "sc", tag: "Conditionals",
      question: "If the university ______ more funding, it would expand its research facilities.",
      questionTH: "ถ้ามหาวิทยาลัย ______ เงินทุนมากกว่านี้ ก็คงจะขยายศูนย์วิจัยออกไป",
      choices: ["receives", "received", "had received", "will receive"],
      choicesTH: ["ได้รับ (ปัจจุบัน)", "ได้รับ (อดีต — เงื่อนไขแบบ 2)", "ได้รับมาแล้ว (อดีตสมบูรณ์)", "จะได้รับ (อนาคต)"],
      answer: 1,
      explanation: "ประโยคหลักใช้ <b>would expand</b> แสดงว่าเป็น If-clause แบบที่ 2 (สมมติสิ่งที่ตรงข้ามกับปัจจุบัน) โครงสร้างคือ If + Past Simple, would + V1 จึงตอบ <b>received</b> — ถ้าจะใช้ had received (แบบที่ 3) ประโยคหลักต้องเป็น would have expanded"
    },
    {
      id: "ST1-03", type: "sc", tag: "Relative Clauses",
      question: "The researcher ______ findings were published last month has been invited to speak at the conference.",
      questionTH: "นักวิจัย ______ ผลการศึกษาถูกตีพิมพ์เมื่อเดือนที่แล้ว ได้รับเชิญให้ไปบรรยายในงานประชุม",
      choices: ["who", "whom", "whose", "which"],
      choicesTH: ["ผู้ซึ่ง (ประธาน)", "ผู้ซึ่ง (กรรม)", "ซึ่ง...ของเขา (แสดงความเป็นเจ้าของ)", "ซึ่ง (สิ่งของ)"],
      answer: 2,
      explanation: "ช่องว่างต้องการคำแสดง<b>ความเป็นเจ้าของ</b> (ผลวิจัย 'ของ' นักวิจัย) จึงใช้ <b>whose</b> + คำนาม (whose findings = ผลวิจัยของเขา) — who ใช้เป็นประธาน, whom เป็นกรรม, which ใช้กับสิ่งของ"
    },
    {
      id: "ST1-04", type: "sc", tag: "Passive Voice",
      question: "A new bridge ______ across the river to ease traffic congestion in the city center.",
      questionTH: "สะพานใหม่ ______ ข้ามแม่น้ำเพื่อบรรเทาการจราจรติดขัดในใจกลางเมือง",
      choices: ["is building", "is being built", "has built", "builds"],
      choicesTH: ["กำลังสร้าง (รูปกระทำ)", "กำลังถูกสร้าง (รูปถูกกระทำ)", "ได้สร้างแล้ว (รูปกระทำ)", "สร้าง (รูปกระทำ)"],
      answer: 1,
      explanation: "สะพาน<b>ถูกสร้าง</b> (ทำกริยาเองไม่ได้) จึงต้องใช้รูป Passive และบริบทบอกว่ากำลังดำเนินการอยู่ → Present Continuous Passive คือ <b>is being built</b> — ตัวเลือกอื่นเป็นรูป Active ทั้งหมดซึ่งแปลว่าสะพานเป็นผู้สร้าง จึงผิดความหมาย"
    },
    {
      id: "ST1-05", type: "sc", tag: "Inversion",
      question: "Not only ______ the deadline, but she also improved the original design.",
      questionTH: "ไม่เพียงแต่เธอ ______ ตามกำหนดเวลาเท่านั้น แต่ยังปรับปรุงดีไซน์เดิมให้ดีขึ้นด้วย",
      choices: ["she met", "met she", "did she meet", "she did meet"],
      choicesTH: ["เธอทำได้ทัน (เรียงปกติ)", "ทำทันเธอ (เรียงผิด)", "เธอทำได้ทัน (สลับประธาน-กริยาช่วย)", "เธอทำได้ทันจริง ๆ (เน้นย้ำ)"],
      answer: 2,
      explanation: "เมื่อขึ้นต้นประโยคด้วยคำปฏิเสธอย่าง <b>Not only</b> ต้องสลับประธานกับกริยาช่วย (Inversion) เหมือนรูปคำถาม: Not only + <b>did she meet</b> — โครงสร้างปกติ 'she met' ใช้ได้เฉพาะเมื่อ Not only ไม่ได้อยู่ต้นประโยค"
    },
    {
      id: "ST1-06", type: "sc", tag: "Gerund/Infinitive",
      question: "The committee postponed ______ a final decision until all members were present.",
      questionTH: "คณะกรรมการเลื่อน ______ การตัดสินใจขั้นสุดท้ายออกไปจนกว่าสมาชิกจะมาครบ",
      choices: ["to make", "making", "make", "made"],
      choicesTH: ["จะทำ (to-infinitive)", "การทำ (gerund)", "ทำ (กริยาช่อง 1)", "ทำแล้ว (ช่อง 3)"],
      answer: 1,
      explanation: "กริยา <b>postpone</b> (เลื่อนออกไป) ต้องตามด้วย <b>Gerund (V-ing)</b> เสมอ เช่นเดียวกับ avoid, finish, consider, suggest จึงตอบ <b>making</b> — to make ใช้กับกริยากลุ่ม want, plan, decide"
    },
    {
      id: "ST1-07", type: "sc", tag: "Comparison",
      question: "The faster the population grows, ______ the demand for housing becomes.",
      questionTH: "ยิ่งประชากรเพิ่มเร็วเท่าไร ความต้องการที่อยู่อาศัยก็ยิ่ง ______ เท่านั้น",
      choices: ["the greater", "greater", "the greatest", "more greater"],
      choicesTH: ["ยิ่งมากขึ้น (the + ขั้นกว่า)", "มากกว่า (ขาด the)", "มากที่สุด (ขั้นสูงสุด)", "ยิ่งมากกว่า (ซ้ำซ้อนผิด)"],
      answer: 0,
      explanation: "โครงสร้างเปรียบเทียบคู่ขนาน 'ยิ่ง...ยิ่ง...' คือ <b>The + ขั้นกว่า..., the + ขั้นกว่า...</b> เมื่อประโยคแรกใช้ The faster ประโยคหลังต้องใช้ <b>the greater</b> — ขาด the ไม่ได้ และ more greater ผิดเพราะ greater เป็นขั้นกว่าอยู่แล้ว"
    },
    {
      id: "ST1-08", type: "sc", tag: "Subjunctive",
      question: "The board recommended that the proposal ______ thoroughly revised before resubmission.",
      questionTH: "คณะกรรมการแนะนำว่าข้อเสนอ ______ รับการแก้ไขอย่างละเอียดก่อนยื่นใหม่",
      choices: ["is", "was", "be", "will be"],
      choicesTH: ["เป็น (ปัจจุบัน)", "เป็น (อดีต)", "เป็น (รูป subjunctive ไม่ผัน)", "จะเป็น (อนาคต)"],
      answer: 2,
      explanation: "กริยากลุ่มข้อเสนอแนะ/คำสั่ง (recommend, suggest, insist, demand) + that ต้องตามด้วย <b>Subjunctive</b> คือกริยาช่อง 1 ไม่ผัน (be) ไม่ว่าประธานจะเป็นอะไร จึงตอบ <b>be revised</b> — is/was/will be ล้วนผันตามกาลซึ่งขัดกับโครงสร้างนี้"
    },
    {
      id: "ST1-09", type: "sc", tag: "Participle",
      question: "______ by the sudden noise, the birds flew off in all directions.",
      questionTH: "______ ด้วยเสียงดังที่เกิดขึ้นกะทันหัน ฝูงนกจึงบินกระจายไปทุกทิศทาง",
      choices: ["Startling", "Startled", "To startle", "Having startled"],
      choicesTH: ["ทำให้ตกใจ (ผู้กระทำ)", "ถูกทำให้ตกใจ (ผู้ถูกกระทำ)", "เพื่อทำให้ตกใจ", "เมื่อได้ทำให้ตกใจแล้ว"],
      answer: 1,
      explanation: "นก<b>ถูกทำให้ตกใจ</b> (ผู้ถูกกระทำ) จึงใช้ Past Participle <b>Startled</b> ขึ้นต้นประโยคแบบ Participial Phrase — Startling (V-ing) จะแปลว่านกเป็นฝ่ายทำให้สิ่งอื่นตกใจ ซึ่งขัดกับความหมายของประโยค"
    },
    {
      id: "ST1-10", type: "sc", tag: "Prepositions/Connectors",
      question: "______ the heavy rain, the outdoor concert continued as planned.",
      questionTH: "______ ฝนตกหนัก คอนเสิร์ตกลางแจ้งก็ยังดำเนินต่อไปตามแผน",
      choices: ["Although", "Because of", "Despite", "Even though"],
      choicesTH: ["แม้ว่า (+ ประโยค)", "เพราะ (+ วลีนาม)", "ทั้งที่/แม้จะมี (+ วลีนาม)", "ถึงแม้ว่า (+ ประโยค)"],
      answer: 2,
      explanation: "หลังช่องว่างเป็น<b>วลีนาม</b> (the heavy rain) ไม่ใช่ประโยคเต็ม จึงต้องใช้บุพบท <b>Despite</b> — Although/Even though เป็น conjunction ต้องตามด้วยประโยค (S+V) ส่วน Because of ให้เหตุผลตามกัน ซึ่งขัดความหมาย (ฝนตกแต่คอนเสิร์ตยังจัดต่อ = ขัดแย้งกัน)"
    },
    {
      id: "ST1-11", type: "sc", tag: "Subject-Verb Agreement",
      question: "Neither the manager nor the employees ______ aware of the sudden change in policy.",
      questionTH: "ทั้งผู้จัดการและพนักงานต่างก็ไม่ ______ รับรู้ถึงการเปลี่ยนนโยบายกะทันหัน",
      choices: ["was", "were", "is", "has been"],
      choicesTH: ["เป็น (เอกพจน์ อดีต)", "เป็น (พหูพจน์ อดีต)", "เป็น (เอกพจน์ ปัจจุบัน)", "เป็นมาแล้ว (เอกพจน์ สมบูรณ์)"],
      answer: 1,
      explanation: "โครงสร้าง <b>Neither A nor B</b> กริยาผันตามประธานตัวที่<b>อยู่ใกล้กริยาที่สุด</b> ในที่นี้คือ the employees (พหูพจน์) จึงใช้ <b>were</b> — ถ้าสลับเป็น Neither the employees nor the manager จึงจะใช้ was"
    },
    {
      id: "ST1-12", type: "sc", tag: "Tense",
      question: "By the end of this decade, scientists ______ a far more efficient way to store solar energy.",
      questionTH: "ภายในสิ้นทศวรรษนี้ นักวิทยาศาสตร์ ______ วิธีกักเก็บพลังงานแสงอาทิตย์ที่มีประสิทธิภาพกว่าเดิมมาก",
      choices: ["develop", "are developing", "will have developed", "have developed"],
      choicesTH: ["พัฒนา (ปัจจุบัน)", "กำลังพัฒนา (ปัจจุบันต่อเนื่อง)", "จะพัฒนาเสร็จแล้ว (อนาคตสมบูรณ์)", "ได้พัฒนาแล้ว (ปัจจุบันสมบูรณ์)"],
      answer: 2,
      explanation: "'By the end of this decade' ชี้จุดเวลาใน<b>อนาคต</b>ที่การกระทำจะ<b>เสร็จสิ้นก่อน</b>ถึงจุดนั้น จึงใช้ Future Perfect คือ <b>will have developed</b> — Present Perfect (have developed) ใช้กับสิ่งที่เสร็จแล้ว ณ ปัจจุบัน ไม่ใช่อนาคต"
    },
    {
      id: "ST1-13", type: "sc", tag: "Conjunctions",
      question: "No sooner had the lecture begun ______ the fire alarm went off.",
      questionTH: "การบรรยายเพิ่งจะเริ่มได้ไม่ทันไร ______ สัญญาณเตือนไฟไหม้ก็ดังขึ้น",
      choices: ["when", "than", "then", "as"],
      choicesTH: ["เมื่อ (คู่กับ hardly)", "กว่า (คู่กับ no sooner)", "แล้วก็ (คำวิเศษณ์)", "ขณะที่"],
      answer: 1,
      explanation: "โครงสร้างตายตัว <b>No sooner ... than ...</b> (พอ...ก็...ทันที) ต้องคู่กับ <b>than</b> เสมอ — คู่ที่ใช้ when คือ Hardly/Scarcely ... when ส่วน then เป็น adverb ไม่ใช่คำเชื่อม"
    },

    // ===== Error Identification =====
    {
      id: "ST1-14", type: "ei", tag: "Subject-Verb Agreement",
      question: "The number of students <u>who</u><sup>(1)</sup> apply for scholarships <u>have</u><sup>(2)</sup> increased <u>sharply</u><sup>(3)</sup> <u>over</u><sup>(4)</sup> the past five years.",
      questionTH: "จำนวนนักศึกษาที่สมัครขอทุนเพิ่มขึ้นอย่างมากในช่วงห้าปีที่ผ่านมา",
      choices: ["who", "have", "sharply", "over"],
      choicesTH: ["ผู้ซึ่ง", "ได้ (กริยาช่วย)", "อย่างรวดเร็วรุนแรง", "ตลอด/ในช่วง"],
      answer: 1,
      explanation: "ประธานที่แท้จริงคือ <b>The number</b> (เอกพจน์) ไม่ใช่ students กริยาจึงต้องเป็น <b>has increased</b> — จำหลัก: <b>The number of</b> + พหูพจน์ → กริยาเอกพจน์ / <b>A number of</b> + พหูพจน์ → กริยาพหูพจน์"
    },
    {
      id: "ST1-15", type: "ei", tag: "Pronoun Agreement",
      question: "Each of the candidates <u>must submit</u><sup>(1)</sup> <u>their</u><sup>(2)</sup> application documents <u>before</u><sup>(3)</sup> the deadline <u>expires</u><sup>(4)</sup>.",
      questionTH: "ผู้สมัครแต่ละคนต้องยื่นเอกสารสมัครก่อนที่กำหนดเส้นตายจะหมดลง",
      choices: ["must submit", "their", "before", "expires"],
      choicesTH: ["ต้องยื่น", "ของพวกเขา (พหูพจน์)", "ก่อนที่", "หมดอายุ/สิ้นสุด"],
      answer: 1,
      explanation: "<b>Each</b> เป็นเอกพจน์เสมอ สรรพนามแสดงความเป็นเจ้าของจึงต้องเป็นเอกพจน์ <b>his or her</b> ไม่ใช่ their — ตามหลักไวยากรณ์มาตรฐานที่ข้อสอบใช้ Each, Every, Either ต้องรับสรรพนามเอกพจน์"
    },
    {
      id: "ST1-16", type: "ei", tag: "Parallel Structure",
      question: "The seminar <u>taught</u><sup>(1)</sup> us how to <u>manage</u><sup>(2)</sup> our time, <u>setting</u><sup>(3)</sup> realistic goals, and <u>prioritize</u><sup>(4)</sup> daily tasks.",
      questionTH: "สัมมนานี้สอนให้เรารู้จักบริหารเวลา ตั้งเป้าหมายที่เป็นจริงได้ และจัดลำดับความสำคัญของงานประจำวัน",
      choices: ["taught", "manage", "setting", "prioritize"],
      choicesTH: ["สอน", "บริหารจัดการ", "การตั้ง (รูปไม่ขนาน)", "จัดลำดับความสำคัญ"],
      answer: 2,
      explanation: "รายการที่เชื่อมด้วย and ต้อง<b>อยู่ในรูปขนานกัน</b> (Parallel Structure): how to manage..., <b>set</b>..., and prioritize... จึงต้องแก้ setting เป็น <b>set</b> ให้เป็นกริยาช่อง 1 เหมือนอีกสองตัว"
    },
    {
      id: "ST1-17", type: "ei", tag: "Word Form",
      question: "The country's <u>economic</u><sup>(1)</sup> has grown <u>rapidly</u><sup>(2)</sup> <u>since</u><sup>(3)</sup> the government <u>introduced</u><sup>(4)</sup> a series of tax reforms.",
      questionTH: "เศรษฐกิจของประเทศเติบโตอย่างรวดเร็วนับตั้งแต่รัฐบาลนำการปฏิรูปภาษีหลายอย่างมาใช้",
      choices: ["economic", "rapidly", "since", "introduced"],
      choicesTH: ["ทางเศรษฐกิจ (คุณศัพท์ — ผิด)", "อย่างรวดเร็ว", "นับตั้งแต่", "นำเข้ามา/เริ่มใช้"],
      answer: 0,
      explanation: "ตำแหน่งหลัง The country's ต้องเป็น<b>คำนาม</b> (ประธานของประโยค) แต่ <b>economic</b> เป็นคำคุณศัพท์ ต้องแก้เป็น <b>economy</b> (เศรษฐกิจ) — จุดสังเกตข้อสอบชอบสลับ economic (adj.) / economy (n.) / economical (adj. = ประหยัด)"
    },
    {
      id: "ST1-18", type: "ei", tag: "Prepositions/Connectors",
      question: "All staff members <u>are</u><sup>(1)</sup> responsible <u>to</u><sup>(2)</sup> reporting safety hazards <u>as soon as</u><sup>(3)</sup> they <u>are noticed</u><sup>(4)</sup>.",
      questionTH: "พนักงานทุกคนมีหน้าที่รับผิดชอบในการรายงานอันตรายด้านความปลอดภัยทันทีที่สังเกตเห็น",
      choices: ["are", "to", "as soon as", "are noticed"],
      choicesTH: ["เป็น/มี", "ต่อ (บุพบทผิด ควรเป็น for)", "ทันทีที่", "ถูกสังเกตเห็น"],
      answer: 1,
      explanation: "คำคุณศัพท์ <b>responsible</b> ต้องคู่กับบุพบท <b>for</b> + V-ing (responsible <b>for</b> reporting) — responsible to + คน แปลว่า 'ขึ้นตรงต่อใคร' ใช้กับ V-ing ไม่ได้"
    },
    {
      id: "ST1-19", type: "ei", tag: "Determiners",
      question: "<u>The most</u><sup>(1)</sup> students <u>find</u><sup>(2)</sup> it difficult <u>to balance</u><sup>(3)</sup> part-time work and <u>academic</u><sup>(4)</sup> responsibilities.",
      questionTH: "นักศึกษาส่วนใหญ่พบว่าการสร้างสมดุลระหว่างงานพาร์ทไทม์กับภาระด้านการเรียนเป็นเรื่องยาก",
      choices: ["The most", "find", "to balance", "academic"],
      choicesTH: ["ส่วนใหญ่ (ใช้ผิด ควรเป็น Most)", "พบว่า", "ที่จะสร้างสมดุล", "ทางวิชาการ"],
      answer: 0,
      explanation: "เมื่อต้องการสื่อว่า 'นักศึกษาส่วนใหญ่' ต้องใช้ <b>Most students</b> (ไม่มี the) — 'the most' ใช้ในการเปรียบเทียบขั้นสูงสุดเท่านั้น เช่น the most difficult ไม่ได้ใช้นำหน้าคำนามในความหมาย 'ส่วนใหญ่'"
    },
    {
      id: "ST1-20", type: "ei", tag: "Tense",
      question: "Since the factory <u>opened</u><sup>(1)</sup> in 2010, it <u>produced</u><sup>(2)</sup> more than a million vehicles <u>and</u><sup>(3)</sup> employed thousands of <u>workers</u><sup>(4)</sup>.",
      questionTH: "นับตั้งแต่โรงงานเปิดในปี 2010 ก็ได้ผลิตรถยนต์ไปแล้วกว่าหนึ่งล้านคันและจ้างคนงานหลายพันคน",
      choices: ["opened", "produced", "and", "workers"],
      choicesTH: ["เปิด (อดีต)", "ผลิต (อดีตธรรมดา — ผิด)", "และ", "คนงาน"],
      answer: 1,
      explanation: "โครงสร้าง <b>Since + จุดเวลาในอดีต</b> ประโยคหลักต้องใช้ <b>Present Perfect</b> (has produced) เพราะการผลิตดำเนินต่อเนื่องจากอดีตถึงปัจจุบัน — produced (Past Simple) สื่อว่าจบไปแล้ว ขัดกับ Since"
    },
    {
      id: "ST1-21", type: "ei", tag: "Comparison",
      question: "The traffic <u>in</u><sup>(1)</sup> Bangkok <u>is</u><sup>(2)</sup> <u>far worse</u><sup>(3)</sup> than <u>Chiang Mai</u><sup>(4)</sup>.",
      questionTH: "การจราจรในกรุงเทพฯ แย่กว่าของเชียงใหม่มาก",
      choices: ["in", "is", "far worse", "Chiang Mai"],
      choicesTH: ["ใน", "เป็น", "แย่กว่ามาก", "เชียงใหม่ (ควรเป็น that of Chiang Mai)"],
      answer: 3,
      explanation: "การเปรียบเทียบต้องเทียบ<b>สิ่งเดียวกัน</b>: เทียบ 'การจราจรในกรุงเทพ' กับ 'การจราจร<b>ของ</b>เชียงใหม่' ไม่ใช่เทียบกับตัวเมืองเชียงใหม่ จึงต้องแก้เป็น <b>that of Chiang Mai</b> (that แทน the traffic)"
    },
    {
      id: "ST1-22", type: "ei", tag: "Verb Form",
      question: "The missing documents <u>were finally</u><sup>(1)</sup> <u>founded</u><sup>(2)</sup> <u>in</u><sup>(3)</sup> a drawer <u>beneath</u><sup>(4)</sup> the printer.",
      questionTH: "ในที่สุดเอกสารที่หายไปก็ถูกพบในลิ้นชักใต้เครื่องพิมพ์",
      choices: ["were finally", "founded", "in", "beneath"],
      choicesTH: ["ในที่สุดก็ถูก", "ก่อตั้ง (ผิด ควรเป็น found = พบ)", "ใน", "ใต้"],
      answer: 1,
      explanation: "กริยา find (พบ) ผันเป็น find–found–<b>found</b> รูป Passive จึงเป็น were finally <b>found</b> — ส่วน founded มาจากกริยา found (ก่อตั้ง: found–founded–founded) คนละคำกัน เป็นคู่คำที่ข้อสอบชอบหลอก"
    },
    {
      id: "ST1-23", type: "ei", tag: "Adjective/Adverb",
      question: "He answered the interview questions <u>so</u><sup>(1)</sup> <u>confident</u><sup>(2)</sup> that the selection panel <u>was</u><sup>(3)</sup> clearly <u>impressed</u><sup>(4)</sup>.",
      questionTH: "เขาตอบคำถามสัมภาษณ์อย่างมั่นใจมากจนคณะกรรมการคัดเลือกประทับใจอย่างเห็นได้ชัด",
      choices: ["so", "confident", "was", "impressed"],
      choicesTH: ["มาก/ถึงขนาด", "มั่นใจ (คุณศัพท์ — ผิด ควรเป็น confidently)", "เป็น", "ประทับใจ"],
      answer: 1,
      explanation: "คำที่ขยายกริยา answered ต้องเป็น<b>กริยาวิเศษณ์</b> (adverb) คือ <b>confidently</b> — confident เป็นคุณศัพท์ใช้ขยายคำนามหรือตามหลัง verb to be เท่านั้น โครงสร้างนี้คือ so + adv + that"
    },
    {
      id: "ST1-24", type: "ei", tag: "Determiners",
      question: "There are <u>less</u><sup>(1)</sup> job opportunities <u>for</u><sup>(2)</sup> graduates <u>who</u><sup>(3)</sup> lack practical <u>experience</u><sup>(4)</sup>.",
      questionTH: "มีโอกาสในการทำงานน้อยลงสำหรับบัณฑิตที่ขาดประสบการณ์เชิงปฏิบัติ",
      choices: ["less", "for", "who", "experience"],
      choicesTH: ["น้อยกว่า (ใช้ผิด ควรเป็น fewer)", "สำหรับ", "ผู้ซึ่ง", "ประสบการณ์"],
      answer: 0,
      explanation: "opportunities เป็น<b>นามนับได้พหูพจน์</b> ต้องใช้ <b>fewer</b> ไม่ใช่ less — less ใช้กับนามนับไม่ได้ (less time, less money) ส่วน fewer ใช้กับนามนับได้ (fewer jobs, fewer people)"
    },
    {
      id: "ST1-25", type: "ei", tag: "Relative Clauses",
      question: "The hotel <u>where</u><sup>(1)</sup> we stayed <u>in</u><sup>(2)</sup> last summer <u>has been</u><sup>(3)</sup> converted <u>into</u><sup>(4)</sup> luxury apartments.",
      questionTH: "โรงแรมที่เราพักเมื่อหน้าร้อนปีที่แล้วถูกดัดแปลงเป็นอพาร์ตเมนต์หรู",
      choices: ["where", "in", "has been", "into"],
      choicesTH: ["ที่ซึ่ง (มี in อยู่ในตัว)", "ใน (ซ้ำซ้อน — ผิด)", "ได้ถูก", "เป็น/ให้กลายเป็น"],
      answer: 1,
      explanation: "<b>where</b> เป็น relative adverb ที่มีความหมาย 'in which' อยู่ในตัวแล้ว จึง<b>ห้ามเติม in ซ้ำ</b> — ใช้ได้สองแบบ: the hotel where we stayed หรือ the hotel which we stayed <b>in</b> (เลือกอย่างใดอย่างหนึ่ง)"
    },
  ],
});
