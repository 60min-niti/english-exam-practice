// Structure ชุดที่ 2 — Sentence Completion (ข้อ 1-13) + Error Identification (ข้อ 14-25)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 2,
  questions: [
    // ===== Sentence Completion =====
    {
      id: "ST2-01", type: "sc", tag: "Tense",
      question: "The students ______ their chemistry experiment when the power suddenly went out.",
      questionTH: "นักเรียน ______ การทดลองเคมีอยู่เมื่อไฟดับกะทันหัน",
      choices: ["conducted", "were conducting", "have conducted", "had been conducted"],
      choicesTH: ["ทำ (อดีตธรรมดา)", "กำลังทำ (อดีตต่อเนื่อง)", "ได้ทำแล้ว (ปัจจุบันสมบูรณ์)", "ถูกทำมาแล้ว (รูปถูกกระทำ)"],
      answer: 1,
      explanation: "เหตุการณ์ยาว (กำลังทำการทดลอง) ถูกขัดจังหวะด้วยเหตุการณ์สั้น (ไฟดับ) ในอดีต → เหตุการณ์ยาวใช้ <b>Past Continuous (were conducting)</b> คู่กับ Past Simple — ตัวเลือก 4 เป็นรูป Passive ซึ่งผิดเพราะนักเรียนเป็นผู้ทำการทดลองเอง"
    },
    {
      id: "ST2-02", type: "sc", tag: "Conditionals",
      question: "If the company had invested in cybersecurity earlier, it ______ the costly data breach last year.",
      questionTH: "ถ้าบริษัทลงทุนด้านความปลอดภัยไซเบอร์เร็วกว่านี้ ก็คง ______ เหตุข้อมูลรั่วไหลที่เสียหายหนักเมื่อปีที่แล้ว",
      choices: ["would avoid", "will avoid", "would have avoided", "had avoided"],
      choicesTH: ["คงเลี่ยง (เงื่อนไขแบบ 2)", "จะเลี่ยง (อนาคต)", "คงได้เลี่ยงไปแล้ว (เงื่อนไขแบบ 3)", "ได้เลี่ยงแล้ว (อดีตสมบูรณ์)"],
      answer: 2,
      explanation: "If-clause เป็น Past Perfect (had invested) = เงื่อนไขแบบที่ 3 (สมมติสิ่งที่ตรงข้ามกับอดีต) ประโยคหลักต้องใช้ <b>would have + V3</b> คือ <b>would have avoided</b> — would avoid ใช้กับแบบที่ 2 (ปัจจุบัน) เท่านั้น"
    },
    {
      id: "ST2-03", type: "sc", tag: "Wish/Subjunctive",
      question: "The residents wish the city council ______ more attention to flood prevention.",
      questionTH: "ชาวบ้านอยากให้สภาเทศบาล ______ ความสนใจกับการป้องกันน้ำท่วมมากกว่านี้",
      choices: ["pays", "paid", "has paid", "will pay"],
      choicesTH: ["ให้ (ปัจจุบัน)", "ให้ (อดีต — ใช้กับ wish)", "ได้ให้แล้ว (ปัจจุบันสมบูรณ์)", "จะให้ (อนาคต)"],
      answer: 1,
      explanation: "<b>wish + Past Simple</b> ใช้แสดงความปรารถนาที่<b>ตรงข้ามกับความจริงในปัจจุบัน</b> (อยากให้สภาเมืองใส่ใจ แต่ตอนนี้ไม่ใส่ใจ) จึงตอบ <b>paid</b> — หลัง wish ห้ามใช้ Present Simple หรือ will"
    },
    {
      id: "ST2-04", type: "sc", tag: "Passive Voice",
      question: "All scholarship applications ______ before the end of this month.",
      questionTH: "ใบสมัครขอทุนทั้งหมด ______ ก่อนสิ้นเดือนนี้",
      choices: ["must submit", "must be submitting", "must be submitted", "must have submitted"],
      choicesTH: ["ต้องยื่น (รูปกระทำ)", "ต้องกำลังยื่น", "ต้องถูกยื่น (รูปถูกกระทำ)", "ต้องได้ยื่นไปแล้ว"],
      answer: 2,
      explanation: "ใบสมัคร<b>ถูกส่ง</b> (ทำกริยาเองไม่ได้) จึงต้องใช้ Passive กับกริยาช่วย: <b>must + be + V3 = must be submitted</b> — ตัวเลือกอื่นเป็นรูป Active ซึ่งจะแปลว่าใบสมัครเป็นผู้ส่งเอง"
    },
    {
      id: "ST2-05", type: "sc", tag: "Reported Speech",
      question: "The professor asked the students ______ the assignment before class.",
      questionTH: "อาจารย์ถามนักศึกษาว่า ______ งานที่มอบหมายเสร็จก่อนเข้าเรียนหรือไม่",
      choices: ["that they finished", "whether they had finished", "did they finish", "have they finished"],
      choicesTH: ["ว่าพวกเขาทำเสร็จ", "ว่าพวกเขาทำเสร็จแล้วหรือไม่ (คำถามทางอ้อม)", "พวกเขาทำเสร็จไหม (คำถามตรง)", "พวกเขาทำเสร็จหรือยัง (คำถามตรง)"],
      answer: 1,
      explanation: "คำถามทางอ้อม (Indirect Question) ใช้ <b>whether/if</b> นำ และเรียงแบบ<b>ประโยคบอกเล่า</b> (ประธาน + กริยา) พร้อมถอยกาลเป็น Past Perfect → <b>whether they had finished</b> — ตัวเลือก 3 และ 4 เรียงแบบคำถามตรงซึ่งใช้ในประโยครายงานไม่ได้"
    },
    {
      id: "ST2-06", type: "sc", tag: "Causative",
      question: "The manager had the financial report ______ before the board meeting started.",
      questionTH: "ผู้จัดการให้มีการ ______ รายงานการเงินก่อนการประชุมบอร์ดจะเริ่ม",
      choices: ["print", "printed", "printing", "to print"],
      choicesTH: ["พิมพ์ (กริยาช่อง 1)", "ถูกพิมพ์ (ช่อง 3 — ใช้กับสิ่งของ)", "กำลังพิมพ์", "เพื่อพิมพ์"],
      answer: 1,
      explanation: "โครงสร้าง Causative <b>have + สิ่งของ + V3</b> แปลว่า 'ให้คนอื่นทำสิ่งนั้นให้' (ให้คนพิมพ์รายงานให้) จึงตอบ <b>printed</b> — ถ้ากรรมเป็น 'คน' จึงจะใช้ V1 (have someone print)"
    },
    {
      id: "ST2-07", type: "sc", tag: "Prepositions/Connectors",
      question: "______ solar panels are expensive to install, they significantly reduce electricity costs in the long run.",
      questionTH: "______ แผงโซลาร์เซลล์จะติดตั้งแพง แต่ก็ช่วยลดค่าไฟได้มากในระยะยาว",
      choices: ["Despite", "Because", "Although", "Whereas"],
      choicesTH: ["ทั้งที่ (+ วลีนาม)", "เพราะ", "แม้ว่า (+ ประโยค)", "ในขณะที่ (เปรียบต่าง)"],
      answer: 2,
      explanation: "สองประโยคขัดแย้งกัน (แพงตอนติดตั้ง แต่ประหยัดระยะยาว) และหลังช่องว่างเป็น<b>ประโยคเต็ม</b> (S+V) จึงใช้ conjunction <b>Although</b> — Despite ต้องตามด้วยวลีนาม ส่วน Because ให้เหตุผล ไม่ใช่ความขัดแย้ง"
    },
    {
      id: "ST2-08", type: "sc", tag: "Question Word + Infinitive",
      question: "The tourists were not sure ______ to the ancient temple, so they asked a local guide.",
      questionTH: "นักท่องเที่ยวไม่แน่ใจว่า ______ ไปยังวัดโบราณ จึงถามไกด์ท้องถิ่น",
      choices: ["how to get", "how getting", "how they get", "to how get"],
      choicesTH: ["จะไปอย่างไร (question word + to V)", "อย่างไรการไป (ผิดรูป)", "พวกเขาไปอย่างไร", "รูปผิดไวยากรณ์"],
      answer: 0,
      explanation: "โครงสร้าง <b>Question word + to-infinitive</b> (how to, where to, what to) ใช้แทนประโยคคำถามได้: not sure <b>how to get</b> = ไม่แน่ใจว่าจะไปอย่างไร — ถ้าจะใช้ประโยคเต็มต้องเป็น how they could get"
    },
    {
      id: "ST2-09", type: "sc", tag: "Too/Enough",
      question: "The lecture hall was ______ to accommodate all of the first-year students.",
      questionTH: "ห้องบรรยาย ______ ที่จะรองรับนักศึกษาปีหนึ่งได้ทั้งหมด",
      choices: ["so small", "too small", "small enough", "very small that"],
      choicesTH: ["เล็กมาก (ต้องมี that)", "เล็กเกินกว่าจะ (too...to)", "เล็กพอที่จะ", "เล็กมากจน (ผิดรูป)"],
      answer: 1,
      explanation: "โครงสร้าง <b>too + adj + to V</b> = '...เกินกว่าที่จะ...' (เล็กเกินกว่าจะจุนักศึกษาได้หมด) จึงตอบ <b>too small</b> — so small ต้องคู่กับ that + ประโยค ส่วน small enough แปลว่า 'เล็กพอจะจุได้' ซึ่งขัดความหมาย"
    },
    {
      id: "ST2-10", type: "sc", tag: "Correlative Conjunctions",
      question: "The new policy aims to reduce ______ production costs and environmental impact.",
      questionTH: "นโยบายใหม่มุ่งลด ______ ต้นทุนการผลิตและผลกระทบต่อสิ่งแวดล้อม",
      choices: ["either", "neither", "both", "not only"],
      choicesTH: ["อย่างใดอย่างหนึ่ง (คู่กับ or)", "ไม่ทั้งสอง (คู่กับ nor)", "ทั้งสอง (คู่กับ and)", "ไม่เพียงแต่ (คู่กับ but also)"],
      answer: 2,
      explanation: "คำเชื่อมคู่ที่จับกับ <b>and</b> คือ <b>both ... and ...</b> (ทั้งสองอย่าง) — either คู่กับ or, neither คู่กับ nor, not only คู่กับ but also จำเป็นคู่ตายตัว"
    },
    {
      id: "ST2-11", type: "sc", tag: "Subject-Verb Agreement",
      question: "The director, along with several senior staff members, ______ attending the awards ceremony tonight.",
      questionTH: "ผู้อำนวยการ พร้อมกับพนักงานอาวุโสหลายคน ______ เข้าร่วมงานมอบรางวัลคืนนี้",
      choices: ["are", "is", "were", "have been"],
      choicesTH: ["กำลัง (พหูพจน์)", "กำลัง (เอกพจน์)", "กำลัง (พหูพจน์ อดีต)", "ได้ (เอกพจน์ สมบูรณ์)"],
      answer: 1,
      explanation: "วลีคั่นอย่าง <b>along with / together with / as well as</b> ไม่นับรวมเป็นประธาน — ประธานจริงคือ <b>The director</b> (เอกพจน์) กริยาจึงเป็น <b>is</b> ต่างจาก and ที่ทำให้ประธานกลายเป็นพหูพจน์"
    },
    {
      id: "ST2-12", type: "sc", tag: "Gerund/Infinitive",
      question: "______ regularly has been shown to improve both memory and concentration.",
      questionTH: "______ อย่างสม่ำเสมอได้รับการพิสูจน์ว่าช่วยเสริมทั้งความจำและสมาธิ",
      choices: ["Exercise", "Exercising", "To exercising", "Exercised"],
      choicesTH: ["ออกกำลังกาย (คำนาม/กริยา)", "การออกกำลังกาย (gerund เป็นประธาน)", "รูปผิด", "ออกกำลังกายแล้ว (ช่อง 3)"],
      answer: 1,
      explanation: "ช่องว่างคือ<b>ประธานของประโยค</b> ซึ่งต้องเป็นคำนามหรือ <b>Gerund (V-ing)</b>: <b>Exercising regularly</b> = การออกกำลังกายสม่ำเสมอ — Exercise เฉย ๆ ก็เป็นนามได้ แต่เมื่อมี adverb 'regularly' ขยายแบบนี้ ต้องใช้รูป Gerund ที่ยังคงคุณสมบัติกริยา"
    },
    {
      id: "ST2-13", type: "sc", tag: "So/Such",
      question: "It was ______ a complicated procedure that only a few hospitals in the country could perform it.",
      questionTH: "มันเป็นหัตถการที่ซับซ้อน ______ จนมีเพียงไม่กี่โรงพยาบาลในประเทศที่ทำได้",
      choices: ["so", "such", "very", "too"],
      choicesTH: ["มาก (so + adj เดี่ยว)", "ขนาด (such + a + adj + นาม)", "มาก (ไม่เข้าโครงสร้าง)", "เกินไป"],
      answer: 1,
      explanation: "หลังช่องว่างเป็น <b>a + adj + คำนาม</b> (a complicated procedure) จึงต้องใช้ <b>such</b>: such a complicated procedure that... — so ใช้กับ adj/adv เดี่ยว ๆ (so complicated that...) ไม่มีคำนามตาม"
    },

    // ===== Error Identification =====
    {
      id: "ST2-14", type: "ei", tag: "Tense",
      question: "When I <u>arrived</u><sup>(1)</sup> at the station <u>this morning</u><sup>(2)</sup>, the train <u>has already</u><sup>(3)</sup> <u>left</u><sup>(4)</sup>.",
      questionTH: "เมื่อฉันมาถึงสถานีเช้านี้ รถไฟก็ออกไปแล้ว",
      choices: ["arrived", "this morning", "has already", "left"],
      choicesTH: ["มาถึง (อดีต)", "เช้านี้", "ได้...แล้ว (ปัจจุบันสมบูรณ์ — ผิด)", "ออกไป"],
      answer: 2,
      explanation: "รถไฟออก<b>ก่อน</b>ที่ผู้พูดจะมาถึง (อดีตก่อนอดีต) ต้องใช้ Past Perfect คือ <b>had already left</b> — Present Perfect (has left) ใช้กับเหตุการณ์ที่เชื่อมโยงถึงปัจจุบัน ใช้ร่วมกับ When + Past Simple แบบนี้ไม่ได้"
    },
    {
      id: "ST2-15", type: "ei", tag: "Subject-Verb Agreement",
      question: "Every <u>one</u><sup>(1)</sup> of the new machines <u>were</u><sup>(2)</sup> carefully inspected <u>before</u><sup>(3)</sup> being <u>shipped</u><sup>(4)</sup> to customers.",
      questionTH: "เครื่องจักรใหม่ทุกเครื่องได้รับการตรวจสอบอย่างละเอียดก่อนจัดส่งให้ลูกค้า",
      choices: ["one", "were", "before", "shipped"],
      choicesTH: ["หนึ่ง (Every one = เอกพจน์)", "ถูก (พหูพจน์ — ผิด ควรเป็น was)", "ก่อน", "ถูกจัดส่ง"],
      answer: 1,
      explanation: "ประธานคือ <b>Every one</b> (เอกพจน์เสมอ) ไม่ใช่ machines ที่อยู่ใน of-phrase กริยาจึงต้องเป็น <b>was inspected</b> — กลุ่มคำ every, each, either, neither + of + พหูพจน์ รับกริยาเอกพจน์ทั้งหมด"
    },
    {
      id: "ST2-16", type: "ei", tag: "Adjective/Adverb",
      question: "The team <u>played</u><sup>(1)</sup> <u>good</u><sup>(2)</sup> in the first half <u>but</u><sup>(3)</sup> lost the match <u>in</u><sup>(4)</sup> the final minutes.",
      questionTH: "ทีมเล่นได้ดีในครึ่งแรก แต่กลับแพ้ในนาทีสุดท้าย",
      choices: ["played", "good", "but", "in"],
      choicesTH: ["เล่น", "ดี (คุณศัพท์ — ผิด ควรเป็น well)", "แต่", "ใน"],
      answer: 1,
      explanation: "คำที่ขยายกริยา played ต้องเป็น<b>กริยาวิเศษณ์</b> คือ <b>well</b> — good เป็นคุณศัพท์ใช้ขยายคำนาม (a good team) คู่ good/well เป็นจุดที่ข้อสอบออกบ่อยมาก"
    },
    {
      id: "ST2-17", type: "ei", tag: "Prepositions/Connectors",
      question: "The board members <u>discussed about</u><sup>(1)</sup> the proposed merger <u>for</u><sup>(2)</sup> three hours <u>before reaching</u><sup>(3)</sup> a unanimous <u>decision</u><sup>(4)</sup>.",
      questionTH: "คณะกรรมการถกเรื่องการควบรวมที่เสนอมานานสามชั่วโมงก่อนจะได้ข้อสรุปเป็นเอกฉันท์",
      choices: ["discussed about", "for", "before reaching", "decision"],
      choicesTH: ["ถกเกี่ยวกับ (มี about เกิน — ผิด)", "เป็นเวลา", "ก่อนจะได้", "ข้อตัดสิน"],
      answer: 0,
      explanation: "กริยา <b>discuss</b> เป็นสกรรมกริยา ตามด้วยกรรมตรงทันที <b>ไม่ต้องมี about</b> (discussed the merger) — กลุ่มเดียวกัน: mention, enter, attend, answer ล้วนไม่ต้องมีบุพบท ส่วน talk/think จึงใช้ about ได้"
    },
    {
      id: "ST2-18", type: "ei", tag: "Gerund/Infinitive",
      question: "She is interested <u>in</u><sup>(1)</sup> <u>to pursue</u><sup>(2)</sup> a master's degree <u>abroad</u><sup>(3)</sup> after she <u>graduates</u><sup>(4)</sup>.",
      questionTH: "เธอสนใจที่จะเรียนต่อปริญญาโทที่ต่างประเทศหลังจากเรียนจบ",
      choices: ["in", "to pursue", "abroad", "graduates"],
      choicesTH: ["ใน", "ที่จะมุ่งเรียน (to V — ผิด ควรเป็น pursuing)", "ต่างประเทศ", "เรียนจบ"],
      answer: 1,
      explanation: "หลัง<b>บุพบท</b> (in) กริยาต้องอยู่ในรูป <b>Gerund (V-ing)</b> เสมอ: interested in <b>pursuing</b> — to-infinitive ตามหลังบุพบทไม่ได้ เป็นกฎตายตัว"
    },
    {
      id: "ST2-19", type: "ei", tag: "Comparison",
      question: "The redesigned interface <u>makes</u><sup>(1)</sup> the software <u>more easier</u><sup>(2)</sup> <u>to navigate</u><sup>(3)</sup>, especially for <u>elderly</u><sup>(4)</sup> users.",
      questionTH: "อินเทอร์เฟซที่ออกแบบใหม่ทำให้ซอฟต์แวร์ใช้งานง่ายขึ้น โดยเฉพาะกับผู้ใช้สูงอายุ",
      choices: ["makes", "more easier", "to navigate", "elderly"],
      choicesTH: ["ทำให้", "ง่ายกว่า (ซ้ำซ้อน — ผิด ควรเป็น easier)", "ที่จะใช้งาน", "สูงอายุ"],
      answer: 1,
      explanation: "<b>easier</b> เป็นขั้นกว่าอยู่แล้ว (easy → easier) จึง<b>ห้ามเติม more ซ้ำ</b> ต้องตัดเหลือ easier เท่านั้น — more ใช้กับคำคุณศัพท์ยาวที่ผันท้ายไม่ได้ เช่น more comfortable"
    },
    {
      id: "ST2-20", type: "ei", tag: "Countable/Uncountable",
      question: "The laboratory <u>purchased</u><sup>(1)</sup> some new <u>equipments</u><sup>(2)</sup> <u>to support</u><sup>(3)</sup> its expanding research <u>projects</u><sup>(4)</sup>.",
      questionTH: "ห้องปฏิบัติการซื้ออุปกรณ์ใหม่บางส่วนเพื่อรองรับโครงการวิจัยที่กำลังขยายตัว",
      choices: ["purchased", "equipments", "to support", "projects"],
      choicesTH: ["ซื้อ", "อุปกรณ์ (นามนับไม่ได้ — ผิด ห้ามเติม s)", "เพื่อสนับสนุน", "โครงการ"],
      answer: 1,
      explanation: "<b>equipment</b> เป็นนามนับไม่ได้ <b>ไม่มีรูปพหูพจน์</b> ต้องแก้เป็น some new equipment — กลุ่มเดียวกันที่ออกบ่อย: information, advice, furniture, luggage, research ห้ามเติม -s ทั้งหมด"
    },
    {
      id: "ST2-21", type: "ei", tag: "Pronoun Case",
      question: "The disagreement <u>between</u><sup>(1)</sup> the director and <u>I</u><sup>(2)</sup> <u>was resolved</u><sup>(3)</sup> <u>through</u><sup>(4)</sup> open discussion.",
      questionTH: "ความขัดแย้งระหว่างผู้อำนวยการกับฉันได้รับการคลี่คลายด้วยการพูดคุยอย่างเปิดเผย",
      choices: ["between", "I", "was resolved", "through"],
      choicesTH: ["ระหว่าง", "ฉัน (ประธาน — ผิด ควรเป็น me)", "ได้รับการคลี่คลาย", "ด้วย/ผ่าน"],
      answer: 1,
      explanation: "หลังบุพบท <b>between</b> สรรพนามต้องอยู่ในรูป<b>กรรม</b> (object) คือ <b>me</b>: between the director and me — 'and I' ใช้ได้เฉพาะตำแหน่งประธานเท่านั้น"
    },
    {
      id: "ST2-22", type: "ei", tag: "Participle",
      question: "<u>Comparing</u><sup>(1)</sup> with last year's results, this year's sales figures <u>are</u><sup>(2)</sup> <u>considerably</u><sup>(3)</sup> more <u>encouraging</u><sup>(4)</sup>.",
      questionTH: "เมื่อเทียบกับผลของปีที่แล้ว ตัวเลขยอดขายปีนี้น่าพอใจกว่ามาก",
      choices: ["Comparing", "are", "considerably", "encouraging"],
      choicesTH: ["เปรียบเทียบ (ผู้กระทำ — ผิด ควรเป็น Compared)", "เป็น", "อย่างมาก", "น่าพอใจ"],
      answer: 0,
      explanation: "ตัวเลขยอดขาย<b>ถูกนำไปเปรียบเทียบ</b> (ผู้ถูกกระทำ) จึงต้องใช้ Past Participle: <b>Compared with</b> last year's results — Comparing (V-ing) จะแปลว่าตัวเลขเป็นฝ่ายเปรียบเทียบเอง ซึ่งผิดตรรกะ"
    },
    {
      id: "ST2-23", type: "ei", tag: "Infinitive of Purpose",
      question: "Many graduates move <u>to</u><sup>(1)</sup> the capital <u>for finding</u><sup>(2)</sup> better job opportunities <u>and</u><sup>(3)</sup> higher <u>salaries</u><sup>(4)</sup>.",
      questionTH: "บัณฑิตจำนวนมากย้ายเข้าเมืองหลวงเพื่อหาโอกาสงานที่ดีกว่าและเงินเดือนที่สูงกว่า",
      choices: ["to", "for finding", "and", "salaries"],
      choicesTH: ["ไปยัง", "เพื่อหา (for + V-ing — ผิด ควรเป็น to find)", "และ", "เงินเดือน"],
      answer: 1,
      explanation: "การบอก<b>จุดประสงค์</b>ของการกระทำ ใช้ <b>to + V1</b> (to find better jobs) ไม่ใช่ for + V-ing — for + V-ing ใช้บอกหน้าที่ของสิ่งของ เช่น a knife is for cutting"
    },
    {
      id: "ST2-24", type: "ei", tag: "Determiners",
      question: "If the first method <u>fails</u><sup>(1)</sup>, the team will adopt <u>other</u><sup>(2)</sup> approach <u>that</u><sup>(3)</sup> requires fewer <u>resources</u><sup>(4)</sup>.",
      questionTH: "ถ้าวิธีแรกล้มเหลว ทีมจะหันไปใช้อีกวิธีหนึ่งที่ใช้ทรัพยากรน้อยกว่า",
      choices: ["fails", "other", "that", "resources"],
      choicesTH: ["ล้มเหลว", "อื่น ๆ (พหูพจน์ — ผิด ควรเป็น another)", "ที่ซึ่ง", "ทรัพยากร"],
      answer: 1,
      explanation: "approach เป็นนามนับได้<b>เอกพจน์</b> ต้องใช้ <b>another</b> (another approach = อีกวิธีหนึ่ง) — other ใช้กับนามพหูพจน์ (other approaches) หรือมี the นำ (the other approach)"
    },
    {
      id: "ST2-25", type: "ei", tag: "Prepositions/Connectors",
      question: "<u>Despite of</u><sup>(1)</sup> the economic slowdown, the tourism sector <u>has shown</u><sup>(2)</sup> <u>steady</u><sup>(3)</sup> growth <u>this year</u><sup>(4)</sup>.",
      questionTH: "แม้เศรษฐกิจจะชะลอตัว ภาคการท่องเที่ยวก็ยังเติบโตอย่างมั่นคงในปีนี้",
      choices: ["Despite of", "has shown", "steady", "this year"],
      choicesTH: ["ทั้งที่ (มี of เกิน — ผิด)", "ได้แสดงให้เห็น", "มั่นคง สม่ำเสมอ", "ปีนี้"],
      answer: 0,
      explanation: "ใช้ได้แค่ <b>Despite</b> (ไม่มี of) หรือ <b>In spite of</b> — 'Despite of' เป็นการผสมสองรูปเข้าด้วยกันซึ่งผิดเสมอ เป็นจุดหลอกคลาสสิกของข้อสอบ"
    },
  ],
});
