const questions  = [
   {
        "question": "Bemorning o‘ng tarafida xamma mimik mushaklarning falajligi va ko‘z qurishi. Shu tarafda giperako‘ziya va tilning oldingi 2/3 qismida ta'm bilish buzilgan. Yuz nervining zararlanish soxasini aniqlang:",
        "answers": ["Fallopiy kanalini boshlang‘ich qismi", "N.stapedius va horda thympani orasida", ".stilomastoideum", "Tizzadan pastda, n.stapedius chiqishidan oldin"],
        "correct": 0
    },
    {
        "question": "N.petrosus maior zararlanganda qanday buzilish kelib chiqadi:",
        "answers": ["Ko‘z qurishi", "Ko‘z yoshi oqishi", "Giperako‘ziya", "Gipoako‘ziya"],
        "correct": 0
    },
    {
        "question": "N.stapedius zararlanganda qanday buzilishlar kelib chiqadi:",
        "answers": ["Giperako‘ziya", "Tilning oldingi 2/3 qismida ta'm bilishning buzilish", "Gipoako‘ziya", "Ko‘zdan yosh oqishi"],
        "correct": 0
    },
    {
        "question": "Horda thympani zararlanganda qanday buzilishlar kelib chiqadi:",
        "answers": ["Tilning oldingi 2/3 qismida ta'm bilishning buzilishi", "Ko‘zning qurishi", "Ko‘zdan yosh oqishi", "Giperako‘ziya"],
        "correct": 0
    },
    {
        "question": "Po‘stloq osti eshituv markaziga qaysi tuzilma kiradi:",
        "answers": ["Medial tizzasimon tana", "Lateral tizzasimon tana", "Dumsimon yadro", "Subtalamik yadro"],
        "correct": 0
    },
    {
        "question": "Uzunchoq miyaning pastki qismini ko‘ndalang kesmasida qaysi nerv yadrolari bo‘lmaydi:",
        "answers": ["Yuz va uzoqlashtiruvchi nervining yadrosi", "Til osti nervi yadrosi", "Uchtarmoqli nervni sezgi yadrosi", "Nozik va ponasimon yad"],
        "correct": 0
    },
    {
        "question": "O‘rta miya tarkibiga kirmaydi:",
        "answers": ["Uzoqlashtiruvchi nerv yadrosi", "Ko‘z olmasini harakatlantiruvchi nerv yadro", "G‘altaksimon nerv yadrosi", "Qizil yadro"],
        "correct": 0
    },
    {
        "question": "Trigger maydonlarining bo‘lishi qaysi kasallikka xos:",
        "answers": ["Uch shoxli nerv nevralgiyasiga", "Koxlear nevritga", "Yuz nervi nevriti(nevropatiyasi)ga", "Til-xalkum nervi nevralgiyasiga"],
        "correct": 0
    },
    {
        "question": "Uch shoxli nervning nevralgiyasini nevriti(nevropatiya)dan asosiy farki nimada:",
        "answers": ["Nerv funktsiyasining buzilish simptomlarini borligi", "Og‘riq sindromining mavsumiyligi", "Og‘riqning lokalizatsiyasi", "Og‘riq paroksizmlarining takrorlanish maro"],
        "correct": 0
    },
    {
        "question": "Uch shoxli nervning nevralgiyasini markaziy genezida qaysi dori ko‘proq foydali:",
        "answers": ["Karbamazepin guruxi", "Tomirlarni kengaytiruvchi", "Analgetiklar", "Degidratatsion"],
        "correct": 0
    },
    {
        "question": "Uch shoxli nerv nevralgiyasini periferik genezida qaysi dorilar ko‘proq foydali:",
        "answers": ["Og‘riq qoldiruvchi", "Antixolinesteraza guruxi", "Degidratatsion", "Karbamazepin guruxi"],
        "correct": 0
    },
    {
        "question": "Uch shoxli nerv 'ustun' nevralgiyasida qaysi dori effektiv:",
        "answers": ["Tomirlarni kengaytiruvchi", "Og‘riq qoldiruvchi", "Karbamazepin guruxi", "Degidratatsion"],
        "correct": 0
    },
    {
        "question": "Eshituv analizatorining po‘stloq markazi qayerda joylashgan:",
        "answers": ["Chakka bo‘lakda", "Tepa bo‘lakda", "Ensa bo‘lakda", "Paratsentral bo‘lakchada"],
        "correct": 0
    },
    {
        "question": "Jaranglayotgan kamerton bemorning so‘rg‘ichsimon o‘simtasiga qo‘yiladi. Bemor jarangni eshitmay qolganida kamertonni qo‘log‘iga yaqinlashtiriladi. Bu qanday sinama:",
        "answers": ["Rinne sinamasi", "Veber sinamasi", "Shvabax sinamasi", "Romberg sinamasi"],
        "correct": 0
    },
    {
        "question": "Jaranglovchi kamerton bemor boshining tepa qismi o‘rtasiga qo‘yiladi va 'ikki tomonda xam bir xil eshitilyaptimi?' deb so‘raladi. Bu sinama nima deb ataladi:",
        "answers": ["Veber sinamasi", "Rinne sinamasi", "Shvabax sinamasi", "Romberg sinamasi"],
        "correct": 0
    },
    {
        "question": "Til-xalqum nervining yadrosi qayerda joylashgan:",
        "answers": ["Uzunchoq miyada", "Diensfal soxada", "Miya oyoqchasida", "Varoliy ko‘prigida"],
        "correct": 0
    },
    {
        "question": "Sayyor nerv miya qutisidan qaysi teshik orqali chiqadi:",
        "answers": ["Buyinturuq teshigi", "Yirtik tyoshik", "Yumalok tyoshi", "Ovalsimon tyoshik"],
        "correct": 0
    },
    {
        "question": "Qaysi bosh miya nervlari zararlanganda bul‘bar falaj kelib chiqadi:",
        "answers": ["X, X, XII", "IX, X, XI", "VIII, IX, X", "XII, X"],
        "correct": 0
    },
    {
        "question": "Qaysi bosh miya nervlari yadrosi bir tomonlama po‘stloq bilan bog‘langan:",
        "answers": ["XII, VII", "VII, X", "XI", "VI"],
        "correct": 0
    },
    {
        "question": "Qaysi bosh miya juft nervlari zararlanganda disfagiya kelib chiqadi:",
        "answers": ["IX-X", "VII-XI", "VII, X", "X"],
        "correct": 0
    },
    {
        "question": "Qaysi bosh miya juft nervlari zararlanganda dizartriya kelib chiqadi:",
        "answers": ["XII", "VIII-XII", "X", "XI"],
        "correct": 0
    },
    {
        "question": "Qaysi bosh miya juft nervlari zararlanganda disfagiya kelib chiqadi:",
        "answers": ["IX-X", "VII-XI", "VII, X", "X"],
        "correct": 0
    },
    {
        "question": "Chaynov mushaklarini qaysi bosh miya juft nervi innervatsiyalaydi:",
        "answers": ["V", "XII", "X", "VII"],
        "correct": 0
    },
    {
        "question": "Qaysi mushaklar zararlanganda yutinish buziladi:",
        "answers": ["Yumshoq tanglay", "Chayno", "Mimik", "Til"],
        "correct": 0
    },
    {
        "question": "Qaysi bosh miya juft nervlari zararlanganda disfoniya kelib chiqadi:",
        "answers": ["X", "VII-XI", "VII, X", "XI"],
        "correct": 0
    }
];