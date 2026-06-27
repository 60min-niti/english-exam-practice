// Structure ชุดที่ 7 — Sentence Completion (ข้อ 1-13) + Error Identification (ข้อ 14-25)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 7,
  questions: [
    // ===== Sentence Completion =====
    {
      id: "ST7-01", type: "sc", tag: "Tense",
      question: "The space agency announced that it ______ a new telescope into orbit early next year.",
      questionTH: "หน่วยงานอวกาศประกาศว่าจะ ______ กล้องโทรทรรศน์ตัวใหม่ขึ้นสู่วงโคจรในต้นปีหน้า",
      choices: ["launches", "will launch", "had launched", "launched"],
      choicesTH: ["ปล่อย (ปัจจุบัน)", "จะปล่อย (อนาคต)", "ได้ปล่อยแล้ว (อดีตสมบูรณ์)", "ปล่อย (อดีต)"],
      answer: 1,
      explanation: "คำว่า <b>early next year</b> ชี้อนาคต จึงใช้ <b>will launch</b> — แม้กริยานำ (announced) จะเป็นอดีต แต่เหตุการณ์ที่รายงานยังไม่เกิดและอยู่ในอนาคตจริง จึงคงรูป will ได้"
    },
    {
      id: "ST7-02", type: "sc", tag: "Conditionals",
      question: "If the vaccine ______ widely available sooner, thousands of lives might have been saved.",
      questionTH: "ถ้าวัคซีน ______ พร้อมใช้อย่างกว้างขวางเร็วกว่านี้ ชีวิตหลายพันคนก็อาจรอดไว้ได้",
      choices: ["is", "has been", "had been", "were"],
      choicesTH: ["เป็น (ปัจจุบัน)", "ได้เป็น (ปัจจุบันสมบูรณ์)", "ได้เป็น (เงื่อนไขแบบ 3)", "เป็น (เงื่อนไขแบบ 2)"],
      answer: 2,
      explanation: "ประโยคหลักใช้ <b>might have been saved</b> (would/might have + V3) = เงื่อนไขแบบที่ 3 สมมติตรงข้ามกับอดีต If-clause จึงต้องเป็น Past Perfect <b>had been</b> — were ใช้กับแบบที่ 2 (ปัจจุบัน)"
    },
    {
      id: "ST7-03", type: "sc", tag: "Gerund/Infinitive",
      question: "The new app makes it easier for travelers ______ flights, hotels, and tours in one place.",
      questionTH: "แอปใหม่ทำให้นักเดินทาง ______ เที่ยวบิน โรงแรม และทัวร์ในที่เดียวได้ง่ายขึ้น",
      choices: ["to book", "booking", "booked", "book"],
      choicesTH: ["ที่จะจอง (to V)", "การจอง (gerund)", "จองแล้ว (V3)", "จอง (V1)"],
      answer: 0,
      explanation: "โครงสร้าง <b>make it + adj + for + กรรม + to V</b> (make it easier for travelers to book) จึงตอบ <b>to book</b> — it เป็นกรรมหลอก (anticipatory it) ที่แทน to-infinitive ที่ตามมา"
    },
    {
      id: "ST7-04", type: "sc", tag: "Relative Clauses",
      question: "The scientists identified a gene ______ presence increases the risk of developing the disease.",
      questionTH: "นักวิทยาศาสตร์ระบุยีน ______ การมีอยู่ของมันเพิ่มความเสี่ยงในการเกิดโรค",
      choices: ["which", "whose", "that", "what"],
      choicesTH: ["ซึ่ง", "ซึ่ง...ของมัน (แสดงความเป็นเจ้าของ)", "ที่", "สิ่งที่"],
      answer: 1,
      explanation: "ช่องว่างแสดง<b>ความเป็นเจ้าของ</b> (การมีอยู่ 'ของ' ยีน) ตามด้วยคำนาม presence จึงใช้ <b>whose</b> (whose presence = การมีอยู่ของมัน) — whose ใช้กับสิ่งของได้ ไม่จำกัดแค่คน"
    },
    {
      id: "ST7-05", type: "sc", tag: "Passive Voice",
      question: "The endangered species ______ closely by conservationists using satellite tracking devices.",
      questionTH: "สัตว์ใกล้สูญพันธุ์ ______ อย่างใกล้ชิดโดยนักอนุรักษ์ด้วยอุปกรณ์ติดตามผ่านดาวเทียม",
      choices: ["is being monitored", "has monitored", "monitors", "monitoring"],
      choicesTH: ["กำลังถูกเฝ้าติดตาม (รูปถูกกระทำต่อเนื่อง)", "ได้เฝ้าติดตามแล้ว", "เฝ้าติดตาม (รูปกระทำ)", "กำลังเฝ้าติดตาม"],
      answer: 0,
      explanation: "สัตว์<b>ถูกเฝ้าติดตาม</b> (โดยนักอนุรักษ์) จึงต้องใช้ Passive และบริบทเป็นปัจจุบันต่อเนื่อง → <b>is being monitored</b> — สังเกตคำว่า by conservationists ที่บ่งบอกผู้กระทำในรูป Passive"
    },
    {
      id: "ST7-06", type: "sc", tag: "Inversion",
      question: "Only after the data ______ thoroughly analyzed did the researchers publish their conclusions.",
      questionTH: "ก็ต่อเมื่อข้อมูล ______ การวิเคราะห์อย่างละเอียดแล้วเท่านั้น นักวิจัยจึงเผยแพร่ข้อสรุป",
      choices: ["were", "have been", "had been", "was"],
      choicesTH: ["ถูก (พหูพจน์ อดีต)", "ได้ถูก (ปัจจุบันสมบูรณ์)", "ได้ถูก (อดีตสมบูรณ์)", "ถูก (เอกพจน์ อดีต)"],
      answer: 2,
      explanation: "เหตุการณ์ในอนุประโยค (วิเคราะห์เสร็จ) เกิด<b>ก่อน</b>การเผยแพร่ในอดีต จึงใช้ Past Perfect Passive <b>had been analyzed</b> — และประโยคหลักทำ Inversion (did the researchers publish) เพราะขึ้นต้นด้วย Only after"
    },
    {
      id: "ST7-07", type: "sc", tag: "Comparison",
      question: "The second experiment produced results ______ to those of the first, confirming the original findings.",
      questionTH: "การทดลองครั้งที่สองให้ผลลัพธ์ ______ กับครั้งแรก ซึ่งยืนยันผลการค้นพบเดิม",
      choices: ["same", "alike", "similar", "identical as"],
      choicesTH: ["เหมือน (ต้องมี the)", "เหมือนกัน (วางหลังกริยาเท่านั้น)", "คล้าย (similar to)", "เหมือนกับ (รูปผิด)"],
      answer: 2,
      explanation: "<b>similar to</b> = คล้ายกับ (คู่บุพบทตายตัว) จึงตอบ similar — same ต้องมี the (the same as), alike วางหลังกริยาเท่านั้น (look alike), identical คู่กับ to ไม่ใช่ as"
    },
    {
      id: "ST7-08", type: "sc", tag: "Modal Verbs",
      question: "Visitors ______ not feed the animals, as human food can seriously harm their health.",
      questionTH: "ผู้เยี่ยมชม ______ ให้อาหารสัตว์ เพราะอาหารของคนอาจเป็นอันตรายต่อสุขภาพของพวกมันอย่างร้ายแรง",
      choices: ["could", "would", "might", "must"],
      choicesTH: ["สามารถ", "คงจะ", "อาจจะ", "ต้อง (must not = ห้าม)"],
      answer: 3,
      explanation: "<b>must not</b> = ห้าม (เป็นข้อห้ามเด็ดขาด) เหมาะกับป้ายเตือน — would/could/might not ไม่ได้สื่อการ 'ห้าม' ที่หนักแน่นเท่า บริบทคือกฎห้ามให้อาหารสัตว์"
    },
    {
      id: "ST7-09", type: "sc", tag: "Participle",
      question: "______ by years of drought, the once-fertile farmland can no longer support crops.",
      questionTH: "เพราะ ______ จากภัยแล้งหลายปี ผืนดินที่เคยอุดมสมบูรณ์จึงไม่สามารถเพาะปลูกได้อีกต่อไป",
      choices: ["Devastated", "Devastate", "Devastating", "To devastate"],
      choicesTH: ["ถูกทำให้พินาศ (ผู้ถูกกระทำ)", "ทำให้พินาศ (V1)", "ทำให้พินาศ (ผู้กระทำ)", "เพื่อทำให้พินาศ"],
      answer: 0,
      explanation: "ผืนดิน<b>ถูกทำให้เสียหาย</b> (ผู้ถูกกระทำ) จึงใช้ Past Participle <b>Devastated</b> ขึ้นต้น (= Because it was devastated by drought) — Devastating สื่อว่าผืนดินเป็นผู้ทำลาย ซึ่งผิดตรรกะ"
    },
    {
      id: "ST7-10", type: "sc", tag: "Prepositions/Connectors",
      question: "The bridge was closed for repairs; ______, commuters had to take a much longer route.",
      questionTH: "สะพานถูกปิดเพื่อซ่อมแซม ______ ผู้สัญจรจึงต้องใช้เส้นทางที่ยาวกว่ามาก",
      choices: ["nevertheless", "in contrast", "for example", "as a result"],
      choicesTH: ["อย่างไรก็ตาม", "ในทางตรงกันข้าม", "ตัวอย่างเช่น", "ผลที่ตามมาคือ"],
      answer: 3,
      explanation: "สองส่วนเป็นเหตุ-ผล (ปิดสะพาน → ต้องอ้อมไกล) จึงใช้ <b>as a result</b> (ผลที่ตามมา) — nevertheless แสดงความขัดแย้ง, in contrast แสดงความต่าง, for example ยกตัวอย่าง"
    },
    {
      id: "ST7-11", type: "sc", tag: "Subject-Verb Agreement",
      question: "The committee ______ divided over whether to approve the controversial development project.",
      questionTH: "คณะกรรมการ ______ แบ่งออกเป็นสองฝ่ายว่าจะอนุมัติโครงการพัฒนาที่เป็นที่ถกเถียงหรือไม่",
      choices: ["are", "is", "being", "be"],
      choicesTH: ["เป็น (พหูพจน์)", "เป็น (มองเป็นกลุ่มที่สมาชิกแยกความเห็น → พหูพจน์ได้)", "กำลังเป็น", "เป็น (รูปไม่ผัน)"],
      answer: 0,
      explanation: "คำนามกลุ่ม (committee, team, staff) เมื่อเน้นว่าสมาชิก<b>แยกความเห็นกัน</b> (divided) ถือเป็น<b>พหูพจน์</b> ใช้ <b>are</b> — ถ้ามองเป็นก้อนเดียวทำสิ่งเดียวกันจึงใช้ is แต่คำว่า 'divided' ชี้ว่าสมาชิกเห็นต่าง จึงเป็นพหูพจน์<br><br>📌 <b>หมายเหตุ:</b> คำนามกลุ่ม (collective noun) เป็นจุดที่อังกฤษ 2 แบบต่างกัน — บริติชยืดหยุ่นให้เป็นพหูพจน์ได้เมื่อเน้นตัวสมาชิก (the committee are divided) ส่วนอเมริกันมักใช้เอกพจน์เสมอ (the committee is). ข้อนี้บริบท 'divided' บังคับให้มองเป็นรายบุคคล จึงเฉลย are — ถ้าเจอบริบทที่กลุ่มทำสิ่งเดียวพร้อมกันให้ใช้เอกพจน์"
    },
    {
      id: "ST7-12", type: "sc", tag: "Gerund/Infinitive",
      question: "The factory denied ______ any toxic chemicals into the nearby river.",
      questionTH: "โรงงานปฏิเสธว่า ______ สารเคมีพิษใด ๆ ลงสู่แม่น้ำใกล้เคียง",
      choices: ["to release", "release", "released", "releasing"],
      choicesTH: ["จะปล่อย (to V)", "ปล่อย (V1)", "ปล่อยแล้ว (V3)", "การปล่อย (gerund)"],
      answer: 3,
      explanation: "กริยา <b>deny</b> ตามด้วย <b>Gerund (V-ing)</b> เสมอ จึงตอบ <b>releasing</b> — กลุ่มที่ตามด้วย V-ing: deny, admit, avoid, suggest, consider, finish"
    },
    {
      id: "ST7-13", type: "sc", tag: "Quantifiers",
      question: "______ of the two proposed designs meets all of the safety requirements, so both must be revised.",
      questionTH: "ดีไซน์ที่เสนอมาทั้งสองแบบ ไม่มีแบบใด ______ ตรงตามข้อกำหนดด้านความปลอดภัยทั้งหมด ทั้งสองจึงต้องแก้ไข",
      choices: ["Either", "Neither", "Both", "None"],
      choicesTH: ["อันใดอันหนึ่ง (ใน 2)", "ไม่ทั้งสอง (ใช้กับ 2)", "ทั้งสอง", "ไม่มีสักอัน (ใช้กับ 3 ขึ้นไป)"],
      answer: 1,
      explanation: "พูดถึง<b>สองสิ่ง</b> (the two designs) ในเชิงปฏิเสธ 'ไม่มีทั้งคู่' ต้องใช้ <b>Neither</b> (+ กริยาเอกพจน์ meets) — None ใช้กับสามสิ่งขึ้นไป ส่วน Either/Both ไม่ให้ความหมายปฏิเสธที่สอดคล้องกับ 'both must be revised'"
    },

    // ===== Error Identification =====
    {
      id: "ST7-14", type: "ei", tag: "Subject-Verb Agreement",
      question: "The list of approved medications <u>were</u><sup>(1)</sup> <u>updated</u><sup>(2)</sup> last month <u>to include</u><sup>(3)</sup> several new <u>treatments</u><sup>(4)</sup>.",
      questionTH: "รายชื่อยาที่ได้รับการอนุมัติถูกปรับปรุงเมื่อเดือนที่แล้วเพื่อรวมการรักษาใหม่หลายอย่าง",
      choices: ["were", "updated", "to include", "treatments"],
      choicesTH: ["ถูก (พหูพจน์ — ผิด ควรเป็น was)", "ปรับปรุง", "เพื่อรวม", "การรักษา"],
      answer: 0,
      explanation: "ประธานคือ <b>The list</b> (เอกพจน์) ไม่ใช่ medications ที่อยู่ใน of-phrase กริยาจึงต้องเป็น <b>was updated</b> — list/series/collection + of + พหูพจน์ → กริยาเอกพจน์"
    },
    {
      id: "ST7-15", type: "ei", tag: "Tense",
      question: "By the time the ambulance <u>reached</u><sup>(1)</sup> the scene, the injured man <u>has already</u><sup>(2)</sup> <u>lost</u><sup>(3)</sup> a great deal of <u>blood</u><sup>(4)</sup>.",
      questionTH: "เมื่อรถพยาบาลไปถึงที่เกิดเหตุ ชายที่บาดเจ็บก็เสียเลือดไปมากแล้ว",
      choices: ["reached", "has already", "lost", "blood"],
      choicesTH: ["ไปถึง (อดีต)", "ได้...แล้ว (ปัจจุบันสมบูรณ์ — ผิด ควรเป็น had already)", "เสีย/สูญเสีย", "เลือด"],
      answer: 1,
      explanation: "การเสียเลือดเกิด<b>ก่อน</b>รถพยาบาลมาถึง (อดีตก่อนอดีต) ต้องใช้ Past Perfect <b>had already lost</b> — 'By the time + Past Simple' ในประโยคหลักต้องเป็น Past Perfect"
    },
    {
      id: "ST7-16", type: "ei", tag: "Word Form",
      question: "The government's <u>decide</u><sup>(1)</sup> to cut funding has <u>sparked</u><sup>(2)</sup> widespread <u>protests</u><sup>(3)</sup> across the <u>country</u><sup>(4)</sup>.",
      questionTH: "การตัดสินใจตัดงบประมาณของรัฐบาลได้จุดชนวนการประท้วงในวงกว้างทั่วประเทศ",
      choices: ["decide", "sparked", "protests", "country"],
      choicesTH: ["ตัดสินใจ (กริยา — ผิด ควรเป็น decision)", "จุดชนวน", "การประท้วง", "ประเทศ"],
      answer: 0,
      explanation: "ตำแหน่งหลัง The government's (แสดงความเป็นเจ้าของ) ต้องเป็น<b>คำนาม</b> คือ <b>decision</b> (การตัดสินใจ) — decide เป็นกริยา ใช้ตรงนี้ไม่ได้ ชุดคำ: decide (v) / decision (n) / decisive (adj)"
    },
    {
      id: "ST7-17", type: "ei", tag: "Gerund/Infinitive",
      question: "The teacher suggested <u>to divide</u><sup>(1)</sup> the class into small groups <u>so that</u><sup>(2)</sup> everyone <u>could participate</u><sup>(3)</sup> more <u>actively</u><sup>(4)</sup>.",
      questionTH: "ครูแนะนำให้แบ่งชั้นเรียนออกเป็นกลุ่มเล็ก ๆ เพื่อให้ทุกคนมีส่วนร่วมได้อย่างกระตือรือร้นมากขึ้น",
      choices: ["to divide", "so that", "could participate", "actively"],
      choicesTH: ["ที่จะแบ่ง (to V — ผิด ควรเป็น dividing)", "เพื่อที่", "สามารถมีส่วนร่วม", "อย่างกระตือรือร้น"],
      answer: 0,
      explanation: "กริยา <b>suggest</b> ตามด้วย <b>Gerund (V-ing)</b> เสมอ จึงต้องแก้ to divide เป็น <b>dividing</b> — suggest ห้ามตามด้วย to-infinitive (suggest doing ไม่ใช่ suggest to do)"
    },
    {
      id: "ST7-18", type: "ei", tag: "Parallel Structure",
      question: "The new employee is hardworking, <u>reliable</u><sup>(1)</sup>, and <u>she learns</u><sup>(2)</sup> quickly, <u>which</u><sup>(3)</sup> makes her a valuable <u>addition</u><sup>(4)</sup> to the team.",
      questionTH: "พนักงานใหม่ขยัน เชื่อถือได้ และเรียนรู้เร็ว ซึ่งทำให้เธอเป็นบุคลากรที่มีค่าของทีม",
      choices: ["reliable", "she learns", "which", "addition"],
      choicesTH: ["เชื่อถือได้ (คุณศัพท์)", "เธอเรียนรู้ (ประโยค — ผิด ไม่ขนาน ควรเป็น quick to learn)", "ซึ่ง", "การเพิ่มเข้ามา/บุคลากร"],
      answer: 1,
      explanation: "รายการต้องขนานกัน — สองตัวแรกเป็นคุณศัพท์ (hardworking, reliable) ตัวที่สามควรเป็นคุณศัพท์ด้วย เช่น <b>quick to learn</b> ไม่ใช่ประโยคเต็ม 'she learns quickly' ที่ทำให้โครงสร้างไม่ขนาน"
    },
    {
      id: "ST7-19", type: "ei", tag: "Prepositions/Connectors",
      question: "The medical breakthrough <u>resulted</u><sup>(1)</sup> <u>in</u><sup>(2)</sup> years of dedicated research <u>conducted</u><sup>(3)</sup> by an international <u>team</u><sup>(4)</sup>.",
      questionTH: "ความก้าวหน้าทางการแพทย์เกิดจากงานวิจัยที่ทุ่มเทหลายปีซึ่งดำเนินการโดยทีมนานาชาติ",
      choices: ["resulted", "in", "conducted", "team"],
      choicesTH: ["เป็นผล", "ใน (result in = ส่งผลให้ — ผิด ควรเป็น from)", "ที่ดำเนินการ", "ทีม"],
      answer: 1,
      explanation: "งานวิจัยเป็น<b>สาเหตุ</b>ของความก้าวหน้า (สาเหตุตามหลัง) จึงต้องใช้ <b>result from</b> = เป็นผลมาจาก — ส่วน <b>result in</b> = ส่งผลให้เกิด (ผลตามหลัง) ใช้ผิดที่นี่ จำคู่: A result from B (B เป็นเหตุ) / A result in B (B เป็นผล)"
    },
    {
      id: "ST7-20", type: "ei", tag: "Adjective/Adverb",
      question: "The patient recovered <u>surprising</u><sup>(1)</sup> quickly after the surgery, <u>amazing</u><sup>(2)</sup> the doctors <u>who</u><sup>(3)</sup> had expected a long <u>recovery</u><sup>(4)</sup>.",
      questionTH: "ผู้ป่วยฟื้นตัวเร็วอย่างน่าประหลาดใจหลังการผ่าตัด สร้างความทึ่งให้แพทย์ที่คาดว่าจะใช้เวลาฟื้นตัวนาน",
      choices: ["surprising", "amazing", "who", "recovery"],
      choicesTH: ["น่าประหลาดใจ (คุณศัพท์ — ผิด ควรเป็น surprisingly)", "สร้างความทึ่ง", "ผู้ซึ่ง", "การฟื้นตัว"],
      answer: 0,
      explanation: "คำที่ขยาย<b>กริยาวิเศษณ์</b> quickly ต้องเป็นกริยาวิเศษณ์ คือ <b>surprisingly</b> (surprisingly quickly = เร็วอย่างน่าประหลาดใจ) — surprising เป็นคุณศัพท์ ขยาย adverb ไม่ได้"
    },
    {
      id: "ST7-21", type: "ei", tag: "Pronoun Case",
      question: "The committee awarded the scholarship to <u>whomever</u><sup>(1)</sup> <u>demonstrated</u><sup>(2)</sup> the greatest financial <u>need</u><sup>(3)</sup> and academic <u>potential</u><sup>(4)</sup>.",
      questionTH: "คณะกรรมการมอบทุนให้ใครก็ตามที่แสดงให้เห็นถึงความจำเป็นทางการเงินและศักยภาพทางวิชาการมากที่สุด",
      choices: ["whomever", "demonstrated", "need", "potential"],
      choicesTH: ["ใครก็ตามที่ (กรรม — ผิด ควรเป็น whoever)", "แสดงให้เห็น", "ความจำเป็น", "ศักยภาพ"],
      answer: 0,
      explanation: "คำนี้ทำหน้าที่<b>ประธาน</b>ของกริยา demonstrated จึงต้องใช้ <b>whoever</b> ไม่ใช่ whomever — จำหลัก: whoever + กริยา (เป็นประธาน) / whomever + ประธาน + กริยา (เป็นกรรม) แม้จะมี to นำหน้าก็ต้องดูหน้าที่ในอนุประโยค ไม่ใช่ดูแค่บุพบท"
    },
    {
      id: "ST7-22", type: "ei", tag: "Countable/Uncountable",
      question: "The conference attracted a large <u>number</u><sup>(1)</sup> of <u>researches</u><sup>(2)</sup> from universities <u>around</u><sup>(3)</sup> the <u>world</u><sup>(4)</sup>.",
      questionTH: "การประชุมดึงดูดงานวิจัย/นักวิจัยจำนวนมากจากมหาวิทยาลัยทั่วโลก",
      choices: ["number", "researches", "around", "world"],
      choicesTH: ["จำนวน", "งานวิจัย (นับไม่ได้ — ผิด ห้ามเติม s)", "รอบ ๆ ทั่ว", "โลก"],
      answer: 1,
      explanation: "<b>research</b> เป็นนามนับไม่ได้ <b>ไม่มีรูปพหูพจน์</b> ต้องแก้ — ถ้าหมายถึง 'งานวิจัย' ใช้ research papers/studies, ถ้าหมายถึง 'นักวิจัย' ใช้ researchers — กลุ่มนับไม่ได้: research, information, advice, equipment"
    },
    {
      id: "ST7-23", type: "ei", tag: "Comparison",
      question: "Renewable energy has become so affordable <u>that</u><sup>(1)</sup> it is now <u>more cheaper</u><sup>(2)</sup> <u>than</u><sup>(3)</sup> most <u>conventional</u><sup>(4)</sup> sources.",
      questionTH: "พลังงานหมุนเวียนมีราคาเอื้อมถึงได้มากจนตอนนี้ถูกกว่าแหล่งพลังงานแบบดั้งเดิมส่วนใหญ่",
      choices: ["that", "more cheaper", "than", "conventional"],
      choicesTH: ["จน (so...that)", "ถูกกว่า (ซ้ำซ้อน — ผิด ควรเป็น cheaper)", "กว่า", "แบบดั้งเดิม"],
      answer: 1,
      explanation: "<b>cheaper</b> เป็นขั้นกว่าอยู่แล้ว (cheap → cheaper) จึง<b>ห้ามเติม more ซ้ำ</b> ต้องตัดเหลือ cheaper — more ใช้กับคำคุณศัพท์ยาวที่ผันท้ายไม่ได้เท่านั้น"
    },
    {
      id: "ST7-24", type: "ei", tag: "Verb Form",
      question: "The ancient statues, <u>buried</u><sup>(1)</sup> for centuries, <u>was</u><sup>(2)</sup> finally <u>uncovered</u><sup>(3)</sup> during a routine <u>excavation</u><sup>(4)</sup>.",
      questionTH: "รูปปั้นโบราณที่ถูกฝังมานานหลายศตวรรษถูกขุดพบในที่สุดระหว่างการขุดสำรวจตามปกติ",
      choices: ["buried", "was", "uncovered", "excavation"],
      choicesTH: ["ถูกฝัง (participle ขยาย — ถูก)", "ถูก (เอกพจน์ — ผิด ควรเป็น were)", "ถูกขุดพบ", "การขุดสำรวจ"],
      answer: 1,
      explanation: "ประธานคือ <b>The ancient statues</b> (พหูพจน์) กริยาจึงต้องเป็น <b>were</b> uncovered — วลี 'buried for centuries' เป็นเพียง participle phrase คั่นกลาง ไม่ใช่ประธาน ข้อสอบใช้วลีคั่นเพื่อหลอกให้ลืมว่าประธานพหูพจน์"
    },
    {
      id: "ST7-25", type: "ei", tag: "Relative Clauses",
      question: "The remote village, <u>that</u><sup>(1)</sup> can only be reached <u>by boat</u><sup>(2)</sup>, has preserved its traditions <u>for</u><sup>(3)</sup> <u>generations</u><sup>(4)</sup>.",
      questionTH: "หมู่บ้านห่างไกลซึ่งเดินทางไปได้ทางเรือเท่านั้น ได้รักษาประเพณีของตนไว้มาหลายชั่วอายุคน",
      choices: ["that", "by boat", "for", "generations"],
      choicesTH: ["ที่ (ใช้กับ non-defining ไม่ได้ — ผิด ควรเป็น which)", "ทางเรือ", "เป็นเวลา", "หลายชั่วอายุคน"],
      answer: 0,
      explanation: "เป็น Non-defining clause (มี<b>จุลภาคคั่น</b>) ซึ่ง<b>ห้ามใช้ that</b> ต้องใช้ <b>which</b> — that ใช้ได้เฉพาะ defining clause (ไม่มีจุลภาค) เท่านั้น"
    },
  ],
});
