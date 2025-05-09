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

{ "question": "N. ulnaris zararlanishi.", "answer": `4–5-barmoqlarda sezuvchanlik pasayishi, "tirnoqli panja" belgisi, kaftdagi mushaklarning atrofiyasi, kaft qisqich harakatlarining buzilishi. Ko‘pincha tirsak darajasidagi shikastlar sabab bo‘ladi.` },
  { "question": "Epistatusda birinchi yordam.", "answer": `Epistatus (epileptik status) — bu epileptik tutqaloqning 5 daqiqadan ortiq davom etishi yoki xurujlar orasida ongning tiklanmasligi holatidir. Birinchi yordam: bemor xavfsiz joyga yotqiziladi, boshi yon tomonga buriladi, tilning orqa tomonga tushishining oldi olinadi. Zudlik bilan tez yordam chaqiriladi. Tibbiy yordam: diazepam yoki lorazepam vena ichiga yuboriladi, keyin esa fenitoin, valproat yoki levetirasetam qo‘llaniladi.` },

{ "question": "Djekson talvasalar.", "answer": `Djekson talvasasi — bu fokal (mahalliy) epileptik xuruj bo‘lib, qaysidir mushak guruhida (odatda qo‘lda yoki oyoqda) klonik qaltirashlardan boshlanadi va asta-sekin tananing boshqa qismlariga tarqaladi. Ong saqlangan bo‘ladi. Xurujlar homunulyus motorik maydonning qo‘zg‘alishi bilan bog‘liq.` },

{ "question": "Epileptik xurujni fazalari.", "answer": `1. Prodromal faza – xurujdan bir necha soat yoki kun oldin paydo bo‘ladigan holsizlik, bosh og‘rishi, asabiylik. 2. Aura – xuruj boshlanishining belgisi bo‘lgan qisqa o‘zgarishlar (hid, tovush, ko‘rish). 3. Tonik faza – tananing to‘liq qattiqlashuvi, nafas to‘xtashi, tish tishlash. 4. Klonik faza – mushaklarning ritmik qisqarishi. 5. Postiktal faza – holsizlik, uyquchanlik, es-hushning asta-sekin tiklanishi.` },

{ "question": "Epilepsiyada EEG da o‘zgarishlar.", "answer": `Epilepsiyada EEGda paroksizmal faoliyat: cho‘qqi-to‘lqin komplekslari (spike-and-wave), o‘tkir to‘lqinlar (sharp waves), polispayklar, fokal epileptik razryadlar va generalizatsiyalangan to‘lqinlar aniqlanishi mumkin. Epileptik markaz joylashgan soha faoliyatidagi o‘zgarishlar xuruj oralig‘ida ham ko‘rinadi.` },

{ "question": "Ventrikulyar qon quyilish.", "answer": `Bosh miya qorinchalariga qon quyilishi — og‘ir gemorragik insult turi. Klinikasi: bosh og‘rig‘i, qusish, ongning buzilishi, tana haroratining ko‘tarilishi, ensefalopatiya, xarakatsizlik, koma. Qon qorinchalarda to‘plangani sababli gidrosefaliya rivojlanadi.` },

{ "question": "Subaraxnoidal qon quyilish.", "answer": `Subaraxnoidal qon quyilish odatda anevrizma yorilishi bilan bog‘liq. Klinikasi: to‘satdan, "hayotdagi eng kuchli" bosh og‘rig‘i, ko‘ngil aynish, qusish, fotofobiya, bo‘yin mushaklarining qotishi, meningeal belgilar. Diagnostika: KT, orqa miya suyuqligida eritrotsitlar.` },

{ "question": "Miya ustuniga qon quyilishi.", "answer": `Miya ustuni (truncus encephali) qon bilan ta’minlovchi arteriyalarning yorilishi natijasida yuzaga keladi. Klinikasi: nafas va yurak faoliyati buzilishi, koma, ikki tomonlama falajlik, oftalmoplegiya. Juda og‘ir prognozga ega.` },

{ "question": "Meningeal belgilar, qaysi kasalliklarda kuzatiladi.", "answer": `Meningeal belgilar (Kernig, Brudzinskiy, bo‘yin qotishi) quyidagi holatlarda kuzatiladi: bakterial va virusli meningitlar, subaraxnoidal qon quyilish, ensefalit, miya absessi, miya shishi.` },

{ "question": "Tuberkulyozli meningitda orqa miya suyuqligi tahlili.", "answer": `Likvor tiniq yoki xira, limfotsitlar soni ko‘paygan, oqsil miqdori yuqori (0,6–3 g/l), glyukoza darajasi pasaygan, xloridlar miqdori kamaygan. Zich parda (tolloq) hosil bo‘lishi mumkin. Mikroskopiyada Kox tayoqchalari aniqlanishi mumkin.` },

