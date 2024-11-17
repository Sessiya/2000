const tickets = [
  { 
    question: "Ampitsillinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Ampitsillin - penitsillin guruhiga mansub antibiotik bo'lib, bakterial infeksiyalarni davolashda qo'llaniladi. FD: Ampitsillin bakteriyalarning hujayra devorini shakllantiruvchi peptidoglikan sintezini bloklaydi, natijada bakteriyalar yo‘q qilinadi (bakterisid ta’sir). FK: Minimal darajada jigar tomonidan metabolizmga uchraydi, asosan buyrak orqali o‘zgarmagan holda chiqariladi. Yarim chiqarilish davri ~1-1,5 soat. Koʻrsatmalar: respirator tizim, siydik yoʻllari, teri va boshqa bakterial infeksiyalar. Qarshi koʻrsatmalar: penitsillinga allergiya, jigar va buyrak yetishmovchiligi. Oʻzaro taʻsir: Probenetsid (podagrada uric kislotani siydik orqali chiqarilishini taʼminlovchi dori): Penitsillinning chiqarilishini sekinlashtiradi, qonda darajasini oshiradi. Metotreksat (onkologiya dorisi): Zaharlanish xavfini oshiradi, chunki uning chiqarilishi susayadi. Nojoʻya taʻsirlar: allergik reaktsiyalar, oshqozon-ichak buzilishlari. Dozalash: 500 mg - 1 g, holatga qarab." 
  },
  { 
    question: "Furatsilinning KF (koʻrsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Furatsilin - antibakterial va antiseptik dori. FD: bakteriyalarning DNK sintezini buzadi. FK: shilliq qavatlar va yaralar yuzasida to‘g‘ridan-to‘g‘ri qo‘llaniladi. Ko'rsatmalar: yaralar, infeksiyalar. Qarshi ko'rsatmalar: yuqori sezuvchanlik. Nojo'ya ta'sirlar: qichishish, allergik reaktsiyalar. O‘zaro ta’sir kam uchraydi, chunki asosan mahalliy qo‘llaniladi. Dozalash: 1:5000 nisbatta eritma. 1gr furatsilinga 5 litr suv. 1 tabletka (20mg) maydalab + 1 litr iliq suv." 
  },
  { 
    question: "Delagil (xlorokin) KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Delagil (xlorokin) - malariyaga qarshi va yallig'lanishga qarshi dori. FD: hujayra ichidagi parazitlarni yo'q qiladi. FK: jigarda metabolizmga uchraydi, siydik orqali chiqariladi. Yarim chiqarilish davri: 30-60 soat. Ko'rsatmalar: malariya, reumatoid artrit. Qarshi ko'rsatmalar: jigar, buyrak kasalliklari, epilepsiya. Nojo'ya ta'sirlar: oshqozon-ichak muammolari, bosh og‘rig‘i, allergik reaktsiyalar. Dozalash: kuniga 1-2 tabletka. O'zaro ta'sirlar: Ampitsillin: Xlorokin, ampisillinning qondagi konsentratsiyasini kamaytirishi mumkin. Shuning uchun, ushbu dorilarni bir vaqtda qabul qilishdan qochish kerak yoki ularni kamida 2 soatlik farq bilan qabul qilish tavsiya etiladi. Metotreksat: Xlorokin metotreksatning chiqarilishini sekinlashtirishi mumkin, bu esa uning toksik ta'sirlarining kuchayishiga olib kelishi mumkin. Shuning uchun, bu dorilarni birga ishlatishda ehtiyotkorlik zarur."
  },
  {
    question: "Askorbin kislotaning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Askorbin kislota (Vitamin C) - antioksidant sifatida ishlatiladi. FD: immunitetni qo'llab-quvvatlaydi, temirni singdirishda yordam beradi. FK: suvda eriydi, siydik orqali chiqariladi. Yarim chiqarilish davri: 30-50 daqiqa. Ko'rsatmalar: vitamin C yetishmovchiligi, immunitetni kuchaytirish. Qarshi ko'rsatmalar: yuqori sezuvchanlik. Nojo'ya ta'sirlar: oshqozon bezovtaligi, yuqori dozada buyrak muammolari. Dozalash: kuniga 60-90 mg. O'zaro ta'sirlar: Temir preparatlari bilan birga qabul qilinganda, askorbin kislotasi temirni yaxshiroq singdirishga yordam beradi. Biroq, yuqori dozadagi askorbin kislota buyrakda to'planib, uning funktsiyasini buzishi mumkin. Boshqa dorilar bilan o'zaro ta'siri kam uchraydi."
  },
  {
    question: "Pirinzepinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Pirinzepin - gastrit va oshqozon yarasi uchun ishlatiladi. FD: parasimpatik nerv impulslarini bloklaydi, natijada oshqozon kislotasining ishlab chiqarilishi kamayadi. FK: og'iz orqali qabul qilinadi, jigarda metabolizmga uchraydi, buyrak orqali chiqariladi. Yarim chiqarilish davri odatda 2-4 soat. Ko'rsatmalar: gastrit, oshqozon-ichak kasalliklari, oshqozon yarasi. Qarshi ko'rsatmalar: jigar va buyrak kasalliklari, yuqori sezuvchanlik. Nojo'ya ta'sirlar: oshqozon buzilishlari, qon bosimining pasayishi, ko'krak qafasida noqulaylik. Dozalash: kuniga 1-2 tabletka, holatga qarab. O'zaro ta'sirlar: Antixolinergik dorilar bilan birga qo'llanilganda, pirinzepinning ta'siri kuchayishi mumkin. Antigipertensiv dorilar bilan qo'llanilganda qon bosimining keskin pasayishi ehtimoli bor."
  },
  { 
    question: "Doksatsiklin uchun retsept yozing", 
    answer: "Doksatsiklin - tetratsiklinlar guruhiga mansub antibiotik bo'lib, asosan bakterial infeksiyalarni davolashda ishlatiladi. U o'simliklarning, hayvonlarning va insonlarning mikroorganizmlariga qarshi samarali. Doksatsiklinning ko'rsatmalari: infeksiyalar, masalan, pnevmoniya, malarial, tüberkuloz, gonoreya, chlamidiyalar va boshqa bakterial kasalliklar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar kasalliklari, homiladorlik va emizish. Nojo'ya ta'siri: oshqozon-ichak tizimi buzilishlari, bosh og'rig'i, teri reaktsiyalari. Dozalash rejimi: odatda 100 mg boshlang'ich dozada, keyin kundalik 50-100 mg bo'lib, davolash davomida bemorning holatiga qarab sozlanadi. Rp.: Tab. Doxycyclini (Doxycyclinum) 0.1 N. 30 D.S. 1 tabletka kuniga 1 marta ovqatdan keyin"
  },

  { 
    question: "Siprofloksatsin uchun retsept yozing", 
    answer: "Siprofloksatsin - floroxinolonlar guruhiga mansub antibiotik bo'lib, bakterial infeksiyalarni davolashda ishlatiladi. U asosan ko'krak, siydik yo'llari va oshqozon-ichak traktining infeksiyalarida samarali. Ko'rsatmalar: siydik yo'llari infektsiyalari, respirator tizim infektsiyalari, teri va yumshoq to'qimalar infektsiyalari. Qarshi ko'rsatmalar: allergik reaksiyalar, epilepsiya, jigar va buyrak yetishmovchiligi. Nojo'ya ta'siri: oshqozon buzilishlari, bosh og'rig'i, teri reaksiyalari, allergiya. Dozasi: odatda 250-500 mg har 12 soatda, infeksiyaning turi va jiddiyligiga qarab. Rp.: Tab. Ciprofloxacini (Ciprofloxacin) 0.5 N. 10 D.S. 1 tabletka har 12 soatda"
  },

  { 
    question: "Askorbin kislota uchun retsept yozing", 
    answer: "Askorbin kislota (Vitamin C) - organizmda bir qancha muhim funksiyalarni bajaruvchi suvda eriydigan vitamin. U immun tizimini qo'llab-quvvatlash, temirni singdirishda yordam berish va oksidlanish jarayonlarida antioksidant sifatida ishlaydi. Ko'rsatmalar: skorbutsiya, vitamin C yetishmovchiligi, immun tizimining zaiflashuvi, jarohatlar va kuyishlarni tiklashda yordam berish. Qarshi ko'rsatmalar: Askorbin kislota faqat yuqori dozada yoki allergiya bo'lsa zararlidir. Dozasi odatda kuniga 60-90 mg atrofida, lekin individual ehtiyojlarga qarab oshirilishi mumkin. Nojo'ya ta'siri yuqori dozada oshqozon bezovtaligiga, qorin og'rig'iga va siydik kislotasi darajasining ortishiga olib kelishi mumkin. Rp.: Tab. Acidi ascorbinici (Acidum ascorbinicum) 0.5 N. 20 D.S. 1 tabletka kuniga 1 marta"
  },

  { 
    question: "Polimiksin uchun retsept yozing", 
    answer: "Polimiksin - antibakterial dorilar guruhiga kiradi, asosan gram-manfiy bakteriyalarni o'ldirishda qo'llaniladi. U ko'pincha og'ir infeksiyalarni davolashda, ayniqsa shifoxona sharoitida qo'llanadi. Ko'rsatmalar: respirator tizim infektsiyalari, siydik yo'llari infektsiyalari, bakterial meningit, boshqa og'ir infektsiyalar. Qarshi ko'rsatmalar: polimiksin guruhiga sezuvchanlik, buyrak va jigar yetishmovchiligi. Nojo'ya ta'siri: asosan buyrak faoliyati buzilishlari va nevrologik reaktsiyalar, ko'pincha ko'rish qobiliyati yoki eshitishdagi o'zgarishlar. Dozasi infeksiyaning jiddiyligiga qarab belgilangan bo'lib, odatda infuzion yoki intramuskulyar yo'l bilan beriladi. Rp.: Pulv. Polymyxini (Polymyxin) 50000 TB N. 5 D.S. 1 ml + 0.9% li 5ml NaCl miqdorini muskul orasiga"
  },

  { 
    question: "Omeprazol uchun retsept yozing", 
    answer: "Omeprazol - proton pompasi ingibitori (PPI) bo'lib, oshqozon kislotasining ishlab chiqarilishini kamaytiradi. U ko'pincha oshqozon yarasi, refluks va gastrit kabi holatlarni davolashda ishlatiladi. Ko'rsatmalar: oshqozon-ichak tizimining kislota hosil qilishining oshishi, gastrit, ezofagit, duodenal yaralar. Qarshi ko'rsatmalar: homiladorlikning dastlabki davrlari, oshqozon infeksiyalariga qarshi sezuvchanlik. Nojo'ya ta'siri: bosh og'rig'i, diareya, qorin og'rig'i, ko'pincha uzoq muddatli qo'llanilishida osteoporoz yoki magnesium yetishmovchiligi. Dozasi: odatda 20-40 mg bir martalik dozada, oshqozon kislota ishlab chiqarilishiga qarab kuniga bir marta. Rp.: Caps. Omeprazoli (Omeprazole) 0.02 N. 10 D.S. 1 tabletka kuniga 1 marta"
  },

  { 
    question: "Metronidazol uchun retsept yozing", 
    answer: "Metronidazol - antibakterial va antiparazitar dori bo'lib, ko'plab bakterial infektsiyalarni davolashda samarali. U ko'proq teri, oshqozon-ichak va jinsiy yo'llar infektsiyalarini davolashda qo'llaniladi. Ko'rsatmalar: amebiaz, giardiasis, trixomoniaz, jigar abscessi, bakterioma. Qarshi ko'rsatmalar: metronidazolga allergiya, buyrak va jigar yetishmovchiligi. Nojo'ya ta'siri: asosan oshqozon-ichak tizimi bilan bog'liq (nausea, qorin og'rig'i), asab tizimi reaktsiyalari (bosh aylanishi, gallyutsinatsiya). Dozasi: infeksiyaning turi va jiddiyligiga qarab o'zgaradi, lekin odatda 250-500 mg har 8 soatda. Rp.: Tab. Metronidazoli (Metronidazole) 0.25 N. 20 D.S. 1 tabletka har 8 soatda"
  },

  { 
    question: "Ibuprofen uchun retsept yozing", 
    answer: "Ibuprofen - nonsteroid yallig'lanishga qarshi dori (NSAID) bo'lib, og'riqni kamaytirish va yallig'lanishni bartaraf etishda ishlatiladi. Ko'plab turdagi og'riqlar, masalan, bosh og'rig'i, bo'g'im og'rig'i, og'ir shamollashlar va jarohatlar uchun ishlatiladi. Ko'rsatmalar: yallig'lanish, og'riqni kamaytirish, temperaturani tushirish. Qarshi ko'rsatmalar: oshqozon yarasi, buyrak yoki jigar kasalliklari, yurak kasalliklari. Nojo'ya ta'siri: oshqozon buzilishlari, bosh og'rig'i, allergiya. Dozasi: odatda 200-400 mg har 4-6 soatda, maksimal dozasi kuniga 1200 mg. Rp.: Tab. Ibuprofeni (Ibuprofen) 0.2 N. 10 D.S. 1 tabletka har 4-6 soatda"
  },

    { 
    question: "Retinol asetat uchun retsept yozing", 
    answer: "Retinol asetat - vitamin A ning sintetik shakli bo'lib, asosan teri va ko'rish tizimiga ijobiy ta'sir ko'rsatadi. Ko'rsatmalar: teri kasalliklari, akne, psoriasis, teri yallig'lanishlari va ko'rishdagi o'zgarishlar. Qarshi ko'rsatmalar: teri yuqori sezuvchanligi, homiladorlik va emizish davri, yuqori vitamin A miqdori. Nojo'ya ta'siri: asosan teri reaksiyalari (qichishish, qizarish), bosh og'rig'i va boshqalar. Dozasi: odatda 1-2 mg kuniga, lekin individual ehtiyojlarga qarab oshirilishi mumkin. Rp.: Tab. Retinoli acetatis (Retinoli acetas) 5000 TB N. 20 D.S. 1 tabletka kuniga 1 marta"
  },
  {
    question: "Seftriaksonning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Seftriakson - beta-laktam antibiotigi, gram-manfiy bakteriyalarni davolashda ishlatiladi. FD: bakterial hujayra devorini buzadi, mikroorganizmlarni o'ldiradi. FK: buyrak orqali chiqariladi. Ko'rsatmalar: infeksiyalar (pnevmoniya, meninjit, yaralar). Qarshi ko'rsatmalar: allergiya, homiladorlik, yangi tug'ilgan chaqaloqlar. O'zaro ta'sirlar: aminoglikozidlar bilan nephrotoksiklik riskini oshirishi mumkin. Nojo'ya ta'sirlar: diareya, qorin og'rig'i, allergik reaktsiyalar. Dozasi: 1-2 g, kuniga bir marta yoki har 12 soatda."
  },
  { 
    question: "Siprofloksatsinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Siprofloksatsin - florokinolon antibiotigi. FD: DNK gyrase enzimlarini inhibe qilib, bakterial DNK sintezini to'xtatadi. FK: buyrak orqali chiqariladi. Ko'rsatmalar: respirator, siydik yo'llari infeksiyalari, gonoreya. Qarshi ko'rsatmalar: buyrak yetishmovchiligi, allergiya. Nojo'ya ta'sirlar: oshqozon-ichak tizimi buzilishi, bosh og'rig'i, allergiya. Dozasi: 250-500 mg, har 12 soatda." 
  },
  { 
    question: "Ambroksolning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Ambroksol - mukolitik dori. FD: bronxial sekresiyalarni kamaytirish va yallig'lanishga qarshi ta'sir qiladi. FK: jigar orqali metabolizmga uchraydi. Ko'rsatmalar: bronxial infeksiyalar, astma. Qarshi ko'rsatmalar: birinchi trimestrda homiladorlik, allergiya. Nojo'ya ta'sirlar: oshqozon-ichak tizimi buzilishlari, teri reaktsiyalari. Dozasi: 30 mg, kuniga ikki marta." 
  },
  { 
    question: "Veroshpironning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Veroshpiron - diuretik (potensialni saqlovchi). FD: aldosteron antagonisti sifatida suyuqlik va elektrolit balansini tartibga soladi. FK: buyrak orqali chiqariladi. Ko'rsatmalar: giperkaliemiya, yurak etishmovchiligi. Qarshi ko'rsatmalar: buyrak yoki jigar yetishmovchiligi. Nojo'ya ta'sirlar: giperkaliemiya, bosh aylanishi, qorin og'rig'i. Dozasi: 25-100 mg, kuniga bir marta." 
  },
  { 
    question: "Polimiksinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Polimiksin - antibakterial dori. FD: bakteriyalarning hujayra devorini buzib, ularni o'ldiradi. FK: buyrak orqali chiqariladi. Ko'rsatmalar: respirator infektsiyalar, meningit. Qarshi ko'rsatmalar: sezuvchanlik, buyrak va jigar kasalliklari. Nojo'ya ta'sirlar: buyrak faoliyati buzilishi, asab tizimi reaktsiyalari. Dozasi: odatda 1-2 g, intravenoz ravishda har 12 soatda." 
  },
  { 
    question: "Ergokalsiferolning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Ergokalsiferol (Vitamin D2) - suyaklar va kaltsiy metabolizmasi uchun zarur vitamin. FD: kaltsiyning singishini oshiradi, suyaklarni mustahkamlaydi. FK: jigarda metabolizmga uchraydi. Ko'rsatmalar: vitamin D yetishmovchiligi, osteoporoz. Qarshi ko'rsatmalar: yuqori dozada vitamin D, hiperkalsemiya. Nojo'ya ta'sirlar: qorin og'rig'i, bosh og'rig'i. Dozasi: 400-800 IU, kuniga bir marta." 
  },
  { 
    question: "Doksatsiklinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Doksatsiklin - tetratsiklin antibiotigi. FD: bakterial proteingina sintezini inhibe qiladi. FK: jigar orqali metabolizmga uchraydi, siydik orqali chiqariladi. Ko'rsatmalar: pnevmoniya, tüberkuloz, chlamidiyalar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar kasalliklari, homiladorlik. Nojo'ya ta'sirlar: oshqozon-ichak tizimi buzilishlari, bosh og'rig'i. Dozasi: 100 mg, har 12 soatda." 
  },
  { 
    question: "Antatsid derilarning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "Antatsidlar - oshqozon kislotasini neytrallashtiruvchi dori. FD: oshqozon kislotasining pH darajasini oshiradi. FK: oshqozon va ichakdan tez so'riladi. Ko'rsatmalar: gastrit, oshqozon yarasi, refluks. Qarshi ko'rsatmalar: oshqozon ichak tiqilishi, buyrak yoki yurak kasalliklari. Nojo'ya ta'sirlar: oshqozon-ichak tizimi buzilishlari, diareya. Dozasi: 1-2 tabletkadan, zarur holatlarda har 1-2 soatda." 
  },
  { 
    question: "Eritromitsin uchun retsept yozing", 
    answer: "Eritromitsin - makrolid antibiotigi bo'lib, asosan bakterial infektsiyalarni davolashda ishlatiladi. Ko'rsatmalar: respirator infektsiyalar (bronxit, pnevmoniya), teri infeksiyalari, ko'z infektsiyalari. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar kasalliklari. Nojo'ya ta'siri: diareya, qorin og'rig'i, allergik reaktsiyalar. Dozasi: odatda 250-500 mg, har 6 soatda, zarur bo'lsa doza oshiriladi. Rp.: Eritromitsini (Erythromycin) 500 mg N. 10 D.S. 1 tabletka har 6 soatda"
  },

  { 
    question: "Ampitsillin uchun retsept yozing", 
    answer: "Ampitsillin - penitsillin antibiotigi, keng spektrli va gram-musbat bakteriyalarni davolashda ishlatiladi. Ko'rsatmalar: respirator infektsiyalar, siydik yo'llari infeksiyalari, meningit, enterokok infeksiyalari. Qarshi ko'rsatmalar: allergiya, penitsillin va boshqa beta-laktam antibiotiklariga yuqori sezuvchanlik. Nojo'ya ta'siri: diareya, allergik reaktsiyalar, oshqozon-ichak buzilishlari. Dozasi: odatda 250-500 mg, har 6-8 soatda, infeksiyaning jiddiyligiga qarab. Rp.: Ampitsillini (Ampicillin) 500 mg N. 10 D.S. 1 tabletka har 6 soatda"
  },

  { 
    question: "Mukaltin uchun retsept yozing", 
    answer: "Mukaltin - mukolitik dori, bronxial sekretsiyalarni kamaytiradi. Ko'rsatmalar: bronxit, pnevmoniya, astma va boshqa bronxial kasalliklar bilan bog'liq yallig'lanishlar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, oshqozon-ichak tizimi kasalliklari (gastrit, oshqozon yarasi). Nojo'ya ta'siri: oshqozon-ichak tizimi buzilishlari, allergik reaktsiyalar. Dozasi: odatda 1-2 tabletkadan, kuniga 3-4 marta, zarur bo'lsa dozasi oshiriladi. Rp.: Mukaltini (Mukaltin) 50 mg N. 20 D.S. 1 tabletka kuniga 3-4 marta"
  },

  { 
    question: "Furatsilin uchun retsept yozing", 
    answer: "Furatsilin - antiseptik va antimikrobiyal dori, asosan infektsiyalarni davolashda ishlatiladi. Ko'rsatmalar: yaralar, teri infeksiyalari, og'iz va tomoq infektsiyalari, yallig'lanishlarni yuvish. Qarshi ko'rsatmalar: sezuvchanlik, teri reaktsiyalari. Nojo'ya ta'siri: teri allergik reaktsiyalari, yallig'lanish. Dozasi: eritma shaklida - 1:1000 konsentratsiyada, yaralarni yuvish uchun, og'izni chayish uchun 1-2 ml kerakli eritma ishlatiladi. Rp.: Furatsilini (Furacilin) eritmasi 1:1000 N. 10 ml D.S. yaralarni yuvish va og'izni chayish uchun"
  },

  { 
    question: "Streptomitsin uchun retsept yozing", 
    answer: "Streptomitsin - aminoglikozid antibiotigi, bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: tuberkuloz, yiringli infektsiyalar, meningit, endokardit. Qarshi ko'rsatmalar: buyrak va eshitish tizimi kasalliklari, homiladorlik va emizish. Nojo'ya ta'siri: eshitish va buyrak tizimi buzilishi, allergik reaktsiyalar, bosh og'rig'i. Dozasi: odatda 1-2 g, har 12 soatda, zarur bo'lsa dozasi oshiriladi. Rp.: Streptomitsini (Streptomycin) 1 g N. 10 D.S. 1-2 g har 12 soatda"
  },
  { 
    question: "Gtyukezaning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Gtyukezan antibiotik, bakterial infektsiyalarni davolash uchun ishlatiladi. Ko'rsatmalar: respirator infeksiyalar, siydik yo'llari infektsiyalari, yiringli jarohatlar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, homiladorlik va emizish. FD: Bakterial hujayra devorini buzadi. FK: Og'iz orqali so'riladi, jigar orqali metabolizmga uchraydi. Dozasi: 250-500 mg, har 8 soatda."
  },
  { 
    question: "Nitrofarantoinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Nitrofarantoin siydik yo'llari infeksiyalarini davolashda ishlatiladi. Ko'rsatmalar: tsistit, pielonefrit. Qarshi ko'rsatmalar: jigar kasalliklari, semizlik, homiladorlik. FD: Bakterial hujayralar hujayra devorini buzadi. FK: Og'iz orqali so'riladi, buyrak orqali chiqariladi. Dozasi: 50-100 mg, har 6 soatda."
  },
  { 
    question: "Kaliy oratatning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Kaliy oratati gipokaliemiyani davolash uchun ishlatiladi. Ko'rsatmalar: qandli diabet, diuretiklar bilan davolashdan kelib chiqadigan kaliy yetishmovchiligi. Qarshi ko'rsatmalar: buyrak kasalliklari, yurak aritmiyalari. FD: Kaliy ionlarini yadro hujayralari orqali tashiydi. FK: Og'iz orqali so'riladi, buyraklar orqali chiqariladi. Dozasi: 1-2 g, kuniga 2-3 marta."
  },
  { 
    question: "Triampur KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Triampur diuretik dori, gipertoniya va shishlarni davolashda ishlatiladi. Ko'rsatmalar: gipertoniya, yurak etishmovchiligi. Qarshi ko'rsatmalar: buyrak va jigar etishmovchiligi. FD: Natriy va suvni chiqaradi, kaliyni ushlab qoladi. FK: Og'iz orqali so'riladi, buyraklar orqali chiqariladi. Dozasi: 1 tableta, kuniga bir marta."
  },
  { 
    question: "Salbetamodning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Salbetamol bronxial astma va bronxitni davolashda ishlatiladi. Ko'rsatmalar: bronxial astma, havo yo'llari blokadasi. Qarshi ko'rsatmalar: yuqori sezuvchanlik, yurak kasalliklari. FD: Bronxlarni kengaytiradi. FK: Inhalatsiya shaklida ishlatiladi, tez ta'sir qiladi. Dozasi: 100-200 mcg, zarur bo'lsa takrorlash mumkin."
  },
  { 
    question: "Mukaltinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Mukaltin mukolitik dori, bronxial sekretsiyalarni kamaytiradi. Ko'rsatmalar: bronxit, pnevmoniya, astma. Qarshi ko'rsatmalar: oshqozon-ichak tizimi kasalliklari. FD: Mukusni suyultiradi, yo'talni engillashtiradi. FK: Og'iz orqali so'riladi, jigarda metabolizmga uchraydi. Dozasi: 1-2 tabletkadan, kuniga 3-4 marta."
  },
  { 
    question: "Diakarhning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Diakarx diuretik dori, yuqori qon bosimi va shishlarni davolashda ishlatiladi. Ko'rsatmalar: gipertoniya, buyrak kasalliklari. Qarshi ko'rsatmalar: buyrak kasalliklari, semizlik, homiladorlik. FD: Natriy va suvni chiqaradi. FK: Buyraklar orqali chiqariladi. Dozasi: 250-500 mg, kuniga 1-2 marta."
  },
  { 
    question: "Piridoksin gidroxloridning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Piridoksin gidroxlorid vitamin B6 preparati, nerv tizimi kasalliklari va vitamin B6 yetishmovchiligi uchun ishlatiladi. Ko'rsatmalar: gipovitaminoz, nerv tizimi kasalliklari. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar kasalliklari. FD: Nerv tizimiga ta'sir qiladi. FK: Jigarda metabolizmga uchraydi. Dozasi: 1-2 mg, kuniga 1 marta."
  },
  { 
    question: "Sefazolinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)", 
    answer: "KF: Sefazolin beta-laktam antibiotigi, bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: siydik yo'llari infeksiyalari, respirator infeksiyalar. Qarshi ko'rsatmalar: sezuvchanlik, penitsillin va beta-laktam antibiotiklariga allergiya. FD: Bakterial hujayra devorini buzadi. FK: Jigar orqali metabolizmga uchraydi, buyraklar orqali chiqariladi. Dozasi: 1-2 g, har 8 soatda."
  },
  { 
    question: "Metotreksat uchun retsept yozing", 
    answer: "Metotreksat - immunsupressant va onkologik dori. Ko'rsatmalar: surunkali revmatoid artrit, psoriatik artrit, nekrotik lezyonlar, ba'zi saraton turlari (masalan, limfoma, leykemiya). Qarshi ko'rsatmalar: jigar va buyrak kasalliklari, qon kasalliklari, homiladorlik. Nojo'ya ta'siri: oshqozon-ichak tizimi buzilishlari, suyak iligi faoliyatining susayishi, jigarda shikastlanish. Dozasi: odatda 7.5-25 mg haftada, yuqori dozalar onkologik kasalliklar uchun qo'llaniladi. Rp.: Metotreksatini (Methotrexate) 10 mg N. 10 D.S. 1 tabletka haftada 1 marta"
  },
  { 
    question: "Ipratropium bromid uchun retsept yozing", 
    answer: "Ipratropium bromid - bronxodilatator, asosan bronxial astma va KOPDni davolashda ishlatiladi. Ko'rsatmalar: astma, KOPD, bronxospazm. Qarshi ko'rsatmalar: yuqori sezuvchanlik, buyrak kasalliklari, homiladorlik. Nojo'ya ta'siri: bosh og'rig'i, quruq og'iz, yengil allergik reaktsiyalar. Dozasi: odatda 20 mcg, 2-3 marta kuniga inhalatsiya shaklida. Rp.: Ipratropium bromid (Atrovent) 20 mcg N. 10 D.S. 2-3 marta kuniga inhalatsiya qilish"
  },
  { 
    question: "Glyukoza uchun retsept yozing", 
    answer: "Glyukoza - oddiy shakar bo'lib, asosan organizmga energiya berish uchun ishlatiladi. Ko'rsatmalar: gipoglikemiya, qandli diabetda qon shakarini tez oshirish. Qarshi ko'rsatmalar: yuqori shakar darajasi, diabetning jiddiy formalarida ehtiyotkorlik bilan foydalanish. Nojo'ya ta'siri: og'ir giperglikemiya, qorin og'rig'i. Dozasi: infuzion shaklda 5-10% erishma 200-500 ml dozada. Rp.: Glyukoza (Glucose) 5% 500 ml N. 1 D.S. 200-500 ml infuzion shaklda"
  },
  { 
    question: "Triamtsinolon uchun retsept yozing", 
    answer: "Triamtsinolon - kortikosteroid, yallig'lanishga qarshi vosita. Ko'rsatmalar: allergik reaktsiyalar, artrit, teri kasalliklari, astma. Qarshi ko'rsatmalar: yuqori sezuvchanlik, infeksion kasalliklar, homiladorlik. Nojo'ya ta'siri: yirik tanada shish, qandli diabetda holatni yomonlashishi, bosh og'rig'i. Dozasi: 4-10 mg, kuniga bir marta, zarur bo'lsa dozasi oshiriladi. Rp.: Triamtsinolon (Kenalog) 4 mg N. 10 D.S. 1 tabletka kuniga 1 marta"
  },
  { 
    question: "Nitrofurantoin uchun retsept yozing", 
    answer: "Nitrofurantoin - antibakterial dori, asosan siydik yo'llari infeksiyalarini davolashda ishlatiladi. Ko'rsatmalar: siydik yo'llari infektsiyalari (tsistit, pielonefrit). Qarshi ko'rsatmalar: jigar kasalliklari, semizlik, homiladorlik. Nojo'ya ta'siri: qorin og'rig'i, bosh og'rig'i, allergik reaktsiyalar. Dozasi: odatda 50-100 mg, har 6 soatda, kurs davomida dozasi oshirilishi mumkin. Rp.: Nitrofurantoin (Furadantin) 50 mg N. 10 D.S. 1 tabletka har 6 soatda"
  },
  { 
    question: "Reopoliglyukin uchun retsept yozing", 
    answer: "Reopoliglyukin - plazma kengaytiruvchi dori, qon hajmini tiklash uchun ishlatiladi. Ko'rsatmalar: qon yo'qotish, hipotoniya, operatsiya va travma holatlari. Qarshi ko'rsatmalar: yurak, buyrak yoki jigar etishmovchiligi, alergik reaktsiyalar. Nojo'ya ta'siri: qorin og'rig'i, bosh og'rig'i, qon bosimining pasayishi. Dozasi: 200-400 ml infuzion shaklda, ehtiyojga qarab dozasi belgilanishi mumkin. Rp.: Reopoliglyukin (Reopoliglucine) 200 ml N. 1 D.S. infuzion shaklda"
  },
  { 
    question: "Delagil uchun retsept yozing", 
    answer: "Delagil - malarial kasalliklar va ayrim revmatoid kasalliklarni davolashda ishlatiladigan dori. Ko'rsatmalar: malyariya, revmatoid artrit. Qarshi ko'rsatmalar: homiladorlik, emizish, yuqori sezuvchanlik. Nojo'ya ta'siri: oshqozon-ichak buzilishlari, bosh og'rig'i, teri reaksiyalari. Dozasi: malarial kasalliklar uchun 200-400 mg, kuniga 1-2 marta, davolash davomiyligi 3-7 kun. Rp.: Delagil (Chloroquine) 250 mg N. 10 D.S. 1-2 tabletka kuniga"
  },
  { 
    question: "Seftriakson uchun retsept yozing", 
    answer: "Seftriakson - beta-laktam antibiotigi, keng spektrli va bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: siydik yo'llari infeksiyalari, respirator infeksiyalar, yiringli jarohatlar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, penitsillin va beta-laktam antibiotiklariga allergiya. Nojo'ya ta'siri: oshqozon-ichak buzilishlari, allergik reaktsiyalar. Dozasi: odatda 1-2 g, har 8 soatda, infeksiyaning turiga qarab dozasi oshiriladi. Rp.: Seftriakson (Rocephin) 1 g N. 10 D.S. 1-2 g har 8 soatda"
  },
  { 
    question: "Sefazolin uchun retsept yozing", 
    answer: "Sefazolin - beta-laktam antibiotigi, keng spektrli va bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: siydik yo'llari infeksiyalari, respirator infeksiyalar, yiringli jarohatlar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, penitsillin va beta-laktam antibiotiklariga allergiya. Nojo'ya ta'siri: oshqozon-ichak buzilishlari, allergik reaktsiyalar. Dozasi: odatda 1-2 g, har 8 soatda, infeksiyaning turiga qarab dozasi oshiriladi. Rp.: Sefazolin (Ancef) 1 g N. 10 D.S. 1-2 g har 8 soatda"
  },
  { 
    question: "Ambroksol uchun retsept yozing", 
    answer: "Ambroksol - mukolitik dori, nafas yo'llaridagi shilliqni yupqalaydi va yuvinishni osonlashtiradi. Ko'rsatmalar: bronxit, pnevmoniya, astma. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar va buyrak kasalliklari. Nojo'ya ta'siri: qorin og'rig'i, bosh og'rig'i, allergik reaktsiyalar. Dozasi: 30 mg, kuniga 2-3 marta, 5-7 kun davomida. Rp.: Ambroksol (Ambroxol) 30 mg N. 10 D.S. 1 tabletka kuniga 2-3 marta"
  },
  { 
    question: "Naproksen uchun retsept yozing", 
    answer: "Naproksen - nonsteroid yallig'lanishga qarshi dori (NSAID), og'riqni kamaytiradi va yallig'lanishni bartaraf etadi. Ko'rsatmalar: artrit, revmatoid artrit, osteoartrit, og'riqni boshqarish. Qarshi ko'rsatmalar: oshqozon yarasi, jigardagi yoki buyrakdagi jiddiy kasalliklar. Nojo'ya ta'siri: oshqozon-ichak tizimi buzilishlari, bosh og'rig'i, allergik reaktsiyalar. Dozasi: odatda 250-500 mg, kuniga ikki marta. Rp.: Naproksen (Naprosyn) 250 mg N. 10 D.S. 1 tabletka kuniga 2 marta"
  },
  { 
    question: "Famotidin uchun retsept yozing", 
    answer: "Famotidin - antikid, oshqozon kislotalarini kamaytiradi. Ko'rsatmalar: peptik yaralar, GERB (gastroezofageal reflux kasalligi), oshqozon va o'n ikki barmoqli ichak yaralari. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar kasalliklari. Nojo'ya ta'siri: bosh og'rig'i, qorin og'rig'i, yurak urishi. Dozasi: 20-40 mg, kuniga bir marta, ovqat bilan birga. Rp.: Famotidin (Pepcid) 20 mg N. 10 D.S. 1 tabletka kuniga bir marta, ovqat bilan"
  },
  { 
    question: "Formoterol uchun retsept yozing", 
    answer: "Formoterol - bronxodilatator, nafas olishni osonlashtiradi. Ko'rsatmalar: bronxial astma, KOPD. Qarshi ko'rsatmalar: yuqori sezuvchanlik, yurak ritmi buzilishi. Nojo'ya ta'siri: titroq, bosh og'rig'i, yengil allergik reaktsiyalar. Dozasi: 12-24 mcg, kuniga 2 marta inhalatsiya shaklida. Rp.: Formoterol (Foradil) 12 mcg N. 10 D.S. 1 doza kuniga 2 marta inhalatsiya shaklida"
  },
  { 
    question: "Indometatsin uchun retsept yozing", 
    answer: "Indometatsin - nonsteroid yallig'lanishga qarshi dori (NSAID), og'riqni kamaytiradi va yallig'lanishni bartaraf etadi. Ko'rsatmalar: revmatoid artrit, osteoartrit, siyatik. Qarshi ko'rsatmalar: oshqozon yarasi, buyrak va jigar kasalliklari. Nojo'ya ta'siri: oshqozon-ichak buzilishlari, bosh og'rig'i, allergik reaktsiyalar. Dozasi: 25-50 mg, kuniga 2-3 marta. Rp.: Indometatsin (Indocin) 25 mg N. 10 D.S. 1 tabletka kuniga 2-3 marta"
  },
  { 
    question: "Poliglyukin uchun retsept yozing", 
    answer: "Poliglyukin - plazma kengaytiruvchi va qon hajmini tiklovchi dori. Ko'rsatmalar: qon yo'qotish, gipovolemiya, yirik jarohatlar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, yurak, jigar va buyrak kasalliklari. Nojo'ya ta'siri: qorin og'rig'i, bosh og'rig'i, qon bosimining pasayishi. Dozasi: 200-400 ml, infuziya shaklida, kerakli miqdorda. Rp.: Poliglyukin (Polyglycinate) 200 ml N. 1 D.S. infuziya shaklida"
  },
  { 
    question: "Tetratsiklin uchun retsept yozing", 
    answer: "Tetratsiklin - keng spektrli antibiotik, bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: respirator infeksiyalar, siydik yo'llari infeksiyalari, akne. Qarshi ko'rsatmalar: homiladorlik, emizish, yuqori sezuvchanlik. Nojo'ya ta'siri: oshqozon-ichak tizimi buzilishlari, allergik reaktsiyalar, teri rangi o'zgarishi. Dozasi: 250-500 mg, kuniga 2-4 marta. Rp.: Tetratsiklin (Sumycin) 250 mg N. 10 D.S. 1 tabletka kuniga 2-4 marta"
  },
  { 
    question: "Benzilpenitsillin uchun retsept yozing", 
    answer: "Benzilpenitsillin - beta-laktam antibiotigi, ko'plab bakteriyalarni yo'q qilishda ishlatiladi. Ko'rsatmalar: yiringli jarohatlar, otit, pnevmoniya. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar kasalliklari. Nojo'ya ta'siri: allergik reaktsiyalar, teri va ichak tizimining noqulayliklari. Dozasi: 1-2 million E, har 6-8 soatda intramuskulyar yoki intrasifli infuziya shaklida. Rp.: Benzilpenitsillin (Penicillin G) 1 million E N. 10 D.S. 1-2 million E har 6-8 soatda"
  },
  { 
    question: "Meloksikam uchun retsept yozing", 
    answer: "Meloksikam - nonsteroid yallig'lanishga qarshi dori (NSAID), og'riqni kamaytiradi va yallig'lanishni bartaraf etadi. Ko'rsatmalar: artrit, osteoartrit, revmatoid artrit. Qarshi ko'rsatmalar: oshqozon yarasi, jigar va buyrak kasalliklari. Nojo'ya ta'siri: bosh og'rig'i, oshqozon-ichak buzilishlari, allergik reaktsiyalar. Dozasi: odatda 7.5-15 mg, kuniga bir marta. Rp.: Meloksikam (Mobic) 7.5 mg N. 10 D.S. 1 tabletka kuniga bir marta"
  },
  {
    question: "Indometatsinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Indometatsin - nonsteroid yallig'lanishga qarshi dori (NSAID). Ko'rsatmalar: revmatoid artrit, osteoartrit, siyatik, og'riqni boshqarish. Qarshi ko'rsatmalar: oshqozon yarasi, jigarda yoki buyrak kasalliklari. Nojo'ya ta'siri: oshqozon-ichak tizimi buzilishlari, bosh og'rig'i, allergik reaktsiyalar. Dozasi: 25-50 mg, kuniga 2-3 marta. FD: yallig'lanishga qarshi, og'riqni kamaytiruvchi ta'sir. FK: tez so'rilishi, jigar va buyrak orqali chiqarilishi."
  },
  {
    question: "Kanamitsinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Kanamitsin - aminoglikozid antibiotik, bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: yiringli jarohatlar, sepsis, siydik yo'llari infeksiyalari. Qarshi ko'rsatmalar: buyrak va jigar kasalliklari, homiladorlik, emizish. Nojo'ya ta'siri: neftning ko'tarilishi, qonni ko'payishi, allergik reaktsiyalar. Dozasi: 1-2 mg/kg tana vazni, kuniga 2-3 marta. FD: bakterial hujayra membranasining sinishi. FK: jigar va buyrak orqali chiqariladi."
  },
  {
    question: "Xloramfenikolning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Xloramfenikol - keng spektrli antibiotik, bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: respirator infeksiyalar, meningit, brutsellyoz. Qarshi ko'rsatmalar: yuqori sezuvchanlik, buyrak yoki jigar kasalliklari, homiladorlik. Nojo'ya ta'siri: aplastik anemiya, allergik reaktsiyalar. Dozasi: 250-500 mg, kuniga 2-4 marta. FD: protein sintezini inhibe qiladi. FK: jigar orqali metabolizm, buyrak orqali chiqariladi."
  },
  {
    question: "Krizanolning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Krizanol - antifungal dori. Ko'rsatmalar: mikozlar, dermatofitlar, kandidoz. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar kasalliklari. Nojo'ya ta'siri: qorin og'rig'i, bosh og'rig'i, allergik reaktsiyalar. Dozasi: 100-200 mg, kuniga 1-2 marta. FD: mikotik hujayra membranasini buzadi. FK: jigar tomonidan metabolizmga uchraydi, ichak orqali chiqariladi."
  },
  {
    question: "Ipratropium bromidning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Ipratropium bromid - bronxodilatator, bronxial astma va KOPDni davolashda ishlatiladi. Ko'rsatmalar: astma, bronxial obstruktsiya. Qarshi ko'rsatmalar: yuqori sezuvchanlik, glaukoma. Nojo'ya ta'siri: og'iz quruqligi, titroq, bosh og'rig'i. Dozasi: 18-36 mcg, kuniga 2-4 marta inhalatsiya shaklida. FD: muskarinik reseptorlarini bloklaydi, bronxlar ichidagi mushaklarni bo'shatadi. FK: tez so'rilishi, buyrak orqali chiqariladi."
  },
  {
    question: "Omeprazolning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Omeprazol - proton nasos inhibitörü, oshqozon kislotalarini kamaytiradi. Ko'rsatmalar: GERB, oshqozon yarasi, peptik yaralar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, jigar kasalliklari. Nojo'ya ta'siri: bosh og'rig'i, oshqozon-ichak tizimi buzilishlari. Dozasi: 20-40 mg, kuniga bir marta. FD: proton nasosini inhibe qiladi, kislotalikni pasaytiradi. FK: oshqozon va ichak orqali so'riladi, jigar orqali metabolizmga uchraydi."
  },
  {
    question: "Prednizolonning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Prednizolon - kortikosteroid, yallig'lanishga qarshi ta'sir ko'rsatadi. Ko'rsatmalar: yallig'lanish kasalliklari, allergik holatlar, autoimmun kasalliklar. Qarshi ko'rsatmalar: yuqori sezuvchanlik, infektsiyalar. Nojo'ya ta'siri: og'riq, tana vaznining ko'tarilishi, qon bosimining o'zgarishi. Dozasi: 5-20 mg, kuniga bir marta. FD: immun tizimini bosish, yallig'lanishni kamaytirish. FK: tez so'rilishi, buyrak orqali chiqarilishi."
  },
  {
    question: "Metotreksatning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Metotreksat - ximioterapiya va immunosupresiv dori. Ko'rsatmalar: reumatik kasalliklar, kanserlar, psoriaz. Qarshi ko'rsatmalar: homiladorlik, jigar va buyrak kasalliklari. Nojo'ya ta'siri: qon tizimi buzilishlari, oshqozon-ichak tizimi, yurak ritmi. Dozasi: 7.5-15 mg, haftasiga bir marta. FD: folat kislotasining antagonisti, hujayra bo'linishini inhibe qiladi. FK: jigar orqali metabolizmga uchraydi, buyraklar orqali chiqariladi."
  },
  {
    question: "Formoterolning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Formoterol - bronxodilatator, bronxial astma va KOPDni davolashda ishlatiladi. Ko'rsatmalar: bronxial astma, KOPD. Qarshi ko'rsatmalar: yuqori sezuvchanlik, yurak ritmi buzilishi. Nojo'ya ta'siri: titroq, bosh og'rig'i, yengil allergik reaktsiyalar. Dozasi: 12-24 mcg, kuniga 2 marta inhalatsiya shaklida. FD: beta-2 adrenerjik reseptorlarga ta'sir qiladi, bronxlarni kengaytiradi. FK: tez so'riladi, jigar orqali metabolizmga uchraydi."
  },
  {
    question: "Kaliy oratat uchun retsept yozing",
    answer: "Kaliy oratat - organizmdagi kaliy balansini tiklash uchun ishlatiladi. Ko'rsatmalar: gipokalemiya (kaliy tanqisligi), yurak arrhythmiyalari. Qarshi ko'rsatmalar: buyrak yetishmovchiligi, hiperkaliemiya. Dozalash rejimi: 1-2 tabletka, kuniga 1-2 marta, ovqatdan keyin. Rp.: Kaliy oratat (Potassium orotate) 250 mg N. 10 D.S. 1-2 tabletka kuniga 1-2 marta, ovqatdan keyin"
  },
  {
    question: "Bisokodil uchun retsept yozing",
    answer: "Bisokodil - laksatif dori, ichaklarni rag'batlantiradi. Ko'rsatmalar: ich qotishi, operatsiya oldidan ichakni tozalash. Qarshi ko'rsatmalar: o'z-o'zini ichakning normal funktsiyasini buzgan bemorlar, og'ir ichak kasalliklari. Dozalash rejimi: 5-10 mg, kechqurun. Rp.: Bisokodil (Dulcolax) 5 mg N. 10 D.S. 1 tabletka kechqurun"
  },
  {
    question: "Piridoksin gidroxlorid uchun retsept yozing",
    answer: "Piridoksin gidroxlorid (vitamin B6) - asab tizimi va metabolizmni normallashtiruvchi vitamin. Ko'rsatmalar: piridoksin yetishmovchiligi, nerv tizimi kasalliklari. Qarshi ko'rsatmalar: yuqori sezuvchanlik. Dozalash rejimi: 10-50 mg, kuniga 1-2 marta. Rp.: Piridoksin gidroxlorid (Vitamin B6) 25 mg N. 10 D.S. 1 tabletka kuniga 1-2 marta"
  },
  {
    question: "Gentamitsin uchun retsept yozing",
    answer: "Gentamitsin - aminoglikozid antibiotik. Ko'rsatmalar: bakterial infeksiyalar, siydik yo'llari infeksiyalari, sepsis. Qarshi ko'rsatmalar: jigar va buyrak kasalliklari. Dozalash rejimi: 3-5 mg/kg tana vaznidan, kuniga 1-2 marta. Rp.: Gentamitsin (Gentamicin) 80 mg N. 10 D.S. 1-2 marta, 3-5 mg/kg tana vaznidan"
  },
  {
    question: "Diakarb uchun retsept yozing",
    answer: "Diakarb (Asetazolamid) - diuretik dori, oshqozon kislotalarini kamaytiradi. Ko'rsatmalar: glaukoma, suvsizlanish, epilepsiya. Qarshi ko'rsatmalar: buyrak yoki jigar kasalliklari. Dozalash rejimi: 250-500 mg, kuniga 1-2 marta. Rp.: Diakarb (Acetazolamide) 250 mg N. 10 D.S. 1-2 tabletka kuniga 1-2 marta"
  },
  {
    question: "Kanamitsin uchun retsept yozing",
    answer: "Kanamitsin - aminoglikozid antibiotik, bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: yiringli jarohatlar, sepsis, siydik yo'llari infeksiyalari. Qarshi ko'rsatmalar: buyrak va jigar kasalliklari, homiladorlik. Dozalash rejimi: 1-2 mg/kg tana vazni, kuniga 2-3 marta. Rp.: Kanamitsin (Kanamycin) 500 mg N. 10 D.S. 1-2 marta, 1-2 mg/kg tana vaznidan"
  },
  {
    question: "Gipotiazid uchun retsept yozing",
    answer: "Gipotiazid - tiazid diuretik, ortiqcha suyuqlikni chiqaradi. Ko'rsatmalar: yuqori qon bosimi, yurak yetishmovchiligi. Qarshi ko'rsatmalar: buyrak yoki jigar kasalliklari, elektrolitlar disbalansi. Dozalash rejimi: 12.5-25 mg, kuniga 1 marta. Rp.: Gipotiazid (Hydrodiuril) 25 mg N. 10 D.S. 1 tabletka kuniga 1 marta"
  },
  {
    question: "Diklofenak natriy uchun retsept yozing",
    answer: "Diklofenak natriy - NSAID, yallig'lanishga qarshi dori. Ko'rsatmalar: artrit, mushak og'rig'i, yallig'lanish. Qarshi ko'rsatmalar: oshqozon yarasi, buyrak kasalliklari. Dozalash rejimi: 50-100 mg, kuniga 2-3 marta. Rp.: Diklofenak natriy (Voltaren) 50 mg N. 10 D.S. 1 tabletka kuniga 2-3 marta"
  },
  {
    question: "Furozolidon uchun retsept yozing",
    answer: "Furozolidon - antibiotik, zardobli ichak infektsiyalarini davolashda ishlatiladi. Ko'rsatmalar: enterit, dizenteriya, kolit. Qarshi ko'rsatmalar: buyrak kasalliklari, yuqori sezuvchanlik. Dozalash rejimi: 100-200 mg, kuniga 3-4 marta. Rp.: Furozolidon (Furazolidone) 100 mg N. 10 D.S. 1 tabletka kuniga 3-4 marta"
  },
  {
    question: "Ergokalsiferol uchun retsept yozing",
    answer: "Ergokalsiferol (Vitamin D2) - suyaklarning sog‘lom bo‘lishini ta'minlash uchun ishlatiladi. Ko'rsatmalar: D vitamini tanqisligi, osteomalatsiya, osteoporoz. Qarshi ko'rsatmalar: yuqori kaltsiy darajasi. Dozalash rejimi: 1-2 tabletka (1-2 mg), kuniga 1 marta. Rp.: Ergokalsiferol (Vitamin D2) 1 mg N. 10 D.S. 1-2 tabletka kuniga 1 marta"
  },
  {
    question: "Prednizolon uchun retsept yozing",
    answer: "Prednizolon - kortikosteroid dorisi, yallig'lanishga qarshi ishlatiladi. Ko'rsatmalar: yallig'lanishli kasalliklar, allergik holatlar. Qarshi ko'rsatmalar: buyrak kasalliklari, infeksion kasalliklar. Dozalash rejimi: 5-60 mg, kuniga 1-2 marta, holatga qarab. Rp.: Prednizolon (Prednisolone) 5 mg N. 10 D.S. 1-2 tabletka kuniga 1-2 marta"
  },
  {
    question: "Aminofilin uchun retsept yozing",
    answer: "Aminofilin - bronxospazmni engillashtiruvchi dori. Ko'rsatmalar: astma, havo yo‘llari kasalliklari. Qarshi ko'rsatmalar: yurak kasalliklari, buyrak va jigar kasalliklari. Dozalash rejimi: 200-400 mg, kuniga 1-2 marta. Rp.: Aminofilin (Aminophylline) 200 mg N. 10 D.S. 1-2 tabletka kuniga 1-2 marta"
  },
  {
    question: "Pirenzepin uchun retsept yozing",
    answer: "Pirenzepin - antixolinergik dori, oshqozon yaralarini davolashda ishlatiladi. Ko'rsatmalar: gastrit, oshqozon yarasi. Qarshi ko'rsatmalar: glaukoma, siydikni ushlab qolish. Dozalash rejimi: 50-100 mg, kuniga 2-3 marta. Rp.: Pirenzepin (Pirenzepine) 50 mg N. 10 D.S. 1-2 tabletka kuniga 2-3 marta"
  },
  {
    question: "Krizamol uchun retsept yozing",
    answer: "Krizamol - nootropik dori, asab tizimi uchun ishlatiladi. Ko'rsatmalar: nevroz, dementsiya. Qarshi ko'rsatmalar: yuqori sezuvchanlik. Dozalash rejimi: 10-20 mg, kuniga 1-2 marta. Rp.: Krizamol (Krizamol) 10 mg N. 10 D.S. 1-2 tabletka kuniga 1-2 marta"
  },
  {
    question: "Triampur uchun retsept yozing",
    answer: "Triampur - diuretik va antihipertenziv dori. Ko'rsatmalar: yuqori qon bosimi, suvsizlanish. Qarshi ko'rsatmalar: buyrak kasalliklari, siydik yo‘llari infeksiyalari. Dozalash rejimi: 1 tabletka (25/50 mg), kuniga 1 marta. Rp.: Triampur (Triamterene) 25/50 mg N. 10 D.S. 1 tabletka kuniga 1 marta"
  },
  {
    question: "Xloramfenikol uchun retsept yozing",
    answer: "Xloramfenikol - antibiotik, bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: meningit, bakterial infektsiyalar. Qarshi ko'rsatmalar: suyak iligi disfunktsiyasi, buyrak kasalliklari. Dozalash rejimi: 250-500 mg, kuniga 2-3 marta. Rp.: Xloramfenikol (Chloramphenicol) 250 mg N. 10 D.S. 1-2 tabletka kuniga 2-3 marta"
  },
  {
    question: "Sulbutamol uchun retsept yozing",
    answer: "Sulbutamol - bronxospazmni engillashtiruvchi beta-agonist dorisi. Ko'rsatmalar: astma, bronxit. Qarshi ko'rsatmalar: yurak kasalliklari, gipertoniya. Dozalash rejimi: 2-4 mg, kuniga 3-4 marta, og'iz orqali. Rp.: Sulbutamol (Salbutamol) 2 mg N. 10 D.S. 1-2 tabletka kuniga 3-4 marta"
  },
  {
    question: "Eritromitsinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Eritromitsin - antibiotik, bakterial infeksiyalarni davolashda ishlatiladi. Ko'rsatmalar: pnevmoniya, bronxit, infektsiyalar. Qarshi ko'rsatmalar: jigar kasalliklari, yurak aritmiyasi. FD: Bakteriyalarni inhibe qilish orqali yallig'lanishga qarshi ta'sir ko'rsatadi. FK: Oshqozon-ichak tizimi orqali so'riladi, jigarda metabolizlanadi va buyraklar orqali chiqariladi. Nojo'ya ta'siri: oshqozon-ichak diskomforti, allergik reaksiyalar. Dozalash rejimi: 250-500 mg, 4-6 soatda bir marta."
  },
  {
    question: "Tetratsiklinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Tetratsiklin - keng spektrli antibiotik. Ko'rsatmalar: akne, respirator infeksiyalar. Qarshi ko'rsatmalar: homiladorlik, bolalik yoshi (6 yoshgacha). FD: Bakterial protein sintezini inhibe qiladi. FK: Oshqozon-ichak tizimi orqali so'riladi, jigar orqali metabolizlanadi. Nojo'ya ta'siri: oshqozon-ichak bezovtaligi, fotosensitivlik. Dozalash rejimi: 250-500 mg, kuniga 2-4 marta."
  },
  {
    question: "Retinol asetatning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Retinol asetat (Vitamin A) - dermatologik dori. Ko'rsatmalar: teri kasalliklari, akne. Qarshi ko'rsatmalar: gipervitaminoz A, homiladorlik. FD: Terining to'g'ri rivojlanishi va salomatligi uchun zarur. FK: Yaxshi yog'lar bilan so'riladi va jigarda saqlanadi. Nojo'ya ta'siri: teri qizarishi, qurishi. Dozalash rejimi: 5000-10000 IU, kuniga 1 marta, oziq-ovqat bilan."
  },
  {
    question: "Ibuprofenning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Ibuprofen - og'riqni yengillatish va yallig'lanishga qarshi dori. Ko'rsatmalar: artrit, bosh og'rig'i, dismenoreya. Qarshi ko'rsatmalar: oshqozon yarasi, jigar va buyrak kasalliklari. FD: COX (tsiklooksigenaza) ni inhibe qilib, yallig'lanishni kamaytiradi. FK: Oshqozon-ichak tizimi orqali so'riladi va jigarda metabolizlanadi. Nojo'ya ta'siri: oshqozon-ichak tizimi diskomforti, bosh og'rig'i. Dozalash rejimi: 200-400 mg, 4-6 soatda bir marta."
  },
  {
    question: "Furozolidonning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Furozolidon - antibakterial dori. Ko'rsatmalar: dizenteriya, gastroenterit. Qarshi ko'rsatmalar: buyrak kasalliklari, allergiya. FD: Bakteriyalarning fermentativ faolligini inhibe qiladi. FK: Oshqozon-ichak tizimi orqali so'riladi va buyraklar orqali chiqariladi. Nojo'ya ta'siri: oshqozon-ichak diskomforti, teri toshmasi. Dozalash rejimi: 100-200 mg, kuniga 3-4 marta."
  },
  {
    question: "Aminofilinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Aminofillin - bronxospazmni engillashtiruvchi dori. Ko'rsatmalar: astma, COPD. Qarshi ko'rsatmalar: yurak kasalliklari, giperkalemiya. FD: Bronxial mushaklarni kengaytirib, nafas olishni yaxshilaydi. FK: Tez so'riladi va metabolizlanmaydi, faqat buyurilgan dozada faol qoladi. Nojo'ya ta'siri: asabiylashish, yurak aritmiyasi. Dozalash rejimi: 250-500 mg, kuniga 2-3 marta."
  },
  {
    question: "Famotidinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Famotidin - antiulser dori, oshqozon kislotasining ajralishini kamaytiradi. Ko'rsatmalar: gastrit, oshqozon yarasi. Qarshi ko'rsatmalar: buyrak kasalliklari. FD: Histamin H2-reseptorlarini bloklaydi, kislotaning ishlab chiqarilishini kamaytiradi. FK: Oshqozon-ichak tizimi orqali so'riladi va buyraklar orqali chiqariladi. Nojo'ya ta'siri: bosh og'rig'i, asabiylashish. Dozalash rejimi: 20 mg, kuniga 2 marta."
  },
  {
    question: "Indometazinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Indometazin - og'riqni yengillatish va yallig'lanishga qarshi dori. Ko'rsatmalar: artrit, tendinit. Qarshi ko'rsatmalar: oshqozon yarasi, yurak kasalliklari. FD: COX (tsiklooksigenaza) ni inhibe qiladi, yallig'lanishni kamaytiradi. FK: Oshqozon-ichak tizimi orqali so'riladi, jigarda metabolizlanadi. Nojo'ya ta'siri: oshqozon-ichak tizimi bezovtaligi, bosh og'rig'i. Dozalash rejimi: 25-50 mg, kuniga 2-3 marta."
  },
  {
    question: "Benzilpenitsillinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Benzilpenitsillin - antibiotik, infektsiyalarni davolashda ishlatiladi. Ko'rsatmalar: pnevmoniya, meningit, streptokokk infektsiyasi. Qarshi ko'rsatmalar: allergiya, buyrak kasalliklari. FD: Bakteriyalarni killik qilish uchun peptidoglikan sintezini inhibe qiladi. FK: Oshqozon-ichak tizimi orqali so'riladi va buyraklar orqali chiqariladi. Nojo'ya ta'siri: allergik reaksiyalar, o'zgarishlar terida. Dozalash rejimi: 1-2 million IU, har 4 soatda bir marta."
  },
  {
    question: "Naproksenning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Naproksen - og'riqni yengillatish va yallig'lanishga qarshi dori. Ko'rsatmalar: artrit, og'riqlar, tendinit. Qarshi ko'rsatmalar: oshqozon yarasi, buyrak kasalliklari. FD: COX (tsiklooksigenaza) ni inhibe qilib, yallig'lanishni kamaytiradi. FK: Oshqozon-ichak tizimi orqali so'riladi, jigarda metabolizlanadi va buyraklar orqali chiqariladi. Nojo'ya ta'siri: oshqozon-ichak tizimi bezovtaligi, bosh og'rig'i. Dozalash rejimi: 250-500 mg, kuniga 2-3 marta."
  },
  {
    question: "Cipotiazidning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Cipotiazid - diuretik dori, suyuqlikni chiqarishga yordam beradi. Ko'rsatmalar: gipertenziya, yurak yetishmovchiligi. Qarshi ko'rsatmalar: buyrak kasalliklari, gipokalemiya. FD: Sodyum va suvni chiqaradi, arteriyal bosimni pasaytiradi. FK: Oshqozon-ichak tizimi orqali so'riladi, buyraklar orqali chiqariladi. Nojo'ya ta'siri: bosh og'rig'i, qon bosimi pasayishi. Dozalash rejimi: 25-50 mg, kuniga 1 marta."
  },
  {
    question: "Streptomitsinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Streptomitsin - antibakterial dori. Ko'rsatmalar: tuberculosis, brucellosis. Qarshi ko'rsatmalar: jigar va buyrak kasalliklari, allergiya. FD: Bakteriyalarni inhibe qilib, protein sintezini bloklaydi. FK: Oshqozon-ichak tizimi orqali so'riladi, jigarda metabolizlanadi va buyraklar orqali chiqariladi. Nojo'ya ta'siri: audiovaskulyar muammolar, nefrotoksik ta'sir. Dozalash rejimi: 1-2 g, kuniga 1-2 marta."
  },
  {
    question: "Reopoliglyukinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Reopoliglyukin - eritma, suyuqlikni almashtirish uchun ishlatiladi. Ko'rsatmalar: dehidratatsiya, qon yo'qotish. Qarshi ko'rsatmalar: yurak kasalliklari, qon shakar muammolari. FD: Suyuqlikni tanaga kiritadi va qonni saqlaydi. FK: Intravazal ravishda kiritilganda tez so'riladi va plasmatik volumni oshiradi. Nojo'ya ta'siri: allergik reaksiyalar, suyuqlik ortiqcha. Dozalash rejimi: 200-400 ml, intravenoz."
  },
  {
    question: "Triamsinojonning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Triamsinojon - kortikosteroid, yallig'lanishga qarshi. Ko'rsatmalar: allergiya, autoimmun kasalliklar. Qarshi ko'rsatmalar: infektsiyalar, oshqozon yarasi. FD: Yallig'lanishni kamaytiradi va immun tizimini suppressiya qiladi. FK: Tez so'riladi va jigarda metabolizlanadi. Nojo'ya ta'siri: suvsizlanish, immun tizimining zaiflashishi. Dozalash rejimi: 4-10 mg, kuniga 1 marta."
  },
  {
    question: "Poliglyuksinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Poliglyuksin - plazma almashtiruvchi eritma. Ko'rsatmalar: qon yo'qotish, dehidratatsiya. Qarshi ko'rsatmalar: buyrak kasalliklari. FD: Suv va elektrolitlar balansini tiklaydi. FK: Intravazal ravishda kiritilganda tez so'riladi va organizmga ta'sir qiladi. Nojo'ya ta'siri: allergik reaksiyalar, suyuqlik to'planishi. Dozalash rejimi: 200-400 ml, intravenoz."
  },
  {
    question: "Diklofenak natriyning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Diklofenak natriy - og'riqni kamaytiruvchi va yallig'lanishga qarshi dori. Ko'rsatmalar: artrit, dismenoreya. Qarshi ko'rsatmalar: oshqozon yarasi, yurak kasalliklari. FD: COX ni inhibe qilib, prostaglandinlar ishlab chiqarilishini kamaytiradi. FK: Oshqozon-ichak tizimi orqali so'riladi, jigarda metabolizlanadi. Nojo'ya ta'siri: oshqozon-ichak diskomforti, bosh og'rig'i. Dozalash rejimi: 50-100 mg, kuniga 2-3 marta."
  },
  {
    question: "Gentamitsinning KF (ko'rsatmalar va qarshi ko'rsatmalari, FD, FK, boshqa dorilar bilan o'zaro ta'siri, nojo'ya ta'siri va dozalash rejimi)",
    answer: "Gentamitsin - antibakterial dori. Ko'rsatmalar: infeksiyalar, o'pka yallig'lanishi. Qarshi ko'rsatmalar: buyrak kasalliklari, yurak aritmiyasi. FD: Bakteriyalarni inhibe qilib, protein sintezini bloklaydi. FK: Oshqozon-ichak tizimi orqali so'riladi, jigarda metabolizlanadi. Nojo'ya ta'siri: nefrotoksik ta'sir, qusish. Dozalash rejimi: 80-120 mg, kuniga 2-3 marta."
  }
];
