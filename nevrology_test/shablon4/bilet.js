const questions = [
    {"question": "Qo‘lni tirsak bo‘g‘im ida qaysi mushak bukadi:", "answers": ["Yelkaning ikki boshli mushagi", "Deltasimon", "boyin umrtqasi", "Ko‘krakning katta mushagi"], "correct": 0},
    {"question": "Qo‘lni tirsak bo‘g‘im ida qaysi mushak yozadi:", "answers": ["Yelkaning uch boshli mushagi", "Deltasimon", "boyin umrtqasi", "Ko‘krakning katta mushagi"], "correct": 0},
    {"question": "Qaysi mushak qo‘lni gorizontal xolatga keltiradi:", "answers": ["Deltasimon", "Rombsimon", "boyin umrtqasi", "Ko‘krakning katta mushagi"], "correct": 0},
    {"question": "Qaysi mushak qo‘lni gorizontal xolatdan yuqoriga ko‘taradi:", "answers": ["Oldingi tishsimon", "Deltasimon", "Ko‘krakning katta mushagi", "Rombsimon"], "correct": 0},
    {"question": "Qaysi mushaklar barmoklarni o‘rta barmokdan uzoqlashtiradi va yakinlashtiradi:", "answers": ["Suyaklararo mushaklar", "Barmoklarni Chuqur bukuvchi mushaklar", "Barmoklarni yuzaki bukuvchi mushaklar", "Chuvalchangsimon mushaklar"], "correct": 0},
    {"question": "Son-chanok bo‘gimini qaysi mushak bukadi:", "answers": ["Bel-enbosh", "Katta dumba", "O‘rta dumba", "To‘rt boshli"], "correct": 0},
    {"question": "Oyoqni tizza bo‘g‘imida qaysi mushak yozadi:", "answers": ["Sonning to‘rt boshli mushagi", "Yarim taranglashtiruvchi", "Yarim pay", "Sonning ikki boshli mushagi"], "correct": 0},
    {"question": "Sonning uzoqlashishini qaysi mushak ta'minlaydi:", "answers": ["O‘rta va kichik dumba", "Bel yenbosh mushagi", "Sonning to‘rt boshli mushagi", "Katta dumba"], "correct": 0},
    {"question": "Bosh miya po‘stlogining qaysi kavatida katta piramida  xujayralari (Bets) joylashgan:", "answers": ["Beshinchi", "Birinchi", "Ikkinchi", "Uchinchi"], "correct": 0},
    {"question": "Quyidagi simptomlarning qaysi biri piramida  yo‘li zararlanishiga xos:", "answers": ["pakki", "tishli gildirak", "Atetoz", "Gemiballizm"], "correct": 0},
    {"question": "Quyidagi tuzilmalarning qaysi biri zararlanganda  oyoqlarda periferik falajlik paydo bulishi mumkin:", "answers": ["Orqa miya", "Bosh miya po‘stlogi", "Ichki kapsula", "Miya oyoqchasi"], "correct": 0},
    {"question": "Chap tomonlama gemiplegiya, shu tomonda sezgining xamma turlari gemianesteziyasi va chap tomonlama gomonim gemianopsiya.Nima zararlangan:", "answers": ["Ichki kapsula", "Orqa va oldingi markaziy pushta", "Talamus", "Miya oyoqchasi"], "correct": 0},
    {"question": "Chap tomonlama og‘riq  va xarorat sezgisi o‘mrovdan  kindikkacha buzilgan. Nima zararlangan:", "answers": ["Orqa shoxlar", "Oldingi shoxlar", "Oldingi tizimcha", "Orqa tizimcha"], "correct": 0},
    {"question": "Qovurgalar ravogidan pastda Chuqur sezgi buzilgan.Zararlanish o‘chog‘ini ayting:", "answers": ["Orqa tizimcha", "Oldingi shoxlar", "Orqa shoxlar", "Oldingi tizimcha"], "correct": 0},
    {"question": "Orqa miyaning oldingi ildizining zararlanishi oldingi shox zararlanishidan nima bilan fark kiladi:", "answers": ["I xususiyati bilan mushak uchishlar", "Mushak tonusi o‘zgarishi xususiyati bilan", "Pay reflekslari pasayishi bilan", "Falajlik borligi bilan"], "correct": 0},
    {"question": "Detserebratsion rigidligi miya ustuning qaysi satxidan zararlanganda paydo bo‘ladi:", "answers": ["Qizil yadrodan", "Uzunchok miyaning yuqori qism laridan", "Uzunchok miyaning pastki qism laridan", "Miya ko‘prigidan"], "correct": 0},
    {"question": "Qaysi yadro orqali miyacha tana vaziyatini o‘zgartirganda mushak tonusini boshkaradi:", "answers": ["Qizil yadrodan", "Lyuis tanasi", "Qora modda", "Yo‘l-yo‘l tana"], "correct": 0},
    {"question": "Xoreik giperkinez qayer zararlanganda ko‘zatiladi:", "answers": ["Neostriatum", "Ok shar medial qismi", "Ok shar lateral qismi", "Paleostriatum"], "correct": 0},
    {"question": "Tormozlovchi mediator bulib xisiblanadi:", "answers": ["GAMK", "Noradrenalin", "Atsetilxolin", "Adrenalin"], "correct": 0},
    {"question": "Striopallidar tizimining xamma afferent yo‘llari qayerda yakunlanadi:", "answers": ["Yo‘l-yo‘l tanada", "Ok sharni  lateral yadrosida", "Ok sharni medial yadrosida", "Subtalamik yadroda"], "correct": 0},
    {"question": "Qizil yadro qaysi tizimga kiradi:", "answers": ["Pallido-nigral", "Striar", "Piramida", "Miyacha"], "correct": 0},
    {"question": "Qaysi yadrodan miyachaning asosiy orqa miyaga boruvchi efferent yo‘li boshlanadi:", "answers": ["Tishli", "Yopilgich", "Tiqinsimon", "Sharsimon"], "correct": 0},
    {"question": "Ekstrapiramida sistemasidagi eng axamiyatli trakt:", "answers": ["Retiqo‘lo-spinal", "Medial bo‘ylama tutam", "Vestibulo-spinal", "Olivo-spinal"], "correct": 0},
    {"question": "Striar sistemaga kiradi:", "answers": ["Dumli yadro , po‘stloq (skorlupa)", "Qora substantsiya", "Ko‘ruv do‘mbog‘i", "Qadoqsimon (mozol) tana"], "correct": 0},
    {"question": "Ekstrapiramida sistemasining asosiy mediatori:", "answers": ["Dofamin", "Adrenalin", "Adrenalin", "To‘g‘ri javob yo‘q"], "correct": 0}
];