{ "question": "Miya pardalari va bo‘shliqlari, qorinchalari.", "answer": `Miya 3 parda bilan qoplangan: 1) qattiq (dura mater), 2) o‘rta – o‘rgimchak to‘ri (arachnoidea), 3) yumshoq (pia mater). Miya 4 ta qorinchaga ega: ikkita yon (lateral), uchinchi va to‘rtinchi qorinchalar. Ular oraliqlar orqali bir-biri bilan tutashgan.` },

{ "question": "Meningit klinikasi.", "answer": `Bosh og‘rig‘i, yuqori tana harorati, qattiq bo‘yin, ko‘ngil aynishi, qusish, fotofobiya, ong buzilishi, xurujlar, teri toshmalari (meningokokk infeksiyada). Yoshi kichik bolalarda fontanelning qattiqlashuvi kuzatiladi.` },

{ "question": "Meningitlarni davosi.", "answer": `Bakterial meningit: antibiotiklar (seftriakson, vankomitsin), deksametazon, mannitol, kislorod terapiyasi. Virusli meningit: simptomatik davolash. Tuberkulyozli meningit: antituberkulyoz dorilar (HRZE sxemasi), steroidlar.` },

{ "question": "Kana ensefaliti klinikasi.", "answer": `Kene ensefaliti — flavivirusli neyroinfeksiya. Klinikasi: isitma, bosh og‘rig‘i, mushak og‘rig‘i, ong buzilishi, falajlik (ayniqsa, qo‘llarda), meningeal belgilar. Ba’zida ikkilamchi to‘lqinli isitma bo‘ladi.` },

{ "question": "Bosh og‘rig‘ini differensial diagnostikasi.", "answer": `1) Migren – bir tomonlama, pulsatsiyalovchi, ko‘ngil aynishi bilan. 2) Kuchlanish bosh og‘rig‘i – ikki tomonlama, siquvchi. 3) Klaster bosh og‘rig‘i – ko‘z sohasida kuchli og‘riq. 4) Meningit – yuqori harorat, qattiq bo‘yin. 5) Qon bosimi balandligi, shish, travma sababli bosh og‘riqlari.` },

{ "question": "Bel og‘rig‘i differensial diagnostikasi.", "answer": `1) Lumbago (o‘tkir bel og‘rig‘i), 2) Siyatik (n. ischiadicus irritatsiyasi), 3) Orqa umurtqa yoriqlari/shikastlari, 4) Tirsak orqa disk churrasi, 5) Pielonefrit, 6) Orqa miya o‘smasi, 7) Ginekologik yoki urologik kasalliklar.` },
{ "question": "Gipoglikemik koma.", "answer": `Gipoglikemik koma — bu qonda glyukoza miqdorining keskin kamayishi (odatda <2.5 mmol/L) tufayli yuzaga keladigan hushdan ketish holati. Klinikasi: teri rangining oqarishi, sovuq ter, titrash, asabiylik, bosh aylanishi, xurujlar, so‘ngra ongning yo‘qolishi. Shoshilinch yordam: 40% glyukoza vena ichiga yuboriladi.` },

{ "question": "Giperglikemik koma.", "answer": `Giperglikemik koma — bu qonda glyukoza miqdorining oshishi natijasida yuzaga keluvchi hushdan ketish holati. Asosiy turlari: ketoatsidotik, giperosmolyar va laktatsidotik koma. Klinikasi: poliuriya, chanqoqlik, teri quruqligi, og‘izda atseton hidi, nafas chuqur va tez (Kussmaul), hushdan ketish. Davolash: insulin, suyuqlik va elektrolitlar infuziyasi.` },

{ "question": "Entsefalitlar klinikasi (Ekonomo entsefaliti).", "answer": `Ekonomo entsefaliti (epidemik letargik entsefalit) — virusli ensefalit turi bo‘lib, bosh og‘rig‘i, uyquchanlik, isitma, oftalmoplegiya, parkinsonizm belgilarini keltirib chiqaradi. Klassik belgisi — gipersomnoliya (ortiqcha uyqu). Ko‘pincha harakat buzilishlari va ruhiy o‘zgarishlar bilan kechadi.` },

{ "question": "Mielit klinikasi.", "answer": `Mielit — orqa miyada yallig‘lanish bo‘lib, klinikasi: falajlik (paraparez yoki kvadriparez), sezuvchanlikning buzilishi, siyish va ich chiqarish buzilishlari (retensiya yoki inkontinensiya), orqa bel og‘rig‘i, patologik reflekslar.` },

{ "question": "Yumshoq orqa asab sistemasining etiopatogenezi.", "answer": `Yumshoq orqa asab sistemasi (YoAS) kasalliklarining etiopatogenezi turlicha: degenerativ (disk churrasi, spondiloz), yallig‘lanish (mielit, radikulit), shikastlanish (travma), o‘sma, infeksion va metabolik (B12 yetishmovchiligi) sabablar asosida rivojlanadi.` },

