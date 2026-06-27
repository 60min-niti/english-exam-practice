// Structure ชุดที่ 3 — Sentence Completion (ข้อ 1-13) + Error Identification (ข้อ 14-25)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 3,
  questions: [
    // ===== Sentence Completion =====
    {
      id: "ST3-01", type: "sc", tag: "Tense",
      question: "Researchers ______ the effects of microplastics on marine life for over a decade.",
      questionTH: "นักวิจัย ______ ผลกระทบของไมโครพลาสติกต่อสิ่งมีชีวิตทางทะเลมานานกว่าทศวรรษ",
      choices: ["had studied", "studied", "study", "have been studying"],
      choicesTH: ["ได้ศึกษาแล้ว (อดีตสมบูรณ์)", "ศึกษา (อดีต)", "ศึกษา (ปัจจุบัน)", "ได้ศึกษามาอย่างต่อเนื่อง (ปัจจุบันสมบูรณ์ต่อเนื่อง)"],
      answer: 3,
      explanation: "<b>for over a decade</b> บอกช่วงเวลาที่เริ่มในอดีตและ<b>ยังดำเนินต่อถึงปัจจุบัน</b> จึงใช้ Present Perfect Continuous <b>have been studying</b> — studied (Past Simple) สื่อว่าจบไปแล้ว ส่วน had studied ต้องมีเหตุการณ์อดีตอื่นมาเทียบ"
    },
    {
      id: "ST3-02", type: "sc", tag: "Conditionals",
      question: "The flight will be delayed ______ the weather improves within the next hour.",
      questionTH: "เที่ยวบินจะถูกเลื่อน ______ สภาพอากาศจะดีขึ้นภายในหนึ่งชั่วโมงข้างหน้า",
      choices: ["unless", "in case", "if", "because"],
      choicesTH: ["เว้นแต่/ถ้าไม่", "เผื่อว่า", "ถ้า", "เพราะ"],
      answer: 0,
      explanation: "ความหมายที่สมเหตุสมผลคือ 'ไฟลต์จะดีเลย์ <b>ถ้าอากาศไม่ดีขึ้น</b>' → <b>unless = if ... not</b> จึงตอบ unless — ถ้าใช้ if จะแปลว่า 'อากาศดีขึ้นแล้วไฟลต์จะดีเลย์' ซึ่งขัดตรรกะ"
    },
    {
      id: "ST3-03", type: "sc", tag: "Relative Clauses",
      question: "The Chao Phraya River, ______ flows through the heart of Bangkok, remains vital for transportation.",
      questionTH: "แม่น้ำเจ้าพระยา ______ ไหลผ่านใจกลางกรุงเทพฯ ยังคงมีความสำคัญต่อการคมนาคม",
      choices: ["that", "which", "what", "where"],
      choicesTH: ["ที่ (ห้ามใช้ในประโยคขยายแบบมีจุลภาค)", "ซึ่ง (ใช้กับสิ่งของ มีจุลภาค)", "สิ่งที่", "ที่ซึ่ง (สถานที่ + ประโยคเต็ม)"],
      answer: 1,
      explanation: "เป็น Non-defining clause (มี<b>เครื่องหมายจุลภาคคั่น</b>) ซึ่ง<b>ห้ามใช้ that</b> ต้องใช้ <b>which</b> สำหรับสิ่งของ/สถานที่ที่ทำหน้าที่ประธานของ clause — where ใช้ได้เมื่อตามด้วยประโยคเต็มที่มีประธานของตัวเอง"
    },
    {
      id: "ST3-04", type: "sc", tag: "Inversion",
      question: "Hardly had the meeting started ______ the chairman announced his resignation.",
      questionTH: "การประชุมเพิ่งจะเริ่มได้ไม่ทันไร ______ ประธานก็ประกาศลาออก",
      choices: ["when", "than", "that", "as soon as"],
      choicesTH: ["เมื่อ (คู่กับ hardly)", "กว่า (คู่กับ no sooner)", "ว่า", "ทันทีที่"],
      answer: 0,
      explanation: "โครงสร้างตายตัว <b>Hardly/Scarcely + had + S + V3 ... when ...</b> จึงตอบ <b>when</b> — อย่าสับสนกับ No sooner ... <b>than</b> ซึ่งเป็นอีกคู่หนึ่ง ข้อสอบชอบสลับสองคู่นี้"
    },
    {
      id: "ST3-05", type: "sc", tag: "Used to",
      question: "Having lived in Bangkok for years, she ______ driving in heavy traffic.",
      questionTH: "เพราะอาศัยอยู่ในกรุงเทพฯ มาหลายปี เธอจึง ______ การขับรถท่ามกลางการจราจรที่ติดขัด",
      choices: ["uses to", "used to", "is used to", "was used for"],
      choicesTH: ["รูปผิด", "เคย (ในอดีต)", "เคยชินกับ (be used to + V-ing)", "ถูกใช้เพื่อ"],
      answer: 2,
      explanation: "<b>be used to + V-ing</b> = เคยชินกับ (ชินกับการขับรถในรถติด) จึงตอบ <b>is used to driving</b> — ส่วน <b>used to + V1</b> แปลว่า 'เคยทำในอดีต (ตอนนี้ไม่ทำแล้ว)' ความหมายต่างกันสิ้นเชิง"
    },
    {
      id: "ST3-06", type: "sc", tag: "Gerund/Infinitive",
      question: "The new safety regulations require all passengers ______ their seatbelts at all times.",
      questionTH: "กฎความปลอดภัยใหม่กำหนดให้ผู้โดยสารทุกคน ______ เข็มขัดนิรภัยตลอดเวลา",
      choices: ["wearing", "wear", "worn", "to wear"],
      choicesTH: ["การคาด (gerund)", "คาด (ช่อง 1)", "ถูกคาด (ช่อง 3)", "ให้คาด (require + กรรม + to V)"],
      answer: 3,
      explanation: "โครงสร้าง <b>require + กรรม + to-infinitive</b> (require someone to do) จึงตอบ <b>to wear</b> — กลุ่มเดียวกัน: allow, encourage, advise, permit + กรรม + to V ทั้งหมด"
    },
    {
      id: "ST3-07", type: "sc", tag: "As if/As though",
      question: "He talks about the project ______ he were the one who designed it himself.",
      questionTH: "เขาพูดถึงโครงการนี้ ______ เขาเป็นคนออกแบบมันด้วยตัวเอง",
      choices: ["as if", "only if", "even if", "if only"],
      choicesTH: ["ราวกับว่า (+ were)", "ก็ต่อเมื่อ", "แม้ว่า", "ถ้าเพียงแต่"],
      answer: 0,
      explanation: "<b>as if/as though + Past Subjunctive (were)</b> = ราวกับว่า (ทั้งที่จริงไม่ใช่) จึงตอบ <b>as if</b> — สังเกตคำใบ้ 'he were' ซึ่งเป็นรูป Subjunctive ที่ใช้คู่กับ as if เมื่อสมมติสิ่งที่ไม่จริง"
    },
    {
      id: "ST3-08", type: "sc", tag: "Quantifiers",
      question: "______ of the information in this report comes from official government databases.",
      questionTH: "ข้อมูลในรายงานนี้ ______ มาจากฐานข้อมูลทางการของรัฐบาล",
      choices: ["Several", "Much", "Many", "A few"],
      choicesTH: ["หลาย (นับได้)", "ส่วนมาก (นับไม่ได้)", "จำนวนมาก (นับได้)", "เล็กน้อย (นับได้)"],
      answer: 1,
      explanation: "<b>information เป็นนามนับไม่ได้</b> จึงต้องใช้ <b>Much</b> (และสังเกตกริยา comes เอกพจน์สอดคล้องกัน) — Many, A few, Several ใช้กับนามนับได้พหูพจน์เท่านั้น"
    },
    {
      id: "ST3-09", type: "sc", tag: "Prepositions/Connectors",
      question: "The success of the recycling campaign depends largely ______ continued public participation.",
      questionTH: "ความสำเร็จของแคมเปญรีไซเคิลขึ้นอยู่ ______ การมีส่วนร่วมของประชาชนอย่างต่อเนื่องเป็นหลัก",
      choices: ["on", "with", "to", "for"],
      choicesTH: ["กับ/อยู่กับ (depend on)", "กับ", "ต่อ", "สำหรับ"],
      answer: 0,
      explanation: "<b>depend on</b> เป็นคู่กริยา-บุพบทตายตัว (ขึ้นอยู่กับ) จึงตอบ <b>on</b> — คู่ที่ออกบ่อย: rely on, consist of, result in, contribute to, succeed in ควรจำเป็นชุด"
    },
    {
      id: "ST3-10", type: "sc", tag: "Would rather",
      question: "Most commuters would rather ______ the train than drive through rush-hour traffic.",
      questionTH: "ผู้สัญจรส่วนใหญ่อยาก ______ รถไฟมากกว่าขับรถฝ่าการจราจรชั่วโมงเร่งด่วน",
      choices: ["taking", "took", "take", "to take"],
      choicesTH: ["การนั่ง", "นั่ง (อดีต)", "นั่ง/ใช้ (V1 — คู่กับ would rather)", "ที่จะนั่ง"],
      answer: 2,
      explanation: "<b>would rather + V1 (ไม่มี to) ... than ...</b> = อยากทำ...มากกว่า จึงตอบ <b>take</b> — would rather จัดเป็นกริยาช่วยกลุ่มเดียวกับ had better ที่ตามด้วยกริยาช่อง 1 ไม่ผัน"
    },
    {
      id: "ST3-11", type: "sc", tag: "Subject-Verb Agreement",
      question: "Ten years ______ a long time to spend on a single research project.",
      questionTH: "เวลาสิบปี ______ ช่วงเวลาที่ยาวนานสำหรับการทุ่มให้กับงานวิจัยชิ้นเดียว",
      choices: ["are", "is", "have been", "were"],
      choicesTH: ["เป็น (พหูพจน์)", "เป็น (เอกพจน์ — มองเป็นก้อนเดียว)", "เป็นมาแล้ว (พหูพจน์)", "เป็น (พหูพจน์ อดีต)"],
      answer: 1,
      explanation: "จำนวนเงิน เวลา ระยะทาง เมื่อมองเป็น<b>ก้อนเดียว</b> ถือเป็นเอกพจน์ → <b>Ten years is</b> a long time — แม้ years จะมีรูปพหูพจน์ แต่ความหมายคือ 'ช่วงเวลาหนึ่งช่วง'"
    },
    {
      id: "ST3-12", type: "sc", tag: "Participle",
      question: "______ the report twice, she was confident that it contained no errors.",
      questionTH: "______ ตรวจรายงานสองรอบแล้ว เธอจึงมั่นใจว่ามันไม่มีข้อผิดพลาด",
      choices: ["To check", "Checked", "Having checked", "Checking"],
      choicesTH: ["เพื่อตรวจ", "ถูกตรวจ (ผู้ถูกกระทำ)", "เมื่อได้ตรวจแล้ว (เสร็จก่อน)", "กำลังตรวจ (พร้อมกัน)"],
      answer: 2,
      explanation: "การตรวจรายงานเกิด<b>เสร็จก่อน</b>ความมั่นใจ จึงใช้ Perfect Participle <b>Having checked</b> (= After she had checked) — Checking สื่อว่าทำพร้อมกัน ส่วน Checked สื่อว่าเธอถูกตรวจ ซึ่งผิดความหมาย"
    },
    {
      id: "ST3-13", type: "sc", tag: "Indirect Questions",
      question: "Excuse me, could you tell me ______?",
      questionTH: "ขอโทษนะคะ ช่วยบอกฉันได้ไหมว่า ______",
      choices: ["where is the registration office", "the registration office is where", "where does the registration office locate", "where the registration office is"],
      answer: 3,
      choicesTH: ["สำนักงานลงทะเบียนอยู่ที่ไหน (เรียงแบบคำถามตรง)", "เรียงผิดไวยากรณ์", "ใช้ locate ผิด + เรียงคำถามตรง", "สำนักงานลงทะเบียนอยู่ที่ไหน (เรียงแบบบอกเล่า — ถูก)"],
      explanation: "คำถามทางอ้อม (ฝังในประโยคอื่น) ต้องเรียงแบบ<b>บอกเล่า</b>: where + <b>ประธาน + กริยา</b> = where the registration office is — ห้ามสลับกริยาขึ้นก่อนประธานแบบคำถามตรง (where is...)"
    },

    // ===== Error Identification =====
    {
      id: "ST3-14", type: "ei", tag: "Subject-Verb Agreement",
      question: "<u>Each</u><sup>(1)</sup> of the laboratories <u>are</u><sup>(2)</sup> equipped <u>with</u><sup>(3)</sup> modern safety <u>devices</u><sup>(4)</sup>.",
      questionTH: "ห้องปฏิบัติการแต่ละห้องติดตั้งอุปกรณ์ความปลอดภัยที่ทันสมัย",
      choices: ["Each", "are", "with", "devices"],
      choicesTH: ["แต่ละ (เอกพจน์)", "ถูก (พหูพจน์ — ผิด ควรเป็น is)", "ด้วย", "อุปกรณ์"],
      answer: 1,
      explanation: "ประธาน <b>Each</b> เป็นเอกพจน์เสมอ (ไม่ใช่ laboratories ใน of-phrase) กริยาจึงต้องเป็น <b>is equipped</b> — ข้อสอบชอบเอานามพหูพจน์มาคั่นหน้ากริยาเพื่อหลอกตา"
    },
    {
      id: "ST3-15", type: "ei", tag: "Tense",
      question: "We <u>will begin</u><sup>(1)</sup> the presentation <u>as soon as</u><sup>(2)</sup> the director <u>will arrive</u><sup>(3)</sup> <u>from</u><sup>(4)</sup> the airport.",
      questionTH: "เราจะเริ่มการนำเสนอทันทีที่ผู้อำนวยการเดินทางมาถึงจากสนามบิน",
      choices: ["will begin", "as soon as", "will arrive", "from"],
      choicesTH: ["จะเริ่ม", "ทันทีที่", "จะมาถึง (ใช้ will ในอนุประโยคเวลา — ผิด)", "จาก"],
      answer: 2,
      explanation: "ใน<b>อนุประโยคบอกเวลา</b> (after, before, when, as soon as, until) <b>ห้ามใช้ will</b> ต้องใช้ Present Simple แทนอนาคต: as soon as the director <b>arrives</b> — will อยู่ได้เฉพาะประโยคหลัก"
    },
    {
      id: "ST3-16", type: "ei", tag: "Word Form",
      question: "Visitors admire the <u>beautifully</u><sup>(1)</sup> architecture <u>of</u><sup>(2)</sup> the ancient temple, <u>which</u><sup>(3)</sup> dates back <u>to</u><sup>(4)</sup> the fourteenth century.",
      questionTH: "ผู้มาเยือนชื่นชมสถาปัตยกรรมอันงดงามของวัดโบราณ ซึ่งย้อนไปถึงศตวรรษที่สิบสี่",
      choices: ["beautifully", "of", "which", "to"],
      choicesTH: ["อย่างงดงาม (กริยาวิเศษณ์ — ผิด ควรเป็น beautiful)", "ของ", "ซึ่ง", "ถึง"],
      answer: 0,
      explanation: "คำที่ขยายคำนาม architecture ต้องเป็น<b>คุณศัพท์</b> คือ <b>beautiful</b> — beautifully เป็นกริยาวิเศษณ์ใช้ขยายกริยา (sing beautifully) ตำแหน่งหน้าคำนามใช้ไม่ได้"
    },
    {
      id: "ST3-17", type: "ei", tag: "Singular/Plural",
      question: "One of the most serious <u>problem</u><sup>(1)</sup> facing coastal cities <u>is</u><sup>(2)</sup> rising sea <u>levels</u><sup>(3)</sup> caused by <u>global</u><sup>(4)</sup> warming.",
      questionTH: "หนึ่งในปัญหาร้ายแรงที่สุดที่เมืองชายฝั่งเผชิญคือระดับน้ำทะเลที่สูงขึ้นจากภาวะโลกร้อน",
      choices: ["problem", "is", "levels", "global"],
      choicesTH: ["ปัญหา (เอกพจน์ — ผิด ควรเป็น problems)", "เป็น/คือ", "ระดับ", "ทั่วโลก"],
      answer: 0,
      explanation: "โครงสร้าง <b>One of the + พหูพจน์</b> เสมอ: one of the most serious <b>problems</b> (หนึ่งใน 'หลาย' ปัญหา) — ส่วนกริยา is ถูกแล้วเพราะประธานจริงคือ One (เอกพจน์)"
    },
    {
      id: "ST3-18", type: "ei", tag: "Gerund/Infinitive",
      question: "Many tourists <u>enjoy</u><sup>(1)</sup> <u>to explore</u><sup>(2)</sup> the floating markets <u>despite</u><sup>(3)</sup> the hot and humid <u>weather</u><sup>(4)</sup>.",
      questionTH: "นักท่องเที่ยวจำนวนมากเพลิดเพลินกับการเดินสำรวจตลาดน้ำ ทั้งที่อากาศร้อนและชื้น",
      choices: ["enjoy", "to explore", "despite", "weather"],
      choicesTH: ["เพลิดเพลิน", "ที่จะสำรวจ (to V — ผิด ควรเป็น exploring)", "ทั้งที่", "อากาศ"],
      answer: 1,
      explanation: "กริยา <b>enjoy</b> ต้องตามด้วย <b>Gerund (V-ing)</b> เสมอ: enjoy <b>exploring</b> — กลุ่มเดียวกัน: finish, avoid, mind, practice, suggest, consider ห้ามตามด้วย to-infinitive"
    },
    {
      id: "ST3-19", type: "ei", tag: "Since/For",
      question: "She <u>has worked</u><sup>(1)</sup> as a translator at the embassy <u>since</u><sup>(2)</sup> more than five years <u>and</u><sup>(3)</sup> plans to stay <u>longer</u><sup>(4)</sup>.",
      questionTH: "เธอทำงานเป็นล่ามที่สถานทูตมานานกว่าห้าปีแล้วและตั้งใจจะอยู่ต่อไปอีก",
      choices: ["has worked", "since", "and", "longer"],
      choicesTH: ["ได้ทำงาน", "ตั้งแต่ (ใช้กับช่วงเวลา — ผิด ควรเป็น for)", "และ", "นานกว่า"],
      answer: 1,
      explanation: "<b>more than five years</b> เป็น<b>ช่วงเวลา</b> (duration) ต้องใช้ <b>for</b> — since ใช้กับ<b>จุดเริ่มต้น</b>ของเวลา เช่น since 2019, since last March จำ: for + ช่วง / since + จุด"
    },
    {
      id: "ST3-20", type: "ei", tag: "Relative Clauses",
      question: "The documentary <u>who</u><sup>(1)</sup> won several international awards <u>explores</u><sup>(2)</sup> the impact <u>of</u><sup>(3)</sup> fast fashion <u>on</u><sup>(4)</sup> the environment.",
      questionTH: "สารคดีที่คว้ารางวัลระดับนานาชาติหลายรางวัลสำรวจผลกระทบของแฟชั่นเร็วต่อสิ่งแวดล้อม",
      choices: ["who", "explores", "of", "on"],
      choicesTH: ["ผู้ซึ่ง (ใช้กับคน — ผิด ควรเป็น which/that)", "สำรวจ", "ของ", "ต่อ"],
      answer: 0,
      explanation: "documentary เป็น<b>สิ่งของ</b> ต้องใช้ relative pronoun <b>which หรือ that</b> — who ใช้ได้กับคนเท่านั้น"
    },
    {
      id: "ST3-21", type: "ei", tag: "Adjective/Adverb",
      question: "The volunteers worked <u>hardly</u><sup>(1)</sup> all weekend <u>to prepare</u><sup>(2)</sup> temporary shelters <u>for</u><sup>(3)</sup> the flood <u>victims</u><sup>(4)</sup>.",
      questionTH: "อาสาสมัครทำงานอย่างหนักตลอดสุดสัปดาห์เพื่อเตรียมที่พักชั่วคราวให้ผู้ประสบภัยน้ำท่วม",
      choices: ["hardly", "to prepare", "for", "victims"],
      choicesTH: ["แทบจะไม่ (ผิด ควรเป็น hard = หนัก)", "เพื่อเตรียม", "ให้/สำหรับ", "ผู้ประสบภัย"],
      answer: 0,
      explanation: "'ทำงานหนัก' คือ work <b>hard</b> (hard เป็นทั้ง adj และ adv) — ส่วน <b>hardly</b> แปลว่า 'แทบจะไม่' (worked hardly = แทบไม่ได้ทำงาน) ความหมายกลับด้าน เป็นคู่หลอกยอดนิยม"
    },
    {
      id: "ST3-22", type: "ei", tag: "Passive Voice",
      question: "English <u>speaks</u><sup>(1)</sup> widely <u>throughout</u><sup>(2)</sup> the region <u>as</u><sup>(3)</sup> a language of business <u>and</u><sup>(4)</sup> tourism.",
      questionTH: "ภาษาอังกฤษถูกใช้พูดอย่างแพร่หลายทั่วภูมิภาคในฐานะภาษาของธุรกิจและการท่องเที่ยว",
      choices: ["speaks", "throughout", "as", "and"],
      choicesTH: ["พูด (รูปกระทำ — ผิด ควรเป็น is spoken)", "ตลอดทั่ว", "ในฐานะ", "และ"],
      answer: 0,
      explanation: "ภาษาอังกฤษ<b>ถูกพูด</b> (พูดเองไม่ได้) ต้องใช้ Passive: English <b>is spoken</b> widely — ประธานที่ไม่สามารถทำกริยาเองได้เป็นสัญญาณว่าต้องใช้รูป Passive"
    },
    {
      id: "ST3-23", type: "ei", tag: "Redundant Pronoun",
      question: "The economist who predicted the crisis <u>she</u><sup>(1)</sup> was invited <u>to advise</u><sup>(2)</sup> the government <u>on</u><sup>(3)</sup> its recovery <u>plan</u><sup>(4)</sup>.",
      questionTH: "นักเศรษฐศาสตร์ผู้ทำนายวิกฤตได้รับเชิญให้เป็นที่ปรึกษาแก่รัฐบาลเรื่องแผนฟื้นฟู",
      choices: ["she", "to advise", "on", "plan"],
      choicesTH: ["เธอ (ประธานซ้ำ — ผิด ต้องตัดทิ้ง)", "ให้เป็นที่ปรึกษา", "เกี่ยวกับ", "แผน"],
      answer: 0,
      explanation: "ประธานของประโยคคือ The economist (มี who-clause ขยาย) จึง<b>ห้ามใส่สรรพนาม she ซ้ำ</b>อีก — ตัด she ทิ้ง: The economist who predicted the crisis <b>was invited</b>... การใส่ประธานซ้อนเป็นจุดผิดที่ข้อสอบชอบซ่อนไว้หลัง clause ยาว ๆ"
    },
    {
      id: "ST3-24", type: "ei", tag: "Comparison",
      question: "Online courses are not always <u>as effective</u><sup>(1)</sup> <u>than</u><sup>(2)</sup> traditional classes <u>in developing</u><sup>(3)</sup> practical <u>skills</u><sup>(4)</sup>.",
      questionTH: "คอร์สออนไลน์ไม่ได้มีประสิทธิภาพเท่ากับชั้นเรียนแบบดั้งเดิมเสมอไปในการพัฒนาทักษะเชิงปฏิบัติ",
      choices: ["as effective", "than", "in developing", "skills"],
      choicesTH: ["มีประสิทธิภาพเท่า (as...as)", "กว่า (ผิด ควรเป็น as)", "ในการพัฒนา", "ทักษะ"],
      answer: 1,
      explanation: "โครงสร้างเปรียบเทียบเท่ากันคือ <b>as ... as</b>: not always as effective <b>as</b> traditional classes — than ใช้กับขั้นกว่า (more effective than) เท่านั้น ห้ามจับคู่ข้ามโครงสร้าง"
    },
    {
      id: "ST3-25", type: "ei", tag: "Word Form",
      question: "The new trade agreement is expected <u>to strength</u><sup>(1)</sup> economic ties <u>between</u><sup>(2)</sup> the two countries <u>over</u><sup>(3)</sup> the coming <u>decade</u><sup>(4)</sup>.",
      questionTH: "ข้อตกลงการค้าฉบับใหม่คาดว่าจะกระชับความสัมพันธ์ทางเศรษฐกิจระหว่างสองประเทศให้แน่นแฟ้นขึ้นในทศวรรษหน้า",
      choices: ["to strength", "between", "over", "decade"],
      choicesTH: ["ความแข็งแกร่ง (คำนาม — ผิด ควรเป็น to strengthen)", "ระหว่าง", "ตลอด", "ทศวรรษ"],
      answer: 0,
      explanation: "หลัง to ต้องเป็น<b>กริยา</b> แต่ strength เป็นคำนาม (ความแข็งแกร่ง) ต้องแก้เป็น <b>to strengthen</b> (ทำให้แข็งแกร่งขึ้น) — ชุดคำที่ควรจำ: strong (adj) / strength (n) / strengthen (v)"
    },
  ],
});
