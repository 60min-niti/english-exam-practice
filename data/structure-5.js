// Structure ชุดที่ 5 — Sentence Completion (ข้อ 1-13) + Error Identification (ข้อ 14-25)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 5,
  questions: [
    // ===== Sentence Completion =====
    {
      id: "ST5-01", type: "sc", tag: "Tense",
      question: "By the time the new regulations take effect next month, most factories ______ their waste treatment systems.",
      questionTH: "เมื่อถึงตอนที่กฎระเบียบใหม่มีผลบังคับใช้เดือนหน้า โรงงานส่วนใหญ่ก็คง ______ ระบบบำบัดของเสียเรียบร้อยแล้ว",
      choices: ["upgrade", "will upgrade", "will have upgraded", "have upgraded"],
      choicesTH: ["ปรับปรุง (ปัจจุบัน)", "จะปรับปรุง (อนาคต)", "จะปรับปรุงเสร็จแล้ว (อนาคตสมบูรณ์)", "ได้ปรับปรุงแล้ว (ปัจจุบันสมบูรณ์)"],
      answer: 2,
      explanation: "'By the time + เหตุการณ์อนาคต' ที่การกระทำจะ<b>เสร็จก่อน</b>ถึงจุดนั้น ใช้ Future Perfect <b>will have upgraded</b> — Present Perfect (have upgraded) ใช้กับสิ่งที่เสร็จ ณ ปัจจุบัน ไม่ใช่อนาคต"
    },
    {
      id: "ST5-02", type: "sc", tag: "Conditionals",
      question: "If consumers were more aware of the environmental cost, they ______ fewer single-use products.",
      questionTH: "ถ้าผู้บริโภคตระหนักถึงต้นทุนด้านสิ่งแวดล้อมมากกว่านี้ พวกเขาก็คง ______ ผลิตภัณฑ์ใช้ครั้งเดียวน้อยลง",
      choices: ["buy", "would buy", "will buy", "had bought"],
      choicesTH: ["ซื้อ (ปัจจุบัน)", "คงซื้อ (เงื่อนไขแบบ 2)", "จะซื้อ (อนาคต)", "ได้ซื้อแล้ว (อดีตสมบูรณ์)"],
      answer: 1,
      explanation: "If-clause ใช้ Past Simple (were) = เงื่อนไขแบบที่ 2 (สมมติตรงข้ามปัจจุบัน) ประโยคหลักต้องใช้ <b>would + V1</b> คือ <b>would buy</b> — สังเกต 'were' ที่ใช้กับทุกประธานในรูป Subjunctive"
    },
    {
      id: "ST5-03", type: "sc", tag: "Gerund/Infinitive",
      question: "The airline apologized for the delay and promised ______ affected passengers with meal vouchers.",
      questionTH: "สายการบินขอโทษสำหรับความล่าช้าและสัญญาว่าจะ ______ ผู้โดยสารที่ได้รับผลกระทบด้วยคูปองอาหาร",
      choices: ["compensating", "to compensate", "compensate", "compensated"],
      choicesTH: ["การชดเชย (gerund)", "จะชดเชย (to V)", "ชดเชย (V1)", "ชดเชยแล้ว (V3)"],
      answer: 1,
      explanation: "กริยา <b>promise</b> ตามด้วย <b>to-infinitive</b> เสมอ จึงตอบ <b>to compensate</b> — กลุ่มที่ตามด้วย to V: promise, agree, decide, hope, plan, refuse, offer"
    },
    {
      id: "ST5-04", type: "sc", tag: "Relative Clauses",
      question: "The era ______ people relied entirely on printed newspapers for information has largely passed.",
      questionTH: "ยุคสมัย ______ ผู้คนพึ่งพาหนังสือพิมพ์ฉบับพิมพ์ในการหาข้อมูลโดยสมบูรณ์ ได้ผ่านพ้นไปเป็นส่วนใหญ่แล้ว",
      choices: ["which", "when", "what", "whose"],
      choicesTH: ["ซึ่ง (ทำหน้าที่ประธาน/กรรม)", "ที่/เมื่อ (ใช้กับเวลา)", "สิ่งที่", "ซึ่ง...ของ"],
      answer: 1,
      explanation: "ขยายคำนามที่บอก<b>เวลา</b> (The era) และตามด้วยประโยคเต็มที่มีประธานของตัวเอง (people relied...) จึงใช้ relative adverb <b>when</b> — which จะใช้ได้ก็ต่อเมื่อตามด้วยช่องว่างของประธาน/กรรม ไม่ใช่ประโยคสมบูรณ์"
    },
    {
      id: "ST5-05", type: "sc", tag: "Passive Voice",
      question: "A significant portion of the world's plastic waste ______ into the oceans every year, threatening marine life.",
      questionTH: "ขยะพลาสติกของโลกส่วนใหญ่ ______ ลงสู่มหาสมุทรทุกปี ซึ่งคุกคามสิ่งมีชีวิตทางทะเล",
      choices: ["dumps", "is dumped", "dumping", "have dumped"],
      choicesTH: ["ทิ้ง (รูปกระทำ)", "ถูกทิ้ง (รูปถูกกระทำ)", "กำลังทิ้ง", "ได้ทิ้งแล้ว"],
      answer: 1,
      explanation: "ขยะ<b>ถูกทิ้ง</b> (ทำกริยาเองไม่ได้) จึงใช้ Passive <b>is dumped</b> — และประธาน A significant portion เป็นเอกพจน์ กริยาจึงเป็น is (ไม่ใช่ are)"
    },
    {
      id: "ST5-06", type: "sc", tag: "Inversion",
      question: "Not until the final report was published ______ the full scale of the problem become clear.",
      questionTH: "กว่าที่รายงานฉบับสุดท้ายจะถูกเผยแพร่ ______ ขนาดที่แท้จริงของปัญหาจึงปรากฏชัด",
      choices: ["that", "did", "had", "was"],
      choicesTH: ["ว่า", "จึงได้ (สลับประธาน-กริยาช่วย)", "ได้ (อดีตสมบูรณ์)", "เป็น (อดีต)"],
      answer: 1,
      explanation: "ขึ้นต้นด้วย <b>Not until...</b> ต้องสลับประธานกับกริยาช่วยในประโยคหลัก (Inversion) และกริยาหลักคือ become (V1) จึงใช้ <b>did</b>: did the full scale become clear"
    },
    {
      id: "ST5-07", type: "sc", tag: "Quantifiers",
      question: "Although the museum has thousands of artifacts, only ______ of them are on display at any given time.",
      questionTH: "แม้พิพิธภัณฑ์จะมีโบราณวัตถุหลายพันชิ้น แต่มีเพียง ______ เท่านั้นที่จัดแสดงในแต่ละช่วงเวลา",
      choices: ["a little", "a few", "much", "less"],
      choicesTH: ["เล็กน้อย (นับไม่ได้)", "ไม่กี่ (นับได้)", "มาก (นับไม่ได้)", "น้อยกว่า"],
      answer: 1,
      explanation: "artifacts เป็นนามนับได้พหูพจน์ จึงใช้ <b>a few</b> (จำนวนไม่กี่) — a little และ much ใช้กับนามนับไม่ได้ ส่วน less ใช้เปรียบเทียบกับนามนับไม่ได้"
    },
    {
      id: "ST5-08", type: "sc", tag: "Participle",
      question: "______ from space, the Earth appears as a fragile blue sphere surrounded by darkness.",
      questionTH: "______ จากอวกาศ โลกปรากฏเป็นทรงกลมสีน้ำเงินอันเปราะบางท่ามกลางความมืด",
      choices: ["Seeing", "Seen", "To see", "Having seen"],
      choicesTH: ["มองเห็น (ผู้กระทำ)", "ถูกมองเห็น (ผู้ถูกกระทำ)", "เพื่อมองเห็น", "เมื่อได้เห็นแล้ว"],
      answer: 1,
      explanation: "โลก<b>ถูกมองเห็น</b> (ผู้ถูกกระทำ) จึงใช้ Past Participle <b>Seen</b> ขึ้นต้นแบบ Participial Phrase (= When it is seen from space) — Seeing สื่อว่าโลกเป็นผู้มอง ซึ่งผิดตรรกะ"
    },
    {
      id: "ST5-09", type: "sc", tag: "Subject-Verb Agreement",
      question: "Neither the scientists nor the lead researcher ______ willing to comment before the findings are peer-reviewed.",
      questionTH: "ทั้งทีมนักวิทยาศาสตร์และหัวหน้าผู้วิจัยต่างก็ไม่ ______ เต็มใจให้ความเห็นก่อนที่ผลการศึกษาจะผ่านการตรวจทานโดยผู้ทรงคุณวุฒิ",
      choices: ["are", "were", "is", "have been"],
      choicesTH: ["เป็น (พหูพจน์)", "เป็น (พหูพจน์ อดีต)", "เป็น (เอกพจน์)", "ได้เป็น (พหูพจน์)"],
      answer: 2,
      explanation: "<b>Neither A nor B</b> กริยาผันตามตัวที่อยู่<b>ใกล้กริยาที่สุด</b> คือ the lead researcher (เอกพจน์) จึงใช้ <b>is</b> — ถ้าสลับเป็น Neither the researcher nor the scientists จึงจะใช้ are"
    },
    {
      id: "ST5-10", type: "sc", tag: "Prepositions/Connectors",
      question: "______ its small size, the country has become a major hub for international finance and trade.",
      questionTH: "______ ขนาดที่เล็ก ประเทศนี้ก็กลายเป็นศูนย์กลางสำคัญของการเงินและการค้าระหว่างประเทศ",
      choices: ["Because of", "Despite", "However", "Therefore"],
      choicesTH: ["เพราะ (+ วลีนาม)", "ทั้งที่/แม้จะมี (+ วลีนาม)", "อย่างไรก็ตาม", "ดังนั้น"],
      answer: 1,
      explanation: "สองส่วนขัดแย้งกัน (เล็กแต่เป็นศูนย์กลางใหญ่) และหลังช่องว่างเป็นวลีนาม (its small size) จึงใช้ <b>Despite</b> — Because of ให้เหตุผลตามกัน ส่วน However/Therefore เป็น adverb เชื่อมประโยค ไม่ตามด้วยวลีนามตรง ๆ"
    },
    {
      id: "ST5-11", type: "sc", tag: "Causative",
      question: "After the security breach, the bank had all its customers ______ their passwords immediately.",
      questionTH: "หลังเกิดเหตุระบบความปลอดภัยถูกเจาะ ธนาคารให้ลูกค้าทุกคน ______ รหัสผ่านของตนทันที",
      choices: ["change", "to change", "changed", "changing"],
      choicesTH: ["เปลี่ยน (V1 — ใช้กับกรรมที่เป็นคน)", "ที่จะเปลี่ยน", "ถูกเปลี่ยน (V3)", "กำลังเปลี่ยน"],
      answer: 0,
      explanation: "โครงสร้าง Causative <b>have + คน + V1</b> (ให้คนทำสิ่งนั้น) จึงตอบ <b>change</b> เพราะกรรม customers เป็น 'คน' (ผู้ลงมือเปลี่ยนเอง) — ถ้ากรรมเป็นสิ่งของจึงจะใช้ V3 (have the passwords changed)"
    },
    {
      id: "ST5-12", type: "sc", tag: "Comparison",
      question: "The more cities invest in public transportation, ______ traffic congestion tends to become.",
      questionTH: "ยิ่งเมืองลงทุนในระบบขนส่งสาธารณะมากเท่าไร การจราจรติดขัดก็ยิ่ง ______ เท่านั้น",
      choices: ["the less", "less", "the least", "lesser"],
      choicesTH: ["ยิ่งน้อยลง (the + ขั้นกว่า)", "น้อยกว่า (ขาด the)", "น้อยที่สุด (ขั้นสูงสุด)", "ด้อยกว่า"],
      answer: 0,
      explanation: "โครงสร้างเปรียบเทียบคู่ขนาน 'ยิ่ง...ยิ่ง...' คือ <b>The + ขั้นกว่า..., the + ขั้นกว่า...</b> เมื่อขึ้นต้น The more ประโยคหลังต้องใช้ <b>the less</b> — ขาด the ไม่ได้"
    },
    {
      id: "ST5-13", type: "sc", tag: "Reported Speech",
      question: "The spokesperson explained that the project ______ delayed because of unexpected funding cuts.",
      questionTH: "โฆษกอธิบายว่าโครงการ ______ ล่าช้าเพราะการตัดงบประมาณที่ไม่คาดคิด",
      choices: ["has been", "had been", "will be", "is"],
      choicesTH: ["ได้ถูก (ปัจจุบันสมบูรณ์)", "ได้ถูก (อดีตสมบูรณ์ — สอดคล้องกาล)", "จะถูก (อนาคต)", "ถูก (ปัจจุบัน)"],
      answer: 1,
      explanation: "เมื่อกริยานำรายงานเป็นอดีต (explained) อนุประโยคที่รายงานต้อง<b>ถอยกาล</b> (Sequence of Tenses): Present Perfect → Past Perfect จึงตอบ <b>had been</b>"
    },

    // ===== Error Identification =====
    {
      id: "ST5-14", type: "ei", tag: "Subject-Verb Agreement",
      question: "The variety of products <u>offered</u><sup>(1)</sup> by online retailers <u>have</u><sup>(2)</sup> grown <u>dramatically</u><sup>(3)</sup> <u>over</u><sup>(4)</sup> the past five years.",
      questionTH: "ความหลากหลายของสินค้าที่ผู้ค้าปลีกออนไลน์นำเสนอเพิ่มขึ้นอย่างมากในช่วงห้าปีที่ผ่านมา",
      choices: ["offered", "have", "dramatically", "over"],
      choicesTH: ["ที่นำเสนอ", "ได้ (พหูพจน์ — ผิด ควรเป็น has)", "อย่างมาก", "ตลอด/ในช่วง"],
      answer: 1,
      explanation: "ประธานคือ <b>The variety</b> (เอกพจน์) ไม่ใช่ products ที่อยู่ใน of-phrase กริยาจึงต้องเป็น <b>has grown</b> — variety/range/series + of + พหูพจน์ → กริยาเอกพจน์"
    },
    {
      id: "ST5-15", type: "ei", tag: "Tense",
      question: "When the firefighters <u>arrived</u><sup>(1)</sup> at the scene, the flames <u>have already</u><sup>(2)</sup> <u>spread</u><sup>(3)</sup> to the <u>neighboring</u><sup>(4)</sup> buildings.",
      questionTH: "เมื่อนักดับเพลิงมาถึงที่เกิดเหตุ เปลวไฟก็ลามไปยังอาคารข้างเคียงแล้ว",
      choices: ["arrived", "have already", "spread", "neighboring"],
      choicesTH: ["มาถึง (อดีต)", "ได้...แล้ว (ปัจจุบันสมบูรณ์ — ผิด ควรเป็น had already)", "ลาม", "ข้างเคียง"],
      answer: 1,
      explanation: "ไฟลาม<b>ก่อน</b>นักดับเพลิงมาถึง (อดีตก่อนอดีต) ต้องใช้ Past Perfect คือ <b>had already spread</b> — Present Perfect (have spread) ใช้ร่วมกับ When + Past Simple ไม่ได้"
    },
    {
      id: "ST5-16", type: "ei", tag: "Word Form",
      question: "The committee emphasized the <u>importance</u><sup>(1)</sup> of <u>protect</u><sup>(2)</sup> wildlife habitats <u>from</u><sup>(3)</sup> further <u>destruction</u><sup>(4)</sup>.",
      questionTH: "คณะกรรมการเน้นย้ำความสำคัญของการปกป้องถิ่นที่อยู่ของสัตว์ป่าจากการถูกทำลายเพิ่มเติม",
      choices: ["importance", "protect", "from", "destruction"],
      choicesTH: ["ความสำคัญ", "ปกป้อง (V1 — ผิด ควรเป็น protecting)", "จาก", "การทำลาย"],
      answer: 1,
      explanation: "หลังบุพบท <b>of</b> ต้องตามด้วย <b>Gerund (V-ing)</b> จึงต้องแก้ protect เป็น <b>protecting</b> — the importance of protecting = ความสำคัญของการปกป้อง"
    },
    {
      id: "ST5-17", type: "ei", tag: "Pronoun Case",
      question: "The award was shared <u>between</u><sup>(1)</sup> the two scientists <u>whom</u><sup>(2)</sup>, <u>working</u><sup>(3)</sup> independently, reached the same <u>conclusion</u><sup>(4)</sup>.",
      questionTH: "รางวัลนี้ถูกแบ่งกันระหว่างนักวิทยาศาสตร์สองคนซึ่งทำงานแยกกันแต่ได้ข้อสรุปเดียวกัน",
      choices: ["between", "whom", "working", "conclusion"],
      choicesTH: ["ระหว่าง", "ผู้ซึ่ง (กรรม — ผิด ควรเป็น who)", "ทำงาน", "ข้อสรุป"],
      answer: 1,
      explanation: "ใน relative clause นี้ คำที่ขาดคือ<b>ประธาน</b>ของกริยา reached (สองนักวิทยาศาสตร์เป็นผู้สรุป) จึงต้องใช้ <b>who</b> ไม่ใช่ whom — whom ใช้เมื่อทำหน้าที่กรรมของกริยาหรือบุพบทเท่านั้น"
    },
    {
      id: "ST5-18", type: "ei", tag: "Parallel Structure",
      question: "A good leader must be <u>decisive</u><sup>(1)</sup>, <u>honesty</u><sup>(2)</sup>, and <u>willing</u><sup>(3)</sup> to listen to <u>others</u><sup>(4)</sup>.",
      questionTH: "ผู้นำที่ดีต้องเด็ดขาด ซื่อสัตย์ และเต็มใจรับฟังผู้อื่น",
      choices: ["decisive", "honesty", "willing", "others"],
      choicesTH: ["เด็ดขาด (คุณศัพท์)", "ความซื่อสัตย์ (คำนาม — ผิด ควรเป็น honest)", "เต็มใจ (คุณศัพท์)", "ผู้อื่น"],
      answer: 1,
      explanation: "รายการหลัง be ต้องเป็น<b>คุณศัพท์</b>ขนานกัน: decisive, <b>honest</b>, and willing — honesty เป็นคำนามจึงไม่ขนานกับอีกสองตัว ต้องแก้เป็น honest (ซื่อสัตย์ - คุณศัพท์)"
    },
    {
      id: "ST5-19", type: "ei", tag: "Prepositions/Connectors",
      question: "The success of the campaign <u>depends</u><sup>(1)</sup> <u>to</u><sup>(2)</sup> how effectively the message <u>is communicated</u><sup>(3)</sup> to the <u>target</u><sup>(4)</sup> audience.",
      questionTH: "ความสำเร็จของแคมเปญขึ้นอยู่กับว่าสารถูกสื่อไปยังกลุ่มเป้าหมายได้มีประสิทธิภาพเพียงใด",
      choices: ["depends", "to", "is communicated", "target"],
      choicesTH: ["ขึ้นอยู่กับ", "ต่อ (บุพบทผิด ควรเป็น on)", "ถูกสื่อสาร", "เป้าหมาย"],
      answer: 1,
      explanation: "<b>depend on</b> เป็นคู่กริยา-บุพบทตายตัว จึงต้องแก้ to เป็น <b>on</b> — คู่ที่ต้องจำ: depend on, rely on, focus on, insist on"
    },
    {
      id: "ST5-20", type: "ei", tag: "Adjective/Adverb",
      question: "The instructions were written so <u>clear</u><sup>(1)</sup> that even <u>first-time</u><sup>(2)</sup> users could <u>assemble</u><sup>(3)</sup> the device <u>without</u><sup>(4)</sup> help.",
      questionTH: "คำแนะนำเขียนไว้ชัดเจนมากจนแม้แต่ผู้ใช้ครั้งแรกก็ประกอบอุปกรณ์ได้โดยไม่ต้องมีคนช่วย",
      choices: ["clear", "first-time", "assemble", "without"],
      choicesTH: ["ชัดเจน (คุณศัพท์ — ผิด ควรเป็น clearly)", "ครั้งแรก", "ประกอบ", "โดยไม่มี"],
      answer: 0,
      explanation: "คำที่ขยายกริยา were written ต้องเป็น<b>กริยาวิเศษณ์</b> คือ <b>clearly</b> (so + adv + that) — clear เป็นคุณศัพท์ใช้ขยายคำนามเท่านั้น"
    },
    {
      id: "ST5-21", type: "ei", tag: "Gerund/Infinitive",
      question: "Many commuters have stopped <u>to use</u><sup>(1)</sup> private cars <u>and</u><sup>(2)</sup> now prefer <u>cycling</u><sup>(3)</sup> or taking public <u>transport</u><sup>(4)</sup>.",
      questionTH: "ผู้สัญจรจำนวนมากเลิกใช้รถยนต์ส่วนตัวและตอนนี้นิยมปั่นจักรยานหรือใช้ขนส่งสาธารณะแทน",
      choices: ["to use", "and", "cycling", "transport"],
      choicesTH: ["เพื่อใช้/ที่จะใช้ (ผิดความหมาย ควรเป็น using)", "และ", "การปั่นจักรยาน", "ขนส่ง"],
      answer: 0,
      explanation: "<b>stop + V-ing</b> = เลิกทำสิ่งนั้น (เลิกใช้รถ) จึงต้องเป็น stopped <b>using</b> — ส่วน stop + to V แปลว่า 'หยุดเพื่อจะทำ' (หยุดเพื่อจะใช้รถ) ซึ่งขัดบริบทที่สื่อว่าเลิกใช้รถแล้วหันไปปั่นจักรยาน"
    },
    {
      id: "ST5-22", type: "ei", tag: "Determiners",
      question: "<u>Despite</u><sup>(1)</sup> repeated warnings, <u>a number of</u><sup>(2)</sup> tourists <u>continues</u><sup>(3)</sup> to ignore the safety <u>barriers</u><sup>(4)</sup> near the cliff.",
      questionTH: "แม้จะมีการเตือนซ้ำหลายครั้ง นักท่องเที่ยวจำนวนหนึ่งก็ยังเพิกเฉยต่อแนวกั้นความปลอดภัยใกล้หน้าผา",
      choices: ["Despite", "a number of", "continues", "barriers"],
      choicesTH: ["ทั้งที่", "จำนวนหนึ่ง (+ พหูพจน์)", "ยังคง (เอกพจน์ — ผิด ควรเป็น continue)", "แนวกั้น"],
      answer: 2,
      explanation: "<b>A number of</b> + นามพหูพจน์ ถือเป็น<b>พหูพจน์</b> กริยาจึงต้องเป็น <b>continue</b> — ต่างจาก The number of ที่เป็นเอกพจน์ จำคู่: A number of + พหูพจน์ → พหูพจน์ / The number of → เอกพจน์"
    },
    {
      id: "ST5-23", type: "ei", tag: "Comparison",
      question: "The redesigned engine is <u>considerably</u><sup>(1)</sup> <u>more quieter</u><sup>(2)</sup> and more fuel-efficient <u>than</u><sup>(3)</sup> the <u>previous</u><sup>(4)</sup> model.",
      questionTH: "เครื่องยนต์ที่ออกแบบใหม่เงียบกว่าและประหยัดน้ำมันกว่ารุ่นก่อนอย่างเห็นได้ชัด",
      choices: ["considerably", "more quieter", "than", "previous"],
      choicesTH: ["อย่างเห็นได้ชัด", "เงียบกว่า (ซ้ำซ้อน — ผิด ควรเป็น quieter)", "กว่า", "ก่อนหน้า"],
      answer: 1,
      explanation: "<b>quieter</b> เป็นขั้นกว่าอยู่แล้ว (quiet → quieter) จึง<b>ห้ามเติม more ซ้ำ</b> ต้องตัดเหลือ quieter — more ใช้กับคำคุณศัพท์ยาวที่ผันท้ายไม่ได้เท่านั้น (more fuel-efficient ถูกแล้ว)"
    },
    {
      id: "ST5-24", type: "ei", tag: "Verb Form",
      question: "The volunteers spent the entire weekend <u>to clean</u><sup>(1)</sup> the beach, <u>collecting</u><sup>(2)</sup> more than two tons of <u>plastic</u><sup>(3)</sup> waste <u>in total</u><sup>(4)</sup>.",
      questionTH: "อาสาสมัครใช้เวลาตลอดสุดสัปดาห์ทำความสะอาดชายหาด เก็บขยะพลาสติกได้รวมกว่าสองตัน",
      choices: ["to clean", "collecting", "plastic", "in total"],
      choicesTH: ["เพื่อทำความสะอาด (ผิด ควรเป็น cleaning)", "โดยเก็บ", "พลาสติก", "โดยรวม"],
      answer: 0,
      explanation: "โครงสร้าง <b>spend + เวลา + V-ing</b> (ใช้เวลาทำสิ่งใด) จึงต้องเป็น spent the weekend <b>cleaning</b> — spend ตามด้วย V-ing เสมอ ไม่ใช่ to-infinitive"
    },
    {
      id: "ST5-25", type: "ei", tag: "Relative Clauses",
      question: "The documentary highlights several communities <u>who</u><sup>(1)</sup> traditional ways of life <u>are being</u><sup>(2)</sup> threatened <u>by</u><sup>(3)</sup> rapid <u>urbanization</u><sup>(4)</sup>.",
      questionTH: "สารคดีนี้เน้นชุมชนหลายแห่งซึ่งวิถีชีวิตดั้งเดิมกำลังถูกคุกคามจากการขยายตัวของเมืองอย่างรวดเร็ว",
      choices: ["who", "are being", "by", "urbanization"],
      choicesTH: ["ผู้ซึ่ง (ผิด ควรเป็น whose)", "กำลังถูก", "โดย", "การกลายเป็นเมือง"],
      answer: 0,
      explanation: "ช่องว่างต้องการคำแสดง<b>ความเป็นเจ้าของ</b> (วิถีชีวิต 'ของ' ชุมชน) จึงต้องใช้ <b>whose</b> + คำนาม (whose traditional ways of life) — who ใช้เป็นประธานของ clause เท่านั้น ตามด้วยกริยาทันที ไม่ใช่ตามด้วยคำนาม"
    },
  ],
});
