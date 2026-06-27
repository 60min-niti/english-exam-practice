// Structure ชุดที่ 9 — Word Choice: เลือกคำที่ใช่จากกลุ่มคำที่หน้าตา/ความหมายใกล้กัน (confusable & near-synonym)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 9,
  questions: [
    {
      id: "ST9-01", type: "sc", tag: "Word Choice",
      question: "Could you please ______ me how to get to the central station from here?",
      questionTH: "ช่วย ______ ฉันหน่อยได้ไหมว่าจะไปสถานีกลางจากตรงนี้ยังไง",
      choices: ["tell", "talk", "speak", "say"],
      choicesTH: ["บอก (ใคร)", "พูดคุย", "พูด/ใช้ภาษา", "พูด (อะไร)"],
      answer: 0,
      explanation: "<b>tell</b> ตามด้วยกรรมคน (tell <u>me</u>) — say ตามด้วยสิ่งที่พูดไม่ใช่คน, speak/talk เป็นอกรรม (speak to / talk to)"
    },
    {
      id: "ST9-02", type: "sc", tag: "Word Choice",
      question: "I forgot my wallet at home — could you ______ me some money until tomorrow?",
      questionTH: "ฉันลืมกระเป๋าเงินไว้ที่บ้าน — ช่วย ______ เงินฉันหน่อยได้ไหมจนถึงพรุ่งนี้",
      choices: ["borrow", "owe", "loan", "lend"],
      choicesTH: ["ขอยืม (borrow from)", "เป็นหนี้", "เงินกู้/ให้กู้ (ทางการ)", "ให้ยืม (lend somebody something)"],
      answer: 3,
      explanation: "<b>lend me money</b> = ให้ฉันยืม (ผู้ให้ใช้ lend) — borrow คือผู้ยืม (borrow money <u>from</u> you), owe = เป็นหนี้"
    },
    {
      id: "ST9-03", type: "sc", tag: "Word Form",
      question: "The board of directors decided to ______ employees' salaries by five percent.",
      questionTH: "คณะกรรมการบริษัทตัดสินใจ ______ เงินเดือนพนักงานขึ้นห้าเปอร์เซ็นต์",
      choices: ["lift", "raise", "arise", "rise"],
      choicesTH: ["ยกของขึ้น", "เพิ่ม/ยก (มีกรรม)", "เกิดขึ้น (ปัญหา)", "เพิ่มขึ้นเอง (ไม่มีกรรม)"],
      answer: 1,
      explanation: "<b>raise</b> เป็นสกรรมกริยา ต้องมีกรรม (raise <u>salaries</u>) — rise/arise ไม่มีกรรม (ราคาขึ้นเอง), lift = ยกของขึ้นเชิงกายภาพ"
    },
    {
      id: "ST9-04", type: "sc", tag: "Word Form",
      question: "The new safety regulations had a significant ______ on factory accident rates.",
      questionTH: "กฎความปลอดภัยฉบับใหม่มี ______ อย่างมากต่ออัตราการเกิดอุบัติเหตุในโรงงาน",
      choices: ["affect", "effective", "effect", "affection"],
      choicesTH: ["ส่งผลต่อ (คำกริยา)", "มีประสิทธิภาพ (คำคุณศัพท์)", "ผลกระทบ (คำนาม)", "ความรักใคร่"],
      answer: 2,
      explanation: "หลัง 'a significant ______ on' ต้องเป็นคำนาม → <b>effect</b> (ผลกระทบ) — affect เป็นกริยา, affection = ความรัก, effective = คุณศัพท์"
    },
    {
      id: "ST9-05", type: "sc", tag: "Word Form",
      question: "Buying household items in bulk is far more ______ than purchasing them one by one.",
      questionTH: "การซื้อของใช้ในบ้านแบบยกลังประหยัดกว่าการซื้อทีละชิ้นมาก",
      choices: ["economics", "economy", "economic", "economical"],
      choicesTH: ["วิชาเศรษฐศาสตร์", "เศรษฐกิจ (คำนาม)", "เกี่ยวกับเศรษฐกิจ", "ประหยัด คุ้มค่า"],
      answer: 3,
      explanation: "<b>economical</b> = ประหยัดเงิน คุ้มค่า — economic = เกี่ยวกับเศรษฐกิจของประเทศ (economic growth) คนละความหมาย"
    },
    {
      id: "ST9-06", type: "sc", tag: "Word Form",
      question: "The peace treaty signed in 1648 is regarded as a ______ turning point in European history.",
      questionTH: "สนธิสัญญาสันติภาพที่ลงนามในปี 1648 ถือเป็นจุดเปลี่ยน ______ ในประวัติศาสตร์ยุโรป",
      choices: ["history", "historic", "historical", "historian"],
      choicesTH: ["ประวัติศาสตร์ (คำนาม)", "สำคัญทางประวัติศาสตร์", "เกี่ยวกับประวัติศาสตร์ (ทั่วไป)", "นักประวัติศาสตร์"],
      answer: 1,
      explanation: "<b>historic</b> = สำคัญ/เป็นหมุดหมายในประวัติศาสตร์ — historical = เกี่ยวกับอดีตทั่วไป (a historical novel) ความสำคัญน้อยกว่า"
    },
    {
      id: "ST9-07", type: "sc", tag: "Word Choice",
      question: "Wearing a helmet while cycling is a ______ precaution that could save your life.",
      questionTH: "การสวมหมวกกันน็อกขณะปั่นจักรยานเป็นข้อควรระวังที่ ______ และอาจช่วยชีวิตคุณได้",
      choices: ["sensible", "sensitive", "sensual", "sensory"],
      choicesTH: ["มีเหตุผล ฉลาดเลือก", "อ่อนไหว ไวต่อความรู้สึก", "เย้ายวน", "เกี่ยวกับประสาทสัมผัส"],
      answer: 0,
      explanation: "<b>sensible</b> = มีเหตุผล รอบคอบ — sensitive = อ่อนไหว/ไวต่อสิ่งเร้า คนละความหมาย (สองคำนี้สับสนบ่อย)"
    },
    {
      id: "ST9-08", type: "sc", tag: "Word Choice",
      question: "It was very ______ of you to send flowers while she was recovering in hospital.",
      questionTH: "เป็นความ ______ ของคุณมากที่ส่งดอกไม้มาให้ตอนเธอพักฟื้นอยู่โรงพยาบาล",
      choices: ["considerate", "considering", "considered", "considerable"],
      choicesTH: ["เอาใจใส่ผู้อื่น มีน้ำใจ", "เมื่อพิจารณาว่า", "ได้รับการพิจารณา", "มากมาย (ปริมาณ)"],
      answer: 0,
      explanation: "<b>considerate</b> = มีน้ำใจ คิดถึงผู้อื่น — considerable = มากมาย/จำนวนมาก (a considerable amount) คนละความหมาย"
    },
    {
      id: "ST9-09", type: "sc", tag: "Word Choice",
      question: "The ______ hum of the air conditioner ran all night without ever stopping.",
      questionTH: "เสียงหึ่ง ______ ของเครื่องปรับอากาศดังตลอดทั้งคืนโดยไม่เคยหยุด",
      choices: ["continual", "continuous", "continuing", "continued"],
      choicesTH: ["เกิดซ้ำเป็นช่วงๆ (มีหยุด)", "ต่อเนื่องไม่ขาดสาย", "ที่กำลังดำเนินอยู่", "ที่ดำเนินต่อ"],
      answer: 1,
      explanation: "<b>continuous</b> = ต่อเนื่องไม่มีสะดุด (เหมาะกับ 'without ever stopping') — continual = เกิดซ้ำๆ เป็นพักๆ มีช่วงหยุดคั่น"
    },
    {
      id: "ST9-10", type: "sc", tag: "Word Choice",
      question: "Please ______ the reports neatly on my desk before you leave the office.",
      questionTH: "ช่วย ______ รายงานให้เรียบร้อยบนโต๊ะฉันก่อนออกจากออฟฟิศด้วย",
      choices: ["lying", "lain", "lie", "lay"],
      choicesTH: ["กำลังนอน/โกหก", "นอน (ช่อง 3)", "นอน/อยู่ (ไม่มีกรรม)", "วาง (มีกรรม)"],
      answer: 3,
      explanation: "<b>lay</b> = วาง (สกรรมกริยา ต้องมีกรรม: lay <u>the reports</u>) — lie = นอน/อยู่ (อกรรม) ไม่มีกรรม"
    },
    {
      id: "ST9-11", type: "sc", tag: "Word Choice",
      question: "Remember to ______ your passport with you; you'll need it at the airport check-in.",
      questionTH: "อย่าลืม ______ พาสปอร์ตไปด้วย คุณจะต้องใช้ตอนเช็คอินที่สนามบิน",
      choices: ["fetch", "take", "bring", "carry"],
      choicesTH: ["ไปเอา(ของ)มา", "เอาไป (จากที่นี่ไปที่อื่น)", "เอามา (มาที่นี่)", "แบก/พกพา"],
      answer: 1,
      explanation: "<b>take</b> = นำไป (จากจุดที่พูดไปยังที่อื่น เช่นสนามบิน) — bring = นำมายังจุดที่พูด ทิศทางตรงข้าม"
    },
    {
      id: "ST9-12", type: "sc", tag: "Quantifier",
      question: "There is very ______ time left, so we must submit the application immediately.",
      questionTH: "เหลือเวลา ______ มาก เราจึงต้องส่งใบสมัครทันที",
      choices: ["several", "many", "few", "little"],
      choicesTH: ["หลาย (นับได้)", "มาก (นับได้)", "น้อย (นับได้)", "น้อย (นับไม่ได้)"],
      answer: 3,
      explanation: "<b>little</b> ใช้กับนามนับไม่ได้ (time) — few ใช้กับนามนับได้พหูพจน์ (few minutes) จึงไม่เข้ากับ time"
    },
    {
      id: "ST9-13", type: "sc", tag: "Quantifier",
      question: "A surprisingly large ______ of students signed up for the new robotics course.",
      questionTH: "นักเรียน ______ มากอย่างน่าประหลาดใจสมัครเรียนวิชาหุ่นยนต์ใหม่",
      choices: ["number", "deal", "amount", "quantity"],
      choicesTH: ["จำนวน (นับได้)", "จำนวนมาก (a great deal of)", "ปริมาณ (นับไม่ได้)", "ปริมาณ (นับไม่ได้)"],
      answer: 0,
      explanation: "<b>a large number of</b> ใช้กับนามนับได้พหูพจน์ (students) — amount/quantity ใช้กับนามนับไม่ได้ (amount of water)"
    },
    {
      id: "ST9-14", type: "sc", tag: "Word Choice",
      question: "Of the two proposals presented, the ______ offers a more realistic budget plan.",
      questionTH: "จากสองข้อเสนอที่นำเสนอ ______ ให้แผนงบประมาณที่สมจริงกว่า",
      choices: ["last", "latter", "latest", "later"],
      choicesTH: ["สุดท้าย", "อันหลัง (ในสองสิ่ง)", "ล่าสุด", "ทีหลัง (เวลา)"],
      answer: 1,
      explanation: "<b>the latter</b> = อันหลังจากสองสิ่ง (คู่กับ the former) — later = ภายหลังในแง่เวลา คนละความหมาย"
    },
    {
      id: "ST9-15", type: "sc", tag: "Connectors",
      question: "______ being an accomplished violinist, she is also a published novelist.",
      questionTH: "______ จะเป็นนักไวโอลินฝีมือดีแล้ว เธอยังเป็นนักเขียนนิยายที่มีผลงานตีพิมพ์ด้วย",
      choices: ["Besides", "Aside", "Beside", "Along"],
      choicesTH: ["นอกจาก (เพิ่มเติม)", "ไปด้านข้าง", "ข้างๆ (ตำแหน่ง)", "ตามไป"],
      answer: 0,
      explanation: "<b>Besides</b> = นอกเหนือจาก/อีกทั้ง (เพิ่มข้อมูล) — beside = อยู่ข้างๆ เชิงตำแหน่ง (sit beside me) สองคำนี้สับสนบ่อย"
    },
    {
      id: "ST9-16", type: "sc", tag: "Word Form",
      question: "Acting with honesty is the most important ______ that guides all her business decisions.",
      questionTH: "การกระทำด้วยความซื่อสัตย์เป็น ______ ที่สำคัญที่สุดที่ชี้นำการตัดสินใจทางธุรกิจของเธอ",
      choices: ["principle", "principled", "principally", "principal"],
      choicesTH: ["หลักการ ความเชื่อ (คำนาม)", "มีหลักการ (คุณศัพท์)", "โดยหลัก (กริยาวิเศษณ์)", "ครูใหญ่/หลัก (คุณศัพท์)"],
      answer: 0,
      explanation: "<b>principle</b> = หลักการ/หลักยึด (คำนาม) — principal = ครูใหญ่ หรือ 'หลัก/สำคัญ' (คุณศัพท์) ออกเสียงเหมือนกันแต่ต่างความหมาย"
    },
    {
      id: "ST9-17", type: "sc", tag: "Word Form",
      question: "The career counselor gave me some excellent ______ about applying to graduate school.",
      questionTH: "ที่ปรึกษาด้านอาชีพให้ ______ ดีๆ กับฉันเรื่องการสมัครเรียนต่อปริญญาโท",
      choices: ["advise", "advised", "advice", "advisable"],
      choicesTH: ["แนะนำ (คำกริยา)", "แนะนำแล้ว (อดีต)", "คำแนะนำ (คำนาม)", "ควรทำ (คุณศัพท์)"],
      answer: 2,
      explanation: "<b>advice</b> = คำแนะนำ (คำนาม นับไม่ได้) — advise = ให้คำแนะนำ (คำกริยา ออกเสียง /z/) ต่างกันทั้งความหมายและการออกเสียง"
    },
    {
      id: "ST9-18", type: "sc", tag: "Word Choice",
      question: "If we don't leave right now, we are going to ______ the last train home.",
      questionTH: "ถ้าเราไม่ออกเดี๋ยวนี้ เราจะ ______ รถไฟเที่ยวสุดท้ายกลับบ้าน",
      choices: ["loose", "lose", "miss", "loss"],
      choicesTH: ["หลวม (คุณศัพท์)", "ทำหาย/สูญเสีย (กริยา)", "พลาด/ตกรถ (กริยา)", "การสูญเสีย (คำนาม)"],
      answer: 2,
      explanation: "ตกรถไฟ/พลาดรถเที่ยวสุดท้าย ใช้ <b>miss</b> the train (คู่ตรงข้ามกับ catch the train = ขึ้นทัน) ไม่ใช่ lose — <b>lose</b> = ทำหาย/สูญเสีย, <b>loose</b> = หลวม (คุณศัพท์), <b>loss</b> = การสูญเสีย (คำนาม); หลัง going to ใช้กริยาช่องที่ 1"
    },
    {
      id: "ST9-19", type: "sc", tag: "Word Choice",
      question: "All of the team members attended the meeting ______ the manager, who was on leave.",
      questionTH: "สมาชิกในทีมทุกคนเข้าประชุม ______ ผู้จัดการ ซึ่งลางานอยู่",
      choices: ["accept", "besides", "expect", "except"],
      choicesTH: ["ยอมรับ (กริยา)", "นอกจาก...(ก็ยังมี)", "คาดหวัง (กริยา)", "ยกเว้น"],
      answer: 3,
      explanation: "<b>except</b> = ยกเว้น (ไม่รวมผู้จัดการ) — accept = ยอมรับ ออกเสียงคล้ายแต่คนละความหมาย; besides = 'นอกจาก...ก็ยังมีอีก' (รวมเข้าไป) ความหมายตรงข้าม"
    },
    {
      id: "ST9-20", type: "sc", tag: "Word Choice",
      question: "Always check the locks twice to ______ that the laboratory is completely secure overnight.",
      questionTH: "ตรวจกลอนสองครั้งเสมอเพื่อ ______ ว่าห้องแล็บปลอดภัยสนิทตลอดคืน",
      choices: ["endure", "insure", "ensure", "assure"],
      choicesTH: ["อดทน", "ทำประกันภัย", "ทำให้แน่ใจ (ว่าสิ่งใดเกิด)", "รับรองกับคน (assure somebody)"],
      answer: 2,
      explanation: "<b>ensure (that)...</b> = ทำให้มั่นใจว่าบางสิ่งเกิดขึ้น — assure ต้องตามด้วยกรรมคน (assure <u>you</u>), insure = ทำประกันทรัพย์สิน"
    },
    {
      id: "ST9-21", type: "sc", tag: "Word Choice",
      question: "Newcomers often need several months to fully ______ to the customs of a foreign country.",
      questionTH: "ผู้มาใหม่มักต้องใช้เวลาหลายเดือนกว่าจะ ______ กับธรรมเนียมของต่างประเทศได้เต็มที่",
      choices: ["adept", "adapted", "adapt", "adopt"],
      choicesTH: ["เชี่ยวชาญ (คุณศัพท์)", "ปรับตัวแล้ว (อดีต)", "ปรับตัว (adapt to)", "รับมาใช้/รับเลี้ยง"],
      answer: 2,
      explanation: "<b>adapt to</b> = ปรับตัวให้เข้ากับ — adopt = รับมาใช้/รับเลี้ยงบุตรบุญธรรม, adept = เชี่ยวชาญ (คุณศัพท์) สามคำนี้สับสนบ่อย"
    },
    {
      id: "ST9-22", type: "sc", tag: "Word Choice",
      question: "A crisp white wine beautifully ______ the delicate flavor of fresh seafood.",
      questionTH: "ไวน์ขาวรสสดชื่น ______ รสชาติละมุนของอาหารทะเลสดได้อย่างลงตัว",
      choices: ["implements", "compliments", "supplements", "complements"],
      choicesTH: ["นำไปปฏิบัติ", "ชมเชย", "เสริม/อาหารเสริม", "เสริมให้สมบูรณ์/เข้ากัน"],
      answer: 3,
      explanation: "<b>complement</b> = เสริมให้สมบูรณ์/เข้ากันได้ดี — compliment = คำชม ออกเสียงเหมือนกันแต่คนละความหมาย"
    },
    {
      id: "ST9-23", type: "sc", tag: "Word Choice",
      question: "Every autumn, millions of monarch butterflies ______ thousands of kilometers to warmer regions.",
      questionTH: "ทุกฤดูใบไม้ร่วง ผีเสื้อโมนาร์คนับล้านจะ ______ เป็นระยะทางหลายพันกิโลเมตรไปยังเขตที่อบอุ่นกว่า",
      choices: ["migrate", "emigrate", "immigrate", "navigate"],
      choicesTH: ["อพยพย้ายถิ่นตามฤดู", "ย้ายออกนอกประเทศ (คน)", "ย้ายเข้าประเทศ (คน)", "นำทาง"],
      answer: 0,
      explanation: "<b>migrate</b> = อพยพย้ายถิ่น (สัตว์/ตามฤดูกาล) — emigrate/immigrate ใช้กับคนย้ายประเทศ (ออก/เข้า)"
    },
    {
      id: "ST9-24", type: "sc", tag: "Word Choice",
      question: "The vehicle remained completely ______ at the intersection, waiting for the light to change.",
      questionTH: "รถยนต์จอด ______ สนิทที่สี่แยก รอสัญญาณไฟเปลี่ยน",
      choices: ["stationed", "static", "stationary", "stationery"],
      choicesTH: ["ประจำการ (ทหาร)", "นิ่ง/สถิต (เชิงเทคนิค)", "อยู่นิ่ง ไม่เคลื่อนที่", "เครื่องเขียน (คำนาม)"],
      answer: 2,
      explanation: "<b>stationary</b> = อยู่กับที่ ไม่เคลื่อนไหว — stationery = เครื่องเขียน (กระดาษ ปากกา) ออกเสียงเหมือนกันแต่คนละความหมาย"
    },
    {
      id: "ST9-25", type: "sc", tag: "Word Choice",
      question: "After a brief intermission, the conductor will ______ with the second half of the symphony.",
      questionTH: "หลังพักช่วงสั้นๆ วาทยกรจะ ______ กับซิมโฟนีครึ่งหลัง",
      choices: ["proceeds", "proceed", "precedent", "precede"],
      choicesTH: ["รายได้ (คำนาม)", "ดำเนินต่อ", "แบบอย่าง บรรทัดฐาน (คำนาม)", "มาก่อน/นำหน้า"],
      answer: 1,
      explanation: "<b>proceed (with)</b> = ดำเนินต่อไป — precede = มาก่อน/นำหน้า (เวลา/ลำดับ) ออกเสียงคล้ายแต่ความหมายตรงข้าม"
    }
  ]
});
