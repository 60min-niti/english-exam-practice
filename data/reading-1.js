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
      textTH: `นานก่อนที่ถนนลาดยางจะเชื่อมเมืองต่าง ๆ ในภาคกลางของไทย โครงข่ายแม่น้ำลำคลองของประเทศทำหน้าที่เป็นเส้นทางคมนาคมหลัก สินค้า ข่าวสาร และผู้คนล้วนสัญจรทางเรือ จากวิถีชีวิตที่ผูกพันกับสายน้ำนี้เองจึงก่อกำเนิดตลาดน้ำ สถานที่ซึ่งชาวสวนพายเรือไม้ลำเล็กบรรทุกผลไม้ ผัก และอาหารปรุงสุกใหม่ ๆ มาแลกเปลี่ยนซื้อขายกันเองและกับชาวเมืองที่มารวมตัวกันริมฝั่ง

อย่างไรก็ตาม ตลอดช่วงศตวรรษที่ 20 ตลาดน้ำกลับเสื่อมถอยลง เมื่อรัฐบาลสร้างถนนและสะพานมากขึ้น การขนส่งสินค้าด้วยรถบรรทุกก็เร็วและถูกกว่าการขนทางเรือ คลองหลายสายถูกถมเพื่อสร้างถนน และคนหนุ่มสาวรุ่นหนึ่งก็ละทิ้งอาชีพเกษตรไปทำงานในเมือง พอถึงทศวรรษ 1970 ตลาดเก่าแก่หลายแห่งก็หายไปสิ้น ส่วนที่ยังเหลืออยู่ก็ดิ้นรนหาพ่อค้าแม่ค้าให้มากพอจะเปิดต่อไปได้

ตลาดน้ำได้รับการกอบกู้อย่างไม่คาดคิดด้วยการท่องเที่ยว นักท่องเที่ยวต่างชาติหลงใหลในเรือหลากสีและบรรยากาศที่มีชีวิตชีวา บริษัททัวร์จึงเริ่มจัดทริปยามเช้าตรู่ไปยังตลาดที่ยังหลงเหลืออยู่ ตลาดดำเนินสะดวกทางตะวันตกของกรุงเทพฯ โด่งดังเป็นพิเศษ และปัจจุบันต้อนรับนักท่องเที่ยวนับพันคนต่อวัน พ่อค้าแม่ค้าที่นั่นไม่เพียงขายอาหาร แต่ยังขายของที่ระลึก หมวก และงานหัตถกรรมที่มุ่งเจาะตลาดนักท่องเที่ยวโดยตรง

การฟื้นคืนนี้ไม่ได้ทำให้ทุกคนพอใจ นักวิจารณ์แย้งว่าตลาดที่ได้รับความนิยมสูงสุดกลับแออัดและดูปลอม เป็นการแสดงที่จัดฉากเพื่อกล้องถ่ายรูปมากกว่าจะเป็นส่วนหนึ่งที่แท้จริงของชีวิตท้องถิ่น เพื่อตอบโต้สิ่งนี้ บางชุมชนจึงจงใจคงตลาดให้เล็กไว้และจำกัดจำนวนเรือนำเที่ยวที่อนุญาตในแต่ละวัน เป้าหมายของพวกเขาคือรักษาประสบการณ์ดั้งเดิมแท้จริงไว้ทั้งเพื่อนักท่องเที่ยวและคนในพื้นที่ — อาจเป็นข้อพิสูจน์ว่าประเพณีสามารถปรับตัวเพื่อความอยู่รอดได้โดยไม่สูญเสียจิตวิญญาณไปจนหมดสิ้น`,
      questions: [
        { id: "RD1-01", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["Why roads are better than canals for transport", "The types of food sold at floating markets", "How to travel from Bangkok to Damnoen Saduak", "The rise, decline, and revival of Thailand's floating markets"],
          choicesTH: ["เหตุใดถนนจึงดีกว่าคลองในการขนส่ง", "ประเภทอาหารที่ขายในตลาดน้ำ", "วิธีเดินทางจากกรุงเทพฯ ไปดำเนินสะดวก", "การกำเนิด เสื่อมถอย และฟื้นคืนของตลาดน้ำไทย"],
          answer: 3,
          explanation: "เนื้อเรื่องไล่ตามลำดับ: กำเนิด → เสื่อมถอย → ฟื้นคืนด้วยการท่องเที่ยว → ข้อถกเถียง ตัวเลือก 4 จึงครอบคลุมภาพรวมทั้งหมด — ตัวเลือกอื่นเป็นเพียงรายละเอียดปลีกย่อยในบางย่อหน้า ไม่ใช่ใจความหลัก"
        },
        { id: "RD1-02", tag: "Detail",
          question: "According to the passage, why did floating markets decline in the twentieth century?",
          questionTH: "ตามบทความ เหตุใดตลาดน้ำจึงเสื่อมถอยในศตวรรษที่ 20?",
          choices: ["Roads made transporting goods by truck faster and cheaper", "Farmers could no longer grow enough fruit", "The government banned trading on canals", "Boats became too expensive to build"],
          choicesTH: ["ถนนทำให้การขนส่งด้วยรถบรรทุกเร็วและถูกกว่า", "ชาวนาปลูกผลไม้ได้ไม่พออีกต่อไป", "รัฐบาลห้ามค้าขายบนคลอง", "การต่อเรือมีราคาแพงเกินไป"],
          answer: 0,
          explanation: "ย่อหน้า 2 ระบุชัด: 'transporting goods by truck became faster and cheaper than moving them by boat' — ตัวเลือกอื่นไม่ได้กล่าวถึงในเนื้อเรื่อง (การห้ามค้าขายหรือปลูกผลไม้ไม่พอ เป็นการเดาเกินข้อมูล)"
        },
        { id: "RD1-03", tag: "Vocabulary in Context",
          question: "The word \"laden\" in paragraph 1 is closest in meaning to",
          questionTH: "คำว่า \"laden\" ในย่อหน้าที่ 1 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["broken", "loaded", "painted", "empty"],
          choicesTH: ["แตกหัก", "บรรทุกเต็ม", "ทาสี", "ว่างเปล่า"],
          answer: 1,
          explanation: "'boats laden with fruit, vegetables...' บริบทคือเรือบรรทุกของเต็มลำ <b>laden = loaded</b> (บรรทุกหนัก) — empty ตรงข้าม ส่วน painted/broken ไม่เข้ากับ 'with fruit'"
        },
        { id: "RD1-04", tag: "Detail",
          question: "What ultimately saved the floating markets from disappearing?",
          questionTH: "ในที่สุดสิ่งใดช่วยให้ตลาดน้ำรอดพ้นจากการสูญหาย?",
          choices: ["Tourism", "A return to boat-based transport", "Government subsidies to farmers", "The construction of new canals"],
          choicesTH: ["การท่องเที่ยว", "การกลับมาขนส่งทางเรือ", "เงินอุดหนุนจากรัฐบาลให้ชาวนา", "การสร้างคลองใหม่"],
          answer: 0,
          explanation: "ย่อหน้า 3 เปิดด้วย 'The markets were saved, somewhat unexpectedly, by tourism.' ตอบ tourism ตรงตัว — ตัวเลือกอื่นไม่ปรากฏในเนื้อเรื่อง"
        },
        { id: "RD1-05", tag: "Inference",
          question: "It can be inferred that Damnoen Saduak market is",
          questionTH: "อนุมานได้ว่าตลาดดำเนินสะดวกเป็นอย่างไร",
          choices: ["highly commercialized and tourist-oriented", "the oldest market in Thailand", "no longer in operation", "closed to foreign visitors"],
          choicesTH: ["เน้นการค้าและนักท่องเที่ยวอย่างมาก", "ตลาดที่เก่าแก่ที่สุดในไทย", "ไม่เปิดดำเนินการอีกต่อไป", "ปิดไม่ให้ชาวต่างชาติเข้า"],
          answer: 0,
          explanation: "ย่อหน้า 3 บอกว่าขายของที่ระลึก หมวก งานฝีมือ 'aimed squarely at the tourist trade' และรับนักท่องเที่ยวหลายพันคนต่อวัน อนุมานได้ว่าเชิงพาณิชย์สูงและเน้นนักท่องเที่ยว — ไม่มีข้อมูลว่าเก่าที่สุด ปิดไปแล้ว หรือห้ามต่างชาติ"
        },
        { id: "RD1-06", tag: "Detail",
          question: "Why are some critics unhappy with the revival of floating markets?",
          questionTH: "เหตุใดนักวิจารณ์บางคนจึงไม่พอใจการฟื้นคืนของตลาดน้ำ?",
          choices: ["The markets feel crowded and artificial", "Local people are not allowed to shop there", "The markets have become too expensive for tourists", "Too few tourists visit them"],
          choicesTH: ["ตลาดรู้สึกแออัดและไม่เป็นธรรมชาติ", "คนท้องถิ่นไม่ได้รับอนุญาตให้ซื้อของที่นั่น", "ตลาดแพงเกินไปสำหรับนักท่องเที่ยว", "มีนักท่องเที่ยวมาน้อยเกินไป"],
          answer: 0,
          explanation: "ย่อหน้า 4: critics argue markets 'have become crowded and artificial, more a performance staged for cameras' — ตอบตรง ส่วน 'too few tourists' (ตัวเลือก 4) ขัดกับเนื้อเรื่องที่บอกว่าคนแน่น"
        },
        { id: "RD1-07", tag: "Vocabulary in Context",
          question: "The word \"authentic\" in the last paragraph is closest in meaning to",
          questionTH: "คำว่า \"authentic\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["modern", "genuine", "crowded", "expensive"],
          choicesTH: ["ทันสมัย", "แท้จริง ดั้งเดิม", "แออัด", "แพง"],
          answer: 1,
          explanation: "'preserve an authentic experience' บริบทขัดกับ 'artificial' (ปลอม) ในย่อหน้าก่อน <b>authentic = genuine</b> (ของแท้ ดั้งเดิม) — modern/expensive/crowded ไม่ใช่ความหมายของคำ"
        },
        { id: "RD1-08", tag: "Detail",
          question: "How have some communities tried to protect the authenticity of their markets?",
          questionTH: "ชุมชนบางแห่งพยายามปกป้องความดั้งเดิมของตลาดอย่างไร?",
          choices: ["By building more roads", "By raising the prices of goods", "By keeping markets small and limiting tour boats", "By banning all tourists"],
          choicesTH: ["ด้วยการสร้างถนนเพิ่ม", "ด้วยการขึ้นราคาสินค้า", "ด้วยการคงตลาดให้เล็กและจำกัดเรือนำเที่ยว", "ด้วยการห้ามนักท่องเที่ยวทั้งหมด"],
          answer: 2,
          explanation: "ย่อหน้าสุดท้าย: 'kept their markets small and have limited the number of tour boats allowed each day' — ไม่ได้ห้ามนักท่องเที่ยวทั้งหมด (จำกัด ไม่ใช่ห้าม) จึงไม่ใช่ตัวเลือก 4"
        },
        { id: "RD1-09", tag: "Inference",
          question: "The author's attitude toward the small, limited markets is best described as",
          questionTH: "ทัศนคติของผู้เขียนต่อตลาดเล็กที่จำกัดจำนวน อธิบายได้ดีที่สุดว่าอย่างไร",
          choices: ["indifferent", "confused", "approving", "disapproving"],
          choicesTH: ["เฉยเมย", "สับสน", "เห็นด้วย ชื่นชม", "ไม่เห็นด้วย"],
          answer: 2,
          explanation: "ประโยคปิด 'proof, perhaps, that a tradition can adapt to survive without losing its soul' มีน้ำเสียงชื่นชม จึงเป็น approving — ผู้เขียนมองว่าวิธีนี้รักษาจิตวิญญาณของประเพณีไว้ได้"
        },
        { id: "RD1-10", tag: "Purpose",
          question: "The phrase \"without losing its soul entirely\" suggests that the tradition has",
          questionTH: "วลี \"without losing its soul entirely\" สื่อว่าประเพณีนี้ได้",
          choices: ["become purely commercial", "changed but kept its essential character", "remained exactly the same", "completely disappeared"],
          choicesTH: ["กลายเป็นเชิงพาณิชย์ล้วน", "เปลี่ยนแปลงแต่ยังคงแก่นแท้ไว้", "คงเดิมเป๊ะทุกอย่าง", "สูญหายไปอย่างสิ้นเชิง"],
          answer: 1,
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
      textTH: `เป็นเวลาหลายศตวรรษที่การนอนถูกมองว่าเป็นภาวะเฉื่อยที่สมองเพียงปิดตัวลงเพื่อพักผ่อน งานวิจัยสมัยใหม่ได้พลิกความเชื่อนี้ไปโดยสิ้นเชิง ปัจจุบันเรารู้แล้วว่าสมองขณะหลับทำงานอย่างคึกคักน่าทึ่ง โดยหมุนเวียนผ่านระยะต่าง ๆ ที่แตกต่างกัน ซึ่งแต่ละระยะมีหน้าที่ของตัวเอง การนอนไม่ได้เป็นการเสียเวลาเปล่า แต่กลับเป็นหนึ่งในช่วงเวลาที่สมองทำงานได้ผลที่สุดของวัน

การนอนหนึ่งคืนโดยทั่วไปประกอบด้วยวงจรหลายรอบ แต่ละรอบกินเวลาราว 90 นาที ภายในแต่ละวงจร สมองจะเคลื่อนผ่านการหลับตื้น การหลับลึก และระยะที่เรียกว่า REM ซึ่งย่อมาจาก rapid eye movement (การกลอกตาอย่างรวดเร็ว) ระหว่างการหลับลึก ร่างกายจะซ่อมแซมเนื้อเยื่อและเสริมสร้างระบบภูมิคุ้มกัน ส่วนระหว่างการหลับ REM ซึ่งเป็นช่วงที่เกิดความฝันมากที่สุด สมองจะรวบรวมความทรงจำและประมวลผลอารมณ์ คัดกรองประสบการณ์ของวันนั้นและจัดเก็บเรื่องสำคัญไว้ในความจำระยะยาว

ผลกระทบของการนอนไม่เพียงพอนั้นร้ายแรงกว่าแค่ความเหนื่อยล้ามาก งานวิจัยหลายชิ้นเชื่อมโยงการอดนอนเรื้อรังกับภูมิคุ้มกันที่อ่อนแอ น้ำหนักตัวที่เพิ่มขึ้น ความดันโลหิตสูง และความเสี่ยงต่อโรคหัวใจที่มากขึ้น ผลต่อจิตใจก็น่ากังวลไม่แพ้กัน คนที่นอนน้อยเกินไปจะมีสมาธิแย่ลง ปฏิกิริยาตอบสนองช้าลง และควบคุมอารมณ์ได้ยากขึ้น นักวิจัยบางคนเปรียบเทียบความบกพร่องทางจิตใจที่เกิดจากการอดนอนหนึ่งคืนว่าเทียบได้กับอาการเมาสุราอ่อน ๆ

แม้จะมีหลักฐานเช่นนี้ หลายคนก็ยังมองว่าการนอนเป็นเรื่องที่จะมีหรือไม่ก็ได้ ยอมสละมันเพื่องานหรือความบันเทิง ผู้เชี่ยวชาญด้านสาธารณสุขเตือนว่าทัศนคติเช่นนี้เป็นอันตราย พวกเขาแนะนำให้ผู้ใหญ่ตั้งเป้านอนคืนละ 7 ถึง 9 ชั่วโมง และรักษาเวลานอนให้สม่ำเสมอแม้ในวันหยุดสุดสัปดาห์ พวกเขาย้ำว่าการถนอมการนอนไม่ใช่ความฟุ่มเฟือย แต่เป็นความจำเป็นพื้นฐานสำหรับร่างกายที่แข็งแรงและจิตใจที่เฉียบคม`,
      questions: [
        { id: "RD1-11", tag: "Main Idea",
          question: "What is the main idea of the passage?",
          questionTH: "ใจความหลักของบทความคืออะไร?",
          choices: ["Dreaming is the only useful part of sleep", "Sleep is an active, essential process vital to health", "Sleep is a passive state that wastes time", "Most people sleep too much"],
          choicesTH: ["การฝันเป็นส่วนเดียวที่มีประโยชน์ของการนอน", "การนอนเป็นกระบวนการที่ทำงานอยู่และจำเป็นต่อสุขภาพ", "การนอนเป็นภาวะเฉื่อยที่เสียเวลา", "คนส่วนใหญ่นอนมากเกินไป"],
          answer: 1,
          explanation: "ทั้งบทเน้นว่าการนอนเป็นกระบวนการ active และจำเป็นต่อสุขภาพ ตัวเลือก 2 จึงถูก — ตัวเลือก 3 คือมุมมองเก่าที่บทความ 'หักล้าง' ไปแล้ว"
        },
        { id: "RD1-12", tag: "Detail",
          question: "According to the passage, how long does one sleep cycle typically last?",
          questionTH: "ตามบทความ วงจรการนอนหนึ่งรอบมักกินเวลานานเท่าใด?",
          choices: ["About 90 minutes", "About 60 minutes", "About 30 minutes", "About 120 minutes"],
          choicesTH: ["ประมาณ 90 นาที", "ประมาณ 60 นาที", "ประมาณ 30 นาที", "ประมาณ 120 นาที"],
          answer: 0,
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
          choices: ["confirmed", "ignored", "reversed", "repeated"],
          choicesTH: ["ยืนยัน", "เพิกเฉย", "พลิกกลับ ล้มล้าง", "ทำซ้ำ"],
          answer: 2,
          explanation: "'Modern research has overturned this view completely' บริบทคือผลวิจัยใหม่ลบล้างความเชื่อเก่า <b>overturn = reverse</b> (พลิกกลับ ล้มล้าง) — confirmed (ยืนยัน) ตรงข้าม"
        },
        { id: "RD1-15", tag: "Detail",
          question: "Which of the following is NOT mentioned as a consequence of chronic sleep deprivation?",
          questionTH: "ข้อใด<u>ไม่</u>ได้ถูกกล่าวถึงว่าเป็นผลของการอดนอนเรื้อรัง?",
          choices: ["Weight gain", "Improved memory", "Weakened immunity", "High blood pressure"],
          choicesTH: ["น้ำหนักขึ้น", "ความจำดีขึ้น", "ภูมิคุ้มกันอ่อนแอ", "ความดันโลหิตสูง"],
          answer: 1,
          explanation: "ข้อนี้ถามสิ่งที่ <b>ไม่</b>ได้กล่าวถึง — ย่อหน้า 3 ลิสต์ weight gain, high blood pressure, weakened immunity ไว้เป็นผลเสีย ส่วน 'improved memory' (ความจำดีขึ้น) เป็นผลดี ตรงข้ามกับเนื้อเรื่อง จึงเป็นคำตอบ"
        },
        { id: "RD1-16", tag: "Detail",
          question: "What comparison do some researchers make about a sleepless night?",
          questionTH: "นักวิจัยบางคนเปรียบเทียบการอดนอนหนึ่งคืนกับอะไร?",
          choices: ["It is like intense exercise", "It is like mild alcohol intoxication", "It is like a serious illness", "It is like fasting"],
          choicesTH: ["เหมือนการออกกำลังกายอย่างหนัก", "เหมือนอาการเมาสุราอ่อน ๆ", "เหมือนการป่วยหนัก", "เหมือนการอดอาหาร"],
          answer: 1,
          explanation: "ย่อหน้า 3 ประโยคสุดท้าย: 'compare the mental impairment ... to that of mild alcohol intoxication' — ตอบตรงตัว"
        },
        { id: "RD1-17", tag: "Detail",
          question: "How many hours of sleep do public health experts recommend for adults?",
          questionTH: "ผู้เชี่ยวชาญด้านสาธารณสุขแนะนำให้ผู้ใหญ่นอนกี่ชั่วโมง?",
          choices: ["Seven to nine hours", "Six to seven hours", "Five to six hours", "Nine to ten hours"],
          choicesTH: ["เจ็ดถึงเก้าชั่วโมง", "หกถึงเจ็ดชั่วโมง", "ห้าถึงหกชั่วโมง", "เก้าถึงสิบชั่วโมง"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'adults aim for seven to nine hours of sleep each night' — ตอบตรงตัว"
        },
        { id: "RD1-18", tag: "Vocabulary in Context",
          question: "The word \"sacrificing\" in the last paragraph is closest in meaning to",
          questionTH: "คำว่า \"sacrificing\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["increasing", "enjoying", "giving up", "scheduling"],
          choicesTH: ["เพิ่มขึ้น", "เพลิดเพลินกับ", "ยอมสละ", "จัดตารางเวลา"],
          answer: 2,
          explanation: "'sacrificing it for work or entertainment' = ยอมสละการนอนเพื่องานหรือความบันเทิง <b>sacrifice = give up</b> (ยอมเสียสละ) — increasing ตรงข้าม"
        },
        { id: "RD1-19", tag: "Inference",
          question: "It can be inferred from the passage that the author believes",
          questionTH: "อนุมานจากบทความได้ว่าผู้เขียนเชื่อว่าอย่างไร",
          choices: ["sleep research is still unreliable", "sleep should be sacrificed when necessary", "people generally take sleep seriously enough", "society underestimates the importance of sleep"],
          choicesTH: ["งานวิจัยเรื่องการนอนยังเชื่อถือไม่ได้", "ควรยอมสละการนอนเมื่อจำเป็น", "โดยทั่วไปคนให้ความสำคัญกับการนอนมากพอแล้ว", "สังคมประเมินค่าความสำคัญของการนอนต่ำเกินไป"],
          answer: 3,
          explanation: "ย่อหน้า 4 ชี้ว่าหลายคนมองการนอนเป็น 'optional' ทั้งที่หลักฐานบ่งชัด และเรียกทัศนคตินี้ว่า 'dangerous' อนุมานได้ว่าผู้เขียนเห็นว่าสังคมประเมินค่าการนอนต่ำเกินไป"
        },
        { id: "RD1-20", tag: "Purpose",
          question: "The phrase \"not a luxury but a basic requirement\" emphasizes that sleep is",
          questionTH: "วลี \"not a luxury but a basic requirement\" เน้นย้ำว่าการนอนเป็น",
          choices: ["an expensive habit", "a reward for hard work", "an unnecessary indulgence", "an essential need"],
          choicesTH: ["นิสัยที่สิ้นเปลือง", "รางวัลสำหรับการทำงานหนัก", "การปรนเปรอที่ไม่จำเป็น", "ความจำเป็นพื้นฐาน"],
          answer: 3,
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
      textTH: `ทุกวันนี้เรามองว่าเป็นเรื่องธรรมดาที่ใครก็เดินเข้าห้องสมุดสาธารณะแล้วยืมหนังสือได้โดยไม่เสียค่าใช้จ่าย ทว่าตลอดประวัติศาสตร์ส่วนใหญ่ หนังสือเป็นของหายากและราคาแพง การอ่านเป็นอภิสิทธิ์ที่สงวนไว้สำหรับคนร่ำรวยและนักบวช แนวคิดที่ว่าพลเมืองธรรมดามีสิทธิ์เข้าถึงความรู้ได้ฟรีนั้นเป็นเรื่องที่ใหม่อย่างน่าประหลาดใจ

ห้องสมุดยุคแรก ๆ อย่างหอสมุดอเล็กซานเดรียอันโด่งดัง ไม่ได้เป็นสาธารณะในความหมายที่แท้จริงเลย มันเป็นคลังสะสมที่สร้างโดยผู้ปกครองและนักปราชญ์ ซึ่งเข้าถึงได้เฉพาะชนชั้นสูงกลุ่มเล็ก ๆ แม้หลังการประดิษฐ์แท่นพิมพ์ในศตวรรษที่ 15 จะทำให้การผลิตหนังสือถูกลงมาก ห้องสมุดส่วนใหญ่ก็ยังเป็นของส่วนตัวหรือสังกัดมหาวิทยาลัยและโบสถ์ กรรมกรหรือคนรับใช้ไม่มีหนทางตามจริงที่จะหาหนังสือมาครอบครองได้

ห้องสมุดสาธารณะสมัยใหม่ถือกำเนิดขึ้นในศตวรรษที่ 19 ขับเคลื่อนด้วยความเชื่ออันแรงกล้าว่าประชากรที่มีการศึกษาเป็นสิ่งจำเป็นต่อสังคมที่ดี นักปฏิรูปแย้งว่าการให้คนทำงานเข้าถึงหนังสือจะช่วยลดอาชญากรรม ยกระดับศีลธรรมของสาธารณชน และเตรียมพลเมืองให้พร้อมมีส่วนร่วมในชีวิตประชาธิปไตย ในอังกฤษและสหรัฐอเมริกามีการออกกฎหมายให้เมืองต่าง ๆ ใช้เงินภาษีสร้างและดูแลห้องสมุดที่เปิดให้ทุกคน ผู้บริจาคผู้มั่งคั่ง โดยเฉพาะแอนดรูว์ คาร์เนกี นักอุตสาหกรรมผู้โด่งดังที่สุด ได้สนับสนุนทุนสร้างอาคารห้องสมุดหลายพันแห่งทั่วโลก

หลักการเบื้องหลังสถาบันเหล่านี้นับว่าเป็นการปฏิวัติ นั่นคือ ความรู้ไม่ควรเป็นสินค้าที่มีไว้เฉพาะผู้ที่จ่ายเงินได้ แต่ควรเป็นสมบัติสาธารณะที่แบ่งปันกันได้อย่างเสรี หลักการนี้ยังคงเป็นเข็มทิศนำทางห้องสมุดมาจนถึงทุกวันนี้ แม้ในขณะที่ห้องสมุดปรับตัวเข้าสู่ยุคดิจิทัล ห้องสมุดสมัยใหม่ให้ยืมหนังสืออิเล็กทรอนิกส์ ให้บริการอินเทอร์เน็ตฟรี และมีพื้นที่สำหรับกิจกรรมชุมชน คลังหนังสือและบริการของห้องสมุดเปลี่ยนไปอย่างมหาศาล แต่ภารกิจแรกเริ่ม — การนำความรู้มาไว้ในเอื้อมมือของทุกคน — ยังคงเหมือนเดิม`,
      questions: [
        { id: "RD1-21", tag: "Main Idea",
          question: "What is the passage mainly concerned with?",
          questionTH: "บทความนี้เกี่ยวข้องกับเรื่องใดเป็นหลัก?",
          choices: ["The life of Andrew Carnegie", "The invention of the printing press", "The history and purpose of the public library", "Why books are expensive"],
          choicesTH: ["ชีวิตของแอนดรูว์ คาร์เนกี", "การประดิษฐ์แท่นพิมพ์", "ประวัติและจุดมุ่งหมายของห้องสมุดสาธารณะ", "เหตุใดหนังสือจึงแพง"],
          answer: 2,
          explanation: "บทความเล่าประวัติและจุดมุ่งหมายของห้องสมุดสาธารณะตั้งแต่อดีตถึงยุคดิจิทัล ตัวเลือก 3 จึงครอบคลุม — Carnegie และแท่นพิมพ์เป็นเพียงรายละเอียดประกอบ"
        },
        { id: "RD1-22", tag: "Detail",
          question: "According to the passage, who could use the earliest libraries like Alexandria?",
          questionTH: "ตามบทความ ใครสามารถใช้ห้องสมุดยุคแรกอย่างอเล็กซานเดรียได้?",
          choices: ["Only children", "Only government officials", "Anyone who wished to", "Only a small elite"],
          choicesTH: ["เฉพาะเด็ก", "เฉพาะเจ้าหน้าที่รัฐ", "ใครก็ได้ที่ต้องการ", "เฉพาะชนชั้นสูงกลุ่มเล็ก ๆ"],
          answer: 3,
          explanation: "ย่อหน้า 2: 'accessible only to a small elite' — ตอบตรงตัว ห้องสมุดยุคแรกไม่ได้เปิดสาธารณะ"
        },
        { id: "RD1-23", tag: "Detail",
          question: "What did the printing press change?",
          questionTH: "แท่นพิมพ์เปลี่ยนแปลงสิ่งใด?",
          choices: ["It made books far cheaper to produce", "It ended private libraries", "It made libraries public", "It created universities"],
          choicesTH: ["ทำให้การผลิตหนังสือถูกลงมาก", "ยุติห้องสมุดส่วนตัว", "ทำให้ห้องสมุดเป็นสาธารณะ", "สร้างมหาวิทยาลัย"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'made books far cheaper to produce' แต่ผู้เขียนย้ำว่าถึงแม้ถูกลง ห้องสมุดส่วนใหญ่ก็ยังเป็นของส่วนตัว — จึงไม่ใช่ตัวเลือก 3"
        },
        { id: "RD1-24", tag: "Detail",
          question: "In which century did the modern public library emerge?",
          questionTH: "ห้องสมุดสาธารณะสมัยใหม่เกิดขึ้นในศตวรรษใด?",
          choices: ["The seventeenth century", "The twentieth century", "The fifteenth century", "The nineteenth century"],
          choicesTH: ["ศตวรรษที่ 17", "ศตวรรษที่ 20", "ศตวรรษที่ 15", "ศตวรรษที่ 19"],
          answer: 3,
          explanation: "ย่อหน้า 3: 'The modern public library emerged in the nineteenth century' — ระวังสับสนกับศตวรรษที่ 15 (แท่นพิมพ์) ในย่อหน้าก่อน"
        },
        { id: "RD1-25", tag: "Detail",
          question: "According to reformers, what was one expected benefit of giving working people access to books?",
          questionTH: "ตามนักปฏิรูป ประโยชน์ที่คาดหวังหนึ่งของการให้คนทำงานเข้าถึงหนังสือคืออะไร?",
          choices: ["Reduced crime", "Higher book prices", "Larger private libraries", "Fewer schools"],
          choicesTH: ["อาชญากรรมลดลง", "ราคาหนังสือสูงขึ้น", "ห้องสมุดส่วนตัวใหญ่ขึ้น", "โรงเรียนน้อยลง"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'would reduce crime, improve public morals, and prepare citizens' — reduce crime คือหนึ่งในประโยชน์ที่นักปฏิรูปคาดหวัง"
        },
        { id: "RD1-26", tag: "Vocabulary in Context",
          question: "The word \"commodity\" in the last paragraph is closest in meaning to",
          questionTH: "คำว่า \"commodity\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["a product to be bought and sold", "a rare treasure", "a public service", "a legal right"],
          choicesTH: ["สินค้าที่ซื้อขายได้", "สมบัติหายาก", "บริการสาธารณะ", "สิทธิตามกฎหมาย"],
          answer: 0,
          explanation: "'knowledge should not be a commodity ... but a public good freely shared' บริบทตรงข้ามกับ 'freely shared' <b>commodity = สินค้าที่ซื้อขายได้</b> — ผู้เขียนสื่อว่าความรู้ไม่ควรเป็นสินค้าที่ต้องจ่ายเงินซื้อ"
        },
        { id: "RD1-27", tag: "Detail",
          question: "Who is mentioned as a famous donor who funded library buildings?",
          questionTH: "ใครถูกกล่าวถึงว่าเป็นผู้บริจาคชื่อดังที่สนับสนุนการสร้างอาคารห้องสมุด?",
          choices: ["A university professor", "A British king", "A church leader", "Andrew Carnegie"],
          choicesTH: ["ศาสตราจารย์มหาวิทยาลัย", "กษัตริย์อังกฤษ", "ผู้นำศาสนา", "แอนดรูว์ คาร์เนกี"],
          answer: 3,
          explanation: "ย่อหน้า 3: 'most famously the industrialist Andrew Carnegie, funded thousands of library buildings' — ตอบตรงตัว"
        },
        { id: "RD1-28", tag: "Inference",
          question: "The word \"revolutionary\" in the last paragraph suggests that the principle was",
          questionTH: "คำว่า \"revolutionary\" ในย่อหน้าสุดท้ายสื่อว่าหลักการนี้เป็นอย่างไร",
          choices: ["impossible to achieve", "violent and destructive", "a dramatic break from the past", "widely accepted from the start"],
          choicesTH: ["เป็นไปไม่ได้ที่จะทำสำเร็จ", "รุนแรงและทำลายล้าง", "การเปลี่ยนแปลงครั้งใหญ่จากอดีต", "ได้รับการยอมรับกว้างขวางตั้งแต่แรก"],
          answer: 2,
          explanation: "บริบทเทียบกับอดีตที่ความรู้สงวนไว้ให้คนรวย แนวคิดที่ว่าความรู้ควรแบ่งปันฟรีจึงเป็นการเปลี่ยนแปลงครั้งใหญ่จากเดิม <b>a dramatic break from the past</b> — revolutionary ในที่นี้ไม่ได้หมายถึงความรุนแรง"
        },
        { id: "RD1-29", tag: "Detail",
          question: "How have modern libraries adapted to the digital age?",
          questionTH: "ห้องสมุดสมัยใหม่ปรับตัวเข้าสู่ยุคดิจิทัลอย่างไร?",
          choices: ["By lending e-books and providing internet access", "By closing their buildings", "By limiting access to scholars", "By charging fees for books"],
          choicesTH: ["ด้วยการให้ยืม e-book และให้บริการอินเทอร์เน็ต", "ด้วยการปิดอาคาร", "ด้วยการจำกัดการเข้าถึงเฉพาะนักวิชาการ", "ด้วยการเก็บค่าหนังสือ"],
          answer: 0,
          explanation: "ย่อหน้าสุดท้าย: 'lend e-books, provide free internet access, and offer space for community events' — ตอบตรงตัว ส่วนตัวเลือกอื่นขัดกับพันธกิจ 'เปิดให้ทุกคนเข้าถึง'"
        },
        { id: "RD1-30", tag: "Inference",
          question: "What does the author imply about libraries' mission over time?",
          questionTH: "ผู้เขียนบอกเป็นนัยอย่างไรเกี่ยวกับพันธกิจของห้องสมุดเมื่อเวลาผ่านไป?",
          choices: ["It changes every year", "It applies only to printed books", "It has been abandoned", "It has stayed essentially the same"],
          choicesTH: ["เปลี่ยนทุกปี", "ใช้ได้กับหนังสือพิมพ์เท่านั้น", "ถูกละทิ้งไปแล้ว", "ยังคงเหมือนเดิมในแก่นแท้"],
          answer: 3,
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
      textTH: `แนวปะการังครอบคลุมพื้นมหาสมุทรไม่ถึงหนึ่งเปอร์เซ็นต์ ทว่ากลับเป็นที่พักพิงของสิ่งมีชีวิตทางทะเลราวหนึ่งในสี่ของทั้งหมด ด้วยเหตุนี้จึงมักถูกเรียกว่าป่าฝนแห่งท้องทะเล แนวปะการังเพียงแห่งเดียวอาจให้ที่อาศัยแก่ปลานับพันชนิด พร้อมทั้งปู เต่าทะเล ฟองน้ำ และสัตว์อื่น ๆ อีกนับไม่ถ้วนที่พึ่งพามันเพื่อเป็นอาหารและที่กำบัง

แนวปะการังถูกสร้างขึ้นโดยสัตว์ตัวเล็ก ๆ ที่เรียกว่าโพลิป ซึ่งเป็นญาติกับแมงกะพรุน โพลิปแต่ละตัวจะหลั่งโครงร่างแข็งที่ทำจากแคลเซียมคาร์บอเนต และตลอดเวลาหลายพันปี โครงร่างของโพลิปนับไม่ถ้วนหลายชั่วรุ่นก็สะสมกันจนก่อเป็นโครงสร้างขนาดมหึมาที่เรารู้จักกันว่าแนวปะการัง ภายในเนื้อเยื่อของปะการังมีสาหร่ายขนาดเล็กจิ๋วอาศัยอยู่ ด้วยการสังเคราะห์แสง สาหร่ายเหล่านี้ผลิตอาหารให้ปะการังและทำให้มันมีสีสันสดใส เป็นการตอบแทน ปะการังก็ให้ที่กำบังและสารอาหารแก่สาหร่าย — เป็นความสัมพันธ์แบบพึ่งพาที่ทั้งสองฝ่ายได้ประโยชน์

ความสัมพันธ์อันเปราะบางนี้ถูกรบกวนได้ง่าย เมื่ออุณหภูมิน้ำสูงกว่าปกติแม้เพียงเล็กน้อยเป็นเวลานาน ปะการังที่เครียดจะขับสาหร่ายที่อาศัยอยู่ภายในออกไป เมื่อไร้สาหร่าย ปะการังก็สูญเสียทั้งสีสันและแหล่งอาหารหลัก กลายเป็นสีขาวซีดราวกับผี ในกระบวนการที่เรียกว่าการฟอกขาว ปะการังที่ฟอกขาวยังไม่ตายเสียทีเดียว แต่หากอุณหภูมิสูงยังคงอยู่ต่อไป มันก็จะอดตาย อุณหภูมิมหาสมุทรที่สูงขึ้นจากการเปลี่ยนแปลงสภาพภูมิอากาศได้กระตุ้นให้เกิดการฟอกขาวครั้งใหญ่ทั่วโลก คร่าแนวปะการังเป็นบริเวณกว้าง

การสูญเสียแนวปะการังจะเป็นหายนะ และไม่ใช่เฉพาะต่อสิ่งมีชีวิตในทะเลเท่านั้น แนวปะการังปกป้องแนวชายฝั่งจากพายุและการกัดเซาะ โดยดูดซับแรงของคลื่นก่อนที่จะซัดถึงฝั่ง มันเกื้อหนุนอุตสาหกรรมประมงที่หล่อเลี้ยงผู้คนนับล้าน และดึงดูดนักท่องเที่ยวซึ่งการใช้จ่ายของพวกเขาค้ำจุนเศรษฐกิจท้องถิ่นทั้งระบบ ขณะนี้นักวิทยาศาสตร์กำลังเร่งหาวิธีช่วยให้แนวปะการังอยู่รอด ตั้งแต่การเพาะพันธุ์ปะการังที่ทนความร้อนไปจนถึงการฟื้นฟูพื้นที่ที่เสียหาย ส่วนความพยายามเหล่านี้จะแซงหน้าการอุ่นขึ้นของมหาสมุทรได้ทันหรือไม่ ยังคงเป็นคำถามที่เปิดกว้างและเร่งด่วน`,
      questions: [
        { id: "RD1-31", tag: "Main Idea",
          question: "What is the main purpose of the passage?",
          questionTH: "จุดประสงค์หลักของบทความคืออะไร?",
          choices: ["To explain how to scuba dive near reefs", "To describe the life cycle of jellyfish", "To compare reefs with rainforests", "To describe the importance of coral reefs and the threats they face"],
          choicesTH: ["เพื่ออธิบายวิธีดำน้ำใกล้แนวปะการัง", "เพื่อบรรยายวงจรชีวิตของแมงกะพรุน", "เพื่อเปรียบเทียบแนวปะการังกับป่าฝน", "เพื่อบรรยายความสำคัญของแนวปะการังและภัยที่กำลังเผชิญ"],
          answer: 3,
          explanation: "บทความอธิบายว่าแนวปะการังสำคัญอย่างไรและกำลังถูกคุกคามอย่างไร ตัวเลือก 4 จึงครอบคลุม — การเทียบกับป่าฝนเป็นเพียงอุปมาประกอบ ไม่ใช่จุดประสงค์หลัก"
        },
        { id: "RD1-32", tag: "Detail",
          question: "Why are coral reefs called \"the rainforests of the sea\"?",
          questionTH: "เหตุใดแนวปะการังจึงถูกเรียกว่า \"ป่าฝนแห่งท้องทะเล\"?",
          choices: ["They are found near rainforests", "They produce most of the ocean's oxygen", "They are the same color as rainforests", "They support a huge diversity of species"],
          choicesTH: ["พบใกล้ป่าฝน", "ผลิตออกซิเจนส่วนใหญ่ของมหาสมุทร", "มีสีเหมือนป่าฝน", "รองรับสิ่งมีชีวิตที่หลากหลายมหาศาล"],
          answer: 3,
          explanation: "ย่อหน้า 1 อธิบายว่าแนวปะการังครอบคลุมพื้นทะเลไม่ถึง 1% แต่รองรับสิ่งมีชีวิตทางทะเลถึง 1 ใน 4 ความหลากหลายสูงนี้คือเหตุผลของฉายา — ไม่เกี่ยวกับสีหรือทำเลที่ตั้ง"
        },
        { id: "RD1-33", tag: "Detail",
          question: "What are coral reefs built by?",
          questionTH: "แนวปะการังถูกสร้างขึ้นโดยสิ่งใด?",
          choices: ["Sea turtles", "Tiny animals called polyps", "Fish", "Algae"],
          choicesTH: ["เต่าทะเล", "สัตว์เล็ก ๆ ที่เรียกว่าโพลิป", "ปลา", "สาหร่าย"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'built by tiny animals called polyps' ซึ่งหลั่งโครงร่างแคลเซียมคาร์บอเนต — algae อาศัยอยู่ในตัวปะการังแต่ไม่ใช่ผู้สร้างแนว"
        },
        { id: "RD1-34", tag: "Detail",
          question: "What do the algae provide to the coral?",
          questionTH: "สาหร่ายให้สิ่งใดแก่ปะการัง?",
          choices: ["A hard skeleton", "Food and color", "Cooler water", "Protection from predators"],
          choicesTH: ["โครงร่างที่แข็ง", "อาหารและสีสัน", "น้ำที่เย็นกว่า", "การป้องกันจากผู้ล่า"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'these algae produce food for the coral and give it its brilliant colors' — โครงร่างแข็งปะการังสร้างเอง ส่วนสาหร่ายให้อาหารและสี"
        },
        { id: "RD1-35", tag: "Vocabulary in Context",
          question: "The word \"expels\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"expels\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["absorbs", "feeds", "drives out", "attracts"],
          choicesTH: ["ดูดซับ", "ให้อาหาร", "ขับออก", "ดึงดูด"],
          answer: 2,
          explanation: "'the stressed coral expels the algae living within it' ทำให้ปะการังขาดสาหร่ายและซีดขาว <b>expel = drive out</b> (ขับออก) — attracts/absorbs ตรงข้าม"
        },
        { id: "RD1-36", tag: "Detail",
          question: "What is coral bleaching?",
          questionTH: "การฟอกขาวของปะการังคืออะไร?",
          choices: ["When coral is eaten by fish", "When coral turns white after expelling its algae", "When coral changes location", "When coral grows too quickly"],
          choicesTH: ["เมื่อปะการังถูกปลากิน", "เมื่อปะการังกลายเป็นสีขาวหลังขับสาหร่ายออก", "เมื่อปะการังย้ายที่", "เมื่อปะการังโตเร็วเกินไป"],
          answer: 1,
          explanation: "ย่อหน้า 3: ปะการังขับสาหร่ายออกแล้วสูญเสียสีและอาหาร 'turning ghostly white in a process known as bleaching' — ตอบตรงตัว"
        },
        { id: "RD1-37", tag: "Inference",
          question: "It can be inferred that bleached coral",
          questionTH: "อนุมานได้ว่าปะการังที่ฟอกขาวแล้วเป็นอย่างไร",
          choices: ["is always already dead", "is more colorful than healthy coral", "can recover if temperatures return to normal soon", "will never lose its color"],
          choicesTH: ["ตายไปแล้วเสมอ", "มีสีสันมากกว่าปะการังที่แข็งแรง", "ฟื้นได้ถ้าอุณหภูมิกลับสู่ปกติเร็วพอ", "จะไม่มีวันสูญเสียสี"],
          answer: 2,
          explanation: "ย่อหน้า 3: 'Bleached coral is not yet dead, but if the high temperatures persist, it will starve' — สื่อว่าหากอุณหภูมิกลับสู่ปกติเร็วพอ ปะการังยังมีโอกาสฟื้น"
        },
        { id: "RD1-38", tag: "Detail",
          question: "According to the passage, how do reefs protect coastlines?",
          questionTH: "ตามบทความ แนวปะการังปกป้องแนวชายฝั่งอย่างไร?",
          choices: ["By producing calcium", "By attracting more fish", "By absorbing the force of waves", "By raising water temperatures"],
          choicesTH: ["ด้วยการผลิตแคลเซียม", "ด้วยการดึงดูดปลามากขึ้น", "ด้วยการดูดซับแรงของคลื่น", "ด้วยการเพิ่มอุณหภูมิน้ำ"],
          answer: 2,
          explanation: "ย่อหน้า 4: 'protect coastlines from storms and erosion, absorbing the force of waves before they reach the shore' — ตอบตรงตัว"
        },
        { id: "RD1-39", tag: "Detail",
          question: "Which is mentioned as an effort by scientists to help reefs survive?",
          questionTH: "ข้อใดถูกกล่าวถึงว่าเป็นความพยายามของนักวิทยาศาสตร์ในการช่วยให้แนวปะการังอยู่รอด?",
          choices: ["Lowering ocean salt levels", "Breeding heat-resistant corals", "Building artificial rainforests", "Removing all fish from reefs"],
          choicesTH: ["ลดระดับความเค็มของมหาสมุทร", "เพาะพันธุ์ปะการังที่ทนความร้อน", "สร้างป่าฝนเทียม", "นำปลาทั้งหมดออกจากแนวปะการัง"],
          answer: 1,
          explanation: "ย่อหน้า 4: 'from breeding heat-resistant corals to restoring damaged areas' — ตอบตรงตัว ตัวเลือกอื่นไม่ปรากฏในเนื้อเรื่อง"
        },
        { id: "RD1-40", tag: "Inference",
          question: "The final sentence suggests that the author is",
          questionTH: "ประโยคสุดท้ายสื่อว่าผู้เขียนรู้สึกอย่างไร",
          choices: ["certain the reefs will be saved", "uncertain whether efforts will succeed in time", "convinced the reefs are beyond saving", "indifferent to the fate of reefs"],
          choicesTH: ["มั่นใจว่าแนวปะการังจะรอด", "ไม่แน่ใจว่าความพยายามจะสำเร็จทันหรือไม่", "เชื่อว่าแนวปะการังเกินเยียวยาแล้ว", "เฉยเมยต่อชะตากรรมของแนวปะการัง"],
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
      textTH: `แนวคิดเรื่องการทำงานจากบ้านไม่ใช่เรื่องใหม่ แต่ตลอดยุคสมัยใหม่ส่วนใหญ่ มันยังคงเป็นรูปแบบที่หาได้ยาก มีให้เฉพาะคนโชคดีไม่กี่คน ลูกจ้างส่วนใหญ่ถูกคาดหวังให้เดินทางไปทำงานที่สำนักงานกลางห้าวันต่อสัปดาห์ ความคาดหวังนั้นเปลี่ยนไปแทบจะในชั่วข้ามคืนเมื่อวิกฤตสุขภาพระดับโลกบีบให้ผู้คนนับล้านต้องทำงานจากบ้าน สิ่งที่เริ่มต้นในฐานะมาตรการฉุกเฉินกลับเผยให้เห็นความเป็นไปได้ที่นายจ้างน้อยรายเคยพิจารณาอย่างจริงจังมาก่อนอย่างรวดเร็ว

สำหรับคนทำงานจำนวนมาก ประโยชน์นั้นเห็นได้ทันทีและชัดเจน เมื่อไม่ต้องเดินทางไปทำงานทุกวัน พวกเขาก็ได้เวลาว่างเพิ่มขึ้นหลายชั่วโมงและประหยัดเงินค่าเดินทางและค่าอาหาร พวกเขาสามารถจัดตารางวันของตนให้สอดคล้องกับความต้องการส่วนตัว ปรับงานให้เข้ากับภาระครอบครัวแทนที่จะเป็นในทางกลับกัน ผลสำรวจในช่วงนี้พบว่าคนทำงานทางไกลส่วนใหญ่รายงานว่ามีความพึงพอใจในงานสูงขึ้น และบอกว่าอยากทำงานจากบ้านต่อไปอย่างน้อยก็บางส่วน

นายจ้างเองก็ค้นพบข้อดีที่ไม่คาดคิด บริษัทต่าง ๆ พบว่าผลิตภาพมักคงที่หรือกระทั่งดีขึ้น ซึ่งขัดกับความกลัวที่ยึดถือกันมานานว่าลูกจ้างที่ไร้คนคุมจะอู้งาน ธุรกิจยังประหยัดเงินจำนวนมหาศาลค่าพื้นที่สำนักงาน และสามารถสรรหาพนักงานที่มีความสามารถจากที่ใดก็ได้ในโลก ไม่จำกัดอยู่แค่คนที่อาศัยอยู่ในระยะที่เดินทางมาทำงานได้อีกต่อไป

ทว่าการทำงานทางไกลก็ไม่ได้ปราศจากต้นทุน ลูกจ้างบางคนรายงานว่ารู้สึกโดดเดี่ยวและขาดการเชื่อมโยงกับเพื่อนร่วมงาน และเส้นแบ่งระหว่างชีวิตการทำงานกับชีวิตที่บ้านก็พร่าเลือนจนแยกออกจากกันได้ยาก โดยเฉพาะคนทำงานรุ่นใหม่อาจพลาดการสอนงานและการเรียนรู้แบบไม่เป็นทางการที่เกิดขึ้นตามธรรมชาติในที่ทำงานร่วมกัน ผลที่ตามมาคือหลายองค์กรกำลังหันมาใช้รูปแบบผสม (hybrid) ที่รวมวันทำงานในออฟฟิศกับวันทำงานที่บ้านเข้าด้วยกัน ดูเหมือนว่าอนาคตของการทำงานจะไม่ใช่การทำงานทางไกลเต็มรูปแบบหรือการทำงานในออฟฟิศเต็มรูปแบบ แต่เป็นการผสมผสานที่ยืดหยุ่นระหว่างทั้งสองแบบ`,
      questions: [
        { id: "RD1-41", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["The growth of remote work and its advantages and drawbacks", "Why commuting is enjoyable", "How to start a business from home", "The dangers of working in an office"],
          choicesTH: ["การเติบโตของการทำงานทางไกล พร้อมข้อดีและข้อเสีย", "เหตุใดการเดินทางไปทำงานจึงสนุก", "วิธีเริ่มธุรกิจจากที่บ้าน", "อันตรายของการทำงานในออฟฟิศ"],
          answer: 0,
          explanation: "บทความกล่าวถึงการเติบโตของการทำงานทางไกล ทั้งข้อดี (ต่อลูกจ้างและนายจ้าง) และข้อเสีย ตัวเลือก 1 จึงครอบคลุมที่สุด"
        },
        { id: "RD1-42", tag: "Detail",
          question: "What caused the sudden shift to remote work?",
          questionTH: "อะไรเป็นสาเหตุของการเปลี่ยนไปทำงานทางไกลอย่างกะทันหัน?",
          choices: ["A change in tax law", "A global health crisis", "A shortage of office buildings", "A new technology"],
          choicesTH: ["การเปลี่ยนกฎหมายภาษี", "วิกฤตสุขภาพระดับโลก", "การขาดแคลนอาคารสำนักงาน", "เทคโนโลยีใหม่"],
          answer: 1,
          explanation: "ย่อหน้า 1: 'a global health crisis forced millions of people to work from their homes' — ตอบตรงตัว"
        },
        { id: "RD1-43", tag: "Detail",
          question: "Which benefit for workers is mentioned in the passage?",
          questionTH: "ข้อใดเป็นประโยชน์ต่อคนทำงานที่ถูกกล่าวถึงในบทความ?",
          choices: ["Larger offices", "Higher salaries", "Longer working hours", "More free time without a commute"],
          choicesTH: ["ออฟฟิศใหญ่ขึ้น", "เงินเดือนสูงขึ้น", "ชั่วโมงทำงานยาวขึ้น", "มีเวลาว่างมากขึ้นเพราะไม่ต้องเดินทาง"],
          answer: 3,
          explanation: "ย่อหน้า 2: 'Without a daily commute, they gained hours of free time' — ส่วนเงินเดือนสูงขึ้นไม่ได้กล่าวถึง (พูดถึงแค่ 'ประหยัด' ค่าเดินทาง/อาหาร)"
        },
        { id: "RD1-44", tag: "Vocabulary in Context",
          question: "The phrase \"slack off\" in paragraph 3 is closest in meaning to",
          questionTH: "วลี \"slack off\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["quit their jobs", "become lazy and unproductive", "work harder", "ask for help"],
          choicesTH: ["ลาออกจากงาน", "เกียจคร้านและไม่มีผลงาน", "ทำงานหนักขึ้น", "ขอความช่วยเหลือ"],
          answer: 1,
          explanation: "บริบท 'fears that workers left unsupervised would slack off' ตรงข้ามกับ productivity ที่คงที่หรือดีขึ้น <b>slack off = อู้งาน ขี้เกียจ</b> — เป็นสิ่งที่นายจ้างเคยกลัวแต่ไม่เกิดขึ้นจริง"
        },
        { id: "RD1-45", tag: "Detail",
          question: "What did many employers discover about productivity?",
          questionTH: "นายจ้างหลายคนค้นพบอะไรเกี่ยวกับผลิตภาพ?",
          choices: ["It often stayed steady or improved", "It only improved in large companies", "It could not be measured", "It dropped sharply"],
          choicesTH: ["มักคงที่หรือดีขึ้น", "ดีขึ้นเฉพาะในบริษัทใหญ่", "วัดไม่ได้", "ลดลงอย่างฮวบฮาบ"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'productivity often remained steady or even improved' — ซึ่งขัดกับความกลัวเดิมที่ว่าคนจะอู้งาน"
        },
        { id: "RD1-46", tag: "Detail",
          question: "According to the passage, how could businesses save money through remote work?",
          questionTH: "ตามบทความ ธุรกิจประหยัดเงินผ่านการทำงานทางไกลได้อย่างไร?",
          choices: ["By hiring fewer workers", "By paying lower wages", "By saving on office space", "By reducing product quality"],
          choicesTH: ["ด้วยการจ้างคนน้อยลง", "ด้วยการจ่ายค่าจ้างต่ำลง", "ด้วยการประหยัดค่าพื้นที่สำนักงาน", "ด้วยการลดคุณภาพสินค้า"],
          answer: 2,
          explanation: "ย่อหน้า 3: 'save enormous sums on office space' — และยังจ้างคนเก่งจากที่ไหนก็ได้ ส่วนการลดค่าจ้างหรือจำนวนคนไม่ได้กล่าวถึง"
        },
        { id: "RD1-47", tag: "Detail",
          question: "Which drawback of remote work is mentioned?",
          questionTH: "ข้อเสียใดของการทำงานทางไกลที่ถูกกล่าวถึง?",
          choices: ["Feeling isolated from colleagues", "Less free time", "Higher transport costs", "Smaller homes"],
          choicesTH: ["รู้สึกโดดเดี่ยวจากเพื่อนร่วมงาน", "เวลาว่างน้อยลง", "ค่าเดินทางสูงขึ้น", "บ้านเล็กลง"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'feeling isolated and disconnected from their colleagues' — ตัวเลือกอื่นขัดกับเนื้อเรื่อง (การทำงานทางไกลช่วยลดค่าเดินทางและเพิ่มเวลาว่าง)"
        },
        { id: "RD1-48", tag: "Inference",
          question: "Why might younger workers be especially affected by remote work?",
          questionTH: "เหตุใดคนทำงานรุ่นใหม่อาจได้รับผลกระทบจากการทำงานทางไกลเป็นพิเศษ?",
          choices: ["They dislike technology", "They prefer working alone", "They have longer commutes", "They miss informal mentoring and learning"],
          choicesTH: ["พวกเขาไม่ชอบเทคโนโลยี", "พวกเขาชอบทำงานคนเดียว", "พวกเขาเดินทางไกลกว่า", "พวกเขาพลาดการสอนงานและเรียนรู้แบบไม่เป็นทางการ"],
          answer: 3,
          explanation: "ย่อหน้า 4: 'Younger workers, in particular, may miss out on the informal mentoring and learning that naturally occur in a shared workplace' — ตอบตรงตัว"
        },
        { id: "RD1-49", tag: "Vocabulary in Context",
          question: "The word \"blur\" in paragraph 4 is closest in meaning to",
          questionTH: "คำว่า \"blur\" ในย่อหน้าที่ 4 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["stay fixed", "disappear completely", "grow stronger", "become unclear"],
          choicesTH: ["คงที่ไม่เปลี่ยน", "หายไปอย่างสิ้นเชิง", "แข็งแกร่งขึ้น", "พร่าเลือน ไม่ชัดเจน"],
          answer: 3,
          explanation: "'the boundary between work and home life can blur until the two become difficult to separate' <b>blur = พร่าเลือน ไม่ชัดเจน</b> — เส้นแบ่งงานกับบ้านเลือนจนแยกไม่ออก ไม่ใช่หายไปหมดหรือแข็งแรงขึ้น"
        },
        { id: "RD1-50", tag: "Inference",
          question: "What does the author predict about the future of work?",
          questionTH: "ผู้เขียนคาดการณ์อย่างไรเกี่ยวกับอนาคตของการทำงาน?",
          choices: ["It will return entirely to the office", "It will disappear altogether", "It will be a flexible blend of remote and office work", "It will be fully remote"],
          choicesTH: ["จะกลับไปทำงานในออฟฟิศทั้งหมด", "จะหายไปโดยสิ้นเชิง", "จะเป็นการผสมผสานที่ยืดหยุ่นระหว่างทางไกลและออฟฟิศ", "จะเป็นการทำงานทางไกลเต็มรูปแบบ"],
          answer: 2,
          explanation: "ประโยคปิด: 'neither fully remote nor fully office-based, but a flexible blend of the two' — ตอบ hybrid/ผสมผสานยืดหยุ่นตรงตัว"
        },
      ]
    },
  ],
});