{ "question": "Siringomieliya etiopatogenezi.", "answer": `Siringomieliya — orqa miya markazida likvor bilan to‘lgan bo‘shliqlar (siringalar) hosil bo‘lishi. Sabablari: tug‘ma anomaliyalar (Arnold-Kiari malformatsiyasi), travma, yallig‘lanish yoki o‘sma. Bo‘shliqlar markaziy kanal yaqinida joylashib, atrof to‘qimalarni siqadi.` },

{ "question": "Tarkov skleroz etiopatogenezi.", "answer": `Tarkov (ya’ni Tuberous) skleroz — bu genetik kasallik bo‘lib, TSC1 yoki TSC2 genlaridagi mutatsiyalar tufayli rivojlanadi. Bu genlar hujayra o‘sishini tartibga soladi. Natijada markaziy asab tizimi, yurak, buyrak va terida benign o‘sma (hamartomalar)lar hosil bo‘ladi.` },

{ "question": "Parkinson kasalligi klinikasi.", "answer": `Parkinson kasalligi klassik belgilar: 1) gipotoniya (qattiqlik), 2) gipokineziya (sekin harakatlar), 3) tremor (xotirjam holatda titrash), 4) postural beqarorlik (muvozanatni yo‘qotish). Bemorning yuzi "niqobga o‘xshash", yurishi mayda qadamli bo‘ladi.` },

{ "question": "Parkinson kasalligi etiopatogenezi.", "answer": `Parkinson kasalligi nigrostrial tizimdagi dopamin ishlab chiqaruvchi hujayralarning (substantia nigra) degeneratsiyasi bilan bog‘liq. Dopamin tanqisligi tufayli bazal gangliyalar faoliyati buziladi. Sabablari noma’lum (idiopatik), lekin genetik va toksik omillar ta’sir qiladi.` },

{ "question": "Miasteniya etiopatogenezi.", "answer": `Miasteniya — bu autoimmun kasallik bo‘lib, asab-mushak tutashgan joydagi asetilxolin retseptorlariga qarshi antitanalar hosil bo‘ladi. Natijada nerv impulsi mushakka uzatilmaydi. Klinikasi: mushak zaifligi, tez charchash, ayniqsa ko‘z, yutish, nafas olish mushaklarida.` },

{ "question": "Mielitni davosi.", "answer": `Etiologiyasiga qarab: virusli mielitda — antivirus terapiya, autoimmun mielitda — gormonlar (metilprednizolon), plazmaferez, simptomatik davo — analgetiklar, fizioterapiya, urologik yordam. Neyroreabilitatsiya muhim rol o‘ynaydi.` },

{ "question": "Absanslar haqida tushuncha.", "answer": `Absans — bu qisqa muddatli ong yo‘qolishi bilan kechuvchi epileptik xuruj. Odatda 5–15 soniya davom etadi, bola birdan to‘xtab qoladi, tik qaraydi, javob bermaydi. Xurujdan so‘ng faoliyatni davom ettiradi. Ko‘p hollarda 4–12 yoshda boshlanadi.` },

{ "question": "Mielopatiya haqida tushuncha.", "answer": `Mielopatiya — bu orqa miya funksiyalarining surunkali buzilishi bo‘lib, turli sabablar (siqilish, degeneratsiya, shish, yallig‘lanish) bilan yuzaga keladi. Klinikasi: falajlik, sezuvchanlikning buzilishi, refleks o‘zgarishlari, urologik muammolar.` },

{ "question": "Migren etiopatogenezi.", "answer": `Migrenning sababi — trigeminovaskulyar tizimning faollashuvi, serotonin darajasining o‘zgarishi va neyrovaskulyar yallig‘lanish hisoblanadi. Kaltsitonin geniga bog‘liq peptidlar (CGRP) qon tomirlarning kengayishiga sabab bo‘ladi, bu bosh og‘rig‘ini keltirib chiqaradi.` },

{ "question": "Elka pleksiti klinikasi.", "answer": `Elka pleksiti — elka sohasidagi asab to‘plamining yallig‘lanishi yoki shikastlanishi. Klinikasi: elka, qo‘l va bilakdagi og‘riq, muskullar zaifligi, reflekslar pasayishi, sezuvchanlik buzilishi. Sabablari: travma, infeksiya, o‘sma, autoimmun jarayonlar.` },

