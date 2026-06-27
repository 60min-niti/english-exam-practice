// Reading ชุดที่ 2 — 5 passages × 10 ข้อ = 50 ข้อ
// questionTH = คำแปลไทยของคำถาม, choicesTH = คำแปลไทยของตัวเลือก (บทความคงเป็นภาษาอังกฤษเพื่อฝึกอ่าน)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "reading",
  set: 2,
  passages: [
    {
      title: "Passage 1: The Surprising Intelligence of Crows",
      text: `When people think of clever animals, they usually picture dolphins, chimpanzees, or perhaps dogs. Birds rarely come to mind; indeed, the insult "bird-brained" reflects an old assumption that birds are simply not very smart. Research over the past few decades has shattered this assumption, and nowhere more dramatically than in the case of crows and their relatives, a family of birds known as corvids.

Crows have demonstrated abilities that scientists once believed were unique to humans and a handful of great apes. In laboratory experiments, they have used and even made tools, bending wire into hooks to retrieve food from narrow containers. They can solve multi-step puzzles, recognize individual human faces, and remember which people have treated them well or badly years earlier. Some crows have been observed dropping nuts onto roads so that passing cars will crack them open, then waiting patiently for a break in traffic to collect their meal.

Perhaps most remarkably, crows appear capable of planning for the future, a skill that requires imagining situations that do not yet exist. In one experiment, crows were given a choice between an immediate small reward and a tool that would allow them to obtain a much larger reward later. Many chose the tool, suggesting that they could resist temptation in favor of a future benefit. This kind of self-control was long thought to be beyond the reach of any animal except humans.

Why did such intelligence evolve in birds with brains no larger than a walnut? Scientists point out that intelligence depends not on the absolute size of a brain but on its structure and the density of its neurons. A crow's brain, though small, is packed with neurons and is proportionally large for the bird's body. The example of the crow reminds us that intelligence can take many forms, and that we should be cautious about judging the minds of other creatures by human standards alone.`,
      textTH: `เมื่อคนนึกถึงสัตว์ฉลาด พวกเขามักนึกภาพโลมา ลิงชิมแปนซี หรือบางทีก็สุนัข นกแทบไม่อยู่ในความคิด อันที่จริง คำด่าว่า "สมองนก" (bird-brained) ก็สะท้อนความเชื่อเก่า ๆ ที่ว่านกไม่ฉลาดเอาเสียเลย แต่งานวิจัยในช่วงไม่กี่ทศวรรษที่ผ่านมาได้ทลายความเชื่อนี้ลง และไม่มีกรณีใดชัดเจนไปกว่ากรณีของอีกาและญาติ ๆ ของมัน วงศ์นกที่รู้จักกันในชื่อ corvid

อีกาได้แสดงความสามารถที่ครั้งหนึ่งนักวิทยาศาสตร์เคยเชื่อว่ามีเฉพาะในมนุษย์และลิงใหญ่ไม่กี่ชนิด ในการทดลองในห้องปฏิบัติการ พวกมันใช้และกระทั่งประดิษฐ์เครื่องมือ ด้วยการดัดลวดให้เป็นตะขอเพื่อเกี่ยวอาหารออกจากภาชนะแคบ ๆ พวกมันแก้ปริศนาหลายขั้นตอนได้ จดจำใบหน้ามนุษย์แต่ละคนได้ และจำได้ว่าใครเคยปฏิบัติกับมันดีหรือร้ายเมื่อหลายปีก่อน มีการสังเกตเห็นอีกาบางตัวทิ้งถั่วลงบนถนนเพื่อให้รถที่แล่นผ่านบดเปลือกให้แตก แล้วรออย่างอดทนจนรถว่างจึงค่อยลงไปเก็บอาหารของมัน

ที่น่าทึ่งที่สุดอาจเป็นเรื่องที่อีกาดูเหมือนจะสามารถวางแผนสำหรับอนาคตได้ ซึ่งเป็นทักษะที่ต้องอาศัยการจินตนาการถึงสถานการณ์ที่ยังไม่เกิดขึ้น ในการทดลองหนึ่ง อีกาถูกให้เลือกระหว่างรางวัลเล็ก ๆ ที่ได้ทันที กับเครื่องมือที่จะช่วยให้มันได้รางวัลที่ใหญ่กว่ามากในภายหลัง อีกาจำนวนมากเลือกเครื่องมือ ซึ่งบ่งชี้ว่าพวกมันอดกลั้นต่อสิ่งล่อใจเพื่อแลกกับผลประโยชน์ในอนาคตได้ การควบคุมตนเองเช่นนี้เคยถูกเชื่อกันมานานว่าเกินความสามารถของสัตว์ชนิดใดนอกจากมนุษย์

เหตุใดความฉลาดเช่นนี้จึงวิวัฒน์ขึ้นในนกที่มีสมองไม่ใหญ่ไปกว่าเมล็ดวอลนัท นักวิทยาศาสตร์ชี้ว่าความฉลาดไม่ได้ขึ้นอยู่กับขนาดสัมบูรณ์ของสมอง แต่ขึ้นอยู่กับโครงสร้างและความหนาแน่นของเซลล์ประสาท สมองของอีกาแม้จะเล็ก แต่ก็อัดแน่นไปด้วยเซลล์ประสาทและมีขนาดใหญ่เมื่อเทียบสัดส่วนกับร่างกายของมัน ตัวอย่างของอีกาเตือนใจเราว่าความฉลาดมีได้หลายรูปแบบ และเราควรระมัดระวังในการตัดสินจิตใจของสิ่งมีชีวิตอื่นด้วยมาตรฐานของมนุษย์เพียงอย่างเดียว`,
      questions: [
        { id: "RD2-01", tag: "Main Idea",
          question: "What is the main idea of the passage?",
          questionTH: "ใจความหลักของบทความคืออะไร?",
          choices: ["Crows are dangerous to drivers", "All birds are equally intelligent", "Crows are far more intelligent than once believed", "Crows are smarter than humans"],
          choicesTH: ["อีกาเป็นอันตรายต่อผู้ขับขี่", "นกทุกชนิดฉลาดเท่ากัน", "อีกาฉลาดกว่าที่เคยเชื่อกันมาก", "อีกาฉลาดกว่ามนุษย์"],
          answer: 2,
          explanation: "บทความหักล้างความเชื่อเก่าที่ว่านกไม่ฉลาด โดยยกหลักฐานความสามารถของอีกา ตัวเลือก 3 จึงเป็นใจความหลัก — ไม่ได้บอกว่านกทุกชนิดฉลาดเท่ากัน หรืออีกาฉลาดกว่ามนุษย์"
        },
        { id: "RD2-02", tag: "Vocabulary in Context",
          question: "The word \"shattered\" in paragraph 1 is closest in meaning to",
          questionTH: "คำว่า \"shattered\" ในย่อหน้าที่ 1 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["ignored", "explained", "confirmed", "destroyed"],
          choicesTH: ["เพิกเฉย", "อธิบาย", "ยืนยัน", "ทำลาย"],
          answer: 3,
          explanation: "'Research ... has shattered this assumption' = ผลวิจัยทำลายความเชื่อเก่าจนสิ้น <b>shatter = destroy</b> (ทุบทำลาย) — confirmed (ยืนยัน) ตรงข้าม"
        },
        { id: "RD2-03", tag: "Detail",
          question: "What is a corvid?",
          questionTH: "corvid คืออะไร?",
          choices: ["A family of birds including crows", "A laboratory tool", "A type of dolphin", "A kind of great ape"],
          choicesTH: ["วงศ์นกที่รวมอีกา", "เครื่องมือในห้องแล็บ", "โลมาชนิดหนึ่ง", "ลิงใหญ่ชนิดหนึ่ง"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'crows and their relatives, a family of birds known as corvids' — corvid คือวงศ์นกที่รวมอีกา"
        },
        { id: "RD2-04", tag: "Detail",
          question: "How have crows shown tool use in experiments?",
          questionTH: "อีกาแสดงการใช้เครื่องมือในการทดลองอย่างไร?",
          choices: ["By building nests", "By flying in formation", "By bending wire into hooks", "By singing complex songs"],
          choicesTH: ["ด้วยการสร้างรัง", "ด้วยการบินเป็นรูปขบวน", "ด้วยการดัดลวดให้เป็นตะขอ", "ด้วยการร้องเพลงที่ซับซ้อน"],
          answer: 2,
          explanation: "ย่อหน้า 2: 'bending wire into hooks to retrieve food from narrow containers' — ตอบตรงตัว เป็นตัวอย่างการทำและใช้เครื่องมือ"
        },
        { id: "RD2-05", tag: "Detail",
          question: "According to the passage, what can crows remember about humans?",
          questionTH: "ตามบทความ อีกาจดจำอะไรเกี่ยวกับมนุษย์ได้?",
          choices: ["Where they live", "Which people treated them well or badly", "What they eat", "Their names"],
          choicesTH: ["ว่าพวกเขาอาศัยอยู่ที่ไหน", "ว่าใครปฏิบัติกับมันดีหรือร้าย", "ว่าพวกเขากินอะไร", "ชื่อของพวกเขา"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'remember which people have treated them well or badly years earlier' — ตอบตรงตัว"
        },
        { id: "RD2-06", tag: "Detail",
          question: "In the future-planning experiment, what did many crows choose?",
          questionTH: "ในการทดลองวางแผนอนาคต อีกาจำนวนมากเลือกอะไร?",
          choices: ["To leave the experiment", "A tool leading to a larger later reward", "The immediate small reward", "Nothing at all"],
          choicesTH: ["ออกจากการทดลอง", "เครื่องมือที่นำไปสู่รางวัลใหญ่กว่าในภายหลัง", "รางวัลเล็กที่ได้ทันที", "ไม่เลือกอะไรเลย"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'Many chose the tool' แทนรางวัลเล็กทันที แสดงว่าอดใจรอผลประโยชน์ที่ใหญ่กว่าในอนาคตได้"
        },
        { id: "RD2-07", tag: "Vocabulary in Context",
          question: "The phrase \"resist temptation\" in paragraph 3 means",
          questionTH: "วลี \"resist temptation\" ในย่อหน้าที่ 3 หมายความว่าอย่างไร",
          choices: ["forget a memory", "avoid acting on an impulse", "share food with others", "give in to a desire"],
          choicesTH: ["ลืมความทรงจำ", "หักห้ามใจไม่ทำตามแรงกระตุ้น", "แบ่งอาหารให้ผู้อื่น", "ยอมแพ้ต่อความอยาก"],
          answer: 1,
          explanation: "บริบท: เลือกเครื่องมือแทนรางวัลเล็กทันที = อดกลั้นไม่คว้าของที่อยากได้ตรงหน้า <b>resist temptation = หักห้ามใจ ไม่ทำตามแรงกระตุ้น</b> — give in คือยอมแพ้ต่อสิ่งล่อใจ ซึ่งตรงข้าม"
        },
        { id: "RD2-08", tag: "Detail",
          question: "According to the passage, what does intelligence depend on?",
          questionTH: "ตามบทความ ความฉลาดขึ้นอยู่กับอะไร?",
          choices: ["The size of the body", "The structure and neuron density of the brain", "The color of the feathers", "The absolute size of the brain"],
          choicesTH: ["ขนาดของร่างกาย", "โครงสร้างและความหนาแน่นของเซลล์ประสาทในสมอง", "สีของขนนก", "ขนาดสัมบูรณ์ของสมอง"],
          answer: 1,
          explanation: "ย่อหน้า 4: 'intelligence depends not on the absolute size of a brain but on its structure and the density of its neurons' — เป็นจุดที่ตอบคำถาม 'ทำไมสมองเล็กแต่ฉลาด'"
        },
        { id: "RD2-09", tag: "Inference",
          question: "Why does the author mention that a crow's brain is \"no larger than a walnut\"?",
          questionTH: "เหตุใดผู้เขียนจึงกล่าวว่าสมองของอีกา \"ไม่ใหญ่กว่าวอลนัท\"?",
          choices: ["To prove crows are unintelligent", "To highlight how surprising their intelligence is", "To compare crows with apes", "To explain why crows eat nuts"],
          choicesTH: ["เพื่อพิสูจน์ว่าอีกาไม่ฉลาด", "เพื่อเน้นว่าความฉลาดของมันน่าทึ่งเพียงใด", "เพื่อเปรียบเทียบอีกากับลิง", "เพื่ออธิบายว่าทำไมอีกากินถั่ว"],
          answer: 1,
          explanation: "การเน้นว่าสมองเล็กเท่าวอลนัทแต่ฉลาดมาก เป็นการชี้ให้เห็นว่าน่าทึ่งเพียงใด และนำไปสู่คำอธิบายเรื่องโครงสร้างสมอง — ไม่ได้ใช้เพื่อพิสูจน์ว่านกโง่"
        },
        { id: "RD2-10", tag: "Inference",
          question: "What lesson does the author draw from the example of the crow?",
          questionTH: "ผู้เขียนสรุปบทเรียนใดจากตัวอย่างของอีกา?",
          choices: ["Humans are the only intelligent species", "Small animals are always smarter", "Intelligence can take many forms", "We should judge animals only by human standards"],
          choicesTH: ["มนุษย์เป็นสิ่งมีชีวิตเดียวที่ฉลาด", "สัตว์เล็กฉลาดกว่าเสมอ", "ความฉลาดมีได้หลายรูปแบบ", "เราควรตัดสินสัตว์ด้วยมาตรฐานมนุษย์เท่านั้น"],
          answer: 2,
          explanation: "ประโยคปิด: 'intelligence can take many forms, and ... we should be cautious about judging the minds of other creatures by human standards alone' — ตอบตรงกับบทเรียนที่ผู้เขียนสรุป"
        },
      ]
    },
    {
      title: "Passage 2: The History of Tea",
      text: `Tea is the most widely consumed beverage in the world after water, and its story stretches back thousands of years. According to Chinese legend, tea was discovered by accident around 2737 BCE, when leaves from a wild plant drifted into a pot of water being boiled by the emperor Shen Nong. Intrigued by the pleasant aroma, the emperor tasted the result and found it refreshing. Whether or not the legend is true, tea drinking was well established in China long before it was known anywhere else.

For centuries, China guarded the secrets of tea production carefully, and the plant remained almost unknown in the West. Tea first reached Europe in the seventeenth century, carried by Dutch and Portuguese traders, and it was at first an expensive luxury affordable only to the rich. In Britain, however, tea gradually became a national obsession. By the eighteenth century it was drunk by people of all classes, and the British developed elaborate customs surrounding its preparation and consumption.

Britain's growing thirst for tea had far-reaching and sometimes troubling consequences. Because all tea had to be imported from China, vast amounts of silver flowed out of Britain to pay for it. To balance this trade, British merchants began selling opium to China, a policy that eventually led to war between the two nations. Meanwhile, the British searched for a way to grow tea within their own empire, and in the nineteenth century they succeeded in establishing enormous tea plantations in India, breaking China's long monopoly.

Today tea is grown in many countries and enjoyed in countless forms, from the sweet, milky tea of India to the delicate green teas of Japan. It has shaped economies, inspired ceremonies, and brought people together for conversation across cultures and centuries. Few drinks can claim such a rich and complicated history, and fewer still continue to play so central a role in daily life around the globe.`,
      textTH: `ชาเป็นเครื่องดื่มที่ผู้คนบริโภคกันแพร่หลายที่สุดในโลกรองจากน้ำ และเรื่องราวของมันย้อนกลับไปหลายพันปี ตามตำนานจีน ชาถูกค้นพบโดยบังเอิญราว 2737 ปีก่อนคริสตกาล เมื่อใบของพืชป่าชนิดหนึ่งปลิวตกลงในหม้อน้ำที่จักรพรรดิเสินหนงกำลังต้มอยู่ จักรพรรดิทรงสนพระทัยในกลิ่นหอมรื่นรมย์จึงทรงลองชิม และพบว่ามันให้ความสดชื่น ไม่ว่าตำนานจะจริงหรือไม่ การดื่มชาก็หยั่งรากมั่นคงในจีนมานานก่อนที่จะเป็นที่รู้จักในที่อื่นใด

เป็นเวลาหลายศตวรรษที่จีนหวงแหนความลับในการผลิตชาอย่างระมัดระวัง และพืชชนิดนี้แทบไม่เป็นที่รู้จักในโลกตะวันตก ชาเดินทางไปถึงยุโรปเป็นครั้งแรกในศตวรรษที่ 17 โดยพ่อค้าชาวดัตช์และโปรตุเกสเป็นผู้นำเข้าไป และในตอนแรกมันเป็นของฟุ่มเฟือยราคาแพงที่มีเพียงคนรวยเท่านั้นที่ซื้อหาได้ อย่างไรก็ตาม ในอังกฤษ ชาค่อย ๆ กลายเป็นความคลั่งไคล้ของคนทั้งชาติ พอถึงศตวรรษที่ 18 ผู้คนทุกชนชั้นก็ดื่มชากัน และชาวอังกฤษได้พัฒนาธรรมเนียมอันประณีตเกี่ยวกับการชงและการดื่มขึ้นมา

ความกระหายชาที่เพิ่มขึ้นของอังกฤษส่งผลกระทบกว้างไกลและบางครั้งก็น่าวิตก เนื่องจากชาทั้งหมดต้องนำเข้าจากจีน เงิน (โลหะ) จำนวนมหาศาลจึงไหลออกจากอังกฤษเพื่อจ่ายค่าชา เพื่อถ่วงดุลการค้านี้ พ่อค้าอังกฤษจึงเริ่มขายฝิ่นให้จีน ซึ่งเป็นนโยบายที่นำไปสู่สงครามระหว่างสองชาติในที่สุด ขณะเดียวกัน อังกฤษก็เสาะหาวิธีปลูกชาภายในจักรวรรดิของตน และในศตวรรษที่ 19 ก็ประสบความสำเร็จในการตั้งไร่ชาขนาดมหึมาในอินเดีย ทำลายการผูกขาดอันยาวนานของจีนลง

ทุกวันนี้ชาถูกปลูกในหลายประเทศและดื่มกันในรูปแบบนับไม่ถ้วน ตั้งแต่ชานมรสหวานของอินเดียไปจนถึงชาเขียวรสละมุนของญี่ปุ่น ชาได้หล่อหลอมเศรษฐกิจ เป็นแรงบันดาลใจให้เกิดพิธีกรรม และนำผู้คนมาสนทนากันข้ามวัฒนธรรมและกาลเวลา มีเครื่องดื่มน้อยชนิดที่อ้างได้ว่ามีประวัติศาสตร์อันรุ่มรวยและซับซ้อนเช่นนี้ และยิ่งน้อยกว่านั้นที่ยังคงมีบทบาทสำคัญในชีวิตประจำวันของผู้คนทั่วโลก`,
      questions: [
        { id: "RD2-11", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["Why green tea is healthier than black tea", "The history of tea and its global impact", "How to brew the perfect cup of tea", "The opium trade between Britain and China"],
          choicesTH: ["เหตุใดชาเขียวดีต่อสุขภาพกว่าชาดำ", "ประวัติของชาและผลกระทบระดับโลก", "วิธีชงชาให้สมบูรณ์แบบ", "การค้าฝิ่นระหว่างอังกฤษกับจีน"],
          answer: 1,
          explanation: "บทความเล่าประวัติชาตั้งแต่กำเนิดในจีนจนแพร่ไปทั่วโลกพร้อมผลกระทบ ตัวเลือก 2 จึงครอบคลุม — การค้าฝิ่นเป็นเพียงตอนหนึ่งของเรื่อง ไม่ใช่ทั้งหมด"
        },
        { id: "RD2-12", tag: "Detail",
          question: "According to the Chinese legend, how was tea discovered?",
          questionTH: "ตามตำนานจีน ชาถูกค้นพบได้อย่างไร?",
          choices: ["A farmer planted it on purpose", "Traders brought it from Europe", "A doctor invented it as medicine", "Leaves fell into the emperor's boiling water by accident"],
          choicesTH: ["ชาวนาปลูกมันโดยตั้งใจ", "พ่อค้านำมันมาจากยุโรป", "หมอคิดค้นมันขึ้นเป็นยา", "ใบไม้ตกลงในน้ำเดือดของจักรพรรดิโดยบังเอิญ"],
          answer: 3,
          explanation: "ย่อหน้า 1: ใบไม้ลอยตกลงในหม้อน้ำเดือดของจักรพรรดิ Shen Nong 'by accident' — ตอบตรงตัว"
        },
        { id: "RD2-13", tag: "Vocabulary in Context",
          question: "The word \"guarded\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"guarded\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["protected", "forgot", "sold", "shared openly"],
          choicesTH: ["ปกป้อง หวงแหน", "ลืม", "ขาย", "แบ่งปันอย่างเปิดเผย"],
          answer: 0,
          explanation: "'China guarded the secrets of tea production carefully' = จีนหวงแหนความลับการผลิตชาอย่างระมัดระวัง <b>guard = protect</b> (ปกป้อง คุ้มครอง) — shared openly ตรงข้าม"
        },
        { id: "RD2-14", tag: "Detail",
          question: "When did tea first reach Europe?",
          questionTH: "ชาเดินทางไปถึงยุโรปครั้งแรกเมื่อใด?",
          choices: ["In the fifteenth century", "Around 2737 BCE", "In the nineteenth century", "In the seventeenth century"],
          choicesTH: ["ในศตวรรษที่ 15", "ราว 2737 ปีก่อนคริสตกาล", "ในศตวรรษที่ 19", "ในศตวรรษที่ 17"],
          answer: 3,
          explanation: "ย่อหน้า 2: 'Tea first reached Europe in the seventeenth century' — ระวังสับสนกับ 2737 BCE ซึ่งเป็นปีที่ค้นพบชาในจีน"
        },
        { id: "RD2-15", tag: "Detail",
          question: "Who first carried tea to Europe?",
          questionTH: "ใครนำชาไปยุโรปเป็นกลุ่มแรก?",
          choices: ["British soldiers", "Dutch and Portuguese traders", "Indian farmers", "Japanese monks"],
          choicesTH: ["ทหารอังกฤษ", "พ่อค้าชาวดัตช์และโปรตุเกส", "ชาวนาอินเดีย", "พระญี่ปุ่น"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'carried by Dutch and Portuguese traders' — ตอบตรงตัว"
        },
        { id: "RD2-16", tag: "Detail",
          question: "Why did silver flow out of Britain?",
          questionTH: "เหตุใดเงิน (โลหะ) จึงไหลออกจากอังกฤษ?",
          choices: ["To buy opium from India", "To fund tea plantations", "To pay British workers", "To pay for imported tea from China"],
          choicesTH: ["เพื่อซื้อฝิ่นจากอินเดีย", "เพื่อสนับสนุนไร่ชา", "เพื่อจ่ายค่าจ้างคนงานอังกฤษ", "เพื่อจ่ายค่าชานำเข้าจากจีน"],
          answer: 3,
          explanation: "ย่อหน้า 3: 'all tea had to be imported from China, vast amounts of silver flowed out of Britain to pay for it' — เงินไหลออกเพื่อจ่ายค่าชานำเข้า"
        },
        { id: "RD2-17", tag: "Detail",
          question: "How did British merchants try to balance the tea trade?",
          questionTH: "พ่อค้าอังกฤษพยายามถ่วงดุลการค้าชาอย่างไร?",
          choices: ["By growing tea in Britain", "By selling opium to China", "By reducing tea consumption", "By mining more silver"],
          choicesTH: ["ด้วยการปลูกชาในอังกฤษ", "ด้วยการขายฝิ่นให้จีน", "ด้วยการลดการบริโภคชา", "ด้วยการขุดแร่เงินเพิ่ม"],
          answer: 1,
          explanation: "ย่อหน้า 3: 'British merchants began selling opium to China' เพื่อถ่วงดุลการค้า ซึ่งนำไปสู่สงครามในที่สุด"
        },
        { id: "RD2-18", tag: "Vocabulary in Context",
          question: "The word \"monopoly\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"monopoly\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["complete control of a market", "a type of plantation", "a friendly partnership", "a kind of tax"],
          choicesTH: ["การควบคุมตลาดเบ็ดเสร็จ การผูกขาด", "ไร่ชนิดหนึ่ง", "การเป็นหุ้นส่วนฉันมิตร", "ภาษีชนิดหนึ่ง"],
          answer: 0,
          explanation: "'breaking China's long monopoly' บริบทคือจีนเคยเป็นแหล่งผลิตชาแต่ผู้เดียวจนอังกฤษปลูกได้เองในอินเดีย <b>monopoly = การผูกขาด/ครองตลาดแต่ผู้เดียว</b>"
        },
        { id: "RD2-19", tag: "Detail",
          question: "Where did the British establish large tea plantations in the nineteenth century?",
          questionTH: "อังกฤษก่อตั้งไร่ชาขนาดใหญ่ในศตวรรษที่ 19 ที่ใด?",
          choices: ["India", "Portugal", "China", "Japan"],
          choicesTH: ["อินเดีย", "โปรตุเกส", "จีน", "ญี่ปุ่น"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'establishing enormous tea plantations in India, breaking China's long monopoly' — ตอบตรงตัว"
        },
        { id: "RD2-20", tag: "Inference",
          question: "What does the author suggest about tea in the final paragraph?",
          questionTH: "ผู้เขียนสื่ออะไรเกี่ยวกับชาในย่อหน้าสุดท้าย?",
          choices: ["It is losing popularity worldwide", "It should only be grown in China", "It has had a uniquely rich history and remains important today", "It is too complicated to enjoy"],
          choicesTH: ["มันกำลังเสื่อมความนิยมทั่วโลก", "ควรปลูกในจีนเท่านั้น", "มันมีประวัติที่รุ่มรวยเป็นเอกลักษณ์และยังสำคัญถึงปัจจุบัน", "มันซับซ้อนเกินกว่าจะเพลิดเพลิน"],
          answer: 2,
          explanation: "ย่อหน้าสุดท้าย: 'Few drinks can claim such a rich and complicated history, and fewer still continue to play so central a role in daily life' — เน้นว่าประวัติชายิ่งใหญ่และยังสำคัญถึงปัจจุบัน"
        },
      ]
    },
    {
      title: "Passage 3: Light Pollution",
      text: `For nearly all of human history, the night sky was a familiar presence, ablaze with thousands of stars visible to the naked eye. Today, most people living in cities can see only a handful of the brightest. The cause is light pollution: the excessive and misdirected artificial light that brightens the night sky and washes out the stars. Though less familiar than other forms of pollution, it has spread rapidly with the growth of cities and now affects most of the world's population.

Light pollution is more than an inconvenience for astronomers. It disrupts the natural rhythms of countless living things. Many animals depend on the cycle of day and night to regulate their behavior, and artificial light can confuse them with serious consequences. Newly hatched sea turtles, which instinctively crawl toward the brightest horizon, are drawn away from the ocean and toward streetlights, where many die. Migrating birds, navigating by the stars, become disoriented by bright city lights and collide with buildings in great numbers. Even insects, drawn fatally to lamps, suffer population declines that ripple through the food chain.

Humans are affected too. Exposure to artificial light at night can interfere with the body's production of melatonin, a hormone that helps regulate sleep. Researchers have linked this disruption to poorer sleep quality and a range of health problems. There is something to mourn, as well, in the simple loss of the stars. For our ancestors, the night sky was a source of wonder, a guide for navigation, and an inspiration for art, religion, and science. A child growing up under a glowing orange sky may never experience that sense of awe.

The encouraging news is that light pollution is one of the easiest environmental problems to reverse. Unlike pollutants that linger in the air or water for years, light vanishes the instant it is switched off. Simple measures — shielding lamps so they shine downward, using warmer-colored bulbs, and turning off unnecessary lights — can dramatically darken the sky without leaving anyone in danger. Some communities that have adopted such measures have been delighted to rediscover stars their residents had never seen.`,
      textTH: `เกือบตลอดประวัติศาสตร์มนุษย์ ท้องฟ้ายามค่ำคืนเป็นสิ่งที่คุ้นเคย เปล่งประกายด้วยดวงดาวนับพันที่มองเห็นได้ด้วยตาเปล่า ทุกวันนี้ คนส่วนใหญ่ที่อาศัยอยู่ในเมืองมองเห็นได้เพียงดาวที่สว่างที่สุดไม่กี่ดวง สาเหตุคือมลพิษทางแสง นั่นคือแสงประดิษฐ์ที่มากเกินไปและส่องผิดทิศ ซึ่งทำให้ท้องฟ้ายามค่ำสว่างขึ้นและกลบแสงดาวจนหาย แม้จะไม่คุ้นเคยเท่ามลพิษรูปแบบอื่น แต่มันก็แพร่กระจายอย่างรวดเร็วไปพร้อมกับการเติบโตของเมือง และปัจจุบันส่งผลต่อประชากรโลกส่วนใหญ่

มลพิษทางแสงเป็นมากกว่าความไม่สะดวกสำหรับนักดาราศาสตร์ มันรบกวนจังหวะตามธรรมชาติของสิ่งมีชีวิตนับไม่ถ้วน สัตว์หลายชนิดพึ่งพาวงจรกลางวัน-กลางคืนในการกำกับพฤติกรรมของมัน และแสงประดิษฐ์อาจทำให้พวกมันสับสนจนเกิดผลร้ายแรง ลูกเต่าทะเลที่เพิ่งฟักออกมา ซึ่งโดยสัญชาตญาณจะคลานเข้าหาขอบฟ้าที่สว่างที่สุด กลับถูกล่อให้ห่างจากทะเลและมุ่งไปยังไฟถนน ที่ซึ่งหลายตัวต้องตาย นกอพยพที่นำทางด้วยดวงดาวก็หลงทิศเพราะแสงไฟเมืองที่จ้า และชนเข้ากับอาคารเป็นจำนวนมาก แม้แต่แมลงที่ถูกแสงตะเกียงล่อจนตาย ก็ประสบกับจำนวนประชากรที่ลดลงซึ่งส่งผลกระเพื่อมไปทั่วห่วงโซ่อาหาร

มนุษย์ก็ได้รับผลกระทบเช่นกัน การได้รับแสงประดิษฐ์ในเวลากลางคืนสามารถรบกวนการผลิตเมลาโทนินของร่างกาย ซึ่งเป็นฮอร์โมนที่ช่วยกำกับการนอนหลับ นักวิจัยได้เชื่อมโยงการรบกวนนี้กับคุณภาพการนอนที่แย่ลงและปัญหาสุขภาพหลายอย่าง อีกทั้งยังมีสิ่งที่น่าเสียดายในการสูญเสียดวงดาวไปเฉย ๆ ด้วย สำหรับบรรพบุรุษของเรา ท้องฟ้ายามค่ำคือบ่อเกิดของความพิศวง เป็นเข็มทิศนำทาง และเป็นแรงบันดาลใจให้แก่ศิลปะ ศาสนา และวิทยาศาสตร์ เด็กที่เติบโตขึ้นใต้ท้องฟ้าสีส้มเรืองแสงอาจไม่มีวันได้สัมผัสความรู้สึกตื่นตาตื่นใจเช่นนั้นเลย

ข่าวดีคือมลพิษทางแสงเป็นหนึ่งในปัญหาสิ่งแวดล้อมที่แก้ให้กลับคืนได้ง่ายที่สุด ต่างจากมลพิษที่ตกค้างอยู่ในอากาศหรือน้ำเป็นเวลาหลายปี แสงจะหายไปทันทีที่ปิดสวิตช์ มาตรการง่าย ๆ — อย่างการครอบโคมไฟให้ส่องลงด้านล่าง การใช้หลอดไฟโทนสีอุ่นขึ้น และการปิดไฟที่ไม่จำเป็น — สามารถทำให้ท้องฟ้ามืดลงได้อย่างมากโดยไม่ทำให้ใครตกอยู่ในอันตราย บางชุมชนที่นำมาตรการเหล่านี้มาใช้ต่างยินดีที่ได้พบดวงดาวที่คนในชุมชนไม่เคยเห็นมาก่อนอีกครั้ง`,
      questions: [
        { id: "RD2-21", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["How to become an astronomer", "The history of streetlights", "Why sea turtles are endangered", "The problem of light pollution and how to address it"],
          choicesTH: ["วิธีเป็นนักดาราศาสตร์", "ประวัติของไฟถนน", "เหตุใดเต่าทะเลจึงใกล้สูญพันธุ์", "ปัญหามลพิษทางแสงและวิธีจัดการ"],
          answer: 3,
          explanation: "บทความนิยามมลพิษทางแสง ผลกระทบต่อสัตว์และมนุษย์ และวิธีแก้ ตัวเลือก 4 จึงครอบคลุม — เต่าทะเลและดาราศาสตร์เป็นเพียงตัวอย่างประกอบ"
        },
        { id: "RD2-22", tag: "Detail",
          question: "What is light pollution?",
          questionTH: "มลพิษทางแสงคืออะไร?",
          choices: ["Excessive and misdirected artificial light", "Smoke from factories", "Chemicals in the water", "Noise from city traffic"],
          choicesTH: ["แสงประดิษฐ์ที่มากเกินและส่องผิดทิศ", "ควันจากโรงงาน", "สารเคมีในน้ำ", "เสียงจากการจราจรในเมือง"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'the excessive and misdirected artificial light that brightens the night sky and washes out the stars' — ตอบตรงตัว"
        },
        { id: "RD2-23", tag: "Detail",
          question: "Why are newly hatched sea turtles harmed by light pollution?",
          questionTH: "เหตุใดลูกเต่าทะเลที่เพิ่งฟักจึงได้รับอันตรายจากมลพิษทางแสง?",
          choices: ["They crawl toward streetlights instead of the ocean", "The light makes them too hot", "They cannot find food in the dark", "The light attracts predators"],
          choicesTH: ["มันคลานเข้าหาไฟถนนแทนที่จะไปทะเล", "แสงทำให้มันร้อนเกินไป", "มันหาอาหารในความมืดไม่ได้", "แสงดึงดูดผู้ล่า"],
          answer: 0,
          explanation: "ย่อหน้า 2: เต่าเดินเข้าหาขอบฟ้าที่สว่างที่สุดโดยสัญชาตญาณ แต่ถูกไฟถนนล่อให้ห่างจากทะเล 'where many die' — ตอบตรงตัว"
        },
        { id: "RD2-24", tag: "Detail",
          question: "How does light pollution affect migrating birds?",
          questionTH: "มลพิษทางแสงส่งผลต่อนกอพยพอย่างไร?",
          choices: ["It helps them find their way", "It disorients them and causes collisions with buildings", "It increases their numbers", "It keeps them warm at night"],
          choicesTH: ["ช่วยให้มันหาทางได้", "ทำให้มันหลงทิศและชนเข้ากับอาคาร", "ทำให้จำนวนของมันเพิ่มขึ้น", "ทำให้มันอบอุ่นในเวลากลางคืน"],
          answer: 1,
          explanation: "ย่อหน้า 2: นกอพยพนำทางด้วยดาว 'become disoriented by bright city lights and collide with buildings' — ตอบตรงตัว"
        },
        { id: "RD2-25", tag: "Vocabulary in Context",
          question: "The word \"disoriented\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"disoriented\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["frightened", "well rested", "confused about direction", "extremely tired"],
          choicesTH: ["หวาดกลัว", "พักผ่อนเต็มที่", "สับสนเรื่องทิศทาง หลงทิศ", "เหนื่อยล้าอย่างมาก"],
          answer: 2,
          explanation: "บริบท: นกที่นำทางด้วยดาวเจอแสงเมืองแล้วชนตึก <b>disoriented = สับสนทิศทาง หลงทิศ</b> — ไม่ใช่เหนื่อยหรือกลัว แต่คือหาทิศไม่ถูก"
        },
        { id: "RD2-26", tag: "Detail",
          question: "What hormone does artificial light at night interfere with?",
          questionTH: "แสงประดิษฐ์ตอนกลางคืนรบกวนฮอร์โมนใด?",
          choices: ["Melatonin", "Dopamine", "Adrenaline", "Insulin"],
          choicesTH: ["เมลาโทนิน", "โดพามีน", "อะดรีนาลิน", "อินซูลิน"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'interfere with the body's production of melatonin, a hormone that helps regulate sleep' — ตอบตรงตัว"
        },
        { id: "RD2-27", tag: "Inference",
          question: "Why does the author mention art, religion, and science in paragraph 3?",
          questionTH: "เหตุใดผู้เขียนจึงกล่าวถึงศิลปะ ศาสนา และวิทยาศาสตร์ในย่อหน้าที่ 3?",
          choices: ["To explain how stars are formed", "To argue that science is more important than art", "To show the night sky has inspired human culture", "To describe ancient navigation methods only"],
          choicesTH: ["เพื่ออธิบายว่าดาวเกิดขึ้นอย่างไร", "เพื่อโต้แย้งว่าวิทยาศาสตร์สำคัญกว่าศิลปะ", "เพื่อแสดงว่าท้องฟ้ายามค่ำเป็นแรงบันดาลใจต่อวัฒนธรรมมนุษย์", "เพื่อบรรยายวิธีนำทางโบราณเท่านั้น"],
          answer: 2,
          explanation: "ผู้เขียนยกศิลปะ ศาสนา และวิทยาศาสตร์เป็นตัวอย่างว่าท้องฟ้ายามค่ำเคยเป็นแรงบันดาลใจต่อวัฒนธรรมมนุษย์ เพื่อชี้ให้เห็นสิ่งที่จะสูญเสียไป — ไม่ได้เปรียบเทียบว่าอะไรสำคัญกว่า"
        },
        { id: "RD2-28", tag: "Detail",
          question: "According to the passage, why is light pollution relatively easy to reverse?",
          questionTH: "ตามบทความ เหตุใดมลพิษทางแสงจึงแก้ไขให้กลับคืนได้ค่อนข้างง่าย?",
          choices: ["Light disappears the instant it is switched off", "It is not really harmful", "Governments have already solved it", "It affects only astronomers"],
          choicesTH: ["แสงหายไปทันทีที่ปิดสวิตช์", "มันไม่ได้เป็นอันตรายจริง ๆ", "รัฐบาลแก้ไขไปแล้ว", "มันส่งผลต่อนักดาราศาสตร์เท่านั้น"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'Unlike pollutants that linger ... light vanishes the instant it is switched off' — ต่างจากมลพิษอื่นที่ตกค้างนาน จึงแก้ได้ง่ายกว่า"
        },
        { id: "RD2-29", tag: "Detail",
          question: "Which is a suggested measure to reduce light pollution?",
          questionTH: "ข้อใดเป็นมาตรการที่แนะนำเพื่อลดมลพิษทางแสง?",
          choices: ["Removing all streetlights", "Shielding lamps so they shine downward", "Using brighter bulbs", "Leaving all lights on at night"],
          choicesTH: ["รื้อไฟถนนออกทั้งหมด", "ครอบโคมไฟให้ส่องลงด้านล่าง", "ใช้หลอดไฟที่สว่างกว่า", "เปิดไฟทุกดวงตลอดคืน"],
          answer: 1,
          explanation: "ย่อหน้า 4: 'shielding lamps so they shine downward, using warmer-colored bulbs, and turning off unnecessary lights' — ตอบตรงตัว ส่วน 'removing all streetlights' เกินจริง (บทบอกว่าทำได้ 'without leaving anyone in danger')"
        },
        { id: "RD2-30", tag: "Inference",
          question: "The author's overall tone toward solving light pollution is",
          questionTH: "น้ำเสียงโดยรวมของผู้เขียนต่อการแก้ปัญหามลพิษทางแสงเป็นอย่างไร",
          choices: ["pessimistic", "indifferent", "angry", "hopeful"],
          choicesTH: ["มองโลกในแง่ร้าย", "เฉยเมย", "โกรธ", "มีความหวัง"],
          answer: 3,
          explanation: "ย่อหน้าสุดท้ายเปิดด้วย 'The encouraging news' และจบด้วยชุมชนที่ 'delighted to rediscover stars' น้ำเสียงจึงเป็นไปในทางมีความหวัง"
        },
      ]
    },
    {
      title: "Passage 4: The Placebo Effect",
      text: `One of the strangest phenomena in medicine is the placebo effect: the tendency of patients to feel better after receiving a treatment that has no active ingredient whatsoever. A placebo might be a sugar pill, an injection of harmless salt water, or any other "fake" treatment. Logically, such a treatment should do nothing at all. Yet again and again, studies have found that a significant number of patients report genuine improvement after taking one, sometimes even when they are told that what they are receiving is only a placebo.

The effect is real and measurable, but its cause has long puzzled scientists. The leading explanation involves expectation. When a patient believes a treatment will help, the brain appears to respond as though it actually is helping. Brain scans have shown that taking a placebo can trigger the release of the body's own natural painkillers. In other words, the patient's belief sets off a chain of physical events that produces a real biological effect. Expectation, it seems, can become a kind of medicine in itself.

The placebo effect creates a serious challenge for medical researchers. To prove that a new drug truly works, scientists must show that it performs better than a placebo. For this reason, the most reliable medical trials are designed so that some patients receive the real drug while others, without knowing it, receive a fake. If the patients taking the real drug improve no more than those taking the placebo, the drug is judged ineffective, no matter how promising it once seemed.

Far from being a mere nuisance, the placebo effect reveals something profound about the relationship between mind and body. It shows that they are not separate systems but are deeply intertwined, each capable of influencing the other. Some doctors argue that the warmth and confidence of a caring physician can itself produce measurable benefits, almost like a placebo. Understanding this connection may one day allow medicine to harness the healing power of the mind more deliberately than it does today.`,
      textTH: `หนึ่งในปรากฏการณ์ที่แปลกประหลาดที่สุดในวงการแพทย์คือปรากฏการณ์ยาหลอก (placebo effect) นั่นคือแนวโน้มที่ผู้ป่วยจะรู้สึกดีขึ้นหลังได้รับการรักษาที่ไม่มีตัวยาออกฤทธิ์ใด ๆ เลย ยาหลอกอาจเป็นเม็ดน้ำตาล การฉีดน้ำเกลือที่ไม่เป็นอันตราย หรือการรักษา "ปลอม" รูปแบบอื่น ๆ ตามหลักเหตุผล การรักษาเช่นนี้ไม่ควรให้ผลใด ๆ เลย ทว่าครั้งแล้วครั้งเล่า งานวิจัยกลับพบว่าผู้ป่วยจำนวนมากรายงานว่าอาการดีขึ้นจริงหลังได้รับมัน บางครั้งแม้กระทั่งเมื่อถูกบอกว่าสิ่งที่ได้รับเป็นเพียงยาหลอก

ปรากฏการณ์นี้มีอยู่จริงและวัดได้ แต่สาเหตุของมันสร้างความงุนงงให้นักวิทยาศาสตร์มานาน คำอธิบายหลักเกี่ยวข้องกับความคาดหวัง เมื่อผู้ป่วยเชื่อว่าการรักษาจะช่วยได้ สมองดูเหมือนจะตอบสนองราวกับว่ามันกำลังช่วยอยู่จริง ๆ การสแกนสมองแสดงให้เห็นว่าการกินยาหลอกสามารถกระตุ้นการหลั่งสารแก้ปวดตามธรรมชาติของร่างกายเองได้ กล่าวอีกนัยหนึ่ง ความเชื่อของผู้ป่วยจุดชนวนให้เกิดปฏิกิริยาทางกายต่อเนื่องที่ก่อให้เกิดผลทางชีววิทยาที่แท้จริง ดูเหมือนว่าความคาดหวังจะกลายเป็นยาชนิดหนึ่งได้ในตัวเอง

ปรากฏการณ์ยาหลอกสร้างความท้าทายอย่างยิ่งให้แก่นักวิจัยทางการแพทย์ เพื่อพิสูจน์ว่ายาตัวใหม่ได้ผลจริง นักวิทยาศาสตร์ต้องแสดงให้เห็นว่ามันให้ผลดีกว่ายาหลอก ด้วยเหตุนี้ การทดลองทางการแพทย์ที่น่าเชื่อถือที่สุดจึงถูกออกแบบให้ผู้ป่วยบางคนได้รับยาจริง ขณะที่อีกบางคนได้รับยาปลอมโดยไม่รู้ตัว หากผู้ป่วยที่ได้ยาจริงมีอาการดีขึ้นไม่มากไปกว่าผู้ที่ได้ยาหลอก ยานั้นก็จะถูกตัดสินว่าไม่ได้ผล ไม่ว่ามันจะเคยดูมีแววเพียงใดก็ตาม

ปรากฏการณ์ยาหลอกไม่ได้เป็นเพียงเรื่องน่ารำคาญ แต่กลับเผยให้เห็นบางสิ่งที่ลึกซึ้งเกี่ยวกับความสัมพันธ์ระหว่างจิตกับกาย มันแสดงว่าทั้งสองไม่ใช่ระบบที่แยกจากกัน แต่เกี่ยวพันกันอย่างลึกซึ้ง โดยแต่ละฝ่ายสามารถส่งอิทธิพลต่อกันได้ แพทย์บางคนแย้งว่าความอบอุ่นและความเชื่อมั่นของหมอที่ใส่ใจผู้ป่วยก็สามารถก่อให้เกิดผลดีที่วัดได้ในตัวมันเอง แทบจะเหมือนยาหลอก การเข้าใจความเชื่อมโยงนี้อาจทำให้สักวันหนึ่งการแพทย์สามารถนำพลังเยียวยาของจิตใจมาใช้อย่างตั้งใจได้มากกว่าที่เป็นอยู่ในปัจจุบัน`,
      questions: [
        { id: "RD2-31", tag: "Main Idea",
          question: "What is the main topic of the passage?",
          questionTH: "หัวข้อหลักของบทความคืออะไร?",
          choices: ["The placebo effect and what it reveals about mind and body", "The dangers of fake medicine", "How to design a sugar pill", "Why new drugs are expensive"],
          choicesTH: ["ปรากฏการณ์ยาหลอกและสิ่งที่มันเผยเกี่ยวกับจิตและกาย", "อันตรายของยาปลอม", "วิธีออกแบบยาหลอกน้ำตาล", "เหตุใดยาใหม่จึงแพง"],
          answer: 0,
          explanation: "บทความอธิบายปรากฏการณ์ยาหลอก สาเหตุ ผลต่อการวิจัย และความหมายเรื่องความสัมพันธ์ระหว่างจิตกับกาย ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD2-32", tag: "Detail",
          question: "What is a placebo?",
          questionTH: "ยาหลอก (placebo) คืออะไร?",
          choices: ["A brain scan", "A powerful new drug", "A treatment with no active ingredient", "A type of surgery"],
          choicesTH: ["การสแกนสมอง", "ยาใหม่ที่ออกฤทธิ์แรง", "การรักษาที่ไม่มีตัวยาออกฤทธิ์", "การผ่าตัดชนิดหนึ่ง"],
          answer: 2,
          explanation: "ย่อหน้า 1: 'a treatment that has no active ingredient whatsoever' เช่น ยาน้ำตาลหรือน้ำเกลือ — ตอบตรงตัว"
        },
        { id: "RD2-33", tag: "Detail",
          question: "According to the passage, what is the leading explanation for the placebo effect?",
          questionTH: "ตามบทความ คำอธิบายหลักของปรากฏการณ์ยาหลอกคืออะไร?",
          choices: ["Expectation", "Random chance", "The active ingredient", "Genetic differences"],
          choicesTH: ["ความคาดหวัง", "ความบังเอิญสุ่ม", "ตัวยาออกฤทธิ์", "ความแตกต่างทางพันธุกรรม"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'The leading explanation involves expectation' — ความเชื่อ/ความคาดหวังของผู้ป่วยเป็นกุญแจสำคัญ"
        },
        { id: "RD2-34", tag: "Detail",
          question: "What have brain scans shown about taking a placebo?",
          questionTH: "การสแกนสมองแสดงอะไรเกี่ยวกับการกินยาหลอก?",
          choices: ["It has no effect on the brain", "It triggers the release of natural painkillers", "It lowers body temperature", "It damages the brain"],
          choicesTH: ["มันไม่มีผลต่อสมอง", "มันกระตุ้นการหลั่งสารแก้ปวดตามธรรมชาติ", "มันลดอุณหภูมิร่างกาย", "มันทำลายสมอง"],
          answer: 1,
          explanation: "ย่อหน้า 2: 'taking a placebo can trigger the release of the body's own natural painkillers' — แสดงว่าความเชื่อก่อให้เกิดผลทางชีววิทยาจริง"
        },
        { id: "RD2-35", tag: "Vocabulary in Context",
          question: "The word \"puzzled\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"puzzled\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["satisfied", "convinced", "bored", "confused"],
          choicesTH: ["พึงพอใจ", "เชื่อมั่น", "เบื่อ", "งุนงง สับสน"],
          answer: 3,
          explanation: "'its cause has long puzzled scientists' = สาเหตุทำให้นักวิทยาศาสตร์งุนงงมานาน <b>puzzle = ทำให้สับสน งุนงง</b> — convinced/satisfied สื่อว่าเข้าใจแล้ว ซึ่งตรงข้าม"
        },
        { id: "RD2-36", tag: "Detail",
          question: "How do the most reliable medical trials test a new drug?",
          questionTH: "การทดลองทางการแพทย์ที่น่าเชื่อถือที่สุดทดสอบยาใหม่อย่างไร?",
          choices: ["By asking doctors their opinion", "By giving everyone the real drug", "By comparing patients on the real drug with those on a placebo", "By using only healthy volunteers"],
          choicesTH: ["ด้วยการถามความเห็นแพทย์", "ด้วยการให้ทุกคนได้ยาจริง", "ด้วยการเปรียบเทียบผู้ป่วยที่ได้ยาจริงกับผู้ที่ได้ยาหลอก", "ด้วยการใช้อาสาสมัครที่สุขภาพดีเท่านั้น"],
          answer: 2,
          explanation: "ย่อหน้า 3: บางคนได้ยาจริง บางคนได้ยาหลอกโดยไม่รู้ตัว แล้วเปรียบเทียบผล — ตอบตรงตัว"
        },
        { id: "RD2-37", tag: "Detail",
          question: "When is a new drug judged ineffective?",
          questionTH: "ยาใหม่ถูกตัดสินว่าไม่ได้ผลเมื่อใด?",
          choices: ["If it has any side effects", "If doctors dislike it", "If it costs too much", "If patients on it improve no more than those on a placebo"],
          choicesTH: ["ถ้ามันมีผลข้างเคียงใด ๆ", "ถ้าแพทย์ไม่ชอบมัน", "ถ้ามันแพงเกินไป", "ถ้าผู้ป่วยที่ใช้ยาไม่ได้ดีขึ้นมากกว่าผู้ที่ได้ยาหลอก"],
          answer: 3,
          explanation: "ย่อหน้า 3: 'If the patients taking the real drug improve no more than those taking the placebo, the drug is judged ineffective' — ตอบตรงตัว"
        },
        { id: "RD2-38", tag: "Vocabulary in Context",
          question: "The word \"intertwined\" in paragraph 4 is closest in meaning to",
          questionTH: "คำว่า \"intertwined\" ในย่อหน้าที่ 4 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["rarely used", "easily broken", "completely separate", "closely connected"],
          choicesTH: ["ใช้น้อยครั้ง", "แตกหักง่าย", "แยกจากกันสิ้นเชิง", "เชื่อมโยงกันแน่น"],
          answer: 3,
          explanation: "'not separate systems but are deeply intertwined' บริบทตรงข้ามกับ 'separate' <b>intertwined = เกี่ยวพันกันแน่น เชื่อมโยงกัน</b> — completely separate ตรงข้าม"
        },
        { id: "RD2-39", tag: "Inference",
          question: "What do some doctors argue about a caring physician?",
          questionTH: "แพทย์บางคนโต้แย้งอย่างไรเกี่ยวกับแพทย์ที่ใส่ใจผู้ป่วย?",
          choices: ["They should always prescribe placebos", "They should avoid talking to patients", "Their warmth can produce measurable benefits like a placebo", "They cannot affect a patient's recovery"],
          choicesTH: ["เขาควรสั่งยาหลอกเสมอ", "เขาควรเลี่ยงการพูดคุยกับผู้ป่วย", "ความอบอุ่นของเขาสร้างผลดีที่วัดได้เหมือนยาหลอก", "เขาไม่อาจส่งผลต่อการฟื้นตัวของผู้ป่วย"],
          answer: 2,
          explanation: "ย่อหน้า 4: 'the warmth and confidence of a caring physician can itself produce measurable benefits, almost like a placebo' — ตอบตรงตัว"
        },
        { id: "RD2-40", tag: "Inference",
          question: "What does the author suggest medicine may do in the future?",
          questionTH: "ผู้เขียนเสนอว่าการแพทย์อาจทำสิ่งใดในอนาคต?",
          choices: ["Harness the healing power of the mind more deliberately", "Ignore the mind-body connection", "Ban placebos from all trials", "Stop using real drugs entirely"],
          choicesTH: ["ใช้พลังเยียวยาของจิตใจอย่างตั้งใจมากขึ้น", "เพิกเฉยต่อความเชื่อมโยงจิต-กาย", "ห้ามใช้ยาหลอกในทุกการทดลอง", "เลิกใช้ยาจริงโดยสิ้นเชิง"],
          answer: 0,
          explanation: "ประโยคปิด: 'allow medicine to harness the healing power of the mind more deliberately than it does today' — ผู้เขียนมองอนาคตในแง่ใช้พลังของจิตใจอย่างตั้งใจมากขึ้น"
        },
      ]
    },
    {
      title: "Passage 5: The Vanishing Art of Handwriting",
      text: `Not long ago, handwriting was a skill everyone needed and most people used every day. Letters, shopping lists, school essays, and business records were all produced by hand. Today, keyboards and touchscreens have taken over almost every form of written communication. Many young people send hundreds of typed messages a day but rarely pick up a pen, and some schools have quietly dropped handwriting from the curriculum altogether. To some observers, this is simply progress; to others, it is a quiet loss worth resisting.

Those who welcome the decline of handwriting point to obvious advantages of typing. It is faster, neater, and easier to edit and share. A typed document can be sent around the world in seconds and stored without taking up physical space. For people whose handwriting is difficult to read, typing is a genuine relief. In a world that increasingly runs on digital text, they argue, time spent perfecting penmanship could be better spent learning other skills.

Yet a growing body of research suggests that handwriting offers benefits that typing cannot replace. Studies of students have found that those who take notes by hand tend to understand and remember the material better than those who type. The reason, researchers believe, is that writing by hand is slower, which forces the writer to summarize ideas in their own words rather than copying them mechanically. The physical act of forming letters also appears to help young children learn to read, engaging the brain in ways that tapping a key does not.

Handwriting carries a personal and emotional weight that typed text lacks as well. A handwritten letter, with its individual quirks and imperfections, feels more intimate than a flawless printed one. Historians and families treasure handwritten documents as direct, physical links to the people who created them. Whether or not handwriting survives as an everyday skill, many believe it is worth preserving — not out of mere nostalgia, but because it engages the mind and the heart in ways that no machine has yet managed to match.`,
      textTH: `เมื่อไม่นานมานี้ การเขียนด้วยลายมือเป็นทักษะที่ทุกคนจำเป็นต้องมีและคนส่วนใหญ่ใช้ทุกวัน จดหมาย รายการของที่จะซื้อ เรียงความในโรงเรียน และบันทึกทางธุรกิจล้วนเขียนขึ้นด้วยมือ ทุกวันนี้ แป้นพิมพ์และจอสัมผัสได้เข้ามาแทนที่การสื่อสารด้วยตัวอักษรแทบทุกรูปแบบ คนรุ่นใหม่จำนวนมากส่งข้อความพิมพ์วันละหลายร้อยข้อความแต่แทบไม่จับปากกา และบางโรงเรียนก็ค่อย ๆ ตัดการเขียนด้วยลายมือออกจากหลักสูตรไปเงียบ ๆ สำหรับผู้สังเกตการณ์บางคน นี่เป็นเพียงความก้าวหน้า แต่สำหรับคนอื่น มันคือความสูญเสียอันเงียบงันที่ควรค่าแก่การต้านทาน

ผู้ที่ยินดีกับการเสื่อมถอยของการเขียนด้วยลายมือชี้ให้เห็นข้อดีที่ชัดเจนของการพิมพ์ มันเร็วกว่า เป็นระเบียบกว่า และแก้ไขกับแบ่งปันได้ง่ายกว่า เอกสารที่พิมพ์สามารถส่งไปทั่วโลกได้ในไม่กี่วินาทีและจัดเก็บได้โดยไม่กินพื้นที่ สำหรับคนที่มีลายมืออ่านยาก การพิมพ์เป็นความโล่งใจอย่างแท้จริง พวกเขาแย้งว่าในโลกที่ขับเคลื่อนด้วยตัวอักษรดิจิทัลมากขึ้นเรื่อย ๆ เวลาที่ใช้ฝึกลายมือให้สวยอาจนำไปใช้เรียนรู้ทักษะอื่นได้คุ้มค่ากว่า

ทว่างานวิจัยที่เพิ่มจำนวนขึ้นเรื่อย ๆ ชี้ว่าการเขียนด้วยลายมือให้ประโยชน์ที่การพิมพ์ทดแทนไม่ได้ การศึกษาในกลุ่มนักเรียนพบว่าผู้ที่จดด้วยลายมือมักเข้าใจและจดจำเนื้อหาได้ดีกว่าผู้ที่พิมพ์ นักวิจัยเชื่อว่าเหตุผลคือการเขียนด้วยมือนั้นช้ากว่า ซึ่งบีบให้ผู้เขียนต้องสรุปความคิดด้วยคำพูดของตัวเองแทนที่จะลอกแบบเครื่องจักร การลงมือเขียนตัวอักษรยังดูเหมือนจะช่วยให้เด็กเล็กหัดอ่านได้ โดยกระตุ้นสมองในแบบที่การเคาะแป้นพิมพ์ทำไม่ได้

การเขียนด้วยลายมือยังมีน้ำหนักทางอารมณ์และความเป็นส่วนตัวที่ตัวอักษรพิมพ์ขาดไป จดหมายลายมือที่มีลักษณะเฉพาะตัวและความไม่สมบูรณ์แบบของมันให้ความรู้สึกใกล้ชิดมากกว่าจดหมายพิมพ์ที่ไร้ที่ติ นักประวัติศาสตร์และครอบครัวต่างหวงแหนเอกสารลายมือในฐานะสายสัมพันธ์ที่จับต้องได้และเชื่อมโยงโดยตรงกับผู้ที่สร้างมันขึ้น ไม่ว่าการเขียนด้วยลายมือจะอยู่รอดในฐานะทักษะประจำวันหรือไม่ หลายคนเชื่อว่ามันคู่ควรแก่การรักษาไว้ — ไม่ใช่เพราะเป็นเพียงความคิดถึงอดีต แต่เพราะมันกระตุ้นทั้งสมองและหัวใจในแบบที่ยังไม่มีเครื่องจักรใดทำได้เทียบเท่า`,
      questions: [
        { id: "RD2-41", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["How to improve your handwriting", "Why typing is always better than writing", "The history of the keyboard", "The decline of handwriting and the debate over its value"],
          choicesTH: ["วิธีปรับปรุงลายมือ", "เหตุใดการพิมพ์ดีกว่าการเขียนเสมอ", "ประวัติของแป้นพิมพ์", "ความเสื่อมถอยของการเขียนด้วยมือและข้อถกเถียงเรื่องคุณค่า"],
          answer: 3,
          explanation: "บทความนำเสนอความเสื่อมถอยของการเขียนด้วยมือ พร้อมสองมุมมอง (ฝ่ายสนับสนุนการพิมพ์ vs ฝ่ายเห็นคุณค่าการเขียนมือ) ตัวเลือก 4 จึงครอบคลุม — ไม่ได้ฟันธงว่าพิมพ์ดีกว่าเสมอ"
        },
        { id: "RD2-42", tag: "Detail",
          question: "What have some schools done regarding handwriting?",
          questionTH: "โรงเรียนบางแห่งทำอะไรเกี่ยวกับการเขียนด้วยมือ?",
          choices: ["Required handwritten exams only", "Quietly dropped it from the curriculum", "Banned typing completely", "Made it the most important subject"],
          choicesTH: ["บังคับสอบด้วยลายมือเท่านั้น", "ค่อย ๆ ตัดมันออกจากหลักสูตร", "ห้ามการพิมพ์โดยสิ้นเชิง", "ทำให้มันเป็นวิชาที่สำคัญที่สุด"],
          answer: 1,
          explanation: "ย่อหน้า 1: 'some schools have quietly dropped handwriting from the curriculum altogether' — ตอบตรงตัว"
        },
        { id: "RD2-43", tag: "Detail",
          question: "Which advantage of typing is mentioned in the passage?",
          questionTH: "ข้อดีใดของการพิมพ์ที่ถูกกล่าวถึงในบทความ?",
          choices: ["It helps children learn to read", "It feels more personal", "It improves memory", "It is faster and easier to edit"],
          choicesTH: ["ช่วยให้เด็กหัดอ่าน", "รู้สึกเป็นส่วนตัวกว่า", "ช่วยพัฒนาความจำ", "เร็วกว่าและแก้ไขง่ายกว่า"],
          answer: 3,
          explanation: "ย่อหน้า 2: 'It is faster, neater, and easier to edit and share' — ส่วนข้อดีเรื่องความจำ การอ่าน และความเป็นส่วนตัว บทความยกให้ 'การเขียนด้วยมือ' ไม่ใช่การพิมพ์"
        },
        { id: "RD2-44", tag: "Detail",
          question: "According to research, why do students who take notes by hand remember material better?",
          questionTH: "ตามงานวิจัย เหตุใดนักเรียนที่จดด้วยมือจึงจำเนื้อหาได้ดีกว่า?",
          choices: ["They use more colorful pens", "Writing by hand forces them to summarize in their own words", "They copy text word for word", "They write faster than typists"],
          choicesTH: ["พวกเขาใช้ปากกาสีสันมากกว่า", "การเขียนมือบังคับให้สรุปด้วยคำพูดของตัวเอง", "พวกเขาลอกข้อความคำต่อคำ", "พวกเขาเขียนเร็วกว่าคนพิมพ์"],
          answer: 1,
          explanation: "ย่อหน้า 3: เขียนมือช้ากว่าจึง 'forces the writer to summarize ideas in their own words rather than copying them mechanically' — การสรุปด้วยคำของตัวเองช่วยให้เข้าใจและจำดีขึ้น"
        },
        { id: "RD2-45", tag: "Vocabulary in Context",
          question: "The word \"mechanically\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"mechanically\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["without thinking", "using a machine", "thoughtfully", "very slowly"],
          choicesTH: ["อย่างไม่ได้คิด", "โดยใช้เครื่องจักร", "อย่างใคร่ครวญ", "ช้ามาก"],
          answer: 0,
          explanation: "บริบท: 'copying them mechanically' ตรงข้ามกับการสรุปด้วยคำตัวเอง <b>mechanically = อย่างเครื่องจักร โดยไม่ได้คิด</b> — ไม่ได้หมายถึงใช้เครื่องจักรจริง ๆ ในที่นี้"
        },
        { id: "RD2-46", tag: "Detail",
          question: "How does forming letters by hand help young children?",
          questionTH: "การเขียนตัวอักษรด้วยมือช่วยเด็กเล็กอย่างไร?",
          choices: ["It helps them learn to read", "It teaches them grammar", "It improves their eyesight", "It makes them type faster"],
          choicesTH: ["ช่วยให้พวกเขาหัดอ่าน", "สอนไวยากรณ์ให้พวกเขา", "ช่วยให้สายตาดีขึ้น", "ทำให้พวกเขาพิมพ์เร็วขึ้น"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'The physical act of forming letters also appears to help young children learn to read' — ตอบตรงตัว"
        },
        { id: "RD2-47", tag: "Detail",
          question: "Why does a handwritten letter feel more intimate than a printed one?",
          questionTH: "เหตุใดจดหมายลายมือจึงรู้สึกใกล้ชิดกว่าจดหมายพิมพ์?",
          choices: ["It is more expensive to produce", "It is written in a special language", "It has individual quirks and imperfections", "It is always longer"],
          choicesTH: ["มันผลิตแพงกว่า", "มันเขียนด้วยภาษาพิเศษ", "มันมีเอกลักษณ์และความไม่สมบูรณ์เฉพาะตัว", "มันยาวกว่าเสมอ"],
          answer: 2,
          explanation: "ย่อหน้า 4: 'with its individual quirks and imperfections, feels more intimate than a flawless printed one' — ความไม่สมบูรณ์เฉพาะตัวคือสิ่งที่ทำให้รู้สึกใกล้ชิด"
        },
        { id: "RD2-48", tag: "Vocabulary in Context",
          question: "The word \"treasure\" in paragraph 4 is closest in meaning to",
          questionTH: "คำว่า \"treasure\" ในย่อหน้าที่ 4 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["sell quickly", "throw away", "copy", "value greatly"],
          choicesTH: ["ขายอย่างรวดเร็ว", "ทิ้งไป", "คัดลอก", "เห็นคุณค่าอย่างยิ่ง ทะนุถนอม"],
          answer: 3,
          explanation: "'Historians and families treasure handwritten documents' = นักประวัติศาสตร์และครอบครัวหวงแหนเอกสารลายมือ <b>treasure (v.) = เห็นคุณค่าอย่างยิ่ง ทะนุถนอม</b> — throw away ตรงข้าม"
        },
        { id: "RD2-49", tag: "Inference",
          question: "What can be inferred about the author's view of handwriting?",
          questionTH: "อนุมานได้อย่างไรเกี่ยวกับมุมมองของผู้เขียนต่อการเขียนด้วยมือ?",
          choices: ["It is better than typing in every way", "It should be completely abandoned", "It has real value worth preserving", "It is only useful for historians"],
          choicesTH: ["ดีกว่าการพิมพ์ในทุกด้าน", "ควรถูกละทิ้งโดยสิ้นเชิง", "มีคุณค่าที่แท้จริงควรค่าแก่การรักษาไว้", "มีประโยชน์เฉพาะกับนักประวัติศาสตร์"],
          answer: 2,
          explanation: "ย่อหน้าสุดท้าย: 'worth preserving — not out of mere nostalgia, but because it engages the mind and the heart' ผู้เขียนเห็นว่าการเขียนมือมีคุณค่าจริงควรรักษาไว้ แต่ก็ไม่ได้บอกว่าดีกว่าพิมพ์ทุกด้าน"
        },
        { id: "RD2-50", tag: "Inference",
          question: "The phrase \"not out of mere nostalgia\" suggests the author believes handwriting should be preserved for",
          questionTH: "วลี \"not out of mere nostalgia\" สื่อว่าผู้เขียนเชื่อว่าควรรักษาการเขียนด้วยมือไว้ด้วยเหตุผลใด",
          choices: ["purely historical reasons", "sentimental reasons only", "practical and cognitive reasons, not just fond memories", "no good reason at all"],
          choicesTH: ["เหตุผลทางประวัติศาสตร์ล้วน ๆ", "เหตุผลด้านอารมณ์เท่านั้น", "เหตุผลเชิงปฏิบัติและการรับรู้ ไม่ใช่แค่ความทรงจำ", "ไม่มีเหตุผลที่ดีเลย"],
          answer: 2,
          explanation: "'not out of mere nostalgia, but because it engages the mind and the heart' = ไม่ใช่แค่ความคิดถึงอดีต แต่เพราะมีประโยชน์ต่อสมองและจิตใจจริง ๆ — ผู้เขียนเน้นเหตุผลเชิงปฏิบัติและการรับรู้ ไม่ใช่แค่อารมณ์"
        },
      ]
    },
  ],
});
