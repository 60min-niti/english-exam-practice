// Vocabulary ชุดที่ 1 — Cloze (ข้อ 1-12) + Synonym (ข้อ 13-25)
// glosses = ความหมายไทยของแต่ละตัวเลือก, questionTH = คำแปลไทยของโจทย์ (ใช้ในหน้าเฉลย/คลังคำศัพท์)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "vocabulary",
  set: 1,
  questions: [
    // ===== Cloze: เลือกคำเติมช่องว่าง =====
    {
      id: "VC1-01", type: "cloze", tag: "Collocation",
      question: "The government launched a nationwide campaign to ______ awareness of the dangers of smoking.",
      questionTH: "รัฐบาลเปิดตัวแคมเปญทั่วประเทศเพื่อ ______ การตระหนักรู้ถึงอันตรายของการสูบบุหรี่",
      choices: ["raise", "rise", "arise", "lift"],
      glosses: ["ยก/สร้าง (มีกรรม)", "ลุกขึ้น/สูงขึ้น (ไม่มีกรรม)", "เกิดขึ้น (ปัญหา)", "ยกขึ้น/ยกเลิก (มาตรการ)"],
      answer: 0,
      explanation: "<b>raise awareness</b> เป็น collocation ตายตัว = สร้างความตระหนักรู้ (raise เป็นสกรรมกริยา มีกรรมตามได้) — rise และ arise เป็นอกรรมกริยา ไม่มีกรรมตาม ส่วน lift ใช้กับการยกของหรือยกเลิกมาตรการ (lift a ban)"
    },
    {
      id: "VC1-02", type: "cloze", tag: "Noun",
      question: "The two countries finally reached a peace ______ after years of difficult negotiation.",
      questionTH: "ในที่สุดสองประเทศก็บรรลุ ______ สันติภาพหลังการเจรจาที่ยากลำบากหลายปี",
      choices: ["argument", "agreement", "appointment", "achievement"],
      glosses: ["การโต้เถียง", "ข้อตกลง", "การนัดหมาย", "ความสำเร็จ"],
      answer: 1,
      explanation: "<b>agreement</b> = ข้อตกลง (reach an agreement = บรรลุข้อตกลง เป็น collocation มาตรฐาน) — argument = การโต้เถียง, appointment = นัดหมาย, achievement = ความสำเร็จ สังเกตว่าทุกตัวขึ้นต้นด้วย a- เพื่อหลอกตา"
    },
    {
      id: "VC1-03", type: "cloze", tag: "Verb",
      question: "Heavy rainfall in the north ______ severe flooding in several provinces.",
      questionTH: "ฝนที่ตกหนักทางภาคเหนือ ______ น้ำท่วมรุนแรงในหลายจังหวัด",
      choices: ["resulted", "led", "caused", "affected"],
      glosses: ["ส่งผล (ต้องใช้ result in)", "นำไปสู่ (ต้องใช้ lead to)", "ก่อให้เกิด (มีกรรมตรง)", "ส่งผลกระทบต่อ"],
      answer: 2,
      explanation: "<b>caused</b> = ก่อให้เกิด (cause + กรรมตรงได้ทันที) — result ต้องใช้ result <b>in</b>, lead ต้องใช้ lead <b>to</b> จึงผิดเพราะไม่มีบุพบท ส่วน affected (ส่งผลกระทบต่อ) ต้องตามด้วยสิ่งที่ถูกกระทบ ไม่ใช่ผลลัพธ์ที่เกิดใหม่"
    },
    {
      id: "VC1-04", type: "cloze", tag: "Noun",
      question: "The museum charges a small entrance ______ for foreign visitors.",
      questionTH: "พิพิธภัณฑ์เก็บ ______ เข้าชมเล็กน้อยจากผู้เยี่ยมชมชาวต่างชาติ",
      choices: ["fare", "fine", "fee", "toll"],
      glosses: ["ค่าโดยสาร", "ค่าปรับ", "ค่าธรรมเนียม", "ค่าผ่านทาง"],
      answer: 2,
      explanation: "<b>fee</b> = ค่าธรรมเนียม (entrance fee = ค่าเข้าชม) — fare = ค่าโดยสาร (taxi fare), fine = ค่าปรับ, toll = ค่าผ่านทาง ทั้งสี่คำแปลว่า 'ค่า...' เหมือนกันแต่ใช้คนละบริบท เป็นชุดคำที่ข้อสอบชอบออก"
    },
    {
      id: "VC1-05", type: "cloze", tag: "Adjective",
      question: "Scientists have not yet found a ______ cure for the disease; current treatments only relieve the symptoms temporarily.",
      questionTH: "นักวิทยาศาสตร์ยังไม่พบวิธีรักษาที่ ______ สำหรับโรคนี้ การรักษาในปัจจุบันเพียงบรรเทาอาการชั่วคราวเท่านั้น",
      choices: ["curable", "reliable", "permanent", "temporary"],
      glosses: ["รักษาให้หายได้", "น่าเชื่อถือ", "ถาวร", "ชั่วคราว"],
      answer: 2,
      explanation: "<b>permanent</b> = ถาวร — บริบทเทียบกับ 'relieve temporarily' (บรรเทาชั่วคราว) จึงต้องการคำตรงข้ามคือการรักษาแบบถาวร — temporary ขัดความหมาย, curable แปลว่ารักษาได้ (ใช้กับโรค ไม่ใช่กับ cure), reliable = น่าเชื่อถือ ไม่เข้าบริบท"
    },
    {
      id: "VC1-06", type: "cloze", tag: "Verb",
      question: "The company decided to ______ the launch of its new smartphone until next year.",
      questionTH: "บริษัทตัดสินใจ ______ การเปิดตัวสมาร์ตโฟนรุ่นใหม่ออกไปจนถึงปีหน้า",
      choices: ["postpone", "prevent", "abandon", "dismiss"],
      glosses: ["เลื่อนออกไป", "ป้องกัน", "ล้มเลิก/ทอดทิ้ง (ถาวร)", "ไล่ออก/ปัดตก"],
      answer: 0,
      explanation: "<b>postpone</b> = เลื่อนออกไป — คำใบ้คือ <b>until next year</b> แสดงว่ายังจะทำอยู่แต่เลื่อนเวลา — abandon = ล้มเลิกถาวร (ขัดกับ until), prevent = ป้องกัน, dismiss = ไล่ออก/ปัดตก"
    },
    {
      id: "VC1-07", type: "cloze", tag: "Collocation",
      question: "Employees who work overtime are ______ to extra pay under the labor law.",
      questionTH: "พนักงานที่ทำงานล่วงเวลา ______ ได้รับค่าตอบแทนเพิ่มตามกฎหมายแรงงาน",
      choices: ["entitled", "deserved", "awarded", "permitted"],
      glosses: ["มีสิทธิ์ได้รับ (be entitled to)", "สมควรได้รับ", "ได้รับการมอบ (รางวัล)", "ได้รับอนุญาตให้ (ทำ)"],
      answer: 0,
      explanation: "<b>be entitled to + คำนาม</b> = มีสิทธิ์ได้รับ (ตามกฎหมาย/กติกา) — deserve ไม่ใช้รูป passive กับ to แบบนี้ (ใช้ deserve extra pay ตรง ๆ), awarded ต้องเป็น be awarded extra pay (ไม่มี to), permitted ใช้กับการอนุญาตให้ 'ทำ' ไม่ใช่ 'ได้รับ'"
    },
    {
      id: "VC1-08", type: "cloze", tag: "Adjective",
      question: "The three-hour lecture was so ______ that several students fell asleep before it ended.",
      questionTH: "การบรรยายสามชั่วโมงนั้น ______ มากจนมีนักศึกษาหลายคนหลับก่อนจะจบ",
      choices: ["fascinating", "tedious", "informative", "persuasive"],
      glosses: ["น่าหลงใหล", "น่าเบื่อ ยืดยาด", "ให้ความรู้", "โน้มน้าวใจเก่ง"],
      answer: 1,
      explanation: "<b>tedious</b> = น่าเบื่อ ยืดยาด — คำใบ้คือนักศึกษาหลับ — fascinating (น่าหลงใหล), informative (ให้ความรู้), persuasive (โน้มน้าวเก่ง) ล้วนเป็นเชิงบวก ขัดกับผลที่ตามมา"
    },
    {
      id: "VC1-09", type: "cloze", tag: "Noun",
      question: "The bridge was closed immediately after engineers discovered a serious ______ in its supporting structure.",
      questionTH: "สะพานถูกปิดทันทีหลังจากวิศวกรพบ ______ ร้ายแรงในโครงสร้างรองรับ",
      choices: ["flaw", "error", "mistake", "failure"],
      glosses: ["ตำหนิ/จุดบกพร่อง (ในวัตถุ-ระบบ)", "ข้อผิดพลาด (การคำนวณ)", "ความผิดพลาด (การกระทำ)", "ความล้มเหลว (ทั้งระบบ)"],
      answer: 0,
      explanation: "<b>flaw</b> = ตำหนิ/จุดบกพร่องในตัววัตถุหรือระบบ (a flaw in the structure) — error และ mistake ใช้กับการกระทำหรือการคำนวณที่ผิด ส่วน failure คือความล้มเหลวทั้งระบบ ไม่ใช่จุดบกพร่องที่ตรวจพบ"
    },
    {
      id: "VC1-10", type: "cloze", tag: "Noun",
      question: "Fresh vegetables and fruits are an essential ______ of a healthy diet.",
      questionTH: "ผักและผลไม้สดเป็น ______ สำคัญของอาหารเพื่อสุขภาพ",
      choices: ["compartment", "component", "composition", "comparison"],
      glosses: ["ช่องเก็บของ", "ส่วนประกอบ", "การประพันธ์/ส่วนผสมโดยรวม", "การเปรียบเทียบ"],
      answer: 1,
      explanation: "<b>component</b> = ส่วนประกอบ (an essential component of = ส่วนประกอบสำคัญของ) — compartment = ช่องเก็บของ, composition = การประพันธ์/ส่วนผสมโดยรวม, comparison = การเปรียบเทียบ สี่คำหน้าตาคล้ายกันแต่ความหมายต่างสิ้นเชิง"
    },
    {
      id: "VC1-11", type: "cloze", tag: "Adverb",
      question: "The two research teams worked ______ for five years to develop the new vaccine.",
      questionTH: "ทีมวิจัยสองทีมทำงาน ______ เป็นเวลาห้าปีเพื่อพัฒนาวัคซีนตัวใหม่",
      choices: ["separately", "collaboratively", "reluctantly", "accidentally"],
      glosses: ["อย่างแยกกัน", "อย่างร่วมมือกัน", "อย่างไม่เต็มใจ", "โดยบังเอิญ"],
      answer: 1,
      explanation: "<b>collaboratively</b> = อย่างร่วมมือกัน — บริบทคือสองทีมร่วมกันพัฒนาวัคซีนตัวเดียว — separately (แยกกัน) ขัดกับการได้ผลงานร่วม, reluctantly = อย่างไม่เต็มใจ, accidentally = โดยบังเอิญ"
    },
    {
      id: "VC1-12", type: "cloze", tag: "Noun",
      question: "The prolonged drought has had a devastating ______ on rice production this year.",
      questionTH: "ภัยแล้งที่ยืดเยื้อได้ส่ง ______ อย่างรุนแรงต่อผลผลิตข้าวในปีนี้",
      choices: ["impact", "impression", "impulse", "income"],
      glosses: ["ผลกระทบ (have an impact on)", "ความประทับใจ", "แรงกระตุ้นชั่ววูบ", "รายได้"],
      answer: 0,
      explanation: "<b>have an impact on</b> = ส่งผลกระทบต่อ (collocation มาตรฐาน) — impression = ความประทับใจ (make an impression on), impulse = แรงกระตุ้นชั่ววูบ, income = รายได้"
    },

    // ===== Synonym: เลือกคำที่ความหมายใกล้เคียงกับคำขีดเส้นใต้ =====
    {
      id: "VC1-13", type: "syn", tag: "Verb",
      question: "The committee will <u>scrutinize</u> the budget proposal carefully before approving it.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "คณะกรรมการจะตรวจสอบข้อเสนองบประมาณอย่างละเอียดก่อนอนุมัติ",
      choices: ["examine", "ignore", "summarize", "distribute"],
      glosses: ["ตรวจสอบ", "เพิกเฉย", "สรุปย่อ", "แจกจ่าย"],
      answer: 0,
      explanation: "<b>scrutinize</b> = ตรวจสอบอย่างละเอียดถี่ถ้วน ≈ <b>examine</b> (ตรวจสอบ) — ignore = เพิกเฉย (ตรงข้าม), summarize = สรุปย่อ, distribute = แจกจ่าย"
    },
    {
      id: "VC1-14", type: "syn", tag: "Verb",
      question: "The new medication can <u>alleviate</u> the symptoms but cannot cure the disease itself.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "ยาตัวใหม่สามารถบรรเทาอาการได้ แต่ไม่สามารถรักษาตัวโรคให้หายได้",
      choices: ["worsen", "relieve", "identify", "prolong"],
      glosses: ["ทำให้แย่ลง", "บรรเทา", "ระบุ", "ยืดเวลา"],
      answer: 1,
      explanation: "<b>alleviate</b> = บรรเทา ทำให้ทุเลา ≈ <b>relieve</b> — worsen = ทำให้แย่ลง (ตรงข้าม), identify = ระบุ, prolong = ยืดเวลา"
    },
    {
      id: "VC1-15", type: "syn", tag: "Adjective",
      question: "His explanation was so <u>ambiguous</u> that nobody in the room knew what he really meant.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "คำอธิบายของเขากำกวมมากจนไม่มีใครในห้องเข้าใจว่าเขาหมายถึงอะไรกันแน่",
      choices: ["unclear", "detailed", "accurate", "convincing"],
      glosses: ["ไม่ชัดเจน กำกวม", "ละเอียด", "แม่นยำ", "น่าเชื่อถือ"],
      answer: 0,
      explanation: "<b>ambiguous</b> = กำกวม ตีความได้หลายแบบ ≈ <b>unclear</b> — คำใบ้ในประโยค: 'nobody knew what he meant' — detailed/accurate/convincing ล้วนเป็นเชิงบวกซึ่งขัดบริบท"
    },
    {
      id: "VC1-16", type: "syn", tag: "Adverb",
      question: "The region's economy relies <u>predominantly</u> on agriculture and food processing.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "เศรษฐกิจของภูมิภาคนี้พึ่งพาการเกษตรและการแปรรูปอาหารเป็นหลัก",
      choices: ["mainly", "slightly", "occasionally", "formerly"],
      glosses: ["โดยส่วนใหญ่ เป็นหลัก", "เล็กน้อย", "เป็นครั้งคราว", "แต่ก่อน"],
      answer: 0,
      explanation: "<b>predominantly</b> = โดยส่วนใหญ่ เป็นหลัก ≈ <b>mainly</b> — slightly = เล็กน้อย, occasionally = เป็นครั้งคราว, formerly = แต่ก่อน (เรื่องเวลา ไม่ใช่สัดส่วน)"
    },
    {
      id: "VC1-17", type: "syn", tag: "Adjective",
      question: "The witness gave a <u>vivid</u> account of the accident to the police.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "พยานเล่าเหตุการณ์อุบัติเหตุให้ตำรวจฟังอย่างเห็นภาพชัดเจน",
      choices: ["clear and detailed", "short and vague", "false and misleading", "emotional and biased"],
      glosses: ["ชัดเจนและละเอียด เห็นภาพ", "สั้นและคลุมเครือ", "เท็จและชวนเข้าใจผิด", "เต็มอารมณ์และมีอคติ"],
      answer: 0,
      explanation: "<b>vivid</b> = แจ่มชัด เห็นภาพ (a vivid account = คำบอกเล่าที่เห็นภาพชัดเจน) ≈ <b>clear and detailed</b> — ตัวเลือกอื่นล้วนสื่อความคลุมเครือ เท็จ หรืออคติ ซึ่งไม่ใช่ความหมายของ vivid"
    },
    {
      id: "VC1-18", type: "syn", tag: "Adverb",
      question: "Raising the minimum wage will <u>inevitably</u> lead to higher production costs.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "การขึ้นค่าแรงขั้นต่ำจะนำไปสู่ต้นทุนการผลิตที่สูงขึ้นอย่างหลีกเลี่ยงไม่ได้",
      choices: ["unavoidably", "possibly", "rarely", "temporarily"],
      glosses: ["อย่างหลีกเลี่ยงไม่ได้", "อาจจะ", "แทบไม่", "ชั่วคราว"],
      answer: 0,
      explanation: "<b>inevitably</b> = อย่างหลีกเลี่ยงไม่ได้ ≈ <b>unavoidably</b> (มาจาก inevitable = หลีกเลี่ยงไม่ได้) — possibly = อาจจะ (ความแน่นอนต่ำกว่ามาก), rarely = แทบไม่, temporarily = ชั่วคราว"
    },
    {
      id: "VC1-19", type: "syn", tag: "Adjective",
      question: "The ancient manuscript was so <u>fragile</u> that visitors were not allowed to touch it.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "เอกสารโบราณนั้นเปราะบางมากจนผู้เยี่ยมชมไม่ได้รับอนุญาตให้สัมผัส",
      choices: ["valuable", "delicate", "filthy", "heavy"],
      glosses: ["มีค่า", "บอบบาง เปราะ แตกง่าย", "สกปรกมาก", "หนัก"],
      answer: 1,
      explanation: "<b>fragile</b> = เปราะบาง แตกหักง่าย ≈ <b>delicate</b> — valuable (มีค่า) เป็นกับดัก: ของเก่ามักมีค่าจริงแต่ไม่ใช่ความหมายของ fragile ซึ่งเน้นความเสียหายง่าย"
    },
    {
      id: "VC1-20", type: "syn", tag: "Adjective",
      question: "The charity provides food and shelter to <u>destitute</u> families in rural areas.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "องค์กรการกุศลมอบอาหารและที่พักให้ครอบครัวที่ยากไร้ในพื้นที่ชนบท",
      choices: ["very poor", "very small", "unemployed", "uneducated"],
      glosses: ["ยากจนข้นแค้นมาก", "เล็กมาก", "ตกงาน", "ไม่มีการศึกษา"],
      answer: 0,
      explanation: "<b>destitute</b> = ยากไร้ ขัดสนอย่างมาก ≈ <b>very poor</b> — unemployed (ตกงาน) และ uneducated (ไม่มีการศึกษา) อาจเกี่ยวข้องกับความจนแต่ไม่ใช่ความหมายโดยตรงของคำ"
    },
    {
      id: "VC1-21", type: "syn", tag: "Adverb",
      question: "All applicants must submit the required documents <u>promptly</u> to avoid losing their place.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "ผู้สมัครทุกคนต้องยื่นเอกสารที่กำหนดโดยไม่ชักช้าเพื่อไม่ให้เสียสิทธิ์",
      choices: ["without delay", "in person", "in advance", "with great care"],
      glosses: ["โดยไม่ชักช้า ทันที", "ด้วยตนเอง", "ล่วงหน้า", "อย่างระมัดระวัง"],
      answer: 0,
      explanation: "<b>promptly</b> = ทันที ไม่ชักช้า ≈ <b>without delay</b> — in advance (ล่วงหน้า) เป็นกับดักเพราะเรื่องเวลาเหมือนกัน แต่ promptly เน้น 'เร็ว/ทันที' ไม่ใช่ 'ก่อนกำหนด'"
    },
    {
      id: "VC1-22", type: "syn", tag: "Adjective",
      question: "The CEO was <u>reluctant</u> to comment on the rumors about the merger.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "ซีอีโอลังเลที่จะให้ความเห็นเกี่ยวกับข่าวลือเรื่องการควบรวมกิจการ",
      choices: ["unwilling", "eager", "unable", "prepared"],
      glosses: ["ลังเล ไม่เต็มใจ", "กระตือรือร้น อยากทำ", "ทำไม่ได้ (ความสามารถ)", "เตรียมพร้อม"],
      answer: 0,
      explanation: "<b>reluctant</b> = ลังเล ไม่เต็มใจ ≈ <b>unwilling</b> — eager (กระตือรือร้น) ตรงข้ามชัดเจน, unable = ทำไม่ได้ (เรื่องความสามารถ ไม่ใช่ความเต็มใจ), prepared = เตรียมพร้อม"
    },
    {
      id: "VC1-23", type: "syn", tag: "Verb",
      question: "Decades of heavy industry have <u>contaminated</u> the river that runs through the city.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "อุตสาหกรรมหนักหลายทศวรรษได้ทำให้แม่น้ำที่ไหลผ่านเมืองปนเปื้อน",
      choices: ["polluted", "drained", "widened", "restored"],
      glosses: ["ทำให้เป็นมลพิษ", "ระบายน้ำออก", "ขยายให้กว้าง", "ฟื้นฟู (ตรงข้าม)"],
      answer: 0,
      explanation: "<b>contaminate</b> = ปนเปื้อน ทำให้สกปรก ≈ <b>pollute</b> — drained = ระบายน้ำออก, widened = ขยายให้กว้าง, restored = ฟื้นฟู (ตรงข้ามกับบริบท)"
    },
    {
      id: "VC1-24", type: "syn", tag: "Adjective",
      question: "The professor's conclusion was based on <u>sound</u> evidence collected over many years.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "ข้อสรุปของศาสตราจารย์ตั้งอยู่บนหลักฐานที่หนักแน่นซึ่งรวบรวมมาหลายปี",
      choices: ["audible", "reliable", "loud", "recent"],
      glosses: ["ที่ได้ยินได้", "หนักแน่น น่าเชื่อถือ", "เสียงดัง", "เมื่อเร็ว ๆ นี้"],
      answer: 1,
      explanation: "<b>sound</b> ในที่นี้เป็นคุณศัพท์ = หนักแน่น น่าเชื่อถือ ≈ <b>reliable</b> — audible (ได้ยินได้) และ loud (เสียงดัง) เป็นกับดักจากความหมายทั่วไปของ sound ที่แปลว่า 'เสียง' ข้อสอบชอบใช้คำหลายความหมายแบบนี้"
    },
    {
      id: "VC1-25", type: "syn", tag: "Adjective",
      question: "The negotiations between the two parties came to an <u>abrupt</u> end yesterday.<br><small>คำที่ขีดเส้นใต้มีความหมายใกล้เคียงกับข้อใดมากที่สุด</small>",
      questionTH: "การเจรจาระหว่างสองฝ่ายยุติลงอย่างกะทันหันเมื่อวานนี้",
      choices: ["sudden", "peaceful", "successful", "gradual"],
      glosses: ["กะทันหัน ฉับพลัน", "สงบสุข", "สำเร็จ", "ค่อยเป็นค่อยไป (ตรงข้าม)"],
      answer: 0,
      explanation: "<b>abrupt</b> = กะทันหัน ฉับพลัน ≈ <b>sudden</b> — gradual (ค่อยเป็นค่อยไป) คือคำตรงข้ามโดยตรง ส่วน peaceful และ successful บอกลักษณะผลลัพธ์ ไม่ใช่ความเร็ว"
    },
  ],
});