{ "question": "Lyumbago haqida tushuncha.", "answer": `Lyumbago — bu bel sohasida to‘satdan paydo bo‘ladigan o‘tkir og‘riq bo‘lib, "belni ushladi" holatiga o‘xshaydi. Odatda og‘ir jismoniy harakat, noqulay holatda o‘tirish yoki sovqotishdan so‘ng boshlanadi. Sababi: orqa umurtqa diskining degeneratsiyasi yoki spazm.` },
{ "question": "Bulьbar sindrom haqida tushuncha.", "answer": `Bulbar sindrom — bu medulla oblongatada joylashgan IX, X, XI, XII bosh miya nervlarining zararlanishi bilan kechadi. Klinikasi: dizartriya, disfagiya, tilning atrofiyasi va harakatsizligi, yumshoq tanglay falaji, ovozning o‘zgarishi (disfoniya), "bulbar" nafas. Ko‘pincha motor neyron kasalliklari bilan bog‘liq.` },

{ "question": "Psevdobulьbar sindrom haqida tushuncha.", "answer": `Psevdobulbar sindrom — bu ikkala yarimsharda joylashgan kortikobulbar yo‘llarning zararlanishi natijasida rivojlanadi. Klinikasi: dizartriya, disfagiya, lekin til atrofiyalanmagan, reflekslar (masalan, jaw jerk) kuchaygan, majburiy kulgi yoki yig‘i (emosional labillik) kuzatiladi.` },

{ "question": "Miyacha insulti klinikasi.", "answer": `Miyacha insultida bosh aylanishi, koordinatsiya buzilishi (ataksiya), dizartriya, nistagm, harakatdagi noaniqlik (dismetriya), ko‘ngil aynishi va qusish, miyacha tomoniga ag‘darilish holatlari bo‘ladi. Og‘ir holatlarda so‘zlash va yurish butunlay yo‘qoladi.` },

{ "question": "N. abducens neyropatiyasi klinikasi.", "answer": `Abducens (VI) nervi zararlanganda lateral rektus mushak ishdan chiqadi, ko‘z tashqi tomonga harakatlana olmaydi. Klinikasi: diplopiya (ayniqsa chetga qaraganda), ko‘z ichkariga og‘ib qoladi (ezotropiya), boshni zararlangan tomonga og‘dirish orqali kompensatsiya.` },

{ "question": "N. oculomotorius neyropatiyasi klinikasi.", "answer": `Oculomotorius (III) nervi zararlanganda ptoz (yuqori qovoq tushib qoladi), ko‘z past va chetga og‘adi, midriaz (kengaygan qorachiq), akkomodatsiya va yorug‘lik reflekslari yo‘qoladi. Klinikasi: diplopiya, ko‘rish buzilishi, yorug‘likka sezuvchanlik.` },

{ "question": "Yuz nervi nevropatiyasi klinikasi.", "answer": `Yuz (VII) nervi nevropatiyasi (Bell falaji) bir tomonlama yuz muskullarining falaji bilan namoyon bo‘ladi. Klinikasi: peshona qimirlamaydi, ko‘z yopilmaydi (lagophthalmos), og‘iz burchi pastga tushadi, ta’m sezish buziladi, yonoqni shishirib bo‘lmaydi.` },

{ "question": "Uch shoxli nerv nevralgiyasi klinikasi.", "answer": `N. trigeminus nevralgiyasi — yuzning bir tomonida to‘satdan boshlanadigan kuchli, chaqnoqqa o‘xshagan og‘riq xurujlari bilan kechadi. Xurujlar qisqa davom etadi (sekundlar yoki daqiqalar), ko‘pincha gapirganda, yuvinayotganda yoki ovqatlanganda yuzaga keladi.` },

{ "question": "Yon amiotrofik skleroz klinikasi.", "answer": `Yon amiotrofik skleroz (YASK) — yuqori va pastki motor neyronlar zararlanishi bilan kechadi. Klinikasi: progressiv mushak zaifligi, atrofiyalar, fascikulyatsiyalar, spastiklik, reflekslarning kuchayishi, bulbar belgilar (dizartriya, disfagiya). Ong saqlanadi.` },

{ "question": "Vegeto-qon tomir distoniyasi klinikasi.", "answer": `Vegeto-qon tomir distoniyasi (VQTD) — vegetativ asab tizimining disbalansi. Klinikasi: yurak urishining tezlashuvi, terlash, bosh og‘rig‘i, charchoq, uyqusizlik, yurak sohasida og‘riq, ichki bezovtalik, nafas yetishmaslik hissi. Psixosomatik buzilish sifatida qaraladi.` },

{ "question": "Distsirkulyator ensefalopatiya klinikasi.", "answer": `Distsirkulyator ensefalopatiya (DCE) — miya qon aylanishining surunkali buzilishi. Klinikasi: bosh og‘rig‘i, bosh aylanishi, xotira sustligi, diqqat pasayishi, yurishning beqarorligi, ruhiy o‘zgarishlar (apatiko-abulik sindrom), kech bosqichlarda demensiya.` },

