const tickets = [
  {
    question: "Klinik farmakologiya fanining maqsadi va vazifalari.",
    answer: "Klinik farmakologiyaning maqsadi dorilarni xavfsiz va samarali qo‘llashni ta’minlash, bemorga mos dori va to‘g‘ri doza tanlash orqali davolash samaradorligini oshirish va nojo‘ya ta’sirlarni kamaytirishdir. Vazifalari: dorilarning organizmdagi harakatini, ta'sir mexanizmlarini, o‘zaro ta’sirlarini va nojo‘ya ta’sirlarini o‘rganish; ratsional farmakoterapiya tamoyillarini ishlab chiqish."
  },
  {
    question: "Farmakokinetika tushunchasi va uning asosiy parametrlari.",
    answer: "Farmakokinetika dori vositalarining organizmga kirgandan keyingi harakatini o‘rganuvchi sohadir. Asosiy parametrlari: kiritish yoʻllari, so‘rilish, taqsimlanish, biotransformatsiya (metabolizm), chiqarilish va yarim chiqarilish davri."
  },
  {
    question: "Farmakodinamika tushunchasi va uning asosiy parametrlari.",
    answer: "Farmakodinamika dorilarning organizmga ta'sirini o‘rganadi. Asosiy parametrlari: ta'sir mexanizmi, potensiya (ta'sir kuchi), maksimal ta'sir (effikasiya), klinik ta'sir, nojo‘ya ta'sirlar va tolerantlik."
  },
  {
    question: "Taxifilaksiya va idiosinkraziya haqida tushuncha.",
    answer: "Taxifilaksiya – dorini takroriy qo‘llaganda ta'sirining pasayishi. Idiosinkraziya – doriga individual, kutilmagan reaksiya, masalan, allergiya yoki boshqa nojo‘ya ta'sirlar."
  },
  {
    question: "Farmakokinetika va farmakodinamika o'rtasidagi bog'liqlik.",
    answer: "Farmakokinetika dori vositalarining organizmdagi harakati (masalan, so‘rilish va chiqarilish) bilan bog‘liq bo‘lsa, farmakodinamika dorilarning organizmga qanday ta'sir qilishini o‘rganadi. Ular birgalikda dori ta'sirining davomiyligi va samaradorligini aniqlaydi."
  },
  {
    question: "FK ning farmakoterapiyadagi ahamiyati.",
    answer: "Farmakokinetika dori dozalari va davolash davomiyligini aniq belgilash orqali samaradorlikni oshiradi va nojo‘ya ta'sirlarni kamaytiradi."
  },
  {
    question: "Farmakoterapiyada FDning ahamiyati.",
    answer: "Farmakodinamika dori vositalarining mexanizmlarini tushunish orqali dorilarning klinik samaradorligi va xavfsizligini ta'minlaydi."
  },
  {
    question: "Dori vositalarining o'zaro ta'siri turlari.",
    answer: "Farmakodinamik o‘zaro ta'sir (agonistik yoki antagonistik ta'sir), farmakokinetik o‘zaro ta'sir (so‘rilish, taqsimlanish, metabolizm va chiqarilishning o‘zgarishi), reaktiv o‘zaro ta'sir (kimyoviy reaksiyalar) va sinergizm yoki antagonizm."
  },
  {
    question: "Dori vositalarining farmakokinetik o'zaro ta'sirining klinik ahamiyati.",
    answer: "Farmakokinetik o‘zaro ta'sirlar dori vositalarining ta'sirini kuchaytirishi yoki susaytirishi mumkin, bu esa davolash samaradorligiga va xavfsizligiga ta'sir qiladi."
  },
  {
    question: "Homiladorlik paytida ruxsat etilmagan antibakterial vositalar.",
    answer: "Tetrasiklin, fluorxinolonlar va aminoglikozidlar (masalan, streptomitsin) homiladorlikda taqiqlangan, chunki ular homila rivojlanishiga zarar yetkazishi mumkin."
  },
  {
    question: "Homiladorlik davrida dori vositalarining embriotoksik va teratogen ta'siri.",
    answer: "Embriotoksik ta'sir homiladagi hujayralarga zarar yetkazib rivojlanishni kechiktiradi, teratogen ta'sir esa tug‘ma nuqsonlarga sabab bo‘ladi."
  },
  {
    question: "FDA homiladorlik davrida dorilarni xavfsizligi bo'yicha.",
    answer: "FDA dorilarni A (xavfsiz), B (ehtimol xavfsiz), C (ehtiyotkorlik bilan), D (xavfli, ammo muqobil davolash yo‘q), X (mutlaqo xavfli) kategoriyalariga ajratadi."
  },
  {
    question: "Dori vositalarining salbiy ta'siri xavfini oshiradigan omillar.",
    answer: "Yosh (bolalar va qariyalar), genetik omillar, yuqori dozalar, uzoq muddatli qo‘llanish, buyrak va jigar kasalliklari."
  },
  {
    question: "Dori vositalarining nojo'ya ta'siri va ularning klinik ko'rinishlari.",
    answer: "Nojo‘ya ta'sirlar: allergik reaksiyalar, oshqozon-ichak muammolari (NSAIDlar), eshitish buzilishi (aminoglikozidlar)."
  },
  {
    question: "Farmakogenetika tushunchasi.",
    answer: "Farmakogenetika organizmning genetik xususiyatlari va dorilarga javob o‘rtasidagi bog‘liqlikni o‘rganadi."
  },
  {
    question: "Farmakoiqtisodiyot tushunchasi.",
    answer: "Farmakoiqtisodiyot dorilarning samaradorligi va iqtisodiy jihatdan foydaliligini o‘rganadi."
  },
  {
    question: "Farmakoepidemiologiya tushunchasi.",
    answer: "Farmakoepidemiologiya dorilarning katta populyatsiyalarga ta'siri va qo‘llanishini o‘rganadi."
  },
  {
    question: "Dori vositalarining klinik sinovlari bosqichlari.",
    answer: "I bosqich: xavfsizlik, II bosqich: samaradorlik, III bosqich: katta populyatsiyalar, IV bosqich: uzoq muddatli kuzatuv."
  },
  {
    question: "KFning yoshga bog'liq xususiyatlari haqida tushuncha.",
    answer: "Bolalarda metabolizm tezroq, qariyalarda esa sekinroq bo‘lib, dozalashda bu inobatga olinadi."
  },
  {
    question: "Ratsional farmakoterapiya asoslari.",
    answer: "Ratsional farmakoterapiya xavfsizlik, samaradorlik va individual yondashuvga asoslanib, dori vositasini tanlash va qo‘llashni o‘z ichiga oladi."
  }
];
