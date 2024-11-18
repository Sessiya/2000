const tickets = [
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
  }
];
