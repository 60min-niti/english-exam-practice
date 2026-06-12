// Structure ชุดที่ 4 — Sentence Completion (ข้อ 1-13) + Error Identification (ข้อ 14-25)
// แนวข้อสอบจริง: ประโยคเชิงข่าว/วิชาการ มีอนุประโยคซ้อน
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 4,
  questions: [
    // ===== Sentence Completion =====
    {
      id: "ST4-01", type: "sc", tag: "Subject-Verb Agreement",
      question: "The collection of rare manuscripts that the library acquired last year ______ now available to the public.",
      questionTH: "คอลเล็กชันต้นฉบับหายากที่ห้องสมุดได้มาเมื่อปีที่แล้ว ตอนนี้ ______ เปิดให้สาธารณชนเข้าถึง",
      choices: ["are", "is", "were", "have been"],
      choicesTH: ["เป็น (พหูพจน์)", "เป็น (เอกพจน์)", "เป็น (พหูพจน์ อดีต)", "ได้เป็น (พหูพจน์ สมบูรณ์)"],
      answer: 1,
      explanation: "ประธานจริงคือ <b>The collection</b> (เอกพจน์) ไม่ใช่ manuscripts ที่อยู่ในอนุประโยค that... กริยาจึงต้องเป็น <b>is</b> — ข้อสอบจริงชอบเอานามพหูพจน์มาคั่นระหว่างประธานกับกริยาเพื่อหลอกตา (collection/series/variety + of + พหูพจน์ → กริยาเอกพจน์)"
    },
    {
      id: "ST4-02", type: "sc", tag: "Passive Voice",
      question: "The new high-speed rail line, which connects the two largest cities, ______ to reduce travel time by half.",
      questionTH: "เส้นทางรถไฟความเร็วสูงสายใหม่ที่เชื่อมสองเมืองใหญ่ที่สุด ______ ว่าจะลดเวลาเดินทางลงครึ่งหนึ่ง",
      choices: ["expects", "is expected", "expecting", "has expected"],
      choicesTH: ["คาดหวัง (รูปกระทำ)", "ถูกคาดหวัง (รูปถูกกระทำ)", "กำลังคาดหวัง", "ได้คาดหวังแล้ว"],
      answer: 1,
      explanation: "เส้นทางรถไฟ<b>ถูกคาดการณ์</b> (ทำกริยา expect เองไม่ได้) จึงต้องใช้ Passive: <b>is expected to + V1</b> (โครงสร้างที่พบบ่อยในข่าว: be expected/believed/said to do) — ตัวเลือกที่เป็น Active แปลว่ารถไฟเป็นผู้คาดหวัง ซึ่งผิดตรรกะ"
    },
    {
      id: "ST4-03", type: "sc", tag: "Tense",
      question: "Global average temperatures ______ steadily since the start of the industrial era, according to climate scientists.",
      questionTH: "อุณหภูมิเฉลี่ยทั่วโลก ______ อย่างต่อเนื่องนับตั้งแต่เริ่มยุคอุตสาหกรรม ตามที่นักวิทยาศาสตร์ภูมิอากาศระบุ",
      choices: ["rose", "have risen", "are rising", "rise"],
      choicesTH: ["สูงขึ้น (อดีต)", "ได้สูงขึ้น (ปัจจุบันสมบูรณ์)", "กำลังสูงขึ้น (ปัจจุบันต่อเนื่อง)", "สูงขึ้น (ปัจจุบัน)"],
      answer: 1,
      explanation: "<b>since the start of...</b> เป็นตัวบ่งชี้ Present Perfect (เหตุการณ์เริ่มในอดีตและต่อเนื่องถึงปัจจุบัน) จึงตอบ <b>have risen</b> — since เป็นคำสัญญาณหลักของ Present Perfect ตามที่หนังสือติวเน้นย้ำ"
    },
    {
      id: "ST4-04", type: "sc", tag: "Conditionals",
      question: "Had the government acted sooner, the spread of the disease ______ contained more effectively.",
      questionTH: "หากรัฐบาลลงมือเร็วกว่านี้ การแพร่ระบาดของโรคก็คง ______ ควบคุมได้อย่างมีประสิทธิภาพมากกว่านี้",
      choices: ["would be", "would have been", "will be", "had been"],
      choicesTH: ["คงเป็น (เงื่อนไขแบบ 2)", "คงได้ถูก (เงื่อนไขแบบ 3)", "จะเป็น (อนาคต)", "ได้เป็น (อดีตสมบูรณ์)"],
      answer: 1,
      explanation: "'Had the government acted' คือ If-clause แบบที่ 3 ที่ละ If แล้วสลับ had ขึ้นหน้า (= If the government had acted) ประโยคหลักต้องใช้ <b>would have been + V3</b> — เป็นการสมมติเหตุการณ์ตรงข้ามกับอดีต"
    },
    {
      id: "ST4-05", type: "sc", tag: "Relative Clauses",
      question: "The startup developed an app ______ allows farmers to monitor soil moisture using their smartphones.",
      questionTH: "สตาร์ทอัปพัฒนาแอป ______ ช่วยให้เกษตรกรตรวจสอบความชื้นในดินผ่านสมาร์ตโฟนได้",
      choices: ["what", "whose", "that", "where"],
      choicesTH: ["สิ่งที่", "ซึ่ง...ของมัน", "ซึ่ง/ที่ (ประธานของอนุประโยค)", "ที่ซึ่ง (สถานที่)"],
      answer: 2,
      explanation: "ช่องว่างทำหน้าที่<b>ประธาน</b>ของอนุประโยค (allows...) ขยายคำนาม an app (สิ่งของ) จึงใช้ <b>that</b> (หรือ which) — what ใช้แทนคำนามไม่ได้เมื่อมี an app อยู่แล้ว, whose แสดงความเป็นเจ้าของ, where ใช้กับสถานที่"
    },
    {
      id: "ST4-06", type: "sc", tag: "Gerund/Infinitive",
      question: "Despite the risks, the company is considering ______ its operations into emerging markets next year.",
      questionTH: "แม้จะมีความเสี่ยง บริษัทก็กำลังพิจารณา ______ การดำเนินงานเข้าสู่ตลาดเกิดใหม่ในปีหน้า",
      choices: ["to expand", "expanding", "expand", "expanded"],
      choicesTH: ["จะขยาย (to V)", "การขยาย (gerund)", "ขยาย (V1)", "ขยายแล้ว (V3)"],
      answer: 1,
      explanation: "กริยา <b>consider</b> ต้องตามด้วย <b>Gerund (V-ing)</b> เสมอ จึงตอบ <b>expanding</b> — กลุ่มที่ตามด้วย V-ing: consider, avoid, suggest, finish, postpone, mind, practice"
    },
    {
      id: "ST4-07", type: "sc", tag: "Comparison",
      question: "The latest electric vehicle is far more energy-efficient than ______ produced a decade ago.",
      questionTH: "ยานยนต์ไฟฟ้ารุ่นล่าสุดประหยัดพลังงานกว่า ______ ที่ผลิตเมื่อสิบปีก่อนมาก",
      choices: ["those", "that", "them", "ones"],
      choicesTH: ["พวกนั้น (แทนนามพหูพจน์)", "อันนั้น (แทนนามเอกพจน์)", "พวกมัน (สรรพนามกรรม)", "อัน ๆ"],
      answer: 0,
      explanation: "เปรียบเทียบ 'ยานยนต์รุ่นล่าสุด' กับ 'ยานยนต์ (พหูพจน์) ที่ผลิตเมื่อสิบปีก่อน' ต้องใช้ <b>those</b> แทน the vehicles (พหูพจน์) — that ใช้แทนนามเอกพจน์/นับไม่ได้ ส่วน them เป็นสรรพนามกรรม ใช้นำหน้า participle phrase (produced...) ไม่ได้"
    },
    {
      id: "ST4-08", type: "sc", tag: "Modal Verbs",
      question: "The bridge shows visible cracks; engineers say it ______ have been inspected months ago.",
      questionTH: "สะพานมีรอยร้าวที่มองเห็นได้ วิศวกรบอกว่ามัน ______ ได้รับการตรวจสอบไปตั้งแต่หลายเดือนก่อน",
      choices: ["should", "must", "can", "would"],
      choicesTH: ["ควรจะ (แต่ไม่ได้ทำ)", "ต้อง (มั่นใจว่าเกิดขึ้น)", "สามารถ", "คงจะ"],
      answer: 0,
      explanation: "<b>should have + V3</b> = 'ควรจะได้ทำ...แต่ไม่ได้ทำ' (ควรตรวจไปแล้วแต่ไม่ได้ตรวจ จึงร้าว) — must have + V3 แปลว่า 'คงได้...ไปแล้วแน่ ๆ' ซึ่งขัดกับบริบทที่สื่อว่าการตรวจถูกละเลย"
    },
    {
      id: "ST4-09", type: "sc", tag: "Participle",
      question: "______ in clear and simple language, the report was easily understood by the general public.",
      questionTH: "เพราะ ______ ด้วยภาษาที่ชัดเจนและเรียบง่าย รายงานฉบับนี้จึงเข้าใจได้ง่ายสำหรับคนทั่วไป",
      choices: ["Writing", "Written", "Having written", "To write"],
      choicesTH: ["กำลังเขียน (ผู้กระทำ)", "ถูกเขียน (ผู้ถูกกระทำ)", "เมื่อได้เขียนแล้ว", "เพื่อเขียน"],
      answer: 1,
      explanation: "รายงาน<b>ถูกเขียน</b> (ผู้ถูกกระทำ) จึงใช้ Past Participle <b>Written</b> ขึ้นต้นแบบ Participial Phrase — Writing (V-ing) จะแปลว่ารายงานเป็นผู้เขียน ซึ่งผิดตรรกะ"
    },
    {
      id: "ST4-10", type: "sc", tag: "Prepositions/Connectors",
      question: "______ rising fuel costs, several airlines have announced higher ticket prices for the coming season.",
      questionTH: "______ ต้นทุนเชื้อเพลิงที่สูงขึ้น สายการบินหลายแห่งได้ประกาศขึ้นราคาตั๋วสำหรับฤดูกาลที่จะถึง",
      choices: ["Owing to", "Although", "So that", "In order to"],
      choicesTH: ["เนื่องจาก (+ วลีนาม)", "แม้ว่า (+ ประโยค)", "เพื่อที่จะ (+ ประโยค)", "เพื่อที่จะ (+ กริยา)"],
      answer: 0,
      explanation: "หลังช่องว่างเป็น<b>วลีนาม</b> (rising fuel costs) และสื่อความเป็นเหตุเป็นผล (ต้นทุนสูง → ตั๋วแพง) จึงใช้ <b>Owing to</b> (= เนื่องจาก) — Although ตามด้วยประโยค, In order to ตามด้วยกริยา"
    },
    {
      id: "ST4-11", type: "sc", tag: "Inversion",
      question: "Rarely ______ such a comprehensive study of urban air pollution been conducted in this region.",
      questionTH: "ไม่บ่อยนักที่ ______ การศึกษามลพิษทางอากาศในเมืองอย่างครอบคลุมเช่นนี้ในภูมิภาคนี้",
      choices: ["has", "have", "did", "was"],
      choicesTH: ["ได้ (เอกพจน์)", "ได้ (พหูพจน์)", "ได้ทำ (อดีต)", "ถูก (อดีต)"],
      answer: 0,
      explanation: "ขึ้นต้นด้วยคำกึ่งปฏิเสธ <b>Rarely</b> ต้องสลับกริยาช่วยขึ้นหน้า (Inversion) และประธานคือ a study (เอกพจน์) + been conducted บ่งชี้ Present Perfect Passive จึงใช้ <b>has</b>: Rarely has such a study been conducted"
    },
    {
      id: "ST4-12", type: "sc", tag: "Subjunctive",
      question: "Safety regulations require that every worker on the site ______ a helmet at all times.",
      questionTH: "กฎความปลอดภัยกำหนดให้คนงานทุกคนในไซต์งาน ______ หมวกนิรภัยตลอดเวลา",
      choices: ["wears", "wear", "wore", "is wearing"],
      choicesTH: ["สวม (เอกพจน์ ปัจจุบัน)", "สวม (รูป subjunctive ไม่ผัน)", "สวม (อดีต)", "กำลังสวม"],
      answer: 1,
      explanation: "กริยากลุ่มข้อบังคับ (require, demand, insist, suggest) + that ต้องตามด้วย <b>Subjunctive</b> คือกริยาช่อง 1 ไม่ผัน จึงใช้ <b>wear</b> แม้ประธาน every worker จะเป็นเอกพจน์ก็ตาม"
    },
    {
      id: "ST4-13", type: "sc", tag: "Conjunctions",
      question: "The factory must either reduce its emissions ______ face heavy fines under the new law.",
      questionTH: "โรงงานต้องไม่ลดการปล่อยมลพิษ ______ ก็ต้องเจอค่าปรับหนักภายใต้กฎหมายใหม่",
      choices: ["nor", "and", "or", "but"],
      choicesTH: ["ทั้งไม่ (คู่กับ neither)", "และ", "หรือ (คู่กับ either)", "แต่"],
      answer: 2,
      explanation: "คำเชื่อมคู่ <b>either ... or ...</b> เป็นคู่ตายตัว จึงตอบ <b>or</b> — neither คู่กับ nor, both คู่กับ and, not only คู่กับ but also"
    },

    // ===== Error Identification =====
    {
      id: "ST4-14", type: "ei", tag: "Subject-Verb Agreement",
      question: "The rise of online platforms <u>have</u><sup>(1)</sup> transformed the way <u>in which</u><sup>(2)</sup> small businesses <u>reach</u><sup>(3)</sup> customers <u>around</u><sup>(4)</sup> the world.",
      questionTH: "การผงาดขึ้นของแพลตฟอร์มออนไลน์ได้เปลี่ยนวิธีที่ธุรกิจขนาดเล็กเข้าถึงลูกค้าทั่วโลก",
      choices: ["have", "in which", "reach", "around"],
      choicesTH: ["ได้ (พหูพจน์ — ผิด ควรเป็น has)", "ในแบบที่", "เข้าถึง", "รอบ ๆ ทั่ว"],
      answer: 0,
      explanation: "ประธานคือ <b>The rise</b> (เอกพจน์) ไม่ใช่ platforms ที่อยู่ใน of-phrase กริยาจึงต้องเป็น <b>has transformed</b> — เป็นกับดักคลาสสิกที่เอานามพหูพจน์มาคั่นหน้ากริยา"
    },
    {
      id: "ST4-15", type: "ei", tag: "Passive Voice",
      question: "The ancient temple, <u>which</u><sup>(1)</sup> damaged severely by the earthquake, <u>is being</u><sup>(2)</sup> restored <u>by</u><sup>(3)</sup> a team of international <u>experts</u><sup>(4)</sup>.",
      questionTH: "วัดโบราณซึ่งเสียหายอย่างหนักจากแผ่นดินไหว กำลังได้รับการบูรณะโดยทีมผู้เชี่ยวชาญนานาชาติ",
      choices: ["which", "is being", "by", "experts"],
      choicesTH: ["ซึ่ง (ขาด was — ควรเป็น which was)", "กำลังถูก", "โดย", "ผู้เชี่ยวชาญ"],
      answer: 0,
      explanation: "วัด<b>ถูกทำให้เสียหาย</b> ต้องใช้ Passive แต่ which damaged เป็นรูป Active ต้องแก้เป็น <b>which was damaged</b> (วัดถูกแผ่นดินไหวทำให้เสียหาย) — สิ่งของที่ทำกริยาเองไม่ได้เป็นสัญญาณของ Passive"
    },
    {
      id: "ST4-16", type: "ei", tag: "Word Form",
      question: "The <u>rapidly</u><sup>(1)</sup> growth of the digital economy has created <u>millions</u><sup>(2)</sup> of new jobs <u>that</u><sup>(3)</sup> did not exist <u>a decade ago</u><sup>(4)</sup>.",
      questionTH: "การเติบโตอย่างรวดเร็วของเศรษฐกิจดิจิทัลได้สร้างงานใหม่หลายล้านตำแหน่งที่ไม่เคยมีเมื่อสิบปีก่อน",
      choices: ["rapidly", "millions", "that", "a decade ago"],
      choicesTH: ["อย่างรวดเร็ว (กริยาวิเศษณ์ — ผิด ควรเป็น rapid)", "หลายล้าน", "ที่ซึ่ง", "เมื่อสิบปีก่อน"],
      answer: 0,
      explanation: "คำที่ขยายคำนาม growth ต้องเป็น<b>คุณศัพท์</b> คือ <b>rapid</b> — rapidly เป็นกริยาวิเศษณ์ใช้ขยายกริยา (grow rapidly) ตำแหน่งหน้าคำนามใช้ไม่ได้ จุดสังเกต: หน้า noun ต้องเป็น adjective"
    },
    {
      id: "ST4-17", type: "ei", tag: "Tense",
      question: "Since the company <u>adopted</u><sup>(1)</sup> remote work in 2020, productivity <u>increased</u><sup>(2)</sup> <u>significantly</u><sup>(3)</sup> and employee turnover <u>has dropped</u><sup>(4)</sup>.",
      questionTH: "นับตั้งแต่บริษัทนำการทำงานทางไกลมาใช้ในปี 2020 ผลิตภาพก็เพิ่มขึ้นอย่างมากและอัตราการลาออกของพนักงานก็ลดลง",
      choices: ["adopted", "increased", "significantly", "has dropped"],
      choicesTH: ["นำมาใช้ (อดีต)", "เพิ่มขึ้น (อดีต — ผิด ควรเป็น has increased)", "อย่างมาก", "ได้ลดลง"],
      answer: 1,
      explanation: "<b>Since + จุดเวลาในอดีต</b> ประโยคหลักต้องใช้ Present Perfect (has increased) เพราะต่อเนื่องถึงปัจจุบัน — สังเกตว่าอีกกริยาในประโยคใช้ has dropped ถูกแล้ว แต่ increased ยังเป็น Past Simple จึงผิด"
    },
    {
      id: "ST4-18", type: "ei", tag: "Parallel Structure",
      question: "The workshop aims to help participants <u>communicate</u><sup>(1)</sup> clearly, <u>think</u><sup>(2)</sup> critically, and <u>to manage</u><sup>(3)</sup> their time <u>effectively</u><sup>(4)</sup>.",
      questionTH: "เวิร์กชอปนี้มุ่งช่วยให้ผู้เข้าร่วมสื่อสารได้ชัดเจน คิดเชิงวิพากษ์ และบริหารเวลาได้อย่างมีประสิทธิภาพ",
      choices: ["communicate", "think", "to manage", "effectively"],
      choicesTH: ["สื่อสาร", "คิด", "บริหารจัดการ (มี to เกิน — ผิด ควรเป็น manage)", "อย่างมีประสิทธิภาพ"],
      answer: 2,
      explanation: "รายการที่เชื่อมด้วย and ต้องอยู่ในรูปขนานกัน: help participants <b>communicate</b>..., <b>think</b>..., and <b>manage</b>... ทั้งสามเป็นกริยาช่อง 1 (โครงสร้าง help + V1) จึงต้องตัด to ออกจาก to manage"
    },
    {
      id: "ST4-19", type: "ei", tag: "Comparison",
      question: "Researchers found that the new treatment was <u>more effective</u><sup>(1)</sup> <u>as</u><sup>(2)</sup> the standard one <u>in reducing</u><sup>(3)</sup> the <u>recovery</u><sup>(4)</sup> time.",
      questionTH: "นักวิจัยพบว่าการรักษาแบบใหม่มีประสิทธิภาพมากกว่าแบบมาตรฐานในการลดเวลาฟื้นตัว",
      choices: ["more effective", "as", "in reducing", "recovery"],
      choicesTH: ["มีประสิทธิภาพมากกว่า", "เท่ากับ (ผิด ควรเป็น than)", "ในการลด", "การฟื้นตัว"],
      answer: 1,
      explanation: "เมื่อใช้ขั้นกว่า <b>more effective</b> ต้องคู่กับ <b>than</b> ไม่ใช่ as — as...as ใช้กับการเปรียบเทียบเท่ากันเท่านั้น เป็นการจับคู่โครงสร้างผิดที่ข้อสอบชอบออก"
    },
    {
      id: "ST4-20", type: "ei", tag: "Prepositions/Connectors",
      question: "The committee <u>is responsible</u><sup>(1)</sup> <u>of</u><sup>(2)</sup> reviewing all applications <u>before</u><sup>(3)</sup> they <u>are forwarded</u><sup>(4)</sup> to the director.",
      questionTH: "คณะกรรมการมีหน้าที่รับผิดชอบในการพิจารณาใบสมัครทั้งหมดก่อนส่งต่อไปยังผู้อำนวยการ",
      choices: ["is responsible", "of", "before", "are forwarded"],
      choicesTH: ["มีหน้าที่รับผิดชอบ", "ของ (บุพบทผิด ควรเป็น for)", "ก่อนที่", "ถูกส่งต่อ"],
      answer: 1,
      explanation: "<b>responsible</b> ต้องคู่กับบุพบท <b>for</b> + V-ing (responsible <b>for</b> reviewing) — responsible of เป็นการจับคู่บุพบทผิด คู่บุพบทที่ต้องจำ: responsible for, capable of, interested in"
    },
    {
      id: "ST4-21", type: "ei", tag: "Pronoun Agreement",
      question: "Every student and teacher <u>was asked</u><sup>(1)</sup> to bring <u>their</u><sup>(2)</sup> own device <u>to</u><sup>(3)</sup> the online training <u>session</u><sup>(4)</sup>.",
      questionTH: "นักเรียนและครูทุกคนถูกขอให้นำอุปกรณ์ของตนเองมาในคาบฝึกอบรมออนไลน์",
      choices: ["was asked", "their", "to", "session"],
      choicesTH: ["ถูกขอ", "ของพวกเขา (พหูพจน์ — ผิด ควรเป็น his or her)", "ไปยัง", "คาบ/ช่วง"],
      answer: 1,
      explanation: "ประธาน <b>Every student and teacher</b> ที่นำหน้าด้วย Every ถือเป็นเอกพจน์ (สังเกตกริยา was) สรรพนามจึงต้องเป็นเอกพจน์ <b>his or her</b> ไม่ใช่ their — Every + A and B → เอกพจน์"
    },
    {
      id: "ST4-22", type: "ei", tag: "Gerund/Infinitive",
      question: "The new policy will prevent companies <u>from</u><sup>(1)</sup> <u>to collect</u><sup>(2)</sup> personal data <u>without</u><sup>(3)</sup> the user's explicit <u>consent</u><sup>(4)</sup>.",
      questionTH: "นโยบายใหม่จะป้องกันไม่ให้บริษัทเก็บข้อมูลส่วนบุคคลโดยไม่ได้รับความยินยอมอย่างชัดแจ้งจากผู้ใช้",
      choices: ["from", "to collect", "without", "consent"],
      choicesTH: ["จาก", "ที่จะเก็บ (to V — ผิด ควรเป็น collecting)", "โดยไม่มี", "ความยินยอม"],
      answer: 1,
      explanation: "โครงสร้าง <b>prevent + กรรม + from + V-ing</b> (ป้องกันไม่ให้...ทำ) จึงต้องเป็น from <b>collecting</b> — หลังบุพบท from ต้องตามด้วย Gerund เสมอ ห้ามใช้ to-infinitive"
    },
    {
      id: "ST4-23", type: "ei", tag: "Adjective/Adverb",
      question: "The volunteers responded <u>immediate</u><sup>(1)</sup> to the disaster, <u>distributing</u><sup>(2)</sup> supplies <u>to</u><sup>(3)</sup> thousands of <u>affected</u><sup>(4)</sup> families.",
      questionTH: "อาสาสมัครตอบสนองต่อภัยพิบัติอย่างทันท่วงที โดยแจกจ่ายสิ่งของให้ครอบครัวที่ได้รับผลกระทบหลายพันครอบครัว",
      choices: ["immediate", "distributing", "to", "affected"],
      choicesTH: ["ทันที (คุณศัพท์ — ผิด ควรเป็น immediately)", "โดยแจกจ่าย", "ให้แก่", "ที่ได้รับผลกระทบ"],
      answer: 0,
      explanation: "คำที่ขยายกริยา responded ต้องเป็น<b>กริยาวิเศษณ์</b> คือ <b>immediately</b> — immediate เป็นคุณศัพท์ใช้ขยายคำนาม (an immediate response) เท่านั้น"
    },
    {
      id: "ST4-24", type: "ei", tag: "Countable/Uncountable",
      question: "The survey collected a large <u>amount</u><sup>(1)</sup> of <u>responses</u><sup>(2)</sup> from volunteers <u>throughout</u><sup>(3)</sup> the <u>region</u><sup>(4)</sup>.",
      questionTH: "แบบสำรวจรวบรวมคำตอบจำนวนมากจากอาสาสมัครทั่วทั้งภูมิภาค",
      choices: ["amount", "responses", "throughout", "region"],
      choicesTH: ["ปริมาณ (ใช้กับนับไม่ได้ — ผิด ควรเป็น number)", "คำตอบ (นับได้)", "ทั่วทั้ง", "ภูมิภาค"],
      answer: 0,
      explanation: "<b>responses</b> เป็นนามนับได้พหูพจน์ ต้องใช้ <b>a large number of</b> ไม่ใช่ amount — จำหลัก: <b>amount of</b> + นามนับไม่ได้ (amount of water/data), <b>number of</b> + นามนับได้พหูพจน์ (number of responses/people)"
    },
    {
      id: "ST4-25", type: "ei", tag: "Relative Clauses",
      question: "The scientist <u>which</u><sup>(1)</sup> discovered the new species <u>was awarded</u><sup>(2)</sup> a prestigious prize <u>for</u><sup>(3)</sup> her <u>contribution</u><sup>(4)</sup> to biology.",
      questionTH: "นักวิทยาศาสตร์ผู้ค้นพบสิ่งมีชีวิตชนิดใหม่ได้รับรางวัลอันทรงเกียรติจากการอุทิศตนต่อวงการชีววิทยา",
      choices: ["which", "was awarded", "for", "contribution"],
      choicesTH: ["ซึ่ง (ใช้กับสิ่งของ — ผิด ควรเป็น who)", "ได้รับรางวัล", "จาก/สำหรับ", "การอุทิศ/ส่วนร่วม"],
      answer: 0,
      explanation: "The scientist เป็น<b>คน</b> ต้องใช้ relative pronoun <b>who</b> (หรือ that) ไม่ใช่ which — which ใช้กับสิ่งของ/สัตว์เท่านั้น"
    },
  ],
});
