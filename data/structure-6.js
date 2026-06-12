// Structure ชุดที่ 6 — Sentence Completion (ข้อ 1-13) + Error Identification (ข้อ 14-25)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 6,
  questions: [
    // ===== Sentence Completion =====
    {
      id: "ST6-01", type: "sc", tag: "Tense",
      question: "The archaeologists ______ the ancient tomb for three months before they finally uncovered the burial chamber.",
      questionTH: "นักโบราณคดี ______ ขุดสำรวจสุสานโบราณมาสามเดือนก่อนที่จะค้นพบห้องฝังศพในที่สุด",
      choices: ["excavated", "had been excavating", "have excavated", "excavate"],
      choicesTH: ["ขุดสำรวจ (อดีต)", "ได้ขุดสำรวจมาอย่างต่อเนื่อง (อดีตสมบูรณ์ต่อเนื่อง)", "ได้ขุดสำรวจแล้ว (ปัจจุบันสมบูรณ์)", "ขุดสำรวจ (ปัจจุบัน)"],
      answer: 1,
      explanation: "การขุดดำเนินต่อเนื่องเป็นเวลา 3 เดือน<b>ก่อน</b>อีกเหตุการณ์ในอดีต (ค้นพบห้องฝังศพ) จึงใช้ Past Perfect Continuous <b>had been excavating</b> — เน้นความต่อเนื่องของการกระทำก่อนถึงจุดในอดีต"
    },
    {
      id: "ST6-02", type: "sc", tag: "Wish/Subjunctive",
      question: "Many city dwellers wish they ______ closer to nature, away from the noise and pollution.",
      questionTH: "คนเมืองหลายคนปรารถนาว่าพวกเขา ______ อยู่ใกล้ชิดธรรมชาติมากกว่านี้ ห่างจากเสียงดังและมลพิษ",
      choices: ["live", "lived", "have lived", "will live"],
      choicesTH: ["อาศัย (ปัจจุบัน)", "อาศัย (อดีต — ใช้กับ wish)", "ได้อาศัยแล้ว", "จะอาศัย"],
      answer: 1,
      explanation: "<b>wish + Past Simple</b> แสดงความปรารถนาที่ตรงข้ามกับความจริงในปัจจุบัน (อยากอยู่ใกล้ธรรมชาติ แต่จริง ๆ อยู่ในเมือง) จึงตอบ <b>lived</b> — หลัง wish ห้ามใช้ Present Simple หรือ will"
    },
    {
      id: "ST6-03", type: "sc", tag: "Gerund/Infinitive",
      question: "The new law allows citizens ______ government documents online without visiting an office.",
      questionTH: "กฎหมายใหม่อนุญาตให้ประชาชน ______ เอกสารราชการทางออนไลน์โดยไม่ต้องไปที่สำนักงาน",
      choices: ["access", "to access", "accessing", "accessed"],
      choicesTH: ["เข้าถึง (V1)", "ให้เข้าถึง (allow + กรรม + to V)", "การเข้าถึง", "เข้าถึงแล้ว"],
      answer: 1,
      explanation: "โครงสร้าง <b>allow + กรรม + to-infinitive</b> (allow someone to do) จึงตอบ <b>to access</b> — กลุ่มเดียวกัน: allow, permit, enable, encourage, require + กรรม + to V (ตรงกับที่หนังสือติวเน้นว่า allow เป็นกริยาที่ออกบ่อย)"
    },
    {
      id: "ST6-04", type: "sc", tag: "Conditionals",
      question: "Unless urgent action ______, many coastal cities could be underwater by the end of the century.",
      questionTH: "หากไม่มีการลงมืออย่างเร่งด่วน เมืองชายฝั่งหลายแห่งอาจจมอยู่ใต้น้ำภายในสิ้นศตวรรษนี้",
      choices: ["takes", "is taken", "will take", "took"],
      choicesTH: ["ลงมือ (รูปกระทำ)", "ถูกลงมือ/ถูกดำเนินการ (รูปถูกกระทำ)", "จะลงมือ", "ลงมือ (อดีต)"],
      answer: 1,
      explanation: "action <b>ถูกลงมือ/ดำเนินการ</b> (ทำกริยาเองไม่ได้) จึงต้องใช้ Passive <b>is taken</b> และในอนุประโยคเงื่อนไข (Unless) ห้ามใช้ will ต้องใช้ Present Simple — Unless = if...not"
    },
    {
      id: "ST6-05", type: "sc", tag: "Relative Clauses",
      question: "The vaccine, the development of ______ took less than a year, has been hailed as a scientific milestone.",
      questionTH: "วัคซีนซึ่งการพัฒนา ______ ใช้เวลาไม่ถึงหนึ่งปี ได้รับการยกย่องว่าเป็นหมุดหมายทางวิทยาศาสตร์",
      choices: ["that", "which", "it", "whose"],
      choicesTH: ["ที่", "ซึ่ง (the development of which)", "มัน", "ซึ่ง...ของ"],
      answer: 1,
      explanation: "โครงสร้าง 'the development of <b>which</b>' (= การพัฒนาของมัน) ใช้ which หลังบุพบท of ในอนุประโยคขยาย — that ใช้หลังบุพบทไม่ได้ ส่วน whose จะต้องเป็น 'whose development' (ไม่มี of)"
    },
    {
      id: "ST6-06", type: "sc", tag: "Inversion",
      question: "So rapidly ______ technology evolving that many skills become outdated within just a few years.",
      questionTH: "เทคโนโลยีพัฒนาอย่างรวดเร็วเสียจน ______ ทักษะหลายอย่างล้าสมัยภายในเวลาเพียงไม่กี่ปี",
      choices: ["is", "does", "has", "was"],
      choicesTH: ["เป็น/กำลัง (is...evolving)", "ทำ", "ได้", "เป็น (อดีต)"],
      answer: 0,
      explanation: "ขึ้นต้นด้วย <b>So + adverb</b> ต้องสลับกริยาช่วยขึ้นหน้า (Inversion) และกริยาแท้คือ evolving (V-ing) จึงใช้ <b>is</b>: So rapidly is technology evolving that... (โครงสร้าง So...that)"
    },
    {
      id: "ST6-07", type: "sc", tag: "Prepositions/Connectors",
      question: "The new factory will create thousands of jobs; ______, it may significantly increase local pollution.",
      questionTH: "โรงงานใหม่จะสร้างงานหลายพันตำแหน่ง ______ มันอาจเพิ่มมลพิษในท้องถิ่นอย่างมีนัยสำคัญ",
      choices: ["therefore", "however", "moreover", "thus"],
      choicesTH: ["ดังนั้น", "อย่างไรก็ตาม (แสดงความขัดแย้ง)", "ยิ่งไปกว่านั้น", "ด้วยเหตุนี้"],
      answer: 1,
      explanation: "สองประโยคขัดแย้งกัน (ข้อดี vs ข้อเสีย) จึงใช้คำเชื่อมแสดงความขัดแย้ง <b>however</b> — therefore/thus แสดงผลที่ตามมา ส่วน moreover เพิ่มข้อมูลในทิศทางเดียวกัน"
    },
    {
      id: "ST6-08", type: "sc", tag: "Participle",
      question: "______ how serious the consequences could be, the board postponed its decision until further study.",
      questionTH: "เพราะ ______ ว่าผลที่ตามมาอาจร้ายแรงเพียงใด คณะกรรมการจึงเลื่อนการตัดสินใจออกไปจนกว่าจะศึกษาเพิ่มเติม",
      choices: ["Realized", "Realizing", "To realize", "Realize"],
      choicesTH: ["ถูกตระหนัก (ผู้ถูกกระทำ)", "ตระหนัก (ผู้กระทำ)", "เพื่อตระหนัก", "ตระหนัก (V1)"],
      answer: 1,
      explanation: "คณะกรรมการ<b>เป็นผู้ตระหนัก</b> (ผู้กระทำ) จึงใช้ Present Participle <b>Realizing</b> ขึ้นต้น (= Because the board realized) — Realized (V3) จะสื่อว่าคณะกรรมการถูกตระหนัก ซึ่งผิดตรรกะ"
    },
    {
      id: "ST6-09", type: "sc", tag: "Subject-Verb Agreement",
      question: "The data collected from the surveys ______ that consumer confidence has declined for three consecutive months.",
      questionTH: "ข้อมูลที่รวบรวมจากแบบสำรวจ ______ ว่าความเชื่อมั่นผู้บริโภคลดลงสามเดือนติดต่อกัน",
      choices: ["suggest", "suggests", "suggesting", "to suggest"],
      choicesTH: ["บ่งชี้ (พหูพจน์)", "บ่งชี้ (เอกพจน์)", "กำลังบ่งชี้", "เพื่อบ่งชี้"],
      answer: 0,
      explanation: "<b>data</b> เป็นรูปพหูพจน์ของ datum ในเชิงวิชาการมักถือเป็นพหูพจน์ กริยาจึงใช้ <b>suggest</b> — ในข้อสอบเชิงวิชาการ data + กริยาพหูพจน์เป็นรูปที่ยอมรับ (the data suggest/show/indicate)<br><br>📌 <b>หมายเหตุ:</b> ข้อนี้เป็นจุดที่ภาษาอังกฤษ 2 แบบต่างกัน — แบบทางการ/วิชาการ (และบริติช) ถือ data เป็นพหูพจน์ (data suggest) ส่วนภาษาพูด/อเมริกันทั่วไปมักถือเป็นเอกพจน์ (data suggests) ข้อสอบแนววิชาการอย่าง TU-GET มักยึดแบบพหูพจน์ จึงเฉลยเป็น suggest"
    },
    {
      id: "ST6-10", type: "sc", tag: "Comparison",
      question: "Of all the renewable energy sources available today, solar power is by far ______.",
      questionTH: "ในบรรดาแหล่งพลังงานหมุนเวียนทั้งหมดที่มีอยู่ในปัจจุบัน พลังงานแสงอาทิตย์ ______ อย่างเห็นได้ชัด",
      choices: ["the most promising", "more promising", "as promising", "promising"],
      choicesTH: ["มีอนาคตสดใสที่สุด (ขั้นสูงสุด)", "มีอนาคตสดใสกว่า (ขั้นกว่า)", "มีอนาคตสดใสเท่า", "มีอนาคตสดใส"],
      answer: 0,
      explanation: "เปรียบเทียบกับ 'ทั้งหมด' (Of all the... sources) ต้องใช้ขั้นสูงสุด <b>the most promising</b> และ 'by far' เป็นคำขยายขั้นสูงสุด (by far the most...) — ขั้นกว่า (more) ใช้เทียบสองสิ่ง ไม่ใช่ทั้งกลุ่ม"
    },
    {
      id: "ST6-11", type: "sc", tag: "Gerund/Infinitive",
      question: "The organization is dedicated to ______ clean drinking water to remote rural communities.",
      questionTH: "องค์กรนี้อุทิศตนเพื่อ ______ น้ำดื่มสะอาดให้แก่ชุมชนชนบทห่างไกล",
      choices: ["provide", "providing", "provided", "provides"],
      choicesTH: ["จัดหา (V1)", "การจัดหา (gerund)", "จัดหาแล้ว (V3)", "จัดหา (เอกพจน์)"],
      answer: 1,
      explanation: "<b>be dedicated to + V-ing</b> (to ในที่นี้เป็นบุพบท ไม่ใช่ to-infinitive) จึงต้องตามด้วย Gerund <b>providing</b> — กลุ่มที่ to เป็นบุพบท: be dedicated to, look forward to, be committed to, be used to + V-ing"
    },
    {
      id: "ST6-12", type: "sc", tag: "Correlative Conjunctions",
      question: "The award recognizes individuals who have made outstanding contributions not only to science ______ to society as a whole.",
      questionTH: "รางวัลนี้ยกย่องบุคคลที่สร้างคุณูปการอันโดดเด่นไม่เพียงต่อวงการวิทยาศาสตร์ ______ ต่อสังคมโดยรวมด้วย",
      choices: ["and also", "but also", "as well", "or"],
      choicesTH: ["และยัง (รูปผิด)", "แต่ยัง (คู่กับ not only)", "เช่นกัน", "หรือ"],
      answer: 1,
      explanation: "คำเชื่อมคู่ <b>not only ... but also ...</b> เป็นคู่ตายตัว จึงตอบ <b>but also</b> — 'and also' ไม่ใช่รูปที่ถูกต้องของโครงสร้างนี้"
    },
    {
      id: "ST6-13", type: "sc", tag: "Subjunctive",
      question: "The doctor recommended that the patient ______ plenty of rest and avoid strenuous activity for two weeks.",
      questionTH: "แพทย์แนะนำว่าผู้ป่วย ______ พักผ่อนให้มากและหลีกเลี่ยงกิจกรรมหนักเป็นเวลาสองสัปดาห์",
      choices: ["gets", "get", "got", "is getting"],
      choicesTH: ["พักผ่อน (เอกพจน์)", "พักผ่อน (รูป subjunctive ไม่ผัน)", "พักผ่อน (อดีต)", "กำลังพักผ่อน"],
      answer: 1,
      explanation: "กริยากลุ่มแนะนำ/ข้อเสนอ (recommend, suggest, advise, propose) + that ต้องตามด้วย <b>Subjunctive</b> คือกริยาช่อง 1 ไม่ผัน จึงใช้ <b>get</b> แม้ประธาน the patient จะเป็นเอกพจน์"
    },

    // ===== Error Identification =====
    {
      id: "ST6-14", type: "ei", tag: "Subject-Verb Agreement",
      question: "Each of the proposed solutions <u>have</u><sup>(1)</sup> its own advantages <u>and</u><sup>(2)</sup> drawbacks, <u>making</u><sup>(3)</sup> the final decision <u>difficult</u><sup>(4)</sup>.",
      questionTH: "ทางออกที่เสนอมาแต่ละทางต่างมีข้อดีและข้อเสียของตัวเอง ทำให้การตัดสินใจขั้นสุดท้ายเป็นเรื่องยาก",
      choices: ["have", "and", "making", "difficult"],
      choicesTH: ["มี (พหูพจน์ — ผิด ควรเป็น has)", "และ", "ทำให้", "ยาก"],
      answer: 0,
      explanation: "ประธาน <b>Each</b> เป็นเอกพจน์เสมอ (ไม่ใช่ solutions ใน of-phrase) กริยาจึงต้องเป็น <b>has</b> — สังเกตคำว่า 'its own' (เอกพจน์) ในประโยคก็ยืนยันว่าประธานเป็นเอกพจน์"
    },
    {
      id: "ST6-15", type: "ei", tag: "Passive Voice",
      question: "Thousands of historical documents <u>were</u><sup>(1)</sup> <u>digitize</u><sup>(2)</sup> last year <u>to ensure</u><sup>(3)</sup> that future generations <u>can access</u><sup>(4)</sup> them.",
      questionTH: "เอกสารทางประวัติศาสตร์หลายพันฉบับถูกแปลงเป็นดิจิทัลเมื่อปีที่แล้วเพื่อให้คนรุ่นหลังเข้าถึงได้",
      choices: ["were", "digitize", "to ensure", "can access"],
      choicesTH: ["ถูก", "แปลงเป็นดิจิทัล (V1 — ผิด ควรเป็น digitized)", "เพื่อให้แน่ใจ", "สามารถเข้าถึง"],
      answer: 1,
      explanation: "รูป Passive ต้องเป็น <b>were + V3</b> จึงต้องแก้ digitize เป็น <b>digitized</b>: were digitized (ถูกแปลงเป็นดิจิทัล) — เอกสารทำกริยาเองไม่ได้ ต้องอยู่ในรูปถูกกระทำ"
    },
    {
      id: "ST6-16", type: "ei", tag: "Word Form",
      question: "The <u>availability</u><sup>(1)</sup> of affordable internet has <u>greatly</u><sup>(2)</sup> <u>wide</u><sup>(3)</sup> access to education in <u>rural</u><sup>(4)</sup> areas.",
      questionTH: "การมีอินเทอร์เน็ตราคาย่อมเยาได้ขยายการเข้าถึงการศึกษาในพื้นที่ชนบทอย่างมาก",
      choices: ["availability", "greatly", "wide", "rural"],
      choicesTH: ["การมีอยู่/ความพร้อมใช้", "อย่างมาก", "กว้าง (คุณศัพท์ — ผิด ควรเป็น widened)", "ชนบท"],
      answer: 2,
      explanation: "ตำแหน่งนี้ต้องเป็น<b>กริยา</b> (หลัง has greatly) แต่ wide เป็นคุณศัพท์ ต้องแก้เป็นกริยา <b>widened</b> (has greatly widened = ได้ขยายให้กว้างขึ้นอย่างมาก) — ชุดคำ: wide (adj) / widen (v) / width (n)"
    },
    {
      id: "ST6-17", type: "ei", tag: "Tense",
      question: "The professor <u>will explain</u><sup>(1)</sup> the experiment <u>in detail</u><sup>(2)</sup> as soon as all the students <u>will arrive</u><sup>(3)</sup> <u>in</u><sup>(4)</sup> the laboratory.",
      questionTH: "ศาสตราจารย์จะอธิบายการทดลองอย่างละเอียดทันทีที่นักศึกษาทุกคนมาถึงห้องปฏิบัติการ",
      choices: ["will explain", "in detail", "will arrive", "in"],
      choicesTH: ["จะอธิบาย", "อย่างละเอียด", "จะมาถึง (ใช้ will ในอนุประโยคเวลา — ผิด)", "ใน"],
      answer: 2,
      explanation: "ใน<b>อนุประโยคบอกเวลา</b> (as soon as, when, before, after, until) ห้ามใช้ will ต้องใช้ Present Simple แทนอนาคต: as soon as all the students <b>arrive</b> — will อยู่ได้เฉพาะประโยคหลัก"
    },
    {
      id: "ST6-18", type: "ei", tag: "Gerund/Infinitive",
      question: "Health experts strongly recommend <u>to reduce</u><sup>(1)</sup> sugar intake <u>and</u><sup>(2)</sup> <u>increasing</u><sup>(3)</sup> the amount of <u>physical</u><sup>(4)</sup> activity.",
      questionTH: "ผู้เชี่ยวชาญด้านสุขภาพแนะนำอย่างยิ่งให้ลดการบริโภคน้ำตาลและเพิ่มกิจกรรมทางกาย",
      choices: ["to reduce", "and", "increasing", "physical"],
      choicesTH: ["ที่จะลด (to V — ผิด ควรเป็น reducing)", "และ", "การเพิ่ม", "ทางกาย"],
      answer: 0,
      explanation: "กริยา <b>recommend</b> ตามด้วย <b>Gerund (V-ing)</b> และต้องขนานกับ increasing ที่ตามมา จึงต้องแก้ to reduce เป็น <b>reducing</b>: recommend reducing... and increasing..."
    },
    {
      id: "ST6-19", type: "ei", tag: "Pronoun Agreement",
      question: "Neither of the two candidates <u>has revealed</u><sup>(1)</sup> <u>their</u><sup>(2)</sup> detailed economic policy <u>during</u><sup>(3)</sup> the televised <u>debate</u><sup>(4)</sup>.",
      questionTH: "ผู้สมัครทั้งสองคนต่างยังไม่ได้เปิดเผยนโยบายเศรษฐกิจโดยละเอียดในการดีเบตที่ถ่ายทอดทางโทรทัศน์",
      choices: ["has revealed", "their", "during", "debate"],
      choicesTH: ["ได้เปิดเผย", "ของพวกเขา (พหูพจน์ — ผิด ควรเป็น his or her)", "ระหว่าง", "การดีเบต"],
      answer: 1,
      explanation: "<b>Neither</b> เป็นเอกพจน์ (สังเกตกริยา has revealed) สรรพนามจึงต้องเป็นเอกพจน์ <b>his or her</b> — Neither/Either/Each รับสรรพนามเอกพจน์ตามหลักไวยากรณ์มาตรฐานของข้อสอบ"
    },
    {
      id: "ST6-20", type: "ei", tag: "Adjective/Adverb",
      question: "The audience listened <u>attentive</u><sup>(1)</sup> as the speaker <u>described</u><sup>(2)</sup> her <u>remarkable</u><sup>(3)</sup> journey <u>across</u><sup>(4)</sup> the desert.",
      questionTH: "ผู้ฟังตั้งใจฟังขณะที่ผู้บรรยายเล่าถึงการเดินทางอันน่าทึ่งของเธอข้ามทะเลทราย",
      choices: ["attentive", "described", "remarkable", "across"],
      choicesTH: ["ตั้งใจ (คุณศัพท์ — ผิด ควรเป็น attentively)", "บรรยาย/เล่า", "น่าทึ่ง", "ข้าม"],
      answer: 0,
      explanation: "คำที่ขยายกริยา listened ต้องเป็น<b>กริยาวิเศษณ์</b> คือ <b>attentively</b> — attentive เป็นคุณศัพท์ใช้ขยายคำนามเท่านั้น (an attentive audience)"
    },
    {
      id: "ST6-21", type: "ei", tag: "Prepositions/Connectors",
      question: "The findings of the study are <u>consistent</u><sup>(1)</sup> <u>to</u><sup>(2)</sup> earlier research <u>conducted</u><sup>(3)</sup> in several other <u>countries</u><sup>(4)</sup>.",
      questionTH: "ผลการศึกษานี้สอดคล้องกับงานวิจัยก่อนหน้าที่ทำในอีกหลายประเทศ",
      choices: ["consistent", "to", "conducted", "countries"],
      choicesTH: ["สอดคล้อง", "กับ (บุพบทผิด ควรเป็น with)", "ที่จัดทำ", "ประเทศ"],
      answer: 1,
      explanation: "<b>consistent</b> ต้องคู่กับบุพบท <b>with</b> (consistent with = สอดคล้องกับ) ไม่ใช่ to — คู่บุพบทที่ต้องจำ: consistent with, similar to, different from, familiar with"
    },
    {
      id: "ST6-22", type: "ei", tag: "Determiners",
      question: "The scientists collected <u>many</u><sup>(1)</sup> <u>informations</u><sup>(2)</sup> about the migratory patterns <u>of</u><sup>(3)</sup> the endangered <u>birds</u><sup>(4)</sup>.",
      questionTH: "นักวิทยาศาสตร์รวบรวมข้อมูลจำนวนมากเกี่ยวกับรูปแบบการอพยพของนกที่ใกล้สูญพันธุ์",
      choices: ["many", "informations", "of", "birds"],
      choicesTH: ["จำนวนมาก", "ข้อมูล (นับไม่ได้ — ผิด ห้ามเติม s)", "ของ", "นก"],
      answer: 1,
      explanation: "<b>information</b> เป็นนามนับไม่ได้ <b>ไม่มีรูปพหูพจน์</b> และใช้ many ไม่ได้ ต้องแก้เป็น 'much information' หรือ 'a lot of information' — กลุ่มนับไม่ได้: information, advice, knowledge, equipment, research"
    },
    {
      id: "ST6-23", type: "ei", tag: "Parallel Structure",
      question: "The training program focuses on <u>improving</u><sup>(1)</sup> communication, <u>building</u><sup>(2)</sup> confidence, and <u>development</u><sup>(3)</sup> leadership <u>skills</u><sup>(4)</sup>.",
      questionTH: "โปรแกรมฝึกอบรมเน้นการพัฒนาการสื่อสาร การสร้างความมั่นใจ และการพัฒนาทักษะความเป็นผู้นำ",
      choices: ["improving", "building", "development", "skills"],
      choicesTH: ["การพัฒนา (V-ing)", "การสร้าง (V-ing)", "การพัฒนา (คำนาม — ผิด ควรเป็น developing)", "ทักษะ"],
      answer: 2,
      explanation: "รายการหลัง on ต้องเป็น Gerund ขนานกัน: <b>improving</b>..., <b>building</b>..., and <b>developing</b>... — development เป็นคำนามจึงไม่ขนาน ต้องแก้เป็น developing (V-ing)"
    },
    {
      id: "ST6-24", type: "ei", tag: "Verb Form",
      question: "The number of tourists visiting the national park <u>has raised</u><sup>(1)</sup> sharply, <u>causing</u><sup>(2)</sup> serious <u>concern</u><sup>(3)</sup> about the <u>fragile</u><sup>(4)</sup> ecosystem.",
      questionTH: "จำนวนนักท่องเที่ยวที่มาเยือนอุทยานแห่งชาติเพิ่มสูงขึ้นอย่างรวดเร็ว ก่อให้เกิดความกังวลอย่างยิ่งต่อระบบนิเวศที่เปราะบาง",
      choices: ["has raised", "causing", "concern", "fragile"],
      choicesTH: ["ได้สูงขึ้น (raise = ยก/ต้องมีกรรม — ผิด ควรเป็น has risen)", "ก่อให้เกิด", "ความกังวล", "เปราะบาง"],
      answer: 0,
      explanation: "'จำนวนเพิ่มขึ้นเอง' ต้องใช้ <b>rise</b> (อกรรมกริยา ไม่มีกรรม): has <b>risen</b> sharply — ส่วน raise เป็นสกรรมกริยา (ต้องมีกรรม เช่น raise prices) จึงใช้ผิดที่นี่ จำคู่: rise–rose–risen (ขึ้นเอง) / raise–raised–raised (ยกสิ่งอื่น)"
    },
    {
      id: "ST6-25", type: "ei", tag: "Relative Clauses",
      question: "The journalist interviewed several refugees <u>who's</u><sup>(1)</sup> homes <u>had been</u><sup>(2)</sup> destroyed <u>during</u><sup>(3)</sup> the <u>conflict</u><sup>(4)</sup>.",
      questionTH: "นักข่าวสัมภาษณ์ผู้ลี้ภัยหลายคนซึ่งบ้านของพวกเขาถูกทำลายระหว่างความขัดแย้ง",
      choices: ["who's", "had been", "during", "conflict"],
      choicesTH: ["who's (= who is — ผิด ควรเป็น whose)", "ได้ถูก", "ระหว่าง", "ความขัดแย้ง"],
      answer: 0,
      explanation: "ต้องการคำแสดง<b>ความเป็นเจ้าของ</b> (บ้าน 'ของ' ผู้ลี้ภัย) คือ <b>whose</b> — 'who's' เป็นรูปย่อของ who is/who has ซึ่งความหมายผิด เป็นคู่หลอกที่ออกบ่อย (whose ≠ who's)"
    },
  ],
});
