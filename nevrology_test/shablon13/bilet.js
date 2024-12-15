const questions = [
    {
        "question": "Pastki qiyshik mushak ko‘z olmasini qaysi tomonga buradi",
        "answers": ["Tepaga va tashqariga", "Tepaga va ichiga", "Pastka va ichiga", "Tashqariga"],
        "correct": 0
    },
    {
        "question": "Ko‘zni harakatlantiruvchi nerv zararlanganda ko‘z olmasi qaysi tomonga ogadi",
        "answers": ["Tepaga va tashqariga", "Tepaga va ichiga", "Pastga va ichiga", "Tashqariga"],
        "correct": 0
    },
    {
        "question": "Ko‘zni harakatlantiruvchi nerv tarkibiga harakatlantiruvchi tolalardan boshka qanday tolalar kiradi",
        "answers": ["Parasimpatik", "Sekretor", "Simpatik", "Sezgi"],
        "correct": 0
    },
    {
        "question": "Akkomodatsiya falaji qaysi mushak zararlanganda ko‘zatiladi",
        "answers": ["Kipriksimon", "Qorachig‘ni toraytiruvchi mushak", "Qorachig‘ni kengaytiruvchi mushak", "Ko‘z kosasi muskuli"],
        "correct": 0
    },
    {
        "question": "Bemorda ko‘zni harakatlantiruvchi, galtaksimon, uzoqlashtiruvchi nervlar va V juft nervining birinchi shoxining zararlanishi. Zararlanish o‘chog‘ini toping",
        "answers": ["Yuqori ko‘z tirkishi", "Miya oyoqchalari", "Varoliy ko‘prigi", "Uzunchok miya"],
        "correct": 0
    },
    {
        "question": "Bemorda chapda ptoz va midriaz, shu tomonda ko‘z olmasi tashqariga va yuqoriga qaragan, uning tepaga, pastga va ichiga harakati yo‘q. qaysi nerv zararlangan",
        "answers": ["Ko‘zni harakatlantiruvchi", "Galtaksimon", "Uzoqlashtiruvchi", "Ko‘ruv"],
        "correct": 0
    },
    {
        "question": "O‘ng ko‘zning tepaga, pastga va ichkariga harakati yo‘q. Ko‘z olmasi tashqariga qaragan, yuqori kovok ko‘tarilmaydi, o‘ngda midriaz va qorachig‘ reaktsiyalari chaqirilmaydi. Chapda spastik gemiplegiya. Sindromning nomi",
        "answers": ["Veber", "Klod", "Raymon-sestan", "Miyar-gubler"],
        "correct": 0
    },
    {
        "question": "Uzoqlashtiruvchi nerv qaysi mushakni nervlaydi",
        "answers": ["Tashqi to‘g‘ri", "Yuqori to‘g‘ri", "Pastki to‘g‘ri", "Ichki to‘g‘ri"],
        "correct": 0
    },
    {
        "question": "Gorizontal nigoxning po‘stloq markazi qayerda joylashgan",
        "answers": ["O‘rta pyoshona pushta", "Yuqori pyoshona pushta", "Pastki pyoshona pushta", "Yuqori tepa bo‘lakcha"],
        "correct": 0
    },
    {
        "question": "Gorizontal nigoxning ustun markazi qayerda joylashgan",
        "answers": ["Varoliy ko‘prigi", "Miya oyoqchalari", "Uzunchok miya", "Talamus"],
        "correct": 0
    },
    {
        "question": "Vertikal nigoxning ustun markazi qayerda joylashgan",
        "answers": ["Miya oyoqchasida", "Varoliy ko‘prigida", "Uzunchok miyada", "Talamusda"],
        "correct": 0
    },
    {
        "question": "Qorachig‘ning yoruglikka javob reaktsiyasi ikki tomonlama chaqirilmaydi, birok qorachig‘da qonvergentsiya va akkomodatsiya saqangan. Sindromning nomi",
        "answers": ["Ardjil-robertson to‘g‘ri sindromi", "Ardjil-robertson teskari sindromi", "Gorner sindromi", "Gertvig-majandi sindromi"],
        "correct": 0
    },
    {
        "question": "Qorachig‘ning yoruglikka javob reaktsiyasi saqlangan, lekin qonvergentsiya va akkomodatsiyalarga reaktsiya chaqirilmaydi. Sindromning nomi",
        "answers": ["Ardjil-robertson teskari sindromi", "Ardjil-robertson to‘g‘ri sindromi", "Gorner sindromi", "Gertvig-majandi sindromi"],
        "correct": 0
    },
    {
        "question": "Bemorda o‘ng tomonda enoftalm, ko‘z yorigi qisqargan, qorachig‘ toraygan. Sindromning nomi",
        "answers": ["Gorner sindromi", "Ardjil-robertson to‘g‘ri sindromi", "Ardjil-robertson teskari sindromi", "Gertvig-majandi sindromi"],
        "correct": 0
    },
    {
        "question": "Uzoqlashtiruvchi nerv zararlanganda qaysi mushak zararlanadi",
        "answers": ["Tashki to‘g‘ri", "Yuqori to‘g‘ri", "Pastki to‘g‘ri", "Pastki kiyshik"],
        "correct": 0
    },
    {
        "question": "Qayer zararlanganda midriaz ko‘zatiladi",
        "answers": ["Ko‘z harakatlantiruvchi nervining qo‘shimcha mayda xujayrali yadrosi", "Uvchi nerviing yirik xujayrali yadrosi yuqori qismi ko‘z harakatlantir", "Ko‘z harakatlantiruvchi nerviing yirik xujayrali yadrosi pastki qismi", "Uzunasiga ketgan medial tutam yadrolari"],
        "correct": 0
    },
    {
        "question": "Uch shoxli nerv tarkibidagi harakatlantiruvchi tola qaysi shoxida bo‘ladi",
        "answers": ["Pastki jag nervi", "Ko‘z nervi", "Yuqori jag nervi", "Gasserov tuguni"],
        "correct": 0
    },
    {
        "question": "Uch shoxli nervning yuqori sezgi va harakatlantiruvchi yadrolari qayerda joylashgan",
        "answers": ["Varoliy ko‘prigi", "Dientsefal soxa", "Miya oyoqchasi", "Orqa miyaning tepa qismi"],
        "correct": 0
    },
    {
        "question": "3 shoxli nerv nevralgiyasida quyidagi preparatlarning qaysi biri effektiv",
        "answers": ["Antiqonvulьsiv", "Byallig‘lanishiga qarshi nestiroid preparatlar", "Kortikosteroidlar", "Istma tushiruvchilar"],
        "correct": 0
    },
    {
        "question": "Birlamchi yuz nervi nevropatiyasining rivojlanish asosida qanday patogenetik mexanizm yotadi",
        "answers": ["Nervning kompressiyasi va ishemiyasi", "Demiyelinizatsiya", "Vallerov degeneratsiyasi", "Intoksikatsiya"],
        "correct": 0
    },
    {
        "question": "Uch shoxli nervning qaysi tarmog‘i aralash xisoblanadi",
        "answers": ["3 shoxi", "2 shoxi", "1 shoxi", "1 va 2 shoxi"],
        "correct": 0
    },
    {
        "question": "Qaysi nervning yadrosi rombsimon chuqurchada yuz nervvining yug‘onlashgan qismida joylashgan",
        "answers": ["Uzoqlashtiruvchi", "Ko‘z olmasini harakatlantiruvchi", "Uch shoxli", "Eshituv"],
        "correct": 0
    },
    {
        "question": "Yuz nervi necha neyrondan tashkil topgan",
        "answers": ["2", "3", "4", "5"],
        "correct": 0
    },
    {
        "question": "Yuz nervining yadrosi qayerda joylashgan",
        "answers": ["Ko‘prikda", "Uzunchok miyada", "Miya oyoqchalarida", "Orqa miyada"],
                "correct": 0
    },
    {
        "question": "Bemorda o‘ng yuzi barcha mimik mushaklari parezi, ko‘z yoshlanishi ko‘zatiladi. Shu tomonda giperako‘ziya va tilning oldingi 2/3 qismida ta'm bilish buzilgan. Yuz nervining zararlanish soxasini aniqlang",
        "answers": ["Uzang nervining chiqishidan oldin, tizzachadan pastda", "Follopiy kanalining boshlangich qismi", "Tashki tizza qismi", "N. stapedius va n. Horda tympani orasida"],
        "correct": 0
    }
];