{ "question": "Meningit klinikasi.", "answer": `Meningit — miya pardalarining yallig‘lanishi. Klinikasi: bosh og‘rig‘i, isitma, ko‘ngil aynishi, qusish, bo‘yin qotishi, Kernig va Brudzinskiy simptomlari, fotofobiya. Og‘ir hollarda hushning buzilishi, tutqanoq va ensefalit belgilari kuzatiladi.` },

{ "question": "Gemorragik insult klinikasi.", "answer": `Gemorragik insult — miya ichiga qon quyilishi. Klinikasi: to‘satdan boshlanadi, bosh og‘rig‘i, ongni yo‘qotish, ko‘ngil aynishi, qusish, gemiplegiya, anizokoriya, bradikardiya, nafas buzilishi. Ko‘pincha og‘ir kechadi, o‘lim xavfi yuqori.` },

{ "question": "Epilepsiya klinikasi.", "answer": `Epilepsiya — miyada elektr faollikning paroksizmal buzilishi bilan kechadigan surunkali kasallik. Klinikasi: generalizatsiyalashgan xurujlar (tonik-klonik tutqanoq), absanslar, mioklonik xurujlar, auradan boshlanishi mumkin. Xurujdan keyin chalkashlik kuzatiladi.` },

{ "question": "Dyushen miopatiyasi klinikasi.", "answer": `Dyushen miopatiyasi — irsiy mushak distrofiyasi bo‘lib, erkak bolalarda 3–5 yoshda boshlanadi. Klinikasi: oyoq muskullarining zaifligi, yurish buzilishi, Govers belgisi (qo‘llanib turib o‘rnidan turadi), skolioz, yurak va nafas yetishmovchiligi. Xastalik progressiv.` },

{ "question": "Ishemik insult klinikasi.", "answer": `Ishemik insult — miya sohasiga qon kelmasligi natijasida yuzaga keladi. Klinikasi: to‘satdan boshlanuvchi bir tomonlama falajlik (gemiplegiya), so‘zlash buzilishi (afaziya), ko‘z qarashning chetga og‘ishi, sezuvchanlik yo‘qolishi, ong buzilishi mumkin.` },
  { "question": "Siringomieliya klinikasi.", "answer": `Siringomieliya — orqa miya markaziy kanalining kengayishi va u yerda bo‘shliq (kista) hosil bo‘lishi bilan kechadi. Klinikasi: segmentar disassotsiyalangan anesteziya (og‘riq va harorat sezgisi yo‘qoladi, ammo teginish saqlanadi), distal muskullar atrofiyasi, skolioz, reflekslar pasayadi.` },

{ "question": "Polineyropatiya klinikasi.", "answer": `Polineyropatiya — periferik nervlarning diffuz zararlanishi. Klinikasi: distal simmetrik mushak zaifligi, paresteziyalar ("qo‘l-oyoqda paypaslab yurish" hissi), reflekslarning yo‘qolishi, distal atrofiyalar, vegetativ buzilishlar (terlash, teri o‘zgarishi).` },

{ "question": "Subaraxnoidal qon quyilish davolash.", "answer": `Subaraxnoidal qon quyilishida zudlik bilan neyroreanimatsion yordam ko‘rsatiladi: qon bosimini nazorat qilish, nimodipin kabi vazospazmga qarshi dori vositalari, simptomatik davolash (og‘riq qoldiruvchi, antikonvulsant), neyroxirurgik aralashuv (anevrizma kliplanishi).` },

{ "question": "Poliomielit klinikasi.", "answer": `Poliomielit — poliovirus chaqiradigan asosan bolalarda uchraydigan kasallik. Klinikasi: isitma, bosh og‘rig‘i, qusish, orqa miya zararlansa — asimmetrik falajlik, reflekslar pasayishi, mushak atrofiyasi, sezuvchanlik saqlanadi.` },

{ "question": "Bel–quymich radikuliti klinikasi.", "answer": `Bel-quymich radikuliti — umurtqa disklari va asab ildizchalari zararlanishi. Klinikasi: bel sohasida og‘riq, son yoki oyoqqa tarqaluvchi og‘riq (ishias), reflekslarning pasayishi, paresteziya, harakat cheklanishi, og‘riq holatga bog‘liq bo‘ladi.` },

{ "question": "Meningitni davosi.", "answer": `Meningitda sababga qarab davolash: bakterial meningitda — zudlik bilan keng ta’sirli antibiotiklar (tsefalosporinlar, vankomitsin), virusli shakllarda — antiviral vositalar (atsiklovir), simptomatik davo (yallig‘lanishga qarshi, diuretiklar, antikonvulsantlar).` },

{ "question": "Ekonomo entsefalitni davosi.", "answer": `Ekonomo entsefaliti (letargik ensefalit) uchun maxsus davo yo‘q. Simptomatik terapiya qo‘llanadi: antiparkinson vositalari, neyroleptiklar, antidepressantlar, yallig‘lanishga qarshi va metabolik terapiya. Reabilitatsiya muhim.` },

