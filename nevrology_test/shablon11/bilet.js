const questions = [
    {"question": "Umurtkalararo gangliyni zararlanishi orqa miya orqa shoxining zararlanishidan nima bilan farklanadi", "answers": ["Gerpetik toshmalar bulishi", "Sezuvchanlikning dissotsiatsiyalashgan tipda buzilishi", "Sezuvchanlikni tushib kolish xususiyati bilan", "Qo‘shimcha harakat buzilishi bilan"], "correct": 0},
    {"question": "Orqa miyaning orqa ildizi qanday vazifani bajaradi", "answers": ["Sezgi", "Harakat", "Trofik", "Ekstrapiramidal"], "correct": 0},
    {"question": "T10 dermatoma soxasida og‘riq sezgisining o‘tkazuvchi turi buzilishi yuqori chegarasi aniqlanganda orqa miyaning zararlanishi qaysi segmentlarga tugi keladi", "answers": ["T8 -T9", "T6- T7", "T9 - T10", "T10 - T11"], "correct": 0},
    {"question": "O‘rta chiziqka nisbatan nozik tutamni qaysi qismida oyoklar uchun tolalar joylashgan", "answers": ["Medial", "Lateral", "Ventral", "Dorsal"], "correct": 0},
    {"question": "O‘rta chiziqka nisbatan ponasimon tutamni qaysi qismida tana va qo‘llar uchun tolalar joylashgan", "answers": ["Lateral", "Ventral", "Dorsal", "Medial"], "correct": 0},
    {"question": "Og‘riq va xarorat tolalari (lateral ilmok) Chuqur va taktil sezgi tolalariga (medial ilmok) tolalariga qayerda qo‘shiladi", "answers": ["Miya ko‘prigida", "Uzunchok miyada", "Miya oyokchalarida", "Ko‘ruv do‘ngligida"], "correct": 0},
    {"question": "Xidlov analizatorining qaysi bo‘limi ta'sirlanganda xidlov galyutsinatsiyasi yuzaga keladi", "answers": ["Po‘stloqning chakka bulagi", "Burun bo‘shlig‘i shillik kavati", "Xidlov piyezchasi", "Xidlov uchburchagi"], "correct": 0},
    {"question": "Xidlov analizatorining qaysi bo‘limi zararlanganda anosmiya va giposmiya yuzaga kelmaydi", "answers": ["Po‘stloq soxa", "Burun bo‘shlig‘i shillik kavati", "Xidlov nervi", "Xidlov trakti"], "correct": 0},
    {"question": "Ko‘ruv nervi qaysi neyronlarning aksonlaridan tuzilgan", "answers": ["Ganglioz xujayra", "Yoruglik sezuvchi xujayra", "Bipolyar xujayra", "Ko‘ruv do‘ngligi neyronlari"], "correct": 0},
    {"question": "Qaysi tuzilmalar ko‘rishning po‘stloq osti markazi xisoblanadi", "answers": ["Lateral tizzasimon tana", "Medial tizzasimon tana", "Dumli yadro", "Subtalamik yadro"], "correct": 0},
    {"question": "Qaysi tuzilma ko‘ruv analizatorining reflektor po‘stloq osti markazi xisoblanadi", "answers": ["To‘rttepalikning yuqori tepaligi", "Medial tizzasimon tana", "Lateral tizzasimon tana", "Epifiz"], "correct": 0},
    {"question": "Ko‘rish o‘tkirligining pasayishi nima deb ataladi", "answers": ["Ambliopiya", "Amavroz", "Gipermetropiya", "Presbiopiya"], "correct": 0},
    {"question": "Ko‘rish maydonining chegaralangan nuqsoni nima deb ataladi", "answers": ["Skotoma", "Gemianopsiya", "Qontsentrik torayish", "Kvadrant gemianopsiya"], "correct": 0},
    {"question": "Qaysi tuzilmalar zararlanishida yuzaga keladigan skotomani bemor sezmaydi va qo‘shimcha tekshiruv vaktida aniqlanadi", "answers": ["Ensa bo‘lak po‘stlogida", "Ko‘ruv nervi", "Ko‘ruv trakti", "Xiazma"], "correct": 0},
    {"question": "Bemorda o‘ng tomonlama amavroz, qorachig‘ning yoruglikka To‘g‘ri va yendosh reaktsiyalari yo‘q, o‘ng qorachig‘ kengaygan. Oftalmoskopiyada: o‘ngda birlamchi atrofiya. Nima zararlangan", "answers": ["Ko‘ruv nervi", "Xiazma ko‘ruv trakti", "Lateral tizzasimon tana", "Ko‘ruv nurlanmasi"], "correct": 0},
    {"question": "Ko‘ruv nervi zararlanganda ko‘ruv maydonida qanday nuqsonlar yuzaga keladi", "answers": ["Ko‘ruv maydonining qontsentrik torayishi", "O‘ng tomonlama gomonim gemianopsiya", "Chap tomonlama gomonim gemianopsiya", "Binazal gemianopsiya"], "correct": 0},
    {"question": "Qaysi tuzilma zararlanganda odatda bir tomonlama ambliopiya yuzaga keladi", "answers": ["Ko‘ruv nervi", "Xiazma", "Ko‘ruv trakti", "Lateral tizzasimon tana"], "correct": 0},
    {"question": "Bitemporal gemianopsiya, to‘r pardaning chakka yarmini yoritilganda fotoreaktsiyalar chaqiriladi. Nima zararlangan", "answers": ["Xiazmaning o‘rta qismi", "Ko‘ruv nervi", "Xiazmaning tashki qismi", "Ko‘ruv trakti"], "correct": 0},
    {"question": "Xiazmaning ikki tomonlama tashki qism larining zararlanishida gemianopsiyaning qaysi turi yuzaga keladi", "answers": ["Binazal gemianopsiya", "O‘ng tomonlama gomonim gemianopsiya", "Chap tomonlama gomonim gemianopsiya", "Bitemporal gemianopsiya"], "correct": 0},
    {"question": "Markaziy ko‘ruv maydonining tushib kolishi bilan kechuvchi o‘ng tomonlama gomonim gemianopsiya, ko‘ruv maydonidagi nuqsonlar assimetrik. To‘r pardaning o‘ng yarmi yoritilganda fotoreaktsiyalar chaqiriladi. Nima zararlangan", "answers": ["Chap ko‘ruv trakti", "Xiazmaning tashki qism lari", "O‘ng ko‘ruv trakti", "O‘ng ko‘ruv nurlanishi"], "correct": 0},
    {"question": "Qaysi tuzilma zararlanganda gemianopsiya gemiplegiya va gemianesteziya bilan birga kechadi", "answers": ["Ichki kapsula", "Ko‘ruv nervi", "Xiazma", "Ko‘ruv trakti"], "correct": 0},
    {"question": "Qaysi tuzilma zararlanganda gemianopsiya gemianesteziya va og‘riqlar bilan birga keladi, biroq gemiplegiya bo‘lmaydi", "answers": ["Talamus", "Ko‘ruv trakti", "Lateral tizzasimon tana", "Ichki kapsula"], "correct": 0},
    {"question": "Chap pona zararlanganda gemianopsiyaning qaysi turi yuzaga keladi", "answers": ["O‘ng tomonlama pastki kvadrant", "Binazal gemianopsiya", "Bitemporal gemianopsiya", "O‘ng tomonlama yuqori kvadrant"], "correct": 0},
    {"question": "Ko‘ruv analizatorining qaysi bo‘limi ta'sirlanganda ko‘ruv galyutsinatsiyasi yuzaga keladi", "answers": ["Po‘stloqning ensa qismi", "Xiazma", "Ko‘ruv trakti", "Lateral tizzasimon tana"], "correct": 0},
    {"question": "Ko‘zni harakatlantiruvchi nerv bosh suyagining qaysi tyoshigidan chiqadi", "answers": ["Yuqori ko‘z tirkishi", "Yirtiq tyoshik", "Yumalok tyoshik", "Ovalsimon tyoshik"], "correct": 0}
];