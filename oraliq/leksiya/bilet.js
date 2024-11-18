const tickets = [
  {
    question: "Klinik farmakologiya fanining maqsadi va vazifalari.",
    answer: "Klinik farmakologiya - bu dori vositalarining inson organizmiga ta'sirini o'rganadigan fan bo'lib, davolashda ularni to'g'ri va xavfsiz qo'llash uchun asos yaratadi. Maqsadi - dorilarni samarali va xavfsiz qo'llashni ta'minlash, shuningdek, yangi dorilarni yaratishda ilmiy asoslarni taqdim etish."
  },
  {
    question: "Farmakokinetika tushunchasi va uning asosiy parametrlari.",
    answer: "Farmakokinetika - dori vositasining organizmdagi so'rilishi, taqsimlanishi, metabolizmi va chiqarilish jarayonlarini o'rganadi. Asosiy parametrlari: 1) Biokiraolishlik (dorining organizmga so'rilishi va faol moddalarining miqdori); 2) Yarim chiqarilish vaqti (dorining organizmdan qanchalik tez chiqarilishi); 3) Metabolizm (dorining jigar va boshqa organlarda kimyoviy o'zgarishlari); 4) Klirens (organizmdan dori vositasining tozalash tezligi)."
  },
  {
    question: "Farmakodinamika tushunchasi va uning asosiy parametrlari.",
    answer: "Farmakodinamika - dori vositalarining organizmga ta'sir mexanizmlari va ularning samaralarini o'rganadi. Asosiy parametrlari: 1) Agonistlar (dorilar, ularning ta'siri orqali hujayralardagi faoliyatni rag'batlantiradi); 2) Antagonistlar (dorilar, ularning ta'siri orqali hujayra faoliyatini to'sadi); 3) Terapevtik ta'sir (dorining maqsadli kasallikka ta'siri); 4) Yon ta'sirlar (dorining maqsadli bo'lmagan nojo'ya ta'sirlar)."
  },
  {
    question: "Taxifilaksiya va idiosinkraziya haqida tushuncha.",
    answer: "Taxifilaksiya - bu dorining organizmda samaradorligi kamayishi yoki uning ta'siriga chidamlilikning tez rivojlanishi. Idiosinkraziya esa dorilarga organizmning individual, genetik asoslangan maxsus reaktsiyasidir, bu ta'sirlar faqat ba'zi shaxslarda yuzaga keladi."
  },
  {
    question: "Farmakokinetika va farmakodinamika o'rtasidagi bog'liqlik.",
    answer: "Farmakokinetika dorining organizmdagi harakatini (so'rilish, taqsimlanish, metabolizm va chiqarilish) o'rganadi, bu esa farmakodinamika uchun zarur bo'lgan ma'lumotlarni taqdim etadi. Farmakodinamika esa, organizmda dori vositasining qanday ta'sir qilishini, uning terapevtik va nojo'ya ta'sirlarini o'rganadi."
  },
  {
    question: "FK ning farmakoterapiyadagi ahamiyati.",
    answer: "Farmakokinetika farmakoterapiyada dorilarning organizmda qanday taqsimlanishini va qanday chiqarilishini aniqlaydi. Bu esa dorilarning optimal dozalarini va davolash davomiyligini belgilashda yordam beradi, shuningdek, nojo'ya ta'sirlarni kamaytirishga yordam beradi."
  },
  {
    question: "Farmakoterapiyada FDning ahamiyati.",
    answer: "Farmakodinamika dori vositasining ta'sir mexanizmlarini o'rganadi. Bu esa dorilarning samarali va maqsadli qo'llanishini ta'minlashda muhim rol o'ynaydi, chunki FD organizmda dorining qanday ta'sir qilishini va uning o'zaro ta'sirlarini belgilaydi."
  },
  {
    question: "Dori vositalarining o'zaro ta'siri turlari.",
    answer: "Dori vositalarining o'zaro ta'siri farmakokinetik (so'rilish, taqsimlanish, metabolizm, chiqarilish) va farmakodinamik (sinergiya, antagonizm) jihatdan bo'lishi mumkin. Farmakokinetik o'zaro ta'sir dorilar bir-birining so'rilishini yoki metabolizmini o'zgartirish orqali samaradorlikka ta'sir qiladi, farmakodinamik o'zaro ta'sir esa dorilarning terapevtik ta'sirini kuchaytirishi yoki kamaytirishi mumkin."
  },
  {
    question: "Dori vositalarining farmakokinetik o'zaro ta'sirining klinik ahamiyati.",
    answer: "Farmakokinetik o'zaro ta'sirlar dori vositalarining bir-birining ta'siriga ta'sir ko'rsatadi. Masalan, bir dori boshqa dorining so'rilishini kamaytirishi yoki metabolizmni tezlashtirishi mumkin. Bu o'zaro ta'sirlar, dorilarning samaradorligini va xavfsizligini ta'sir qilishi mumkin, shuning uchun dozalarni va davolash rejimlarini qayta ko'rib chiqish zarur bo'lishi mumkin."
  },
  {
    question: "Homiladorlik paytida ruxsat etilmagan antibakterial vositalar.",
    answer: "Homiladorlikda tetratsiklin, streptomitsin, aminoglikozidlar kabi antibiotiklar qo'llanilishi tavsiya etilmaydi, chunki ular homilaning rivojlanishiga zarar yetkazishi mumkin, masalan, skelet tizimi yoki eshitish tizimi uchun salbiy ta'sir ko'rsatishi mumkin."
  },
  {
    question: "Homiladorlik davrida dori vositalarining embriotoksik va teratogen ta'siri.",
    answer: "Embriotoksik ta'sir - bu homilaning dastlabki rivojlanish bosqichlarida zarar yetkazish, masalan, nerv tizimi yoki yurak tizimining shakllanishiga ta'sir qilish. Teratogen ta'sir esa tug'ma nuqsonlarga olib kelishi mumkin, masalan, organlar yoki skelet tizimining noto'g'ri rivojlanishi."
  },
  {
    question: "FDA bo’yicha homiladorlik paytida qo'llaniladigan DVning kategoriyalari.",
    answer: "FDA homiladorlik davrida dorilarni xavfsizligi bo'yicha A, B, C, D, X kategoriyalarga ajratadi: A - homiladorlik uchun xavfsiz, B - ehtiyotkorlik bilan qo'llanilishi mumkin, C - xavf mavjud, D - xavf katta, X - qat'iyan man etilgan."
  },
  {
    question: "Dori vositalarining salbiy ta'siri xavfini oshiradigan omillar.",
    answer: "Dori vositalarining salbiy ta'sirini oshiradigan omillar orasida shaxsning yoshi (bolalar va keksa yoshdagi bemorlar), jigar va buyrak kasalliklari, bir nechta dorilarni birgalikda qabul qilish, va genetik xususiyatlar kiradi."
  },
  {
    question: "Dori vositalarining nojo'ya ta'siri va ularning klinik ko'rinishlari.",
    answer: "Dori vositalarining nojo'ya ta'siri turli klinik holatlarda ko'rinishi mumkin. Ular allergik reaktsiyalar (toshmalar, nafas qisilishi), oshqozon-ichak tizimining buzilishi (ich ketishi, ko'ngil aynishi), bosh og'rig'i, jigar va buyraklarning zararlanishi ko'rinishida namoyon bo'lishi mumkin."
  },
  {
    question: "Farmakogenetika tushunchasi.",
    answer: "Farmakogenetika - bu dorilarga individual genetik javoblarni o'rganadigan fan bo'lib, bu fan dori vositalarining samaradorligini va xavfsizligini yaxshilashga yordam beradi. U bemorlarning genetik xususiyatlariga asoslanib, dori terapiyasini optimallashtirishni ta'minlaydi."
  },
  {
    question: "Farmakoiqtisodiyot tushunchasi.",
    answer: "Farmakoiqtisodiyot - dori vositalarini iqtisodiy jihatdan ratsional tanlash va ularning qo'llanilish samaradorligini o'rganadi. Bu soha, dori vositalarini tanlashda samaradorlik va iqtisodiy jihatlarni hisobga olishni ta'minlaydi."
  },
    {
    question: "Farmakoepidemiologiya tushunchasi.",
    answer: "Farmakoepidemiologiya - dorilarning aholiga ta'sirini epidemiologik usullar bilan o'rganadigan fan bo'lib, dorilarni qo'llashning keng tarqalganligi, xavf-xatarlar va samaradorligini baholaydi. U dorilarning umumiy aholi salomatligiga ta'sirini tahlil qilishni maqsad qiladi."
  },
  {
    question: "Dori vositalarining klinik sinovlari bosqichlari.",
    answer: "Klinik sinovlar 4 bosqichdan iborat: 1) I-bosqich (Xavfsizlikni tekshirish) - kichik guruhdagi sog'lom voluntyorlar ustida dorining xavfsizligini tekshirish; 2) II-bosqich (Samaradorlikni tekshirish) - bemorlarda dorining samaradorligini va nojo'ya ta'sirlarini o'rganish; 3) III-bosqich (Keng miqyosda sinovlar) - katta miqdordagi bemorlar ustida dorining samaradorligi va xavfsizligini baholash; 4) IV-bosqich (Post-marketing tekshiruvi) - dorining bozorda sotuvga chiqarganidan keyin keng ommada qo'llanilishi va uzoq muddatli ta'sirlarini o'rganish."
  },
  {
    question: "KFning yoshga bog'liq xususiyatlari haqida tushuncha.",
    answer: "Bolalar va qariyalarda metabolizm va chiqarilish jarayonlari o'zgarishi sababli dorilar dozasi va davolash rejimi moslashtirilishi kerak. Bolalarda dori vositalari tezroq so'riladi va organizmdan chiqariladi, shuningdek, dori vositalariga javob farqlari ham kuzatiladi. Keksa yoshdagi bemorlarda esa metabolizm sekinlashadi, shuning uchun dorilarni ehtiyotkorlik bilan tanlash va dozani kamaytirish zarur."
  },
  {
    question: "Ratsional farmakoterapiya asoslari.",
    answer: "Ratsional farmakoterapiya - dorilarni xavfsiz, samarali va iqtisodiy jihatdan oqilona qo'llashni ta'minlashga qaratilgan yondashuvdir. Bunda, dorilarni bemorning aniq ehtiyojlariga mos ravishda tanlash, to'g'ri doza va davolash davomiyligini belgilash, shuningdek, nojo'ya ta'sirlarni minimallashtirishga alohida e'tibor beriladi."
  }
];
