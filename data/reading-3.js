// Reading ชุดที่ 3 — 5 passages × 10 ข้อ = 50 ข้อ (หมวด: วิศวกรรม/การแพทย์/โรคภัย/การเมือง/ข่าว-สังคม)
// questionTH = คำแปลคำถาม, choicesTH = คำแปลตัวเลือก (บทความคงเป็นอังกฤษเพื่อฝึกอ่าน)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "reading",
  set: 3,
  passages: [
    {
      title: "Passage 1: Concrete That Heals Itself",
      text: `Concrete is the most widely used building material on Earth, but it has a serious weakness: it cracks. Tiny cracks form as buildings settle and as temperatures change, and over time water and air seep in, corroding the steel reinforcement hidden inside. The result is crumbling bridges, roads, and buildings that cost billions to repair every year. For decades, engineers simply accepted cracking as an unavoidable part of working with concrete.

A team of researchers has now developed a remarkable alternative: concrete that can repair itself. The secret lies in bacteria. When the concrete is mixed, the engineers add harmless bacteria along with tiny capsules of calcium lactate, a nutrient. The bacteria can remain dormant within the dry concrete for many years. As soon as a crack forms and water enters, however, the bacteria spring to life. Feeding on the calcium lactate, they produce limestone, which gradually fills the crack and seals it shut.

The advantages of this self-healing concrete are considerable. Because cracks are sealed before water can reach the steel inside, the structure lasts far longer, reducing the need for costly inspections and repairs. This is especially valuable for structures that are difficult or dangerous to reach, such as underground tunnels, bridge supports, and offshore platforms. Over the lifetime of a building, the savings can be enormous.

The technology is not yet perfect. Self-healing concrete currently costs about twice as much to produce as ordinary concrete, and the bacteria can only repair cracks up to a certain width. Yet researchers are optimistic. As production scales up, prices are expected to fall, and the long-term savings in maintenance may more than make up for the higher initial cost. If the technology lives up to its promise, the crumbling concrete that surrounds us today may one day be able to take care of itself.`,
      textTH: `คอนกรีตเป็นวัสดุก่อสร้างที่ใช้กันแพร่หลายที่สุดในโลก แต่ก็มีจุดอ่อนร้ายแรงอย่างหนึ่ง นั่นคือมันแตกร้าว รอยร้าวเล็ก ๆ ก่อตัวขึ้นเมื่ออาคารทรุดตัวและเมื่ออุณหภูมิเปลี่ยนแปลง และเมื่อเวลาผ่านไป น้ำและอากาศก็ซึมเข้าไปกัดกร่อนเหล็กเสริมที่ซ่อนอยู่ภายใน ผลที่ตามมาคือสะพาน ถนน และอาคารที่ผุพัง ซึ่งต้องใช้เงินหลายพันล้านในการซ่อมแซมทุกปี เป็นเวลาหลายทศวรรษที่วิศวกรยอมรับการแตกร้าวว่าเป็นส่วนหนึ่งที่หลีกเลี่ยงไม่ได้ของการทำงานกับคอนกรีต

ขณะนี้ทีมนักวิจัยได้พัฒนาทางเลือกอันน่าทึ่งขึ้นมา นั่นคือคอนกรีตที่ซ่อมแซมตัวเองได้ ความลับอยู่ที่แบคทีเรีย เมื่อผสมคอนกรีต วิศวกรจะใส่แบคทีเรียที่ไม่เป็นอันตรายลงไปพร้อมกับแคปซูลเล็ก ๆ ที่บรรจุแคลเซียมแลกเทตซึ่งเป็นสารอาหาร แบคทีเรียสามารถอยู่ในสภาพจำศีลภายในคอนกรีตแห้งได้นานหลายปี ทว่าทันทีที่เกิดรอยร้าวและน้ำซึมเข้าไป แบคทีเรียก็จะตื่นขึ้นมามีชีวิต เมื่อกินแคลเซียมแลกเทตเป็นอาหาร พวกมันก็ผลิตหินปูนซึ่งค่อย ๆ เติมเต็มรอยร้าวและปิดผนึกมันจนสนิท

ข้อดีของคอนกรีตซ่อมตัวเองนี้มีมากทีเดียว เนื่องจากรอยร้าวถูกปิดผนึกก่อนที่น้ำจะเข้าถึงเหล็กข้างใน โครงสร้างจึงมีอายุยืนยาวขึ้นมาก ช่วยลดความจำเป็นในการตรวจสอบและซ่อมแซมที่มีค่าใช้จ่ายสูง สิ่งนี้มีคุณค่าเป็นพิเศษสำหรับโครงสร้างที่เข้าถึงได้ยากหรืออันตราย เช่น อุโมงค์ใต้ดิน ตอม่อสะพาน และแท่นกลางทะเล ตลอดอายุการใช้งานของอาคาร เงินที่ประหยัดได้อาจมหาศาล

เทคโนโลยีนี้ยังไม่สมบูรณ์แบบ ปัจจุบันคอนกรีตซ่อมตัวเองมีต้นทุนการผลิตราวสองเท่าของคอนกรีตธรรมดา และแบคทีเรียก็ซ่อมได้เฉพาะรอยร้าวที่กว้างไม่เกินระดับหนึ่งเท่านั้น กระนั้นนักวิจัยก็ยังมองโลกในแง่ดี เมื่อผลิตในปริมาณมากขึ้น ราคาก็คาดว่าจะลดลง และเงินที่ประหยัดได้ในระยะยาวจากการบำรุงรักษาอาจคุ้มเกินกว่าต้นทุนเริ่มต้นที่สูงกว่า หากเทคโนโลยีนี้ทำได้ตามที่หวัง คอนกรีตที่ผุพังรายล้อมตัวเราอยู่ทุกวันนี้ก็อาจดูแลตัวเองได้ในสักวันหนึ่ง`,
      questions: [
        { id: "RD3-01", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["How bacteria cause diseases in buildings", "Why concrete is the most common building material", "A new type of concrete that can repair its own cracks", "The cost of repairing bridges and roads"],
          choicesTH: ["แบคทีเรียก่อโรคในอาคารอย่างไร", "เหตุใดคอนกรีตจึงเป็นวัสดุก่อสร้างที่พบมากที่สุด", "คอนกรีตชนิดใหม่ที่ซ่อมรอยร้าวของตัวเองได้", "ค่าใช้จ่ายในการซ่อมสะพานและถนน"],
          answer: 2,
          explanation: "ทั้งบทเน้นการพัฒนาคอนกรีตซ่อมตัวเองด้วยแบคทีเรีย ตัวเลือก 3 จึงครอบคลุม — ปัญหารอยร้าวและค่าซ่อมเป็นเพียงบริบทนำ ไม่ใช่ใจความหลัก"
        },
        { id: "RD3-02", tag: "Detail",
          question: "According to the passage, what is the main weakness of ordinary concrete?",
          questionTH: "ตามบทความ จุดอ่อนหลักของคอนกรีตธรรมดาคืออะไร?",
          choices: ["It cracks, allowing water and air to corrode the steel inside", "It is too expensive", "It is too heavy to transport", "It cannot be used in tunnels"],
          choicesTH: ["มันแตกร้าว ทำให้น้ำและอากาศกัดกร่อนเหล็กข้างใน", "มันแพงเกินไป", "มันหนักเกินกว่าจะขนส่ง", "ใช้ในอุโมงค์ไม่ได้"],
          answer: 0,
          explanation: "ย่อหน้า 1: คอนกรีตแตกร้าว แล้ว 'water and air seep in, corroding the steel reinforcement' — ตอบตรงตัว"
        },
        { id: "RD3-03", tag: "Detail",
          question: "What makes the self-healing concrete able to repair itself?",
          questionTH: "อะไรทำให้คอนกรีตซ่อมตัวเองได้?",
          choices: ["Special steel bars", "Bacteria that produce limestone", "Heat from the sun", "A layer of paint"],
          choicesTH: ["เหล็กเส้นพิเศษ", "แบคทีเรียที่ผลิตหินปูน", "ความร้อนจากดวงอาทิตย์", "ชั้นสีทา"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'The secret lies in bacteria' ซึ่งกินแคลเซียมแลกเทตแล้ว 'produce limestone, which gradually fills the crack' — ตอบตรงตัว"
        },
        { id: "RD3-04", tag: "Detail",
          question: "When do the bacteria in the concrete become active?",
          questionTH: "แบคทีเรียในคอนกรีตเริ่มทำงานเมื่อใด?",
          choices: ["When the building is inspected", "When a crack forms and water enters", "When the temperature rises", "When the concrete is first mixed"],
          choicesTH: ["เมื่อมีการตรวจสอบอาคาร", "เมื่อเกิดรอยร้าวและน้ำเข้าไป", "เมื่ออุณหภูมิสูงขึ้น", "เมื่อผสมคอนกรีตครั้งแรก"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'As soon as a crack forms and water enters ... the bacteria spring to life' — ก่อนหน้านั้นแบคทีเรียอยู่ในสภาพ dormant (จำศีล)"
        },
        { id: "RD3-05", tag: "Vocabulary in Context",
          question: "The word \"dormant\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"dormant\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["growing", "inactive", "visible", "dangerous"],
          choicesTH: ["กำลังเติบโต", "ไม่เคลื่อนไหว จำศีล", "มองเห็นได้", "อันตราย"],
          answer: 1,
          explanation: "'The bacteria can remain dormant within the dry concrete for many years' แล้วค่อย 'spring to life' เมื่อมีน้ำ <b>dormant = inactive</b> (สงบนิ่ง ไม่ทำงาน) — ตรงข้ามกับ active"
        },
        { id: "RD3-06", tag: "Detail",
          question: "Why is self-healing concrete especially valuable for tunnels and offshore platforms?",
          questionTH: "เหตุใดคอนกรีตซ่อมตัวเองจึงมีคุณค่าเป็นพิเศษสำหรับอุโมงค์และแท่นกลางทะเล?",
          choices: ["They are built only at night", "They never crack", "They are difficult or dangerous to reach for repairs", "They are made of steel"],
          choicesTH: ["สร้างตอนกลางคืนเท่านั้น", "ไม่เคยแตกร้าว", "เข้าถึงเพื่อซ่อมได้ยากหรืออันตราย", "ทำจากเหล็ก"],
          answer: 2,
          explanation: "ย่อหน้า 3: 'structures that are difficult or dangerous to reach, such as underground tunnels, bridge supports, and offshore platforms' — ซ่อมเองได้จึงคุ้มมาก"
        },
        { id: "RD3-07", tag: "Detail",
          question: "Which is mentioned as a current limitation of self-healing concrete?",
          questionTH: "ข้อใดถูกกล่าวถึงว่าเป็นข้อจำกัดในปัจจุบันของคอนกรีตซ่อมตัวเอง?",
          choices: ["It cracks more easily", "It cannot be used outdoors", "It is unsafe for humans", "It costs about twice as much as ordinary concrete"],
          choicesTH: ["แตกร้าวง่ายกว่า", "ใช้กลางแจ้งไม่ได้", "ไม่ปลอดภัยต่อมนุษย์", "มีต้นทุนราวสองเท่าของคอนกรีตธรรมดา"],
          answer: 3,
          explanation: "ย่อหน้า 4: 'costs about twice as much to produce as ordinary concrete' และซ่อมได้แค่รอยร้าวขนาดจำกัด — ตอบตรงตัว"
        },
        { id: "RD3-08", tag: "Vocabulary in Context",
          question: "The phrase \"make up for\" in the last paragraph is closest in meaning to",
          questionTH: "วลี \"make up for\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["add to", "compensate for", "explain", "hide"],
          choicesTH: ["เพิ่มเข้าไป", "ชดเชย ทดแทน", "อธิบาย", "ซ่อน"],
          answer: 1,
          explanation: "'the long-term savings ... may more than make up for the higher initial cost' = เงินที่ประหยัดระยะยาวชดเชยต้นทุนเริ่มต้นที่สูง <b>make up for = compensate for</b> (ชดเชย)"
        },
        { id: "RD3-09", tag: "Inference",
          question: "What does the author suggest about the future cost of self-healing concrete?",
          questionTH: "ผู้เขียนบอกเป็นนัยอย่างไรเกี่ยวกับต้นทุนของคอนกรีตซ่อมตัวเองในอนาคต?",
          choices: ["It cannot be measured", "It is expected to fall as production scales up", "It will rise sharply", "It will stay exactly the same"],
          choicesTH: ["วัดไม่ได้", "คาดว่าจะลดลงเมื่อผลิตในปริมาณมากขึ้น", "จะพุ่งสูงขึ้น", "จะคงเท่าเดิมเป๊ะ"],
          answer: 1,
          explanation: "ย่อหน้า 4: 'As production scales up, prices are expected to fall' — อนุมานได้ว่าราคาจะถูกลงเมื่อผลิตมากขึ้น"
        },
        { id: "RD3-10", tag: "Inference",
          question: "The author's overall attitude toward the technology is best described as",
          questionTH: "ทัศนคติโดยรวมของผู้เขียนต่อเทคโนโลยีนี้อธิบายได้ดีที่สุดว่าอย่างไร",
          choices: ["doubtful", "cautiously hopeful", "indifferent", "completely negative"],
          choicesTH: ["เคลือบแคลงสงสัย", "มีความหวังอย่างระมัดระวัง", "เฉยเมย", "ลบโดยสิ้นเชิง"],
          answer: 1,
          explanation: "ผู้เขียนยอมรับข้อจำกัด ('not yet perfect') แต่ปิดท้ายเชิงบวก ('researchers are optimistic', 'may one day take care of itself') จึงเป็นความหวังแบบมีเงื่อนไข ไม่ใช่มั่นใจเต็มที่หรือลบ"
        },
      ]
    },
    {
      title: "Passage 2: The Promise of mRNA Vaccines",
      text: `Traditional vaccines have saved countless lives, but most of them work in a similar way: a weakened or inactivated form of a virus is injected into the body, prompting the immune system to learn how to fight it. Producing these vaccines is slow and complex, often requiring the virus to be grown in large quantities. For a brand-new disease, developing a traditional vaccine can take many years — far too long to stop a fast-spreading outbreak.

A newer approach, the mRNA vaccine, works on a completely different principle. Instead of introducing a weakened virus, it delivers a set of genetic instructions, written in a molecule called messenger RNA. These instructions tell the body's own cells to produce a single harmless piece of the virus, usually a protein found on its surface. The immune system detects this protein, recognizes it as foreign, and learns to attack it. If the real virus later enters the body, the immune system is already prepared.

The greatest advantage of mRNA technology is speed. Because the vaccine contains only genetic instructions, scientists do not need to grow the virus itself. Once the genetic code of a new virus is known, an mRNA vaccine can be designed in a matter of days and produced relatively quickly. This flexibility proved crucial during a recent global pandemic, when mRNA vaccines were developed and distributed faster than any vaccines in history.

The technology also holds promise far beyond infectious disease. Researchers are now exploring whether mRNA could be used to treat cancer by training the immune system to recognize and destroy tumor cells. Others hope it might one day help the body produce missing proteins in patients with genetic disorders. Although many challenges remain, mRNA has transformed from an obscure laboratory concept into one of the most promising tools in modern medicine.`,
      textTH: `วัคซีนแบบดั้งเดิมได้ช่วยชีวิตผู้คนนับไม่ถ้วน แต่ส่วนใหญ่ทำงานในลักษณะคล้ายกัน นั่นคือ ไวรัสในรูปที่อ่อนกำลังหรือถูกทำให้ไม่ทำงานจะถูกฉีดเข้าสู่ร่างกาย เพื่อกระตุ้นให้ระบบภูมิคุ้มกันเรียนรู้วิธีต่อสู้กับมัน การผลิตวัคซีนเหล่านี้ช้าและซับซ้อน มักต้องเพาะเลี้ยงไวรัสในปริมาณมาก สำหรับโรคอุบัติใหม่ การพัฒนาวัคซีนแบบดั้งเดิมอาจใช้เวลาหลายปี — นานเกินไปมากที่จะหยุดการระบาดที่แพร่กระจายอย่างรวดเร็ว

แนวทางที่ใหม่กว่าอย่างวัคซีน mRNA ทำงานบนหลักการที่ต่างออกไปโดยสิ้นเชิง แทนที่จะนำไวรัสที่อ่อนกำลังเข้าไป มันกลับส่งชุดคำสั่งทางพันธุกรรมที่เขียนไว้ในโมเลกุลที่เรียกว่า messenger RNA คำสั่งเหล่านี้บอกให้เซลล์ของร่างกายเองผลิตชิ้นส่วนเล็ก ๆ ของไวรัสที่ไม่เป็นอันตราย ซึ่งโดยทั่วไปคือโปรตีนที่อยู่บนผิวของมัน ระบบภูมิคุ้มกันจะตรวจจับโปรตีนนี้ รับรู้ว่าเป็นสิ่งแปลกปลอม และเรียนรู้ที่จะโจมตีมัน หากไวรัสตัวจริงเข้าสู่ร่างกายในภายหลัง ระบบภูมิคุ้มกันก็เตรียมพร้อมไว้แล้ว

ข้อได้เปรียบที่ยิ่งใหญ่ที่สุดของเทคโนโลยี mRNA คือความเร็ว เนื่องจากวัคซีนมีเพียงคำสั่งทางพันธุกรรม นักวิทยาศาสตร์จึงไม่จำเป็นต้องเพาะเลี้ยงตัวไวรัสเอง เมื่อทราบรหัสพันธุกรรมของไวรัสตัวใหม่แล้ว วัคซีน mRNA ก็สามารถออกแบบได้ภายในไม่กี่วันและผลิตได้ค่อนข้างรวดเร็ว ความยืดหยุ่นนี้พิสูจน์แล้วว่าสำคัญยิ่งในช่วงการระบาดใหญ่ทั่วโลกเมื่อไม่นานมานี้ ซึ่งวัคซีน mRNA ถูกพัฒนาและกระจายได้เร็วกว่าวัคซีนใด ๆ ในประวัติศาสตร์

เทคโนโลยีนี้ยังมีความหวังที่ไกลเกินกว่าโรคติดเชื้อ ขณะนี้นักวิจัยกำลังสำรวจว่า mRNA จะสามารถใช้รักษามะเร็งได้หรือไม่ โดยการฝึกให้ระบบภูมิคุ้มกันรู้จักและทำลายเซลล์เนื้องอก บางคนหวังว่าสักวันหนึ่งมันอาจช่วยให้ร่างกายผลิตโปรตีนที่ขาดหายไปในผู้ป่วยที่มีความผิดปกติทางพันธุกรรม แม้จะยังมีความท้าทายอีกมาก แต่ mRNA ก็ได้แปรเปลี่ยนจากแนวคิดในห้องทดลองที่ไม่มีใครรู้จักมาเป็นหนึ่งในเครื่องมือที่มีอนาคตสดใสที่สุดในวงการแพทย์สมัยใหม่`,
      questions: [
        { id: "RD3-11", tag: "Main Idea",
          question: "What is the main purpose of the passage?",
          questionTH: "จุดประสงค์หลักของบทความคืออะไร?",
          choices: ["To criticize traditional vaccines", "To explain how mRNA vaccines work and why they are promising", "To compare different viruses", "To describe the symptoms of a pandemic"],
          choicesTH: ["เพื่อวิจารณ์วัคซีนแบบดั้งเดิม", "เพื่ออธิบายว่าวัคซีน mRNA ทำงานอย่างไรและเหตุใดจึงมีอนาคต", "เพื่อเปรียบเทียบไวรัสต่าง ๆ", "เพื่อบรรยายอาการของการระบาด"],
          answer: 1,
          explanation: "บทความอธิบายหลักการทำงานของวัคซีน mRNA ข้อดี และศักยภาพในอนาคต ตัวเลือก 2 จึงครอบคลุม — ไม่ได้มีเจตนาวิจารณ์วัคซีนเดิม (แค่เปรียบเทียบ)"
        },
        { id: "RD3-12", tag: "Detail",
          question: "How do most traditional vaccines work?",
          questionTH: "วัคซีนแบบดั้งเดิมส่วนใหญ่ทำงานอย่างไร?",
          choices: ["By raising body temperature", "By delivering genetic instructions", "By removing infected cells", "By injecting a weakened or inactivated virus"],
          choicesTH: ["ด้วยการเพิ่มอุณหภูมิร่างกาย", "ด้วยการส่งคำสั่งทางพันธุกรรม", "ด้วยการกำจัดเซลล์ที่ติดเชื้อ", "ด้วยการฉีดไวรัสที่อ่อนกำลังหรือถูกทำให้ไม่ทำงาน"],
          answer: 3,
          explanation: "ย่อหน้า 1: 'a weakened or inactivated form of a virus is injected ... prompting the immune system to learn how to fight it' — ส่วนการส่งคำสั่งพันธุกรรมเป็นของ mRNA"
        },
        { id: "RD3-13", tag: "Detail",
          question: "What do mRNA vaccines deliver into the body?",
          questionTH: "วัคซีน mRNA ส่งอะไรเข้าสู่ร่างกาย?",
          choices: ["Antibiotics", "White blood cells", "Genetic instructions written in messenger RNA", "A weakened virus"],
          choicesTH: ["ยาปฏิชีวนะ", "เม็ดเลือดขาว", "คำสั่งทางพันธุกรรมที่เขียนใน messenger RNA", "ไวรัสที่อ่อนกำลัง"],
          answer: 2,
          explanation: "ย่อหน้า 2: 'it delivers a set of genetic instructions, written in a molecule called messenger RNA' — ตอบตรงตัว"
        },
        { id: "RD3-14", tag: "Detail",
          question: "According to the passage, what do the body's cells produce after receiving the mRNA instructions?",
          questionTH: "ตามบทความ เซลล์ของร่างกายผลิตอะไรหลังได้รับคำสั่ง mRNA?",
          choices: ["A complete virus", "More mRNA", "Red blood cells", "A single harmless piece of the virus"],
          choicesTH: ["ไวรัสที่สมบูรณ์", "mRNA เพิ่มขึ้น", "เม็ดเลือดแดง", "ชิ้นส่วนเล็ก ๆ ของไวรัสที่ไม่เป็นอันตราย"],
          answer: 3,
          explanation: "ย่อหน้า 2: 'tell the body's own cells to produce a single harmless piece of the virus, usually a protein found on its surface' — ตอบตรงตัว"
        },
        { id: "RD3-15", tag: "Detail",
          question: "What is described as the greatest advantage of mRNA technology?",
          questionTH: "อะไรถูกบรรยายว่าเป็นข้อได้เปรียบที่ยิ่งใหญ่ที่สุดของเทคโนโลยี mRNA?",
          choices: ["Its small size", "Its speed", "Its low cost", "Its pleasant taste"],
          choicesTH: ["ขนาดเล็ก", "ความเร็ว", "ต้นทุนต่ำ", "รสชาติที่ดี"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'The greatest advantage of mRNA technology is speed' เพราะไม่ต้องเพาะเลี้ยงไวรัส — ตอบตรงตัว"
        },
        { id: "RD3-16", tag: "Vocabulary in Context",
          question: "The word \"crucial\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"crucial\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["slightly useful", "unnecessary", "expensive", "extremely important"],
          choicesTH: ["มีประโยชน์เล็กน้อย", "ไม่จำเป็น", "แพง", "สำคัญอย่างยิ่ง"],
          answer: 3,
          explanation: "'This flexibility proved crucial during a recent global pandemic' <b>crucial = extremely important</b> (สำคัญยิ่ง ชี้เป็นชี้ตาย) — unnecessary ตรงข้าม"
        },
        { id: "RD3-17", tag: "Detail",
          question: "Why can mRNA vaccines be developed so quickly?",
          questionTH: "เหตุใดวัคซีน mRNA จึงพัฒนาได้รวดเร็วมาก?",
          choices: ["They require no testing", "Scientists do not need to grow the virus itself", "They use the same code for every disease", "They are made by machines only"],
          choicesTH: ["ไม่ต้องทดสอบ", "นักวิทยาศาสตร์ไม่ต้องเพาะเลี้ยงตัวไวรัส", "ใช้รหัสเดียวกับทุกโรค", "ผลิตด้วยเครื่องจักรล้วน"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'Because the vaccine contains only genetic instructions, scientists do not need to grow the virus itself' — จึงออกแบบได้ในไม่กี่วัน"
        },
        { id: "RD3-18", tag: "Detail",
          question: "Which future use of mRNA is mentioned in the passage?",
          questionTH: "การใช้ mRNA ในอนาคตข้อใดถูกกล่าวถึงในบทความ?",
          choices: ["Replacing all surgery", "Producing electricity", "Curing broken bones", "Treating cancer by training the immune system"],
          choicesTH: ["แทนที่การผ่าตัดทั้งหมด", "ผลิตไฟฟ้า", "รักษากระดูกหัก", "รักษามะเร็งด้วยการฝึกระบบภูมิคุ้มกัน"],
          answer: 3,
          explanation: "ย่อหน้า 4: 'whether mRNA could be used to treat cancer by training the immune system to recognize and destroy tumor cells' — ตอบตรงตัว"
        },
        { id: "RD3-19", tag: "Inference",
          question: "It can be inferred that, compared with traditional vaccines, mRNA vaccines are",
          questionTH: "อนุมานได้ว่าเมื่อเทียบกับวัคซีนดั้งเดิม วัคซีน mRNA เป็นอย่างไร",
          choices: ["slower to develop", "more dangerous", "no longer used", "more flexible and faster to design"],
          choicesTH: ["พัฒนาช้ากว่า", "อันตรายกว่า", "เลิกใช้แล้ว", "ยืดหยุ่นกว่าและออกแบบได้เร็วกว่า"],
          answer: 3,
          explanation: "บทเปรียบให้เห็นว่าวัคซีนดั้งเดิมใช้เวลาหลายปี ขณะที่ mRNA ออกแบบได้ในไม่กี่วันและยืดหยุ่นกว่า — อนุมานได้ตามนี้"
        },
        { id: "RD3-20", tag: "Inference",
          question: "What does the phrase \"from an obscure laboratory concept into one of the most promising tools\" suggest?",
          questionTH: "วลี \"from an obscure laboratory concept into one of the most promising tools\" สื่อถึงอะไร",
          choices: ["mRNA is still unknown", "mRNA has failed", "mRNA has been forgotten", "mRNA has gained importance dramatically"],
          choicesTH: ["mRNA ยังไม่เป็นที่รู้จัก", "mRNA ล้มเหลว", "mRNA ถูกลืมไปแล้ว", "mRNA มีความสำคัญเพิ่มขึ้นอย่างมาก"],
          answer: 3,
          explanation: "วลีนี้สื่อการเปลี่ยนจาก 'แนวคิดในแล็บที่ไม่มีใครรู้จัก' มาเป็น 'เครื่องมือที่มีอนาคตที่สุด' = ความสำคัญเพิ่มขึ้นอย่างมาก"
        },
      ]
    },
    {
      title: "Passage 3: The Threat of Antibiotic Resistance",
      text: `The discovery of antibiotics in the twentieth century was one of the greatest achievements in the history of medicine. Diseases that had once killed millions became easily treatable, and routine surgery became far safer. Yet this medical triumph is now under threat. Around the world, bacteria are steadily becoming resistant to the very drugs designed to kill them, and some infections are once again becoming difficult, or even impossible, to treat.

Antibiotic resistance arises through natural selection. Whenever antibiotics are used, most of the targeted bacteria die, but a few with random mutations may survive. These survivors then multiply, passing on their resistance to the next generation. Over time, an entire population of bacteria can become immune to a drug that once destroyed it. The more often antibiotics are used, the faster this process occurs.

A major cause of the problem is the misuse of antibiotics. They are frequently prescribed for illnesses they cannot cure, such as common colds, which are caused by viruses rather than bacteria. Patients often fail to complete the full course of treatment, allowing the strongest bacteria to survive. Perhaps most alarming of all, vast quantities of antibiotics are given to healthy farm animals to promote growth, creating ideal conditions for resistant bacteria to develop and spread.

Tackling the crisis will require action on many fronts. Doctors must prescribe antibiotics more carefully, and patients must use them exactly as directed. Farmers need to reduce their reliance on these drugs, and governments must invest in developing new ones, a costly and difficult task that few pharmaceutical companies are willing to undertake. Experts warn that without urgent and coordinated effort, we may enter a future in which a simple infection could once again become deadly.`,
      textTH: `การค้นพบยาปฏิชีวนะในศตวรรษที่ 20 เป็นหนึ่งในความสำเร็จที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์การแพทย์ โรคที่ครั้งหนึ่งเคยคร่าชีวิตผู้คนนับล้านกลับรักษาได้อย่างง่ายดาย และการผ่าตัดทั่วไปก็ปลอดภัยขึ้นมาก ทว่าชัยชนะทางการแพทย์นี้กำลังตกอยู่ในภาวะคุกคาม ทั่วโลก แบคทีเรียกำลังดื้อต่อยาที่ออกแบบมาเพื่อฆ่ามันมากขึ้นเรื่อย ๆ และการติดเชื้อบางอย่างก็กลับมารักษายากหรือกระทั่งรักษาไม่ได้อีกครั้ง

การดื้อยาปฏิชีวนะเกิดขึ้นผ่านการคัดเลือกโดยธรรมชาติ ทุกครั้งที่ใช้ยาปฏิชีวนะ แบคทีเรียเป้าหมายส่วนใหญ่จะตาย แต่ไม่กี่ตัวที่มีการกลายพันธุ์แบบสุ่มอาจรอดชีวิต ตัวที่รอดเหล่านี้จึงขยายพันธุ์ ส่งต่อความดื้อยาไปยังรุ่นต่อไป เมื่อเวลาผ่านไป แบคทีเรียทั้งประชากรก็สามารถดื้อต่อยาที่ครั้งหนึ่งเคยฆ่ามันได้ ยิ่งใช้ยาปฏิชีวนะบ่อยเท่าใด กระบวนการนี้ก็ยิ่งเกิดเร็วขึ้นเท่านั้น

สาเหตุสำคัญของปัญหาคือการใช้ยาปฏิชีวนะอย่างผิด ๆ มันมักถูกสั่งจ่ายสำหรับโรคที่มันรักษาไม่ได้ เช่น โรคหวัดธรรมดา ซึ่งเกิดจากไวรัสไม่ใช่แบคทีเรีย ผู้ป่วยมักกินยาไม่ครบคอร์ส ทำให้แบคทีเรียที่แข็งแกร่งที่สุดรอดชีวิต และที่อาจน่าตกใจที่สุดคือ มีการให้ยาปฏิชีวนะในปริมาณมหาศาลแก่สัตว์ในฟาร์มที่แข็งแรงเพื่อเร่งการเจริญเติบโต ซึ่งสร้างสภาวะที่เหมาะอย่างยิ่งให้เชื้อดื้อยาพัฒนาขึ้นและแพร่กระจาย

การรับมือกับวิกฤตนี้ต้องอาศัยการลงมือในหลายด้าน แพทย์ต้องสั่งจ่ายยาปฏิชีวนะอย่างระมัดระวังมากขึ้น และผู้ป่วยต้องใช้ยาตามคำสั่งอย่างเคร่งครัด เกษตรกรต้องลดการพึ่งพายาเหล่านี้ และรัฐบาลต้องลงทุนพัฒนายาตัวใหม่ ซึ่งเป็นภารกิจที่มีค่าใช้จ่ายสูงและยากจนบริษัทยาน้อยรายเต็มใจจะทำ ผู้เชี่ยวชาญเตือนว่าหากปราศจากความพยายามอย่างเร่งด่วนและประสานกัน เราอาจก้าวเข้าสู่อนาคตที่การติดเชื้อธรรมดา ๆ กลับมาคร่าชีวิตได้อีกครั้ง`,
      questions: [
        { id: "RD3-21", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["The discovery of antibiotics", "How to perform surgery safely", "The growing problem of antibiotic resistance and its causes", "Why colds are dangerous"],
          choicesTH: ["การค้นพบยาปฏิชีวนะ", "วิธีผ่าตัดอย่างปลอดภัย", "ปัญหาเชื้อดื้อยาที่เพิ่มขึ้นและสาเหตุ", "เหตุใดหวัดจึงอันตราย"],
          answer: 2,
          explanation: "บทความเน้นปัญหาเชื้อดื้อยา กลไก สาเหตุ และทางแก้ ตัวเลือก 3 จึงครอบคลุม — การค้นพบยาเป็นเพียงบริบทนำ"
        },
        { id: "RD3-22", tag: "Detail",
          question: "According to the passage, how does antibiotic resistance arise?",
          questionTH: "ตามบทความ เชื้อดื้อยาเกิดขึ้นได้อย่างไร?",
          choices: ["Through poor nutrition", "Through lack of exercise", "Through changes in temperature", "Through natural selection"],
          choicesTH: ["ผ่านโภชนาการที่ไม่ดี", "ผ่านการขาดการออกกำลังกาย", "ผ่านการเปลี่ยนแปลงอุณหภูมิ", "ผ่านการคัดเลือกโดยธรรมชาติ"],
          answer: 3,
          explanation: "ย่อหน้า 2: 'Antibiotic resistance arises through natural selection' — แบคทีเรียที่กลายพันธุ์รอดแล้วขยายพันธุ์ต่อ"
        },
        { id: "RD3-23", tag: "Detail",
          question: "Why are antibiotics useless against the common cold?",
          questionTH: "เหตุใดยาปฏิชีวนะจึงไม่ได้ผลกับโรคหวัดธรรมดา?",
          choices: ["Colds are caused by viruses, not bacteria", "Colds last too long", "Antibiotics are too weak", "Colds are too mild"],
          choicesTH: ["หวัดเกิดจากไวรัส ไม่ใช่แบคทีเรีย", "หวัดอยู่นานเกินไป", "ยาปฏิชีวนะอ่อนเกินไป", "หวัดอ่อนเกินไป"],
          answer: 0,
          explanation: "ย่อหน้า 3: colds 'are caused by viruses rather than bacteria' — ยาปฏิชีวนะฆ่าแบคทีเรีย จึงใช้กับหวัดไม่ได้"
        },
        { id: "RD3-24", tag: "Vocabulary in Context",
          question: "The word \"immune\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"immune\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["harmful", "sensitive", "resistant", "weak"],
          choicesTH: ["เป็นอันตราย", "ไวต่อสิ่งกระตุ้น", "ต้านทานได้ ไม่ได้รับผล", "อ่อนแอ"],
          answer: 2,
          explanation: "'an entire population of bacteria can become immune to a drug that once destroyed it' <b>immune = resistant</b> (ต้านทาน ไม่ได้รับผลจากยา) — sensitive ตรงข้าม"
        },
        { id: "RD3-25", tag: "Detail",
          question: "Which of the following is mentioned as a cause of antibiotic misuse?",
          questionTH: "ข้อใดถูกกล่าวถึงว่าเป็นสาเหตุของการใช้ยาปฏิชีวนะอย่างผิด ๆ?",
          choices: ["Patients taking too little food", "Hospitals closing early", "Patients failing to complete the full course of treatment", "Doctors refusing to prescribe them"],
          choicesTH: ["ผู้ป่วยกินอาหารน้อยเกินไป", "โรงพยาบาลปิดเร็ว", "ผู้ป่วยไม่กินยาให้ครบคอร์ส", "แพทย์ปฏิเสธที่จะสั่งจ่าย"],
          answer: 2,
          explanation: "ย่อหน้า 3: 'Patients often fail to complete the full course of treatment, allowing the strongest bacteria to survive' — ตอบตรงตัว"
        },
        { id: "RD3-26", tag: "Detail",
          question: "According to the passage, why are antibiotics given to healthy farm animals?",
          questionTH: "ตามบทความ เหตุใดจึงให้ยาปฏิชีวนะแก่สัตว์ในฟาร์มที่แข็งแรง?",
          choices: ["To promote growth", "To cure their diseases", "To keep them calm", "To improve their taste"],
          choicesTH: ["เพื่อเร่งการเจริญเติบโต", "เพื่อรักษาโรค", "เพื่อให้สงบ", "เพื่อให้รสชาติดีขึ้น"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'antibiotics are given to healthy farm animals to promote growth' — ซึ่งสร้างสภาพให้เชื้อดื้อยาพัฒนา"
        },
        { id: "RD3-27", tag: "Detail",
          question: "Why are pharmaceutical companies reluctant to develop new antibiotics?",
          questionTH: "เหตุใดบริษัทยาจึงไม่ค่อยเต็มใจพัฒนายาปฏิชีวนะตัวใหม่?",
          choices: ["It is costly and difficult", "It is illegal", "Bacteria no longer exist", "There is no demand"],
          choicesTH: ["มันแพงและยาก", "มันผิดกฎหมาย", "แบคทีเรียไม่มีอยู่แล้ว", "ไม่มีความต้องการ"],
          answer: 0,
          explanation: "ย่อหน้า 4: developing new ones is 'a costly and difficult task that few pharmaceutical companies are willing to undertake' — ตอบตรงตัว"
        },
        { id: "RD3-28", tag: "Vocabulary in Context",
          question: "The word \"coordinated\" in the last paragraph is closest in meaning to",
          questionTH: "คำว่า \"coordinated\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["expensive", "secret", "sudden", "well-organized and cooperative"],
          choicesTH: ["แพง", "ลับ", "กะทันหัน", "ที่จัดระเบียบและร่วมมือกันดี"],
          answer: 3,
          explanation: "'without urgent and coordinated effort' = ความพยายามที่เร่งด่วนและประสานงานร่วมกัน <b>coordinated = well-organized and cooperative</b> (ทำงานสอดประสานกัน)"
        },
        { id: "RD3-29", tag: "Inference",
          question: "What does the author warn could happen without urgent action?",
          questionTH: "ผู้เขียนเตือนว่าอะไรอาจเกิดขึ้นหากไม่ลงมืออย่างเร่งด่วน?",
          choices: ["A simple infection could once again become deadly", "All antibiotics will be free", "Surgery will become impossible to learn", "Bacteria will disappear"],
          choicesTH: ["การติดเชื้อธรรมดาอาจกลับมาคร่าชีวิตได้อีก", "ยาปฏิชีวนะทั้งหมดจะฟรี", "การผ่าตัดจะเรียนรู้ไม่ได้", "แบคทีเรียจะหายไป"],
          answer: 0,
          explanation: "ประโยคปิด: 'a simple infection could once again become deadly' — เป็นคำเตือนถึงอนาคตหากไม่แก้ปัญหา"
        },
        { id: "RD3-30", tag: "Purpose",
          question: "Why does the author mention the discovery of antibiotics at the beginning?",
          questionTH: "เหตุใดผู้เขียนจึงกล่าวถึงการค้นพบยาปฏิชีวนะในตอนต้น?",
          choices: ["To contrast a past triumph with the present threat", "To list famous scientists", "To explain how to make antibiotics", "To praise modern farming"],
          choicesTH: ["เพื่อเปรียบความสำเร็จในอดีตกับภัยคุกคามในปัจจุบัน", "เพื่อระบุรายชื่อนักวิทยาศาสตร์ดัง", "เพื่ออธิบายวิธีผลิตยาปฏิชีวนะ", "เพื่อยกย่องการเกษตรสมัยใหม่"],
          answer: 0,
          explanation: "ย่อหน้า 1 ยกความสำเร็จในอดีต ('one of the greatest achievements') แล้วบอกว่า 'now under threat' — เป็นการสร้างความขัดแย้งเพื่อเน้นความร้ายแรงของปัญหาปัจจุบัน"
        },
      ]
    },
    {
      title: "Passage 4: How Coalition Governments Work",
      text: `In many democracies, no single political party wins enough seats in an election to govern on its own. When this happens, two or more parties may agree to share power and form what is known as a coalition government. Coalitions are common in countries that use systems of proportional representation, in which the number of seats each party receives closely matches its share of the national vote. Such systems rarely produce a clear majority for one party.

Forming a coalition involves careful negotiation. The parties must agree on a shared program of policies and decide how to divide important positions, such as cabinet posts. A larger party usually takes the leading role, with its leader becoming prime minister, while smaller partners are given ministries in exchange for their support. These negotiations can take weeks or even months, and until they are complete, the country may be left without a fully functioning government.

Supporters argue that coalition governments have important strengths. Because they represent a broader range of voters, decisions tend to reflect wider agreement rather than the will of a single party. Smaller parties, which might otherwise be ignored, gain a real voice in shaping policy. Compromise is built into the system, which can encourage moderation and discourage extreme measures.

Critics, however, point to clear weaknesses. Coalitions can be unstable, collapsing if partners disagree on a key issue, which sometimes forces early elections. Decision-making may be slow, as every major policy must be acceptable to all partners. And voters may feel frustrated when the government that emerges from negotiations looks quite different from anything they actually voted for. Whether coalitions are a strength or a weakness, they remain a defining feature of political life in much of the democratic world.`,
      textTH: `ในประเทศประชาธิปไตยหลายแห่ง ไม่มีพรรคการเมืองใดพรรคเดียวที่ชนะที่นั่งในการเลือกตั้งมากพอจะปกครองได้โดยลำพัง เมื่อเกิดเหตุการณ์เช่นนี้ พรรคตั้งแต่สองพรรคขึ้นไปอาจตกลงแบ่งอำนาจกันและจัดตั้งสิ่งที่เรียกว่ารัฐบาลผสม รัฐบาลผสมพบได้ทั่วไปในประเทศที่ใช้ระบบเลือกตั้งแบบสัดส่วน ซึ่งจำนวนที่นั่งที่แต่ละพรรคได้รับใกล้เคียงกับสัดส่วนคะแนนเสียงทั้งประเทศ ระบบเช่นนี้ไม่ค่อยทำให้พรรคใดพรรคหนึ่งได้เสียงข้างมากอย่างเด็ดขาด

การจัดตั้งรัฐบาลผสมต้องอาศัยการเจรจาอย่างรอบคอบ พรรคต่าง ๆ ต้องตกลงกันเรื่องโครงการนโยบายร่วม และตัดสินใจว่าจะแบ่งตำแหน่งสำคัญอย่างเก้าอี้คณะรัฐมนตรีกันอย่างไร โดยปกติพรรคที่ใหญ่กว่าจะรับบทนำ ผู้นำของพรรคจะได้เป็นนายกรัฐมนตรี ขณะที่พรรคร่วมที่เล็กกว่าจะได้กระทรวงต่าง ๆ เป็นการแลกกับการสนับสนุน การเจรจาเหล่านี้อาจใช้เวลาหลายสัปดาห์หรือกระทั่งหลายเดือน และจนกว่าจะเสร็จสิ้น ประเทศก็อาจอยู่ในภาวะไร้รัฐบาลที่ทำงานได้เต็มที่

ฝ่ายสนับสนุนแย้งว่ารัฐบาลผสมมีจุดแข็งที่สำคัญ เนื่องจากเป็นตัวแทนของผู้มีสิทธิเลือกตั้งในวงกว้างกว่า การตัดสินใจจึงมักสะท้อนความเห็นพ้องที่กว้างขวางมากกว่าเจตจำนงของพรรคเดียว พรรคเล็ก ๆ ที่ไม่เช่นนั้นอาจถูกมองข้าม ก็ได้มีเสียงอย่างแท้จริงในการกำหนดนโยบาย การประนีประนอมถูกฝังอยู่ในระบบนี้ ซึ่งสามารถส่งเสริมความเป็นกลางและลดทอนมาตรการสุดโต่ง

อย่างไรก็ตาม ฝ่ายวิจารณ์ชี้ให้เห็นจุดอ่อนที่ชัดเจน รัฐบาลผสมอาจไม่มั่นคง ล่มสลายได้หากพรรคร่วมเห็นไม่ตรงกันในประเด็นสำคัญ ซึ่งบางครั้งก็บีบให้ต้องเลือกตั้งก่อนกำหนด การตัดสินใจอาจล่าช้า เพราะทุกนโยบายสำคัญต้องเป็นที่ยอมรับของพรรคร่วมทุกพรรค และผู้มีสิทธิเลือกตั้งอาจรู้สึกผิดหวังเมื่อรัฐบาลที่เกิดจากการเจรจาดูแตกต่างไปมากจากสิ่งที่พวกเขาลงคะแนนให้จริง ๆ ไม่ว่ารัฐบาลผสมจะเป็นจุดแข็งหรือจุดอ่อน มันก็ยังคงเป็นลักษณะเด่นของชีวิตทางการเมืองในโลกประชาธิปไตยส่วนใหญ่`,
      questions: [
        { id: "RD3-31", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["How coalition governments form and their strengths and weaknesses", "How to vote in an election", "The history of a single country", "Why one party always wins elections"],
          choicesTH: ["การก่อตัวของรัฐบาลผสมพร้อมจุดแข็งจุดอ่อน", "วิธีลงคะแนนเลือกตั้ง", "ประวัติของประเทศหนึ่ง", "เหตุใดพรรคเดียวจึงชนะเลือกตั้งเสมอ"],
          answer: 0,
          explanation: "บทความอธิบายว่ารัฐบาลผสมเกิดอย่างไร เจรจาอย่างไร พร้อมข้อดีข้อเสีย ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD3-32", tag: "Detail",
          question: "When do parties typically form a coalition government?",
          questionTH: "พรรคการเมืองมักจัดตั้งรัฐบาลผสมเมื่อใด?",
          choices: ["When there is no election", "When all parties merge into one", "When one party wins a large majority", "When no single party wins enough seats to govern alone"],
          choicesTH: ["เมื่อไม่มีการเลือกตั้ง", "เมื่อทุกพรรครวมเป็นหนึ่ง", "เมื่อพรรคหนึ่งชนะเสียงข้างมากมาก", "เมื่อไม่มีพรรคใดได้ที่นั่งพอจะปกครองลำพัง"],
          answer: 3,
          explanation: "ย่อหน้า 1: 'no single political party wins enough seats ... two or more parties may agree to share power' — ตอบตรงตัว"
        },
        { id: "RD3-33", tag: "Detail",
          question: "According to the passage, in which electoral system are coalitions common?",
          questionTH: "ตามบทความ รัฐบาลผสมพบบ่อยในระบบเลือกตั้งแบบใด?",
          choices: ["A system with no parties", "Direct dictatorship", "Proportional representation", "A one-party state"],
          choicesTH: ["ระบบที่ไม่มีพรรค", "เผด็จการโดยตรง", "ระบบสัดส่วน (proportional representation)", "รัฐพรรคเดียว"],
          answer: 2,
          explanation: "ย่อหน้า 1: 'common in countries that use systems of proportional representation' ซึ่งที่นั่งสะท้อนสัดส่วนคะแนน จึงไม่ค่อยมีพรรคใดได้เสียงข้างมากเด็ดขาด"
        },
        { id: "RD3-34", tag: "Detail",
          question: "What must parties agree on when forming a coalition?",
          questionTH: "พรรคการเมืองต้องตกลงกันเรื่องใดเมื่อจัดตั้งรัฐบาลผสม?",
          choices: ["How to cancel the election", "Which party to ban", "The color of their flags", "A shared program of policies and the division of positions"],
          choicesTH: ["จะยกเลิกการเลือกตั้งอย่างไร", "จะแบนพรรคใด", "สีของธงพรรค", "โครงการนโยบายร่วมและการแบ่งตำแหน่ง"],
          answer: 3,
          explanation: "ย่อหน้า 2: 'agree on a shared program of policies and decide how to divide important positions, such as cabinet posts' — ตอบตรงตัว"
        },
        { id: "RD3-35", tag: "Vocabulary in Context",
          question: "The word \"negotiation\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"negotiation\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["a celebration", "discussion to reach agreement", "a public vote", "a violent conflict"],
          choicesTH: ["การเฉลิมฉลอง", "การพูดคุยเพื่อหาข้อตกลง", "การลงคะแนนสาธารณะ", "ความขัดแย้งรุนแรง"],
          answer: 1,
          explanation: "'Forming a coalition involves careful negotiation' ที่พรรคต้องตกลงเรื่องนโยบายและตำแหน่ง <b>negotiation = การเจรจาต่อรองเพื่อหาข้อตกลง</b>"
        },
        { id: "RD3-36", tag: "Detail",
          question: "According to supporters, what is one strength of coalition governments?",
          questionTH: "ตามฝ่ายสนับสนุน จุดแข็งหนึ่งของรัฐบาลผสมคืออะไร?",
          choices: ["They never change policy", "They have only one leader", "They represent a broader range of voters", "They make decisions instantly"],
          choicesTH: ["ไม่เคยเปลี่ยนนโยบาย", "มีผู้นำเพียงคนเดียว", "เป็นตัวแทนผู้มีสิทธิเลือกตั้งในวงกว้างกว่า", "ตัดสินใจได้ทันที"],
          answer: 2,
          explanation: "ย่อหน้า 3: 'Because they represent a broader range of voters, decisions tend to reflect wider agreement' — ตอบตรงตัว"
        },
        { id: "RD3-37", tag: "Detail",
          question: "Which weakness of coalitions do critics mention?",
          questionTH: "ฝ่ายวิจารณ์กล่าวถึงจุดอ่อนใดของรัฐบาลผสม?",
          choices: ["They can be unstable and may collapse", "They are too cheap to run", "They never hold elections", "They ignore large parties"],
          choicesTH: ["อาจไม่มั่นคงและล่มได้", "บริหารถูกเกินไป", "ไม่เคยจัดเลือกตั้ง", "เพิกเฉยพรรคใหญ่"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'Coalitions can be unstable, collapsing if partners disagree on a key issue' — ซึ่งบางครั้งทำให้ต้องเลือกตั้งก่อนกำหนด"
        },
        { id: "RD3-38", tag: "Detail",
          question: "Why might decision-making be slow in a coalition?",
          questionTH: "เหตุใดการตัดสินใจในรัฐบาลผสมจึงอาจล่าช้า?",
          choices: ["Voters make every decision", "Parties never meet", "Every major policy must be acceptable to all partners", "There are no leaders"],
          choicesTH: ["ผู้มีสิทธิเลือกตั้งตัดสินทุกเรื่อง", "พรรคไม่เคยประชุมกัน", "ทุกนโยบายสำคัญต้องเป็นที่ยอมรับของทุกพรรคร่วม", "ไม่มีผู้นำ"],
          answer: 2,
          explanation: "ย่อหน้า 4: 'Decision-making may be slow, as every major policy must be acceptable to all partners' — ต้องให้ทุกฝ่ายยอมรับ จึงช้า"
        },
        { id: "RD3-39", tag: "Inference",
          question: "Why might voters feel frustrated with a coalition government?",
          questionTH: "เหตุใดผู้มีสิทธิเลือกตั้งอาจรู้สึกผิดหวังกับรัฐบาลผสม?",
          choices: ["The resulting government may differ from what they voted for", "Elections happen too rarely", "They are not allowed to vote", "All parties look identical"],
          choicesTH: ["รัฐบาลที่ได้อาจต่างจากที่พวกเขาเลือก", "การเลือกตั้งเกิดขึ้นน้อยเกินไป", "พวกเขาไม่ได้รับอนุญาตให้ลงคะแนน", "ทุกพรรคหน้าตาเหมือนกันหมด"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'voters may feel frustrated when the government ... looks quite different from anything they actually voted for' — เพราะเกิดจากการต่อรองหลังเลือกตั้ง"
        },
        { id: "RD3-40", tag: "Inference",
          question: "What is the author's overall position on coalition governments?",
          questionTH: "จุดยืนโดยรวมของผู้เขียนต่อรัฐบาลผสมเป็นอย่างไร?",
          choices: ["Balanced, presenting both strengths and weaknesses", "Strongly in favor", "Completely uninterested", "Strongly opposed"],
          choicesTH: ["เป็นกลาง นำเสนอทั้งจุดแข็งและจุดอ่อน", "สนับสนุนอย่างรุนแรง", "ไม่สนใจเลย", "คัดค้านอย่างรุนแรง"],
          answer: 0,
          explanation: "ผู้เขียนเสนอทั้งมุมสนับสนุน (ย่อหน้า 3) และวิจารณ์ (ย่อหน้า 4) แล้วปิดอย่างเป็นกลาง ('Whether ... a strength or a weakness') จึงเป็นการนำเสนอแบบสมดุล"
        },
      ]
    },
    {
      title: "Passage 5: The Spread of Misinformation Online",
      text: `Never before in history has so much information been available to so many people. With a smartphone, anyone can access the world's knowledge in seconds. Yet the same technology that spreads valuable information also spreads falsehoods, and false stories often travel faster and reach more people than the truth. The rise of online misinformation has become one of the defining challenges of the digital age.

Several factors explain why misinformation spreads so effectively. False stories are frequently designed to be sensational, shocking, or emotionally powerful, and such content is far more likely to be shared than a measured, factual report. Social media platforms make sharing effortless, allowing a single post to reach millions within hours. Their recommendation systems, built to maximize engagement, tend to promote whatever content provokes the strongest reactions, regardless of whether it is true.

The consequences can be serious. False health advice can lead people to refuse effective treatments or try dangerous ones. Misleading political claims can deepen divisions within a society and undermine trust in institutions. During emergencies, rumors can spread panic and interfere with rescue efforts. Because a striking falsehood can lodge itself in the memory, even a later correction may fail to undo the damage.

Combating misinformation is difficult, and there is no single solution. Technology companies can label or remove false content, but doing so raises hard questions about who decides what is true and where free expression ends. Many experts argue that the most powerful long-term defense is education. If people learn to question sources, check facts, and pause before sharing, they become far harder to deceive. In an age of information overload, the ability to think critically may be the most valuable skill of all.`,
      textTH: `ไม่เคยมีครั้งใดในประวัติศาสตร์ที่ข้อมูลจำนวนมากมายเช่นนี้จะเข้าถึงผู้คนได้มากขนาดนี้ ด้วยสมาร์ตโฟน ใครก็สามารถเข้าถึงความรู้ของทั้งโลกได้ในไม่กี่วินาที ทว่าเทคโนโลยีเดียวกันที่เผยแพร่ข้อมูลอันมีค่าก็เผยแพร่ความเท็จด้วยเช่นกัน และเรื่องเท็จมักเดินทางเร็วกว่าและเข้าถึงผู้คนได้มากกว่าความจริง การผงาดขึ้นของข่าวลวงออนไลน์ได้กลายเป็นหนึ่งในความท้าทายสำคัญแห่งยุคดิจิทัล

มีหลายปัจจัยที่อธิบายว่าเหตุใดข่าวลวงจึงแพร่กระจายได้อย่างมีประสิทธิภาพ เรื่องเท็จมักถูกออกแบบมาให้เร้าอารมณ์ ตื่นตระหนก หรือทรงพลังทางอารมณ์ และเนื้อหาเช่นนั้นก็มีแนวโน้มถูกแชร์มากกว่ารายงานที่สุขุมและอิงข้อเท็จจริง แพลตฟอร์มโซเชียลมีเดียทำให้การแชร์ทำได้ง่ายดาย เปิดทางให้โพสต์เดียวเข้าถึงคนนับล้านได้ภายในไม่กี่ชั่วโมง ระบบแนะนำของแพลตฟอร์มที่สร้างมาเพื่อเพิ่มการมีส่วนร่วมให้สูงสุด มักดันเนื้อหาที่กระตุ้นปฏิกิริยารุนแรงที่สุดขึ้นมา ไม่ว่ามันจะเป็นความจริงหรือไม่

ผลกระทบอาจร้ายแรง คำแนะนำด้านสุขภาพที่เป็นเท็จอาจทำให้ผู้คนปฏิเสธการรักษาที่ได้ผลหรือลองวิธีที่อันตราย ข้ออ้างทางการเมืองที่ชวนเข้าใจผิดอาจทำให้ความแตกแยกในสังคมลึกขึ้นและบ่อนทำลายความเชื่อมั่นในสถาบันต่าง ๆ ในยามฉุกเฉิน ข่าวลือสามารถแพร่ความตื่นตระหนกและขัดขวางความพยายามกู้ภัย และเนื่องจากความเท็จที่สะดุดใจสามารถฝังตัวอยู่ในความทรงจำได้ แม้แต่การแก้ข่าวในภายหลังก็อาจไม่สามารถลบล้างความเสียหายได้

การต่อสู้กับข่าวลวงเป็นเรื่องยาก และไม่มีทางออกเดียวที่ใช้ได้ บริษัทเทคโนโลยีสามารถติดป้ายกำกับหรือลบเนื้อหาเท็จได้ แต่การทำเช่นนั้นก็ก่อให้เกิดคำถามยาก ๆ ว่าใครเป็นผู้ตัดสินว่าอะไรจริง และเสรีภาพในการแสดงออกสิ้นสุดตรงไหน ผู้เชี่ยวชาญหลายคนแย้งว่าเกราะป้องกันระยะยาวที่ทรงพลังที่สุดคือการศึกษา หากผู้คนเรียนรู้ที่จะตั้งคำถามกับแหล่งข้อมูล ตรวจสอบข้อเท็จจริง และหยุดคิดก่อนแชร์ พวกเขาก็จะถูกหลอกได้ยากขึ้นมาก ในยุคที่ข้อมูลท่วมท้น ความสามารถในการคิดเชิงวิพากษ์อาจเป็นทักษะที่มีค่าที่สุด`,
      questions: [
        { id: "RD3-41", tag: "Main Idea",
          question: "What is the main idea of the passage?",
          questionTH: "ใจความหลักของบทความคืออะไร?",
          choices: ["Online misinformation spreads easily, causes harm, and is hard to combat", "Social media should be banned", "Smartphones are harmful to health", "The truth always wins in the end"],
          choicesTH: ["ข่าวลวงออนไลน์แพร่ง่าย ก่อความเสียหาย และแก้ยาก", "ควรแบนโซเชียลมีเดีย", "สมาร์ตโฟนเป็นอันตรายต่อสุขภาพ", "ความจริงชนะเสมอในที่สุด"],
          answer: 0,
          explanation: "บทความครอบคลุมว่าข่าวลวงแพร่อย่างไร เกิดผลเสียอย่างไร และแก้ยากเพียงใด ตัวเลือก 1 จึงตรงที่สุด — ไม่ได้เรียกร้องให้แบนโซเชียล"
        },
        { id: "RD3-42", tag: "Detail",
          question: "According to the passage, how do false stories often compare with the truth online?",
          questionTH: "ตามบทความ ข่าวเท็จมักเป็นอย่างไรเมื่อเทียบกับความจริงบนโลกออนไลน์?",
          choices: ["They travel faster and reach more people", "They are always deleted quickly", "They are harder to create", "They are ignored by everyone"],
          choicesTH: ["แพร่เร็วกว่าและเข้าถึงคนมากกว่า", "ถูกลบอย่างรวดเร็วเสมอ", "สร้างยากกว่า", "ถูกทุกคนเพิกเฉย"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'false stories often travel faster and reach more people than the truth' — ตอบตรงตัว"
        },
        { id: "RD3-43", tag: "Detail",
          question: "Why is sensational content more likely to be shared?",
          questionTH: "เหตุใดเนื้อหาที่เร้าอารมณ์จึงมีแนวโน้มถูกแชร์มากกว่า?",
          choices: ["It is emotionally powerful and provokes strong reactions", "It is always true", "It is written by experts", "It is very long"],
          choicesTH: ["มันกระตุ้นอารมณ์รุนแรงและเร้าใจ", "มันเป็นความจริงเสมอ", "เขียนโดยผู้เชี่ยวชาญ", "มันยาวมาก"],
          answer: 0,
          explanation: "ย่อหน้า 2: เนื้อหาเท็จมัก 'sensational, shocking, or emotionally powerful' จึงถูกแชร์มากกว่า — และระบบแนะนำดันเนื้อหาที่เร้าปฏิกิริยาแรง"
        },
        { id: "RD3-44", tag: "Detail",
          question: "What are social media recommendation systems built to maximize?",
          questionTH: "ระบบแนะนำของโซเชียลมีเดียถูกสร้างมาเพื่อเพิ่มสิ่งใดให้สูงสุด?",
          choices: ["Privacy", "Education", "Engagement", "Accuracy"],
          choicesTH: ["ความเป็นส่วนตัว", "การศึกษา", "การมีส่วนร่วม (เอนเกจเมนต์)", "ความถูกต้องแม่นยำ"],
          answer: 2,
          explanation: "ย่อหน้า 2: 'recommendation systems, built to maximize engagement, tend to promote whatever content provokes the strongest reactions' — ตอบตรงตัว"
        },
        { id: "RD3-45", tag: "Vocabulary in Context",
          question: "The word \"sensational\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"sensational\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["very expensive", "designed to excite strong feeling", "carefully checked", "boring and dull"],
          choicesTH: ["แพงมาก", "ที่ออกแบบมาเร้าอารมณ์รุนแรง", "ตรวจสอบอย่างรอบคอบ", "น่าเบื่อจืดชืด"],
          answer: 1,
          explanation: "บริบทคู่กับ 'shocking, or emotionally powerful' <b>sensational = เร้าอารมณ์ ตื่นเต้นเกินจริงเพื่อดึงความสนใจ</b> — boring ตรงข้าม"
        },
        { id: "RD3-46", tag: "Detail",
          question: "Which consequence of misinformation is mentioned in the passage?",
          questionTH: "ผลกระทบใดของข่าวลวงที่ถูกกล่าวถึงในบทความ?",
          choices: ["More accurate news", "Cheaper smartphones", "False health advice leading people to refuse effective treatments", "Faster internet speeds"],
          choicesTH: ["ข่าวที่แม่นยำขึ้น", "สมาร์ตโฟนถูกลง", "คำแนะนำสุขภาพเท็จที่ทำให้คนปฏิเสธการรักษาที่ได้ผล", "อินเทอร์เน็ตเร็วขึ้น"],
          answer: 2,
          explanation: "ย่อหน้า 3: 'False health advice can lead people to refuse effective treatments or try dangerous ones' — ตอบตรงตัว"
        },
        { id: "RD3-47", tag: "Detail",
          question: "According to the passage, why may a later correction fail?",
          questionTH: "ตามบทความ เหตุใดการแก้ข่าวภายหลังจึงอาจไม่ได้ผล?",
          choices: ["Corrections are illegal", "No one reads corrections aloud", "Corrections cost too much", "A striking falsehood can lodge itself in the memory"],
          choicesTH: ["การแก้ข่าวผิดกฎหมาย", "ไม่มีใครอ่านคำแก้ข่าวออกเสียง", "การแก้ข่าวแพงเกินไป", "ข่าวเท็จที่สะดุดใจฝังอยู่ในความทรงจำได้"],
          answer: 3,
          explanation: "ย่อหน้า 3: 'a striking falsehood can lodge itself in the memory, even a later correction may fail to undo the damage' — ความเท็จติดในใจไปแล้ว"
        },
        { id: "RD3-48", tag: "Detail",
          question: "What do many experts consider the most powerful long-term defense against misinformation?",
          questionTH: "ผู้เชี่ยวชาญหลายคนมองว่าอะไรเป็นเกราะป้องกันระยะยาวที่ทรงพลังที่สุดต่อข่าวลวง?",
          choices: ["Stricter passwords", "Faster computers", "Education", "More advertising"],
          choicesTH: ["รหัสผ่านที่เข้มงวดขึ้น", "คอมพิวเตอร์ที่เร็วขึ้น", "การศึกษา", "การโฆษณามากขึ้น"],
          answer: 2,
          explanation: "ย่อหน้า 4: 'the most powerful long-term defense is education' — สอนให้คนตั้งคำถาม ตรวจสอบข้อเท็จจริง"
        },
        { id: "RD3-49", tag: "Inference",
          question: "Why is removing false content described as raising 'hard questions'?",
          questionTH: "เหตุใดการลบเนื้อหาเท็จจึงถูกบรรยายว่าก่อให้เกิด 'คำถามยาก'?",
          choices: ["It is too easy", "It involves deciding who determines what is true and limits free expression", "It always works perfectly", "It is free of cost"],
          choicesTH: ["มันง่ายเกินไป", "มันเกี่ยวกับการตัดสินว่าใครชี้ขาดความจริงและจำกัดเสรีภาพการแสดงออก", "มันได้ผลสมบูรณ์เสมอ", "มันไม่มีค่าใช้จ่าย"],
          answer: 1,
          explanation: "ย่อหน้า 4: ลบเนื้อหาเท็จ 'raises hard questions about who decides what is true and where free expression ends' — เป็นประเด็นเรื่องอำนาจตัดสินความจริงกับเสรีภาพ"
        },
        { id: "RD3-50", tag: "Purpose",
          question: "What does the author imply in the final sentence about critical thinking?",
          questionTH: "ผู้เขียนสื่ออะไรในประโยคสุดท้ายเกี่ยวกับการคิดเชิงวิพากษ์?",
          choices: ["It is only for scientists", "It is the most valuable skill in an age of information overload", "It slows people down too much", "It is no longer needed"],
          choicesTH: ["มีไว้สำหรับนักวิทยาศาสตร์เท่านั้น", "เป็นทักษะที่มีค่าที่สุดในยุคข้อมูลท่วมท้น", "ทำให้คนช้าเกินไป", "ไม่จำเป็นอีกต่อไป"],
          answer: 1,
          explanation: "ประโยคปิด: 'the ability to think critically may be the most valuable skill of all' — ผู้เขียนยกย่องการคิดวิเคราะห์ว่าสำคัญที่สุดในยุคข้อมูลล้น"
        },
      ]
    },
  ],
});
