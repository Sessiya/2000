const questions = [
    {
        question: "Pereferik harakat neyroni zararlanganda mushak tonusi",
        answers: ["Pasayadi", "Oshadi", "O‘zgarmaydi", "Biroz oshadi"],
        correct: 0
    },
    {
        question: "Markaziy harakat neyroni zararlanganda mushak tonusi",
        answers: ["Oshadi", "O‘zgarmaydi", "Biroz pasayadi", "Pasayadi"],
        correct: 0
    },
    {
        question: "Qo‘lda patologik piramida simptomi - refleksi",
        answers: ["Rossolimo", "Babinskiy", "Oppengeym", "Шеффер"],
        correct: 0
    },
    {
        question: "Mushak gipotrofiyasi xarakterli",
        answers: ["Pereferik harakat neyroni shikastlanganda", "Miyacha shikastlanganda", "Po‘stloq zararlanganda", "Markaziy harakat neyroni shikastlanganda"],
        correct: 0
    },
    {
        question: "Mushak tonusi ortganda",
        answers: ["Markaziy harakat neyroni shikastlanganda", "Pereferik harakat neyroni shikastlanganda", "Miyacha shikastlanganda", "A va b javoblar to‘g‘ri"],
        correct: 0
    },
    {
        question: "Markaziy harakat neyroni zararlanganda chuqur reflekslar:",
        answers: ["Oshadi", "O‘zgarmaydi", "Pasayadi", "Biroz oshadi"],
        correct: 0
    },
    {
        question: "Periferik harakat neyroni zararlanganda chuqur reflekslar:",
        answers: ["Pasayadi", "Biroz oshadi", "O‘zgarmaydi", "Oshadi"],
        correct: 0
    },
    {
        question: "Ikkala qo‘lda periferik paralich fibrillyar va fastsiqo‘lyar uchishlar bilan oyoklarda harakat o‘zgarishsiz. Orqa miyaning qaysi qism i zararlangan:",
        answers: ["Oldingi shoxi", "Orqa shoxi", "Yen shoxi", "yon shoxi"],
        correct: 0
    },
    {
        question: "Bemorda chap tomondan boshlanuvchi va bir tomonga tarkaluvchi tutkanok xurujlari ko‘zatildi. O‘choqni aniqlang:",
        answers: ["Oldingi markaziy pushtaning yuqori qismi", "Peerkulyar soha", "Oldingi markaziy pushtaning o‘rta qismi", "Yuqori chakka egati"],
        correct: 0
    },
    {
        question: "Bilak va tovonda sust parez mushaklar atrofiyasi bilan karpo-radial va axill refleks chaqirilmadi. Distal qism larida gipesteziya va og‘riq . Zararlangan strukturani aniqlang:",
        answers: ["Kup nervining zararlanishi", "orqa ildizlar", "Oldingi ildizchalar", "Yelka va dumgaza chigali"],
        correct: 0
    },
    {
        question: "Harakatni tekshirish usullari:",
        answers: ["Xamma javob to‘g‘ri", "Aktiv harakat", "passiv harakat", "fiziologik reflekslar"],
        correct: 0
    },
    {
        question: "Harakatni tekshirish usullar ortiqchasini chiqaring:",
        answers: ["Ko‘z olmasi harakati", "Aktiv harakat", "passiv harakat", "patologik reflekslar"],
        correct: 0
    },
    {
        question: "Qaysi mushak qo‘lni tirsak bo‘gimida bukadi:",
        answers: ["Yelkaning ikki boshli mushagi", "Delьtasimon", "Oldingi tishchali mushak", "Ko‘krak kata mushagi"],
        correct: 0
    },
    {
        question: "Markaziy piramidal falajlikda qaysi belgi ko‘zatilmaydi:",
        answers: ["Mushak va nervlarni elektr qo‘zgaluvchanligini buzilishi", "Tos organlari funktsiyasini buzilishi", "Pay reflekslarini kuchayishi", "Mushaklar gipotrofiyasi"],
        correct: 0
    },
    {
        question: "Broun-Sekar sindromida o‘choq tomondagi markaziy falajlik bilan birgalikda ko‘zatiladigan belgini ko‘rsating:",
        answers: ["O‘choq tomonda Chuqur sezgi buzilishi,  qarshisida – yuzaki sezgini buzilishi", "Karama- qarshi tomonda xamma turdagi sezgini buzilishi", "O‘choq tomonda og‘riq  va xarorat sezgisini buzilishi", "gemiparez"],
        correct: 0
    },
    {
        question: "Chap tomnda yuz nervini periferik falajligi, chap ko‘zda yakinlashtiruvchi gilaylik, chap o‘rta Zelder soxasida gipesteziya va o‘ng tomonda patologik reflekslar bo‘lganda zararlanish o‘chogi qayerda joylashgan:",
        answers: ["Miya ko‘prigini chap tomonida", "Chap miyacha-ko‘prik burchagida", "Miyachani o‘ng yarimsharida", "Chap chakka suyagi piramidasi chukkisi soxasida"],
        correct: 0
    },
    {
        question: "Tashqi eshituv yo‘li va quloq suprasida kuchli og‘riq, gerpetik toshmalar, eshituv va vestibulyar funktsiyasini buzilishi qaysi tugunni zararlanishiga xarakterli:",
        answers: ["Tizzasimon", "Vestibulyar", "Kanot-tanglay", "Gasserov"],
        correct: 0
    },
    {
        question: "Orqa miya ot dumini zararlanishiga xarakterli:",
        answers: ["Oyoqlarning sust parezi bilan ildiz turidagi sezgi buzilishi", "Oyoqlarning spastik parezi va tana a'zolarini vazifasini buzilishi", "hamma javob to‘g‘ri", "Oyoqlarda spastik parez sezgi va chanoq a'zolarini vazifasini buzilishisiz"],
        correct: 0
    },
    {
        question: "Oral avtomatizm refleksi qaysi yo‘llar zararlanishidan dalolat beradi:",
        answers: ["Kortiqonuklear", "Kortikospinal", "hamma javob to‘g‘ri", "Rubrospinal"],
        correct: 0
    },
    {
        question: "Retsiprok printsipiga ta'luqli:",
        answers: ["Агонитларни қисқариши ва антогонистларни бўшашиши", "Фақат антагонистларни бўшашиши", "hamma javob to‘g‘ri", "Antogonistlar va agonistlarni bo‘shashishi"],
        correct: 0
    },
    {
        question: "Piramida tizimi qanday harakatlarga javob beradi:",
        answers: ["Ixtiyoriy", "Ixtiyorsiz", "Faqat qo‘l-oyoqlarda harakat", "Piramida tizimi harakatlarga javob bermaydi"],
        correct: 0
    },
    {
        question: "Piramida yo‘lining 1-neyroni qayerda joylashgan:",
        answers: ["Bosh miya po‘stlog‘ini oldi markaziy pushtasida", "Bazal gangliyada", "Orqa miya oldingi shoxida", "Orqa miya orqa shoxida"],
        correct: 0
    },
    {
        question: "Пирамида йўлининг 2-нейрони қаерда жойлашган:",
        answers: ["Orqa miya oldingi shoxida", "Bazal gangliyada", "Orqa miya orqa shoxida", "Orqa miya yen shoxida"],
        correct: 0
    },
    {
        question: "Ichki kapsulaning qaysi qismidan kortikospinal yo‘l o‘tadi:",
        answers: ["Orqa sonining oldingi 2/3", "Oldingi 2/3 oldingi sonidan", "Orqa 2/3 oldingi sonidan", "Tizzadan"],
        correct: 0
    },
    {
        question: "Harakat yo‘lining periferik neyroni zararlanganda mushaklar tonusi:",
        answers: ["Pasayadi", "Oshadi", "O‘zgarmaydi", "O‘zgaradi"],
        correct: 0
    }
];