{ "question": "Parkinson kasalligi davosi.", "answer": `Parkinson kasalligi simptomatik davolanadi. Asosiy dori: levodopa + karbidopa. Shuningdek, dopamin agonistlari, MAO-B ingibitorlari, antixolinergiklar, fizioterapiya va neyroxirurgik usullar (DBS — deep brain stimulation) qo‘llaniladi.` },

{ "question": "Poliomielitni davrlari.", "answer": `Poliomielit uch davrda kechadi: 1) Prodromal davr — umumiy infeksiya belgilari (isitma, qusish, holsizlik); 2) Falajli davr — mushak zaifligi va falajlar rivojlanadi; 3) Reabilitatsiya davri — falajlar barqarorlashadi yoki to‘liq/noto‘liq tiklanadi.` },

{ "question": "Mielit kasalligi klinikasi.", "answer": `Mielit — orqa miya yallig‘lanishi. Klinikasi: paraparez yoki tetraparez, reflekslar pasayishi yoki yo‘qolishi, sezuvchanlikning pasayishi, siydik-tanosil buzilishi (retensiya yoki inkontinensiya), yiringli shakllarda isitma va og‘riq bo‘ladi.` },

{ "question": "Uch shoxli nerv nevralgiyasi klinikasi.", "answer": `Uch shoxli nerv nevralgiyasi — yuzning bir tomonida o‘tkir, chaqnoqqa o‘xshagan og‘riq xurujlari bilan namoyon bo‘ladi. Xurujlar qisqa davom etadi, ko‘pincha tetiq zonalarga teginganda yuzaga keladi. Og‘riq 2- yoki 3-shox yo‘nalishida bo‘ladi.` },

{ "question": "Migrenь kasalligi davosi.", "answer": `Migrenь xurujlarini bartaraf etish uchun triptanlar (sumatriptan), NSAIDlar (ibuprofen), metoklopramid. Profilaktika uchun — beta-blokatorlar (propranolol), antikonvulsantlar (topiramat), antidepressantlar. Hayot tarzini o‘zgartirish ham muhim.` },

{ "question": "Migrenь kasalligi klinikasi.", "answer": `Migrenь — takrorlanuvchi pulsatsiyalovchi bosh og‘rig‘i bilan kechadigan kasallik. Klinikasi: boshning bir tomonida og‘riq, ko‘ngil aynishi, yorug‘lik va shovqinga sezuvchanlik. Aura bo‘lishi mumkin (ko‘rish buzilishi, paresteziya).` },

{ "question": "Bel radikuliti davosi.", "answer": `Bel radikulitida simptomatik va sababli davolash: NSAIDlar, mushak bo‘shashtiruvchi vositalar, B guruhi vitaminlari, fizioterapiya, manual terapiya. Og‘ir hollarda — kortikosteroid blokadalar, diskektomiya yoki boshqa jarrohlik.` },

{ "question": "Ishemik insultdagi tahlillar.", "answer": `Ishemik insultda quyidagi tahlillar muhim: KT yoki MRT (gemorragikdan farqlash uchun), qon umumiy va biokimyoviy tahlili (glyukoza, lipidlar, koagulogramma), EKG, rentgen, Doppler UTT, yurak EKO, trombolitik terapiya uchun INR/PT.` },
  { "question": "Epilepsiyani boskichlarini ta’riflab bering.", "answer": `Epilepsiya xurujlari bir nechta bosqichda kechadi: 1) Aura — bemor biror sezgilarni (bosh og'rig'i, ko‘rish buzilishi, qo‘l va oyoqlarda titrash kabi) sezadi. 2) Ijro etish — xurujning to'liq boshlanishi, shuningdek, qisqa muddatli yo'qolishlar (yuklanish, ko‘rish yoki harakatlarda buzilishlar). 3) Postiktal davr — xurujdan so‘ng bemor charchagan, bosh og‘riqli, uyquchan bo‘ladi.` },

{ "question": "Mielitni davosi", "answer": `Mielitda asosiy davolash usuli — etiotropik va simptomatik davolash. Etiotropik davo: bakterial mielitda antibiotiklar, virusli shakllarda — antivirus vositalari (masalan, atsiklovir). Simptomatik davo: yallig'lanishga qarshi dorilar, og‘riq qoldiruvchi, kortikosteroidlar va fizioterapiya qo‘llaniladi.` },

{ "question": "Epistatusni davosi", "answer": `Epistatusda birinchi yordam: tezda tibbiy yordam chaqirish, og‘riqsizlantiruvchi dorilar (benzodiazepinlar, diazepam) yordamida status epileptikusni to‘xtatish. Shuningdek, kislorod va quyoshda qolmaslik, nafas olishni yaxshilash uchun qo‘shimcha yordam zarur.` },

