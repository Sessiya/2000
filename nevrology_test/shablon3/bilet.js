const questions = [
    {
        question: "Harakat yo‘lining markaziy neyroni zararlanganda mushak tonusi:",
        answers: ["Oshadi", "O‘zgarmaydi", "O‘zgaradi", "Pasayadi"],
        correct: 0
    },
    {
        question: "Qo‘lda patologik piramida simptomi – refleksi:",
        answers: ["Rossolimo", "Babinskiy", "Oppengeym", "Sheffer"],
        correct: 0
    },
    {
        question: "Mushak gipotrofiya nima shikastlanganda xarakterli:",
        answers: ["Periferik harakat neyroni", "Markaziy harakat neyroni", "Miyacha", "Таламус"],
        correct: 0
    },
    {
        question: "Patologik reflekslar nima shikastlanganda xarakterli:",
        answers: ["Markaziy harakat neyroni", "Periferik harakat neyroni", "Miyacha", "Talamus"],
        correct: 0
    },
    {
        question: "Markaziy neyron zararlanganda chuqur sezgi:",
        answers: ["Oshadi", "O‘zgarmaydi", "Pasayadi", "O‘zgaradi"],
        correct: 2
    },
    {
        question: "Periferik neyron zararlanganda chuqur sezgi:",
        answers: ["Pasayadi", "O‘zgarmaydi", "O‘zgaradi", "Pasayadi"],
        correct: 0
    },
    {
        question: "Orqa miyaning qaysi qismi shikastlangan (periferik paralich bilan):",
        answers: ["Oldingi shoxi", "Yen shoxi", "Orqa shoxi", "Orqa ustuncha"],
        correct: 0
    },
    {
        question: "Chap tovondan boshlanib yarim tanaga tarqaluvchi tutqanoq xurujlari o‘choq qayerda:",
        answers: ["Oldingi markaziy pushtaning yuqori qismi", "Operqo‘lyar soha", "Oldingi markaziy pushtaning o‘rta qismi", "Yuqori chakka pushtasi"],
        correct: 0
    },
    {
        question: "Harakatni tekshiruvchi usullar:",
        answers: ["Hammasi tog‘ri", "Aktiv harakatlar", "Fiziologik reflekslar", "Patologik reflekslar"],
        correct: 0
    },
    {
        question: "Harakatni tekshiruvchi usullar (ortiqchasini chiqaring):",
        answers: ["Ko‘z olmasi harakati", "Aktiv harakatlar", "Passiv harakatlar", "Fiziologik reflekslar"],
        correct: 0
    },
    {
        question: "Qaysi mushak qo‘lni tirsak bo‘g‘imida bukishda ishtirok etadi:",
        answers: ["Yelkaning ikki boshli", "Delьtosimon", "Oldingi tishli", "Hammasi tog‘ri"],
        correct: 0
    },
    {
        question: "Bel kengligini total shikastlanganda qanday harakat buzilishlari ko‘zatiladi:",
        answers: ["Pastki sust (vyalыy) paraparez", "Tetraparez", "Gemiparez", "Pastki spastik paraparez"],
        correct: 0
    },
    {
        question: "Quyida keltirilgan tuzilmalarning qaysi biridan piramida yo‘li utmaydi:",
        answers: ["Talamus", "Nurli toj", "Ichki kapsula", "Miya ustunining ventral qismi"],
        correct: 0
    },
    {
        question: "Bemorda spastik tetraparez. Bosh miya nervlari faoliyati buzilmagan. Nima zararlangan:",
        answers: ["Orqa miyaning yuqori buyin qismi", "Varoliyev ko‘prigi", "Uzunchok miya", "Buyin kengligi"],
        correct: 0
    },
    {
        question: "O‘ng tomonlama gemiplegiya, pay reflekslari oshgan va patologik belgilar mavjud. Chap tomonda mimik mushaklar periferik falajligi. Zararlangan o‘choqni ko‘rsating:",
        answers: ["Varoliy ko‘prigi", "Oldingi markaziy pushta", "Ichki kapsula", "Miya oyoqchalari"],
        correct: 0
    },
    {
        question: "Chap oyog‘idan boshlanib, tananing butun chap tomoniga tarkaluvchi motor tutkanok xurujlari. O‘choqni aniqlang:",
        answers: ["Operqo‘lyar soha", "Oldingi markaziy pushtaning o‘rta qismi", "Yuqori chakka pushtasi", "Chap tomondagi miya po‘stlog‘i"],
        correct: 0
    },
    {
        question: "Quyida keltirilgan tuzilmalarning qaysi biri shikastlanganda spastik gemiplegiya kelib chiqadi:",
        answers: ["Ichki kapsula", "Talamus", "Varoli ko‘prigi", "Pastki oliva"],
        correct: 0
    },
    {
        question: "Piramida yo‘lining II-neyroni qayerda joylashgan:",
        answers: ["Orqa miyaning oldingi shoxida", "Bosh miyaning po‘stlogida", "Bazal tugunlarda", "Orqa miyaning orqa shoxida"],
        correct: 0
    },
    {
        question: "Kortikospinal yo‘l qayerda kesishma xosil kiladi:",
        answers: ["Uzunchok va orqa miya chegarasida", "Miya oyoqchalarida", "Miya ko‘prigida", "Uzunchok miyada"],
        correct: 0
    },
    {
        question: "Quyidagi mushak guruxlarining qaysilari oldingi markaziy pushtada eng katta vakillikka ega:",
        answers: ["Kaft, barmoq, lab va til mushaklari", "Oyok va boldir mushaklar", "Son mushaklari", "Tana mushaklari"],
        correct: 0
    },
    {
        question: "Kortiqonuklear yo‘llar ichki kapsulaning qaysi qism idan o‘tadi:",
        answers: ["Tizza", "Oldingi sonning oldingi 2/3 qism idan", "Oldingi sonning orqa 1/3 qism idan", "Orqa sonning oldingi 2/3 qism idan"],
        correct: 0
    },
    {
        question: "Kortikospinal yo‘l ichki kapsulaning qaysi qism idan o‘tadi:",
        answers: ["Orqa sonning oldingi 2/3 qism idan", "Tizza", "Oldingi sonning oldingi 2/3 qism idan", "Oldingi sonning orqa 1/3 qism idan"],
        correct: 0
    },
    {
        question: "Bemor qo‘llarini oldinga uzatib, ko‘zlari yumik holda bitta qo‘li tezroq tushadi. Bu sinama nima deb ataladi:",
        answers: ["Bare (yuqori sinamasi)", "Lasseg", "Venderovich", "Styuart-xolms"],
        correct: 0
    },
    {
        question: "Falajlik tomonda oyoq barmoqlari keskin va kuchli passiv bukilganda, tizza va son-chanoq bo‘gim larida beixtiyor bukiladi. Simptom nima deb ataladi:",
        answers: ["Mari-fua-bexterev", "Bexterev", "Rossolimo", "Gunn"],
        correct: 0
    },
    {
        question: "O‘ng qo‘lning markaziy monoparezi. O‘ng tomonda yuz va til osti nervlari markaziy falajligi. Nima zararlangan:",
        answers: ["Miya po‘stlog‘i", "Ichki kapsula", "Miya oyoqchasi", "Varoliy ko‘prigi"],
        correct: 0
    }
];