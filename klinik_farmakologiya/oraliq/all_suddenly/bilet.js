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
  },
  {
    question: "Strofantinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: yurak yetishmovchiligi, surunkali yurak kasalliklari. Qarshi ko’rsatmalari: gipotoniya, buyrak yetishmovchiligi. FD: miokard kontraktilligini oshiradi. FK: intravenoz yuboriladi, ta'sir tez boshlanadi va qisqa davom etadi. O'zaro ta'siri: boshqa kardiotonik vositalar bilan ehtiyotkorlik talab qiladi. Nojo’ya ta’siri: aritmiyalar, bosh aylanishi. Dozalash: 0.25-1 mg intravenoz."
  },
  {
    question: "Digoksinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: surunkali yurak yetishmovchiligi, atrial fibrillyatsiya. Qarshi ko’rsatmalari: kardiomiopatiya, buyrak yetishmovchiligi. FD: miokardning qisqarish kuchini oshiradi, yurak urishini tartibga soladi. FK: oral yoki intravenoz yuboriladi, yarim chiqarilish vaqti 36-48 soat. O'zaro ta'siri: diuretiklar bilan hipokalemiya xavfi oshadi. Nojo’ya ta’siri: aritmiyalar, ko'ngil aynishi. Dozalash: 0.125-0.25 mg kuniga."
  },
  {
    question: "Digitoksinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: yurak yetishmovchiligi, taxiaritmiyalar. Qarshi ko’rsatmalari: glikozid intoksikatsiyasi. FD: yurak qisqarish kuchini oshiradi. FK: yarim chiqarilish vaqti uzoq (5-7 kun), oral yuboriladi. O'zaro ta'siri: kaliy va magniy darajasini pasaytiruvchi vositalar bilan ehtiyotkorlik. Nojo’ya ta’siri: bradikardiya, bosh aylanishi. Dozalash: 0.1-0.3 mg kuniga."
  },
  {
    question: "Korglikonning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: o'tkir yurak yetishmovchiligi. Qarshi ko’rsatmalari: kardiogen shok, gipotoniya. FD: yurak qisqarish kuchini oshiradi. FK: intravenoz yuboriladi, tez ta'sir qiladi. O'zaro ta'siri: beta-blokatorlar bilan ehtiyotkorlik. Nojo’ya ta’siri: aritmiyalar, ko'ngil aynishi. Dozalash: 0.5-1 mg intravenoz."
  },
  {
    question: "Kardiotonik dorilarning samaradorligi va xavfsizligini baholash.",
    answer: "Kardiotonik dorilar samaradorligi yurak qisqarish kuchini oshirishi bilan o'lchanadi. Xavfsizligi dori dozasi, metabolizm va chiqarilish xususiyatlariga bog'liq. Nojo'ya ta'sirlarni oldini olish uchun dozalash aniq nazorat qilinishi lozim."
  },
  {
    question: "Furosemidning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: shishlar, gipertenziya, yurak yetishmovchiligi. Qarshi ko’rsatmalari: anuriya, gipotoniya. FD: diurezni oshiradi, suyuqlikni chiqaradi. FK: intravenoz yoki oral qabul qilinadi, tez ta'sir qiladi. O'zaro ta'siri: boshqa diuretiklar bilan hipokalemiya xavfi oshadi. Nojo’ya ta’siri: elektrolit muvozanati buzilishi. Dozalash: 20-80 mg kuniga."
  },
  {
    question: "Gidroxlorotiazidning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, yurak shishlari. Qarshi ko’rsatmalari: anuriya, jiddiy buyrak yetishmovchiligi. FD: suyuqlikni chiqaradi, qon bosimini pasaytiradi. FK: oral qabul qilinadi, ta'sir 1-2 soatda boshlanadi. O'zaro ta'siri: antihipertenziv vositalar bilan sinergiya. Nojo’ya ta’siri: gipokalemiya, bosh og'rig'i. Dozalash: 25-100 mg kuniga."
  },
  {
    question: "Asetazolamidning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: glaukoma, metabolik alkaloz. Qarshi ko’rsatmalari: buyrak yetishmovchiligi, kaliy tanqisligi. FD: karbonat angidraza inhibitatori sifatida ishlaydi. FK: oral yoki intravenoz yuboriladi, ta'sir tez boshlanadi. O'zaro ta'siri: diuretiklarning ta'sirini kuchaytirishi mumkin. Nojo’ya ta’siri: asidoz, bosh aylanishi. Dozalash: 250-1000 mg kuniga."
  },
  {
    question: "Karbamidning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: miya shishi, glaukoma. Qarshi ko’rsatmalari: yurak yetishmovchiligi, elektrolit buzilishi. FD: osmotik diuretik sifatida ishlaydi. FK: intravenoz yuboriladi, tez ta'sir qiladi. O'zaro ta'siri: boshqa osmotik vositalar bilan kombinatsiyalanishi mumkin. Nojo’ya ta’siri: bosh og'rig'i, elektrolit buzilishi. Dozalash: 1-1.5 g/kg."
  },
  {
    question: "Etakrin kislotasining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: shishlar, buyrak yetishmovchiligi. Qarshi ko’rsatmalari: gipotoniya, jiddiy elektrolit buzilishi. FD: diurezni kuchaytiradi. FK: oral yoki intravenoz yuboriladi. O'zaro ta'siri: diuretiklar bilan hipokalemiya xavfi oshadi. Nojo’ya ta’siri: ototoksik ta'sir, bosh aylanishi. Dozalash: 50-100 mg kuniga."
  },
  {
    question: "Veroshpironning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, gipokalemiya. Qarshi ko’rsatmalari: giperkalemiya, buyrak yetishmovchiligi. FD: aldosteron antagonisti sifatida ishlaydi. FK: oral qabul qilinadi, ta'sir 2-3 soatda boshlanadi. O'zaro ta'siri: ACE-inhibitorlar bilan giperkalemiya xavfi oshadi. Nojo’ya ta’siri: bosh aylanishi, giperkalemiya. Dozalash: 25-100 mg kuniga."
  },
  {
    question: "Amiloridning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
        answer: "Ko'rsatmalar: gipertenziya, gipokalemiya. Qarshi ko’rsatmalari: giperkalemiya, buyrak yetishmovchiligi. FD: natriy kanallarini bloklash orqali kaliyni saqlaydi. FK: oral qabul qilinadi, ta'sir 6-10 soat davom etadi. O'zaro ta'siri: boshqa kaliy tejovchi diuretiklar bilan kombinatsiyalanishi mumkin. Nojo’ya ta’siri: giperkalemiya, oshqozon-ichak bezovtaligi. Dozalash: 5-10 mg kuniga."
  },
  {
    question: "Indapamidning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya. Qarshi ko’rsatmalari: jiddiy buyrak yoki jigar yetishmovchiligi. FD: qon tomirlarining kengayishini va diurezni oshiradi. FK: oral qabul qilinadi, ta'sir 1-2 soatda boshlanadi va 24 soat davom etadi. O'zaro ta'siri: antihipertenziv vositalar bilan sinergiya. Nojo’ya ta’siri: bosh aylanishi, gipokalemiya. Dozalash: 1.25-2.5 mg kuniga."
  },
  {
    question: "Triamterenning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipokalemiya, yurak shishlari. Qarshi ko’rsatmalari: giperkalemiya, buyrak yetishmovchiligi. FD: natriy kanallarini bloklab, kaliyni saqlaydi. FK: oral qabul qilinadi, ta'sir 2-4 soatda boshlanadi. O'zaro ta'siri: kaliy saqlovchi boshqa vositalar bilan ehtiyotkorlik talab qiladi. Nojo’ya ta’siri: giperkalemiya, oshqozon-ichak bezovtaligi. Dozalash: 50-100 mg kuniga."
  },
  {
    question: "Diuretiklarning samaradorligi va xavfsizligini baholash.",
    answer: "Diuretiklarning samaradorligi ularning suyuqlik va elektrolit chiqarish qobiliyati bilan o'lchanadi. Xavfsizligi klinik kuzatuv va elektrolit darajasi monitoringi bilan baholanadi. Dozani oshirmaslik va nojo'ya ta'sirlarni oldini olish uchun individual yondashuv talab etiladi."
  },
  {
    question: "Asetilsalitsil kislotasining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: og'riq, yallig'lanish, isitma. Qarshi ko'rsatmalar: oshqozon yarasi, jigar kasalliklari. FD: tsiklooksigenaza (COX) ni inhibe qilib, prostaglandinlarni kamaytiradi. FK: oshqozon orqali tez so'riladi, 2-4 soatda ta'sir ko'rsatadi. O'zaro ta'siri: metotreksat, antikoagulyantlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: oshqozon-ichak tizimi bezovtaligi, qon ketishi. Dozalash rejimi: 300-1000 mg kuniga 1-4 marta."
  },
  {
    question: "Klopidogrelning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: yurak-qon tomir kasalliklari, insult, infarkt xavfi. Qarshi ko'rsatmalar: og'ir jigar kasalliklari, qon ketishi. FD: ADP reseptorlarini inhibe qilib, trombosit agregatsiyasini kamaytiradi. FK: oshqozon orqali so'riladi, 1-2 soatda maksimal konsentratsiyaga erishadi. O'zaro ta'siri: antikoagulyantlar, NSAIDlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: qonda oqsil miqdorining kamayishi, ko‘krak qafasida og'riq. Dozalash rejimi: 75 mg kuniga."
  },
  {
    question: "Dipiridamolning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: yurak-qon tomir kasalliklari, tromboz profilaktikasi. Qarshi ko'rsatmalar: qon ketishi, jigar yetishmovchiligi. FD: trombosit agregatsiyasini inhibe qiladi, vazodilatator sifatida ishlaydi. FK: 30-60 daqiqada maksimal ta'sirga erishadi. O'zaro ta'siri: antikoagulyantlar bilan sinergiya. Nojo’ya ta’siri: bosh og'rig'i, dizziness. Dozalash rejimi: 25-75 mg kuniga 2-3 marta."
  },
  {
    question: "Geparinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: tromboz profilaktikasi, yurak-qon tomir kasalliklari. Qarshi ko'rsatmalar: qon ketishi, og'ir buyrak kasalliklari. FD: antitrombin III bilan bog'lanib, trombin va Xa faktorni inhibe qiladi. FK: subkutan yoki venoz yuboriladi, tez ta'sir qiladi. O'zaro ta'siri: antikoagulyantlar, NSAIDlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: gemorragik kasalliklar, trombositopeniya. Dozalash rejimi: 5000-10000 IU kuniga bir necha marta."
  },
  {
    question: "Enoksiparinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: tromboz profilaktikasi, yurak-qon tomir kasalliklari. Qarshi ko'rsatmalar: qon ketishi, og'ir buyrak kasalliklari. FD: trombin va Xa faktorni inhibe qiladi. FK: subkutan yuboriladi, maksimal ta'sir 3-5 soatda boshlanadi. O'zaro ta'siri: antikoagulyantlar bilan sinergiya. Nojo’ya ta’siri: gemorragik kasalliklar, trombositopeniya. Dozalash rejimi: 1 mg/kg kuniga bir necha marta."
  },
  {
    question: "Varfarinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: tromboz va emboliya profilaktikasi. Qarshi ko'rsatmalar: qon ketishi, jigar kasalliklari. FD: vitamin K epoksid reduktazani inhibe qilib, protrombin sintezini pasaytiradi. FK: og'iz orqali qabul qilinadi, ta'sir 24 soat ichida boshlanadi. O'zaro ta'siri: antibiotiklar, antikoagulyantlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: gemorragik kasalliklar, jigar muammolari. Dozalash rejimi: 5 mg kuniga."
  },
  {
    question: "Neodikumarinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: tromboz va emboliya profilaktikasi. Qarshi ko'rsatmalar: qon ketishi, jigar kasalliklari. FD: vitamin K epoksid reduktazani inhibe qiladi, protrombin sintezini pasaytiradi. FK: og'iz orqali qabul qilinadi, 2-4 soatda ta'sir qiladi. O'zaro ta'siri: antibiotiklar, antikoagulyantlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: gemorragik kasalliklar. Dozalash rejimi: 2-4 mg kuniga."
  },
  {
    question: "Streptokinazning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: akut infarkt, tromboz. Qarshi ko'rsatmalar: qon ketishi, buyrak kasalliklari. FD: fibrinogenni fibringa aylantiradi, tromblarni eritadi. FK: intravenoz yuboriladi, tez ta'sir qiladi. O'zaro ta'siri: antikoagulyantlar bilan sinergiya. Nojo’ya ta’siri: gemorragik kasalliklar, infeksiyalar. Dozalash rejimi: 1.5 million IU intravenoz."
  },
  {
    question: "Alteplazaning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: tromboz, infarkt. Qarshi ko'rsatmalar: qon ketishi, og'ir buyrak kasalliklari. FD: fibrinaga bog'langan plasminogenni aktivlashtiradi. FK: intravenoz yuboriladi, tez ta'sir qiladi. O'zaro ta'siri: antikoagulyantlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: gemorragik kasalliklar, allergik reaksiyalar. Dozalash rejimi: 100 mg intravenoz."
  },
  {
    question: "Aminokaproik kislotaning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: qon ketishi, gemorragik holatlar. Qarshi ko'rsatmalar: tromboz, jigar kasalliklari. FD: plasminogenga bog'lanib, plasminni inhibe qiladi. FK: intravenoz yoki og'iz orqali qabul qilinadi, tez ta'sir qiladi. O'zaro ta'siri: antikoagulyantlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: gemorragik kasalliklar, bosh og'rig'i. Dozalash rejimi: 1-2 g kuniga."
  },
  {
    question: "Etamzilatning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: qon ketishining oldini olish, qon tomirlarining mustahkamlanishi. Qarshi ko'rsatmalar: tromboz, og'ir buyrak kasalliklari. FD: qon tomirlarining permeabilitesini kamaytiradi, trombosit agregatsiyasini inhibe qiladi. FK: og'iz orqali qabul qilinadi, tez so'riladi. O'zaro ta'siri: qon ivishiga qarshi dorilar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: allergik reaktsiyalar, bosh og'rig'i. Dozalash rejimi: 250 mg kuniga 2-3 marta."
  },
  {
    question: "Vikasolning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: qon ketishining oldini olish, protrombin vaqtini normallashtirish. Qarshi ko'rsatmalar: tromboz, gipervitaminoz K. FD: vitamin K ning faol shaklini ta'minlab, protrombin sintezini oshiradi. FK: og'iz orqali va inyeksiya orqali qabul qilinadi, 12-24 soat ichida ta'sir qiladi. O'zaro ta'siri: antikoagulyantlar bilan sinergiya. Nojo’ya ta’siri: gipervitaminoz, allergik reaktsiyalar. Dozalash rejimi: 1-5 mg kuniga."
  },
  {
    question: "Kaltsiy preparatlarining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: kaltsiy yetishmasligi, osteoporoz. Qarshi ko'rsatmalar: hiperkalsemiya, jigar va buyrak kasalliklari. FD: kaltsiy ionlarini organizmga ta'minlab, suyak va tishlarning kuchayishiga yordam beradi. FK: og'iz orqali qabul qilinadi, 2-4 soatda ta'sir ko'rsatadi. O'zaro ta'siri: tiazid diuretiklari bilan sinergiya. Nojo’ya ta’siri: hiperkalsemiya, oshqozon-ichak tizimi bezovtaligi. Dozalash rejimi: 500-1000 mg kuniga."
  },
  {
    question: "Protamin sulfatning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: heparin ta'sirini bloklash. Qarshi ko'rsatmalar: hech qanday jiddiy qarshi ko'rsatmalar mavjud emas. FD: heparin bilan bog'langan protaminni inhibe qilib, heparinning antikoagulyant ta'sirini bekor qiladi. FK: intravenoz yuboriladi, tez ta'sir qiladi. O'zaro ta'siri: heparin bilan sinergiya. Nojo’ya ta’siri: gipotoniya, allergik reaktsiyalar. Dozalash rejimi: 1-1.5 mg/kg intravenoz."
  },
  {
    question: "Kontrikalning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gemorragik holatlar, plazminogenga bog'liq kasalliklar. Qarshi ko'rsatmalar: tromboz, yuqori qon bosimi. FD: plazminogenni inhibe qilib, plasmin ta'sirini to'xtatadi. FK: intravenoz yoki og'iz orqali qabul qilinadi, tez ta'sir ko'rsatadi. O'zaro ta'siri: antikoagulyantlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: allergik reaktsiyalar, bosh og'rig'i. Dozalash rejimi: 1-5 g kuniga."
  },
  {
    question: "Gemostatik vositalarning samaradorligi va xavfsizligini baholash.",
    answer: "Gemostatik vositalar qon to'kilishini to'xtatish va qon ivish tizimini tiklash uchun ishlatiladi. Samaradorlikni baholash uchun dori vositalarining qon ivish vaqtini, protrombin va aPTT (aktivlashtirilgan parsial tromboplastin vaqti) ko'rsatkichlarini tekshirish zarur. Xavfsizlikni baholashda qon ivishining normal holatini saqlash, tromboz xavfini oshirmaslik muhimdir."
  },
  {
    question: "Gipertenziv dorilarning tasnifi.",
    answer: "Gipertenziv dorilarni bir nechta turga bo'lish mumkin: 1) Renin-angiotensin tizimi inhibitörlari (ACE inhibitörlar, ARB), 2) Diuretiklar (tiazid, loop, kaliy saqlovchi diuretiklar), 3) Kalsiy kanal blokatorlari, 4) β-blokatorlar, 5) Alfa-adrenergik blokatorlar, 6) Vazodilatatorlar."
  },
  {
    question: "Lizinoprilning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, yurak yetishmovchiligi. Qarshi ko'rsatmalar: homiladorlik, anuriya. FD: angiotenzin II ning hosil bo'lishini inhibe qilib, qon bosimini pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: diuretiklar va kaltsiy kanal blokatorlari bilan sinergiya. Nojo’ya ta’siri: bosh og'rig'i, vertigo, qandli diabet. Dozalash rejimi: 10-20 mg kuniga."
  },
  {
    question: "Enalaprilning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, yurak yetishmovchiligi. Qarshi ko'rsatmalar: homiladorlik, angioedema. FD: angiotenzin converting enzyme (ACE) ning inhibitori bo'lib, angiotenzin II darajasini kamaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: diuretiklar va kaltsiy kanal blokatorlari bilan sinergiya. Nojo’ya ta’siri: giperkaliemiya, bosh og'rig'i. Dozalash rejimi: 5-40 mg kuniga."
  },
  {
    question: "Minoksidilning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: og'ir gipertenziya. Qarshi ko'rsatmalar: yurak yetishmovchiligi, feoxromotsitoma. FD: arteriyal va venoz kengayishni kuchaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: diuretiklar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: gipotoniya, ortiqcha terlash. Dozalash rejimi: 5-40 mg kuniga."
  },
  {
    question: "Guanfatsinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya. Qarshi ko'rsatmalar: yurak yetishmovchiligi, buyrak kasalliklari. FD: miyada alfa-adrenergik retseptorlarini inhibe qilib, qon bosimini pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: diuretiklar bilan sinergiya. Nojo’ya ta’siri: bosh og'rig'i, uyqu buzilishi. Dozalash rejimi: 1-3 mg kuniga."
  },
  {
    question: "Losartanning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, yurak yetishmovchiligi. Qarshi ko'rsatmalar: homiladorlik, angioedema. FD: angiotenzin II retseptorlarini bloklaydi, qon bosimini pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: diuretiklar bilan sinergiya. Nojo’ya ta’siri: bosh og'rig'i, giperkaliemiya. Dozalash rejimi: 25-100 mg kuniga."
  },
  {
    question: "Nifidipinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, angina. Qarshi ko'rsatmalar: hipotoniya, yurak yetishmovchiligi. FD: kaltsiy kanal blokatori bo'lib, qon tomirlarini kengaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: digoksin bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, dizziness. Dozalash rejimi: 30-60 mg kuniga."
  },
  {
    question: "Amlodipinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, angina. Qarshi ko'rsatmalar: og'ir hipotoniya, yurak yetishmovchiligi. FD: kaltsiy kanal blokatori bo'lib, qon tomirlarini kengaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: simvastatin bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, yengil vertigo. Dozalash rejimi: 5-10 mg kuniga."
  },
  {
    question: "Diltiazemning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, angina. Qarshi ko'rsatmalar: bradikardiya, yurak blokadasi. FD: kaltsiy kanal blokatori bo'lib, qon tomirlarini kengaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: β-blokatorlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: yurak ritmi buzilishi, bosh og'rig'i. Dozalash rejimi: 120-240 mg kuniga."
  },
  {
    question: "Verapamilning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, angina. Qarshi ko'rsatmalar: bradikardiya, yurak blokadasi. FD: kaltsiy kanal blokatori bo'lib, qon tomirlarini kengaytiradi, yurak faoliyatini tartibga soladi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: β-blokatorlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, yurak ritmi buzilishi. Dozalash rejimi: 80-120 mg kuniga."
  },
  {
    question: "β-blokatorlarning tasnifi.",
    answer: "β-blokatorlar adrenergik retseptorlarga ta'sir qilib, adrenalin va noradrenalinning ta'sirini bloklaydi. Ular ikki turga bo'linadi: 1) Selektiv β1-blokatorlar (bisoprolol, metoprolol), 2) Nonselktiv β-blokatorlar (propranolol, nadolol)."
  },
  {
    question: "Bisoprololning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, yurak yetishmovchiligi, angina. Qarshi ko'rsatmalar: bradikardiya, yurak blokadasi. FD: β1-adrenergik retseptorlarini selektiv inhibe qilib, yurakni sekinlashtiradi va qon bosimini pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: digoksin bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: yurak ritmi buzilishi, bosh og'rig'i. Dozalash rejimi: 5-10 mg kuniga."
  },
  {
    question: "Metoprololning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, angina, yurak yetishmovchiligi, aritmiyalar. Qarshi ko'rsatmalar: bradikardiya, yurak blokadasi, yurak yetishmovchiligi. FD: β1-adrenergik retseptorlarini bloklaydi, yurak tezligini kamaytiradi va qon bosimini pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: kaltsiy kanal blokatorlari bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, uyqu buzilishi, yurak ritmi buzilishi. Dozalash rejimi: 50-100 mg kuniga."
  },
  {
    question: "Atenololning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, angina, yurak yetishmovchiligi, aritmiyalar. Qarshi ko'rsatmalar: bradikardiya, yurak blokadasi, yurak yetishmovchiligi. FD: β1-adrenergik retseptorlarini selektiv bloklaydi, yurak tezligini kamaytiradi va qon bosimini pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi, buyrak orqali chiqariladi. O'zaro ta'siri: digoksin bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, uyqu buzilishi, yurak ritmi buzilishi. Dozalash rejimi: 50-100 mg kuniga."
  },
  {
    question: "Propranololning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, angina, yurak ritmi buzilishi, migrenga qarshi profilaktika. Qarshi ko'rsatmalar: bradikardiya, yurak blokadasi, bronxial astma. FD: β1 va β2-adrenergik retseptorlarini bloklaydi, yurak tezligini kamaytiradi va qon bosimini pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: kaltsiy kanal blokatorlari bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, uyqu buzilishi, yurak ritmi buzilishi. Dozalash rejimi: 40-320 mg kuniga."
  },
  {
    question: "Doksazosinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipertenziya, benign prostata gipertrofiyasi. Qarshi ko'rsatmalar: gipotoniya, buyrak yetishmovchiligi. FD: alfa-1 adrenergik retseptorlarini bloklab, qon tomirlarini kengaytiradi va qon bosimini pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: diuretika va kaltsiy kanal blokatorlari bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, bosh aylanishi, gipotoniya. Dozalash rejimi: 1-8 mg kuniga."
  },
  {
    question: "Norepinefrinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: shok, qon bosimini ko'tarish. Qarshi ko'rsatmalar: hipertoniya, yuqori qon bosimi. FD: alfa va beta adrenergik retseptorlariga ta'sir qiladi, qon tomirlarini qisqartiradi va yurak tezligini oshiradi. FK: vena ichiga qo'llaniladi, tezda metabolizmga uchraydi. O'zaro ta'siri: anestezik dorilar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: yuqori qon bosimi, bosh og'rig'i, aritmiyalar. Dozalash rejimi: 0.01-0.5 mcg/kg/min intravenoz infuziya."
  },
  {
    question: "Mezatonning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: gipotenziya, shok holati. Qarshi ko'rsatmalar: yuqori qon bosimi, gipertiroidizm. FD: alfa-1 adrenergik retseptorlarini stimulirlaydi, qon tomirlarini qisqartiradi. FK: vena ichiga qo'llaniladi, tezda metabolizmga uchraydi. O'zaro ta'siri: antidepressantlar va anesteziklar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: yuqori qon bosimi, bosh og'rig'i, tachikardiya. Dozalash rejimi: 0.1-0.5 mg intravenoz infuziya."
  },
  {
    question: "Antigipertenziv dorilarning samaradorligi va xavfsizligini baholash.",
    answer: "Antigipertenziv dorilarni baholashda qon bosimini pasaytirish samaradorligi, nojo'ya ta'sirlarining kamayishi va uzoq muddatli xavfsizlik asosiy mezonlardir. Klinik sinovlar va epidemiologik ma'lumotlarga asoslangan holda samaradorligi va xavfsizligi aniqlanadi."
  },
  {
    question: "Lipoproteinlarning tasnifi.",
    answer: "Lipoproteinlar o'z ichiga oladi: 1) Xolesterin va triglitseridlar bilan bog'langan lipoproteinlar (LDL, HDL, VLDL); 2) Lipo-proteinning o'zgaruvchan turi: lipoproteinlar yuqori, o'rta yoki past zichlikda bo'lishi mumkin."
  },
  {
    question: "Lovastatinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: giperlipidemiya, ateroskleroz. Qarshi ko'rsatmalar: jigar kasalliklari, homiladorlik. FD: HMG-CoA reduktaza inhibitori, xolesterin ishlab chiqarishni pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: gemfibrozil bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: mushaklarda og'riq, jigar fermentlarining oshishi. Dozalash rejimi: 20-80 mg kuniga."
  },
  {
    question: "Simvastatinning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: giperlipidemiya, ateroskleroz. Qarshi ko'rsatmalar: jigar kasalliklari, homiladorlik. FD: HMG-CoA reduktaza inhibitori, xolesterin ishlab chiqarishni pasaytiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: gemfibrozil, ezetimib bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: mushaklarda og'riq, jigar fermentlarining oshishi. Dozalash rejimi: 10-40 mg kuniga."
  },
  {
    question: "Nitrosorbitolning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: angina, yurak ishemik kasalliklari, postinfarkt holatlar. Qarshi ko'rsatmalar: qon bosimi pastligi, bosh miya jarrohligi. FD: nitrat guruhiga mansub, nitrat oksid hosil qilib, qon tomirlarini kengaytiradi. FK: og'iz orqali qabul qilinadi, tezda so'riladi va jigar orqali metabolizlanadi. O'zaro ta'siri: PDE5 inhibitörleri (viagra) bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, yuz qizarishi, gipotoniya. Dozalash rejimi: 10-40 mg kuniga."
  },
  {
    question: "Antiaritmik dorilarning tasnifi.",
    answer: "Antiaritmik dorilarni 4 sinfga bo'lish mumkin: 1) Natriy kanali blokatorlari (lidokain, novokainamid); 2) Beta-adrenoreseptor blokatorlari (propranolol); 3) Kaltsiy kanali blokatorlari (verapamil, diltiazem); 4) Potensialga ta'sir qiluvchi dorilar (amiodaron, sotalol)."
  },
  {
    question: "Lidokainning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: yurak aritmiyalari, lokal anestetik sifatida ishlatiladi. Qarshi ko'rsatmalar: bradikardiya, yurak blokadasi. FD: natriy kanali blokirovkasini amalga oshiradi, yurak ritmini normallashtiradi. FK: vena ichiga yoki intramuskulyar qo'llaniladi, jigar orqali metabolizlanadi. O'zaro ta'siri: beta-blokatorlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh aylanishi, yengil uyquchanlik. Dozalash rejimi: 1-3 mg/kg intravenoz."
  },
  {
    question: "Novokainamidning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: yurak aritmiyalari. Qarshi ko'rsatmalar: yurak blokadasi, bronxial astma. FD: natriy kanali blokirovkasini amalga oshiradi, yurak ritmini normallashtiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: digoksin bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh aylanishi, qo'l va oyoqlarda uyushish. Dozalash rejimi: 200-400 mg kuniga."
  },
  {
    question: "Amiodaronning KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: yurak aritmiyalari, atrial fibrillyatsiya. Qarshi ko'rsatmalar: pulmonar kasalliklar, buyrak kasalliklari. FD: kaltsiy va natriy kanallari blokirovkasini amalga oshiradi, yurak ritmini normallashtiradi. FK: og'iz orqali qabul qilinadi, jigar orqali metabolizlanadi. O'zaro ta'siri: digoksin bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: o'pka kasalliklari, jigar funksiyasining buzilishi. Dozalash rejimi: 100-200 mg kuniga."
  },
  {
    question: "Suvda va yog'da eriydigan vitaminlarning tasnifi.",
    answer: "Vitaminlar suvda va yog'da eriydigan turlarga bo'linadi: 1) Suvda eriydigan vitaminlar (B guruhidagi vitaminlar, C vitamini); 2) Yog'da eriydigan vitaminlar (A vitamini, D vitamini, E vitamini, K vitamini)."
  },
  {
    question: "E vitaminining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: antioksidant sifatida ishlatiladi, ateroskleroz, yurak kasalliklarini oldini olish. Qarshi ko'rsatmalar: yuqori dozalar bilan uzoq muddat foydalanish. FD: kuchli antioksidant, hujayra membranalarini himoya qiladi. FK: yog'da eriydi, jigar orqali metabolizlanadi. O'zaro ta'siri: qon ivishiga qarshi dorilar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, oshqozon bezovtaligi. Dozalash rejimi: 100-400 IU kuniga."
  },
  {
    question: "D vitaminining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: osteoporoz, D vitamini yetishmovchiligi. Qarshi ko'rsatmalar: hiperkalsemiya, jigar kasalliklari. FD: kaltsiy va fosforning organizmga so'rilishini oshiradi. FK: yog'da eriydi, jigar va buyraklarda metabolizlanadi. O'zaro ta'siri: diuretiklar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: qand miqdorining oshishi, mushaklarda og'riq. Dozalash rejimi: 400-800 IU kuniga."
  },
  {
    question: "C vitaminining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: vitamin C yetishmovchiligi, immun tizimini qo'llab-quvvatlash. Qarshi ko'rsatmalar: yuqori dozalar bilan uzoq muddat foydalanish. FD: antioksidant, immun tizimining faoliyatini kuchaytiradi. FK: suvda eriydi, tezda so'riladi va chiqariladi. O'zaro ta'siri: oksalatlar bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: oshqozon bezovtaligi, bosh og'rig'i. Dozalash rejimi: 500-1000 mg kuniga."
  },
  {
    question: "B6 vitaminining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: nerv tizimi kasalliklari, vitamin B6 yetishmovchiligi. Qarshi ko'rsatmalar: yuqori dozalar bilan uzoq muddat foydalanish. FD: nerv tizimining normal ishlashini ta'minlaydi, hujayra metabolizmasiga ta'sir qiladi. FK: suvda eriydi, tezda so'riladi va chiqariladi. O'zaro ta'siri: levodopa bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: bosh og'rig'i, teri toshmalari. Dozalash rejimi: 1.5-2 mg kuniga."
  },
  {
    question: "B12 vitaminining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: B12 vitaminining yetishmovchiligi, anemiya, nerv tizimi kasalliklari. Qarshi ko'rsatmalar: homiladorlik, yuqori dozalar bilan uzoq muddat foydalanish. FD: eritropoez jarayonini rag'batlantiradi, nerv tizimining faoliyatini qo'llab-quvvatlaydi. FK: suvda eriydi, jigarda saqlanadi. O'zaro ta'siri: metforminning samaradorligini pasaytirishi mumkin. Nojo’ya ta’siri: bosh og'rig'i, teri reaksiyalari. Dozalash rejimi: 1000 mcg kuniga."
  },
  {
    question: "Folat kislotasining KF (ko'rsatmalar va qarshi ko’rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo’ya ta’siri va dozalash rejimi).",
    answer: "Ko'rsatmalar: folat kislotasi yetishmovchiligi, anemiya, homiladorlikda folat kislotasi qo'shimchasi. Qarshi ko'rsatmalar: yuqori dozalar bilan uzoq muddat foydalanish, vitamin B12 yetishmovchiligi bo'lmagan anemiya. FD: DNK va RNK sintezini qo'llab-quvvatlaydi, qizil qon hujayralarining hosil bo'lishini rag'batlantiradi. FK: suvda eriydi, jigar va buyraklar orqali metabolizlanadi. O'zaro ta'siri: metotreksat, sulfasalazin bilan ehtiyotkorlik bilan. Nojo’ya ta’siri: oshqozon bezovtaligi, allergik reaktsiyalar. Dozalash rejimi: 400 mcg-1 mg kuniga."
  },
  {
    question: "Propranolol uchun retsept yozing",
    answer: "Rp.: Tab. Propranololi (Propranolol) 40 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Cvitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin C (Acidum ascorbicum) 5%-10 ml N. 1\nD.S. 1-2 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Klofibrat uchun retsept yozing",
    answer: "Rp.: Tab. Clofibrati (Clofibratum) 500 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Novokainamid uchun retsept yozing",
    answer: "Rp.: Sol. Novocainamidi (Procainamidum) 10% - 10 ml N. 1\nD.S. 1 ml eritmani 100 ml 0.9% NaCl eritmasiga qo'shib v/i ga infuziya sifatida yuborilsin."
  },
  {
    question: "Nitroglitserin uchun retsept yozing",
    answer: "Rp.: Tab. Nitroglycerini (Nitroglycerinum) 0.5 mg N. 30\nD.S. 1 tabletkani kerak bo'lganda og'iz orqali qabul qilsin, angina xurujlari paytida."
  },
  {
    question: "Klopidogrel uchun retsept yozing",
    answer: "Rp.: Tab. Clopidogreli (Clopidogrel) 75 mg N. 10\nD.S. Har kuni 1 tabletkadan ichilsin."
  },
  {
    question: "Doksazosin uchun retsept yozing",
    answer: "Rp.: Tab. Doxazosini (Doxazosin) 4 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Lidokain uchun retsept yozing",
    answer: "Rp.: Sol. Lidocaini (Lidocainum) 2%-10 ml N. 1\nD.S. Lokal anesteziya uchun 5-10 ml miqdorida qo’llanilsin."
  },
  {
    question: "Enalapril uchun retsept yozing",
    answer: "Rp.: Tab. Enalaprili (Enalapril) 5 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Trinitrolong uchun retsept yozing",
    answer: "Rp.: Tab. Trinitrolongi (Isosorbide Mononitrate) 30 mg N. 30\nD.S. 1 tabletkani kuniga bir marta ertalab og'iz orqali qabul qilsin."
  },
  {
    question: "Nitrosorbitol uchun retsept yozing",
    answer: "Rp.: Tab. Nitrosorbitoli (Isosorbide Dinitrate) 10 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Simvastatin uchun retsept yozing",
    answer: "Rp.: Tab. Simvastatini (Simvastatin) 20 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Erinit uchun retsept yozing",
    answer: "Rp.: Tab. Eriniti (Isosorbide dinitrate) 5 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "D vitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin D (Cholecalciferolum) 200,000 IU/2 ml N. 1\nD.S. 1 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Aminokapron kislotasi uchun retsept yozing",
    answer: "Rp.: Sol. Acidum aminocapronicum (Aminocaproic acid) 5% - 100 ml N. 1\nD.S. 100 ml eritmani venaga tomchilab yuborilsin."
  },
  {
    question: "Norepinefrin uchun retsept yozing",
    answer: "Rp.: Sol. Norepinefrini (Norepinephrine) 1 mg/ml N. 10 ml\nD.S. 0.1-0.5 mcg/kg/min intravenoz infuziya shaklida yuborilsin, zaruratga qarab."
  },
  {
    question: "Bisoprolol uchun retsept yozing",
    answer: "Rp.: Tab. Bisoprololi (Bisoprolol) 5 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "B12 vitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin B12 (Cobalamini) 500 mcg/ml N. 1\nD.S. 1 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Lizinopril uchun retsept yozing",
    answer: "Rp.: Tab. Lisinoprili (Lisinopril) 10 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Lovastatin uchun retsept yozing",
    answer: "Rp.: Tab. Lovastatini (Lovastatin) 20 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Foliy kislotasi uchun retsept yozing",
    answer: "Rp.: Sol. Acidi folici (Acidum folicum) 5 mg/ml N. 1\nD.S. 1-2 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Metoprolol uchun retsept yozing",
    answer: "Rp.: Tab. Metoprololi (Metoprolol) 50 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "B6 vitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin B6 (Pyridoxini) 5%-10 ml N. 1\nD.S. 1-2 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Amiodaron uchun retsept yozing",
    answer: "Rp.: Sol. Amiodaroni (Amiodaronum) 50 mg/ml - 3 ml N. 1\nD.S. 150 mg (3 ml) infuziya sifatida 100 ml 0.9% NaCl eritmasiga qo’shib v/i ga yuborilsin."
  },
  {
    question: "Protamin sulfat uchun retsept yozing",
    answer: "Rp.: Injekt. Protamin sulfat (Protamine sulfate) 1%-1ml N. 5\nD.S. 1-2 ml intravenoz yuborilsin, zaruratga qarab, heparin ta’sirini bekor qilish uchun."
  },
  {
    question: "Xolestipol uchun retsept yozing",
    answer: "Rp.: Tab. Xolestipoli (Cholestipolum) 500 mg N. 30\nD.S. 1 tabletkani kuniga 1-2 marta og'iz orqali qabul qilsin."
  },
  {
    question: "Nikotin kislotasi uchun retsept yozing",
    answer: "Rp.: Sol. Acidi nicotinici (Acidum nicotinicum) 1% - 1 ml N. 10\nD.S. 1 ml eritmani 100 ml 0.9% NaCl eritmasiga qo’shib v/i ga infuziya shaklida yuborilsin."
  },
  {
    question: "E vitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin E (Tocopherolum) 5%-10 ml N. 1\nD.S. 1-2 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Amilorid uchun retsept yozing",
    answer: "Rp.: Tab. Amiloridi (Amiloride) 5 mg №10\nD.S. Ertalabda 1 tabletkadan ichilsin."
  },
    {
    question: "Enoksiparin uchun retsept yozing",
    answer: "Rp.: Sol. Enoxiparini (Enoxaparinum) 40 mg/0.4 ml N. 1\nD.S. 1 in'ektsiya subkutans yuborilsin kuniga bir marta."
  },
  {
    question: "Geparin uchun retsept yozing",
    answer: "Rp.: Sol. Heparini (Heparinum) 5000 IU/ml - 5 ml N. 1\nD.S. 5000 IU dozada subkutans yoki intravenoz yuborilsin zaruratga qarab."
  },
  {
    question: "Dipiridamol uchun retsept yozing",
    answer: "Rp.: Tab. Dipiridamoli (Dipyridamolum) 25 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Korglikon uchun retsept yozing",
    answer: "Rp.: Sol. Korglikoni (Digoxin) 0.25 mg/ml - 1 ml N. 10\nD.S. 0.5-1 ml intravenoz yuborilsin zaruratga qarab."
  },
  {
    question: "Neodikumarin uchun retsept yozing",
    answer: "Rp.: Tab. Neodicumari (Neodikumarinum) 1 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Alteplasa uchun retsept yozing",
    answer: "Rp.: Sol. Alteplasi (Alteplase) 50 mg/50 ml N. 1\nD.S. 15 mg iv bolus sifatida yuborilsin, qolgan miqdor esa infuziya sifatida."
  },
  {
    question: "Asetazolamid uchun retsept yozing",
    answer: "Rp.: Tab. Acetazolamidi (Acetazolamidum) 250 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Atsetilsalitsil kislotasi uchun retsept yozing",
    answer: "Rp.: Tab. Acetylsalicylic acid (Acidum acetylsalicylicum) 500 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Gidroxlorotiazid uchun retsept yozing",
    answer: "Rp.: Tab. Hydrochlorothiazidi (Hydrochlorothiazidum) 25 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Kontrikal uchun retsept yozing",
    answer: "Rp.: Sol. Contrycal (Aprotininum) 500,000 IU/5 ml N. 1\nD.S. 1 in'ektsiya intravenoz yuborilsin zaruratga qarab."
  },
  {
    question: "Streptokinaza uchun retsept yozing",
    answer: "Rp.: Sol. Streptokinasi (Streptokinase) 1500 IU/ml N. 1\nD.S. 1,500,000 IU infuziya sifatida intravenoz yuborilsin."
  },
  {
    question: "Strofantin uchun retsept yozing",
    answer: "Rp.: Sol. Strofantini (Strophantinum) 0.25 mg/ml - 1 ml N. 10\nD.S. 1-2 ml intravenoz yuborilsin zaruratga qarab."
  },
  {
    question: "Digoksin uchun retsept yozing",
    answer: "Rp.: Tab. Digoksini (Digoxin) 0.25 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Etakrin kislotasi uchun retsept yozing",
    answer: "Rp.: Tab. Etacrinic acid (Acidum etacrinicum) 25 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Digitoksin uchun retsept yozing",
    answer: "Rp.: Tab. Digitoksini (Digitoxin) 0.05 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Mezatonga retsept yozing",
    answer: "Rp.: Sol. Mezatoni (Metazone) 1%-10 ml N. 1\nD.S. 1 ml eritmani 100 ml 0.9% NaCl eritmasiga qo’shib intravenoz infuziya sifatida yuborilsin."
  },
  {
    question: "Etamzilat uchun retsept yozing",
    answer: "Rp.: Tab. Etamsylati (Etamsylatum) 250 mg N. 20\nD.S. 1 tabletkani kuniga 2-3 marta og'iz orqali qabul qilsin."
  },
  {
    question: "Veroshpiron uchun retsept yozing",
    answer: "Rp.: Tab. Spironolactoni (Spironolactonum) 25 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Vikasol uchun retsept yozing",
    answer: "Rp.: Sol. Vikasoli (Vikasolum) 1 mg/ml - 10 ml N. 1\nD.S. 1-2 ml intramuscular yuborilsin."
  },
  {
    question: "Furosemid uchun retsept yozing",
    answer: "Rp.: Tab. Furosemidi (Furosemidum) 40 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Indapamid uchun retsept yozing",
    answer: "Rp.: Tab. Indapamidi (Indapamidum) 2.5 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Triamteren uchun retsept yozing",
    answer: "Rp.: Tab. Triamtereni (Triamteren) 75 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Varfarin uchun retsept yozing",
    answer: "Rp.: Tab. Warfarini (Warfarinum) 5 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  }
];
