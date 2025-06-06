const tickets = [
  {
  "question": "Эпидемик жараён тушунчаси ва унинг мохияти",
  "answer": `Epidemik jarayon — bu yuqumli kasalliklarning uzluksiz rivojlanishidir. Uch asosiy bo‘g‘indan iborat: infeksiya manbai, yuqish yo‘li va sezgir aholi guruhining mavjudligi.`
},
{
  "question": "Юқумлилик жараёни, унинг босқичлари",
  "answer": `Yuqumlilik jarayoni — mikroblarning organizmga kirib, ko‘payib, kasallik chaqirishi. Bosqichlari: kirish, ko‘payish, tarqalish, chiqarilish va yuqish.`
},
{
  "question": "Юқумли касалликлар хақида тушунча",
  "answer": `Yuqumli kasalliklar — mikroorganizmlar chaqiradigan, odamdan odamga yuqadigan kasalliklardir. Ular epidemiyalar yoki pandemiyalarni keltirib chiqarishi mumkin.`
},
{
  "question": "Инфекция манбаи - эпидемик жараённинг ривожланишидаги мухим роли",
  "answer": `Infeksiya manbai — kasallik qo‘zg‘atuvchisini chiqaradigan organizm. Bu bo‘g‘in bo‘lmasa, epidemik jarayon rivojlanmaydi.`
},
{
  "question": "Эпидемик жараённинг ривожланишида беморлар ва турли тоифадаги бактерия ташувчиларнинг, хамда хайвонларнинг инфекция манбаи сифатидаги ахамияти",
  "answer": `Bemor va tashuvchilar mikroblarni atrofga tarqatadi. Hayvonlar esa zoonoz kasalliklar uchun manba bo‘lib xizmat qiladi.`
},
{
  "question": "Паразитлар келтириб чикарган касалликларда ташки мухит объектларининг қўзғатувчилар учун резервуар вазифасини бажаришини тушунтиринг",
  "answer": `Suv, tuproq va boshqa tashqi muhit obyektlari ayrim parazitlar uchun yashash va saqlanish joyi — ya’ni rezervuar bo‘lib xizmat qiladi.`
},
{
  "question": "Антропоноз, зооноз ва сапроноз касалликлар хақида тушунча",
  "answer": `Antroponoz – odamdan odamga yuqadi. Zoonoz – hayvondan odamga. Sapronoz – tashqi muhitdan yuqadigan kasalliklar.`
},
{
  "question": "Юкиш механизми - эпидемик жараённинг ривожланиши ва узликсизлигини таъминлашдаги ўрни",
  "answer": `Yuqish mexanizmi infeksiya manbaidan sog‘lom odamga mikroblar o‘tishini ta’minlaydi. Bu epidemiya uzluksizligini ta’minlaydi.`
},
{
  "question": "Юкиш механизмининг таърифи, боскичлари ва типлари. Таркатиш йулларии ва омиллари.",
  "answer": `Ta’rifi: mikroblarning manbadan sog‘lom odamga o‘tishi. Bosqichlari: chiqish, tashqi muhitda bo‘lish, kirish. Tiplari: havo-tomchi, kontakt, oziq-ovqat, qon, transmissiv.`
},
{
  "question": "Ахолининг мойиллиги – эпидемик жараённинг ривожланиши ва узлуксизлигини таъминлашдаги зарурий бўғин. Ахолининг иммун холати, уни табиий ва сунъий хосил килиш йуллари.",
  "answer": `Sezgirlik – immuniteti yo‘q odamlarning ko‘pligi. Immun holat: tabiiy (kasallikdan so‘ng) va sun’iy (emlash orqali) hosil bo‘ladi.`
},
{
  "question": "Эпидемик жараённинг харакатга келтирувчи кучлари: биологик, ижтимоий ва табиий омиллар.",
  "answer": `Epidemik jarayon uchta kuch bilan harakatga keladi: biologik (qo‘zg‘atuvchi xossalari), ijtimoiy (aholi zichligi, sanitariya holati), tabiiy (iqlim, geografik omillar).`
},
{
  "question": "Эпидемик жараённинг ривожланиш механизми ва инфекциянинг таркалиши.",
  "answer": `Rivojlanish mexanizmi — infeksiya manbai, yuqish yo‘li va sezgir guruh orqali mikroblar tarqaladi. Bu jarayon uzluksiz bo‘lishi uchun har uch bo‘g‘in faol bo‘lishi kerak.`
},
{
  "question": "Эпидемик жараённинг намоён бўлиши ва унинг турлари.",
  "answer": `Epidemik jarayon sporadik (yolg‘on holatlar), epidemik (ko‘plab holatlar) va pandemik (dunyo bo‘ylab) turlarda namoyon bo‘ladi.`
},
{
  "question": "ОИВ кўзғатувчисини эпидемиологик хусусиятлари.",
  "answer": `OIV – retrovirus bo‘lib, CD4 limfotsitlarni zararlaydi, odam organizmida uzoq yashaydi, faqat biologik suyuqliklar orqali yuqadi.`
},
{
  "question": "ОИВ юкиш йуллари, тарқалиши, касаллик манбалари, мойиллик.",
  "answer": `Yuqish yo‘llari: qon, jinsiy aloqa, onadan bolaga. Tarqalishi: ijtimoiy omillar bilan bog‘liq. Manba: OIV yuqtirgan odam. Moyiillik: immuniteti past odamlar.`
},
{
  "question": "ОИВ-инфекцияси ва профилактикаси.",
  "answer": `OIV-infeksiyasi immun tanqislik holatiga olib keladi. Pрофилактикаси: xavfsiz jinsiy aloqa, steril asboblar, donor qonini tekshirish.`
},
{
  "question": "Иммунитетлар хақида тушунча.",
  "answer": `Immunitet – organizmning yuqumli kasalliklarga qarshilik ko‘rsatish qobiliyati. U tabiiy va sun’iy, aktiv va passiv bo‘lishi mumkin.`
},
{
  "question": "Хозирда кулланиладиган замонавий текшириш усуллари ва уларнинг эпидемиологик ахамияти.",
  "answer": `Zamonaviy usullar: PCR, ELISA, ekspress testlar. Epidemiologik ahamiyati — kasallikni erta aniqlab, tarqalishini to‘xtatadi.`
},
{
  "question": "Хозирги замонда ОИВни аниклашда эпидемиология фаннинг ютуклари.",
  "answer": `OIVni aniqlashda ELISA, immunoblot, PCR kabi testlar qo‘llaniladi. Bu usullar erta tashxis qo‘yish va infeksiya nazoratini ta’minlaydi.`
},
{
  "question": "Вирусли гепатитлар классификациясини кўрсатинг ва эпидемиологик ахамиятини тушунтиринг.",
  "answer": `Virusli gepatitlar A, B, C, D, E turlarga bo‘linadi. Epidemiologik ahamiyati: ular yuqish yo‘llari va tarqalish tezligi bilan farqlanadi.`
},
  {
  "question": "Эпидемик жараённинг харакатга келтирувчи кучлари: биологик, ижтимоий ва табиий омиллар.",
  "answer": `Epidemik jarayon uchta kuch bilan harakatga keladi: biologik (qo‘zg‘atuvchi xossalari), ijtimoiy (aholi zichligi, sanitariya holati), tabiiy (iqlim, geografik omillar).`
},
{
  "question": "Эпидемик жараённинг ривожланиш механизми ва инфекциянинг таркалиши.",
  "answer": `Rivojlanish mexanizmi — infeksiya manbai, yuqish yo‘li va sezgir guruh orqali mikroblar tarqaladi. Bu jarayon uzluksiz bo‘lishi uchun har uch bo‘g‘in faol bo‘lishi kerak.`
},
{
  "question": "Эпидемик жараённинг намоён бўлиши ва унинг турлари.",
  "answer": `Epidemik jarayon sporadik (yolg‘on holatlar), epidemik (ko‘plab holatlar) va pandemik (dunyo bo‘ylab) turlarda namoyon bo‘ladi.`
},
{
  "question": "ОИВ кўзғатувчисини эпидемиологик хусусиятлари.",
  "answer": `OIV – retrovirus bo‘lib, CD4 limfotsitlarni zararlaydi, odam organizmida uzoq yashaydi, faqat biologik suyuqliklar orqali yuqadi.`
},
{
  "question": "ОИВ юкиш йуллари, тарқалиши, касаллик манбалари, мойиллик.",
  "answer": `Yuqish yo‘llari: qon, jinsiy aloqa, onadan bolaga. Tarqalishi: ijtimoiy omillar bilan bog‘liq. Manba: OIV yuqtirgan odam. Moyiillik: immuniteti past odamlar.`
},
{
  "question": "ОИВ-инфекцияси ва профилактикаси.",
  "answer": `OIV-infeksiyasi immun tanqislik holatiga olib keladi. Pрофилактикаси: xavfsiz jinsiy aloqa, steril asboblar, donor qonini tekshirish.`
},
{
  "question": "Иммунитетлар хақида тушунча.",
  "answer": `Immunitet – organizmning yuqumli kasalliklarga qarshilik ko‘rsatish qobiliyati. U tabiiy va sun’iy, aktiv va passiv bo‘lishi mumkin.`
},
{
  "question": "Хозирда кулланиладиган замонавий текшириш усуллари ва уларнинг эпидемиологик ахамияти.",
  "answer": `Zamonaviy usullar: PCR, ELISA, ekspress testlar. Epidemiologik ahamiyati — kasallikni erta aniqlab, tarqalishini to‘xtatadi.`
},
{
  "question": "Хозирги замонда ОИВни аниклашда эпидемиология фаннинг ютуклари.",
  "answer": `OIVni aniqlashda ELISA, immunoblot, PCR kabi testlar qo‘llaniladi. Bu usullar erta tashxis qo‘yish va infeksiya nazoratini ta’minlaydi.`
},
{
  "question": "Вирусли гепатитлар классификациясини кўрсатинг ва эпидемиологик ахамиятини тушунтиринг.",
  "answer": `Virusli gepatitlar A, B, C, D, E turlarga bo‘linadi. Epidemiologik ahamiyati: ular yuqish yo‘llari va tarqalish tezligi bilan farqlanadi.`
},
  {
  "question": "Карантин ва ўта хавфли инфекциясида эпидемиологик назорат қандай принциплар асосида ўтказилади?",
  "answer": `Nazorat aniqlik, uzluksizlik, aniqlangan holatga tezkor javob, aholi bilan ishlash va profilaktik choralar asosida olib boriladi.`
},
{
  "question": "Карантин ва ўта хавфли инфекцияларида эпидемиологик назорат ўтказиш мақсадни кўрсатинг?",
  "answer": `Maqsad — kasallik tarqalishini oldini olish, o‘choqni cheklash, bemorlarni aniqlab davolash va yangi holatlarning oldini olish.`
},
{
  "question": "Карантин ва ўта хавфли инфекцияларда диспансеризацияси қайси масалани кўзда тутади?",
  "answer": `Dispanserizatsiya infektsiya o‘chog‘idagi bemor va kontaktlarni doimiy kuzatuvga olish, sog‘ligini nazorat qilishni ko‘zda tutadi.`
},
{
  "question": "Карантин ва ўта хавфли инфекцияларда диспансеризация қилиниши керак бўлган гуруҳларни аниқланг?",
  "answer": `Kasallik bilan bevosita aloqada bo‘lganlar, tibbiyot xodimlari, xavfli hududdagi aholi guruhlari.`
},
{
  "question": "Сальмонеллёзда эпидемик жараёни характерловчи белгилар",
  "answer": `Oshqozon-ichak belgilarining to‘satdan boshlanishi, guruh holatlarining ko‘pligi, oziq-ovqat bilan bog‘liqligi.`
},
{
  "question": "Дизентерияни юқиш омилларини айтиб беринг",
  "answer": `Ifloz qo‘l, iflos suv, ovqatlar, umumiy idish-tovoqlar.`
},
{
  "question": "Дизентерияда касаллик манбини кўрсатинг",
  "answer": `Bemor odam va shigella tashuvchi sog‘lom odamlar.`
},
{
  "question": "Шигеллёз касалликларини асосий манбалари.",
  "answer": `Asosiy manba — shigellaga chalingan bemorlar va yashirin tashuvchilar.`
},
{
  "question": "Шигеллёзларнинг юқиш йўллари.",
  "answer": `Og‘iz orqali — suv, oziq-ovqat, iflos qo‘l, uy-ro‘zg‘or buyumlari orqali.`
},
{
  "question": "Шигеллёз касаллигини мавсумийлиги.",
  "answer": `Asosan yoz oylarida — issiqda sharoitlar mikroblar ko‘payishiga qulay bo‘ladi.`
},
  {
  "question": "Шигеллёз касалликларида эпидемиологик жараённинг ривожланиш механизми.",
  "answer": `Shigelloz kasalligining rivojlanish mexanizmi: infeksiya manbai — bemor, yuqish yo‘li — og‘iz orqali (iflos suv, oziq-ovqat), sezgir guruh — gigiyena qoidalariga rioya qilmaydigan odamlar.`
},
{
  "question": "Шигеллёз касаллигида эпидемиологик ташхис қўйиш.",
  "answer": `Tashxis: klinik simptomlar (qorin og‘rig‘i, diareya), laborator testlar (kulturani qo‘llash, mikroskopiya) orqali qo‘yiladi.`
},
{
  "question": "Шигеллёзларнинг эпидемиологияси.",
  "answer": `Shigelloz keng tarqalgan yuqumli kasallik bo‘lib, iflos suv va oziq-ovqat orqali yuqadi. Aholi zich joylarda kasallik tarqalish xavfi yuqori.`
},
{
  "question": "Шигеллёз касалликларини манбасига қаратилган чора – тадбирлар.",
  "answer": `Choralar: bemorlarni izolyatsiya qilish, sanitariya-gigiyena qoidalariga rioya qilish, iflos suv va oziq-ovqatdan saqlanish, dezinfeksiya.`
},
{
  "question": "Паразитар касалликларида эпидемиологик жараённинг ривожланиш механизми.",
  "answer": `Pazartli kasalliklar: manba — infeksiya tashuvchilari, yuqish yo‘li — ichak yoki qonni ifloslash, sezgir guruh — immuniteti zaif odamlar.`
},
{
  "question": "Безгак ва лейшманиоз касаллигини мавсумийлиги.",
  "answer": `Bezgaq va leishmanioz kasalliklari asosan issiq iqlim sharoitlarida, yozda, namlikda faoliyat ko‘rsatadi.`
},
{
  "question": "Безгак ва лейшманиоз касаллигида эпидемиологик ташхис қўйиш.",
  "answer": `Tashxis: klinik belgilar, mikroskopiya, serologik testlar yordamida qo‘yiladi.`
},
{
  "question": "Безгак ва лейшманиоз касалликларининг эпидемиологияси.",
  "answer": `Bezgaq va leishmanioz tropik hududlarda tarqalgan, yuqish yo‘llari — chaqadigan hasharotlar orqali.`
},
{
  "question": "Безгак ва лейшманиоз касалликларини манбасига қаратилган чора – тадбирлар.",
  "answer": `Choralar: insektitsidlar bilan kurashish, zararli hasharotlardan himoya, malarial kasallikka qarshi dori-darmonlar.`
},
{
  "question": "Безгак юқиш йўлларига қаратилган чора – тадбирлар.",
  "answer": `Choralar: insektitsidlar bilan davolash, chivinlarni yo‘q qilish, toza suvni ta’minlash, malarialga qarshi vaksina.`
},
  {
  "question": "Ўчоқдаги инфекцияга қарши дезинфекция қилувчи моддалар, усуллар.",
  "answer": `Dezinfeksiya moddalariga xlorli birikmalar, formaldegid, vodorod peroksid kiradi. Usullar: kimyoviy, issiq va mexanik.`
},
{
  "question": "Безгак ва лейшманиоз касалликларида эпидемиологик назорат.",
  "answer": `Bezgaq va leishmanioz kasalliklarida nazorat: xavfli hududlarda kuzatuv, kasallikka qarshi kurashish uchun profilaktika va dori-darmonlar.`
},
{
  "question": "Карантин ва обсервация хақида тушинтиринг",
  "answer": `Karantin — kasallikning tarqalishini oldini olish maqsadida bemorlarni izolyatsiya qilish. Observalatsiya — kasallikka aloqada bo‘lganlarni tibbiy kuzatuvga olish.`
},
{
  "question": "Иммунопрофилактика нима ва унинг эпидемиологик ахамияти",
  "answer": `Immunoprofilaktika — kasalliklarning oldini olish uchun organizmning immunitetini kuchaytirish. Bu kasalliklarning tarqalishini kamaytiradi va epidemiyalarga qarshi samarali choradir.`
},
{
  "question": "Табиий актив ва пассив иммунитетни тушунтиринг",
  "answer": `Tabiiy aktiv immunitet — organizmning o‘zini o‘zi himoya qilish qobiliyati. Tabiiy passiv immunitet — onadan bolaning tabiiy tarzda o‘tkazilgan immuniteti.`
},
{
  "question": "Жамоа иммунитети хақида тушунча",
  "answer": `Jamoa immuniteti — aholi guruhining kasallikka qarshi tabiiy yoki sun’iy immuniteti yuqori bo‘lib, kasallikning tarqalishini to‘xtatadi.`
},
{
  "question": "Вакцинация самарадорлигини эпидемиологик ахамияти",
  "answer": `Vaksinatsiya samaradorligi — kasalliklarni kamaytirish va oldini olish uchun vaksinaning to‘g‘ri ta’sir qilish qobiliyati. Bu jamoa immunitetini oshiradi.`
},
{
  "question": "Совуқ занжир схемаси ва унинг эмлаш самарадорлигига таъсири",
  "answer": `Sovuq zanjir — vaksina saqlash va tashish jarayonida muhim bo‘lib, uning sifatini saqlashda samarali ta’sir qiladi. Emish samaradorligi sovuq zanjirga to‘liq rioya qilishga bog‘liq.`
},
{
  "question": "Вакциналар турлари ва уларнинг ахамияти",
  "answer": `Vaksinalar: inaktivatsiya qilingan, attenuatsiya qilingan va rekombinant vaktsinalar. Ular kasalliklardan himoya qilishda asosiy vosita bo‘lib xizmat qiladi.`
},
{
  "question": "Дезинфекция турлари ва усуллари хақида тушунча",
  "answer": `Dizinfeksiya turlari: kimyoviy, mexanik, issiq. Har bir usulni infektsiyalarni kamaytirish maqsadida muayyan sharoitga mos ravishda qo‘llash zarur.`
},
  {
  "question": "Дератизация ва дезинсекциянинг аралаш усуллари ва қўллаш",
  "answer": `Deraizatsiya (kemiruvchilarga qarshi kurash) va dezinseksiya (hasharotlarga qarshi kurash) birgalikda qo‘llaniladi. Bu usullar infektsiyalarning tarqalishini to‘xtatishda samarali bo‘ladi.`
},
{
  "question": "Қандай холатларда вакцинация ўтказилмайди",
  "answer": `Vaksinatsiya immunitetni kamaytiradigan kasalliklar (masalan, saraton), homiladorlik, o'tmishda allergik reaksiya bo'lganlar va jiddiy kasalliklar holatida o‘tkazilmaydi.`
},
{
  "question": "Вакциналарнинг яроқлилигини бахолаш ва қўллаш усуллари",
  "answer": `Vaksinalarning yaroqliligi testlar orqali aniqlanadi, vaksinalar shifokorlar tomonidan tasdiqlangan tartibda qo‘llaniladi.`
},
{
  "question": "Табиий пассив ва табиий актив иммунитет хақида тушунча",
  "answer": `Tabiiy passiv immunitet — ona bilan bolasiga o‘tadigan immunitet. Tabiiy aktiv immunitet — organizmning o‘z immun tizimi tomonidan hosil bo‘lgan immunitet.`
},
{
  "question": "Сунъий пассив ва сунъий актив иммунитет хақида тушунча",
  "answer": `Sun’iy passiv immunitet — tashqi manbadan (masalan, immunoglobulinlar) olingan immunitet. Sun’iy aktiv immunitet — vaksinatsiya orqali olingan immunitet.`
},
{
  "question": "Ваксинация самарадорлигига таъсир қилувчи омиллар",
  "answer": `Vaksinatsiya samaradorligi immunitet holati, vaktsinaning sifatiga, saqlash va tashish sharoitlariga bog‘liq.`
},
{
  "question": "Эпидемик жараённи бошқаришда санитария-эпидемиологик xizmatининг ўрни",
  "answer": `Sanitariya-epidemiologik xizmat epidemiyalarni oldini olish, monitoring qilish, infektsiyalarga qarshi kurashish va profilaktik choralar ko‘rishda muhim rol o‘ynaydi.`
},
{
  "question": "Эпидемик жараённинг тўхталиш шакллари",
  "answer": `Epidemiya to‘xtalishi kasalliklarning kamayishi, yaxshilanishi yoki to‘liq yo‘qolishi orqali sodir bo‘ladi.`
},
{
  "question": "Эпидемик жараёнда муваффақиятли профилактика амалга ошириш учун қандай қадамлар керак?",
  "answer": `Muvaffaqiyatli profilaktika uchun ma’lumot to‘plash, tezkor javob berish, profilaktik chora-tadbirlarni amalga oshirish va kasallik tarqalishini to‘xtatish kerak.`
},
{
  "question": "Санитария-эпидемиологик хизматнинг профилактикадаги аҳамияти",
  "answer": `Sanitariya-epidemiologik xizmat kasalliklarning oldini olish va tarqalishini cheklashda, profilaktik choralarni amalga oshirishda va jamoa immunitetini oshirishda katta ahamiyatga ega.`
}
  ];

// 1-biletni ko‘rsatish uchun:
const ticket = tickets[0];

document.querySelector('.answer').innerText = ticket.answer;
const markdownAnswer = marked(ticket.answer);
document.querySelector('.answer').innerHTML = markdownAnswer;
document.querySelector('.answer').innerHTML = ticket.answer;
