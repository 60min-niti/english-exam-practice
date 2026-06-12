// Reading ชุดที่ 1 — 5 passages × 10 ข้อ = 50 ข้อ
// questionTH = คำแปลไทยของคำถาม, choicesTH = คำแปลไทยของตัวเลือก (บทความคงเป็นภาษาอังกฤษเพื่อฝึกอ่าน)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "reading",
  set: 1,
  passages: [
    {
      title: "Passage 1: The Floating Markets of Thailand",
      text: `Long before paved roads connected the towns of central Thailand, the country's network of rivers and canals served as its main highways. Goods, news, and people all moved by boat. Out of this water-based way of life grew the floating market, a place where farmers paddled small wooden boats laden with fruit, vegetables, and freshly cooked food to trade with one another and with town dwellers gathered along the banks.

For much of the twentieth century, however, the floating markets declined. As the government built more roads and bridges, transporting goods by truck became faster and cheaper than moving them by boat. Many canals were filled in to make way for streets, and a generation of young people left farming for work in the cities. By the 1970s, several historic markets had disappeared entirely, and those that remained struggled to attract enough traders to stay open.

The markets were saved, somewhat unexpectedly, by tourism. Foreign visitors were charmed by the colorful boats and the lively atmosphere, and tour companies began arranging early-morning trips to the surviving markets. Damnoen Saduak, west of Bangkok, became especially famous and now welcomes thousands of visitors a day. Vendors there sell not only food but also souvenirs, hats, and handicrafts aimed squarely at the tourist trade.

This revival has not pleased everyone. Critics argue that the most popular markets have become crowded and artificial, more a performance staged for cameras than a genuine part of local life. In response, some communities have deliberately kept their markets small and have limited the number of tour boats allowed each day. Their aim is to preserve an authentic experience for both visitors and residents — proof, perhaps, that a tradition can adapt to survive without losing its soul entirely.`,
      questions: [
        { id: "RD1-01", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["The rise, decline, and revival of Thailand's floating markets", "How to travel from Bangkok to Damnoen Saduak", "The types of food sold at floating markets", "Why roads are better than canals for transport"],
          choicesTH: ["การกำเนิด เสื่อมถอย และฟื้นคืนของตลาดน้ำไทย", "วิธีเดินทางจากกรุงเทพฯ ไปดำเนินสะดวก", "ประเภทอาหารที่ขายในตลาดน้ำ", "เหตุใดถนนจึงดีกว่าคลองในการขนส่ง"],
          answer: 0,
          explanation: "เนื้อเรื่องไล่ตามลำดับ: กำเนิด → เสื่อมถอย → ฟื้นคืนด้วยการท่องเที่ยว → ข้อถกเถียง ตัวเลือก 1 จึงครอบคลุมภาพรวมทั้งหมด — ตัวเลือกอื่นเป็นเพียงรายละเอียดปลีกย่อยในบางย่อหน้า ไม่ใช่ใจความหลัก"
        },
        { id: "RD1-02", tag: "Detail",
          question: "According to the passage, why did floating markets decline in the twentieth century?",
          questionTH: "ตามบทความ เหตุใดตลาดน้ำจึงเสื่อมถอยในศตวรรษที่ 20?",
          choices: ["Boats became too expensive to build", "Roads made transporting goods by truck faster and cheaper", "The government banned trading on canals", "Farmers could no longer grow enough fruit"],
          choicesTH: ["การต่อเรือมีราคาแพงเกินไป", "ถนนทำให้การขนส่งด้วยรถบรรทุกเร็วและถูกกว่า", "รัฐบาลห้ามค้าขายบนคลอง", "ชาวนาปลูกผลไม้ได้ไม่พออีกต่อไป"],
          answer: 1,
          explanation: "ย่อหน้า 2 ระบุชัด: 'transporting goods by truck became faster and cheaper than moving them by boat' — ตัวเลือกอื่นไม่ได้กล่าวถึงในเนื้อเรื่อง (การห้ามค้าขายหรือปลูกผลไม้ไม่พอ เป็นการเดาเกินข้อมูล)"
        },
        { id: "RD1-03", tag: "Vocabulary in Context",
          question: "The word \"laden\" in paragraph 1 is closest in meaning to",
          questionTH: "คำว่า \"laden\" ในย่อหน้าที่ 1 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["loaded", "empty", "painted", "broken"],
          choicesTH: ["บรรทุกเต็ม", "ว่างเปล่า", "ทาสี", "แตกหัก"],
          answer: 0,
          explanation: "'boats laden with fruit, vegetables...' บริบทคือเรือบรรทุกของเต็มลำ <b>laden = loaded</b> (บรรทุกหนัก) — empty ตรงข้าม ส่วน painted/broken ไม่เข้ากับ 'with fruit'"
        },
        { id: "RD1-04", tag: "Detail",
          question: "What ultimately saved the floating markets from disappearing?",
          questionTH: "ในที่สุดสิ่งใดช่วยให้ตลาดน้ำรอดพ้นจากการสูญหาย?",
          choices: ["Government subsidies to farmers", "The construction of new canals", "Tourism", "A return to boat-based transport"],
          choicesTH: ["เงินอุดหนุนจากรัฐบาลให้ชาวนา", "การสร้างคลองใหม่", "การท่องเที่ยว", "การกลับมาขนส่งทางเรือ"],
          answer: 2,
          explanation: "ย่อหน้า 3 เปิดด้วย 'The markets were saved, somewhat unexpectedly, by tourism.' ตอบ tourism ตรงตัว — ตัวเลือกอื่นไม่ปรากฏในเนื้อเรื่อง"
        },
        { id: "RD1-05", tag: "Inference",
          question: "It can be inferred that Damnoen Saduak market is",
          questionTH: "อนุมานได้ว่าตลาดดำเนินสะดวกเป็นอย่างไร",
          choices: ["the oldest market in Thailand", "no longer in operation", "highly commercialized and tourist-oriented", "closed to foreign visitors"],
          choicesTH: ["ตลาดที่เก่าแก่ที่สุดในไทย", "ไม่เปิดดำเนินการอีกต่อไป", "เน้นการค้าและนักท่องเที่ยวอย่างมาก", "ปิดไม่ให้ชาวต่างชาติเข้า"],
          answer: 2,
          explanation: "ย่อหน้า 3 บอกว่าขายของที่ระลึก หมวก งานฝีมือ 'aimed squarely at the tourist trade' และรับนักท่องเที่ยวหลายพันคนต่อวัน อนุมานได้ว่าเชิงพาณิชย์สูงและเน้นนักท่องเที่ยว — ไม่มีข้อมูลว่าเก่าที่สุด ปิดไปแล้ว หรือห้ามต่างชาติ"
        },
        { id: "RD1-06", tag: "Detail",
          question: "Why are some critics unhappy with the revival of floating markets?",
          questionTH: "เหตุใดนักวิจารณ์บางคนจึงไม่พอใจการฟื้นคืนของตลาดน้ำ?",
          choices: ["The markets have become too expensive for tourists", "The markets feel crowded and artificial", "Local people are not allowed to shop there", "Too few tourists visit them"],
          choicesTH: ["ตลาดแพงเกินไปสำหรับนักท่องเที่ยว", "ตลาดรู้สึกแออัดและไม่เป็นธรรมชาติ", "คนท้องถิ่นไม่ได้รับอนุญาตให้ซื้อของที่นั่น", "มีนักท่องเที่ยวมาน้อยเกินไป"],
          answer: 1,
          explanation: "ย่อหน้า 4: critics argue markets 'have become crowded and artificial, more a performance staged for cameras' — ตอบตรง ส่วน 'too few tourists' (ตัวเลือก 4) ขัดกับเนื้อเรื่องที่บอกว่าคนแน่น"
        },
        { id: "RD1-07", tag: "Vocabulary in Context",
          question: "The word \"authentic\" in the last paragraph is closest in meaning to",
          questionTH: "คำว่า \"authentic\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["expensive", "genuine", "modern", "crowded"],
          choicesTH: ["แพง", "แท้จริง ดั้งเดิม", "ทันสมัย", "แออัด"],
          answer: 1,
          explanation: "'preserve an authentic experience' บริบทขัดกับ 'artificial' (ปลอม) ในย่อหน้าก่อน <b>authentic = genuine</b> (ของแท้ ดั้งเดิม) — modern/expensive/crowded ไม่ใช่ความหมายของคำ"
        },
        { id: "RD1-08", tag: "Detail",
          question: "How have some communities tried to protect the authenticity of their markets?",
          questionTH: "ชุมชนบางแห่งพยายามปกป้องความดั้งเดิมของตลาดอย่างไร?",
          choices: ["By banning all tourists", "By building more roads", "By keeping markets small and limiting tour boats", "By raising the prices of goods"],
          choicesTH: ["ด้วยการห้ามนักท่องเที่ยวทั้งหมด", "ด้วยการสร้างถนนเพิ่ม", "ด้วยการคงตลาดให้เล็กและจำกัดเรือนำเที่ยว", "ด้วยการขึ้นราคาสินค้า"],
          answer: 2,
          explanation: "ย่อหน้าสุดท้าย: 'kept their markets small and have limited the number of tour boats allowed each day' — ไม่ได้ห้ามนักท่องเที่ยวทั้งหมด (จำกัด ไม่ใช่ห้าม) จึงไม่ใช่ตัวเลือก 1"
        },
        { id: "RD1-09", tag: "Inference",
          question: "The author's attitude toward the small, limited markets is best described as",
          questionTH: "ทัศนคติของผู้เขียนต่อตลาดเล็กที่จำกัดจำนวน อธิบายได้ดีที่สุดว่าอย่างไร",
          choices: ["disapproving", "approving", "indifferent", "confused"],
          choicesTH: ["ไม่เห็นด้วย", "เห็นด้วย ชื่นชม", "เฉยเมย", "สับสน"],
          answer: 1,
          explanation: "ประโยคปิด 'proof, perhaps, that a tradition can adapt to survive without losing its soul' มีน้ำเสียงชื่นชม จึงเป็น approving — ผู้เขียนมองว่าวิธีนี้รักษาจิตวิญญาณของประเพณีไว้ได้"
        },
        { id: "RD1-10", tag: "Purpose",
          question: "The phrase \"without losing its soul entirely\" suggests that the tradition has",
          questionTH: "วลี \"without losing its soul entirely\" สื่อว่าประเพณีนี้ได้",
          choices: ["completely disappeared", "remained exactly the same", "changed but kept its essential character", "become purely commercial"],
          choicesTH: ["สูญหายไปอย่างสิ้นเชิง", "คงเดิมเป๊ะทุกอย่าง", "เปลี่ยนแปลงแต่ยังคงแก่นแท้ไว้", "กลายเป็นเชิงพาณิชย์ล้วน"],
          answer: 2,
          explanation: "'adapt to survive without losing its soul' = ปรับตัวเพื่ออยู่รอดแต่ยังคงแก่นแท้ไว้ จึงหมายถึงเปลี่ยนแปลงแต่รักษาลักษณะสำคัญ — ไม่ใช่หายไปหมด (1) คงเดิมเป๊ะ (2) หรือเป็นพาณิชย์ล้วน (4) ซึ่งขัดกับคำว่า 'ไม่สูญเสียจิตวิญญาณ'"
        },
      ]
    },
    {
      title: "Passage 2: The Science of Sleep",
      text: `For centuries, sleep was regarded as a passive state in which the brain simply switched off to rest. Modern research has overturned this view completely. We now know that the sleeping brain is remarkably active, cycling through distinct stages that each serve a different purpose. Far from being wasted time, sleep is one of the most productive periods of the day for the brain.

A typical night's sleep consists of several cycles, each lasting roughly ninety minutes. Within each cycle, the brain moves through light sleep, deep sleep, and a stage known as REM, short for rapid eye movement. During deep sleep, the body repairs tissues and strengthens the immune system. During REM sleep, when most dreaming occurs, the brain consolidates memories and processes emotions, sorting through the experiences of the day and storing the important ones for the long term.

The consequences of insufficient sleep are far more serious than mere tiredness. Studies have linked chronic sleep deprivation to weakened immunity, weight gain, high blood pressure, and an increased risk of heart disease. The effects on the mind are equally troubling: people who sleep too little show poorer concentration, slower reaction times, and greater difficulty controlling their emotions. Some researchers compare the mental impairment caused by a sleepless night to that of mild alcohol intoxication.

Despite this evidence, many people continue to treat sleep as optional, sacrificing it for work or entertainment. Public health experts warn that this attitude is dangerous. They recommend that adults aim for seven to nine hours of sleep each night and that they keep regular sleeping hours, even on weekends. Protecting sleep, they argue, is not a luxury but a basic requirement for a healthy body and a sharp mind.`,
      questions: [
        { id: "RD1-11", tag: "Main Idea",
          question: "What is the main idea of the passage?",
          questionTH: "ใจความหลักของบทความคืออะไร?",
          choices: ["Sleep is a passive state that wastes time", "Sleep is an active, essential process vital to health", "Dreaming is the only useful part of sleep", "Most people sleep too much"],
          choicesTH: ["การนอนเป็นภาวะเฉื่อยที่เสียเวลา", "การนอนเป็นกระบวนการที่ทำงานอยู่และจำเป็นต่อสุขภาพ", "การฝันเป็นส่วนเดียวที่มีประโยชน์ของการนอน", "คนส่วนใหญ่นอนมากเกินไป"],
          answer: 1,
          explanation: "ทั้งบทเน้นว่าการนอนเป็นกระบวนการ active และจำเป็นต่อสุขภาพ ตัวเลือก 2 จึงถูก — ตัวเลือก 1 คือมุมมองเก่าที่บทความ 'หักล้าง' ไปแล้ว"
        },
        { id: "RD1-12", tag: "Detail",
          question: "According to the passage, how long does one sleep cycle typically last?",
          questionTH: "ตามบทความ วงจรการนอนหนึ่งรอบมักกินเวลานานเท่าใด?",
          choices: ["About 30 minutes", "About 60 minutes", "About 90 minutes", "About 120 minutes"],
          choicesTH: ["ประมาณ 30 นาที", "ประมาณ 60 นาที", "ประมาณ 90 นาที", "ประมาณ 120 นาที"],
          answer: 2,
          explanation: "ย่อหน้า 2: 'each lasting roughly ninety minutes' — ตอบตรงตัว 90 นาที"
        },
        { id: "RD1-13", tag: "Detail",
          question: "During which stage does the brain mainly consolidate memories?",
          questionTH: "สมองรวบรวมความจำเป็นหลักในช่วงใด?",
          choices: ["Light sleep", "Deep sleep", "REM sleep", "All stages equally"],
          choicesTH: ["หลับตื้น", "หลับลึก", "ช่วง REM", "ทุกช่วงเท่า ๆ กัน"],
          answer: 2,
          explanation: "ย่อหน้า 2: 'During REM sleep ... the brain consolidates memories and processes emotions' — ส่วน deep sleep ทำหน้าที่ซ่อมแซมเนื้อเยื่อและภูมิคุ้มกัน (คนละหน้าที่กัน)"
        },
        { id: "RD1-14", tag: "Vocabulary in Context",
          question: "The word \"overturned\" in paragraph 1 is closest in meaning to",
          questionTH: "คำว่า \"overturned\" ในย่อหน้าที่ 1 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["confirmed", "reversed", "ignored", "repeated"],
          choicesTH: ["ยืนยัน", "พลิกกลับ ล้มล้าง", "เพิกเฉย", "ทำซ้ำ"],
          answer: 1,
          explanation: "'Modern research has overturned this view completely' บริบทคือผลวิจัยใหม่ลบล้างความเชื่อเก่า <b>overturn = reverse</b> (พลิกกลับ ล้มล้าง) — confirmed (ยืนยัน) ตรงข้าม"
        },
        { id: "RD1-15", tag: "Detail",
          question: "Which of the following is NOT mentioned as a consequence of chronic sleep deprivation?",
          questionTH: "ข้อใด<u>ไม่</u>ได้ถูกกล่าวถึงว่าเป็นผลของการอดนอนเรื้อรัง?",
          choices: ["Weight gain", "High blood pressure", "Improved memory", "Weakened immunity"],
          choicesTH: ["น้ำหนักขึ้น", "ความดันโลหิตสูง", "ความจำดีขึ้น", "ภูมิคุ้มกันอ่อนแอ"],
          answer: 2,
          explanation: "ข้อนี้ถามสิ่งที่ <b>ไม่</b>ได้กล่าวถึง — ย่อหน้า 3 ลิสต์ weight gain, high blood pressure, weakened immunity ไว้เป็นผลเสีย ส่วน 'improved memory' (ความจำดีขึ้น) เป็นผลดี ตรงข้ามกับเนื้อเรื่อง จึงเป็นคำตอบ"
        },
        { id: "RD1-16", tag: "Detail",
          question: "What comparison do some researchers make about a sleepless night?",
          questionTH: "นักวิจัยบางคนเปรียบเทียบการอดนอนหนึ่งคืนกับอะไร?",
          choices: ["It is like mild alcohol intoxication", "It is like a serious illness", "It is like intense exercise", "It is like fasting"],
          choicesTH: ["เหมือนอาการเมาสุราอ่อน ๆ", "เหมือนการป่วยหนัก", "เหมือนการออกกำลังกายอย่างหนัก", "เหมือนการอดอาหาร"],
          answer: 0,
          explanation: "ย่อหน้า 3 ประโยคสุดท้าย: 'compare the mental impairment ... to that of mild alcohol intoxication' — ตอบตรงตัว"
        },
        { id: "RD1-17", tag: "Detail",
          question: "How many hours of sleep do public health experts recommend for adults?",
          questionTH: "ผู้เชี่ยวชาญด้านสาธารณสุขแนะนำให้ผู้ใหญ่นอนกี่ชั่วโมง?",
          choices: ["Five to six hours", "Six to seven hours", "Seven to nine hours", "Nine to ten hours"],
          choicesTH: ["ห้าถึงหกชั่วโมง", "หกถึงเจ็ดชั่วโมง", "เจ็ดถึงเก้าชั่วโมง", "เก้าถึงสิบชั่วโมง"],
          answer: 2,
          explanation: "ย่อหน้า 4: 'adults aim for seven to nine hours of sleep each night' — ตอบตรงตัว"
        },
        { id: "RD1-18", tag: "Vocabulary in Context",
          question: "The word \"sacrificing\" in the last paragraph is closest in meaning to",
          questionTH: "คำว่า \"sacrificing\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["enjoying", "giving up", "increasing", "scheduling"],
          choicesTH: ["เพลิดเพลินกับ", "ยอมสละ", "เพิ่มขึ้น", "จัดตารางเวลา"],
          answer: 1,
          explanation: "'sacrificing it for work or entertainment' = ยอมสละการนอนเพื่องานหรือความบันเทิง <b>sacrifice = give up</b> (ยอมเสียสละ) — increasing ตรงข้าม"
        },
        { id: "RD1-19", tag: "Inference",
          question: "It can be inferred from the passage that the author believes",
          questionTH: "อนุมานจากบทความได้ว่าผู้เขียนเชื่อว่าอย่างไร",
          choices: ["sleep should be sacrificed when necessary", "people generally take sleep seriously enough", "society underestimates the importance of sleep", "sleep research is still unreliable"],
          choicesTH: ["ควรยอมสละการนอนเมื่อจำเป็น", "โดยทั่วไปคนให้ความสำคัญกับการนอนมากพอแล้ว", "สังคมประเมินค่าความสำคัญของการนอนต่ำเกินไป", "งานวิจัยเรื่องการนอนยังเชื่อถือไม่ได้"],
          answer: 2,
          explanation: "ย่อหน้า 4 ชี้ว่าหลายคนมองการนอนเป็น 'optional' ทั้งที่หลักฐานบ่งชัด และเรียกทัศนคตินี้ว่า 'dangerous' อนุมานได้ว่าผู้เขียนเห็นว่าสังคมประเมินค่าการนอนต่ำเกินไป"
        },
        { id: "RD1-20", tag: "Purpose",
          question: "The phrase \"not a luxury but a basic requirement\" emphasizes that sleep is",
          questionTH: "วลี \"not a luxury but a basic requirement\" เน้นย้ำว่าการนอนเป็น",
          choices: ["a reward for hard work", "an unnecessary indulgence", "an essential need", "an expensive habit"],
          choicesTH: ["รางวัลสำหรับการทำงานหนัก", "การปรนเปรอที่ไม่จำเป็น", "ความจำเป็นพื้นฐาน", "นิสัยที่สิ้นเปลือง"],
          answer: 2,
          explanation: "โครงสร้าง 'not a luxury but a basic requirement' เน้นว่าการนอนไม่ใช่ของฟุ่มเฟือยแต่เป็นสิ่งจำเป็นพื้นฐาน <b>essential need</b> — ตัวเลือกอื่นขัดกับคำว่า 'basic requirement'"
        },
      ]
    },
    {
      title: "Passage 3: The Birth of the Public Library",
      text: `Today we take it for granted that anyone can walk into a public library and borrow books at no cost. Yet for most of history, books were rare and expensive, and reading was a privilege reserved for the wealthy and the clergy. The idea that an ordinary citizen had a right to free access to knowledge is surprisingly modern.

The earliest libraries, such as the famous library of Alexandria, were not public in any meaningful sense. They were collections built by rulers and scholars, accessible only to a small elite. Even after the invention of the printing press in the fifteenth century made books far cheaper to produce, most libraries remained private or attached to universities and churches. A workman or a servant had no realistic way to obtain a book.

The modern public library emerged in the nineteenth century, driven by a powerful belief that an educated population was essential to a healthy society. Reformers argued that giving working people access to books would reduce crime, improve public morals, and prepare citizens to participate in democratic life. In Britain and the United States, laws were passed allowing towns to use tax money to build and maintain libraries open to all. Wealthy donors, most famously the industrialist Andrew Carnegie, funded thousands of library buildings around the world.

The principle behind these institutions was revolutionary: knowledge should not be a commodity available only to those who could pay for it, but a public good freely shared. That principle continues to guide libraries today, even as they adapt to a digital age. Modern libraries lend e-books, provide free internet access, and offer space for community events. Their collections and services have changed enormously, but their founding mission — to put knowledge within everyone's reach — remains the same.`,
      questions: [
        { id: "RD1-21", tag: "Main Idea",
          question: "What is the passage mainly concerned with?",
          questionTH: "บทความนี้เกี่ยวข้องกับเรื่องใดเป็นหลัก?",
          choices: ["The life of Andrew Carnegie", "The history and purpose of the public library", "The invention of the printing press", "Why books are expensive"],
          choicesTH: ["ชีวิตของแอนดรูว์ คาร์เนกี", "ประวัติและจุดมุ่งหมายของห้องสมุดสาธารณะ", "การประดิษฐ์แท่นพิมพ์", "เหตุใดหนังสือจึงแพง"],
          answer: 1,
          explanation: "บทความเล่าประวัติและจุดมุ่งหมายของห้องสมุดสาธารณะตั้งแต่อดีตถึงยุคดิจิทัล ตัวเลือก 2 จึงครอบคลุม — Carnegie และแท่นพิมพ์เป็นเพียงรายละเอียดประกอบ"
        },
        { id: "RD1-22", tag: "Detail",
          question: "According to the passage, who could use the earliest libraries like Alexandria?",
          questionTH: "ตามบทความ ใครสามารถใช้ห้องสมุดยุคแรกอย่างอเล็กซานเดรียได้?",
          choices: ["Anyone who wished to", "Only a small elite", "Only children", "Only government officials"],
          choicesTH: ["ใครก็ได้ที่ต้องการ", "เฉพาะชนชั้นสูงกลุ่มเล็ก ๆ", "เฉพาะเด็ก", "เฉพาะเจ้าหน้าที่รัฐ"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'accessible only to a small elite' — ตอบตรงตัว ห้องสมุดยุคแรกไม่ได้เปิดสาธารณะ"
        },
        { id: "RD1-23", tag: "Detail",
          question: "What did the printing press change?",
          questionTH: "แท่นพิมพ์เปลี่ยนแปลงสิ่งใด?",
          choices: ["It made libraries public", "It made books far cheaper to produce", "It ended private libraries", "It created universities"],
          choicesTH: ["ทำให้ห้องสมุดเป็นสาธารณะ", "ทำให้การผลิตหนังสือถูกลงมาก", "ยุติห้องสมุดส่วนตัว", "สร้างมหาวิทยาลัย"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'made books far cheaper to produce' แต่ผู้เขียนย้ำว่าถึงแม้ถูกลง ห้องสมุดส่วนใหญ่ก็ยังเป็นของส่วนตัว — จึงไม่ใช่ตัวเลือก 1"
        },
        { id: "RD1-24", tag: "Detail",
          question: "In which century did the modern public library emerge?",
          questionTH: "ห้องสมุดสาธารณะสมัยใหม่เกิดขึ้นในศตวรรษใด?",
          choices: ["The fifteenth century", "The seventeenth century", "The nineteenth century", "The twentieth century"],
          choicesTH: ["ศตวรรษที่ 15", "ศตวรรษที่ 17", "ศตวรรษที่ 19", "ศตวรรษที่ 20"],
          answer: 2,
          explanation: "ย่อหน้า 3: 'The modern public library emerged in the nineteenth century' — ระวังสับสนกับศตวรรษที่ 15 (แท่นพิมพ์) ในย่อหน้าก่อน"
        },
        { id: "RD1-25", tag: "Detail",
          question: "According to reformers, what was one expected benefit of giving working people access to books?",
          questionTH: "ตามนักปฏิรูป ประโยชน์ที่คาดหวังหนึ่งของการให้คนทำงานเข้าถึงหนังสือคืออะไร?",
          choices: ["Higher book prices", "Reduced crime", "Fewer schools", "Larger private libraries"],
          choicesTH: ["ราคาหนังสือสูงขึ้น", "อาชญากรรมลดลง", "โรงเรียนน้อยลง", "ห้องสมุดส่วนตัวใหญ่ขึ้น"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'would reduce crime, improve public morals, and prepare citizens' — reduce crime คือหนึ่งในประโยชน์ที่นักปฏิรูปคาดหวัง"
        },
        { id: "RD1-26", tag: "Vocabulary in Context",
          question: "The word \"commodity\" in the last paragraph is closest in meaning to",
          questionTH: "คำว่า \"commodity\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["a product to be bought and sold", "a public service", "a rare treasure", "a legal right"],
          choicesTH: ["สินค้าที่ซื้อขายได้", "บริการสาธารณะ", "สมบัติหายาก", "สิทธิตามกฎหมาย"],
          answer: 0,
          explanation: "'knowledge should not be a commodity ... but a public good freely shared' บริบทตรงข้ามกับ 'freely shared' <b>commodity = สินค้าที่ซื้อขายได้</b> — ผู้เขียนสื่อว่าความรู้ไม่ควรเป็นสินค้าที่ต้องจ่ายเงินซื้อ"
        },
        { id: "RD1-27", tag: "Detail",
          question: "Who is mentioned as a famous donor who funded library buildings?",
          questionTH: "ใครถูกกล่าวถึงว่าเป็นผู้บริจาคชื่อดังที่สนับสนุนการสร้างอาคารห้องสมุด?",
          choices: ["A British king", "Andrew Carnegie", "A university professor", "A church leader"],
          choicesTH: ["กษัตริย์อังกฤษ", "แอนดรูว์ คาร์เนกี", "ศาสตราจารย์มหาวิทยาลัย", "ผู้นำศาสนา"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'most famously the industrialist Andrew Carnegie, funded thousands of library buildings' — ตอบตรงตัว"
        },
        { id: "RD1-28", tag: "Inference",
          question: "The word \"revolutionary\" in the last paragraph suggests that the principle was",
          questionTH: "คำว่า \"revolutionary\" ในย่อหน้าสุดท้ายสื่อว่าหลักการนี้เป็นอย่างไร",
          choices: ["violent and destructive", "a dramatic break from the past", "widely accepted from the start", "impossible to achieve"],
          choicesTH: ["รุนแรงและทำลายล้าง", "การเปลี่ยนแปลงครั้งใหญ่จากอดีต", "ได้รับการยอมรับกว้างขวางตั้งแต่แรก", "เป็นไปไม่ได้ที่จะทำสำเร็จ"],
          answer: 1,
          explanation: "บริบทเทียบกับอดีตที่ความรู้สงวนไว้ให้คนรวย แนวคิดที่ว่าความรู้ควรแบ่งปันฟรีจึงเป็นการเปลี่ยนแปลงครั้งใหญ่จากเดิม <b>a dramatic break from the past</b> — revolutionary ในที่นี้ไม่ได้หมายถึงความรุนแรง"
        },
        { id: "RD1-29", tag: "Detail",
          question: "How have modern libraries adapted to the digital age?",
          questionTH: "ห้องสมุดสมัยใหม่ปรับตัวเข้าสู่ยุคดิจิทัลอย่างไร?",
          choices: ["By charging fees for books", "By closing their buildings", "By lending e-books and providing internet access", "By limiting access to scholars"],
          choicesTH: ["ด้วยการเก็บค่าหนังสือ", "ด้วยการปิดอาคาร", "ด้วยการให้ยืม e-book และให้บริการอินเทอร์เน็ต", "ด้วยการจำกัดการเข้าถึงเฉพาะนักวิชาการ"],
          answer: 2,
          explanation: "ย่อหน้าสุดท้าย: 'lend e-books, provide free internet access, and offer space for community events' — ตอบตรงตัว ส่วนตัวเลือกอื่นขัดกับพันธกิจ 'เปิดให้ทุกคนเข้าถึง'"
        },
        { id: "RD1-30", tag: "Inference",
          question: "What does the author imply about libraries' mission over time?",
          questionTH: "ผู้เขียนบอกเป็นนัยอย่างไรเกี่ยวกับพันธกิจของห้องสมุดเมื่อเวลาผ่านไป?",
          choices: ["It has been abandoned", "It has stayed essentially the same", "It changes every year", "It applies only to printed books"],
          choicesTH: ["ถูกละทิ้งไปแล้ว", "ยังคงเหมือนเดิมในแก่นแท้", "เปลี่ยนทุกปี", "ใช้ได้กับหนังสือพิมพ์เท่านั้น"],
          answer: 1,
          explanation: "ประโยคปิด: 'their founding mission — to put knowledge within everyone's reach — remains the same' บริการเปลี่ยนแต่ภารกิจหลักคงเดิม จึงตอบ stayed essentially the same"
        },
      ]
    },
    {
      title: "Passage 4: Why Coral Reefs Matter",
      text: `Coral reefs cover less than one percent of the ocean floor, yet they support roughly a quarter of all marine species. For this reason they are often called the rainforests of the sea. A single reef may shelter thousands of kinds of fish, along with crabs, sea turtles, sponges, and countless other creatures that depend on it for food and protection.

A coral reef is built by tiny animals called polyps, which are related to jellyfish. Each polyp secretes a hard skeleton of calcium carbonate, and over thousands of years the skeletons of countless generations accumulate to form the massive structures we recognize as reefs. Living inside the tissues of the coral are microscopic algae. Through photosynthesis, these algae produce food for the coral and give it its brilliant colors. In return, the coral provides the algae with shelter and nutrients — a partnership from which both organisms benefit.

This delicate partnership is easily disrupted. When water temperatures rise even slightly above normal for an extended period, the stressed coral expels the algae living within it. Without the algae, the coral loses both its color and its main source of food, turning ghostly white in a process known as bleaching. Bleached coral is not yet dead, but if the high temperatures persist, it will starve. Rising ocean temperatures caused by climate change have triggered mass bleaching events across the globe, killing vast stretches of reef.

The loss of coral reefs would be catastrophic, and not only for marine life. Reefs protect coastlines from storms and erosion, absorbing the force of waves before they reach the shore. They support fishing industries that feed millions of people and attract tourists whose spending sustains entire local economies. Scientists are now racing to find ways to help reefs survive, from breeding heat-resistant corals to restoring damaged areas. Whether these efforts can outpace the warming of the oceans remains an open and urgent question.`,
      questions: [
        { id: "RD1-31", tag: "Main Idea",
          question: "What is the main purpose of the passage?",
          questionTH: "จุดประสงค์หลักของบทความคืออะไร?",
          choices: ["To explain how to scuba dive near reefs", "To describe the importance of coral reefs and the threats they face", "To compare reefs with rainforests", "To describe the life cycle of jellyfish"],
          choicesTH: ["เพื่ออธิบายวิธีดำน้ำใกล้แนวปะการัง", "เพื่อบรรยายความสำคัญของแนวปะการังและภัยที่กำลังเผชิญ", "เพื่อเปรียบเทียบแนวปะการังกับป่าฝน", "เพื่อบรรยายวงจรชีวิตของแมงกะพรุน"],
          answer: 1,
          explanation: "บทความอธิบายว่าแนวปะการังสำคัญอย่างไรและกำลังถูกคุกคามอย่างไร ตัวเลือก 2 จึงครอบคลุม — การเทียบกับป่าฝนเป็นเพียงอุปมาประกอบ ไม่ใช่จุดประสงค์หลัก"
        },
        { id: "RD1-32", tag: "Detail",
          question: "Why are coral reefs called \"the rainforests of the sea\"?",
          questionTH: "เหตุใดแนวปะการังจึงถูกเรียกว่า \"ป่าฝนแห่งท้องทะเล\"?",
          choices: ["They are the same color as rainforests", "They support a huge diversity of species", "They produce most of the ocean's oxygen", "They are found near rainforests"],
          choicesTH: ["มีสีเหมือนป่าฝน", "รองรับสิ่งมีชีวิตที่หลากหลายมหาศาล", "ผลิตออกซิเจนส่วนใหญ่ของมหาสมุทร", "พบใกล้ป่าฝน"],
          answer: 1,
          explanation: "ย่อหน้า 1 อธิบายว่าแนวปะการังครอบคลุมพื้นทะเลไม่ถึง 1% แต่รองรับสิ่งมีชีวิตทางทะเลถึง 1 ใน 4 ความหลากหลายสูงนี้คือเหตุผลของฉายา — ไม่เกี่ยวกับสีหรือทำเลที่ตั้ง"
        },
        { id: "RD1-33", tag: "Detail",
          question: "What are coral reefs built by?",
          questionTH: "แนวปะการังถูกสร้างขึ้นโดยสิ่งใด?",
          choices: ["Algae", "Fish", "Tiny animals called polyps", "Sea turtles"],
          choicesTH: ["สาหร่าย", "ปลา", "สัตว์เล็ก ๆ ที่เรียกว่าโพลิป", "เต่าทะเล"],
          answer: 2,
          explanation: "ย่อหน้า 2: 'built by tiny animals called polyps' ซึ่งหลั่งโครงร่างแคลเซียมคาร์บอเนต — algae อาศัยอยู่ในตัวปะการังแต่ไม่ใช่ผู้สร้างแนว"
        },
        { id: "RD1-34", tag: "Detail",
          question: "What do the algae provide to the coral?",
          questionTH: "สาหร่ายให้สิ่งใดแก่ปะการัง?",
          choices: ["A hard skeleton", "Food and color", "Protection from predators", "Cooler water"],
          choicesTH: ["โครงร่างที่แข็ง", "อาหารและสีสัน", "การป้องกันจากผู้ล่า", "น้ำที่เย็นกว่า"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'these algae produce food for the coral and give it its brilliant colors' — โครงร่างแข็งปะการังสร้างเอง ส่วนสาหร่ายให้อาหารและสี"
        },
        { id: "RD1-35", tag: "Vocabulary in Context",
          question: "The word \"expels\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"expels\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["attracts", "drives out", "feeds", "absorbs"],
          choicesTH: ["ดึงดูด", "ขับออก", "ให้อาหาร", "ดูดซับ"],
          answer: 1,
          explanation: "'the stressed coral expels the algae living within it' ทำให้ปะการังขาดสาหร่ายและซีดขาว <b>expel = drive out</b> (ขับออก) — attracts/absorbs ตรงข้าม"
        },
        { id: "RD1-36", tag: "Detail",
          question: "What is coral bleaching?",
          questionTH: "การฟอกขาวของปะการังคืออะไร?",
          choices: ["When coral grows too quickly", "When coral turns white after expelling its algae", "When coral is eaten by fish", "When coral changes location"],
          choicesTH: ["เมื่อปะการังโตเร็วเกินไป", "เมื่อปะการังกลายเป็นสีขาวหลังขับสาหร่ายออก", "เมื่อปะการังถูกปลากิน", "เมื่อปะการังย้ายที่"],
          answer: 1,
          explanation: "ย่อหน้า 3: ปะการังขับสาหร่ายออกแล้วสูญเสียสีและอาหาร 'turning ghostly white in a process known as bleaching' — ตอบตรงตัว"
        },
        { id: "RD1-37", tag: "Inference",
          question: "It can be inferred that bleached coral",
          questionTH: "อนุมานได้ว่าปะการังที่ฟอกขาวแล้วเป็นอย่างไร",
          choices: ["is always already dead", "can recover if temperatures return to normal soon", "will never lose its color", "is more colorful than healthy coral"],
          choicesTH: ["ตายไปแล้วเสมอ", "ฟื้นได้ถ้าอุณหภูมิกลับสู่ปกติเร็วพอ", "จะไม่มีวันสูญเสียสี", "มีสีสันมากกว่าปะการังที่แข็งแรง"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'Bleached coral is not yet dead, but if the high temperatures persist, it will starve' — สื่อว่าหากอุณหภูมิกลับสู่ปกติเร็วพอ ปะการังยังมีโอกาสฟื้น"
        },
        { id: "RD1-38", tag: "Detail",
          question: "According to the passage, how do reefs protect coastlines?",
          questionTH: "ตามบทความ แนวปะการังปกป้องแนวชายฝั่งอย่างไร?",
          choices: ["By raising water temperatures", "By absorbing the force of waves", "By attracting more fish", "By producing calcium"],
          choicesTH: ["ด้วยการเพิ่มอุณหภูมิน้ำ", "ด้วยการดูดซับแรงของคลื่น", "ด้วยการดึงดูดปลามากขึ้น", "ด้วยการผลิตแคลเซียม"],
          answer: 1,
          explanation: "ย่อหน้า 4: 'protect coastlines from storms and erosion, absorbing the force of waves before they reach the shore' — ตอบตรงตัว"
        },
        { id: "RD1-39", tag: "Detail",
          question: "Which is mentioned as an effort by scientists to help reefs survive?",
          questionTH: "ข้อใดถูกกล่าวถึงว่าเป็นความพยายามของนักวิทยาศาสตร์ในการช่วยให้แนวปะการังอยู่รอด?",
          choices: ["Lowering ocean salt levels", "Breeding heat-resistant corals", "Removing all fish from reefs", "Building artificial rainforests"],
          choicesTH: ["ลดระดับความเค็มของมหาสมุทร", "เพาะพันธุ์ปะการังที่ทนความร้อน", "นำปลาทั้งหมดออกจากแนวปะการัง", "สร้างป่าฝนเทียม"],
          answer: 1,
          explanation: "ย่อหน้า 4: 'from breeding heat-resistant corals to restoring damaged areas' — ตอบตรงตัว ตัวเลือกอื่นไม่ปรากฏในเนื้อเรื่อง"
        },
        { id: "RD1-40", tag: "Inference",
          question: "The final sentence suggests that the author is",
          questionTH: "ประโยคสุดท้ายสื่อว่าผู้เขียนรู้สึกอย่างไร",
          choices: ["certain the reefs will be saved", "uncertain whether efforts will succeed in time", "indifferent to the fate of reefs", "convinced the reefs are beyond saving"],
          choicesTH: ["มั่นใจว่าแนวปะการังจะรอด", "ไม่แน่ใจว่าความพยายามจะสำเร็จทันหรือไม่", "เฉยเมยต่อชะตากรรมของแนวปะการัง", "เชื่อว่าแนวปะการังเกินเยียวยาแล้ว"],
          answer: 1,
          explanation: "'Whether these efforts can outpace the warming of the oceans remains an open and urgent question' แสดงความไม่แน่นอนว่าจะทันหรือไม่ — ไม่ใช่ความมั่นใจหรือยอมแพ้ แต่เป็นความกังวลที่ยังไม่มีคำตอบ"
        },
      ]
    },
    {
      title: "Passage 5: The Rise of Remote Work",
      text: `The idea of working from home is not new, but for most of the modern era it remained a rare arrangement, available to a lucky few. The vast majority of employees were expected to commute to a central office five days a week. That expectation changed almost overnight when a global health crisis forced millions of people to work from their homes. What began as an emergency measure quickly revealed possibilities that few employers had seriously considered before.

For many workers, the benefits were immediate and obvious. Without a daily commute, they gained hours of free time and saved money on transport and meals. They could structure their day around personal needs, fitting work around family responsibilities rather than the other way around. Surveys taken during this period found that a majority of remote workers reported higher job satisfaction and said they would prefer to continue working from home at least part of the time.

Employers, too, discovered advantages they had not expected. Companies found that productivity often remained steady or even improved, contradicting long-held fears that workers left unsupervised would slack off. Businesses could also save enormous sums on office space and could recruit talented staff from anywhere in the world, no longer limited to those who lived within commuting distance.

Yet remote work has not been without its costs. Some employees report feeling isolated and disconnected from their colleagues, and the boundary between work and home life can blur until the two become difficult to separate. Younger workers, in particular, may miss out on the informal mentoring and learning that naturally occur in a shared workplace. As a result, many organizations are now adopting a hybrid model, combining days in the office with days at home. The future of work, it seems, will be neither fully remote nor fully office-based, but a flexible blend of the two.`,
      questions: [
        { id: "RD1-41", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["The dangers of working in an office", "The growth of remote work and its advantages and drawbacks", "How to start a business from home", "Why commuting is enjoyable"],
          choicesTH: ["อันตรายของการทำงานในออฟฟิศ", "การเติบโตของการทำงานทางไกล พร้อมข้อดีและข้อเสีย", "วิธีเริ่มธุรกิจจากที่บ้าน", "เหตุใดการเดินทางไปทำงานจึงสนุก"],
          answer: 1,
          explanation: "บทความกล่าวถึงการเติบโตของการทำงานทางไกล ทั้งข้อดี (ต่อลูกจ้างและนายจ้าง) และข้อเสีย ตัวเลือก 2 จึงครอบคลุมที่สุด"
        },
        { id: "RD1-42", tag: "Detail",
          question: "What caused the sudden shift to remote work?",
          questionTH: "อะไรเป็นสาเหตุของการเปลี่ยนไปทำงานทางไกลอย่างกะทันหัน?",
          choices: ["A new technology", "A global health crisis", "A change in tax law", "A shortage of office buildings"],
          choicesTH: ["เทคโนโลยีใหม่", "วิกฤตสุขภาพระดับโลก", "การเปลี่ยนกฎหมายภาษี", "การขาดแคลนอาคารสำนักงาน"],
          answer: 1,
          explanation: "ย่อหน้า 1: 'a global health crisis forced millions of people to work from their homes' — ตอบตรงตัว"
        },
        { id: "RD1-43", tag: "Detail",
          question: "Which benefit for workers is mentioned in the passage?",
          questionTH: "ข้อใดเป็นประโยชน์ต่อคนทำงานที่ถูกกล่าวถึงในบทความ?",
          choices: ["Higher salaries", "More free time without a commute", "Larger offices", "Longer working hours"],
          choicesTH: ["เงินเดือนสูงขึ้น", "มีเวลาว่างมากขึ้นเพราะไม่ต้องเดินทาง", "ออฟฟิศใหญ่ขึ้น", "ชั่วโมงทำงานยาวขึ้น"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'Without a daily commute, they gained hours of free time' — ส่วนเงินเดือนสูงขึ้นไม่ได้กล่าวถึง (พูดถึงแค่ 'ประหยัด' ค่าเดินทาง/อาหาร)"
        },
        { id: "RD1-44", tag: "Vocabulary in Context",
          question: "The phrase \"slack off\" in paragraph 3 is closest in meaning to",
          questionTH: "วลี \"slack off\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["work harder", "become lazy and unproductive", "quit their jobs", "ask for help"],
          choicesTH: ["ทำงานหนักขึ้น", "เกียจคร้านและไม่มีผลงาน", "ลาออกจากงาน", "ขอความช่วยเหลือ"],
          answer: 1,
          explanation: "บริบท 'fears that workers left unsupervised would slack off' ตรงข้ามกับ productivity ที่คงที่หรือดีขึ้น <b>slack off = อู้งาน ขี้เกียจ</b> — เป็นสิ่งที่นายจ้างเคยกลัวแต่ไม่เกิดขึ้นจริง"
        },
        { id: "RD1-45", tag: "Detail",
          question: "What did many employers discover about productivity?",
          questionTH: "นายจ้างหลายคนค้นพบอะไรเกี่ยวกับผลิตภาพ?",
          choices: ["It dropped sharply", "It often stayed steady or improved", "It could not be measured", "It only improved in large companies"],
          choicesTH: ["ลดลงอย่างฮวบฮาบ", "มักคงที่หรือดีขึ้น", "วัดไม่ได้", "ดีขึ้นเฉพาะในบริษัทใหญ่"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'productivity often remained steady or even improved' — ซึ่งขัดกับความกลัวเดิมที่ว่าคนจะอู้งาน"
        },
        { id: "RD1-46", tag: "Detail",
          question: "According to the passage, how could businesses save money through remote work?",
          questionTH: "ตามบทความ ธุรกิจประหยัดเงินผ่านการทำงานทางไกลได้อย่างไร?",
          choices: ["By paying lower wages", "By saving on office space", "By hiring fewer workers", "By reducing product quality"],
          choicesTH: ["ด้วยการจ่ายค่าจ้างต่ำลง", "ด้วยการประหยัดค่าพื้นที่สำนักงาน", "ด้วยการจ้างคนน้อยลง", "ด้วยการลดคุณภาพสินค้า"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'save enormous sums on office space' — และยังจ้างคนเก่งจากที่ไหนก็ได้ ส่วนการลดค่าจ้างหรือจำนวนคนไม่ได้กล่าวถึง"
        },
        { id: "RD1-47", tag: "Detail",
          question: "Which drawback of remote work is mentioned?",
          questionTH: "ข้อเสียใดของการทำงานทางไกลที่ถูกกล่าวถึง?",
          choices: ["Higher transport costs", "Feeling isolated from colleagues", "Smaller homes", "Less free time"],
          choicesTH: ["ค่าเดินทางสูงขึ้น", "รู้สึกโดดเดี่ยวจากเพื่อนร่วมงาน", "บ้านเล็กลง", "เวลาว่างน้อยลง"],
          answer: 1,
          explanation: "ย่อหน้า 4: 'feeling isolated and disconnected from their colleagues' — ตัวเลือกอื่นขัดกับเนื้อเรื่อง (การทำงานทางไกลช่วยลดค่าเดินทางและเพิ่มเวลาว่าง)"
        },
        { id: "RD1-48", tag: "Inference",
          question: "Why might younger workers be especially affected by remote work?",
          questionTH: "เหตุใดคนทำงานรุ่นใหม่อาจได้รับผลกระทบจากการทำงานทางไกลเป็นพิเศษ?",
          choices: ["They dislike technology", "They miss informal mentoring and learning", "They have longer commutes", "They prefer working alone"],
          choicesTH: ["พวกเขาไม่ชอบเทคโนโลยี", "พวกเขาพลาดการสอนงานและเรียนรู้แบบไม่เป็นทางการ", "พวกเขาเดินทางไกลกว่า", "พวกเขาชอบทำงานคนเดียว"],
          answer: 1,
          explanation: "ย่อหน้า 4: 'Younger workers, in particular, may miss out on the informal mentoring and learning that naturally occur in a shared workplace' — ตอบตรงตัว"
        },
        { id: "RD1-49", tag: "Vocabulary in Context",
          question: "The word \"blur\" in paragraph 4 is closest in meaning to",
          questionTH: "คำว่า \"blur\" ในย่อหน้าที่ 4 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["become unclear", "disappear completely", "grow stronger", "stay fixed"],
          choicesTH: ["พร่าเลือน ไม่ชัดเจน", "หายไปอย่างสิ้นเชิง", "แข็งแกร่งขึ้น", "คงที่ไม่เปลี่ยน"],
          answer: 0,
          explanation: "'the boundary between work and home life can blur until the two become difficult to separate' <b>blur = พร่าเลือน ไม่ชัดเจน</b> — เส้นแบ่งงานกับบ้านเลือนจนแยกไม่ออก ไม่ใช่หายไปหมดหรือแข็งแรงขึ้น"
        },
        { id: "RD1-50", tag: "Inference",
          question: "What does the author predict about the future of work?",
          questionTH: "ผู้เขียนคาดการณ์อย่างไรเกี่ยวกับอนาคตของการทำงาน?",
          choices: ["It will be fully remote", "It will return entirely to the office", "It will be a flexible blend of remote and office work", "It will disappear altogether"],
          choicesTH: ["จะเป็นการทำงานทางไกลเต็มรูปแบบ", "จะกลับไปทำงานในออฟฟิศทั้งหมด", "จะเป็นการผสมผสานที่ยืดหยุ่นระหว่างทางไกลและออฟฟิศ", "จะหายไปโดยสิ้นเชิง"],
          answer: 2,
          explanation: "ประโยคปิด: 'neither fully remote nor fully office-based, but a flexible blend of the two' — ตอบ hybrid/ผสมผสานยืดหยุ่นตรงตัว"
        },
      ]
    },
  ],
});
