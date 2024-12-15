const questions  = [
    {
        "question": "Po‘stlok osti tugunlari qaysi sistemaga kiradi?",
        "answers": ["Ekstrapiramida", "Piramida", "Koordinatsiya", "B, V"],
        "correct": 0
    },
    {
        "question": "Miyacha yarim sharlarini nima bog‘lab turadi?",
        "answers": ["Miyacha chuvalchanga", "Tishli yadro", "Dumsimon yadro", "Sharsimon yadro"],
        "correct": 0
    },
    {
        "question": "Nistagm turlarini sanang?",
        "answers": ["1, 2, 3 to‘g‘ri", "Hammasi to‘g‘ri", "Faqat 1 to‘g‘ri", "Faqat 3 to‘g‘ri"],
        "correct": 0
    },
    {
        "question": "PMD ning klinik shakllarini belgilang?",
        "answers": ["Dyushen, Erba-Rota, Bekker-Kiner, Landuzi-Dejerin", "Kugelьberg-Velandarning spinal shakli", "Russi-Levi, Miotoniya, Miasteniya", "Arana-Dyushenning nevralamiotrofiyasi"],
        "correct": 0
    },
    {
        "question": "Aminokislota almashinuvi buzilishidan kelib chiqqan kasallik.",
        "answers": ["FKU", "Teya-Saks kasalligi", "Leykodistrofiya", "Mukoprolisaxaridoz"],
        "correct": 0
    },
    {
        "question": "Gentington xoreyasi uchun qanday belgilar xarakterli:",
        "answers": ["Dementsiya, diffuz xoreik giperkinezlar, mushak distoniyasi", "Dementsiya, mikrotsefaliya, talvasa", "Dementsiya, falajlik, talvasa", "Dementsiya, gidrotsefaliya, talvasa"],
        "correct": 0
    },
    {
        "question": "Qaysi irsiy kasalliklarda KFK ko‘payadi?",
        "answers": ["PMD", "Gentington xoreyasi", "Fridreyx ataksiyasi", "Sharko-Mari"],
        "correct": 0
    },
    {
        "question": "Fridreyx kasalligiga xos belgilar:",
        "answers": ["Hamma javoblar to‘g‘ri", "Mushak kuchi pasaygan, miyacha va piramid simptomlari", "Gipertenzion sindrom xarakterli; chuqur sezgi buzilishlari xarakterli emas", "Chuqur sezgi buzilishlari sust rivojlangan"],
        "correct": 0
    },
    {
        "question": "Leptomeningit uchun qanday kechish xarakterli",
        "answers": ["O‘tkir osti", "O‘tkir", "O‘tkir va o‘tkirosti", "O‘tkir va o‘tkirosti"],
        "correct": 0
    },
    {
        "question": "Leptomening qanaka lokalizatsiyasida Jekson epileptik xurujlar ko‘zatiladi",
        "answers": ["Qonveksital", "Bazal", "Bosh suyagi orqa chuqurchasi", "Oyoqchalararo"],
        "correct": 0
    },
    {
        "question": "Bazal leptomeningitda asosiy simptom nima",
        "answers": ["Xamma javoblar to‘g‘ri", "Bulbar", "Ko‘z harakati buzilishi", "Ko‘rish buzilishi"],
        "correct": 0
    },
    {
        "question": "Surunkali serebral leptomeningitda qaysi tuzilmalar zararlanadi:",
        "answers": ["Miyaning yumshok pardasi va po‘stloqning yuza soxasi", "Miya ustuni", "Miya korinchalari", "Miya qattiq pardasi"],
        "correct": 0
    },
    {
        "question": "Quyida keltirilgan kasalliklardan qaysi biri periferik nervlarning zararlanishi bilan kechadi:",
        "answers": ["Sharko-mari nevral amiotrofiyasi", "Erba miopatiyasi", "Shtryumpelь spastik paraplegiyasi", "Kugelьberg-velander spinal amiotrofiyasi"],
        "correct": 0
    },
    {
        "question": "Nasliy-degenerativ kasalliklardan qaysi biri kuprok polinevropatiyani eslatadi:",
        "answers": ["Sharko-mari nevral amiotrofiyasi", "Miopatiya", "Shtryumpelь spastik paraplegiyasi", "Tomson miotoniyasi"],
        "correct": 0
    },
    {
        "question": "Verdnig-Goffman spinal amiotrofiyadagi shikastlanadigan orqa miya tuzilmalari:",
        "answers": ["Oldingi shox", "Old ustunlar", "Orqa ustun", "Yen ustun"],
        "correct": 0
    },
    {
        "question": "Uch shoxli nervning nevralgiyasini nevriti(nevropatiya)dan asosiy farqi nimada:",
        "answers": ["Peshona", "Chakka", "Tepa", "Ensa"],
        "correct": 0
    },
    {
        "question": "Auerbax-Flatau qonuni orqa miya o‘smalarining qaysi birida bo‘ladi",
        "answers": ["Ekstramedulyar", "Intramedulyar", "Hamma o‘smalar uchun", "Hamma o‘smalar uchun xos emas"],
        "correct": 0
    },
    {
        "question": "Qanday likvorologik sindromlar orqa miya o‘smalariga xarakterli:",
        "answers": ["Oqsil-hujayra dissotsiatsiyasi", "Hujayra-oksil diss.", "Glyukoza va xloridlar qontsntratsiyasining pasayishi", "Glyukoza va xloridlar qontsntratsiyasining oshishi"],
        "correct": 0
    },
    {
        "question": "Orqa miya o‘smalring qaysi lokalizatsiyasiga kauzalgik og‘riqlar xarakterli:",
        "answers": ["Ot dumi", "Bo‘yin qismi", "Bel qismi", "Dumg‘aza qismi"],
        "correct": 0
    },
    {
        "question": "Umurtqa o‘smalariga xos birinchi klinik simptom:",
        "answers": ["Umurtka pog‘onasidagi og‘riq.", "Rentgenologik o‘zgarishlar", "Sezgining o‘tkazuvchi tipda buzilishi", "Reflekslarni o‘zgarishi"],
        "correct": 0
    },
    {
        "question": "Qaysi tipdagi bosh og‘riqlar ko‘ruv nervini dimlanishiga sabab bo‘ladi",
        "answers": ["Gipertenzion", "Qon tomir", "Migrenoz", "Psixogen"],
        "correct": 0
    },
    {
        "question": "Chap yarim shar pyoshona bo‘lagi zararlanganda qanday afaziya ko‘zatiladi:",
        "answers": ["Efferent motor", "Semantik", "Afferent motor", "Sensor"],
        "correct": 0
    },
    {
        "question": "Nutq o‘zgarishining qaysi turi po‘stloq nutq markazi zararlanganda ko‘zatiladi:",
        "answers": ["Motor afaziya", "Skandirlashgan nutq", "Afoniya", "Rinolaliya"],
        "correct": 0
    },
    {
        "question": "Piramida yo‘lining II-neyroni qayerda joylashgan:",
        "answers": ["Orqa miya oldingi shoxida", "Orqa miya orqa shoxida", "Orqa miya yen shoxida", "Bosh miya po‘stlogida"],
        "correct": 0
    },
    {
        "question": "Kortikospinal yo‘l ichki kapsulaning qayeridan o‘tadi:",
        "answers": ["Orqa sonini oldingi 2/3 qism idan", "Oldingi sonini oldingi 2/3 qism idan", "Oldingi sonining orqa 1/3 qismidan", "Tizzasidan"],
        "correct": 0
    }
];
