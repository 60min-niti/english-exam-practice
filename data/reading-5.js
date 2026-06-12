// Reading ชุดที่ 5 — 5 passages × 10 ข้อ = 50 ข้อ (หมวด: วิศวกรรมโครงสร้าง/การแพทย์/สุขภาพจิต/การทูตภูมิอากาศ/เศรษฐศาสตร์การศึกษา)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "reading",
  set: 5,
  passages: [
    {
      title: "Passage 1: Buildings That Survive Earthquakes",
      text: `When a powerful earthquake strikes a city, it is rarely the shaking itself that kills people, but the collapse of the buildings around them. For this reason, engineers in earthquake-prone regions have spent decades learning how to design structures that can survive violent ground motion. Their work has saved countless lives, and the science behind it is more sophisticated than most people realize.

The fundamental challenge is that an earthquake does not push a building in a single direction; it shakes it back and forth, often violently. A rigid structure that resists this motion completely will eventually crack and fail, because the forces involved are simply too great. The key insight of modern earthquake engineering is therefore counterintuitive: rather than fighting the movement, a well-designed building should be allowed to flex and sway, absorbing the energy of the quake instead of resisting it.

Engineers have developed several ingenious methods to achieve this. One technique, known as base isolation, places a building on flexible bearings of rubber and steel that separate it from the ground. When the earth moves, the bearings absorb much of the motion, so the building above stays relatively still. Another approach uses devices called dampers — similar in principle to the shock absorbers in a car — which soak up vibration and convert it into heat. Some skyscrapers even contain a massive weight near the top that swings in the opposite direction to the building's sway, counteracting the motion.

Despite these advances, protecting people remains as much a social challenge as a technical one. The safest designs are of little use if they are not enforced, and in many earthquake-prone regions, older buildings constructed before modern standards still stand. Strengthening or replacing them is expensive, and poorer communities are often the most exposed. The engineering exists to make buildings far safer; the harder task is ensuring that everyone, not only the wealthy, can benefit from it.`,
      questions: [
        { id: "RD5-01", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["How engineers design buildings to survive earthquakes, and the challenges that remain", "How earthquakes are predicted", "Why cities should not be built", "The history of skyscrapers"],
          choicesTH: ["วิธีที่วิศวกรออกแบบอาคารให้รอดจากแผ่นดินไหว และความท้าทายที่ยังคงอยู่", "วิธีพยากรณ์แผ่นดินไหว", "เหตุใดไม่ควรสร้างเมือง", "ประวัติของตึกระฟ้า"],
          answer: 0,
          explanation: "บทความอธิบายหลักการและเทคนิคออกแบบอาคารต้านแผ่นดินไหว พร้อมความท้าทายเชิงสังคม ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD5-02", tag: "Detail",
          question: "According to the passage, what usually kills people in an earthquake?",
          questionTH: "ตามบทความ อะไรมักคร่าชีวิตผู้คนในแผ่นดินไหว?",
          choices: ["The collapse of buildings", "The shaking itself", "The noise", "Flooding"],
          choicesTH: ["การถล่มของอาคาร", "การสั่นสะเทือนเอง", "เสียงดัง", "น้ำท่วม"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'it is rarely the shaking itself that kills people, but the collapse of the buildings' — ตอบตรงตัว"
        },
        { id: "RD5-03", tag: "Detail",
          question: "What is the 'counterintuitive' key insight of modern earthquake engineering?",
          questionTH: "ข้อค้นพบสำคัญที่ 'ขัดกับสามัญสำนึก' ของวิศวกรรมแผ่นดินไหวสมัยใหม่คืออะไร?",
          choices: ["A building should flex and sway rather than resist the movement", "Buildings should be completely rigid", "Buildings should be made only of glass", "Buildings should have no foundations"],
          choicesTH: ["อาคารควรยืดหยุ่นโยกตามแทนที่จะต้านการเคลื่อนไหว", "อาคารควรแข็งทื่อสนิท", "อาคารควรทำจากกระจกล้วน", "อาคารไม่ควรมีฐานราก"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'rather than fighting the movement, a well-designed building should be allowed to flex and sway, absorbing the energy' — ตอบตรงตัว"
        },
        { id: "RD5-04", tag: "Detail",
          question: "Why will a completely rigid structure eventually fail?",
          questionTH: "เหตุใดโครงสร้างที่แข็งทื่อสนิทจึงล้มเหลวในที่สุด?",
          choices: ["The forces involved are too great, so it cracks", "It is too light", "It cannot be painted", "It is too cheap"],
          choicesTH: ["แรงที่กระทำมากเกินไป มันจึงแตกร้าว", "มันเบาเกินไป", "ทาสีไม่ได้", "มันถูกเกินไป"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'A rigid structure that resists this motion completely will eventually crack and fail, because the forces involved are simply too great' — ตอบตรงตัว"
        },
        { id: "RD5-05", tag: "Detail",
          question: "How does base isolation protect a building?",
          questionTH: "การแยกฐาน (base isolation) ปกป้องอาคารอย่างไร?",
          choices: ["Flexible bearings separate the building from the ground and absorb motion", "It freezes the ground", "It makes the building heavier", "It removes all windows"],
          choicesTH: ["แบริ่งยืดหยุ่นแยกอาคารออกจากพื้นและดูดซับการเคลื่อนไหว", "มันแช่แข็งพื้นดิน", "ทำให้อาคารหนักขึ้น", "เอาหน้าต่างออกทั้งหมด"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'base isolation, places a building on flexible bearings of rubber and steel that separate it from the ground ... the building above stays relatively still'"
        },
        { id: "RD5-06", tag: "Detail",
          question: "What do dampers do?",
          questionTH: "ตัวหน่วง (dampers) ทำหน้าที่อะไร?",
          choices: ["Soak up vibration and convert it into heat", "Make the building taller", "Light up the building", "Cool the air"],
          choicesTH: ["ดูดซับการสั่นสะเทือนและเปลี่ยนเป็นความร้อน", "ทำให้อาคารสูงขึ้น", "ให้แสงสว่างแก่อาคาร", "ทำให้อากาศเย็น"],
          answer: 0,
          explanation: "ย่อหน้า 3: dampers 'soak up vibration and convert it into heat' คล้ายโช้คอัพในรถ — ตอบตรงตัว"
        },
        { id: "RD5-07", tag: "Vocabulary in Context",
          question: "The word \"counteracting\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"counteracting\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["working against", "supporting", "measuring", "copying"],
          choicesTH: ["ต้านทาน หักล้าง", "สนับสนุน", "วัด", "ลอกเลียน"],
          answer: 0,
          explanation: "น้ำหนักที่แกว่งสวนทางกับการโยกของตึกเพื่อ 'counteracting the motion' <b>counteract = ต้านทาน/หักล้าง</b> (ทำให้ผลของอีกแรงลดลง) — supporting ตรงข้าม"
        },
        { id: "RD5-08", tag: "Detail",
          question: "What does the massive weight near the top of some skyscrapers do?",
          questionTH: "น้ำหนักมหาศาลใกล้ยอดตึกระฟ้าบางแห่งทำหน้าที่อะไร?",
          choices: ["It swings opposite to the building's sway to counteract motion", "It stores water", "It generates electricity", "It blocks sunlight"],
          choicesTH: ["แกว่งสวนทางการโยกของตึกเพื่อหักล้างการเคลื่อนไหว", "เก็บน้ำ", "ผลิตไฟฟ้า", "บังแสงแดด"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'a massive weight near the top that swings in the opposite direction to the building's sway, counteracting the motion' — ตอบตรงตัว"
        },
        { id: "RD5-09", tag: "Inference",
          question: "Why does the author say protecting people is 'as much a social challenge as a technical one'?",
          questionTH: "เหตุใดผู้เขียนจึงกล่าวว่าการปกป้องผู้คนเป็น 'ความท้าทายเชิงสังคมพอ ๆ กับเชิงเทคนิค'?",
          choices: ["Safe designs are useless if not enforced, and poorer communities are most exposed", "Engineers refuse to work", "Earthquakes never happen in cities", "Buildings cannot be made safe at all"],
          choicesTH: ["ดีไซน์ที่ปลอดภัยไร้ค่าหากไม่บังคับใช้ และชุมชนยากจนเสี่ยงมากสุด", "วิศวกรปฏิเสธที่จะทำงาน", "แผ่นดินไหวไม่เคยเกิดในเมือง", "อาคารทำให้ปลอดภัยไม่ได้เลย"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'The safest designs are of little use if they are not enforced ... poorer communities are often the most exposed' — เป็นปัญหาเรื่องการบังคับใช้และความเหลื่อมล้ำ ไม่ใช่แค่เทคนิค"
        },
        { id: "RD5-10", tag: "Inference",
          question: "What does the author imply in the final sentence?",
          questionTH: "ผู้เขียนสื่ออะไรในประโยคสุดท้าย?",
          choices: ["The technology exists, but ensuring everyone benefits is the harder task", "Only the wealthy deserve safe buildings", "Engineering has failed completely", "No more research is needed"],
          choicesTH: ["เทคโนโลยีมีอยู่แล้ว แต่การทำให้ทุกคนได้ประโยชน์เป็นงานที่ยากกว่า", "เฉพาะคนรวยเท่านั้นที่ควรได้อาคารปลอดภัย", "วิศวกรรมล้มเหลวสิ้นเชิง", "ไม่ต้องวิจัยอีกแล้ว"],
          answer: 0,
          explanation: "ประโยคปิด: 'The engineering exists ... the harder task is ensuring that everyone, not only the wealthy, can benefit' — เน้นว่าความท้าทายอยู่ที่การเข้าถึงอย่างเท่าเทียม"
        },
      ]
    },
    {
      title: "Passage 2: Growing New Organs",
      text: `Every year, thousands of people die while waiting for an organ transplant. The demand for hearts, kidneys, livers, and lungs far exceeds the supply of donors, and even when a suitable organ is found, the patient's immune system may reject it as foreign. For decades, this shortage has been one of the most frustrating limits of modern medicine. Now, a field known as tissue engineering is raising the remarkable possibility of growing replacement organs in the laboratory.

The basic idea is to build an organ from a patient's own cells, so that the body will not reject it. In one approach, scientists begin with a "scaffold" — a structure in the shape of the desired organ, sometimes made from a donor organ that has had all its original cells removed. The patient's cells are then seeded onto this scaffold, where, given the right conditions, they multiply and organize themselves into functioning tissue. Because the new organ is built from the patient's own cells, the risk of rejection is greatly reduced.

Progress so far has been uneven. Relatively simple structures, such as skin, blood vessels, and windpipes, have already been grown and successfully implanted in patients. Complex organs like the heart, liver, and kidney, however, present far greater difficulties. These organs contain many different types of cells arranged in intricate patterns, and they require a dense network of blood vessels to keep their inner cells alive. Recreating such complexity remains beyond current technology.

Researchers are pursuing several paths forward. Some are experimenting with 3-D printers that deposit living cells layer by layer to build tissue. Others hope that animal organs, genetically modified to be compatible with humans, might one day fill the gap. Each approach faces serious scientific and ethical questions, and none is ready for widespread use. Yet the progress already made suggests that the goal is no longer pure fantasy. A future in which a failing organ can simply be replaced by a new one, grown to order, may be closer than we think.`,
      questions: [
        { id: "RD5-11", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["Efforts to grow replacement organs in the laboratory", "Why people should donate blood", "How the heart pumps blood", "The history of hospitals"],
          choicesTH: ["ความพยายามสร้างอวัยวะทดแทนในห้องปฏิบัติการ", "เหตุใดควรบริจาคเลือด", "หัวใจสูบฉีดเลือดอย่างไร", "ประวัติของโรงพยาบาล"],
          answer: 0,
          explanation: "บทความเน้น tissue engineering การสร้างอวัยวะทดแทนในแล็บ ความก้าวหน้า และอุปสรรค ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD5-12", tag: "Detail",
          question: "What problem does the passage describe at the beginning?",
          questionTH: "บทความบรรยายปัญหาใดในตอนต้น?",
          choices: ["The demand for organs far exceeds the supply of donors", "Hospitals are too large", "Organs are too cheap", "There are too many donors"],
          choicesTH: ["ความต้องการอวัยวะมากเกินกว่าจำนวนผู้บริจาค", "โรงพยาบาลใหญ่เกินไป", "อวัยวะถูกเกินไป", "มีผู้บริจาคมากเกินไป"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'The demand for hearts, kidneys, livers, and lungs far exceeds the supply of donors' — และอาจถูกร่างกายปฏิเสธ"
        },
        { id: "RD5-13", tag: "Detail",
          question: "Why is an organ built from a patient's own cells advantageous?",
          questionTH: "เหตุใดอวัยวะที่สร้างจากเซลล์ของผู้ป่วยเองจึงได้เปรียบ?",
          choices: ["The body is less likely to reject it", "It is cheaper to ship", "It glows in the dark", "It never needs blood"],
          choicesTH: ["ร่างกายมีโอกาสปฏิเสธน้อยลง", "ขนส่งถูกกว่า", "เรืองแสงในที่มืด", "ไม่ต้องการเลือดเลย"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'Because the new organ is built from the patient's own cells, the risk of rejection is greatly reduced' — ตอบตรงตัว"
        },
        { id: "RD5-14", tag: "Detail",
          question: "What is a 'scaffold' in this context?",
          questionTH: "'scaffold' ในบริบทนี้คืออะไร?",
          choices: ["A structure in the shape of the desired organ onto which cells are seeded", "A type of medicine", "A surgical knife", "A blood test"],
          choicesTH: ["โครงรูปร่างอวัยวะที่ต้องการ ซึ่งใช้เพาะเซลล์ลงไป", "ยาชนิดหนึ่ง", "มีดผ่าตัด", "การตรวจเลือด"],
          answer: 0,
          explanation: "ย่อหน้า 2: scaffold = 'a structure in the shape of the desired organ' ที่นำเซลล์ผู้ป่วยมาเพาะให้เติบโตเป็นเนื้อเยื่อ"
        },
        { id: "RD5-15", tag: "Detail",
          question: "Which simple structures have already been grown and implanted?",
          questionTH: "โครงสร้างเรียบง่ายใดที่ถูกสร้างและปลูกถ่ายสำเร็จแล้ว?",
          choices: ["Skin, blood vessels, and windpipes", "Hearts and livers", "Brains", "Bones of the skull"],
          choicesTH: ["ผิวหนัง หลอดเลือด และหลอดลม", "หัวใจและตับ", "สมอง", "กระดูกกะโหลก"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'simple structures, such as skin, blood vessels, and windpipes, have already been grown and successfully implanted' — ส่วนอวัยวะซับซ้อนยังทำไม่ได้"
        },
        { id: "RD5-16", tag: "Detail",
          question: "Why are complex organs like the heart so difficult to grow?",
          questionTH: "เหตุใดอวัยวะซับซ้อนอย่างหัวใจจึงสร้างยากมาก?",
          choices: ["They have many cell types and need a dense network of blood vessels", "They are too small", "They contain no cells", "They are made of metal"],
          choicesTH: ["มีเซลล์หลายชนิดและต้องการเครือข่ายหลอดเลือดหนาแน่น", "เล็กเกินไป", "ไม่มีเซลล์เลย", "ทำจากโลหะ"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'contain many different types of cells ... require a dense network of blood vessels to keep their inner cells alive' — ความซับซ้อนนี้ยังเกินเทคโนโลยีปัจจุบัน"
        },
        { id: "RD5-17", tag: "Vocabulary in Context",
          question: "The word \"intricate\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"intricate\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["complex and detailed", "simple", "empty", "broken"],
          choicesTH: ["ซับซ้อนและมีรายละเอียดมาก", "เรียบง่าย", "ว่างเปล่า", "แตกหัก"],
          answer: 0,
          explanation: "'arranged in intricate patterns' <b>intricate = ซับซ้อน มีรายละเอียดซ้อนกันมาก</b> — simple ตรงข้าม"
        },
        { id: "RD5-18", tag: "Detail",
          question: "Which method are some researchers experimenting with to build tissue?",
          questionTH: "นักวิจัยบางคนกำลังทดลองวิธีใดในการสร้างเนื้อเยื่อ?",
          choices: ["3-D printers that deposit living cells layer by layer", "Boiling cells in water", "Freezing organs solid", "Painting organs"],
          choicesTH: ["เครื่องพิมพ์ 3 มิติที่วางเซลล์มีชีวิตทีละชั้น", "ต้มเซลล์ในน้ำ", "แช่อวัยวะให้แข็ง", "ทาสีอวัยวะ"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'experimenting with 3-D printers that deposit living cells layer by layer to build tissue' — ตอบตรงตัว"
        },
        { id: "RD5-19", tag: "Inference",
          question: "What does the passage suggest about animal organs modified for humans?",
          questionTH: "บทความสื่ออะไรเกี่ยวกับอวัยวะสัตว์ที่ดัดแปลงเพื่อมนุษย์?",
          choices: ["They might one day fill the gap but raise serious questions", "They are already in common use", "They are completely safe", "They are illegal everywhere"],
          choicesTH: ["อาจช่วยเติมช่องว่างได้ในอนาคตแต่ก่อคำถามสำคัญ", "ใช้กันทั่วไปแล้ว", "ปลอดภัยสมบูรณ์", "ผิดกฎหมายทุกที่"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'animal organs ... might one day fill the gap' แต่ 'faces serious scientific and ethical questions, and none is ready for widespread use'"
        },
        { id: "RD5-20", tag: "Inference",
          question: "What is the author's tone in the final sentence?",
          questionTH: "น้ำเสียงของผู้เขียนในประโยคสุดท้ายเป็นอย่างไร?",
          choices: ["Cautiously optimistic", "Completely hopeless", "Angry", "Indifferent"],
          choicesTH: ["มองโลกในแง่ดีอย่างระมัดระวัง", "สิ้นหวังโดยสิ้นเชิง", "โกรธ", "เฉยเมย"],
          answer: 0,
          explanation: "ประโยคปิด: 'the goal is no longer pure fantasy ... may be closer than we think' — ผู้เขียนยอมรับว่ายังไม่พร้อมใช้ แต่มองอนาคตเชิงบวกอย่างระวัง"
        },
      ]
    },
    {
      title: "Passage 3: Taking Mental Health Seriously",
      text: `For most of history, mental illnesses such as depression and anxiety were poorly understood and often hidden. Sufferers were told to simply pull themselves together, as if their condition were a weakness of character rather than a genuine medical problem. Today this attitude is slowly changing. Mental health is increasingly recognized as an essential part of overall health, and depression in particular is now understood to be one of the leading causes of disability worldwide.

Depression is far more than ordinary sadness. While everyone feels low from time to time, clinical depression is a persistent condition that can drain a person's energy, disturb sleep and appetite, and rob life of pleasure for weeks, months, or longer. It can strike anyone, regardless of age, wealth, or success, and its causes are complex, involving a mix of genetic, biological, psychological, and social factors. Because it is often invisible to others, it is easily misunderstood and dismissed.

The good news is that depression is treatable. A combination of talking therapies and, in some cases, medication helps the majority of patients recover or manage their symptoms. Yet many people never seek help. In many societies, a powerful stigma still surrounds mental illness, leading sufferers to feel ashamed and to hide their struggles. In poorer countries, trained professionals and services may simply be unavailable, leaving millions without any support at all.

Addressing this challenge requires action on several levels. Reducing stigma through public education can encourage people to seek help without fear of judgment. Training more counselors and integrating mental health care into general medical services can widen access. Perhaps most importantly, treating mental health with the same seriousness as physical health would mark a profound shift in how societies care for their members. A broken leg is never dismissed as weakness; a troubled mind deserves the same compassion and care.`,
      questions: [
        { id: "RD5-21", tag: "Main Idea",
          question: "What is the main idea of the passage?",
          questionTH: "ใจความหลักของบทความคืออะไร?",
          choices: ["Depression is a serious, treatable illness that deserves to be taken seriously", "Sadness can never be cured", "Mental illness is a weakness of character", "Only the wealthy suffer from depression"],
          choicesTH: ["ภาวะซึมเศร้าเป็นโรคที่ร้ายแรงแต่รักษาได้และควรได้รับการใส่ใจ", "ความเศร้ารักษาไม่ได้เลย", "โรคจิตใจคือความอ่อนแอของนิสัย", "เฉพาะคนรวยเท่านั้นที่เป็นซึมเศร้า"],
          answer: 0,
          explanation: "บทเน้นว่าซึมเศร้าเป็นโรคจริง รักษาได้ และสังคมควรจริงจังกับมัน ตัวเลือก 1 จึงตรง — ตัวเลือก 3 คือทัศนคติเก่าที่บทความหักล้าง"
        },
        { id: "RD5-22", tag: "Detail",
          question: "How were sufferers of mental illness often treated in the past?",
          questionTH: "ในอดีตผู้ป่วยโรคทางจิตใจมักถูกปฏิบัติอย่างไร?",
          choices: ["Told to simply pull themselves together", "Given the best hospitals", "Praised publicly", "Paid money"],
          choicesTH: ["ถูกบอกให้แค่ทำใจเข้มแข็งขึ้นเอง", "ได้โรงพยาบาลที่ดีที่สุด", "ได้รับคำชมต่อหน้าสาธารณะ", "ได้รับเงิน"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'Sufferers were told to simply pull themselves together, as if their condition were a weakness of character'"
        },
        { id: "RD5-23", tag: "Detail",
          question: "How is clinical depression different from ordinary sadness?",
          questionTH: "ภาวะซึมเศร้าทางคลินิกต่างจากความเศร้าธรรมดาอย่างไร?",
          choices: ["It is a persistent condition that can last weeks, months, or longer", "It lasts only a few minutes", "It only affects sleep", "It is always visible to others"],
          choicesTH: ["เป็นภาวะที่ต่อเนื่องยาวนานเป็นสัปดาห์ เดือน หรือนานกว่า", "อยู่แค่ไม่กี่นาที", "กระทบแค่การนอน", "ผู้อื่นมองเห็นได้เสมอ"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'clinical depression is a persistent condition that can drain a person's energy ... for weeks, months, or longer' — ต่างจากความเศร้าชั่วครู่"
        },
        { id: "RD5-24", tag: "Detail",
          question: "According to the passage, what are the causes of depression?",
          questionTH: "ตามบทความ สาเหตุของภาวะซึมเศร้าคืออะไร?",
          choices: ["A mix of genetic, biological, psychological, and social factors", "Only laziness", "Only poverty", "Only old age"],
          choicesTH: ["การผสมของปัจจัยทางพันธุกรรม ชีวภาพ จิตใจ และสังคม", "ความขี้เกียจเท่านั้น", "ความยากจนเท่านั้น", "ความชราเท่านั้น"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'its causes are complex, involving a mix of genetic, biological, psychological, and social factors' — ตอบตรงตัว"
        },
        { id: "RD5-25", tag: "Vocabulary in Context",
          question: "The word \"stigma\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"stigma\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["a mark of shame or disgrace", "a medical treatment", "a type of medicine", "a kind of doctor"],
          choicesTH: ["ตราบาป ความอับอายที่สังคมตีตรา", "การรักษาทางการแพทย์", "ยาชนิดหนึ่ง", "แพทย์ประเภทหนึ่ง"],
          answer: 0,
          explanation: "'a powerful stigma still surrounds mental illness, leading sufferers to feel ashamed' <b>stigma = ตราบาป/การตีตราทางสังคม</b> ที่ทำให้รู้สึกอับอาย"
        },
        { id: "RD5-26", tag: "Detail",
          question: "According to the passage, is depression treatable?",
          questionTH: "ตามบทความ ภาวะซึมเศร้ารักษาได้หรือไม่?",
          choices: ["Yes, with talking therapies and sometimes medication", "No, never", "Only with surgery", "Only by ignoring it"],
          choicesTH: ["ได้ ด้วยจิตบำบัดและบางครั้งใช้ยา", "ไม่ ไม่มีทาง", "ได้ด้วยการผ่าตัดเท่านั้น", "ได้ด้วยการเพิกเฉยเท่านั้น"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'A combination of talking therapies and, in some cases, medication helps the majority of patients recover'"
        },
        { id: "RD5-27", tag: "Detail",
          question: "Why do many people never seek help for depression?",
          questionTH: "เหตุใดหลายคนจึงไม่เคยขอความช่วยเหลือเรื่องซึมเศร้า?",
          choices: ["Stigma makes them feel ashamed, and services may be unavailable", "Treatment is always free and easy", "They prefer hospitals", "They enjoy being ill"],
          choicesTH: ["การตีตราทำให้รู้สึกอับอาย และบริการอาจไม่มี", "การรักษาฟรีและง่ายเสมอ", "พวกเขาชอบโรงพยาบาล", "พวกเขาสนุกกับการป่วย"],
          answer: 0,
          explanation: "ย่อหน้า 3: stigma ทำให้รู้สึกอับอายและซ่อนปัญหา + ในประเทศยากจน 'trained professionals and services may simply be unavailable'"
        },
        { id: "RD5-28", tag: "Detail",
          question: "Which action does the passage suggest to widen access to care?",
          questionTH: "บทความเสนอการกระทำใดเพื่อขยายการเข้าถึงการดูแล?",
          choices: ["Training more counselors and integrating mental health into general medical services", "Closing all clinics", "Banning therapy", "Hiding the problem"],
          choicesTH: ["ฝึกที่ปรึกษาเพิ่มและผนวกสุขภาพจิตเข้ากับบริการแพทย์ทั่วไป", "ปิดคลินิกทั้งหมด", "ห้ามการบำบัด", "ปิดบังปัญหา"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'Training more counselors and integrating mental health care into general medical services can widen access' — ตอบตรงตัว"
        },
        { id: "RD5-29", tag: "Purpose",
          question: "Why does the author compare depression to a broken leg in the final sentence?",
          questionTH: "เหตุใดผู้เขียนจึงเปรียบซึมเศร้ากับขาหักในประโยคสุดท้าย?",
          choices: ["To argue that mental illness deserves the same care as physical illness", "To say legs are more important", "To explain how bones heal", "To recommend exercise"],
          choicesTH: ["เพื่อโต้แย้งว่าโรคจิตใจควรได้รับการดูแลเท่ากับโรคทางกาย", "เพื่อบอกว่าขาสำคัญกว่า", "เพื่ออธิบายการหายของกระดูก", "เพื่อแนะนำการออกกำลังกาย"],
          answer: 0,
          explanation: "ประโยคปิด: 'A broken leg is never dismissed as weakness; a troubled mind deserves the same compassion and care' — เปรียบเพื่อยืนยันว่าควรปฏิบัติต่อสุขภาพจิตอย่างจริงจังเท่าสุขภาพกาย"
        },
        { id: "RD5-30", tag: "Inference",
          question: "What overall change does the author hope to see?",
          questionTH: "ผู้เขียนหวังเห็นการเปลี่ยนแปลงโดยรวมใด?",
          choices: ["Societies treating mental health as seriously as physical health", "Fewer hospitals", "Less public education", "More stigma"],
          choicesTH: ["สังคมใส่ใจสุขภาพจิตจริงจังเท่าสุขภาพกาย", "โรงพยาบาลน้อยลง", "การให้ความรู้สาธารณะน้อยลง", "การตีตรามากขึ้น"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'treating mental health with the same seriousness as physical health would mark a profound shift' — เป็นความเปลี่ยนแปลงที่ผู้เขียนหวัง"
        },
      ]
    },
    {
      title: "Passage 4: The Difficulty of Global Climate Agreements",
      text: `Climate change is a global problem, but the world is divided into nearly two hundred separate nations, each with its own interests. This mismatch lies at the heart of why international action on climate change has proven so difficult. Greenhouse gases released anywhere affect the entire planet, yet no single country can solve the problem on its own. Cooperation is essential, and cooperation among so many parties is extraordinarily hard to achieve.

Part of the difficulty is a disagreement over responsibility. Wealthy nations industrialized long ago, burning enormous quantities of fossil fuels and producing most of the gases now warming the planet. Developing nations argue that it would be unfair to ask them to limit their own growth to solve a problem they did little to create. Richer countries, for their part, point out that emissions from rapidly growing economies are now rising fast, and that no solution can work without their participation. Each side has a reasonable case, and bridging the gap between them has been a central struggle of every climate negotiation.

There is also the problem of short-term costs and long-term benefits. Reducing emissions often requires expensive changes today — closing coal plants, rebuilding energy systems, transforming transport — while the benefits, a more stable climate, will be felt mainly by future generations. Political leaders, who must answer to voters in the present, find it tempting to delay difficult action and leave it to their successors.

Despite these obstacles, international cooperation has not failed entirely. Global agreements have been signed in which nations set their own targets for cutting emissions and report on their progress. Critics complain that such targets are often too weak and that promises are not always kept. Supporters reply that getting almost every nation to agree on anything is itself an achievement, and that imperfect cooperation is far better than none. The story of climate diplomacy is one of slow, frustrating, but genuine progress against one of the hardest problems humanity has ever faced.`,
      questions: [
        { id: "RD5-31", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["Why international agreements on climate change are so difficult to achieve", "How to build a coal plant", "Why climate change is not real", "The history of one nation"],
          choicesTH: ["เหตุใดข้อตกลงระหว่างประเทศเรื่องสภาพภูมิอากาศจึงทำได้ยาก", "วิธีสร้างโรงไฟฟ้าถ่านหิน", "เหตุใดการเปลี่ยนแปลงภูมิอากาศไม่จริง", "ประวัติของชาติหนึ่ง"],
          answer: 0,
          explanation: "บทความวิเคราะห์อุปสรรคของความร่วมมือระดับโลก (เรื่องความรับผิดชอบ ต้นทุนระยะสั้น vs ผลระยะยาว) ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD5-32", tag: "Detail",
          question: "According to the passage, why can no single country solve climate change alone?",
          questionTH: "ตามบทความ เหตุใดไม่มีประเทศใดแก้ปัญหาภูมิอากาศได้ลำพัง?",
          choices: ["Greenhouse gases released anywhere affect the entire planet", "Every country has the same interests", "Only one country produces gases", "Climate change is local"],
          choicesTH: ["ก๊าซเรือนกระจกที่ปล่อยจากที่ใดก็กระทบทั้งโลก", "ทุกประเทศมีผลประโยชน์เหมือนกัน", "มีประเทศเดียวที่ปล่อยก๊าซ", "การเปลี่ยนแปลงภูมิอากาศเป็นเรื่องท้องถิ่น"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'Greenhouse gases released anywhere affect the entire planet, yet no single country can solve the problem on its own' — ต้องร่วมมือกัน"
        },
        { id: "RD5-33", tag: "Detail",
          question: "What do developing nations argue about responsibility?",
          questionTH: "ประเทศกำลังพัฒนาโต้แย้งอย่างไรเรื่องความรับผิดชอบ?",
          choices: ["It is unfair to limit their growth for a problem they did little to create", "They created all the gases", "They should industrialize less than agreed", "They refuse to discuss it"],
          choicesTH: ["ไม่เป็นธรรมที่ต้องจำกัดการเติบโตเพื่อแก้ปัญหาที่ตนแทบไม่ได้ก่อ", "พวกเขาสร้างก๊าซทั้งหมด", "ควรพัฒนาอุตสาหกรรมน้อยกว่าที่ตกลง", "ปฏิเสธที่จะหารือ"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'it would be unfair to ask them to limit their own growth to solve a problem they did little to create' — ตอบตรงตัว"
        },
        { id: "RD5-34", tag: "Detail",
          question: "What do richer countries point out in response?",
          questionTH: "ประเทศร่ำรวยโต้กลับว่าอย่างไร?",
          choices: ["Emissions from rapidly growing economies are now rising fast", "They never produced any gases", "Developing nations should stop all growth", "Climate change has ended"],
          choicesTH: ["การปล่อยก๊าซจากเศรษฐกิจที่โตเร็วกำลังเพิ่มขึ้นรวดเร็ว", "พวกเขาไม่เคยปล่อยก๊าซเลย", "ประเทศกำลังพัฒนาควรหยุดการเติบโตทั้งหมด", "การเปลี่ยนแปลงภูมิอากาศจบแล้ว"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'emissions from rapidly growing economies are now rising fast, and ... no solution can work without their participation'"
        },
        { id: "RD5-35", tag: "Vocabulary in Context",
          question: "The word \"bridging\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"bridging\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["closing or reducing", "widening", "ignoring", "creating"],
          choicesTH: ["ลด/เชื่อมให้แคบลง", "ขยายให้กว้างขึ้น", "เพิกเฉย", "สร้างขึ้น"],
          answer: 0,
          explanation: "'bridging the gap between them' = ลดช่องว่าง/เชื่อมความเห็นต่างให้เข้าใกล้กัน <b>bridge the gap = ลดช่องว่าง</b> — widen ตรงข้าม"
        },
        { id: "RD5-36", tag: "Detail",
          question: "What is the problem of 'short-term costs and long-term benefits'?",
          questionTH: "ปัญหาเรื่อง 'ต้นทุนระยะสั้นกับผลประโยชน์ระยะยาว' คืออะไร?",
          choices: ["Reducing emissions costs a lot now, but benefits mainly future generations", "Costs and benefits both come instantly", "There are no costs at all", "Benefits come before costs"],
          choicesTH: ["การลดก๊าซมีต้นทุนสูงในตอนนี้ แต่ประโยชน์ตกแก่คนรุ่นหลังเป็นหลัก", "ต้นทุนและผลประโยชน์มาทันทีทั้งคู่", "ไม่มีต้นทุนเลย", "ผลประโยชน์มาก่อนต้นทุน"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'Reducing emissions often requires expensive changes today ... while the benefits ... will be felt mainly by future generations'"
        },
        { id: "RD5-37", tag: "Inference",
          question: "Why might political leaders be tempted to delay action?",
          questionTH: "เหตุใดผู้นำทางการเมืองอาจถูกล่อใจให้ชะลอการลงมือ?",
          choices: ["They must answer to present-day voters and the benefits come later", "They dislike future generations", "They cannot read reports", "Action is illegal"],
          choicesTH: ["พวกเขาต้องตอบสนองผู้มีสิทธิเลือกตั้งในปัจจุบัน และผลประโยชน์มาทีหลัง", "พวกเขาไม่ชอบคนรุ่นหลัง", "อ่านรายงานไม่ออก", "การลงมือผิดกฎหมาย"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'who must answer to voters in the present, find it tempting to delay ... and leave it to their successors' — เพราะต้นทุนอยู่ปัจจุบันแต่ผลอยู่อนาคต"
        },
        { id: "RD5-38", tag: "Detail",
          question: "How do recent global climate agreements work?",
          questionTH: "ข้อตกลงภูมิอากาศโลกในระยะหลังทำงานอย่างไร?",
          choices: ["Nations set their own targets and report on their progress", "One country decides for all", "There are no targets", "All emissions are banned instantly"],
          choicesTH: ["แต่ละชาติตั้งเป้าหมายของตนเองและรายงานความคืบหน้า", "ประเทศเดียวตัดสินแทนทุกชาติ", "ไม่มีเป้าหมาย", "ห้ามปล่อยก๊าซทั้งหมดทันที"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'nations set their own targets for cutting emissions and report on their progress' — ตอบตรงตัว"
        },
        { id: "RD5-39", tag: "Detail",
          question: "What do critics complain about these agreements?",
          questionTH: "ฝ่ายวิจารณ์บ่นอะไรเกี่ยวกับข้อตกลงเหล่านี้?",
          choices: ["Targets are often too weak and promises are not always kept", "They are too strict", "They ban all travel", "They have no countries"],
          choicesTH: ["เป้าหมายมักอ่อนเกินไปและคำสัญญาไม่ถูกรักษาเสมอ", "เข้มงวดเกินไป", "ห้ามการเดินทางทั้งหมด", "ไม่มีประเทศเข้าร่วม"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'such targets are often too weak and that promises are not always kept' — ข้อวิจารณ์หลัก"
        },
        { id: "RD5-40", tag: "Inference",
          question: "How does the author characterize the story of climate diplomacy?",
          questionTH: "ผู้เขียนบรรยายเรื่องราวของการทูตด้านภูมิอากาศว่าอย่างไร?",
          choices: ["Slow and frustrating but showing genuine progress", "A complete and total failure", "Quick and easy", "Already fully solved"],
          choicesTH: ["ช้าและน่าหงุดหงิดแต่มีความคืบหน้าจริง", "ความล้มเหลวโดยสิ้นเชิง", "รวดเร็วและง่าย", "แก้ได้สมบูรณ์แล้ว"],
          answer: 0,
          explanation: "ประโยคปิด: 'slow, frustrating, but genuine progress against one of the hardest problems' — ยอมรับว่าช้าและไม่สมบูรณ์ แต่มีความคืบหน้าจริง"
        },
      ]
    },
    {
      title: "Passage 5: Is a University Degree Still Worth It?",
      text: `For generations, a university degree was seen as a guaranteed path to a better life. Parents urged their children to study hard, win a place at a good university, and graduate into a secure, well-paid career. In recent years, however, this assumption has come under question. The cost of higher education has risen sharply in many countries, leaving graduates burdened with debt, while the job market has grown more uncertain. Increasingly, students and families are asking whether a degree is still worth the investment.

The economic case for higher education remains strong on average. Across most countries, people with university degrees still earn considerably more over their lifetimes than those without, and they are less likely to be unemployed. A degree can also open doors to professions that are simply closed to those without one. For many individuals, the financial return on a degree, even after accounting for tuition and lost earnings while studying, is still substantial.

Yet averages conceal important differences. The value of a degree depends heavily on what and where one studies. Graduates in fields such as engineering, medicine, and computer science tend to enjoy strong demand and high salaries, while those in some other subjects may struggle to find work that requires their qualifications. A degree from a prestigious institution may carry far more weight than one from a lesser-known college. For some students, the cost of a particular degree may exceed the benefit it brings.

The debate has also drawn attention to alternatives. Apprenticeships, vocational training, and online courses offer routes into skilled, well-paid work without the time and expense of a traditional degree. These options are not suitable for every career, but they suit some learners far better. The lesson is not that university has lost its value, but that it is no longer the only path, nor automatically the right one. The wisest choice depends on the individual, the field, and the cost — a more complicated calculation than previous generations ever had to make.`,
      questions: [
        { id: "RD5-41", tag: "Main Idea",
          question: "What is the main idea of the passage?",
          questionTH: "ใจความหลักของบทความคืออะไร?",
          choices: ["Whether a university degree is worth it now depends on individual circumstances", "University degrees are completely worthless", "Everyone must attend university", "No one should ever study"],
          choicesTH: ["การที่ปริญญาคุ้มค่าหรือไม่ตอนนี้ขึ้นกับสถานการณ์ของแต่ละคน", "ปริญญาไร้ค่าโดยสิ้นเชิง", "ทุกคนต้องเรียนมหาวิทยาลัย", "ไม่มีใครควรเรียนหนังสือเลย"],
          answer: 0,
          explanation: "บทสรุปว่าปริญญายังมีคุณค่าโดยเฉลี่ย แต่ไม่ใช่ทางเดียวและไม่ใช่ทางที่ถูกเสมอ ขึ้นกับบุคคล/สาขา/ต้นทุน ตัวเลือก 1 จึงตรงที่สุด"
        },
        { id: "RD5-42", tag: "Detail",
          question: "Why has the assumption about degrees come under question recently?",
          questionTH: "เหตุใดความเชื่อเรื่องปริญญาจึงถูกตั้งคำถามในระยะหลัง?",
          choices: ["Costs have risen sharply and the job market has grown uncertain", "Universities have all closed", "Degrees became free", "Jobs became guaranteed"],
          choicesTH: ["ค่าใช้จ่ายพุ่งสูงและตลาดงานไม่แน่นอนมากขึ้น", "มหาวิทยาลัยปิดหมด", "ปริญญากลายเป็นของฟรี", "งานกลายเป็นสิ่งที่การันตี"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'The cost of higher education has risen sharply ... while the job market has grown more uncertain' — ทำให้คนตั้งคำถาม"
        },
        { id: "RD5-43", tag: "Detail",
          question: "On average, how do people with degrees compare with those without?",
          questionTH: "โดยเฉลี่ย ผู้มีปริญญาเป็นอย่างไรเมื่อเทียบกับผู้ไม่มี?",
          choices: ["They earn considerably more and are less likely to be unemployed", "They earn much less", "They are always unemployed", "There is no difference"],
          choicesTH: ["มีรายได้มากกว่ามากและมีโอกาสตกงานน้อยกว่า", "มีรายได้น้อยกว่ามาก", "ตกงานเสมอ", "ไม่มีความต่าง"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'people with university degrees still earn considerably more over their lifetimes ... and they are less likely to be unemployed'"
        },
        { id: "RD5-44", tag: "Vocabulary in Context",
          question: "The word \"conceal\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"conceal\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["hide", "reveal", "increase", "measure"],
          choicesTH: ["ปิดบัง ซ่อน", "เปิดเผย", "เพิ่ม", "วัด"],
          answer: 0,
          explanation: "'averages conceal important differences' = ค่าเฉลี่ยซ่อนความแตกต่างสำคัญไว้ <b>conceal = hide</b> (ปิดบัง) — reveal ตรงข้าม"
        },
        { id: "RD5-45", tag: "Detail",
          question: "According to the passage, what does the value of a degree depend on?",
          questionTH: "ตามบทความ คุณค่าของปริญญาขึ้นอยู่กับอะไร?",
          choices: ["What and where one studies", "The color of the diploma", "The student's height", "The weather"],
          choicesTH: ["เรียนสาขาอะไรและที่ไหน", "สีของใบปริญญา", "ความสูงของนักศึกษา", "สภาพอากาศ"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'The value of a degree depends heavily on what and where one studies' — สาขาและสถาบันมีผลมาก"
        },
        { id: "RD5-46", tag: "Detail",
          question: "Which fields are mentioned as enjoying strong demand and high salaries?",
          questionTH: "สาขาใดถูกกล่าวถึงว่ามีความต้องการสูงและเงินเดือนดี?",
          choices: ["Engineering, medicine, and computer science", "Only history", "Only art", "None at all"],
          choicesTH: ["วิศวกรรม การแพทย์ และวิทยาการคอมพิวเตอร์", "ประวัติศาสตร์เท่านั้น", "ศิลปะเท่านั้น", "ไม่มีเลย"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'Graduates in fields such as engineering, medicine, and computer science tend to enjoy strong demand and high salaries'"
        },
        { id: "RD5-47", tag: "Detail",
          question: "Which alternatives to a traditional degree does the passage mention?",
          questionTH: "บทความกล่าวถึงทางเลือกใดแทนปริญญาแบบดั้งเดิม?",
          choices: ["Apprenticeships, vocational training, and online courses", "Doing nothing", "Moving abroad only", "Starting a war"],
          choicesTH: ["การฝึกงาน การอบรมวิชาชีพ และคอร์สออนไลน์", "ไม่ทำอะไรเลย", "ย้ายไปต่างประเทศเท่านั้น", "ก่อสงคราม"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'Apprenticeships, vocational training, and online courses offer routes into skilled, well-paid work' — ตอบตรงตัว"
        },
        { id: "RD5-48", tag: "Inference",
          question: "What does the passage suggest about these alternatives?",
          questionTH: "บทความสื่ออะไรเกี่ยวกับทางเลือกเหล่านี้?",
          choices: ["They suit some learners and careers but not all", "They are always better than a degree", "They are useless", "They are illegal"],
          choicesTH: ["เหมาะกับผู้เรียนและอาชีพบางส่วน แต่ไม่ใช่ทั้งหมด", "ดีกว่าปริญญาเสมอ", "ไร้ประโยชน์", "ผิดกฎหมาย"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'These options are not suitable for every career, but they suit some learners far better' — เหมาะบางคน/บางอาชีพ"
        },
        { id: "RD5-49", tag: "Detail",
          question: "What is the 'lesson' the author draws?",
          questionTH: "'บทเรียน' ที่ผู้เขียนสรุปคืออะไร?",
          choices: ["University has not lost its value but is no longer the only or automatically right path", "University is worthless", "Everyone should avoid university", "Only university matters"],
          choicesTH: ["มหาวิทยาลัยไม่ได้สูญค่า แต่ไม่ใช่ทางเดียวหรือทางที่ถูกโดยอัตโนมัติอีกต่อไป", "มหาวิทยาลัยไร้ค่า", "ทุกคนควรเลี่ยงมหาวิทยาลัย", "มีแต่มหาวิทยาลัยเท่านั้นที่สำคัญ"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'not that university has lost its value, but that it is no longer the only path, nor automatically the right one' — ตอบตรงตัว"
        },
        { id: "RD5-50", tag: "Inference",
          question: "Why does the author call the choice 'a more complicated calculation than previous generations ever had to make'?",
          questionTH: "เหตุใดผู้เขียนจึงเรียกการตัดสินใจนี้ว่า 'การคำนวณที่ซับซ้อนกว่าที่คนรุ่นก่อนเคยต้องทำ'?",
          choices: ["The right choice now depends on the individual, the field, and the cost", "There are no choices anymore", "Previous generations had harder choices", "The choice is always obvious"],
          choicesTH: ["ทางเลือกที่ถูกตอนนี้ขึ้นกับตัวบุคคล สาขา และต้นทุน", "ไม่มีทางเลือกอีกแล้ว", "คนรุ่นก่อนมีทางเลือกที่ยากกว่า", "ทางเลือกชัดเจนเสมอ"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'The wisest choice depends on the individual, the field, and the cost' — มีตัวแปรหลายอย่างต้องชั่งน้ำหนัก ต่างจากอดีตที่ปริญญาคือคำตอบเดียว"
        },
      ]
    },
  ],
});
