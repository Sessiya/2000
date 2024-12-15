const questions  = [
  {"question": "Yutish va fonatsiya buzilgan, dizartriya, yumshoq tanglay parezi, yutqum refleksining chaqirilmasligi va tetraparez qaysi joyni zararlanishidan darak beradi:", "answers": ["Uzunchoq miyani", "Miya ko‘prigini", "Miya oyoqlarini", "O‘rta miyani"], "correct": 0},
  {"question": "Yumshoq tagnlayning chap yarim parezi, tilchaning o‘ng tomonga og‘ishi, o‘ng qo‘l va oyoqda pay reflekslarining kuchayishi va patologik reflekslarning paydo bo‘lishi qaysi joyni zararlanganidan darak beradi:", "answers": ["Uzunchoq miyani IX va X juft nervlari yadrosi joylashgan chap yarim satxini", "Uzunchoq miyani XII juft nerv yadrosi joylashgan chap yarim satxini", "Ichki kapsulaning tizzasini", "Ichki kapsulalning chap orqa sonini"], "correct": 0},
  {"question": "Alternilashgan Miyyara – Gubler sindromida zararlangan soxa qayerda bo‘ladi:", "answers": ["Miya ko‘prigini pastki qismida", "Uzunchoq miyani orqa yen qismida", "Miya oyog‘i asosida", "Qizil yadroda"], "correct": 0},
  {"question": "Ikki tomonlama Gorner sindromi, qo‘llarda og‘riq va xarorat sezgisining buzilishi ko‘pincha bemorda qaysi kasallik bor deb fikrlashga sabab bo‘ladi:", "answers": ["To‘g‘ri b) va g)", "Servikal siringomiyeliya", "Orqa miya bo‘yin-ko‘krak qismi ekstramedullyar o‘smasi", "Orqa miya bo‘yin-ko‘krak qismi intramedullyar o‘smasi"], "correct": 0},
  {"question": "Bel kengligi ventral yarmining zararlanishiga nima xos emas:", "answers": ["Oyoqlarda sensitiv ataksiya", "Chanoq a'zolari vazifasini markaziy turda buzilishi", "Dissotsiirlashgan paraanesteziya", "Pastki sust paraparez"], "correct": 0},
  {"question": "Qizil yadro pastki sindromiga xos emas (Kloda sindromi):", "answers": ["Gemiparez, gemigipesteziya qarama - qarshi ta", "Gemiataksiya qarama - qarshi tarafida", "Qarama- qarshi tarafida qo‘l-oyok mushaklari gipotoniyasi", "Qarama- qarshi tarafida intentsionn titrash"], "correct": 0},
  {"question": "Raymon – Sestan alternirlashgan sindromiga xos", "answers": ["Nigoh falaji", "Ko‘zni harakatlantiruvchi nerv falaji", "Uzoqlashtiruvchi nerv falaji", "Mimik mushaklar tirishishi"], "correct": 0},
  {"question": "Fovil alternirlashgan sindromi qaysi nerv zararlanishi bilan birga kechadi:", "answers": ["Yuz va uzoqlashtiruvchi", "Yuz va ko‘zni harakatlantiruvchi", "Til-xalqum va sayyor", "Til-osti va qo‘shimcha"], "correct": 0},
  {"question": "Uzunchoq miyaning dorso-lateral qismi zararlanishiga (Vallenberg - Zaxarchenko alьternirlashgan sindromi) xos emas", "answers": ["Qarama- qarshi tarafda gemiparez", "Qarama- qarshi tarafida og‘riq  va xarorat segi buzil", "O‘choq tarafida, yuzda segmentar tipda sezi buzilishi", "O‘choq tarafida ataksiya"], "correct": 0},
  {"question": "Gemianesteziya, gemiataksiya, gemianopsiya qaysi tuzilmani zararlanishiga xarakterli:", "answers": ["Talamusni", "Qizil yadroni", "Rangsiz sharni", "Dumli yadroni"], "correct": 0},
  {"question": "Tegmental sindrom uchun xos bo‘lmagan sindromni ko‘rsating:", "answers": ["Ptoz, mioz, enoftalьm karama- qarshi tarafida", "Start-refleksining buzilishi", "Gemigipesteziya qarama- qarshi tarafda", "Tremor, miokloniya o‘choq tarafda"], "correct": 0},
  {"question": "Disfagiyada ko‘zatiladigan belgini ko‘rsating:", "answers": ["Yutish refleksining o‘zgarishi", "Tilning oldingi 2/3 qismida ta'm buzi", "Og‘iz qurishi", "Gipersalivatsiya"], "correct": 0},
  {"question": "Bosh miya po‘stlog‘i nechta sohani o‘z ichiga oladi:", "answers": ["11", "10", "8", "5"], "correct": 0},
  {"question": "Bosh miya po‘stlog‘i Brodman tasnifi buyicha nechta maydondan iborat", "answers": ["52", "51", "42", "38"], "correct": 0},
  {"question": "Bemor ko‘zini yumganda qo‘l bilan ushlagan narsasini aniqlay olmadi. Bunday sezgi o‘zgarishi qanday nomlanadi:", "answers": ["Astereognoz", "Gipesteziya", "Anesteziya", "Dizesteziya"], "correct": 0},
  {"question": "Qaysi nerv ko‘z yosh bezlarini innervatsiyalaydi?", "answers": ["N.petrosus superficialis major", "N.petrosus superficialis minor;", "N.stapedius", "N.abducens;"], "correct": 0},
  {"question": "Ko‘ruv maydonining chegaralarini ko‘rsating", "answers": ["Tashqi 90, ichki 60, yuqori 60, pastki 70", "Tashqi 80, ichki 70, yuqori 50, pastki 40", "Tashqi 90, ichki 50, yuqori 60, pastki 50", "Tashqi 70, ichki 60, yuqori 40, pastki 60"], "correct": 0},
  {"question": "N.oculomotorius zararlanganda nima kuzatiladi?", "answers": ["Xammasi to‘g‘ri .", "Diplopiya;", "Midriaz Konvergentsiyaning yo‘qolishi", "Ptoz"], "correct": 0},
  {"question": "N.abducens zararlanganda qanday g‘ilaylik bo‘ladi?", "answers": ["Ichkariga", "Tashqariga", "Yuqoriga;", "Pastga"], "correct": 0},
  {"question": "Bemorda pastga qaraganda zinapoya simptomi aniqlanmoqda. Qaysi kranial nerv zararlangan?", "answers": ["IV", "V", "VI", "VII"], "correct": 0},
  {"question": "Afoniya, disfagiya, qalqib ketish, yutqun va xalqum refleks- larining oshishi qaysi sindrom belgilari?", "answers": ["Psevdobulьbar", "Bulьbar", "Alьternirlangan", "Fovilь"], "correct": 0},
  {"question": "Gorner sindromi:", "answers": ["Ptoz, mioz, enoftalьm", "Ptoz, midriaz, ekzoftalьm;", "Faqat ptoz", "Faqat midriaz;"], "correct": 0},
  {"question": "Yuz nervi yadrosi qayerda joylashgan?", "answers": ["Miya ko‘prigida", "Miya oyoqchalarida", "Uzunchoq miyada;", "Bosh miya yarim sharlarida;"], "correct": 0},
  {"question": "Qaysi nervning aksonlari yuz nervi yadrosi atrofida aylanib o‘tadi?", "answers": ["N.abducens", "N.oculomotorius;", "N.vestibulocohlearis", "N. Trigeminus;"], "correct": 0},
  {"question": "Yuz -nervi nevritida qaysi simptom uchraydi?", "answers": ["Giperakuziya", "Ptoz", "G‘ilaylik;", "Diplopiya"], "correct": 0}
];
