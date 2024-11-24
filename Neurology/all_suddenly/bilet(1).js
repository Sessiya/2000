const tickets = [
  {
    question: "Bilet 1. Bukuvchi patologik reflekslar nima va qanday tekshiriladi?"
    answer: "Bukuvchi patologik reflekslar (yoki Babinski refleksi) asab tizimidagi buzilishlarni ko`rsatadi. Bu refleksi tekshirishda, oyoqning ichki yuzasiga o`tkir narsa bilan sanchiladi. Agar oyoqning katta barmog`i yuqoriga ko`tarilsa va boshqa barmoqlar yoyilsa, bu patologik refleks deb hisoblanadi."
  },
  {
    question: "Bilet 2. Mushak kuchini qanday tekshirish mumkin?"
    answer: "Mushak kuchi tekshirilganda, bemordan qo`l yoki oyoqlarini qarshi kuch bilan ushlab turish so`raladi. Har bir mushak guruhining kuchi 5 ballik tizim bo`yicha baholanadi: 0 – mushaklar faoliyati yo`q, 5 – normal kuch."
  },
  {
    question: "Bilet 3. Yozuvchi patologik reflekslar nima va qanday tekshiriladi?"
    answer: "Yozuvchi patologik reflekslar (masalan, Rossolimo yoki Oppenheim refleksi) oyoq barmog`iga yoki tekis joyga narsa bosish orqali tekshiriladi. Agar oyoqning katta barmog`i yuqoriga ko`tarilsa va qolgan barmoqlar yoyilsa, bu yozuvchi patologik refleks hisoblanadi."
  },
  {
    question: "Bilet 4. Passiv harakat (tonus)ni qanday tekshirish kerak?"
    answer: "Passiv harakat yoki tonusni tekshirishda bemorning a`zolari passiv tarzda, ya`ni bemor harakat qilmasdan, shifokor tomonidan harakatga keltiriladi. Muskullarni tekshirishda normal tonus bo`lishi kerak, bu esa mushaklarning moslashuvchanligi va bo`shashishini anglatadi."
  },
  {
    question: "Bilet 5. Ko`z qorachig`i reflekslarini qanday tekshirish mumkin?"
    answer: "Ko`z qorachig`ini tekshirishda bemorning qorachig`ining yoritishga qanday javob berishini ko`rish kerak. Qorachiq yoritilganida torayishi kerak, bu norma hisoblanadi. Agar qorachiq normal javob bermasa, bu asab tizimi bilan bog`liq muammolarni ko`rsatishi mumkin."
  },
  {
    question: "Bilet 6. Teri reflekslarini qanday tekshirish kerak?"
    answer: "Teri reflekslarini tekshirishda bemorning tanasiga yengil qichish yoki siqish orqali sezgi javobini tekshiriladi. Misol uchun, bulbo-kavernoz refleksi tekshiriladi, bunda uylanish a`zolariga siqish ta`siri o`tkaziladi."
  },
  {
    question: "Bilet 7. Harakat sferasini qanday tekshirish mumkin?"
    answer: "Harakat sferasini tekshirishda bemorning murakkab harakatlarni bajarishi tekshiriladi, masalan, bemorga qolgan a`zolarni turli holatlarda harakatlantirish so`raladi. Bu harakatlarning o`zaro muvofiqligi, kuchi va koordinatsiyasi aniqlanadi."
  },
  {
    question: "Bilet 8. Ko`ruv o`tkirligi va rang ajratishni qanday tekshirish kerak?"
    answer: "Ko`ruv o`tkirligini tekshirishda bemor 6 metr masofadan harflarni yoki simvollarning o`lchamini aniqlashi kerak. Rang ajratish tekshiruvi uchun bemorga rangli jismlar ko`rsatiladi va ranglarni ajratish so`raladi."
  },
  {
    question: "Bilet 9. VII juft bosh miya nervini qanday tekshirish kerak?"
    answer: "VII juft bosh miya nervini tekshirishda bemorning yuz ifodalariga e`tibor beriladi. Bemorga ko`zlarini yummoq, tabassum qilmoq yoki og`izni bir tomonlama harakatlantirish so`raladi. Yuzning bir tomonida ifodaning yo`qligi yoki zaifligi nervning zararlanganini ko`rsatadi."
  },
  {
    question: "Bilet 10. V juft bosh miya nervini qanday tekshirish kerak?"
    answer: "V juft bosh miya nervini tekshirishda bemorga yuzning turli qismlariga yengil tegish so`raladi. Bemor sezgini yo`qotgan yoki zaiflashgan bo`lsa, bu trigeminal nervning zararlanganini anglatadi."
  },
  {
    question: "Bilet 11. Exo-EG tekshirish usuli qanday amalga oshiriladi?"
    answer: "Exo-EG (ekstremal elektroensefalografiya) tekshirishda bemorning boshiga maxsus elektrodlar joylashtiriladi, bu usul asab tizimining faoliyatini tekshirish uchun qo`llaniladi. Bu usul bilan miya faoliyati va sezgirlik o`zgarishlari aniqlanadi."
  },
  {
    question: "Bilet 12. Chuqur sezgini qanday tekshirish mumkin?"
    answer: "Chuqur sezgini tekshirishda bemorga yopiq ko`zlar bilan yoki har qanday sezgirlikni yo`qotish orqali mushaklar yoki bo`g`inlar joylashishini aniqlash so`raladi. Bemor bo`g`inlar yoki qo`llarning holatini to`g`ri aytishi kerak."
  },
  {
    question: "Bilet 13. Yuzaki sezgini qanday tekshirish mumkin?"
    answer: "Yuzaki sezgini tekshirishda bemorning terisiga engil qichish yoki siqish orqali sezgisi aniqlanadi. Bemor terining turli qismlarida sezgi yo`qolgan bo`lsa, bu muammo haqida ma`lumot beradi."
  },
  {
    question: "Bilet 14. Murakkab sezgi turlarini qanday tekshirish mumkin?"
    answer: "Murakkab sezgi turlarini tekshirishda, bemorga terining bir qismini qichishtirish, qarshi ta`sirlar ko`rsatish va bu sezgini to`g`ri anglash so`raladi. Bunday testlar turli sezgi turlarining birgalikda ishlashini ko`rsatadi."
  },
  {
    question: "Bilet 15. XI juft bosh miya nervini qanday tekshirish kerak?"
    answer: "XI juft bosh miya nervi, yani aksessor nervini tekshirishda, bemorning boshini harakatlantirish va yelkalari ustida kuch qo`llash so`raladi. Agar yelka ko`tarilishi yoki boshni harakatlantirishda og`riq yoki kuchlanish sezilsa, bu nervning zararlanishini ko`rsatadi."
  },
  {
    question: "Bilet 16. III, IV, VI juft bosh miya nervlarini qanday tekshirish kerak?"
    answer: "III, IV va VI juft bosh miya nervlarini tekshirishda bemorning ko`z harakatlari va o`zgartirilgan ko`z qorachig`ini tekshirish kerak. Bu nervlar ko`zning harakati va qorachikning javobiga ta`sir qiladi."
  },
  {
    question: "Bilet 17. Ekstrapiramidal tizimni qanday tekshirish kerak?"
    answer: "Ekstrapiramidal tizimni tekshirishda bemorning motorik funksiyalari, masalan, yurish va koordinatsiyasi aniqlanadi. Ekstrapiramidal tizimga tegishli buzilishlar kasalliklarida, masalan, Parkinson kasalligida, titrash yoki qo`zg`alish kuzatiladi."
  },
  {
    question: "Bilet 18. XII juft bosh miya nervini qanday tekshirish kerak?"
    answer: "XII juft bosh miya nervini tekshirishda bemorning tilini ko`rsatishi va uni harakatlantirishi so`raladi. Agar tilning bir tomonida harakat cheklangan bo`lsa yoki boshqa alomatlar bo`lsa, bu nervning zararlanganini ko`rsatadi."
  },
  {
    question: "Bilet 19. Ko`z tubini ko`rinishi va patologiyadagi o`zgarishlarni qanday tekshirish mumkin?"
    answer: "Ko`z tubini tekshirish uchun oftalmoskop yordamida ko`zning orqa tomonidagi tomirlarni va tibbiy o`zgarishlarni ko`rish kerak. Patologik o`zgarishlar, masalan, gipertoniya (yuksek qon bosimi) tufayli ko`zning tomirlarida kengayish yoki torayish, shuningdek, diskni shishishi yoki qan to`planishi kabi alomatlar bo`lishi mumkin. Ko`z tubini tekshirish miya va ko`z asabining patologiyasini aniqlashda yordam beradi."
  },
 {
    question: "Bilet 20. Pay reflekslarini qanday tekshirish kerak?"
    answer: "Pay refleksi tekshirilganda, bemorning oyoqlari yoki qo`llariga zarba berish orqali refleks javoblarini tekshiriladi. Bu refleks, odatda, siyatik yoki femoral nerv zararlanishi bilan bog`liq bo`lishi mumkin."
  },
  {
    question: "Bilet 21. Ko`ruv maydonini qanday tekshirish kerak?"
    answer: "Ko`ruv maydonini tekshirishda bemor ko`z oldida, bir nuqtada ko`rish maydonini aniqlashga harakat qiladi. Bemorning ko`rish maydoni toraygan bo`lsa, bu ko`ruv nervining yoki miya qismlarining zararlanganligini ko`rsatishi mumkin."
  },
  {
    question: "Bilet 22. I juft bosh miya nervini qanday tekshirish kerak?"
    answer: "I juft bosh miya nervini tekshirishda bemor olfaktor (hid sezish) funktsiyasini tekshiradi. Bemorga biror bir hidni ifodalash so`raladi, va agar u hidni sezmasa, bu nervning zararlanganligini anglatadi."
  },
  {
    question: "Bilet 23. Miyacha yarimsharlari faoliyatini qanday tekshirish mumkin?"
    answer: "Miyacha yarimsharlari faoliyatini tekshirishda bemorning muloqotdagi, motorik va sezgisel javoblarini tekshiriladi. Agar bemor ko`rsatilgan harakatni bajarishda qiyinchilikka duch kelsa yoki sezgi buzilsa, bu miyacha yarimsharlarining faoliyatidagi muammo bo`lishi mumkin."
  },
  {
    question: "Bilet 24. EEG tekshirish usuli qanday amalga oshiriladi?"
    answer: "EEG (elektroensefalografiya) tekshiruvi, bemorning miya faoliyatini o`lchash uchun boshga maxsus elektrodlar qo`yish orqali amalga oshiriladi. Bu tekshiruv miya faoliyatining normalligi yoki patologik o`zgarishlarini aniqlashda yordam beradi."
  },
  {
    question: "Bilet 25. Miyacha chivalchangi faoliyatini qanday tekshirish mumkin?"
    answer: "Miyacha chivalchangi faoliyatini tekshirishda bemorning muvozanat va koordinatsiyasi tekshiriladi. Bemorga yuzlab turli harakatlarni bajarish so`raladi va harakatlar uzilishlar bilan yoki titrash bilan yuzaga kelishi mumkin."
  },
  {
    question: "Bilet 26. Kompyuter tomografiyasi (KT, MSKT) tekshirish usuli qanday amalga oshiriladi?"
    answer: "Kompyuter tomografiyasi (KT) va multispiral KT (MSKT) tekshiruvi, bemorning bosh miyasini kesilgan tasvirlarda ko`rsatadi. Bu usul yordamida miya shishlari, qon ketishlari yoki bosh miya strukturasi bilan bog`liq patologiyalarni aniqlash mumkin."
  },
  {
    question: "Bilet 27. Orqa miyasi yo`qligi tahlili (tarkibi) qanday amalga oshiriladi?"
    answer: "Orqa miyasi yo`qligi tahlili (likvor) orqa miya punksiyasi yordamida amalga oshiriladi. Likvor tahlili, asosan, infeksiyalar, qon ketishlari yoki neyrodegenerativ kasalliklarni aniqlashda foydalidir."
  },
  {
    question: "Bilet 28. Vegetativ asab tizimini qanday tekshirish usullari mavjud?"
    answer: "Vegetativ asab tizimining tekshiruvi, bemorning yurak urishi, qon bosimi, terlash, va nafas olish kabi avtomatik funktsiyalarini tekshirishni o`z ichiga oladi. Bu tizimning buzilishi, ko`pincha giperkinez, aritmiyalar yoki boshqa vegetativ alomatlarni ko`rsatadi."
  },
  {
    question: "Bilet 29. Orqa miya punksiyasini qilish texnikasi qanday amalga oshiriladi?"
    answer: "Orqa miya punksiyasi, bemorning bel sohasida joylashgan orqa miya suyuqligini olish uchun maxsus igna yordamida bajariladi. Bu jarayon neyroinfeksiya, miya shishlari, yoki miyaga zarar yetgan holatlarni aniqlashda qo`llaniladi."
  }
];