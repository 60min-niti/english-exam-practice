// Reading ชุดที่ 7 — 5 passages × 10 ข้อ = 50 ข้อ (แนวข่าวประกาศ + คำถามโทน/โครงเรื่อง/จุดประสงค์/สไตล์)
window.TUGET_DATA = window.TUGET_DATA || [];
window.TUGET_DATA.push({
  part: "reading",
  set: 7,
  passages: [
    {
      title: "Passage 1: A Milestone in Fusion Energy",
      text: `Scientists at a national laboratory announced a long-awaited milestone last week: for the first time, a fusion experiment produced more energy than was used to start the reaction. Fusion, the process that powers the Sun, joins together the nuclei of small atoms and releases enormous amounts of energy. For decades, researchers have dreamed of harnessing it as a clean and almost limitless source of power. The recent result, though small in scale, has been hailed as a genuine breakthrough.

The appeal of fusion is easy to understand. Unlike the fission reactions used in today's nuclear plants, fusion produces no long-lived radioactive waste and carries no risk of a runaway meltdown. Its fuel can be obtained from seawater, making it virtually inexhaustible. A practical fusion reactor would offer abundant electricity without the carbon emissions of fossil fuels — a tantalizing prospect for a warming world.

Yet the announcement, while significant, must be kept in perspective. The experiment released more energy than the laser beams that triggered it delivered to the fuel, but it consumed far more total electricity than it produced when the entire facility is taken into account. In other words, the reaction crossed an important scientific threshold, but the technology is still very far from generating useful power for homes and industry.

Many formidable challenges remain. Engineers must find ways to make reactions happen not once but continuously, to capture the energy efficiently, and to build reactors that are affordable and durable. Most experts believe that commercial fusion power, if it arrives at all, is still decades away. The recent milestone does not change that timeline overnight. What it does provide is proof that the fundamental goal is achievable — and renewed energy for a quest that has tested human patience for generations.`,
      questions: [
        { id: "RD7-01", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["A fusion energy milestone and what it does and does not mean", "How to build a solar panel", "Why the Sun will explode", "The history of seawater"],
          choicesTH: ["หมุดหมายของพลังงานฟิวชันและความหมายที่แท้จริง", "วิธีสร้างแผงโซลาร์", "เหตุใดดวงอาทิตย์จะระเบิด", "ประวัติของน้ำทะเล"],
          answer: 0,
          explanation: "บทความรายงานหมุดหมายฟิวชัน อธิบายเสน่ห์ ข้อจำกัด และความท้าทาย ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD7-02", tag: "Detail",
          question: "What milestone did the scientists announce?",
          questionTH: "นักวิทยาศาสตร์ประกาศหมุดหมายใด?",
          choices: ["A fusion experiment produced more energy than was used to start the reaction", "They built a new sun", "They cooled the ocean", "They ended all wars"],
          choicesTH: ["การทดลองฟิวชันผลิตพลังงานมากกว่าที่ใช้จุดปฏิกิริยา", "พวกเขาสร้างดวงอาทิตย์ใหม่", "ทำให้มหาสมุทรเย็นลง", "ยุติสงครามทั้งหมด"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'for the first time, a fusion experiment produced more energy than was used to start the reaction' — ตอบตรงตัว"
        },
        { id: "RD7-03", tag: "Detail",
          question: "What advantage does fusion have over today's nuclear fission plants?",
          questionTH: "ฟิวชันได้เปรียบโรงไฟฟ้านิวเคลียร์แบบฟิชชันในปัจจุบันอย่างไร?",
          choices: ["It produces no long-lived radioactive waste and no meltdown risk", "It is much louder", "It needs no fuel at all", "It works only at night"],
          choicesTH: ["ไม่ก่อกากกัมมันตรังสีที่อยู่นานและไม่เสี่ยงหลอมละลาย", "เสียงดังกว่ามาก", "ไม่ต้องใช้เชื้อเพลิงเลย", "ทำงานเฉพาะกลางคืน"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'fusion produces no long-lived radioactive waste and carries no risk of a runaway meltdown' — ตอบตรงตัว"
        },
        { id: "RD7-04", tag: "Detail",
          question: "Where can fusion fuel be obtained from?",
          questionTH: "เชื้อเพลิงฟิวชันหามาจากที่ใด?",
          choices: ["Seawater", "Coal mines", "Oil wells", "The Moon"],
          choicesTH: ["น้ำทะเล", "เหมืองถ่านหิน", "บ่อน้ำมัน", "ดวงจันทร์"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'Its fuel can be obtained from seawater, making it virtually inexhaustible' — ตอบตรงตัว"
        },
        { id: "RD7-05", tag: "Detail",
          question: "Why must the announcement be 'kept in perspective'?",
          questionTH: "เหตุใดจึงต้อง 'มองการประกาศนี้อย่างมีสัดส่วน'?",
          choices: ["The whole facility used far more electricity than the reaction produced", "The experiment was fake", "Fusion is dangerous", "The lab caught fire"],
          choicesTH: ["ทั้งโรงงานใช้ไฟมากกว่าที่ปฏิกิริยาผลิตได้มาก", "การทดลองเป็นของปลอม", "ฟิวชันอันตราย", "ห้องแล็บไฟไหม้"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'it consumed far more total electricity than it produced when the entire facility is taken into account' — จึงยังห่างไกลพลังงานใช้จริง"
        },
        { id: "RD7-06", tag: "Vocabulary in Context",
          question: "The word \"formidable\" in paragraph 4 is closest in meaning to",
          questionTH: "คำว่า \"formidable\" ในย่อหน้าที่ 4 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["very difficult", "easy", "small", "pleasant"],
          choicesTH: ["ยากมาก น่าหวั่นเกรง", "ง่าย", "เล็ก", "น่ารื่นรมย์"],
          answer: 0,
          explanation: "'Many formidable challenges remain' <b>formidable = ยากมาก ท้าทายจนน่าหวั่นเกรง</b> — easy ตรงข้าม"
        },
        { id: "RD7-07", tag: "Detail",
          question: "What do most experts believe about commercial fusion power?",
          questionTH: "ผู้เชี่ยวชาญส่วนใหญ่เชื่ออย่างไรเกี่ยวกับพลังงานฟิวชันเชิงพาณิชย์?",
          choices: ["It is still decades away, if it arrives at all", "It will arrive next month", "It already powers most homes", "It is impossible in theory"],
          choicesTH: ["ยังอีกหลายทศวรรษ ถ้ามาได้จริง", "จะมาในเดือนหน้า", "จ่ายไฟให้บ้านส่วนใหญ่แล้ว", "เป็นไปไม่ได้ในทางทฤษฎี"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'commercial fusion power, if it arrives at all, is still decades away' — ตอบตรงตัว"
        },
        { id: "RD7-08", tag: "Organization",
          question: "How is the passage mainly organized?",
          questionTH: "บทความนี้จัดเรียงเนื้อหาโดยหลักอย่างไร?",
          choices: ["It announces a breakthrough, explains its appeal, then qualifies it with limits and challenges", "It tells a love story", "It lists chemicals in order", "It compares two countries"],
          choicesTH: ["ประกาศความก้าวหน้า อธิบายเสน่ห์ แล้วถ่วงดุลด้วยข้อจำกัดและความท้าทาย", "เล่าเรื่องรัก", "เรียงสารเคมีตามลำดับ", "เปรียบเทียบสองประเทศ"],
          answer: 0,
          explanation: "โครงเรื่อง: ประกาศ (ย่อหน้า 1) → เสน่ห์ (2) → ข้อจำกัด (3) → ความท้าทาย/มองอนาคต (4) ตัวเลือก 1 จึงตรง"
        },
        { id: "RD7-09", tag: "Tone",
          question: "The author's tone toward the milestone can best be described as",
          questionTH: "โทนของผู้เขียนต่อหมุดหมายนี้อธิบายได้ดีที่สุดว่าอย่างไร?",
          choices: ["Impressed but realistic", "Completely dismissive", "Wildly overexcited", "Bitter and angry"],
          choicesTH: ["ประทับใจแต่มองตามจริง", "ปฏิเสธโดยสิ้นเชิง", "ตื่นเต้นเกินเหตุ", "ขมขื่นและโกรธ"],
          answer: 0,
          explanation: "ผู้เขียนชมว่าเป็น 'genuine breakthrough' แต่ก็ย้ำข้อจำกัด ('must be kept in perspective', 'decades away') โทนจึงประทับใจแต่ตามจริง"
        },
        { id: "RD7-10", tag: "Inference",
          question: "What does the milestone mainly prove, according to the final paragraph?",
          questionTH: "ตามย่อหน้าสุดท้าย หมุดหมายนี้พิสูจน์อะไรเป็นหลัก?",
          choices: ["That the fundamental goal of fusion is achievable", "That fusion is already in homes", "That fusion has failed", "That seawater is dangerous"],
          choicesTH: ["ว่าเป้าหมายพื้นฐานของฟิวชันทำได้จริง", "ว่าฟิวชันอยู่ในบ้านแล้ว", "ว่าฟิวชันล้มเหลว", "ว่าน้ำทะเลอันตราย"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'proof that the fundamental goal is achievable' — แม้ยังไกลจากการใช้จริง แต่พิสูจน์ว่าเป็นไปได้"
        },
      ]
    },
    {
      title: "Passage 2: Nations Agree to Protect the High Seas",
      text: `After nearly twenty years of difficult negotiations, the nations of the world reached a historic agreement last week to protect marine life in the high seas — the vast areas of ocean that lie beyond any country's borders. These waters cover almost half the surface of the planet, yet until now they have been largely without legal protection, open to fishing, shipping, and other activities with few rules to safeguard the creatures that live there.

The new treaty creates a framework for establishing protected areas in international waters, where harmful activities can be limited or banned. Supporters say this is essential. Marine scientists have warned for years that ocean life is under severe pressure from overfishing, pollution, and the warming and acidification of seawater. Without protected zones where ecosystems can recover, they argue, many species face a bleak future. The agreement has therefore been celebrated by conservation groups as a long-overdue step toward saving the ocean.

Reaching the agreement was far from easy. Nations disagreed over how protected areas should be chosen and managed, and over how the benefits of marine resources — including genetic material from sea creatures that may prove valuable to medicine — should be shared between rich and poor countries. Bridging these differences required years of patient diplomacy and a willingness to compromise on all sides.

Signing the treaty, however, is only the beginning. For it to take effect, a sufficient number of countries must formally approve it through their own political systems, a process that can take years and is not guaranteed to succeed. Even then, the treaty will mean little unless its rules are actually enforced across the immense and remote expanses of the open ocean — a formidable practical challenge. The agreement offers real hope, but turning that hope into healthier seas will demand sustained commitment for decades to come.`,
      questions: [
        { id: "RD7-11", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["A historic treaty to protect marine life in the high seas, and the challenges ahead", "How to catch more fish", "Why oceans are salty", "The history of one ship"],
          choicesTH: ["สนธิสัญญาประวัติศาสตร์ปกป้องสิ่งมีชีวิตในทะเลหลวง และความท้าทายข้างหน้า", "วิธีจับปลาให้มากขึ้น", "เหตุใดมหาสมุทรจึงเค็ม", "ประวัติของเรือลำหนึ่ง"],
          answer: 0,
          explanation: "บทความรายงานสนธิสัญญาคุ้มครองทะเลหลวง เหตุผล อุปสรรคการเจรจา และความท้าทายการบังคับใช้ ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD7-12", tag: "Detail",
          question: "What are the 'high seas'?",
          questionTH: "'ทะเลหลวง' (high seas) คืออะไร?",
          choices: ["Ocean areas beyond any country's borders", "Very tall waves", "Deep underground lakes", "Rivers near the coast"],
          choicesTH: ["พื้นที่มหาสมุทรที่อยู่นอกพรมแดนของประเทศใด ๆ", "คลื่นที่สูงมาก", "ทะเลสาบใต้ดินลึก", "แม่น้ำใกล้ชายฝั่ง"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'the high seas — the vast areas of ocean that lie beyond any country's borders' — ตอบตรงตัว"
        },
        { id: "RD7-13", tag: "Detail",
          question: "What does the new treaty create a framework for?",
          questionTH: "สนธิสัญญาใหม่สร้างกรอบสำหรับสิ่งใด?",
          choices: ["Establishing protected areas in international waters", "Building new ships", "Banning all travel", "Selling the ocean"],
          choicesTH: ["การจัดตั้งพื้นที่คุ้มครองในน่านน้ำสากล", "การสร้างเรือใหม่", "การห้ามการเดินทางทั้งหมด", "การขายมหาสมุทร"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'creates a framework for establishing protected areas in international waters' — ตอบตรงตัว"
        },
        { id: "RD7-14", tag: "Detail",
          question: "According to marine scientists, what is putting ocean life under pressure?",
          questionTH: "ตามนักวิทยาศาสตร์ทางทะเล อะไรกดดันสิ่งมีชีวิตในมหาสมุทร?",
          choices: ["Overfishing, pollution, and warming and acidification of seawater", "Too many protected areas", "Too few ships", "Cold weather only"],
          choicesTH: ["การจับปลาเกินขนาด มลพิษ และน้ำทะเลที่ร้อนขึ้นและเป็นกรด", "พื้นที่คุ้มครองมากเกินไป", "เรือน้อยเกินไป", "อากาศหนาวเท่านั้น"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'overfishing, pollution, and the warming and acidification of seawater' — ตอบตรงตัว"
        },
        { id: "RD7-15", tag: "Vocabulary in Context",
          question: "The word \"bleak\" in paragraph 2 is closest in meaning to",
          questionTH: "คำว่า \"bleak\" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["hopeless and grim", "bright and cheerful", "warm", "crowded"],
          choicesTH: ["สิ้นหวังและหม่นหมอง", "สดใสร่าเริง", "อบอุ่น", "แออัด"],
          answer: 0,
          explanation: "'many species face a bleak future' <b>bleak = มืดมน สิ้นหวัง</b> — bright and cheerful ตรงข้าม"
        },
        { id: "RD7-16", tag: "Detail",
          question: "What was one issue nations disagreed over?",
          questionTH: "ประเด็นใดที่ชาติต่าง ๆ เห็นไม่ตรงกัน?",
          choices: ["How the benefits of marine resources should be shared between rich and poor countries", "What color the ocean should be", "How many ships to build", "Which language to speak"],
          choicesTH: ["จะแบ่งประโยชน์จากทรัพยากรทางทะเลระหว่างประเทศรวยกับจนอย่างไร", "มหาสมุทรควรเป็นสีอะไร", "จะสร้างเรือกี่ลำ", "จะพูดภาษาใด"],
          answer: 0,
          explanation: "ย่อหน้า 3: ขัดแย้งเรื่อง 'how the benefits of marine resources ... should be shared between rich and poor countries' — ตอบตรงตัว"
        },
        { id: "RD7-17", tag: "Detail",
          question: "Why is signing the treaty 'only the beginning'?",
          questionTH: "เหตุใดการลงนามสนธิสัญญาจึงเป็น 'เพียงจุดเริ่มต้น'?",
          choices: ["Enough countries must formally approve it, and its rules must be enforced", "It must be translated into one language", "It must be printed on gold", "It must be approved by fish"],
          choicesTH: ["ต้องมีประเทศมากพอให้สัตยาบัน และต้องบังคับใช้กฎได้จริง", "ต้องแปลเป็นภาษาเดียว", "ต้องพิมพ์บนทอง", "ต้องได้รับอนุมัติจากปลา"],
          answer: 0,
          explanation: "ย่อหน้า 4: ต้องมีประเทศ 'formally approve it' พอ และ 'its rules are actually enforced' จึงจะมีผลจริง"
        },
        { id: "RD7-18", tag: "Detail",
          question: "What practical challenge does the passage mention for enforcement?",
          questionTH: "บทความกล่าวถึงความท้าทายเชิงปฏิบัติใดในการบังคับใช้?",
          choices: ["Enforcing rules across the immense and remote open ocean", "Finding enough ink to sign", "Choosing a meeting room", "Translating fish names"],
          choicesTH: ["การบังคับใช้กฎทั่วมหาสมุทรเปิดอันกว้างใหญ่และห่างไกล", "หาหมึกพอลงนาม", "เลือกห้องประชุม", "แปลชื่อปลา"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'enforced across the immense and remote expanses of the open ocean — a formidable practical challenge' — ตอบตรงตัว"
        },
        { id: "RD7-19", tag: "Purpose",
          question: "What is the author's main purpose in the final paragraph?",
          questionTH: "จุดประสงค์หลักของผู้เขียนในย่อหน้าสุดท้ายคืออะไร?",
          choices: ["To temper the celebration by noting that hard work still lies ahead", "To claim the ocean is already saved", "To attack conservation groups", "To advertise a cruise"],
          choicesTH: ["เพื่อชะลอความยินดีโดยชี้ว่ายังมีงานยากรออยู่", "เพื่ออ้างว่ามหาสมุทรถูกช่วยไว้แล้ว", "เพื่อโจมตีกลุ่มอนุรักษ์", "เพื่อโฆษณาเรือสำราญ"],
          answer: 0,
          explanation: "ย่อหน้าสุดท้ายเตือนว่า 'Signing ... is only the beginning' และต้องใช้ 'sustained commitment for decades' — เป็นการถ่วงดุลความยินดีด้วยความจริงที่ยังต้องทำอีกมาก"
        },
        { id: "RD7-20", tag: "Inference",
          question: "What is the author's overall attitude toward the agreement?",
          questionTH: "ทัศนคติโดยรวมของผู้เขียนต่อข้อตกลงนี้เป็นอย่างไร?",
          choices: ["Hopeful but realistic about the difficulties ahead", "Certain it will fail", "Completely uninterested", "Angry that it was signed"],
          choicesTH: ["มีความหวังแต่มองความยากข้างหน้าตามจริง", "มั่นใจว่าจะล้มเหลว", "ไม่สนใจเลย", "โกรธที่มีการลงนาม"],
          answer: 0,
          explanation: "บทเรียกข้อตกลงว่า 'historic' และ 'offers real hope' แต่ย้ำอุปสรรคการให้สัตยาบันและบังคับใช้ — หวังแต่ตามจริง"
        },
      ]
    },
    {
      title: "Passage 3: Startup Claims a Battery Breakthrough",
      text: `A little-known startup made headlines this week by announcing what it called a breakthrough in battery technology. The company claims to have developed a battery that can store far more energy than today's standard batteries, charge in minutes rather than hours, and last for many more years before wearing out. If the claims are true, the new battery could have a profound impact on everything from electric cars to mobile phones.

The promise of better batteries has driven research for decades. Today's lithium-ion batteries, while remarkably successful, have well-known weaknesses: they take time to charge, gradually lose capacity, and rely on materials that are expensive and difficult to source responsibly. A battery that overcame these limitations would be enormously valuable, which is why investors have poured money into the field — and why bold claims are common.

It is precisely this history that prompts caution. Over the years, many companies have announced miraculous batteries that never reached the market. A laboratory sample that performs impressively under ideal conditions is a very different thing from a product that can be mass-produced cheaply, safely, and reliably. Independent experts point out that the startup has not yet allowed outsiders to verify its results, and that important details remain undisclosed.

The company says it is preparing for large-scale testing and hopes to begin production within a few years. Until independent laboratories confirm the claims, however, seasoned observers advise treating the announcement with healthy skepticism. The history of battery research is littered with promising breakthroughs that quietly disappeared. This one may prove different — but extraordinary claims, as scientists like to say, require extraordinary evidence.`,
      questions: [
        { id: "RD7-21", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["A startup's battery claims and why they should be treated with caution", "How to charge a phone", "Why lithium is blue", "The history of one investor"],
          choicesTH: ["คำกล่าวอ้างเรื่องแบตเตอรี่ของสตาร์ทอัปและเหตุผลที่ควรระวัง", "วิธีชาร์จโทรศัพท์", "เหตุใดลิเทียมเป็นสีน้ำเงิน", "ประวัติของนักลงทุนหนึ่งคน"],
          answer: 0,
          explanation: "บทความรายงานคำอ้างของสตาร์ทอัปและให้เหตุผลว่าควรระวัง (ยังไม่ได้รับการตรวจสอบอิสระ) ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD7-22", tag: "Detail",
          question: "What does the startup claim about its battery?",
          questionTH: "สตาร์ทอัปอ้างอะไรเกี่ยวกับแบตเตอรี่ของตน?",
          choices: ["It stores more energy, charges in minutes, and lasts many more years", "It runs on water", "It is invisible", "It can fly"],
          choicesTH: ["เก็บพลังงานมากกว่า ชาร์จในไม่กี่นาที และทนนานกว่ามาก", "ทำงานด้วยน้ำ", "มองไม่เห็น", "บินได้"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'store far more energy ... charge in minutes rather than hours, and last for many more years' — ตอบตรงตัว"
        },
        { id: "RD7-23", tag: "Detail",
          question: "What are the known weaknesses of today's lithium-ion batteries?",
          questionTH: "จุดอ่อนที่รู้กันของแบตเตอรี่ลิเทียมไอออนปัจจุบันคืออะไร?",
          choices: ["They take time to charge, lose capacity, and rely on costly materials", "They are too cheap", "They never lose charge", "They are made of gold"],
          choicesTH: ["ชาร์จนาน เสื่อมความจุ และพึ่งวัสดุราคาแพง", "ถูกเกินไป", "ไม่เคยเสื่อมประจุ", "ทำจากทอง"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'they take time to charge, gradually lose capacity, and rely on materials that are expensive and difficult to source' — ตอบตรงตัว"
        },
        { id: "RD7-24", tag: "Detail",
          question: "Why does the history of battery research prompt caution?",
          questionTH: "เหตุใดประวัติการวิจัยแบตเตอรี่จึงทำให้ต้องระวัง?",
          choices: ["Many 'miraculous' batteries were announced but never reached the market", "Batteries are illegal", "No one studies batteries", "All batteries are perfect"],
          choicesTH: ["แบต 'มหัศจรรย์' หลายตัวถูกประกาศแต่ไม่เคยออกสู่ตลาด", "แบตเตอรี่ผิดกฎหมาย", "ไม่มีใครศึกษาแบตเตอรี่", "แบตเตอรี่ทุกตัวสมบูรณ์แบบ"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'many companies have announced miraculous batteries that never reached the market' — จึงต้องระวังคำอ้าง"
        },
        { id: "RD7-25", tag: "Vocabulary in Context",
          question: "The word \"skepticism\" in the last paragraph is closest in meaning to",
          questionTH: "คำว่า \"skepticism\" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["doubt", "certainty", "excitement", "anger"],
          choicesTH: ["ความเคลือบแคลงสงสัย", "ความแน่ใจ", "ความตื่นเต้น", "ความโกรธ"],
          answer: 0,
          explanation: "'treating the announcement with healthy skepticism' <b>skepticism = ความสงสัย ไม่เชื่อง่าย</b> — certainty ตรงข้าม"
        },
        { id: "RD7-26", tag: "Detail",
          question: "What do independent experts point out about the startup?",
          questionTH: "ผู้เชี่ยวชาญอิสระชี้อะไรเกี่ยวกับสตาร์ทอัป?",
          choices: ["It has not let outsiders verify its results, and details remain undisclosed", "It has proven everything publicly", "It has already sold millions of batteries", "It refuses to make batteries"],
          choicesTH: ["ยังไม่ให้คนนอกตรวจสอบผล และรายละเอียดยังไม่เปิดเผย", "พิสูจน์ทุกอย่างต่อสาธารณะแล้ว", "ขายแบตไปแล้วหลายล้าน", "ปฏิเสธที่จะผลิตแบต"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'has not yet allowed outsiders to verify its results, and that important details remain undisclosed' — ตอบตรงตัว"
        },
        { id: "RD7-27", tag: "Style",
          question: "How does the author treat the startup's claims overall?",
          questionTH: "ผู้เขียนปฏิบัติต่อคำอ้างของสตาร์ทอัปโดยรวมอย่างไร?",
          choices: ["Reports them but repeatedly signals doubt and the need for proof", "Accepts them as fully proven", "Celebrates them enthusiastically", "Ignores them completely"],
          choicesTH: ["รายงานไว้แต่ส่งสัญญาณความสงสัยและความจำเป็นต้องพิสูจน์ซ้ำ ๆ", "ยอมรับว่าพิสูจน์แล้วเต็มที่", "เฉลิมฉลองอย่างกระตือรือร้น", "เพิกเฉยโดยสิ้นเชิง"],
          answer: 0,
          explanation: "ผู้เขียนใช้คำอย่าง 'claims', 'if the claims are true', 'healthy skepticism', 'require extraordinary evidence' — รายงานพร้อมตั้งข้อสงสัยตลอด"
        },
        { id: "RD7-28", tag: "Tone",
          question: "The author's tone toward the announcement is best described as",
          questionTH: "โทนของผู้เขียนต่อการประกาศนี้อธิบายได้ดีที่สุดว่าอย่างไร?",
          choices: ["Skeptical and cautious", "Fully convinced", "Mocking and cruel", "Joyful and certain"],
          choicesTH: ["เคลือบแคลงและระมัดระวัง", "เชื่อสนิทใจ", "เยาะเย้ยและโหดร้าย", "ปีติและมั่นใจ"],
          answer: 0,
          explanation: "ทั้งบทเน้นความระวัง ('prompts caution', 'healthy skepticism', 'extraordinary evidence') โทนจึงเคลือบแคลง ระมัดระวัง"
        },
        { id: "RD7-29", tag: "Detail",
          question: "What does the saying 'extraordinary claims require extraordinary evidence' imply here?",
          questionTH: "คำกล่าว 'คำอ้างที่พิเศษต้องการหลักฐานที่พิเศษ' สื่ออะไรในที่นี้?",
          choices: ["Big claims must be backed by strong proof before being believed", "All claims are false", "Evidence is unnecessary", "Batteries cannot be tested"],
          choicesTH: ["คำอ้างใหญ่ ๆ ต้องมีหลักฐานหนักแน่นรองรับก่อนจะเชื่อ", "คำอ้างทั้งหมดเป็นเท็จ", "หลักฐานไม่จำเป็น", "แบตเตอรี่ทดสอบไม่ได้"],
          answer: 0,
          explanation: "ประโยคปิดสื่อว่ายิ่งอ้างเรื่องใหญ่ ยิ่งต้องมีหลักฐานหนักแน่น — สอดคล้องกับการเรียกร้องการตรวจสอบอิสระ"
        },
        { id: "RD7-30", tag: "Inference",
          question: "What can be inferred about the author's view of the battery's future?",
          questionTH: "อนุมานอะไรได้เกี่ยวกับมุมมองของผู้เขียนต่ออนาคตของแบตเตอรี่นี้?",
          choices: ["It might succeed, but only verification will tell", "It will definitely change the world", "It has certainly failed", "It is already in every phone"],
          choicesTH: ["อาจสำเร็จ แต่ต้องรอการตรวจสอบเท่านั้นจึงจะรู้", "จะเปลี่ยนโลกแน่นอน", "ล้มเหลวแน่แล้ว", "อยู่ในทุกโทรศัพท์แล้ว"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'This one may prove different — but ... require extraordinary evidence' — เปิดทางว่าอาจสำเร็จ แต่ต้องพิสูจน์ก่อน"
        },
      ]
    },
    {
      title: "Passage 4: A City Celebrates Its Olympic Selection",
      text: `Crowds gathered in the city's main square last night to celebrate as it was officially named the host of a future Olympic Games. When the announcement was broadcast on giant screens, the waiting crowd erupted in cheers. For the city's leaders, who had spent years and considerable resources on the bid, the decision was the reward for a long and uncertain campaign. For many residents, it was simply a moment of pride and excitement.

Hosting the Olympics brings undeniable benefits. The global attention can boost tourism for years, and the investment that accompanies the Games often funds new stadiums, transport links, and housing that the city keeps long after the athletes have gone home. Supporters speak of a lasting "legacy" — facilities and improvements that continue to serve residents for decades. The Games can also create a powerful sense of unity and shared purpose among a city's people.

History, however, urges a degree of caution. Hosting the Olympics is extraordinarily expensive, and the final cost has, in many past Games, far exceeded the original budget. Critics warn that public money spent on stadiums might be better used for schools, hospitals, or housing. In some cities, expensive venues built for the Games have stood largely empty and unused afterward, becoming a burden rather than a benefit. The promised economic gains have sometimes proved disappointing.

Whether this city's Games will be remembered as a triumph or a costly mistake will depend on careful planning and honest management in the years ahead. The organizers have promised to control costs and to ensure that the new facilities serve the public long into the future. For now, though, such concerns are set aside. Last night belonged to celebration, as a city allowed itself to dream of the moment, still years away, when the eyes of the world would turn toward it.`,
      questions: [
        { id: "RD7-31", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["A city's Olympic selection, with both the benefits and the risks of hosting", "How to win a running race", "Why stadiums are round", "The history of one athlete"],
          choicesTH: ["การที่เมืองได้รับเลือกเป็นเจ้าภาพโอลิมปิก พร้อมข้อดีและความเสี่ยง", "วิธีชนะการวิ่งแข่ง", "เหตุใดสนามกีฬาเป็นวงกลม", "ประวัติของนักกีฬาคนหนึ่ง"],
          answer: 0,
          explanation: "บทความรายงานการเฉลิมฉลองการได้เป็นเจ้าภาพ พร้อมข้อดี (legacy/tourism) และความเสี่ยง (ค่าใช้จ่าย) ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD7-32", tag: "Detail",
          question: "Why was the announcement a 'reward' for the city's leaders?",
          questionTH: "เหตุใดการประกาศจึงเป็น 'รางวัล' สำหรับผู้นำเมือง?",
          choices: ["They had spent years and resources on a long, uncertain bid", "They had done nothing at all", "They had opposed the Games", "They had built no stadiums"],
          choicesTH: ["พวกเขาทุ่มเวลาและทรัพยากรหลายปีกับการเสนอตัวที่ไม่แน่นอน", "ไม่ได้ทำอะไรเลย", "ต่อต้านการแข่งขัน", "ไม่ได้สร้างสนามใด ๆ"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'who had spent years and considerable resources on the bid, the decision was the reward for a long and uncertain campaign'"
        },
        { id: "RD7-33", tag: "Detail",
          question: "What is meant by a lasting 'legacy' of the Games?",
          questionTH: "'มรดก' (legacy) ที่ยั่งยืนของการแข่งขันหมายถึงอะไร?",
          choices: ["Facilities and improvements that serve residents for decades", "A trophy for the mayor", "A single party", "A new flag only"],
          choicesTH: ["สิ่งอำนวยความสะดวกและการพัฒนาที่รับใช้ผู้อยู่อาศัยหลายทศวรรษ", "ถ้วยรางวัลสำหรับนายกเทศมนตรี", "งานปาร์ตี้ครั้งเดียว", "ธงใหม่เท่านั้น"],
          answer: 0,
          explanation: "ย่อหน้า 2: legacy = 'facilities and improvements that continue to serve residents for decades' — ตอบตรงตัว"
        },
        { id: "RD7-34", tag: "Detail",
          question: "What caution does history urge about hosting the Olympics?",
          questionTH: "ประวัติศาสตร์เตือนให้ระวังอะไรเกี่ยวกับการเป็นเจ้าภาพโอลิมปิก?",
          choices: ["It is extremely expensive and costs often exceed the budget", "It is always free", "It never attracts tourists", "It is illegal"],
          choicesTH: ["มันแพงมากและค่าใช้จ่ายมักเกินงบ", "มันฟรีเสมอ", "ไม่เคยดึงดูดนักท่องเที่ยว", "มันผิดกฎหมาย"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'extraordinarily expensive, and the final cost has ... far exceeded the original budget' — ตอบตรงตัว"
        },
        { id: "RD7-35", tag: "Vocabulary in Context",
          question: "The word \"burden\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"burden\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["a heavy and costly load", "a great gift", "a celebration", "a victory"],
          choicesTH: ["ภาระหนักที่สิ้นเปลือง", "ของขวัญล้ำค่า", "การเฉลิมฉลอง", "ชัยชนะ"],
          answer: 0,
          explanation: "venues 'becoming a burden rather than a benefit' <b>burden = ภาระ (ค่าใช้จ่าย/ปัญหา)</b> — ตรงข้ามกับ benefit (ประโยชน์)"
        },
        { id: "RD7-36", tag: "Detail",
          question: "What do critics say public money on stadiums might be better used for?",
          questionTH: "ฝ่ายวิจารณ์บอกว่าเงินสาธารณะที่ใช้กับสนามกีฬาควรใช้กับอะไรดีกว่า?",
          choices: ["Schools, hospitals, or housing", "More fireworks", "Bigger screens", "Longer parties"],
          choicesTH: ["โรงเรียน โรงพยาบาล หรือที่อยู่อาศัย", "พลุมากขึ้น", "จอใหญ่ขึ้น", "ปาร์ตี้ยาวขึ้น"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'might be better used for schools, hospitals, or housing' — ตอบตรงตัว"
        },
        { id: "RD7-37", tag: "Organization",
          question: "How does the author structure the discussion of hosting the Olympics?",
          questionTH: "ผู้เขียนวางโครงการอภิปรายเรื่องการเป็นเจ้าภาพโอลิมปิกอย่างไร?",
          choices: ["By presenting the benefits, then the risks, before reaching a balanced view", "By listing only good points", "By telling a ghost story", "By giving only numbers"],
          choicesTH: ["เสนอข้อดีก่อน แล้วความเสี่ยง ก่อนสรุปแบบสมดุล", "ระบุแต่ข้อดี", "เล่าเรื่องผี", "ให้แต่ตัวเลข"],
          answer: 0,
          explanation: "ย่อหน้า 2 เสนอข้อดี ('undeniable benefits') ย่อหน้า 3 เสนอความเสี่ยง ('urges a degree of caution') แล้วย่อหน้า 4 สรุปแบบสมดุล"
        },
        { id: "RD7-38", tag: "Tone",
          question: "How does the tone shift between paragraph 1 and paragraph 3?",
          questionTH: "โทนเปลี่ยนไปอย่างไรระหว่างย่อหน้าที่ 1 กับย่อหน้าที่ 3?",
          choices: ["From celebratory to cautious", "From angry to joyful", "From sad to sadder", "It does not change at all"],
          choicesTH: ["จากเฉลิมฉลองเป็นระมัดระวัง", "จากโกรธเป็นเบิกบาน", "จากเศร้าเป็นเศร้ายิ่งขึ้น", "ไม่เปลี่ยนเลย"],
          answer: 0,
          explanation: "ย่อหน้า 1 เต็มไปด้วยความยินดี ('erupted in cheers', 'pride') ส่วนย่อหน้า 3 เปลี่ยนเป็นเตือนสติเรื่องค่าใช้จ่าย ('urges a degree of caution') โทนจึงเปลี่ยนจากฉลองเป็นระวัง"
        },
        { id: "RD7-39", tag: "Inference",
          question: "What will determine whether the Games are remembered as a triumph?",
          questionTH: "อะไรจะกำหนดว่าการแข่งขันจะถูกจดจำว่าเป็นชัยชนะหรือไม่?",
          choices: ["Careful planning and honest management in the years ahead", "The weather on opening day", "The color of the medals", "The number of fireworks"],
          choicesTH: ["การวางแผนรอบคอบและการบริหารที่ซื่อตรงในปีข้างหน้า", "อากาศวันเปิด", "สีของเหรียญ", "จำนวนพลุ"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'will depend on careful planning and honest management in the years ahead' — ตอบตรงตัว"
        },
        { id: "RD7-40", tag: "Inference",
          question: "Why does the author end with the image of the celebration?",
          questionTH: "เหตุใดผู้เขียนจึงจบด้วยภาพการเฉลิมฉลอง?",
          choices: ["To acknowledge the joy of the moment while concerns are set aside for now", "To prove the Games will fail", "To criticize the crowd", "To list the costs"],
          choicesTH: ["เพื่อยอมรับความสุขของช่วงเวลานี้ขณะที่พักความกังวลไว้ก่อน", "เพื่อพิสูจน์ว่าการแข่งขันจะล้มเหลว", "เพื่อวิจารณ์ฝูงชน", "เพื่อระบุค่าใช้จ่าย"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'such concerns are set aside. Last night belonged to celebration' — ผู้เขียนยอมรับความยินดีของช่วงเวลาแม้จะเตือนเรื่องความเสี่ยงไว้แล้ว"
        },
      ]
    },
    {
      title: "Passage 5: Health Officials Announce a Disease on the Brink of Eradication",
      text: `Global health officials announced this week that a disease which once paralyzed hundreds of thousands of children every year is now on the verge of being wiped out entirely. Only a handful of cases were recorded last year, all confined to a few remote regions. If no new cases appear for a sustained period, the disease will become only the second human illness in history to be completely eradicated. Officials described the news as the result of a decades-long global effort.

The campaign against the disease has relied above all on vaccination. For more than thirty years, armies of health workers and volunteers have traveled to villages, refugee camps, and conflict zones, delivering vaccines to children even in the most difficult and dangerous conditions. International organizations, governments, and charities have funded the effort, while millions of local volunteers have carried it out, often at great personal risk. The achievement, officials stressed, belongs to all of them.

Reaching the final cases, however, has proved the hardest part of all. The remaining pockets of disease tend to be in places torn by conflict, where vaccination teams cannot safely reach every child, or in communities suspicious of outside health workers. A single missed child can allow the disease to return, and history shows that progress can be reversed if vigilance is relaxed too soon. For this reason, officials warned against premature celebration.

The lesson of this long campaign, experts say, extends beyond a single disease. It demonstrates what sustained international cooperation can achieve, even against a formidable enemy. At the same time, it is a reminder that such victories are fragile and hard-won, requiring patience, funding, and trust over many years. The world now stands tantalizingly close to a historic achievement — but, as officials repeatedly emphasized, the job is not finished until the very last case is gone.`,
      questions: [
        { id: "RD7-41", tag: "Main Idea",
          question: "What is the passage mainly about?",
          questionTH: "บทความนี้กล่าวถึงเรื่องใดเป็นหลัก?",
          choices: ["A disease nearing eradication after a decades-long global effort, and the challenges of the final stage", "How to make a vaccine at home", "Why children dislike doctors", "The history of one hospital"],
          choicesTH: ["โรคที่ใกล้ถูกกวาดล้างหลังความพยายามระดับโลกหลายทศวรรษ และความท้าทายช่วงสุดท้าย", "วิธีทำวัคซีนเองที่บ้าน", "เหตุใดเด็กไม่ชอบหมอ", "ประวัติของโรงพยาบาลหนึ่ง"],
          answer: 0,
          explanation: "บทความรายงานโรคที่ใกล้ถูกกวาดล้าง วิธีการ (วัคซีน) ความยากช่วงสุดท้าย และบทเรียน ตัวเลือก 1 จึงครอบคลุม"
        },
        { id: "RD7-42", tag: "Detail",
          question: "What did officials announce about the disease?",
          questionTH: "เจ้าหน้าที่ประกาศอะไรเกี่ยวกับโรคนี้?",
          choices: ["It is on the verge of being completely wiped out", "It is spreading faster than ever", "It cannot be treated", "It has no cause"],
          choicesTH: ["มันใกล้ถูกกวาดล้างอย่างสมบูรณ์", "มันแพร่เร็วกว่าที่เคย", "รักษาไม่ได้", "ไม่มีสาเหตุ"],
          answer: 0,
          explanation: "ย่อหน้า 1: 'now on the verge of being wiped out entirely' มีเพียงไม่กี่เคสในปีที่แล้ว"
        },
        { id: "RD7-43", tag: "Detail",
          question: "What has the campaign relied on above all?",
          questionTH: "การรณรงค์พึ่งพาสิ่งใดเหนือสิ่งอื่นใด?",
          choices: ["Vaccination", "Building hospitals", "Banning travel", "Closing schools"],
          choicesTH: ["การฉีดวัคซีน", "การสร้างโรงพยาบาล", "การห้ามเดินทาง", "การปิดโรงเรียน"],
          answer: 0,
          explanation: "ย่อหน้า 2: 'The campaign ... has relied above all on vaccination' — ตอบตรงตัว"
        },
        { id: "RD7-44", tag: "Detail",
          question: "Why has reaching the final cases proved the hardest part?",
          questionTH: "เหตุใดการเข้าถึงเคสสุดท้ายจึงเป็นส่วนที่ยากที่สุด?",
          choices: ["They are in conflict zones or communities suspicious of health workers", "There are too many doctors", "Vaccines have run out worldwide", "Children refuse to be born"],
          choicesTH: ["พวกเขาอยู่ในเขตความขัดแย้งหรือชุมชนที่ระแวงเจ้าหน้าที่สาธารณสุข", "มีหมอมากเกินไป", "วัคซีนหมดทั่วโลก", "เด็กปฏิเสธที่จะเกิด"],
          answer: 0,
          explanation: "ย่อหน้า 3: เคสที่เหลืออยู่ในพื้นที่ความขัดแย้งที่เข้าถึงไม่ปลอดภัย หรือชุมชนที่ 'suspicious of outside health workers'"
        },
        { id: "RD7-45", tag: "Vocabulary in Context",
          question: "The word \"vigilance\" in paragraph 3 is closest in meaning to",
          questionTH: "คำว่า \"vigilance\" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด",
          choices: ["careful watchfulness", "carelessness", "celebration", "sleep"],
          choicesTH: ["ความระมัดระวังเฝ้าจับตา", "ความสะเพร่า", "การเฉลิมฉลอง", "การนอน"],
          answer: 0,
          explanation: "'progress can be reversed if vigilance is relaxed too soon' <b>vigilance = ความระแวดระวัง เฝ้าระวัง</b> — carelessness ตรงข้าม"
        },
        { id: "RD7-46", tag: "Detail",
          question: "Why did officials warn against premature celebration?",
          questionTH: "เหตุใดเจ้าหน้าที่จึงเตือนไม่ให้เฉลิมฉลองก่อนเวลา?",
          choices: ["A single missed child can allow the disease to return", "Celebrations are illegal", "The disease is harmless", "No one is watching"],
          choicesTH: ["เด็กที่พลาดเพียงคนเดียวอาจทำให้โรคกลับมา", "การฉลองผิดกฎหมาย", "โรคไม่มีอันตราย", "ไม่มีใครเฝ้าดู"],
          answer: 0,
          explanation: "ย่อหน้า 3: 'A single missed child can allow the disease to return' และความคืบหน้าอาจถอยกลับได้ จึงต้องไม่ฉลองเร็วเกิน"
        },
        { id: "RD7-47", tag: "Purpose",
          question: "Why does the author mention that the achievement 'belongs to all of them'?",
          questionTH: "เหตุใดผู้เขียนจึงกล่าวว่าความสำเร็จ 'เป็นของพวกเขาทุกคน'?",
          choices: ["To stress that the success came from the cooperation of many people", "To name a single hero", "To criticize volunteers", "To explain how vaccines are made"],
          choicesTH: ["เพื่อเน้นว่าความสำเร็จมาจากความร่วมมือของคนจำนวนมาก", "เพื่อระบุวีรบุรุษคนเดียว", "เพื่อวิจารณ์อาสาสมัคร", "เพื่ออธิบายวิธีทำวัคซีน"],
          answer: 0,
          explanation: "ย่อหน้า 2 ยกความดีให้องค์กร รัฐบาล การกุศล และอาสาสมัครหลายล้านคน 'belongs to all of them' — เน้นความร่วมมือของหลายฝ่าย"
        },
        { id: "RD7-48", tag: "Detail",
          question: "What broader lesson does the campaign demonstrate, according to experts?",
          questionTH: "ตามผู้เชี่ยวชาญ การรณรงค์นี้แสดงบทเรียนกว้างขึ้นใด?",
          choices: ["What sustained international cooperation can achieve", "That diseases cannot be beaten", "That cooperation is useless", "That funding does not matter"],
          choicesTH: ["ความร่วมมือระหว่างประเทศที่ต่อเนื่องทำอะไรได้บ้าง", "ว่าโรคเอาชนะไม่ได้", "ว่าความร่วมมือไร้ประโยชน์", "ว่าเงินทุนไม่สำคัญ"],
          answer: 0,
          explanation: "ย่อหน้า 4: 'It demonstrates what sustained international cooperation can achieve' — บทเรียนที่ขยายเกินโรคเดียว"
        },
        { id: "RD7-49", tag: "Tone",
          question: "The author's overall tone can best be described as",
          questionTH: "โทนโดยรวมของผู้เขียนอธิบายได้ดีที่สุดว่าอย่างไร?",
          choices: ["Hopeful yet cautious", "Hopeless", "Sarcastic", "Indifferent"],
          choicesTH: ["มีความหวังแต่ระมัดระวัง", "สิ้นหวัง", "ประชด", "เฉยเมย"],
          answer: 0,
          explanation: "บทยกย่องความสำเร็จ ('historic achievement') แต่ย้ำว่าเปราะบางและ 'the job is not finished' — โทนหวังแต่ระวัง"
        },
        { id: "RD7-50", tag: "Inference",
          question: "What does the final sentence emphasize?",
          questionTH: "ประโยคสุดท้ายเน้นย้ำอะไร?",
          choices: ["The effort must continue until the very last case is gone", "The work is already over", "The disease will never end", "Celebration should begin now"],
          choicesTH: ["ต้องทำต่อจนกว่าเคสสุดท้ายจะหมดไป", "งานจบไปแล้ว", "โรคจะไม่มีวันสิ้นสุด", "ควรเริ่มฉลองตอนนี้"],
          answer: 0,
          explanation: "ประโยคปิด: 'the job is not finished until the very last case is gone' — เน้นว่าต้องทำต่อจนหมดจริง ๆ"
        },
      ]
    },
  ],
});
