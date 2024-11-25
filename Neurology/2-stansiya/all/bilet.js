const tickets = [
  {
    "question": "Bilet 1. Bukuvchi patologik reflekslar nima va qanday tekshiriladi?",
    "answer": "Bukuvchi patologik reflekslar: Markaziy piramidal yadro va uning yo‘llari zararlanishi tufayli yuzaga keladigan reflekslar bo‘lib, oyoqlarda ham, qo‘llarda ham tekshiriladi. **1. Rossolimo refleksi:** Barmoqlarning uchiga chertiladi. Natija: barmoqlar bukiladi. **2. Bexterev I refleksi (Bexterev-Mendel refleksi):** Qo‘l yoki oyoq panjasining orqa yuzasida III-IV barmoqlar tagiga bolg‘acha bilan uriladi. Natija: barmoqlar bukiladi. **3. Bexterev II refleksi:** Nevrologik bolg‘acha bilan tovonga yoki qo‘l kaftining pastki qismiga uriladi. Natija: barmoqlar bukiladi. **4. Jukovskiy refleksi:** Qo‘l yoki oyoq kaftining o‘rtasiga bolg‘acha bilan uriladi. Natija: barmoqlar bukiladi."
  },
  {
    "question": "Bilet 2. Mushak kuchini qanday tekshirish mumkin?",
    "answer": "Muskul kuchini tekshirish: Bemordan vrach bajarayotgan passiv harakatlarga qarshilik ko‘rsatish so‘raladi, qarshilik darajasi asosida muskul kuchi baholanadi. Har bir bo‘g‘imda bukish, yozish, bir-biriga yaqinlashtirish, uzoqlashtirish, pronatsiya va supinatsiya tekshiriladi. Qo‘l panjasini bukuvchi muskullar kuchi dinamometr yordamida o‘lchanadi. Muskullar kuchini baholash: **5 ball (Norma): To‘liq qarshilik. **4 ball (Yengil falajlik): Biroz pasaygan qarshilik, faol harakat saqlangan. **3 ball (O‘rta falajlik): Sezilarli pasaygan qarshilik, faol harakat charchoqli. **2 ball (Chuqur falajlik): Qarshilik keskin pasaygan, harakat sust. **1 ball (O‘ta chuqur falajlik): Qarshilik yo‘q, harakat minimal. **0 ball (Plegiya): Faol harakatlar yo‘q."
  },
  {
    "question": "Bilet 3. Yozuvchi patologik reflekslar nima va qanday tekshiriladi?",
    "answer": "Yozuvchi patologik reflekslar: Markaziy piramidal yadro va uning yo‘llari zararlanishi tufayli yuzaga keladigan reflekslar bo‘lib, faqat oyoqlarda tekshiriladi. **1. Babinskiy refleksi:** Oyoq panjasining tagi pastdan yuqoriga qarab to‘g‘nog‘ichning o‘tmas qismi bilan chiziladi. Natija: bosh barmoq orqaga qayriladi, qolgan barmoqlar yelpig‘ichsimon yoyiladi. **2. Oppengeym refleksi:** Boldirning old yuzasi bo‘ylab bosh va ko‘rsatkich barmoqlar tizzadan pastga qarab yurgiziladi. Natija: Babinskiy refleksiga o‘xshash. **3. Gordon refleksi:** Boldir muskuli qo‘l bilan qisiladi. Natija: Babinskiy refleksiga o‘xshash. **4. Sheffer refleksi:** Axill payi qo‘l bilan qisiladi. Natija: Babinskiy refleksiga o‘xshash."
  },
  {
    "question": "Bilet 4. Passiv harakat (tonus)ni qanday tekshirish kerak?",
    "answer": "Passiv harakat (tonus)ni tekshirish: **1. Ta'rif:** Passiv harakatlar – bu bemorning bo‘g‘imlarida vrach tomonidan bajariladigan harakatlardir. Bemordan faol harakat qilmasdan tinch o‘tirishi so‘raladi. **2. Maqsad:** Harakatlar hajmi va muskullar tonusini baholash. **3. Farqi:** Faol harakatlarni bemor o‘zi mustaqil bajaradi, passiv harakatlarni esa vrach bemorda bajaraydi. **4. Cheklov sabablari:** Bo‘g‘im kontrakturasi, suyak jarohati, pay cho‘zilishi, yoki muskullarning spastik yoki plastik gipertonusi passiv harakatlarni cheklashi mumkin. **Misol:** Agar bemorda miya insultidan keyin spastik falaj rivojlangan bo‘lsa, vrach uning oyoqlarini passiv tarzda bukish va yoyish jarayonida qarshilik sezishi mumkin. Bu spastik tonusning belgisi bo‘lib, passiv harakatlarni cheklaydi."
  },
  {
    "question": "Bilet 5. Ko‘z qorachig‘i reflekslarini qanday tekshirish mumkin?",
    "answer": "Qorachiqlarni tekshirish: Sog‘lom odamda qorachiqlar ko‘zning o‘rtasida simmetrik joylashib, diametri deyarli bir xil bo‘ladi. Qorachiqning torayishi mioz, kengayishi esa midriaz deb ataladi. Agar bir ko‘zda qorachiq toraysa, ikkinchi ko‘zda kengaysa, bu holat anizokoriya deb ataladi va bu III nervning parasimpatik innervatsiyasi yoki ko‘zning simpatik innervatsiyasi (C8-Th1) buzilishiga bog‘liq bo‘lishi mumkin. Qorachiqlar funksiyalarini tekshirish: **1. Yorug‘likka reaksiyasi:** Qorachiq yorug‘likda torayadi, qorong‘ilikda kengayadi. **2. Konvergensiyaga reaksiyasi:** Bemorni ro‘parasida ushlab turilgan barmoqqa qarashga chaqiring. Barmoqni asta-sekin ikkala qoshi o‘rtasiga yaqinlashtiring. Konvergensiya (ko‘zlarning bir-biriga yaqinlashishi) ro‘y beradi. **3. Akkomodatsiyaga reaksiyasi:** Kaftni ko‘zga berkitganda qorachiq kengayadi, keyin yorug‘lik tushganda torayadi. Agar hamkor reaksiyasi mavjud bo‘lsa, bir ko‘z qorachiq kengayganda, boshqa ko‘zda ham kengayish kuzatiladi."
  },
  {
    "question": "Bilet 6. Teri reflekslarini qanday tekshirish kerak?",
    "answer": "Teri reflekslarini tekshirish: 1. Qorin reflekslari: **Yuqori qorin refleksi:** Qorin terisi pastki qovurg‘a yoyi bo‘ylab ichkariga chiziladi. Bu sohada qorin devori muskullari qisqaradi. Refleks yoyi tutashgan soha: Th7-Th8 spinal segmentlar. **O‘rta qorin refleksi:** Qorin terisi kindik tomonga qarab chiziladi. Bu sohada qorin devori muskullari qisqaradi. Refleks yoyi tutashgan soha: Th9-Th10 spinal segmentlar. **Pastki qorin refleksi:** Qorin terisi chov burmasining yuqori qismi bo‘ylab ichkariga chiziladi. Bu sohada qorin devori muskullari qisqaradi. Refleks yoyi tutashgan soha: Th11-Th12 spinal segmentlar. **Eslatma:** Bolalarda qorin reflekslari 5-6 oyga to‘lgandan keyin chaqiriladi. **2. Anal refleksi** Orqa teshik yoniga o'tmas nina tegiziladi. Natijada m. sphincter ani externus qisqarib, orqa teshik torayadi. Refleks yoyi tutashgan soha: S4-S5 spinal segmentlar. **3. Oyoq kafti refleksi** Oyoq kafti pastdan yuqoriga qarab chiziladi. Natijada barmoqlar bukiladi. Refleks yoyi tutashgan soha: L5-S1 spinal segmentlar."
  },
  {
    "question": "Bilet 7. Harakat sferasini qanday tekshirish mumkin?",
    "answer": "Harakat sferasi tekshirilganda, muskul kuchi, harakat hajmi va tonusni baholash orqali umumiy nevrologik holat aniqlanadi. **1. Muskul kuchini tekshirish** Bemor passiv harakatlarga qarshilik ko‘rsatishi so‘raladi. Muskul kuchi qarshilik darajasiga qarab baholanadi. Baholash mezonlari: 5 ball: Harakatga to‘la qarshilik ko‘rsatiladi (norma). 4 ball: Qarshilik ozgina sustlashgan, faqat charchash kuzatiladi. 3 ball: Qarshilik sezilarli darajada pasaygan, faqat sust harakatlar mavjud. 2 ball: Qarshilik keskin pasaygan, faol harakatlar sustlashgan. 1 ball: Qarshilik yo‘q, faqat bilinar-bilinmas harakatlar mavjud. 0 ball: Faol harakatlar umuman yo‘q (plegiya). **2. Harakat hajmini tekshirish** Bo‘g‘imlarning faol harakatlarini bemorning o‘zi amalga oshiradi, passiv harakatlarni esa vrach tekshiradi. Harakat hajmi bo‘g‘im kontrakturasi, muskullarning gipertonusi yoki jarohat tufayli cheklanishi mumkin. **3. Tonusni tekshirish** Muskullar tonusining tekshirilishi passiv harakatlar orqali amalga oshiriladi. Spastik yoki plastika gipertonuslarining mavjudligi, bo‘g‘imlarning qattiqligi va harakatlarning cheklanishi ko‘rib chiqiladi. ******QISQASI BEMORNI TURIB YURISHINI KOʻRIB UNI KUZATASIZ SHU TIPIK MISOL.******"
  },
  {
    "question": "Bilet 8. Ko‘ruv o‘tkirligi va rang ajratishni qanday tekshirish kerak?",
    "answer": "Ko‘ruv o‘tkirligini tekshirishda bemor 6 metr masofadan harflarni yoki simvollarning o‘lchamini aniqlashi kerak. Rang ajratish tekshiruvi uchun bemorga rangli jismlar ko‘rsatiladi va ranglarni ajratish so‘raladi."
  },
  {
    "question": "Bilet 9. VII juft bosh miya nervini qanday tekshirish kerak?",
    "answer": "VII juft bosh miya nervini (yuz nervini) tekshirishda bemorning yuz ifodalariga e‘tibor beriladi. Bemorga ko‘zlarini yummoq, tabassum qilmoq, tishlarini koʻrsatmoq, lablarni choʻchchaytirish so‘raladi. Simmetrikligi baholanadi. Agar oʻzgarish boʻlsa nerv zararlangan boʻladi."
  },
  {
    "question": "Bilet 10. V juft bosh miya nervini qanday tekshirish kerak?",
    "answer": "V juft bosh miya nervini (uch shoxli nervini) tekshirishda asosan yuz muskullarini holatiga baho beriladi. Masalan: 1. Korneal refleks: Ko'zning shox pardasi momiq paxta uchi bilan ta’sirlantiriladi. Qovoqlar qisqarib (m. orbicularis oculi) ko'z yumiladi. 2. Mandibulyar refleks: Vrach jag‘ga zarba berib, mandibulada qisqarishni chaqiradi. 3. Chaynov muskullari: labini choʻchchaytirish yoki tishini koʻrsatish soʻraladi. Normada simmetrik boʻlishi kerak. Atrofiya: Muskullarda atrofiya yoki kichrayish bo‘lsa, bu nevropatiya mavjudligini bildiradi."
  },
  {
    "question": "Bilet 11. Exo-EG tekshirish usuli qanday amalga oshiriladi?",
    "answer": "Exo-EG (ekoensefalografiya) – bosh miya patologiyalarini ultratovush yordamida aniqlovchi usul. Amalga oshirish tartibi: 1. Bemor tayyorlanadi: Yotgan yoki o‘tirgan holatda, boshni harakatsiz tutadi. 2. Datchik joylashtiriladi: Boshning o‘ng va chap tomonlariga maxsus gel bilan qo‘yiladi. 3. Signal o‘tkaziladi: Ultrasonik to‘lqinlar miyaning aksini qayd qiladi. 4. Natija tahlili: Grafigida miya tuzilmalarining simmetriyasi yoki patologiyalar ko‘rinadi. Aniqlaydi: O‘sma, qon quyilishi.Ichki bosim oshishi.Miya shikastlanishlari va qon aylanish buzilishlari.Afzalliklari: Og‘riqsiz, xavfsiz, tez bajariladi."
  },
  {
    "question": "Bilet 12. Chuqur sezgini qanday tekshirish mumkin?",
    "answer": "Chuqur sezgini tekshirish: **1. Passiv harakat sezgisi:** Sinaluvchining ko‘zlarini yumilgan holatda barmoqlari pastga, tepaga yoki yon tomonga bukiladi harakat yo‘nalishini aytadi. **2. Vibratsiya sezgisi:** Kamerton titratilib, suyak o‘simtasiga qo‘yiladi. Sinaluvchi vibratsiyani sezayotganini bildiradi. (kamerton deb GOOGLE ga yozing rasmi chiqadi zoʻr tushunasiz.) **3. Kinestetik sezgi:** Teridan burma hosil qilinib, oldinga yoki orqaga siljitiladi. Sinaluvchi harakat yo‘nalishini aytadi. **4. Fazodagi holat sezgisi:** Qo‘l yoki oyoq ma’lum holatga keltiriladi. Sinaluvchi bu holatni boshqa qo‘l yoki oyoqda takrorlaydi. **5. Bosim va sezgisi:** Bosim: Tanaga bosiladi va tegishdan farqi aniqlanadi."
  },
  {
    "question": "Bilet 13. Yuzaki sezgini qanday tekshirish mumkin?",
    "answer": "Yuzaki sezgini tekshirishda bemorning terisiga engil qichish yoki siqish orqali sezgisi aniqlanadi. Bemor terining turli qismlarida sezgi yo‘qolgan bo‘lsa, bu muammo haqida ma‘lumot beradi."
  },
  {
    "question": "Bilet 14. Murakkab sezgi turlarini qanday tekshirish mumkin?",
    "answer": "Murakkab sezgi turlarini tekshirishda, bemorga terining bir qismini qichishtirish, qarshi ta‘sirlar ko‘rsatish va bu sezgini to‘g‘ri anglash so‘raladi. Bunday testlar turli sezgi turlarining birgalikda ishlashini ko‘rsatadi."
  },
  {
    "question": "Bilet 15. XI juft bosh miya nervini qanday tekshirish kerak?",
    "answer": "XI juft bosh miya nervi, yani aksessor nervini tekshirishda, bemorning boshini harakatlantirish va yelkalari ustida kuch qo‘llash so‘raladi. Agar yelka ko‘tarilishi yoki boshni harakatlantirishda og‘riq yoki kuchlanish sezilsa, bu nervning zararlanishini ko‘rsatadi."
  },
  {
    "question": "Bilet 16. III, IV, VI juft bosh miya nervlarini qanday tekshirish kerak?",
    "answer": "III, IV va VI juft bosh miya nervlarini tekshirishda bemorning ko‘z harakatlari va o‘zgartirilgan ko‘z qorachig‘ini tekshirish kerak. Bu nervlar ko‘zning harakati va qorachikning javobiga ta‘sir qiladi."
  },
  {
    "question": "Bilet 17. Ekstrapiramidal tizimni qanday tekshirish kerak?",
    "answer": "Ekstrapiramidal tizimni tekshirishda bemorning motorik funksiyalari, masalan, yurish va koordinatsiyasi aniqlanadi. Ekstrapiramidal tizimga tegishli buzilishlar kasalliklarida, masalan, Parkinson kasalligida, titrash yoki qo‘zg‘alish kuzatiladi."
  },
  {
    "question": "Bilet 18. XII juft bosh miya nervini qanday tekshirish kerak?",
    "answer": "XII juft bosh miya nervini tekshirishda bemorning tilini ko‘rsatishi va uni harakatlantirishi so‘raladi. Agar tilning bir tomonida harakat cheklangan bo‘lsa yoki boshqa alomatlar bo‘lsa, bu nervning zararlanganini ko‘rsatadi."
  },
  {
    "question": "Bilet 19. Ko‘z tubini ko‘rinishi va patologiyadagi o‘zgarishlarni qanday tekshirish mumkin?",
    "answer": "Ko‘z tubini tekshirish uchun oftalmoskop yordamida ko‘zning orqa tomonidagi tomirlarni va tibbiy o‘zgarishlarni ko‘rish kerak. Patologik o‘zgarishlar, masalan, gipertoniya (yuksek qon bosimi) tufayli ko‘zning tomirlarida kengayish yoki torayish, shuningdek, diskni shishishi yoki qan to‘planishi kabi alomatlar bo‘lishi mumkin. Ko‘z tubini tekshirish miya va ko‘z asabining patologiyasini aniqlashda yordam beradi."
  },
 {
    "question": "Bilet 20. Pay reflekslarini qanday tekshirish kerak?",
    "answer": "Pay refleksi tekshirilganda, bemorning oyoqlari yoki qo‘llariga zarba berish orqali refleks javoblarini tekshiriladi. Bu refleks, odatda, siyatik yoki femoral nerv zararlanishi bilan bog‘liq bo‘lishi mumkin."
  },
  {
    "question": "Bilet 21. Ko‘ruv maydonini qanday tekshirish kerak?",
    "answer": "Ko‘ruv maydonini tekshirishda bemor ko‘z oldida, bir nuqtada ko‘rish maydonini aniqlashga harakat qiladi. Bemorning ko‘rish maydoni toraygan bo‘lsa, bu ko‘ruv nervining yoki miya qismlarining zararlanganligini ko‘rsatishi mumkin."
  },
  {
    "question": "Bilet 22. I juft bosh miya nervini qanday tekshirish kerak?",
    "answer": "I juft bosh miya nervini tekshirishda bemor olfaktor (hid sezish) funktsiyasini tekshiradi. Bemorga biror bir hidni ifodalash so‘raladi, va agar u hidni sezmasa, bu nervning zararlanganligini anglatadi."
  },
  {
    "question": "Bilet 23. Miyacha yarimsharlari faoliyatini qanday tekshirish mumkin?",
    "answer": "Miyacha yarimsharlari faoliyatini tekshirishda bemorning muloqotdagi, motorik va sezgisel javoblarini tekshiriladi. Agar bemor ko‘rsatilgan harakatni bajarishda qiyinchilikka duch kelsa yoki sezgi buzilsa, bu miyacha yarimsharlarining faoliyatidagi muammo bo‘lishi mumkin."
  },
  {
    "question": "Bilet 24. EEG tekshirish usuli qanday amalga oshiriladi?",
    "answer": "EEG (elektroensefalografiya) tekshiruvi, bemorning miya faoliyatini o‘lchash uchun boshga maxsus elektrodlar qo‘yish orqali amalga oshiriladi. Bu tekshiruv miya faoliyatining normalligi yoki patologik o‘zgarishlarini aniqlashda yordam beradi."
  },
  {
    "question": "Bilet 25. Miyacha chivalchangi faoliyatini qanday tekshirish mumkin?",
    "answer": "Miyacha chivalchangi faoliyatini tekshirishda bemorning muvozanat va koordinatsiyasi tekshiriladi. Bemorga yuzlab turli harakatlarni bajarish so‘raladi va harakatlar uzilishlar bilan yoki titrash bilan yuzaga kelishi mumkin."
  },
  {
    "question": "Bilet 26. Kompyuter tomografiyasi (KT, MSKT) tekshirish usuli qanday amalga oshiriladi?",
    "answer": "Kompyuter tomografiyasi (KT) va multispiral KT (MSKT) tekshiruvi, bemorning bosh miyasini kesilgan tasvirlarda ko‘rsatadi. Bu usul yordamida miya shishlari, qon ketishlari yoki bosh miya strukturasi bilan bog‘liq patologiyalarni aniqlash mumkin."
  },
  {
    "question": "Bilet 27. Orqa miyasi yo‘qligi tahlili (tarkibi) qanday amalga oshiriladi?",
    "answer": "Orqa miyasi yo‘qligi tahlili (likvor) orqa miya punksiyasi yordamida amalga oshiriladi. Likvor tahlili, asosan, infeksiyalar, qon ketishlari yoki neyrodegenerativ kasalliklarni aniqlashda foydalidir."
  },
  {
    "question": "Bilet 28. Vegetativ asab tizimini qanday tekshirish usullari mavjud?",
    "answer": "Vegetativ asab tizimining tekshiruvi, bemorning yurak urishi, qon bosimi, terlash, va nafas olish kabi avtomatik funktsiyalarini tekshirishni o‘z ichiga oladi. Bu tizimning buzilishi, ko‘pincha giperkinez, aritmiyalar yoki boshqa vegetativ alomatlarni ko‘rsatadi."
  },
  {
    "question": "Bilet 29. Orqa miya punksiyasini qilish texnikasi qanday amalga oshiriladi?",
    "answer": "Orqa miya punksiyasi, bemorning bel sohasida joylashgan orqa miya suyuqligini olish uchun maxsus igna yordamida bajariladi. Bu jarayon neyroinfeksiya, miya shishlari, yoki miyaga zarar yetgan holatlarni aniqlashda qo‘llaniladi."
  }
];