{ "question": "Migrenь kasalligi klinikasi", "answer": `Migrenь bosh og‘rig‘i xurujlari bilan kechadi. Klinikasi: boshning bir tomonida o‘tkir pulsatsiyalovchi og‘riq, ko‘ngil aynishi, yorug‘lik va shovqinga sezuvchanlik. Xurujlar ko‘pincha bir necha soat davom etadi va og‘riq to‘liq uzilishi uchun o‘ta og‘ir bo‘lishi mumkin.` },

{ "question": "Gemorragik insult davosi", "answer": `Gemorragik insultda davolash zarurati zudlik bilan amalga oshiriladi. Asosiy davo: gemorragik qonashni to‘xtatish (trombozlarni oldini olish, gipertenziya boshqaruvi), neuroprotektiv dori vositalari, koagulopatiya va gipoksemiya bilan kurashish, neyroxirurgik davolash (qon tomirlarni kliplash, debri vaqti), reabilitatsiya.` },

{ "question": "Serozli meningitni klinikasi", "answer": `Serozli meningit — meningitning engil shakli bo‘lib, asosan viruslar (masalan, enteroviruslar) sabab bo‘ladi. Klinikasi: yuqori isitma, bosh og‘rig‘i, bo‘yin qattiqligi, yorug‘lik va shovqinga sezuvchanlik. Sezuvchanlik buzilishlari va asab tizimi boshqa simptomlar bilan birga kuzatiladi.` },

{ "question": "Uch shoxli nerv nevralgiyasi davosi", "answer": `Uch shoxli nerv nevralgiyasi davosi: asosiy dori terapiyasi — karbamazepin yoki okskarbazepin kabi antiepileptik dorilar, shuningdek, tritsiklik antidepressantlar va neyroleptiklar. Jarrohlik aralashuvlar (nervni blokirovka qilish) qiyin hollarda qo‘llaniladi.` },

{ "question": "Yuz nervi neyropatiyasi klinikasi", "answer": `Yuz nervi neyropatiyasi (Bellning paraliz) — yuzning bir tomonida asimmetrik muskullarni paraliyoz qiladi. Klinikasi: yuzning bir tomonida o‘tkir og‘riq, shish yoki yuzni harakatlantira olmaslik, ko‘z yumsalmay qoladi.` },

{ "question": "Yuz nervi neyropatiyasi davosi", "answer": `Yuz nervi neyropatiyasining davosi: kortikosteroidlar (prednizolon), antiviral dori vositalari (agresiv davolashda), vitaminlar, fizioterapiya, jismoniy terapiya. Og‘ir holatlarda jarrohlik aralashuv zarur bo‘lishi mumkin.` },

{ "question": "Miopatiyada (rivojlanuvchi mushak distrofiyasida) xarakat buzilish sindromi", "answer": `Miopatiyada harakat buzilishi mushaklarning zaiflashuvi va atrofiya bilan kechadi. Klinikasi: boshda yoki pastki qismlarda mushaklar zaifligi, yengil qiyinchiliklar (yurishda, ko‘tarishda), mushak massasi kamayadi, yurak va nafas olish mushaklarida ham buzilishlar ko‘zatilishi mumkin.` },

{ "question": "Klaster bosh og’rig’i klinikasi", "answer": `Klaster bosh og‘rig‘i — o‘tkir va intensiv bosh og‘riqlari bilan kechadi. Klinikasi: bir tomonlama kuchli pulsatsiyalovchi og‘riq, ko‘zda qizarish, ko‘z yoshining to‘kilishi, burun yo‘lining to‘lishi. Og‘riq odatda 15 daqiqadan bir soatgacha davom etadi va bir necha hafta davomida takrorlanadi.` },

{ "question": "Abuzis bosh og’rigi klinikasi", "answer": `Abuzis bosh og‘rig‘i — bosh og‘rig‘ining surunkali shakli bo‘lib, og‘riqlar asosan og‘riq qoldiruvchi dorilarni ortiqcha qabul qilish tufayli yuzaga keladi. Klinikasi: doimiy bosh og‘rig‘i, dorilarni uzoq vaqt davomida qabul qilishdan so‘ng og‘riqlarning kuchayishi.` },

{ "question": "Bosh aylanish sindromi", "answer": `Bosh aylanish sindromi — muayyan harakatlar yoki holatlar (masalan, tez o‘rni o‘zgartirish) bilan boshlanadi. Klinikasi: boshning aylanishi, ko‘ngil aynishi, ba’zida qusish, ba’zan ko‘rishdagi muammolar. Ko‘p hollarda vestibulyar tizimning buzilishi natijasida kelib chiqadi.` },

{ "question": "Landuzi Djerin miopatiyasi klinikasi", "answer": `Landuzi Djerin miopatiyasi — mushak distrofiyasi. Klinikasi: boshlang‘ich bosqichda oyoq-qo‘l mushaklarida zaiflashuv, orqa mushaklar va beldagi zaiflashish, mushak massasi kamayishi, yurakning elektr tarangligi bo‘lishi mumkin.` },

