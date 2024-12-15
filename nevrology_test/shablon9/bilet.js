const questions = [
    {"question": "Qaysi sezgi murakkab sezgi hisoblanmaydi", "answers": ["Stereognoz", "Interotseptiv", "Yuza", "Eksterotseptiv"], "correct": 0},
    {"question": "Yuza sezgi yo‘li nechta neyrondan iborat", "answers": ["3", "2", "4", "5"], "correct": 0},
    {"question": "Chuqur sezgi yo‘li nechta neyrondan iborat", "answers": ["2", "4", "5", "3"], "correct": 0},
    {"question": "Chuqur sezgi nima zararlanganda buziladi", "answers": ["Orqa kanatik", "Yen shox", "Oldingi shox", "Oldingi kulrang bitishma"], "correct": 0},
    {"question": "Eksterotseptiv sezgiga nima kiradi", "answers": ["Og‘riq va xarorat", "Passiv harakatlarni sezish", "Aktiv harakatlarni sezish", "Passiv harakatlarni sezish"], "correct": 0},
    {"question": "Og‘riq va xaroratning buzilishi qaysi strukturani zararlanganda", "answers": ["Oldingi shox", "Orqa kanatik", "Yen shox", "Oldingi kanatik"], "correct": 0},
    {"question": "Qaysi instrument orqali vibratsion sezgi tekshiriladi", "answers": ["Kamerton", "Paleesteziometr", "Exoentsefalograf", "Veber sirkuli"], "correct": 0},
    {"question": "Orqa shox zararlangandagi sezgi buzilishi", "answers": ["Eksterotseptiv", "Propriotseptiv", "Interotseptiv", "Buzilmaydi"], "correct": 0},
    {"question": "Og‘riqning paydo bo‘lishi nimaning zararlanishiga xos", "answers": ["Orqa ildizcha", "Old ildizcha", "Ichki kapsulaning orqa oyogi", "Orqa shox"], "correct": 0},
    {"question": "Orqa ildizcha zararlanganda qanday sezgi buziladi", "answers": ["Chuqur va yuza", "Faqat chuqur", "Faqat yuza", "Buzilmaydi"], "correct": 0},
    {"question": "Ko‘ruv do‘ngligi zararlanganda qaysi sezgi buziladi", "answers": ["Chuqur va yuza", "Buzilmaydi", "Faqat yuza", "Faqat chuqur"], "correct": 0},
    {"question": "Og‘riq paydo bo‘lishi zararlanishiga xos", "answers": ["Ko‘ruv dumbog‘chasi", "Ko‘ruv trakti", "Po‘stloqning ko‘ruv zonasi", "Xiazma"], "correct": 0},
    {"question": "Orqa miya ko‘krak qismi kundalang zararlanganda qanday sezgi buzilishi kuzatiladi?", "answers": ["O‘tkazuvchi", "Segmentar", "Ildizchali", "Buzilmaydi"], "correct": 0},
    {"question": "Ichki kapsula zararlanganda sezgi buzilishlari yuzaga keladi", "answers": ["Gemianesteziya", "Paresteziya", "Dizesteziya", "Giperpatiya"], "correct": 0},
    {"question": "Orqa miyaning orqa ustuni zararlanganda sezgi buzilishi kuzatiladi", "answers": ["Vibratsion", "Xarorat", "Og‘riq", "Yuza va chuqur"], "correct": 0},
    {"question": "Eksterotseptiv sezgilarga sezgining qaysi turlari kiradi", "answers": ["Og‘riq va xarorat", "Og‘irlik sezgisi", "Bosim sezgisi", "Passiv harakat sezgisi"], "correct": 0},
    {"question": "Qaysi tuzilmalar zararlanganda og‘riq va xarorat sezgisi buziladi", "answers": ["Orqa shox", "Yen shox", "Oldingi shox", "Orqa tizimcha"], "correct": 0},
    {"question": "Qaysi tuzilmalar zararlanganda chuqur sezuvchanlik buziladi", "answers": ["Orqa tizimcha", "Orqa shox", "Yen shox", "Oldingi shox"], "correct": 0},
    {"question": "Orqa tizimcha zararlanganda sezuvchanlikning qaysi turi buziladi", "answers": ["Chuqur", "Ko‘rish", "Eshitish", "Xarorat"], "correct": 0},
    {"question": "Orqa miya orqa shoxi zararlanganda sezuvchanlikning qaysi turi buziladi", "answers": ["Og‘riq va xarorat", "Passiv harakat sezgisi", "Aktiv harakat sezgisi", "Bosim sezgisi"], "correct": 0},
    {"question": "Talamus zararlanganda sezuvchanlikning qaysi turi buziladi", "answers": ["Og‘riq va xarorat", "Passiv harakat sezgisi", "Bosim sezgisi", "Taktil sezgi"], "correct": 0},
    {"question": "Orqa tizimcha zararlanganda ataksiyaning qaysi turi yuzaga keladi", "answers": ["Sensitiv", "Vestibulyar", "Miyacha", "Po‘stloq"], "correct": 0},
    {"question": "Bemor ko‘zini yumgan holda tanish buyumni paypaslab aniqlay olmadi. Sezuvchanlikning bu turdagi buzilishi nima deb ataladi", "answers": ["Astereognoz", "Gipesteziya", "Anesteziya", "Dizesteziya"], "correct": 0},
    {"question": "Bemor ko‘rsatilgan ta'sirlanishni o‘zgargan holda, noadekvat qabul qildi. Bu buzilish nima deb ataladi", "answers": ["Dizesteziya", "Gipesteziya", "Anesteziya", "Astereognoz"], "correct": 0},
    {"question": "Bemorda ta'sirlanishsiz chumoli o‘rmalagandek, sanchilgandek, tortilgandek sezgilar kuzatildi. Buzilishning bu ko‘rinishi nima deb ataladi", "answers": ["Paresteziya", "Gipesteziya", "Anesteziya", "Astereognoz"], "correct": 0}
];