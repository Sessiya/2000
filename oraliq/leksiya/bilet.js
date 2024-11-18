const tickets = [
  {
    question: "Klinik farmakologiya fanining maqsadi va vazifalari.",
    answer: "Klinik farmakologiya - dorilarning inson organizmiga ta'sirini o'rganish va davolashda ularni ratsional qo'llash uchun asos yaratadi. Maqsadi: dori vositalarini xavfsiz va samarali qo'llashni ta'minlash."
  },
  {
    question: "Farmakokinetika tushunchasi va uning asosiy parametrlari.",
    answer: "Farmakokinetika - dori vositasining organizmdagi taqsimlanishi, so'rilishi, metabolizmi va chiqarilish jarayonlarini o'rganadi. Asosiy parametrlari: biokiraolishlik, yarim chiqarilish vaqti, metabolizm, klirens."
  },
  {
    question: "Farmakodinamika tushunchasi va uning asosiy parametrlari.",
    answer: "Farmakodinamika - dori vositasining organizmga ta'sir qilish mexanizmlari va effektlarini o'rganadi. Asosiy parametrlari: agonistlar, antagonistlar, terapevtik ta'sir, yon ta'sirlar."
  },
  {
    question: "Taxifilaksiya va idiosinkraziya haqida tushuncha.",
    answer: "Taxifilaksiya - dori vositasiga organizmning tezda chidamlilikni rivojlantirishi. Idiosinkraziya - organizmning doriga genetik jihatdan individual sezgirligi."
  },
  {
    question: "Farmakokinetika va farmakodinamika o'rtasidagi bog'liqlik.",
    answer: "Farmakokinetika dori vositasining organizmda taqsimlanishi va konsentratsiyasini belgilaydi, farmakodinamika esa ushbu konsentratsiyaga mos javobni aniqlaydi."
  },
  {
    question: "FK ning farmakoterapiyadagi ahamiyati.",
    answer: "Farmakokinetika farmakoterapiyada dorilarni to'g'ri dozada va intervalda qo'llash orqali samaradorlikni oshirish va nojo'ya ta'sirlarni kamaytirishga yordam beradi."
  },
  {
    question: "Farmakoterapiyada FDning ahamiyati.",
    answer: "Farmakodinamika dori vositalarining organizmga qanday ta'sir ko'rsatishini o'rganib, ularni maqsadli va samarali qo'llashni ta'minlaydi."
  },
  {
    question: "Dori vositalarining o'zaro ta'siri turlari.",
    answer: "Dori vositalari farmakokinetik (so'rilish, taqsimlanish, metabolizm, chiqarilish) va farmakodinamik (sinergiya, antagonizm) jihatdan o'zaro ta'sir qilishi mumkin."
  },
  {
    question: "Dori vositalarining farmakokinetik o'zaro ta'sirining klinik ahamiyati.",
    answer: "Farmakokinetik o'zaro ta'sir dori vositasining samaradorligi va xavfsizligiga ta'sir ko'rsatib, dozalash rejimini o'zgartirishni talab qilishi mumkin."
  },
  {
    question: "Homiladorlik paytida ruxsat etilmagan antibakterial vositalar.",
    answer: "Tetratsiklin, streptomitsin, aminoglikozidlar kabi antibiotiklar homiladorlik paytida foydalanish tavsiya etilmaydi, chunki ular homila rivojlanishiga salbiy ta'sir qilishi mumkin."
  },
  {
    question: "Homiladorlik davrida dori vositalarining embriotoksik va teratogen ta'siri.",
    answer: "Embriotoksik ta'sir - homilaning rivojlanishining dastlabki bosqichlariga zarar yetkazish, teratogen ta'sir esa tug'ma nuqsonlar keltirib chiqarishi bilan xarakterlanadi."
  },
  {
    question: "FDA bo’yicha homiladorlik paytida qo'llaniladigan DVning kategoriyalari.",
    answer: "FDA homiladorlik davrida dorilarni xavfsizligi bo'yicha A, B, C, D, X kategoriyalarga ajratadi. A - xavfsiz, X - qat'iyan man etilgan."
  },
  {
    question: "Dori vositalarining salbiy ta'siri xavfini oshiradigan omillar.",
    answer: "Yoshi, jigar va buyrak kasalliklari, bir nechta dorilarni birgalikda qabul qilish, genetik xususiyatlar salbiy ta'sir xavfini oshiradi."
  },
  {
    question: "Dori vositalarining nojo’ya ta'siri va ularning klinik ko'rinishlari.",
    answer: "Nojo'ya ta'sirlar allergik reaksiyalar, oshqozon-ichak bezovtaligi, bosh og'rig'i, jigar va buyrak zararlanishi ko'rinishida bo'lishi mumkin."
  },
  {
    question: "Farmakogenetika tushunchasi.",
    answer: "Farmakogenetika - dori vositalariga individual genetik javoblarni o'rganadigan fan."
  },
  {
    question: "Farmakoiqtisodiyot tushunchasi.",
    answer: "Farmakoiqtisodiyot - dori vositalarini iqtisodiy jihatdan ratsional tanlash va qo'llash masalalarini o'rganadi."
  },
  {
    question: "Farmakoepidemiologiya tushunchasi.",
    answer: "Farmakoepidemiologiya - dorilarning aholiga ta'sirini epidemiologik usullar bilan o'rganadi."
  },
  {
    question: "Dori vositalarining klinik sinovlari bosqichlari.",
    answer: "Klinik sinovlar 4 bosqichdan iborat: xavfsizlik, samaradorlik, uzoq muddatli ta'sir va amaliy qo'llanilish."
  },
  {
    question: "KFning yoshga bog'liq xususiyatlari haqida tushuncha.",
    answer: "Bolalar va qariyalarda metabolizm va chiqarilish jarayonlari o'zgarishi sababli dorilar dozasi moslashtirilishi kerak."
  },
  {
    question: "Ratsional farmakoterapiya asoslari.",
    answer: "Ratsional farmakoterapiya dorilarni xavfsiz, samarali va iqtisodiy jihatdan oqilona qo'llashni nazarda tutadi."
  }
];
