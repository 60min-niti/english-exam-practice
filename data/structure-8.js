// Structure ชุดที่ 8 — Sentence Completion (ข้อ 1-13) + Error Identification (ข้อ 14-25)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "structure",
  set: 8,
  questions: [
    // ===== Sentence Completion =====
    {
      id: "ST8-01", type: "sc", tag: "Tense",
      question: "The volunteers ______ the flooded houses for hours before help finally arrived.",
      questionTH: "อาสาสมัคร ______ บ้านที่ถูกน้ำท่วมอยู่หลายชั่วโมงก่อนที่ความช่วยเหลือจะมาถึงในที่สุด",
      choices: ["cleared", "have cleared", "clear", "had been clearing"],
      choicesTH: ["เคลียร์ (อดีต)", "ได้เคลียร์แล้ว (ปัจจุบันสมบูรณ์)", "เคลียร์ (ปัจจุบัน)", "ได้เคลียร์มาอย่างต่อเนื่อง (อดีตสมบูรณ์ต่อเนื่อง)"],
      answer: 3,
      explanation: "การกระทำดำเนินต่อเนื่อง 'เป็นเวลาหลายชั่วโมง' <b>ก่อน</b>อีกเหตุการณ์ในอดีต (ความช่วยเหลือมาถึง) จึงใช้ Past Perfect Continuous <b>had been clearing</b> — เน้นความต่อเนื่องก่อนถึงจุดในอดีต (for hours + before)"
    },
    {
      id: "ST8-02", type: "sc", tag: "Conditionals",
      question: "Provided that the weather ______ favorable, the rocket launch will proceed as scheduled.",
      questionTH: "หากสภาพอากาศ ______ เอื้ออำนวย การปล่อยจรวดจะดำเนินไปตามกำหนด",
      choices: ["would remain", "will remain", "remained", "remains"],
      choicesTH: ["คงยังคง", "จะยังคง (อนาคต)", "ยังคง (อดีต)", "ยังคง (ปัจจุบัน)"],
      answer: 3,
      explanation: "<b>Provided that</b> (= ถ้า/ตราบเท่าที่) เป็นคำเชื่อมเงื่อนไขแบบจริง (แบบที่ 1) ในอนุประโยคเงื่อนไขใช้ Present Simple <b>remains</b> ส่วนประโยคหลักใช้ will — ห้ามใช้ will ในอนุประโยคเงื่อนไข"
    },
    {
      id: "ST8-03", type: "sc", tag: "Gerund/Infinitive",
      question: "The residents strongly objected to ______ a waste incinerator built near their homes.",
      questionTH: "ผู้อยู่อาศัยคัดค้านอย่างหนักต่อ ______ เตาเผาขยะใกล้บ้านของพวกเขา",
      choices: ["having", "have", "be had", "to have"],
      choicesTH: ["การมี (gerund)", "มี (V1)", "ถูกมี", "ที่จะมี"],
      answer: 0,
      explanation: "<b>object to + V-ing</b> (to ในที่นี้เป็นบุพบท) จึงต้องตามด้วย Gerund <b>having</b> — กลุ่มที่ to เป็นบุพบทตามด้วย V-ing: object to, be opposed to, look forward to, be accustomed to"
    },
    {
      id: "ST8-04", type: "sc", tag: "Relative Clauses",
      question: "The author, ______ novels have been translated into forty languages, will visit the city next week.",
      questionTH: "นักเขียนผู้ซึ่งนวนิยาย ______ ถูกแปลเป็นสี่สิบภาษา จะมาเยือนเมืองนี้สัปดาห์หน้า",
      choices: ["which", "who", "whose", "that"],
      choicesTH: ["ซึ่ง (สิ่งของ)", "ผู้ซึ่ง (ประธาน)", "ซึ่ง...ของเขา (แสดงความเป็นเจ้าของ)", "ที่"],
      answer: 2,
      explanation: "ช่องว่างแสดง<b>ความเป็นเจ้าของ</b> (นวนิยาย 'ของ' นักเขียน) ตามด้วยคำนาม novels จึงใช้ <b>whose</b> — และเป็น non-defining clause (มีจุลภาค) ที่ใช้ที่ขยายคนได้"
    },
    {
      id: "ST8-05", type: "sc", tag: "Passive Voice",
      question: "By next month, all the old streetlights in the district ______ with energy-saving LED units.",
      questionTH: "ภายในเดือนหน้า ไฟถนนเก่าทั้งหมดในเขตนี้ ______ ด้วยหลอด LED ประหยัดพลังงาน",
      choices: ["will have been replaced", "will replace", "will be replacing", "have replaced"],
      choicesTH: ["จะถูกแทนที่เสร็จแล้ว (อนาคตสมบูรณ์ ถูกกระทำ)", "จะแทนที่ (รูปกระทำ)", "จะกำลังแทนที่", "ได้แทนที่แล้ว"],
      answer: 0,
      explanation: "ไฟถนน<b>ถูกแทนที่</b> (Passive) และ 'By next month' ชี้ว่าจะ<b>เสร็จก่อน</b>จุดเวลาในอนาคต → Future Perfect Passive <b>will have been replaced</b> — รวมสองหลัก: by + จุดอนาคต = Future Perfect, ของถูกกระทำ = Passive"
    },
    {
      id: "ST8-06", type: "sc", tag: "Inversion",
      question: "______ had the negotiations resumed than a new dispute brought them to a halt once again.",
      questionTH: "การเจรจาเพิ่งจะกลับมาเริ่มใหม่ได้ไม่ทันไร ______ ข้อพิพาทใหม่ก็ทำให้มันต้องหยุดชะงักอีกครั้ง",
      choices: ["Scarcely", "Hardly", "Rarely", "No sooner"],
      choicesTH: ["แทบจะไม่ (คู่กับ when)", "แทบจะไม่ (คู่กับ when)", "ไม่บ่อยนัก", "พอ...ก็...ทันที (คู่กับ than)"],
      answer: 3,
      explanation: "ประโยคใช้ <b>than</b> ตามมา จึงต้องขึ้นต้นด้วย <b>No sooner</b> (No sooner ... than ... = พอ...ก็...ทันที) — Hardly/Scarcely คู่กับ when ไม่ใช่ than ส่วน Rarely ไม่เข้าโครงสร้างนี้"
    },
    {
      id: "ST8-07", type: "sc", tag: "Comparison",
      question: "The more the public learns about the issue, ______ they become about the lack of government action.",
      questionTH: "ยิ่งสาธารณชนรับรู้เกี่ยวกับประเด็นนี้มากเท่าไร พวกเขาก็ยิ่ง ______ เกี่ยวกับการที่รัฐบาลไม่ลงมือทำ",
      choices: ["the angriest", "the angrier", "more angry", "angrier"],
      choicesTH: ["โกรธที่สุด (ขั้นสูงสุด)", "ยิ่งโกรธขึ้น (the + ขั้นกว่า)", "โกรธมากขึ้น (รูปผิด)", "โกรธขึ้น"],
      answer: 1,
      explanation: "โครงสร้างเปรียบเทียบคู่ขนาน 'ยิ่ง...ยิ่ง...' คือ <b>The + ขั้นกว่า..., the + ขั้นกว่า...</b> เมื่อขึ้นต้น The more ประโยคหลังต้องเป็น <b>the angrier</b> — ขาด the ไม่ได้ และ angry ผันเป็น angrier (ไม่ใช่ more angry)"
    },
    {
      id: "ST8-08", type: "sc", tag: "Subjunctive",
      question: "It is essential that every passenger ______ aware of the emergency exits before takeoff.",
      questionTH: "เป็นเรื่องจำเป็นที่ผู้โดยสารทุกคน ______ รับรู้ตำแหน่งทางออกฉุกเฉินก่อนเครื่องขึ้น",
      choices: ["is", "will be", "be", "was"],
      choicesTH: ["เป็น (ปัจจุบัน)", "จะเป็น (อนาคต)", "เป็น (รูป subjunctive ไม่ผัน)", "เป็น (อดีต)"],
      answer: 2,
      explanation: "โครงสร้าง <b>It is essential/important/necessary that + S + (should) + V1</b> ใช้ Subjunctive คือกริยาช่อง 1 ไม่ผัน จึงใช้ <b>be</b> แม้ประธาน every passenger เป็นเอกพจน์"
    },
    {
      id: "ST8-09", type: "sc", tag: "Participle",
      question: "______ that the experiment could not be replicated, the journal decided to withdraw the paper.",
      questionTH: "เพราะ ______ ว่าการทดลองไม่สามารถทำซ้ำให้ได้ผลเดิม วารสารจึงตัดสินใจถอนบทความ",
      choices: ["To conclude", "Concluding", "Concluded", "Conclude"],
      choicesTH: ["เพื่อสรุป", "สรุป (ผู้กระทำ)", "ถูกสรุป (ผู้ถูกกระทำ)", "สรุป (V1)"],
      answer: 1,
      explanation: "วารสาร<b>เป็นผู้สรุป</b> (ผู้กระทำ) จึงใช้ Present Participle <b>Concluding</b> ขึ้นต้น (= Because the journal concluded that...) — ประธานของประโยคหลัก (the journal) เป็นผู้ทำกริยา conclude"
    },
    {
      id: "ST8-10", type: "sc", tag: "Prepositions/Connectors",
      question: "The medicine proved effective; ______, it produced several unpleasant side effects.",
      questionTH: "ยานี้พิสูจน์แล้วว่าได้ผล ______ มันก็ก่อให้เกิดผลข้างเคียงที่ไม่พึงประสงค์หลายอย่าง",
      choices: ["on the other hand", "therefore", "in addition", "likewise"],
      choicesTH: ["ในทางกลับกัน/อีกด้านหนึ่ง", "ดังนั้น", "นอกจากนี้", "เช่นเดียวกัน"],
      answer: 0,
      explanation: "สองส่วนเป็นข้อดี-ข้อเสียที่ขัดแย้งกัน จึงใช้ <b>on the other hand</b> (อีกด้านหนึ่ง/ในทางกลับกัน) — therefore แสดงผล, likewise/in addition เพิ่มข้อมูลทิศทางเดียวกัน"
    },
    {
      id: "ST8-11", type: "sc", tag: "Subject-Verb Agreement",
      question: "Two-thirds of the harvest ______ been lost due to the unexpected frost this season.",
      questionTH: "ผลผลิตสองในสาม ______ สูญเสียไปเนื่องจากน้ำค้างแข็งที่ไม่คาดคิดในฤดูกาลนี้",
      choices: ["are", "has", "have", "were"],
      choicesTH: ["เป็น (พหูพจน์)", "ได้ (เอกพจน์)", "ได้ (พหูพจน์)", "เป็น (พหูพจน์ อดีต)"],
      answer: 1,
      explanation: "เศษส่วน/สัดส่วน (fraction of) ผันกริยาตามคำนามหลัง of — ในที่นี้คือ <b>the harvest</b> (นามนับไม่ได้ เอกพจน์) จึงใช้ <b>has</b> — ถ้าตามด้วยนามพหูพจน์ (two-thirds of the crops) จึงจะใช้ have"
    },
    {
      id: "ST8-12", type: "sc", tag: "Causative",
      question: "The growing scandal eventually ______ the minister to resign from his post.",
      questionTH: "เรื่องอื้อฉาวที่ลุกลามในที่สุดก็ ______ รัฐมนตรีให้ลาออกจากตำแหน่ง",
      choices: ["forced", "made", "let", "had"],
      choicesTH: ["บีบบังคับให้ (force + to V)", "ทำให้ (made + V1 ไม่มี to)", "ปล่อยให้ (let + V1)", "ให้ (have + V1)"],
      answer: 0,
      explanation: "ช่องว่างตามด้วย <b>to resign</b> (to-infinitive) จึงต้องใช้กริยาที่ตามด้วย to V คือ <b>forced</b> (force someone to do) — make/let/have เป็น Causative ที่ตามด้วย V1 (ไม่มี to) จึงใช้กับ 'to resign' ไม่ได้"
    },
    {
      id: "ST8-13", type: "sc", tag: "Conjunctions",
      question: "The startup failed ______ a brilliant idea and a talented team, mainly because of poor financial management.",
      questionTH: "สตาร์ทอัปล้มเหลว ______ จะมีไอเดียที่ยอดเยี่ยมและทีมที่มีความสามารถ สาเหตุหลักมาจากการบริหารการเงินที่ย่ำแย่",
      choices: ["although", "because of", "despite", "unless"],
      choicesTH: ["แม้ว่า (+ ประโยค)", "เพราะ (+ วลีนาม)", "ทั้งที่/แม้จะมี (+ วลีนาม)", "เว้นแต่"],
      answer: 2,
      explanation: "หลังช่องว่างเป็น<b>วลีนาม</b> (a brilliant idea and a talented team) และสื่อความขัดแย้ง (มีของดีแต่ล้มเหลว) จึงใช้ <b>despite</b> — although ตามด้วยประโยค ส่วน because of ให้เหตุผลตามกัน ไม่ใช่ความขัดแย้ง"
    },

    // ===== Error Identification =====
    {
      id: "ST8-14", type: "ei", tag: "Subject-Verb Agreement",
      question: "The impact of social media on teenagers' mental health <u>have</u><sup>(1)</sup> <u>become</u><sup>(2)</sup> a growing <u>concern</u><sup>(3)</sup> among <u>educators</u><sup>(4)</sup>.",
      questionTH: "ผลกระทบของโซเชียลมีเดียต่อสุขภาพจิตของวัยรุ่นได้กลายเป็นความกังวลที่เพิ่มขึ้นในหมู่นักการศึกษา",
      choices: ["have", "become", "concern", "educators"],
      choicesTH: ["ได้ (พหูพจน์ — ผิด ควรเป็น has)", "กลายเป็น", "ความกังวล", "นักการศึกษา"],
      answer: 0,
      explanation: "ประธานคือ <b>The impact</b> (เอกพจน์) ไม่ใช่ teenagers หรือ media ที่อยู่ในวลีคั่น กริยาจึงต้องเป็น <b>has become</b> — ข้อสอบใช้วลียาว ๆ คั่นเพื่อหลอกให้ลืมประธานจริง"
    },
    {
      id: "ST8-15", type: "ei", tag: "Passive Voice",
      question: "The award-winning film <u>was based</u><sup>(1)</sup> on a true story that <u>was happened</u><sup>(2)</sup> <u>during</u><sup>(3)</sup> the civil <u>war</u><sup>(4)</sup>.",
      questionTH: "ภาพยนตร์ที่ได้รับรางวัลสร้างจากเรื่องจริงที่เกิดขึ้นในช่วงสงครามกลางเมือง",
      choices: ["was based", "was happened", "during", "war"],
      choicesTH: ["สร้างจาก (be based on)", "ถูกเกิดขึ้น (ผิด ควรเป็น happened)", "ในช่วง", "สงคราม"],
      answer: 1,
      explanation: "กริยา <b>happen</b> เป็นอกรรมกริยา <b>ไม่มีรูป Passive</b> ต้องใช้ Active เท่านั้น: a story that <b>happened</b> (เกิดขึ้นเอง) ไม่ใช่ was happened — กลุ่มที่ห้ามทำ passive: happen, occur, arise, exist, appear, seem"
    },
    {
      id: "ST8-16", type: "ei", tag: "Word Form",
      question: "Regular exercise can <u>significant</u><sup>(1)</sup> <u>reduce</u><sup>(2)</sup> the risk of heart disease <u>and</u><sup>(3)</sup> improve overall <u>well-being</u><sup>(4)</sup>.",
      questionTH: "การออกกำลังกายสม่ำเสมอสามารถลดความเสี่ยงของโรคหัวใจได้อย่างมีนัยสำคัญและช่วยให้สุขภาวะโดยรวมดีขึ้น",
      choices: ["significant", "reduce", "and", "well-being"],
      choicesTH: ["มีนัยสำคัญ (คุณศัพท์ — ผิด ควรเป็น significantly)", "ลด", "และ", "สุขภาวะ"],
      answer: 0,
      explanation: "คำที่ขยายกริยา reduce ต้องเป็น<b>กริยาวิเศษณ์</b> คือ <b>significantly</b> (can significantly reduce = ลดได้อย่างมีนัยสำคัญ) — significant เป็นคุณศัพท์ใช้ขยายคำนามเท่านั้น"
    },
    {
      id: "ST8-17", type: "ei", tag: "Tense",
      question: "The price of crude oil <u>has fluctuated</u><sup>(1)</sup> wildly <u>since</u><sup>(2)</sup> the conflict <u>has begun</u><sup>(3)</sup> in the <u>region</u><sup>(4)</sup>.",
      questionTH: "ราคาน้ำมันดิบผันผวนอย่างรุนแรงนับตั้งแต่ความขัดแย้งเริ่มต้นขึ้นในภูมิภาค",
      choices: ["has fluctuated", "since", "has begun", "region"],
      choicesTH: ["ได้ผันผวน (ปัจจุบันสมบูรณ์ — ถูก)", "นับตั้งแต่", "ได้เริ่มขึ้น (ผิด ควรเป็น began)", "ภูมิภาค"],
      answer: 2,
      explanation: "หลัง <b>since</b> ที่บอก<b>จุดเริ่มต้น</b>ของเหตุการณ์ ต้องใช้ <b>Past Simple</b> (began) ไม่ใช่ Present Perfect — โครงสร้าง: Present Perfect ในประโยคหลัก (has fluctuated) + since + Past Simple (began)"
    },
    {
      id: "ST8-18", type: "ei", tag: "Gerund/Infinitive",
      question: "The scientists are looking forward <u>to present</u><sup>(1)</sup> their findings <u>at</u><sup>(2)</sup> the international conference <u>next</u><sup>(3)</sup> <u>month</u><sup>(4)</sup>.",
      questionTH: "นักวิทยาศาสตร์ตั้งตารอที่จะนำเสนอผลการค้นพบในการประชุมนานาชาติเดือนหน้า",
      choices: ["to present", "at", "next", "month"],
      choicesTH: ["ที่จะนำเสนอ (to V — ผิด ควรเป็น presenting)", "ที่", "หน้า", "เดือน"],
      answer: 0,
      explanation: "<b>look forward to + V-ing</b> (to เป็นบุพบท) จึงต้องแก้ to present เป็น <b>presenting</b> — เป็นสำนวนที่ to ตามด้วย Gerund เสมอ ห้ามใช้ to-infinitive (look forward to seeing/presenting)"
    },
    {
      id: "ST8-19", type: "ei", tag: "Parallel Structure",
      question: "The job requires <u>analyzing</u><sup>(1)</sup> data, <u>writing</u><sup>(2)</sup> reports, and <u>to present</u><sup>(3)</sup> results <u>to</u><sup>(4)</sup> senior management.",
      questionTH: "งานนี้ต้องวิเคราะห์ข้อมูล เขียนรายงาน และนำเสนอผลลัพธ์ต่อผู้บริหารระดับสูง",
      choices: ["analyzing", "writing", "to present", "to"],
      choicesTH: ["การวิเคราะห์ (V-ing)", "การเขียน (V-ing)", "นำเสนอ (to V — ผิด ควรเป็น presenting)", "ต่อ"],
      answer: 2,
      explanation: "รายการต้องขนานกัน เป็น Gerund ทั้งหมด: <b>analyzing</b>..., <b>writing</b>..., and <b>presenting</b>... — ต้องแก้ to present เป็น presenting ให้ขนานกับสองตัวแรก"
    },
    {
      id: "ST8-20", type: "ei", tag: "Adjective/Adverb",
      question: "The handmade furniture is <u>beautiful</u><sup>(1)</sup> crafted from <u>locally</u><sup>(2)</sup> sourced wood by <u>skilled</u><sup>(3)</sup> village <u>artisans</u><sup>(4)</sup>.",
      questionTH: "เฟอร์นิเจอร์ทำมือถูกประดิษฐ์อย่างสวยงามจากไม้ที่หามาในท้องถิ่นโดยช่างฝีมือชาวบ้านที่เชี่ยวชาญ",
      choices: ["beautiful", "locally", "skilled", "artisans"],
      choicesTH: ["สวยงาม (คุณศัพท์ — ผิด ควรเป็น beautifully)", "ในท้องถิ่น", "เชี่ยวชาญ มีฝีมือ", "ช่างฝีมือ"],
      answer: 0,
      explanation: "คำที่ขยายกริยา crafted ต้องเป็น<b>กริยาวิเศษณ์</b> คือ <b>beautifully</b> (beautifully crafted = ประดิษฐ์อย่างสวยงาม) — beautiful เป็นคุณศัพท์ ขยายกริยาไม่ได้"
    },
    {
      id: "ST8-21", type: "ei", tag: "Pronoun Agreement",
      question: "Each of the new smartphones <u>comes</u><sup>(1)</sup> with <u>their</u><sup>(2)</sup> own protective case <u>and</u><sup>(3)</sup> a one-year <u>warranty</u><sup>(4)</sup>.",
      questionTH: "สมาร์ตโฟนรุ่นใหม่แต่ละเครื่องมาพร้อมเคสกันกระแทกของตัวเองและการรับประกันหนึ่งปี",
      choices: ["comes", "their", "and", "warranty"],
      choicesTH: ["มาพร้อม (เอกพจน์ — ถูก)", "ของพวกมัน (พหูพจน์ — ผิด ควรเป็น its)", "และ", "การรับประกัน"],
      answer: 1,
      explanation: "<b>Each</b> เป็นเอกพจน์ (สังเกตกริยา comes) สรรพนามจึงต้องเป็นเอกพจน์ <b>its</b> own case ไม่ใช่ their — Each/Every + สรรพนามเอกพจน์เสมอ"
    },
    {
      id: "ST8-22", type: "ei", tag: "Determiners",
      question: "<u>Although</u><sup>(1)</sup> the project faced many obstacles, the team made <u>a remarkable</u><sup>(2)</sup> <u>progresses</u><sup>(3)</sup> in just six <u>months</u><sup>(4)</sup>.",
      questionTH: "แม้โครงการจะเผชิญอุปสรรคมากมาย แต่ทีมก็มีความก้าวหน้าอย่างน่าทึ่งในเวลาเพียงหกเดือน",
      choices: ["Although", "a remarkable", "progresses", "months"],
      choicesTH: ["แม้ว่า", "อย่างน่าทึ่ง", "ความก้าวหน้า (นับไม่ได้ — ผิด ห้ามเติม s/a)", "เดือน"],
      answer: 2,
      explanation: "<b>progress</b> เป็นนามนับไม่ได้ <b>ไม่มีรูปพหูพจน์</b> และใช้ a/an ไม่ได้ ต้องแก้เป็น 'remarkable progress' (ตัด a และ s) — กลุ่มนับไม่ได้: progress, advice, news, knowledge, traffic"
    },
    {
      id: "ST8-23", type: "ei", tag: "Comparison",
      question: "The latest model consumes <u>far fewer</u><sup>(1)</sup> electricity <u>than</u><sup>(2)</sup> the <u>previous</u><sup>(3)</sup> one, making it much <u>more economical</u><sup>(4)</sup>.",
      questionTH: "รุ่นล่าสุดใช้ไฟฟ้าน้อยกว่ารุ่นก่อนมาก ทำให้ประหยัดกว่ามาก",
      choices: ["far fewer", "than", "previous", "more economical"],
      choicesTH: ["น้อยกว่ามาก (fewer = นับได้ — ผิด ควรเป็น less)", "กว่า", "ก่อนหน้า", "ประหยัดกว่า"],
      answer: 0,
      explanation: "<b>electricity</b> เป็นนามนับไม่ได้ ต้องใช้ <b>less</b> ไม่ใช่ fewer: far <b>less</b> electricity — จำหลัก: less + นับไม่ได้ (less water/time/electricity) / fewer + นับได้พหูพจน์ (fewer cars/people)"
    },
    {
      id: "ST8-24", type: "ei", tag: "Verb Form",
      question: "The committee recommended that the new policy <u>is</u><sup>(1)</sup> <u>implemented</u><sup>(2)</sup> <u>gradually</u><sup>(3)</sup> <u>over</u><sup>(4)</sup> the next two years.",
      questionTH: "คณะกรรมการแนะนำว่านโยบายใหม่ควรถูกนำมาใช้อย่างค่อยเป็นค่อยไปตลอดสองปีข้างหน้า",
      choices: ["is", "implemented", "gradually", "over"],
      choicesTH: ["เป็น (ผิด ควรเป็น be ในรูป subjunctive)", "ถูกนำมาใช้", "อย่างค่อยเป็นค่อยไป", "ตลอด"],
      answer: 0,
      explanation: "กริยากลุ่มแนะนำ (recommend, suggest, insist) + that ต้องตามด้วย <b>Subjunctive</b> คือกริยาช่อง 1 ไม่ผัน จึงต้องแก้ is เป็น <b>be</b>: that the new policy <b>be</b> implemented — ห้ามผันตามประธาน/กาล"
    },
    {
      id: "ST8-25", type: "ei", tag: "Relative Clauses",
      question: "The hospital has hired more nurses, <u>most of which</u><sup>(1)</sup> <u>are</u><sup>(2)</sup> recent graduates <u>eager</u><sup>(3)</sup> to gain <u>experience</u><sup>(4)</sup>.",
      questionTH: "โรงพยาบาลได้จ้างพยาบาลเพิ่ม ซึ่งส่วนใหญ่เป็นบัณฑิตจบใหม่ที่กระตือรือร้นจะหาประสบการณ์",
      choices: ["most of which", "are", "eager", "experience"],
      choicesTH: ["ซึ่งส่วนใหญ่ (ใช้กับสิ่งของ — ผิด ควรเป็น most of whom)", "เป็น", "กระตือรือร้น", "ประสบการณ์"],
      answer: 0,
      explanation: "nurses เป็น<b>คน</b> ต้องใช้ <b>most of whom</b> (whom สำหรับคน) ไม่ใช่ most of which (ใช้กับสิ่งของ) — โครงสร้าง 'quantifier + of + whom/which' : whom สำหรับคน, which สำหรับสิ่งของ"
    },
  ],
});