{ "question": "SHtryumpel kasalligi", "answer": `SHtryumpel kasalligi (Shtryumpel paraliz) — orqa miya zararlanishidan kelib chiqadi. Klinikasi: asimmetrik motor funktsiyalari buzilishi, qo‘l va oyoqlarda zaiflik, mushak tonusining pasayishi, reflekslarning yo‘qolishi, ko‘pincha markaziy paraliz va og‘riq.` },
  
  { "question": "Insulьtlarda nodiferentsiyaal davo", "answer": `Insultlarda nodiferentsiyaal davo, insult turini aniqlashdan oldin simptomatik davo bilan boshlanadi. Bunga neyroprotektsiya, gipertenziyani boshqarish, qon tomir tizimini normal holatga keltirish uchun vositalar kiritiladi. Bunday hollarda trombolitik dori-darmonlar va antikoagulyantlar qo'llanilishi mumkin.` },
  
  { "question": "Giena - Bare poliradikuloneyropatiya klinikasi", "answer": `Giena-Bare poliradikuloneyropatiyasi - bu asab tizimining yallig‘lanishi. Klinikasi: mushak zaifligi, refleklar buzilishi, sezgirlikning pasayishi, tez-tez shikastlanishlar va nafas olish muammolari. Kasallik o‘tkir boshlanib, tez rivojlanadi.` },

  { "question": "Meningokokkli meningit klinikasi", "answer": `Meningokokkli meningit - yallig‘lanish bilan birga boshlanadi. Klinikasi: yuqori isitma, bosh og‘rig‘i, bo‘yin qattiqligi, ko‘ngil aynishi, yorug‘lik va shovqinga sezuvchanlik, tez-tez sog‘likning tez yomonlashuvi.` },

  { "question": "Meningokokkli meningit davosi", "answer": `Meningokokkli meningit davosi: antibiotiklar (masalan, penisillin yoki seftriakson), qo‘shimcha davolashda kortikosteroidlar, suyuqliklar bilan parenteral rehidratatsiya, simtomatik davolash. Tezkor va intensiv tibbiy yordam zarur.` },

  { "question": "Zuriqishdagi bosh og’rig’i klinikasi", "answer": `Zuriqishdagi bosh og‘rig‘i - uzoq vaqt davomida turli holatlarda, masalan, stress, jismoniy zo‘riqish yoki asabiylangan paytda yuzaga keladi. Klinikasi: boshning orqa qismida zo‘riqish, og‘riq va bosim hissi, odatda o‘tkir emas.` },

  { "question": "Zuriqishdagi bosh og’rig’i davolash", "answer": `Zuriqishdagi bosh og‘rig‘i davosi: og‘riqni kamaytirish uchun analjeziklar va yallig‘lanishga qarshi dorilar (masalan, ibuprofen), stressni kamaytirish, jismoniy faoliyatni normallashtirish, dam olish va masaj.` },

  { "question": "Genginton xoreyasi klinikasi", "answer": `Genginton xoreyasi - bu nerv tizimi kasalligi bo‘lib, xoreya va boshqa harakat buzilishlarini o‘z ichiga oladi. Klinikasi: noqulay, nazorat qilinmaydigan harakatlar (xoreya), ruhiy holatning buzilishi (depressiya, psixoz), motor qiyinchiliklari.` },

  { "question": "Tranzitor ishemik ataka klinikasi", "answer": `Tranzitor ishemik ataka - qisqa vaqt ichida miya qon aylanishining vaqtincha buzilishi. Klinikasi: qisqa vaqt ichida yuzaga keladigan nutqning buzilishi, yuzning yoki qo‘llarning zaifligi, ko‘rishning vaqtincha o‘zgarishi.` },

  { "question": "Erba rota miopatiyasi klinikasi", "answer": `Erba rota miopatiyasi - muskullarni zaiflashishi va atrofiya. Klinikasi: qo‘l va oyoqlarda zaiflik, mushaklarning zaiflashuvi, yurak muammolari va nevrologik simptomlar kuzatiladi.` },

  { "question": "Optikoxiazmal leptomeningit klinikasi", "answer": `Optikoxiazmal leptomeningit - optik nerv va miya qobig‘ining yallig‘lanishi. Klinikasi: ko‘rishning pasayishi, bosh og‘rig‘i, ko‘ngil aynishi, umumiy holsizlik, ko‘zning qizarmasi.` }
];

// 1-biletni ko‘rsatish uchun:
const ticket = tickets[0];

document.querySelector('.answer').innerText = ticket.answer;
const markdownAnswer = marked(ticket.answer);
document.querySelector('.answer').innerHTML = markdownAnswer;
document.querySelector('.answer').innerHTML = ticket.answer;
