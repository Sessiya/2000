const tickets = [
  { "question": "Ishemik insult klinikasi.", "answer": `Ishemik insultda miya to‘qimasining qon bilan ta’minlanishi to‘satdan to‘xtaydi. Klinik belgilari zararlangan soha va qon tomirga bog‘liq: bir tomonlama falaj (gemiplegiya), so‘zlashish buzilishi (afaziya), ko‘rish buzilishi, bosh aylanishi, muvozanat yo‘qolishi, og‘riq sezilmasligi yoki sezuvchanlik yo‘qolishi, ongning susayishi yoki yo‘qolishi kuzatiladi.` },

{ "question": "O‘tkir radikulitni davosi.", "answer": `O‘tkir radikulitni davolashda yotoq rejimi, og‘riqni kamaytiruvchi dori vositalari (NSAIDlar), mushak relaksantlari, fizioterapiya, lokal blokadalar qo‘llaniladi. Shuningdek, issiq muolajalar va manual terapiya ham foydali bo‘lishi mumkin. Agar o‘tkir bosqichdan o‘tilgan bo‘lsa, jismoniy mashqlar bilan reabilitatsiya muhim.` },

{ "question": "Markaziy va periferik falajlanish belgilari.", "answer": `Markaziy falajda (yuqori motoneyronga zarar): giperrefleksiya, spastiklik, Babinskiy belgisi musbat bo‘ladi. Periferik falajda (quyi motoneyronga zarar): mushak tonusi past, reflekslar yo‘qoladi, mushak atrofiyasi va faszikulyatsiyalar kuzatiladi.` },

{ "question": "Ichki kapsula zararlansa harakat qanday buziladi.", "answer": `Ichki kapsula zararlansa, qarama-qarshi tana yarmida kuchli markaziy tipdagi falaj (gemiplegiya) yuzaga keladi. Bu sohada harakat va sezuv yo‘llari zich joylashgan bo‘lib, kichik shikast ham katta klinik belgilar beradi.` },

{ "question": "Insultlarni klassifikatsiyasi.", "answer": `Insultlar 2 asosiy turga bo‘linadi: 1) Ishemik insult – miya qon tomirining tiqilishi tufayli; 2) Gemorragik insult – qon tomir yorilishi natijasida qon quyilishi. Shuningdek, insultlar sababiga ko‘ra: tromboz, emboliya, gipertenziyaga bog‘liq gemorragik insultlar, subaraxnoidal qon quyilishi va boshqalar sifatida klassifikatsiyalanadi.` },

{ "question": "Gemorragik insult klinikasi.", "answer": `Tosatdan yuzaga keladi, bosh og‘rig‘i, ko‘ngil aynishi, qusish, ongning buzilishi, qattiq falajlik (odatda markaziy), qo‘rqinchli ko‘rinishlar, psixomotor bezovtalik, koma holati bo‘lishi mumkin. Qon quyilgan joyga qarab, simptomlar farqlanadi.` },

{ "question": "Gemorragik insult davosi.", "answer": `Tez yordam chaqiriladi. Davolash: gipertenziya nazorati (antigipertenzivlar), diuretiklar (mannitol, furosemid), kislorod terapiyasi, neyroprotektorlar, tromboz profilaktikasi. Og‘ir hollarda – neyroxirurgik aralashuv (gematoma evakuatsiyasi).` },

{ "question": "Monoplegiya, paraplegiya, tetraplegiya, gemiplegiya haqida tushuncha.", "answer": `Monoplegiya – faqat bir qo‘l yoki oyoq falaji. Paraplegiya – ikkala oyoq (yoki qo‘l) falaji. Tetraplegiya – to‘rtta ekstremita falaji. Gemiplegiya – tana yarmining (chap yoki o‘ng) falaji. Sabablari: insult, travma, neyroinfeksiyalar, orqa miya shikastlari.` },

{ "question": "N. radialis zararlanishi.", "answer": `Qo‘lning orqa yuzasida his sezishning yo‘qolishi, "osilgan qo‘l" belgisi, barmoq va qo‘lning keng ochilmasligi, ekstensor refleksning pasayishi bilan kechadi. Sabablari: travma, bosim (masalan, uxlab qolish paytida bosib yotish).` },

{ "question": "N. ulnaris zararlanishi.", "answer": `4–5-barmoqlarda sezuvchanlik pasayishi, "tirnoqli panja" belgisi, kaftdagi mushaklarning atrofiyasi, kaft qisqich harakatlarining buzilishi. Ko‘pincha tirsak darajasidagi shikastlar sabab bo‘ladi.` }
  ];

// 1-biletni ko‘rsatish uchun:
const ticket = tickets[0];

document.querySelector('.answer').innerText = ticket.answer;
const markdownAnswer = marked(ticket.answer);
document.querySelector('.answer').innerHTML = markdownAnswer;
document.querySelector('.answer').innerHTML = ticket.answer;
