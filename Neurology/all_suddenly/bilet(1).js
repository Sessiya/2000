const tickets = [
  {
    "question": "Bilet 1. Miyachada joylashgan yadrolarni aytib bering.",
    "answer": "Miyacha ichida quyidagi asosiy yadrolar joylashgan: \n1. **Dentat yadro** (Nucleus dentatus) – murakkab shakldagi burmalar bilan qoplangan yadro. U murakkab harakatlarni muvofiqlashtirishda ishtirok etadi.\n2. **Globoz yadro** (Nucleus globosus) – muvozanatni saqlash va pozitsion boshqaruvga yordam beradi.\n3. **Fastigi yadro** (Nucleus fastigii) – tananing holatini barqaror saqlashda muhim rol o'ynaydi.\n4. **Embrional yadro** (Nucleus emboliformis) – harakatning silliq va muvofiqlashtirilgan bo'lishini ta'minlaydi."
  },
  {
    "question": "Bilet 2. Bosh miya yarimsharlari poʻstlogʻining anatomiyasi (egat va pushtalar).",
    "answer": "Bosh miya yarimsharlari poʻstlogʻi (cortex cerebri) bir qancha egat va pushtalardan iborat:\n- **Markaziy egat** (Sulcus centralis): Peshona va tepa sohalarini ajratib turadi.\n- **Yon egat** (Sulcus lateralis): Peshona va chakka sohalarini ajratadi.\n- **Tepa-ensa egati** (Sulcus parieto-occipitalis): Tepa va ensa sohalarini ajratadi.\n\nPushtalar:\n- **Oldingi markaziy pushta** (Gyrus precentralis): Harakat markazi joylashgan.\n- **Orqa markaziy pushta** (Gyrus postcentralis): Sezgi markazi joylashgan.\n- **Chakka pushtalari**: Eshitish va nutqni qayta ishlash markazlari joylashgan.\n- **Ensa pushtalari**: Ko'rish markazlari joylashgan."
  },
  {
    "question": "Bilet 3. Bosh miyaning tepa va ensa soxalarida qanday markazlar joylashgan?",
    "answer": "Bosh miyaning tepa va ensa sohalarida quyidagi markazlar joylashgan:\n- **Tepa sohasi** (Lobus parietalis): Sezgi (somatosensor) markazi joylashgan.\n- **Ensa sohasi** (Lobus occipitalis): Ko'rish markazlari joylashgan bo'lib, ko'rish signallarini qayta ishlash bilan shug'ullanadi."
  },
  {
    "question": "Bilet 4. Striar tizimning tarkibiy qismlari, anatomiya va fiziologiyasi.",
    "answer": "Striar tizim bosh miya po‘stloq osti yadrolaridan iborat:\n1. **Kuyka yadro** (Nucleus caudatus)\n2. **Sharchasimon yadro** (Putamen)\n3. **Pallidus** (Globos pallidus)\n\nUlarning asosiy funksiyasi harakatlarni rejalashtirish, muvofiqlashtirish va avtomatlashtirishdan iborat. Shuningdek, ularning ish faoliyati dopamin modulatorlari bilan boshqariladi."
  },
  {
    "question": "Bilet 5. Miyacha anatomiyasini aytib bering.",
    "answer": "Miyacha (Cerebellum) ikki yarimshardan iborat bo‘lib, ular o‘rtasida **qurt** (Vermis) joylashgan. Miyacha tashqi qismida kulrang modda (po‘stloq) va ichki qismida oq modda (yadro va yo‘llar) mavjud. Miyacha asosiy funksiyalari – harakatlarni muvofiqlashtirish, muvozanatni saqlash va mushak tonusini boshqarish."
  },
  {
    "question": "Bilet 6. Bosh miya pardalari anatomiyasini aytib bering.",
    "answer": "Bosh miya pardalari uch qavatdan iborat:\n1. **Qattiq parda** (Dura mater): Tashqi qavat bo'lib, miya va suyaklarni o'rab turadi.\n2. **O'rgimchakto'r parda** (Arachnoidea mater): Dura mater va pia mater o'rtasida joylashgan, unda miya suyuqligi (likvor) oqadi.\n3. **Yumshoq parda** (Pia mater): Bosh miya yuzasiga yopishgan va qon tomirlar bilan boyitilgan."
  },
  {
    "question": "Bilet 7. Reflektor yoy anatomiyasini aytib bering.",
    "answer": "Reflektor yoy asosan quyidagi qismlardan iborat:\n1. **Reseptor**: Tashqi yoki ichki ta’sirni sezadi.\n2. **Afferent tolalar**: Signallarni markaziy asab tizimiga olib boradi.\n3. **Markaziy qism**: Orqa miya yoki bosh miyada joylashgan bo‘lib, signalni qayta ishlaydi.\n4. **Efferent tolalar**: Buyruqni effektorga olib boradi.\n5. **Effektor**: Buyruqni bajaruvchi organ (masalan, mushak yoki bez)."
  },
  {
    "question": "Bilet 8. Sezuvchi yullar xususiyatlari va tarkibiy tuzilish anatomiyasi.",
    "answer": "Sezuvchi yo‘llar (afferent yo‘llar) tanadagi sezgilarning bosh miya po‘stlog‘iga yetkazilishi uchun xizmat qiladi. Bu yo‘llar 3 neyronli tizimdan iborat:\n1. Periferik nervlardan miya yoki orqa miyaga signalni olib boruvchi neyron.\n2. Oraliq neyron: Orqa miya yoki miya yadrolaridan o‘tadi.\n3. Talamusdan bosh miya po‘stlog‘iga signal olib boruvchi neyron."
  },
  {
    "question": "Bilet 9. Orqa miya anatomiyasini aytib bering.",
    "answer": "Orqa miya (Medulla spinalis) umurtqa kanalida joylashgan. U quyidagi asosiy tuzilmalardan iborat:\n1. **Kulrang modda**: Neyronlarning tanalari joylashgan. Oldingi shoxlarda harakat neyronlari, orqa shoxlarda esa sezuvchi neyronlar bor.\n2. **Oq modda**: Neyronlarning aksonlaridan tashkil topgan. Unda ko'taruvchi (sezuvchi) va tushuvchi (harakat) yo'llar joylashgan.\n3. **Markaziy kanal**: Orqa miya ichida joylashib, miya suyuqligi bilan to'lgan.\n\nOrqa miya yuqori qismida uzunchoq miyaga ulanadi, pastki qismida esa filum terminale bilan tugaydi."
  },
  {
    "question": "Bilet 10. Po'stloq osti yadrolarini aytib bering.",
    "answer": "Bosh miyaning po'stloq osti yadrolari (bazal gangliyalar) quyidagilardan iborat:\n1. **Kuyka yadro** (Nucleus caudatus)\n2. **Sharchasimon yadro** (Putamen)\n3. **Pallidus** (Globos pallidus)\n4. **Amygdala** (Bodomcha tanacha): Emotsiyalar va xotiraga ta'sir ko'rsatadi.\n5. **Talamus**: Sensatsiyalarni qayta ishlash va uzatish bilan shug'ullanadi.\n\nUlarning asosiy funksiyalari harakatni boshqarish, hissiy reaksiyalar va xotiralarni tartibga solishdir."
  },
  {
    "question": "Bilet 11. Palidar tizim tarkibiy qismlari va funksiyasini aytib bering.",
    "answer": "Palidar tizim globos pallidus (pallidum)dan iborat. U harakatni muvofiqlashtirish, mushak tonusini tartibga solish va harakatlarning avtomatlashtirilgan shakllarini ta'minlaydi. Pallidum striar tizim bilan chambarchas bog'liq va dopamin yordamida boshqariladi."
  },
  {
    "question": "Bilet 12. Bosh miya yarim sharlaridagi po'stloqdagi xarakat markazlarining joylashuvi.",
    "answer": "Bosh miya yarim sharlarining po'stloq qismida xarakat markazlari oldingi markaziy pushtada (Gyrus precentralis) joylashgan. Bu hudud **Birlamchi motor maydon** deb ataladi va tananing harakatlarini boshqarish uchun javobgardir. Ushbu sohada homunkulus tarzida tananing har bir qismi vakillik qiladi."
  },
  {
    "question": "Bilet 13. Uzunchoq miya anatomiyasini aytib bering.",
    "answer": "Uzunchoq miya (Medulla oblongata) bosh miya va orqa miya o'rtasida joylashgan. Uning asosiy tuzilmalari:\n1. **Piramidalar**: Harakat yo'llari o'tadi.\n2. **Zaytun yadrolari** (Nuclei olivaris): Miyachaga signal uzatadi.\n3. Hayotiy markazlar (nafas olish va yurak-tomir markazlari) joylashgan.\n\nUzunchoq miya reflektor va o'tkazuvchi funksiyalarga ega."
  },
  {
    "question": "Bilet 14. Miya o'zagi tarkibiy tizimi anatomiyasini aytib bering.",
    "answer": "Miya o'zagi (Truncus encephali) quyidagi qismlardan iborat:\n1. **Uzunchoq miya** (Medulla oblongata)\n2. **Ko'prik** (Pons)\n3. **O'rta miya** (Mesencephalon)\n\nBu hududlar hayotiy reflekslarni boshqaradi, sezuvchi va harakat yo'llarini o'tkazadi va bosh miya nervlarining yadrolarini o'z ichiga oladi."
  },
  {
    "question": "Bilet 15. XII - juft bosh miya nervi anatomiyasini aytib bering.",
    "answer": "XII - juft bosh miya nervi **Gipoglossal nerv** (Nervus hypoglossus) deb ataladi. U til mushaklarini innervatsiya qiladi va til harakatlarini boshqaradi. Uning yadrosi uzunchoq miya ichida joylashgan."
  },
  {
    "question": "Bilet 16. IX-X- juft bosh miya nervining xarakat tolasini anatomiyasini aytib bering.",
    "answer": "IX (Glossopharyngeal) va X (Vagus) bosh miya nervlarining harakat tolalari uzunchoq miyada joylashgan yadrolardan kelib chiqadi. Ular yutish, tovush chiqarish va yurak faoliyatini boshqarishda ishtirok etadi."
  },
  {
    "question": "Bilet 17. I - juft bosh miya nervi anatomiyasini aytib bering.",
    "answer": "I - juft bosh miya nervi **Hid nervi** (Nervus olfactorius) bo‘lib, hidlarni sezish uchun javobgardir. Uning reseptorlari burun bo‘shlig‘ida joylashgan va axborotni bosh miyaning hid bulutlariga yetkazadi."
  },
  {
    "question": "Bilet 18. VII- juft bosh miya nervi anatomiyasini aytib bering.",
    "answer": "VII - juft bosh miya nervi **Yuz nervi** (Nervus facialis) deb ataladi. U yuz mushaklarining harakatlarini boshqaradi, tilning old qismidan ta'm sezish signallarini uzatadi va ayrim so'lak bezlarini innervatsiya qiladi."
  },
  {
    "question": "Bilet 19. V- juft bosh miya nervi anatomiyasini aytib bering.",
    "answer": "V - juft bosh miya nervi **Uch shoxli nerv** (Nervus trigeminus) bo'lib, uch bo'limdan iborat:\n1. Ko'z sohasi shoxi (Nervus ophthalmicus)\n2. Yuqori jag‘ shoxi (Nervus maxillaris)\n3. Pastki jag‘ shoxi (Nervus mandibularis)\n\nU yuzning sezgi va chaynash mushaklarining harakat innervatsiyasi uchun javob beradi."
  },
  {
    "question": "Bilet 20. III- juft bosh miya nervi anatomiyasini aytib bering.",
    "answer": "III - juft bosh miya nervi **Ko'z harakat nervi** (Nervus oculomotorius) deb ataladi. U ko'z harakatini ta'minlaydigan mushaklarni innervatsiya qiladi, shu jumladan yuqori qovoqni ko'tarish va ko'zni medialga harakatlantirish mushaklari. Uning yadrosi o'rta miya ichida joylashgan."
  },
  {
    "question": "Bilet 21. Ko'ruv nervi (I-juft nervi) anatomiyasini aytib bering.",
    "answer": "Ko'ruv nervi (Nervus opticus) retinadan keladigan optik signallarni bosh miyaga uzatadi. Bu nerv vizual axborotning birlamchi o'tkazuvchisi bo'lib, chiasma opticumda o'zaro kesishadi va miyaning ko'rish yo'liga o'tadi."
  },
  {
    "question": "Bilet 22. IV - juft bosh miya nervi anatomiyasini aytib bering.",
    "answer": "IV - juft bosh miya nervi **Blok nervi** (Nervus trochlearis) deb ataladi. U bitta mushak - yuqori qiyshiq mushakni innervatsiya qiladi, ko'zni pastga va lateralga harakatlantirishga yordam beradi. Nervning yadrosi o'rta miyada joylashgan."
  },
  {
    "question": "Bilet 23. VI - juft bosh miya nervi anatomiyasini aytib bering.",
    "answer": "VI - juft bosh miya nervi **Olib chiquvchi nerv** (Nervus abducens) deb ataladi. U ko'zning lateral to'g'ri mushagini innervatsiya qiladi, bu mushak ko'zni chetga harakatlantiradi. Uning yadrosi ko'prikda joylashgan."
  },
  {
    "question": "Bilet 24. IX-X- juft bosh miya nervining sezuvchi tolasini anatomiyasini aytib bering.",
    "answer": "IX (Glossopharyngeal) va X (Vagus) nervlarining sezuvchi tolalari til, tomoq, quloq va ichki organlardan axborotni yig'ib, uzunchoq miyaning sezuvchi yadrolariga uzatadi. IX nerv ta'm sezish, X nerv esa ichki organlardan signal uzatishda ishtirok etadi."
  },
  {
    "question": "Bilet 25. VIII - juft bosh miya nervining eshituv qismi anatomiyasini aytib bering.",
    "answer": "VIII - juft bosh miya nervining eshituv qismi **Koxlear nerv** deb ataladi. U ichki quloqning spiral organidan signal olib, uni eshitish markazlariga uzatadi. Bu nerv eshitish qobiliyatini ta'minlaydi."
  },
  {
    "question": "Bilet 26. VIII- juft bosh miya nervining muvozanat qismi anatomiyasini aytib bering.",
    "answer": "VIII - juft bosh miya nervining muvozanat qismi **Vestibulyar nerv** deb ataladi. U yarim doira kanallari va otolit organlaridan signal olib, boshning harakati va holatini boshqaruvchi markazlarga uzatadi."
  },
  {
    "question": "Bilet 1. Bukuvchi patologik reflekslar nima va qanday tekshiriladi?",
    "answer": "Bukuvchi patologik reflekslar (yoki Babinski refleksi) asab tizimidagi buzilishlarni ko‘rsatadi. Bu refleksi tekshirishda, oyoqning ichki yuzasiga o‘tkir narsa bilan sanchiladi. Agar oyoqning katta barmog‘i yuqoriga ko‘tarilsa va boshqa barmoqlar yoyilsa, bu patologik refleks deb hisoblanadi."
  },
  {
    "question": "Bilet 2. Mushak kuchini qanday tekshirish mumkin?",
    "answer": "Mushak kuchi tekshirilganda, bemordan qo‘l yoki oyoqlarini qarshi kuch bilan ushlab turish so‘raladi. Har bir mushak guruhining kuchi 5 ballik tizim bo‘yicha baholanadi: 0 – mushaklar faoliyati yo‘q, 5 – normal kuch."
  },
  {
    "question": "Bilet 3. Yozuvchi patologik reflekslar nima va qanday tekshiriladi?",
    "answer": "Yozuvchi patologik reflekslar (masalan, Rossolimo yoki Oppenheim refleksi) oyoq barmog‘iga yoki tekis joyga narsa bosish orqali tekshiriladi. Agar oyoqning katta barmog‘i yuqoriga ko‘tarilsa va qolgan barmoqlar yoyilsa, bu yozuvchi patologik refleks hisoblanadi."
  },
  {
    "question": "Bilet 4. Passiv harakat (tonus)ni qanday tekshirish kerak?",
    "answer": "Passiv harakat yoki tonusni tekshirishda bemorning a‘zolari passiv tarzda, ya‘ni bemor harakat qilmasdan, shifokor tomonidan harakatga keltiriladi. Muskullarni tekshirishda normal tonus bo‘lishi kerak, bu esa mushaklarning moslashuvchanligi va bo‘shashishini anglatadi."
  },
  {
    "question": "Bilet 5. Ko‘z qorachig‘i reflekslarini qanday tekshirish mumkin?",
    "answer": "Ko‘z qorachig‘ini tekshirishda bemorning qorachig‘ining yoritishga qanday javob berishini ko‘rish kerak. Qorachiq yoritilganida torayishi kerak, bu norma hisoblanadi. Agar qorachiq normal javob bermasa, bu asab tizimi bilan bog‘liq muammolarni ko‘rsatishi mumkin."
  },
  {
    "question": "Bilet 6. Teri reflekslarini qanday tekshirish kerak?",
    "answer": "Teri reflekslarini tekshirishda bemorning tanasiga yengil qichish yoki siqish orqali sezgi javobini tekshiriladi. Misol uchun, bulbo-kavernoz refleksi tekshiriladi, bunda uylanish a‘zolariga siqish ta‘siri o‘tkaziladi."
  },
  {
    "question": "Bilet 7. Harakat sferasini qanday tekshirish mumkin?",
    "answer": "Harakat sferasini tekshirishda bemorning murakkab harakatlarni bajarishi tekshiriladi, masalan, bemorga qolgan a‘zolarni turli holatlarda harakatlantirish so‘raladi. Bu harakatlarning o‘zaro muvofiqligi, kuchi va koordinatsiyasi aniqlanadi."
  },
  {
    "question": "Bilet 8. Ko‘ruv o‘tkirligi va rang ajratishni qanday tekshirish kerak?",
    "answer": "Ko‘ruv o‘tkirligini tekshirishda bemor 6 metr masofadan harflarni yoki simvollarning o‘lchamini aniqlashi kerak. Rang ajratish tekshiruvi uchun bemorga rangli jismlar ko‘rsatiladi va ranglarni ajratish so‘raladi."
  },
  {
    "question": "Bilet 9. VII juft bosh miya nervini qanday tekshirish kerak?",
    "answer": "VII juft bosh miya nervini tekshirishda bemorning yuz ifodalariga e‘tibor beriladi. Bemorga ko‘zlarini yummoq, tabassum qilmoq yoki og‘izni bir tomonlama harakatlantirish so‘raladi. Yuzning bir tomonida ifodaning yo‘qligi yoki zaifligi nervning zararlanganini ko‘rsatadi."
  },
  {
    "question": "Bilet 10. V juft bosh miya nervini qanday tekshirish kerak?",
    "answer": "V juft bosh miya nervini tekshirishda bemorga yuzning turli qismlariga yengil tegish so‘raladi. Bemor sezgini yo‘qotgan yoki zaiflashgan bo‘lsa, bu trigeminal nervning zararlanganini anglatadi."
  },
  {
    "question": "Bilet 11. Exo-EG tekshirish usuli qanday amalga oshiriladi?",
    "answer": "Exo-EG (ekstremal elektroensefalografiya) tekshirishda bemorning boshiga maxsus elektrodlar joylashtiriladi, bu usul asab tizimining faoliyatini tekshirish uchun qo‘llaniladi. Bu usul bilan miya faoliyati va sezgirlik o‘zgarishlari aniqlanadi."
  },
  {
    "question": "Bilet 12. Chuqur sezgini qanday tekshirish mumkin?",
    "answer": "Chuqur sezgini tekshirishda bemorga yopiq ko‘zlar bilan yoki har qanday sezgirlikni yo‘qotish orqali mushaklar yoki bo‘g‘inlar joylashishini aniqlash so‘raladi. Bemor bo‘g‘inlar yoki qo‘llarning holatini to‘g‘ri aytishi kerak."
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
  },
  {
    "question": "Bilet 1. Ishemik insultning klinikasi",
    "answer": "Ishemik insult — bu miyada qon oqimining to'silishi natijasida yuzaga keladigan holat. Bemorlar to'satdan bir tomonda kuchsizlik, yuz va qo'llarda asimmetriya, nutq buzilishi (afaziya), ko'rish qobiliyatining pasayishi kabi simptomlarni sezishadi. Bosh og'rig'i va bosh aylanishi tez-tez kuzatiladi, chunki miyaning qon bilan ta'minlanishi pasayganligi bois, bemor bosh aylanishi va anglash qobiliyatining yomonlashishiga ham duch kelishi mumkin. Shuningdek, **Babinski refleksi** (Babinskiy refleksi - bu nevrologik refleks bo'lib, oyoqning bosh barmog'i yuqoriga ko'tarilganda va boshqa barmoqlar oyoq tagining silanishiga javoban tashqariga chiqadi: (babinskiy sign deb qidiring chiqadi GOOGLE da) Babinskiy belgisi chaqaloqlarda va ikki yoshgacha bo'lgan bolalarda norma. Kattalarda patalogiya.), **nistagmus belgisi** (ko'zlarning tez-tez yoki noto'g'ri harakati), va **Rasmussen sindromi** (Rasmussen sindromi - miyaning bir yarmida yallig'lanish va buzilishlarni keltirib chiqaradigan kam uchraydi sindrom. belgilari: noto'g'ri harakatlar, titroq, spazm) kabi klinik ko'rinishlar kuzatilishi mumkin."
  },
  {
    "question": "Bilet 2. Gemorragik insultning klinikasi",
    "answer": "Gemorragik insult qon tomirlarining yirtilishi yoki yorilishi natijasida yuzaga keladi. Bemorlar kuchli bosh og'rig'i boʻladi, ba'zida qusish va bosh aylanishi kuzatiladi. Gemorragik insultda motor funksiyalarining yo'qolishi, ya'ni, gemiparez (tananing yarmini harakatini kuchaizligi) yoki gemiplegiya (tananing yarmini to'liq harakatsizligi), yuzning asimmetriyasi (masalan, yuzning bir tomoni tushib qolishi) bilan birga kuzatilishi mumkin. Koma holatiga tushib qolishi ham mumkin. Shuningdek: **Babinski refleksi** - (Babinskiy refleksi - bu nevrologik refleks bo'lib, oyoqning bosh barmog'i yuqoriga ko'tarilganda va boshqa barmoqlar oyoq tagining silanishiga javoban tashqariga chiqadi: (babinskiy sign deb qidiring chiqadi GOOGLE da) Babinskiy belgisi chaqaloqlarda va ikki yoshgacha bo'lgan bolalarda norma. Kattalarda patalogiya.), **Kernig belgilari** - (bemorni chalqancha yotkizib tizzasini buktirsak bukishda qiynalib boshini koʻtarib oladi.)"
  },
  {
    "question": "Bilet 3. Oʻtkir meningitning klinikasi",
    "answer": "O'tkir meningitda miyani o'rab turgan membranalarning yallig'lanishi sababli yuqori isitma, bosh og'rig'i, bo'yinni qattiq og'rig'i (bo'ynini burish qiyinlashadi), va fotofobiya (yorug'likdan qoʻrqish) kuzatiladi. Boshqa simptomlar orasida vomit (qusish), tashvish va ongni yo'qotish (mental holatning o'zgarishi) ham kuzatiladi. Shuningdek: **Brudzinskiy simptomi** - (bemorni chalqancha yotkizib  boʻynini oldinga egdirsak son va tizzakari beixtiyor bukikadi.)"
  },
  {
    "question": "Bilet 4. Surunkali meningitlarning klinikasi",
    "answer": "Surunkali meningitda odatda o'tkir meningitga qaraganda simptomlar sekin rivojlanadi. Koʻpincha bosh og'rig'i, bo'yin og'rig'i va isitma kuzatiladi, ammo bu kasallikda neyrologik  simptomlar (kognitiv buzilish, fikrlashning sekinlashishi) koʻp kuzatiladi."
  },
  {
    "question": "Bilet 5. Yuz nervi neyropatiyasining klinikasi",
    "answer": "Yuz nervi neyropatiyasida, ya'ni yuz nervining yallig'la,nishida, yuzning bir tomonida asimmetriya, mushaklarning zaiflashishi kuzatiladi. Bundan tashqari: **Bell falaji** - yuzning bir tomonidagi mushaklarning to'satdan zaiflashishiga olib keladigan holat.  Ko'pincha zaiflik qisqa muddatli bo'lib, haftalar davomida yaxshilanadi.  Zaiflik yuzning yarmini osilgandek ko'rsatadi.  Tabassumlar bir tomonlama bo'lib, zararlangan tomonda ko'zni yopish qiyin."
  },
  {
    "question": "Bilet 6. Uch shoxli nerv nevralgiyasi klinikasi",
    "answer": "Uch shoxli nerv  nevralgiyasida bemorlar yuzning pastki qismlarida, ayniqsa ko'z, burun va og'iz atrofida o'tkir og'riqlarni his qilishadi. Og'riq tez-tez to'satdan paydo bo'ladi va qisqa vaqt ichida o'tib ketadi. Nevralgiya odatda yuzning bir tomonida kuzatiladi va og'riqlarni chaqiruvchi omillar (masalan, sovuq havo, yuzni yuvish yoki nutq so'zlash) boʻlishi mumkin."
  },
  {
    "question": "Bilet 7. n.medianus nervining zararlanish klinikasi",
    "answer": "Medianus nervi qo'l barmoqlarini boshqaradi, shuning uchun uning zararlanishi qo'lning sezuvchanligi va harakatini pasaytiradi. Bemorlar barmoqlarini siqishda yoki qo'lni harakatlantirishda qiyinchiliklarga duch kelishadi. Ushbu zararlanish qo'lda og'riq va kuchsizlikni keltirib chiqaradi. **Medianus nevropatiyasi** odatda qo'lning uchta barmog'ini (bosh, koʻrsatkich va o'rta barmoqlar) harakatlantirishda qiyinchiliklar keltirib chiqaradi va **uyqu barmog'i** yoki **shaxmat barmog'i** deb ataladigan holatni keltirib chiqaradi. Zararlanish qo'lda og'riq, yonish hissi va ba'zan sezuvchanlikning yo'qolishi bilan ham kechadi."
  },
  {
    "question": "Bilet 8. Kana ensefalitining klinikasi",
    "answer": "Kana ensefaliti — bu Kana virusining miyaga ta'sir qilishi natijasida yuzaga keladigan neyroinfektsiyadir. Bemorlar yuqori isitma, bosh og'rig'i, qusish, bosh aylanishi va miyada yallig'lanish belgilarini his qilishadi. Kana ensefalitida, shuningdek, nevrologik simptomlar, masalan, kognitiv buzilish, xotira yomonlashishi, to'g'ri fikrlashda qiyinchiliklar, qusish, fotofobiya (yorug'likdan qo'rqish) va konvulsiyalar (g'alati harakatlar yoki muskul spazmlari) ko'rinadi. Bemorning holati og'irlashishi mumkin va ba'zan koma holatiga tushish yoki o'lim xavfi ham mavjud."
  },
  {
    "question": "Bilet 9. Gemorragik insultning qorinchalarga qon quyilishini klinikasi",
    "answer": "Gemorragik insultning qorinchalarga qon quyilishi — bu miyadagi qon tomirlarining yorilishi yoki yirtilishi natijasida qonning miyaning qorinchalariga quyilishi bilan yuzaga keladi. Bu holat bemorlarda og'ir klinik alomatlarni keltirib chiqaradi. Asosiy simptomlar orasida kuchli bosh og'rig'i, qusish, bosh aylanishi, ongning o'zgarishi (mental holatning buzilishi) va konvulsiyalar (muskul spazmlari) kuzatiladi. Shuningdek, bemorda **koma** yoki **gipoventilyatsiya** (nafas olishning zaiflashishi) holatlari ham rivojlanishi mumkin."
  },
  {
    "question": "Bilet 10. n.radialis neyropatiyasining klinikasi",
    "answer": "Nervus radialis neyropatiyasi — bu n.radialisning  shikastlanishi yoki siqilishi tufayli, bemor qo'lini orqa tomonida kuchsizlik, sezuvchaligini buzilishi, qo'lini ko'tarmaslikdan shikoyat qiladi.  **Dawson qo'li simptomi** ya'ni: 👌u simptomda o'rta barmoq va bosh barmoq birlashadi."
  },
  {
    "question": "Bilet 11. Ikkilamchi ensefalitlarning klinikasi",
    "answer": "Ikkilamchi ensefalitlar boshqa kasalliklar (masalan, qizamiq, o'tkir meningit, yoki bakteriologik infeksiyalar) natijasida kelib chiqadi. Klinik belgilari orasida yuqori isitma, bosh og'rig'i, qattiq bo'yin og'rig'i, kognitiv buzilishlar, uyqu buzilishi, xotira yomonlashuvi va nerv tizimi simptomlari (masalan, konvulsiyalar, mushaklarning zaiflashishi yoki qiyinchiliklar) kuzatiladi. Bemorlar ko'pincha og'ir mental holatga tushadilar va ba'zan koma yoki o'lim xavfi mavjud bo'ladi."
  },
  {
    "question": "Bilet 12. Mielit kasalligi klinikasi",
    "answer": "Mielit – bu umurtqa pog'onasidagi yallig'lanish holatidir va asab tizimi, ayniqsa, sezgi va motor funktsiyalarini pasaytiradi. Bemorlar pastki qismlarida og'riq, zaiflik va harakatni nazorat qilishda qiyinchiliklar sezadilar. Odatda, bu kasallikda pastki qismlarida, ya'ni qoʻl yoki oyoqlarda, kuchsizlik va sezgi buzilishlari kuzatiladi. Paraplegiya - ikkala oyoqda kuchsizligi yoki Tetraplegiya yaʼni oyoqlar va qoʻllarda harakatlar kuchsizlanishi kuzatiladi."
  },
  {
    "question": "Bilet 13. Polimielit kasalligining klinikasi",
    "answer": "Polimiyelit — polioviruslar chaqiradigan oʻtkir yuqumli kasallik bo'lib, asosan bolalarda uchraydi. Virus markaziy asab tizimiga ta’sir qiladi va motor neyronlarni shikastlaydi. Klinik belgilari infektsiyaning bosqichiga bog'liq:  1. **Prodromal bosqich**: Isitma, bosh og'rig'i, qusish, umumiy holsizlik va bo'g'imlarda og'riq kuzatiladi.  2. **Paralitik bosqich**: Mushaklarning zaiflashishi, asosan oyoqlarda, ba’zan esa qo'llarda va nafas mushaklarida shikastlanish yuzaga keladi. Bemorda asimmetrik parez (harakatsizlik) rivojlanadi. Reflekslar pasayadi yoki yo'qoladi, mushaklar atrofiyasi kuzatiladi.  3. **Tiklanish bosqichi**: Paralichlar qisman yoki to'liq tiklanishi mumkin, ammo ba’zi holatlarda doimiy zaiflik yoki deformatsiyalar saqlanib qoladi.  Boshqa alomatlar orasida ensefalit, nafas olish qiyinchiliklari va og'riq sindromlari kuzatilishi mumkin."
  },
  {
    "question": "Bilet 14. n.ulnaris neyropatiyasining klinikasi",
    "answer": "Nervus ulnaris nomsiz barmoq va chimchiloq barmoqni harakatini taʼminlaydi. Neyropatiyasi - shu nervni shikastlanishi. Klinik belgilari:  1. **Motor simptomlar**: Qo'lning kaft qismidagi muskullarning zaiflashishi, barmoqlarning bukilish va yozilish harakatlarida qiyinchilik, ayniqsa, 4 va 5-barmoqlarda (shu nomsiz bilan chimchiloq barmoqda 😁). Shuningdek, barmoqlarni yon tomonlarga harakatlantira olmaslik.  2. **Sezgi buzilishlari**: Qo'lning kaft va orqa tomonining 4 va 5-barmoqlarga mos keluvchi qismida sezuvchanlikning pasayishi yoki yo'qolishi.  3. **'Tirnoq kaft' deformatsiyasi**: Zararlanish uzoq davom etsa, mushaklarning atrofiyasi sababli qo'lda deformatsiya rivojlanadi.  4. **Og'riq va paresteziya**: Tirsak sohasida yoki bilakning ichki qismida yonish, qichishish va igna sanchilgandek hislar."
  },
  {
    "question": "Bilet 15. n.peroneus neyropatiyasining klinikasi",
    "answer": "Nervus peroneus neyropatiyasi — bu nervning shikastlanishi yoki siqilishi natijasida yuzaga keladi, bu nerv asosan oyoqning yuqori va tashqi qismidagi harakat va sezuvchanlikni boshqaradi. Uni shikastlangandagi klinik belgilari:  1. **Oyoq tushishi sindromi**: Oyoq panjasi pastga osilib qoladi, bemor yurishda oyoqni baland ko'tarishga majbur bo'ladi. Qisqasi Oyoq tushishi sindromi - bu to'piqni tizza tomon torta olmaslik, yaʼni tormoz-gaz pedalini bosishning teskari harakatini amalga oshira olmaslik. 2. **Sezgi buzilishlari**:   - Oyoqning tashqi yuzasi va barmoqlar orasidagi oraliqda sezuvchanlikning pasayishi yoki yo'qolishi.  3. **Og'riq**:  - Oyoqning tashqi qismida igna sanchilgandek his yoki yonish hissi.  4. **Mushak atrofiyasi**:   - Uzoq davom etgan zararlanish mushaklarning kichrayishi va zaiflashishiga olib keladi."
  },
  {
    "question": "Bilet 16. n.tibialis neyropatiyasining klinikasi",
    "answer": "Nervus tibialis neyropatiyasi — bu nervning shikastlanishi yoki siqilishi natijasida yuzaga keladi, bu nerv asosan oyoqning pastki qismini va barmoqlarni boshqaradi. Uni shikastlangandagi klinik belgilari: 1.**Motor funksiyasida buzilishlar** - Oyoq panjasini pastga ega olmaslik,   - barmoqlarini buka olmaslik,   - Oyoq panjasining ichki yoki tashqi tomonga burilishida qiyinchilik.  2. **Sezgi buzilishlari**:    - Oyoq panjasi, barmoqlari va tovoning ichki yuzasida sezuvchanlikning pasayishi yoki yo'qolishi.  3. **Og'riq**:   - Oyoq panjasida yonish, igna sanchilgandek his yoki qichishish. 4. **Mushak atrofiyasi**:  - Uzoq davom etgan zararlanish mushaklarning zaiflashishi va kichrayishiga olib keladi."
  },
  {
    "question": "Bilet 17. Leptomeningit klinikasi",
    "answer": "Leptomeningit — bu bosh miya va umurtqa pog'onasini o'rab turgan yumshoq va o'rta qavatli membranalarning yallig'lanishi bilan tavsiflanadi. Klinik belgilari quyidagilardan iborat:  1. **Bosh og'rig'i**: Davomiy va kuchli, ba’zan pulsatsiyalanuvchi tabiatda bo'ladi.  2. **Isitma**: Yuqori darajadagi harorat ko'tarilishi kuzatiladi.  3. **Bo'yin qattiqligi**: Bo'ynini burishda yoki egishda qiyinchilik (meningeal simptom).  4. **Fotofobiya**: Yorug'likka nisbatan yuqori sezuvchanlik.  (yaʼni yorugʻlikdan qoʻrqish)5. **Konvulsiyalar**: Mushaklarning majburiy qisqarishi va spazmlar.  6. **Ong buzilishlari**: Ba’zan chalkashlik, letargiya yoki koma holati rivojlanishi mumkin.  7. **Qusish va ko'ngil aynishi**: Miyaga bosim oshishi sababli yuzaga keladi."
  },
  {
    "question": "Bilet 18. Xorionependematit klinikasi",
    "answer": "Xorionependematit — bu miya qorinchalari devorlarining va ependima (miya va orqa miyaning suyuqlik bilan to'ldirilgan bo'shliqlarini qoplaydigan nozik membrana) hujayralarining yallig'lanishi bilan tavsiflanadigan holat. Klinik belgilari quyidagilardan iborat:  1. **Nevrologik simptomlar**:     - Bosh og'rig'i, bosh aylanishi va umumiy holsizlik.  2. **Gidrosefaliya belgilari**:     - Qorinchalar ichidagi suyuqlikning to'planishi natijasida yuzaga keladigan bosh miya bosimining oshishi. Bu bosh og'rig'i, ko'ngil aynishi va qusishga olib keladi.  3. **Ong buzilishlari**:    - Letargiya, chalkashlik, ba’zan koma holati. 4. **Isitma**:   - Yallig'lanish jarayonlari sababli tana haroratining ko'tarilishi. 5. **Ko'z simptomlari**:   - Diplopiya (ikki ko'rish), nistagmus (ko'z harakatlarining nazoratsizligi). 6. **Epileptik tutqanoqlar**:   - Ba’zi hollarda konvulsiyalar kuzatilishi mumkin."
  },
  {
    "question": "Bilet 19. Tarqoq skleroz klinikasi",
    "answer": "Tarqoq skleroz — bu markaziy asab tizimi (miyaning va orqa miya) demiyelinizatsiyasi bilan tavsiflanadigan surunkali kasallikdir. Kasallikning klinikasi har xil bo'lib, quyidagi asosiy simptomlar kuzatilad:  1. **Motor simptomlar**:    - Mushaklar zaifligi (parez) yoki to'liq harakatsizlik (plegiya), ayniqsa oyoqlarda.  2. **Sezgi buzilishlari**:   - Oyoqlarda yoki qo'llarda sezuvchanlikning pasayishi, titrash yoki og'riq hissi.  3. **Optik neyropatiya**:   - Ko'rish qobiliyatining pasayishi, ko'rish maydonining torayishi, ba’zan ko'rish yo'qolishi. 4. **Kognitiv buzilishlar**:   - Xotira pasayishi, fikrlashning sekinlashishi, e'tiborning susayishi. 5. **Ongni yo'qotish va ruhiy holatning buzilishi**:     - Depressiya, tashvish, ba'zan ruhiy chalkashliklar.  6. **Konvulsiyalar**:   - Ba’zi bemorlarda epileptik tutqanoqlar yuzaga kelishi mumkin."
  },
  {
    "question": "Bilet 20. Yon amiotrofik skleroz klinikasi",
    "answer": "Yon amiotrofik skleroz — bu motor neyronlarning degeneratsiyasi natijasida yuzaga keladigan kasallik. Klinik belgilari:  1. **Motor simptomlar**:     - Qo'l va oyoqlarda kuchsizlik va mushak atrofiyasi.   - Spastik holatlar va yurishdagi qiyinchiliklar. 2. **Nutq va yutishning buzilishi**:   - Dizartriya va disfagiya (yutish qiyinlashishi).  3. **Respirator simptomlar**:   - Nafas olishdagi qiyinchiliklar, kasallik oxirida nafas yetishmovchiligi.  4. **Sezuvchanlik buzilishlari**:   - Kamdan-kam hollarda paresteziya yoki og'riq hissi."
  },
  {
    "question": "Bilet 21. Shtryumpel kasalligining klinikasi",
    "answer": "Shtryumpel kasalligi (Shtryumpel paralizi) — bu nerv tizimining markaziy qismi va mushaklar tizimining zaiflashishi bilan kechuvchi kasallik. Klinik belgilari:  1. **Yuz va qo'llarda kuchsizlik**:     - Asosan mushaklar kuchsizligi va atrofiyasiga olib keladi.  2. **Mushaklarning qattiqlashishi**:   - Spastik holat va mushaklarning qattiqlashishi.  3. **Yurishdagi qiyinchiliklar**: - Muvozanat saqlashda muammolar va yurishda qiyinchiliklar.  4. **Bosh og'rig'i va boshqa nevrologik simptomlar**:   - Bosh og'rig'i, ko'ngil aynishi yoki qiyinchiliklar bilan bog'liq simptomlar kuzatiladi."
  },
  {
    "question": "Bilet 22. Palidar tizim degenerativ kasalligi - Parkinson klinikasi",
    "answer": "Parkinson kasalligi — bu palidar tizim (bosh miyada harakatlarni boshqaradigan tizim)ning degeneratsiyasi natijasida yuzaga keladigan kasallik. Klinik belgilari:  1. **Titrash**:   - Qattiq titrash (tremor), ayniqsa qo'llarda yoki oyoqlarda tinch holatda kuzatiladi.  2. **Bradikineziya**:   - Harakatlarning sekinlashuvi, bemorlar oddiy harakatlarni bajarishda qiyinchilikka duch keladi.  3.   - Muvozanat saqlashda qiyinchiliklar.  4. **Disfagiya va disartriya**:   - Yutish va nutq buzilishlari.  5. **Kognitiv va ruhiy simptomlar**:     - Depressiya, ruhiy holatning pasayishi va ba'zan xotira buzilishlari."
  },
  {
    "question": "Bilet 23. Nasliy miyacha ataksiyalari klinikasi",
    "answer": "Nasliy miyacha ataksiyalari — bu genetik sabablar tufayli yuzaga keladigan nevrologik kasalliklar bo'lib, asosan miyachaning harakat va muvozanatni boshqarish funksiyasining buzilishi bilan tavsiflanadi. Klinik belgilari: 1. **Ataksiya**:   - Mushaklarning harakatlarining muvozanatsizligi, bemorlar yurishda qiyinchiliklarga duch kelishadi, ko'pincha tebranish yoki notekis harakatlar paydo bo'ladi.  2. **Koordinatsiya buzilishi**:   - Qo'l va oyoqlarning noaniq harakatlari, yozishda va boshqa nozik harakatlarda qiyinchiliklar.  3. **Dizartriya**:   - Nutqning buzilishi, so'zlashda notekislik yoki chalqashlik.  4. **Sezgi buzilishlari**:     - Ba'zi bemorlarda sezuvchanlikning pasayishi kuzatilishi mumkin.  5. **Mushaklarning zaiflashishi**:     - Ba’zan mushaklar zaiflashadi va atrofiyasi rivojlanishi mumkin."
  },
  {
    "question": "Bilet 24. Sharko-Mari-Tut kasalligining klinikasi",
    "answer": "Sharko-Mari-Tut kasalligi (Sharko-Mari-Tut polinevropatiyasi) — bu genetik, periferik nerv tizimi kasalligi bo'lib, nerv tolalarining degeneratsiyasiga olib keladi. Klinik belgilari:  1. **Periferik nervlarning shikastlanishi**:   - Qo'l va oyoqlarda kuchsizlik, mushaklarning zaiflashishi va atrofiyasi.  2. **Sensomotor buzilishlar**:   - Sezuvchanlikning pasayishi.3. **Yurishdagi qiyinchiliklar**:     - Yurishda muammolar, ba’zan yurishdagi notekislik va tebranish.  4. **muvozanat saqlashdagi qiyinchiliklar**:     - Koordinatsiya buzilishlari, balansni saqlashda muammolar."
  },
  {
    "question": "Bilet 25. Epilepsiya kasalligining klinikasi",
    "answer": "Epilepsiya — bu asab tizimining surunkali kasalligi bo'lib, miya faoliyatining qisqa muddatli buzilishlari (epileptik tutqanoq) bilan tavsiflanadi. Klinik belgilari:  1. **Epileptik tutqanoqlar**:     - **Generalizatsiyalangan tutqanoq**: Butun tanada kuchli mushak siqilishlari va yo'talish bilan birga bo'lishi mumkin.     - **partsial tutqanoq**: Biror bir tana qismida kuchsiz siqilishlar yoki his-tuyg'u o'zgarishlari.  2. **Miokloniyalar**:   - Tana yoki qo'l-oyoqlarda qisqa muddatli, noxush mushak tebranishlari.  3. **Stupor yoki konfuzion holatlar**:     - Tutqanoqdan keyin bemorda ongni yo'qotish, tushunmovchilik va qiyinchiliklar.  4. **Auras**:   - Tutqanoqdan oldin, ba'zi bemorlarda og'riq, bosh og'rig'i, hayajon, ko'rish yoki hid sezish kabi oldindan sezilarli belgilar kuzatiladi."
  },
  {
    "question": "Bilet 26. Migren bosh og'rig'ining klinikasi",
    "answer": "Migren — bu qayta-qayta yuzaga keladigan bosh og'rig'i. Klinik belgilari:  1. **Pulsatsiyali bosh og'rig'i**:    - Og'riq ko'pincha boshning bir tomonida, tebranishli va qattiq seziladi.  2. **Yorug'likdan va shovqindan qo'rqish**:     - Fotofobiya (yorug'likka sezuvchanlik) va fonofobiya (shovqindan qoʻrqish) kuzatiladi.  3. **Qusish va ko'ngil aynishi**:     - Bosh og'rig'iga qo'shimcha ravishda ko'ngil aynishi va qusish kuzatilishi mumkin.  4. **Aura**:     - Ba'zi bemorlarda bosh og'rig'idan oldin vizual o'zgarishlar (ko'zi oldida jivirashlar, sezgilar (paresteziya) yoki nutq buzilishi kabi simptomlar kuzatiladi.  5. **Davomiyligi**:     - Migren huruji bir necha soat davom etishi mumkin, ba'zan 72 soatgacha cho'ziladi."
  },
  {
    "question": "Bilet 27. Zo'rikish bosh og'rig'ining klinikasi",
    "answer": "Zo'rikish bosh og'rig'i — bu boshning ikki tomonida tarqaladigan, doimiy va siqiladigan og'riq bilan tavsiflanadi. Klinik belgilari: 1. **Siqiluvchi og'riq**:   - Og'riq boshning ikkala tomonida bir xil darajada seziladi, ko'pincha siqilish yoki bosish hissi bilan.  2. **Davomiyligi**:   - Og'riq ko'pincha bir necha soat davom etadi, ba'zan bir necha kun davom etishi mumkin.  3. **Stress va taranglik**:   - Zo'rikish bosh og'rig'i ko'pincha stress, taranglik, uzoq muddatli intellektual va jismoniy zo'riqishlar bilan bog'liq.  4. **Bosh aylanishi yoki yengil ko'ngil aynishi**:   - Ba'zi bemorlarda bosh aylanishi yoki ko'ngil aynishi kuzatiladi, lekin qusish odatda yo'q.  Zo'rikish bosh og'rig'i surunkali bo'lishi mumkin va asosan stressni boshqarish, yaxshi uyqu va dori-darmonlar bilan davolanadi."
  },
  {
    "question": "Bilet 28. Tutamli yoki klaster bosh og'rig'ining klinikasi",
    "answer": "Tutamli (klaster) bosh og'rig'i — bu kuchli va takrorlanuvchi bosh og'rig'i bo'lib, asosan bir tomonlama va ko'z atrofida joylashgan og'riq bilan tavsiflanadi. Klinik belgilari:  1. **Kuchli og'riq**:     - Og'riq ko'pincha bir tomonda, ko'z atrofida yoki boshning orqa tomonida joylashadi. Og'riq juda kuchli va to'satdan paydo bo'ladi.  2. **Og'riqning davri**:     - Tutamli bosh og'rig'i odatda qisqa muddatli (15-180 daqiqa) bo'ladi, lekin kuniga bir necha marta paydo bo'lishi mumkin.  3. **Simptomlar**:     - Ko'zning qizarmasi, koʻz yoshi oqishi, burun oqishi yoki to'silish, ko'ngil aynishi  yoki terlash kabi simptomlar kuzatiladi.  4. **Tutamlarning takrorlanishi**:     - Tutamli bosh og'rig'i bir necha hafta yoki oylik davrda tez-tez yuz berishi mumkin, keyin esa uzoq muddatli tinchlanish davri boshlanadi.  5. **Ko'pincha kechqurun va tunlari**:     - Bosh og'rig'i ko'pincha tunda yoki kechqurun boshlanadi."
  },
  {
    "question": "Bilet 29. Siringomieliya kasalligining klinikasi",
    "answer": "Siringomieliya — bu umurtqa pog'onasida bo'shliq (siringoma) paydo bo'lishi natijasida yuzaga keladigan kasallik bo'lib, asosan sezgi va harakatni boshqaruvchi nerv tolalarining shikastlanishi bilan tavsiflanadi. Klinik belgilari:  1. **Sezgi buzilishlari**:     - Oyoq va qo'lning yuqori qismlarida sezuvchanlikning yo'qolishi yoki pasayishi, ayniqsa issiqlik yoki og'riq sezgilarida buzilishlar kuzatiladi.  2. **Mushak zaifligi va atrofiyasi**:     - Mushaklarning zaiflashishi va atrofiyasi, ayniqsa qo'l va oyoqlarda, o'zgacha noqulay holatlar va mushaklarni harakatlantirishda qiyinchiliklar.  3. **Simmertlik yoki dizartriya**:     - Nutqning buzilishi yoki nutqning qiyinlashishi, ba'zida tovush o'zgarishlari.  4. **Ataksiya**:     - Harakatlarni muvofiqlashtirishda qiyinchiliklar, balansni saqlashda muammolar.  5. **Og'riq**:     - Ba'zi bemorlarda bel og'rig'i yoki oyoqlarda og'riq kuzatilishi mumkin."
  },
  {
    "question": "Bilet 30. Miasteniya kasalligining klinikasi",
    "answer": "Miasteniya — bu autoimmun kasallik bo'lib, nerv va mushaklar o'rtasidagi signal uzatishning buzilishi natijasida mushak zaifligi va charchoq paydo bo'ladi. Klinik belgilari:  1. **Mushak zaifligi**:     - Yuz, ko'z, qo'l va oyoq mushaklarida zaiflik kuzatiladi, ayniqsa uzoq vaqt davomida mushaklar ishlatilganda yoki charchaganda bu zaiflik kuchayadi.  2. **Diplopiya (ikki tomonlama ko'rish)**:     - Ko'zning mushaklari zaiflashishi natijasida ikki tomonlama ko'rish (diplopiya) yoki ko'zning yopilmasligi kuzatiladi.  3. **Ptosis (ko'zning tushishi)**:     - Ko'zning yuqori qismi pastga tushib qoladi, bu esa ko'rishni qiyinlashtiradi.  4. **Yuz mushaklarining zaifligi**:     - Nutq va yuz ifodalarining qiyinchiligi, og'izni yopishda yoki yutishda muammolar.  5. **Charchoq**:     - Miasteniya bemorlarida tez charchash va uzoq vaqt davomida biror ishni bajarish qiyinlashadi."
  },
  {
    "question": "Bilet 31. Bosh aylanishlar klinikasi",
    "answer": "Bosh aylanishlari — ko'pincha muvozanatning yo'qolishi bilan tavsiflanadi. Klinik belgilari: 1. **Vertigo (aylanish sezgisi)**:     - Bosh aylanishining eng asosiy simptomi — bemor o'zini yoki atrofidagi ob'ektlarni aylantirayotgandek his qilishadi.  2. **Muvozanatni yo'qotish**:     - Bemorlar yerga yiqilishdan yoki yurishda qiyinchiliklardan shikoyat qilishadi.  3. **Ko'ngil aynishi va qusish**:     - Bosh aylanishi bilan birga ko'ngil aynishi yoki qusish kuzatilishi mumkin.  4. **Bosh og'rig'i**:     - Ba'zi bemorlarda bosh aylanishi bosh og'rig'i bilan birga keladi.  5. **Sensor buzilishlari**:     - Ba'zi bemorlar bosh aylanishini sezgilarni (masalan, ko'rish yoki eshitish) noto'g'ri qabul qilish bilan bog'lashadi. Bosh aylanishlar turli sabablarga ko'ra yuzaga kelishi mumkin, masalan, vestibulyar tizim kasalliklari, infeksiyalar, neyrologik kasalliklar (masalan, insult yoki miyopatiyalar) yoki yurak-tomir tizimi muammolari."
  },
  {
    "question": "Bilet 1. Ishemik insultni davolash qanday amalga oshiriladi?",
    "answer": "Ishemik insultni davolashda asosiy maqsad miya qon aylanishini tiklash va zarar yetgan hududni himoya qilishdir. Trombni eritish uchun trombolitik terapiya, qon bosimini nazorat qilish, antikoagulyantlar va antiplatelet dorilar qo'llaniladi.\n\nRp.: Sol. Alteplase (Actilyse) 50 mg/50 ml N. 1 D.S. 1 in'ektsiya intravenoz sekin infuziya tarzida yuborilsin.\nRp.: Tab. Clopidogrel 75 mg N. 30 D.S. 1 tabletkani kuniga 1 marta ovqatdan keyin qabul qilsin.\nRp.: Tab. Aspirin 100 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 2. Gemorragik insultni davolash qanday amalga oshiriladi?",
    "answer": "Gemorragik insultni davolash qon ketishini to'xtatish, qon bosimini nazorat qilish va miya shishining oldini olishga qaratilgan. Shuningdek, shoshilinch neyroxirurgik aralashuv talab qilinishi mumkin.\n\nRp.: Sol. Tranexamic acid 100 mg/1 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin.\nRp.: Sol. Mannitol 20% 100 ml N. 1 D.S. 1 in'ektsiya intravenoz sekin infuziya tarzida yuborilsin.\nRp.: Tab. Nimodipine 30 mg N. 50 D.S. 1 tabletkani kuniga 3 marta qabul qilsin."
  },
  {
    "question": "Bilet 3. O'tkir meningitlarni davolash qanday amalga oshiriladi?",
    "answer": "O'tkir meningitlarni davolashda bakterial infektsiya uchun keng spektrli antibiotiklar yoki virusli meningit uchun antiviral terapiya qo'llaniladi. Kortikosteroidlar yallig'lanishni kamaytirish uchun ishlatiladi.\n\nRp.: Sol. Ceftriaxone 1 g/10 ml N. 1 D.S. 1 in'ektsiya intravenoz har 12 soatda yuborilsin.\nRp.: Sol. Acyclovir 250 mg/10 ml N. 1 D.S. 1 in'ektsiya intravenoz har 8 soatda yuborilsin.\nRp.: Sol. Dexamethasone 4 mg/1 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin har 6 soatda."
  },
  {
    "question": "Bilet 4. Surunkali meningitlarni davolash qanday amalga oshiriladi?",
    "answer": "Surunkali meningitni davolash uning sababiga bog'liq. Tuberkulyozli meningitda antituberkulyoz terapiya, qo'ziqorinli meningitda antifungal dorilar qo'llaniladi.\n\nRp.: Tab. Isoniazid 300 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Tab. Fluconazole 200 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Sol. Rifampicin 600 mg/10 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin har kuni."
  },
  {
    "question": "Bilet 5. Yuz nervi neyropatiyasini davolash qanday amalga oshiriladi?",
    "answer": "Yuz nervi neyropatiyasini davolash yallig'lanishni kamaytirish va nerv faoliyatini tiklashga qaratilgan. Kortikosteroidlar va fizioterapiya asosiy usullardan biridir.\n\nRp.: Sol. Prednisolone 50 mg/2 ml N. 1 D.S. 1 in'ektsiya intravenoz har 24 soatda yuborilsin.\nRp.: Tab. Vitamin B12 500 mcg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Sol. Lidocaine 2% N. 1 D.S. Lokal yuborilsin og'riqni kamaytirish uchun."
  },
  {
    "question": "Bilet 6. Uch shoxli nerv nevralgiyasini davolash qanday amalga oshiriladi?",
    "answer": "Uch shoxli nerv nevralgiyasini davolash uchun antikonvulsantlar, og'riq qoldiruvchi dorilar va jarrohlik usullari qo'llaniladi. Eng samarali dorilardan biri karbamazepindir.\n\nRp.: Tab. Carbamazepine 200 mg N. 30 D.S. 1 tabletkani kuniga 2 marta ovqatdan keyin qabul qilsin.\nRp.: Tab. Gabapentin 300 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin.\nRp.: Sol. Baclofen 10 mg/5 ml N. 1 D.S. 1 in'ektsiya mushak ichiga yuborilsin."
  },
  {
    "question": "Bilet 7. n.medianus nervini zararlanishida davolash qanday amalga oshiriladi?",
    "answer": "Medianus nervi zararlanganda analgetiklar, yallig'lanishga qarshi vositalar va regeneratsiya uchun vitaminlar qo'llaniladi. Fizioterapiya va jarrohlik yordamchi usullardir.\n\nRp.: Tab. Ibuprofen 400 mg N. 30 D.S. 1 tabletkani kuniga 3 marta qabul qilsin.\nRp.: Tab. Thiamine 100 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Sol. Dexamethasone 4 mg/1 ml N. 1 D.S. 1 in'ektsiya mushak ichiga yuborilsin har 12 soatda."
  },
  {
    "question": "Bilet 8. Kana ensefalitini davolash qanday amalga oshiriladi?",
    "answer": "Kana ensefaliti uchun antiviral terapiya va simptomatik davolash qo'llaniladi. Miya shishini kamaytirish uchun kortikosteroidlar ham ishlatiladi.\n\nRp.: Sol. Acyclovir 250 mg/10 ml N. 1 D.S. 1 in'ektsiya intravenoz har 8 soatda yuborilsin.\nRp.: Sol. Methylprednisolone 125 mg/2 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin har 12 soatda.\nRp.: Tab. Paracetamol 500 mg N. 30 D.S. 1 tabletkani og'riqni kamaytirish uchun qabul qilsin."
  },
  {
    "question": "Bilet 9. Gemorragik insultni qorinchalarga qon quyilishini davolash qanday amalga oshiriladi?",
    "answer": "Gemorragik insultni qorinchalarga qon quyilishi ko'pincha neyroxirurgik aralashuvni talab qiladi. Boshqa davolash usullari qon ketishini to'xtatish va miya shishining oldini olishga qaratilgan.\n\nRp.: Sol. Mannitol 20% 100 ml N. 1 D.S. 1 in'ektsiya intravenoz sekin infuziya tarzida yuborilsin.\nRp.: Sol. Tranexamic acid 100 mg/1 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin.\nRp.: Tab. Enoxaparin 40 mg N. 10 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 10. n.radialis neyropatiyasini davolash qanday amalga oshiriladi?",
    "answer": "n.Radialis neyropatiyasini davolashda analgetiklar, yallig'lanishga qarshi vositalar va fizioterapiya qo'llaniladi. Agar zararlanishni tiklash uchun dori vositalar yetarli bo'lmasa, jarrohlik aralashuv talab qilinishi mumkin.\n\nRp.: Tab. Naproxen 500 mg N. 30 D.S. 1 tabletkani kuniga 2 marta og'iz orqali qabul qilsin.\nRp.: Sol. Methylprednisolone 80 mg/2 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin.\nRp.: Tab. B12 vitamini 500 mcg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 11. Ikkilamchi ensefalitlarni davolash qanday amalga oshiriladi?",
    "answer": "Ikkilamchi ensefalitlar asosan infeksion yoki autoimmun jarayonlardan kelib chiqadi. Infektsion sabablar uchun virusga qarshi, autoimmun sabablar uchun immunosupressantlar qo'llaniladi.\n\nRp.: Sol. Acyclovir 250 mg/10 ml N. 1 D.S. 1 in'ektsiya intravenoz har 8 soatda yuborilsin.\nRp.: Sol. Rituximab 100 mg/10 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin har 2 haftada.\nRp.: Tab. Prednisolone 10 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 12. Mielit kasalligi davolash qanday amalga oshiriladi?",
    "answer": "Mielit kasalligi davolashida yallig'lanishga qarshi dorilar, immunosupressiyalar va zarur bo'lsa, antibiotiklar qo'llaniladi. Bakterial mielit uchun antibiotiklar, virusli mielit uchun antiviral vositalar kerak bo'ladi.\n\nRp.: Sol. Methylprednisolone 500 mg/10 ml N. 1 D.S. 1 in'ektsiya intravenoz har 24 soatda yuborilsin.\nRp.: Sol. Ceftriaxone 2 g/10 ml N. 1 D.S. 1 in'ektsiya intravenoz har 12 soatda yuborilsin.\nRp.: Sol. Acyclovir 250 mg/10 ml N. 1 D.S. 1 in'ektsiya intravenoz har 8 soatda yuborilsin."
  },
  {
    "question": "Bilet 13. Polimielit kasalligini davolash qanday amalga oshiriladi?",
    "answer": "Polimielitning davolash usuli asosan simptomatikdir, faqat ba'zi holatlarda antivirus yoki yallig'lanishga qarshi dorilar qo'llaniladi.\n\nRp.: Sol. Immunoglobulin 5% 10 ml N. 1 D.S. 1 in'ektsiya intravenoz sekin yuborilsin.\nRp.: Tab. Prednisolone 20 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Tab. Vitamin E 400 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 14. n.ulnaris neyropatiyasini davolash qanday amalga oshiriladi?",
    "answer": "n.Ulnaris nervining zararlanishi asosan og'riqni kamaytirish, yallig'lanishni bartaraf etish va tiklanishni tezlashtirishga qaratilgan. Analgetiklar va kortikosteroidlar asosiy dori vositalaridir.\n\nRp.: Tab. Ibuprofen 400 mg N. 30 D.S. 1 tabletkani kuniga 3 marta qabul qilsin.\nRp.: Sol. Dexamethasone 4 mg/1 ml N. 1 D.S. 1 in'ektsiya mushak ichiga yuborilsin har 12 soatda.\nRp.: Tab. Vitamin B6 50 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 15. n.peroneus neyropatiyasini davolash qanday amalga oshiriladi?",
    "answer": "n.Peroneus neyropatiyasini davolashda analgetiklar, yallig'lanishga qarshi dorilar va fizioterapiya qo'llaniladi. Bundan tashqari, vitaminlar va regeneratsiya stimulyatorlari ham foydali.\n\nRp.: Tab. Naproxen 500 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin.\nRp.: Tab. Methylcobalamin 500 mcg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Sol. Lidocaine 5% 100 ml N. 1 D.S. Lokal yuborilsin og'riqni kamaytirish uchun."
  },
  {
    "question": "Bilet 16. n.tibialis neyropatiyasini davolash qanday amalga oshiriladi?",
    "answer": "n.Tibialis nervining zararlanishida asosan og'riqni kamaytirish, yallig'lanishni bartaraf etish va mushaklarni tiklashga yo'naltirilgan davolash usullari qo'llaniladi. Bundan tashqari, fizioterapiya va ortopedik qo'llanmalar ham yordam beradi.\n\nRp.: Tab. Diclofenac 50 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin.\nRp.: Sol. Methylprednisolone 40 mg/1 ml N. 1 D.S. 1 in'ektsiya mushak ichiga yuborilsin har 12 soatda.\nRp.: Tab. B12 vitamini 500 mcg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 17. Leptomeningitni davolash qanday amalga oshiriladi?",
    "answer": "Leptomeningitning davolashida bakterial infektsiya bo'lsa, antibiotiklar qo'llaniladi. Virussiz leptomeningitlar uchun simptomatik davolash kerak.\n\nRp.: Sol. Ceftriaxone 2 g/10 ml N. 1 D.S. 1 in'ektsiya intravenoz har 12 soatda yuborilsin.\nRp.: Tab. Acyclovir 800 mg N. 30 D.S. 1 tabletkani kuniga 5 marta og'iz orqali qabul qilsin.\nRp.: Sol. Mannitol 20% 100 ml N. 1 D.S. 1 in'ektsiya intravenoz sekin yuborilsin."
  },
  {
    "question": "Bilet 18. Xorionependematitni davolash qanday amalga oshiriladi?",
    "answer": "Xorionependematitni davolashda antimikrobial va immunosupressiv dorilar qo'llaniladi. Odatda, asosan shifokor nazorati ostida davolash kerak.\n\nRp.: Tab. Metronidazole 500 mg N. 30 D.S. 1 tabletkani kuniga 3 marta og'iz orqali qabul qilsin.\nRp.: Sol. Hydrocortisone 100 mg/2 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin.\nRp.: Sol. Doxycycline 100 mg/10 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin."
  },
  {
    "question": "Bilet 19. Tarqoq sklerozni davolash qanday amalga oshiriladi?",
    "answer": "Tarqoq skleroz (MS) kasalligi uchun asosiy davolash usullari immunosupressantlar, yallig'lanishga qarshi vositalar va simptomatik davolashdan iborat. Davolashda interferon va immunomodulyatorlar ham ishlatiladi.\n\nRp.: Sol. Interferon beta-1a 30 mcg/1 ml N. 1 D.S. 1 in'ektsiya mushak ichiga haftada 3 marta yuborilsin.\nRp.: Tab. Methylprednisolone 4 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Sol. Baclofen 10 mg/5 ml N. 1 D.S. 1 in'ektsiya mushak ichiga yuborilsin."
  },
  {
    "question": "Bilet 20. Yon amiotrofik sklerozni davolash qanday amalga oshiriladi?",
    "answer": "Yon amiotrofik skleroz (ALS) ning davolashida asosan simptomlarni bartaraf etishga qaratilgan. Ba'zi hollarda, dori terapiyasi va fizioterapiya qo'llaniladi.\n\nRp.: Tab. Riluzole 50 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin.\nRp.: Sol. Baclofen 10 mg/5 ml N. 1 D.S. 1 in'ektsiya mushak ichiga yuborilsin har 24 soatda.\nRp.: Tab. Amitriptyline 25 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 21. Palidar tizim degenerativ kasalligi - Parkinson kasalligini davolash qanday amalga oshiriladi?",
    "answer": "Parkinson kasalligining davolashida dopamin agonistlari, MAO-B ingibitorlari va levodopa vositalari ishlatiladi. Boshqa simptomlarni bartaraf etish uchun qo'shimcha dorilar ham kerak bo'lishi mumkin.\n\nRp.: Tab. Levodopa 250 mg/25 mg N. 30 D.S. 1 tabletkani kuniga 3 marta og'iz orqali qabul qilsin.\nRp.: Tab. Selegiline 5 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Tab. Pramipexole 0.125 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 22. Nasliy miyacha ataksiyalarini davolash qanday amalga oshiriladi?",
    "answer": "Nasliy miyacha ataksiyalari asosan simptomatik davolashni talab qiladi. Vestibulyar tizimni qo'llab-quvvatlash, fizioterapiya va ba'zan dorilar yordamida muolaja qilish mumkin.\n\nRp.: Tab. Gabapentin 300 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin.\nRp.: Sol. Baclofen 10 mg/5 ml N. 1 D.S. 1 in'ektsiya mushak ichiga yuborilsin.\nRp.: Tab. Vitamin E 400 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 23. Epilepsiya kasalligini davolash qanday amalga oshiriladi?",
    "answer": "Epilepsiya kasalligi davolashida antiepileptik dorilar (AEDs) asosiy vositalardir. Boshqa davolash usullari ichki tibbiy aralashuvlar va jarrohlik amaliyotlarni o'z ichiga olishi mumkin.\n\nRp.: Tab. Valproic acid 500 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin.\nRp.: Tab. Lamotrigine 100 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Tab. Carbamazepine 200 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin."
  },
  {
    "question": "Bilet 24. Migren bosh og'rig'ini davolash qanday amalga oshiriladi?",
    "answer": "Migren bosh og'rig'ini davolashda asosan analgetiklar, triptanlar va yallig'lanishga qarshi dorilar ishlatiladi. Boshqa davolash usullari uchun shifokor tomonidan mos keladigan dorilar tanlanadi.\n\nRp.: Tab. Sumatriptan 50 mg N. 6 D.S. 1 tabletkani og'riq paydo bo'lganda og'iz orqali qabul qilsin.\nRp.: Tab. Ibuprofen 400 mg N. 30 D.S. 1 tabletkani kuniga 3 marta qabul qilsin.\nRp.: Sol. Metoclopramide 10 mg/2 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin og'riqni kamaytirish uchun."
  },
  {
    "question": "Bilet 25. Zo'rikish bosh og'rig'ini davolash qanday amalga oshiriladi?",
    "answer": "Zo'rikish bosh og'rig'ini davolashda asosan analgetiklar, antidepressantlar va ba'zan, agar zarur bo'lsa, yallig'lanishga qarshi vositalar qo'llaniladi.\n\nRp.: Tab. Amitriptyline 25 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin.\nRp.: Tab. Naproxen 500 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin.\nRp.: Sol. Ondansetron 4 mg/2 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin."
  },
  {
    "question": "Bilet 26. Miasteniya kasalligini davolash qanday amalga oshiriladi?",
    "answer": "Miasteniya kasalligini davolashda asosan acetilcholinesteraza ingibitorlari va immunosupressiv dorilar ishlatiladi. Ba'zan jarrohlik aralashuvlar ham qo'llaniladi.\n\nRp.: Tab. Pyridostigmine 60 mg N. 30 D.S. 1 tabletkani kuniga 3 marta qabul qilsin.\nRp.: Sol. Immunoglobulin 5% 10 ml N. 1 D.S. 1 in'ektsiya intravenoz sekin yuborilsin.\nRp.: Tab. Prednisolone 10 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
  {
    "question": "Bilet 27. Bosh aylanishini davolash qanday amalga oshiriladi?",
    "answer": "Bosh aylanishi (vertigo) davolashida vestibulyar tizimni qo'llab-quvvatlovchi dori vositalari, antihistaminiklar va yallig'lanishga qarshi preparatlar ishlatiladi. Fizioterapiya ham muhim rol o'ynaydi.\n\nRp.: Tab. Betahistine 8 mg N. 30 D.S. 1 tabletkani kuniga 2 marta qabul qilsin.\nRp.: Sol. Dimenhydrinate 50 mg/1 ml N. 1 D.S. 1 in'ektsiya intravenoz yuborilsin.\nRp.: Tab. Diazepam 5 mg N. 30 D.S. 1 tabletkani kuniga 1 marta qabul qilsin."
  },
{
  "question": "Vaziyatli masala 1. Bemor 56 yoshda. Bemorda o'ng qo'l va oyoqlarida falajlanish kuzatilmoqda, qo'llarida bukuvchi mushaklarda, oyoqlarda yozuvchi mushaklar tonusi ortgan Vemikc-Manne Vunshi kuzatilmoqda. Topik tashxis qo'ying.",
  "answer": "Topik tashxis: Yuqori motor neyron zararlanishi. Bu holat spastik falaj va patologik reflekslar (masalan, Vemikc-Manne Vunshi refleksi) bilan namoyon bo'ladi. Yuqori motor neyron zararlanishida muskullarning spastikligi (Mushaklarning kuchli va uzoq davom etadigan siqilishi), reflekslarning oshishi va Babinskiy belgisi kabi patologik belgilar kuzatiladi. Tashxisni tasdiqlash uchun miya yoki orqa miya MRT (magnit-rezonans tomografiya) o‘tkazilishi kerak.\n\nIzoh: \n- **Topik tashxis** – kasallik yoki patologik jarayonning qaysi sohada (topografik joylashuvi) sodir bo‘lganligini aniqlash. Masalan, bu vaziyatda nerv tizimining yuqori motor neyroni zararlangan.\n- **UMN (Yuqori motor neyron)** – korteksdan orqa miya oldingi shoxlarigacha bo‘lgan nerv yo‘li. Ushbu neyronlar zararlanishida spastiklik, kuchaygan reflekslar va patologik belgilar kuzatiladi.\n- **Refleks** – bu tananing avtomatik javob reaksiyalari. Patologik reflekslar esa UMN zararlanishi belgisi hisoblanadi.\n  - **Vemikc-Manne Vunshi refleksi** – yuqori neyronlarning zararlanishi natijasida kuzatiluvchi patologik javob.\n  - **Babinskiy belgisi** – oyoq kaftining pastki qismi bo‘ylab qichishlanganda bosh barmoqning yuqoriga ko‘tarilishi. Bu UMN zararlanishining asosiy belgilaridan biridir."
},
{
  "question": "Vaziyatli masala 2. 45 yoshli bemor. Bemorning shikoyati - qovoqlarining osilib qolishi, buyumlarni ko'ziga ikkita ko'rinishda ko'rish. Umumiy ko'rikda - midriaz bor va uzoqlashtiruvchi strabizm mavjud. Qaysi juft bosh miya nervi zararlangan?",
  "answer": "Zararlangan nerv: III juft bosh miya nervi (nervus oculomotorius). Ushbu nervning zararlanishida midriaz (ko‘z qorachig‘ining kengayishi), ptosis (qovoq osilishi) va ko‘z harakatlarining cheklanishi kuzatiladi. Diagnozni tasdiqlash uchun MRT yoki KT tekshiruvlaridan foydalaniladi.\n\nIzoh:\n- **III juft bosh miya nervi** – ko‘z harakatlariga va qorachiqni toraytiruvchi mushaklarga javob beradigan nerv. Uning zararlanishi strabizm (ko‘zlarning noto‘g‘ri holati), midriaz va qovoqning osilishi bilan namoyon bo‘ladi.\n- **Strabizm** – ko‘zlarning sinxron harakatlanmasligi. 'Uzoqlashtiruvchi' strabizm – bir ko‘zning chetga qarab turishi."
},
{
  "question": "Vaziyatli masala 3. Bemorda umumiy ko'rikda yuzning pastki qismida o'ng lab-burun burmachasi osilgan, 《roketkan, aparusy simptomlari musbat. Topik tashxis qo'ying.",
  "answer": "Topik tashxis: Markaziy yuz parezi (yuqori motor neyron zararlanishi). Ushbu holatda faqat yuzning pastki qismi zararlanadi, chunki yuqori qism ikkala yarimshardan ham innervatsiya oladi. 'Roketkan' simptomi – yuzni simmetrik qilishda qiyinchilik, 'Aparusy' simptomi – og‘iz chetining pasayishi. Sababi ko‘pincha miya tomir kasalliklaridir. MRT tavsiya etiladi.\n\nIzoh:\n- **Markaziy yuz parezi** – yuz nervining kortikal tolalarining zararlanishi natijasida yuzning faqat pastki qismi zararlanadi.\n- **Roketkan simptomi** – yuz mushaklarining kuchsizligi natijasida yuzning bir tomonida asimmetriya kuzatiladi.\n- **Aparusy simptomi** – bemorning og‘iz burchaklari va lab-burun burmachalarining osilishi."
},
{
  "question": "Vaziyatli masala 4. 58 yoshli bemorning shikoyati qulog'idagi shovqinga, muvozanatni saqlay olmasligiga, ayniqsa boshini burganida ko'ngil aynishga. Ob'ektiv: nistagm, Romberg simptomi musbat, vegetativ belgilar namoyon bo‘lmoqda. Ataksiyaning turini aniqlang.",
  "answer": "Ataksiyaning turi: Vestibulyar ataksiya. Ushbu ataksiya muvozanatni saqlashda qiyinchilik, nistagm (ko‘z soqqalarining majburiy harakati) va bosh harakatida simptomlarning kuchayishi bilan namoyon bo‘ladi. Romberg simptomi vestibulyar disfunktsiyani ko‘rsatadi. Tashxisni aniqlash uchun audiometriya, bosh MRТ va kalorik test o'tkaziladi.\n\nIzoh:\n- **Vestibulyar ataksiya** – muvozanatni saqlash tizimining vestibulyar qismining zararlanishi natijasida yuzaga keladi.\n- **Nistagm** – ko‘zlarning ritmik va nazoratsiz harakatlari.\n- **Romberg simptomi** – bemor ko‘zlari ochiq muvozanatni saqlasa-da, ko‘zini yumganda yiqilib ketish xavfi bo‘ladi."
},
{
  "question": "Vaziyatli masala 5. Bemor 30 yoshda. O'ng oyog'idagi quvatsizlik va chap oyog'idagi uyushish, kamarsimon og'riqqa shikoyat qilmoqda. Nevrostatus: o'ng oyoqda mushaklar kuchi sustlashgan, tonusi spastik tipda oshgan, patologik reflekslar (Oppengey va Sheffer musbat), o'tkazuvchi tipda chap oyoqda yuzaki sezgi pasayishi, o'ng oyoqda chuqur sezgi pasayishi. Topik tashxis qo'ying. Qaysi tekshirish usuli to'g'ri tashxis qo'yishda yordam beradi?",
  "answer": "Topik tashxis: Orqa miyaning qisman zararlanishi (myelopatiya). Ushbu holatda motor va sezgi yo‘llarining o‘tuvchi zararlanishi kuzatiladi. Oppengey refleksi (oyoqni silkitishda barmoqning sekin ko‘tarilishi) va Sheffer refleksi (Akill refleksi paytida barmoqning pastga qarab harakati) patologik belgilar hisoblanadi. To‘g‘ri tashxis uchun orqa miya MRT o‘tkazilishi kerak.\n\nIzoh:\n- **Myelopatiya** – orqa miyaning zararlanishi.\n- **Oppengey refleksi** – oyoq kaftining yuqoriga ko‘tarilishi (UMN zararlanishi belgisi).\n- **Sheffer refleksi** – oyoqning pastga qarab majburiy harakati (UMN zararlanishi belgisi).\n- **O‘tkazuvchi sezgi buzilishi** – orqa miyaning bir tomonining zararlanishida bir xil tomonda chuqur sezgi, qarama-qarshi tomonda yuzaki sezgi pasayishi."
},
{
  "question": "Vaziyatli masala 6. Bemoming shikoyatlari qoqab (qalqib ketish, suyuqlik ichganda yutaolmaslik) ketishga, ovoz tonlari o'zgarganligiga, dimog'ida gapirishiga. Ob'ektiv: tilda fibrillyar uchishlar, atrofiya belgilari bor. Topik tashxis quying, falajlanish turini aniqlang.",
  "answer": "Topik tashxis: Periferal yuz nervi (VII juft nerv) zararlanishi. Bu holatda yuz mushaklari falajlanadi, dimog‘ida gapirishda qiyinchilik va yutishning qiyinlashishi kuzatiladi. Tilda fibrillyar uchishlar va atrofiya belgilari periferal nevropatiya mavjudligini ko‘rsatadi. Tashxisni tasdiqlash uchun yuzning VII juft nervining faoliyatini baholash kerak.\n\nIzoh:\n- **VII juft bosh miya nervi** – yuzni ifodalovchi va yutish jarayoniga yordam beruvchi nerv. Uning zararlanishi yuzning bir tomonida falajlanishga olib keladi.\n- **Fibrillyar uchishlar** – mushaklarning noaniq va ritmsiz qisqarishi, periferik nevropatiyaning belgisidir.\n- **Atrofiya** – mushak to‘qimalarining mayda bo‘lishi, zararlangan hududdagi mushaklarning ishlashini yo‘qotishi."
},
{
  "question": "Vaziyatli masala 7. Bemomi asab tizimini tekshirganimizda tili og'iz ichida va tashqariga chiqarganda chap tomonga deviassiyalashgan, o'ng 4o'I va oyoqda markaziy gemiparez. Savol: Qaysi alternatsiyalashgan sindrom kuzatilmoqda.",
  "answer": "Alternatsiyalashgan sindrom: **Brachiofacial alternatsiyalashgan sindrom**. Bu holat markaziy nerv tizimining zararlanishi natijasida yuzning va ekstremitalarning bir tomonidagi falajlanishni anglatadi. Bosh miya va orqa miya o‘rtasida simmetrik tarzda zararlanish bo‘ladi. Tashxisni tasdiqlash uchun miya MRI yoki KT tekshiruvlari o‘tkaziladi.\n\nIzoh:\n- **Alternatsiyalashgan sindrom** – agar bir tomonning bosh miya va orqa miya zararlanishi mavjud bo‘lsa, o‘sha tomonning bosh va bo‘yinturuq mushaklarida falajlanish va boshqa simptomlar kuzatiladi."
},
{
  "question": "Vaziyatli masala 8. Bemorda yuzining chap tomonida mimik mushaklar falajlangan. Giperakuziya, chap ko'zida yoshinqirash bor, Raketka, Parus simptomlari musbat. Savol: Qaysi juft bosh miya nervi zararlangan? Topik tashxis qo'ying.",
  "answer": "Zararlangan nerv: **VII juft bosh miya nervi (nervus facialis)**. Bu nervning zararlanishi yuz mimikasi falajlanishi, giperakuziya (baland tovushlarga sezgirlikning oshishi) va yoshinqirash kabi simptomlarga olib keladi. Tashxisni tasdiqlash uchun yuz mushaklarining kuchsizlik darajasi va reflekslar tekshirilishi kerak.\n\nIzoh:\n- **VII juft bosh miya nervi** – yuz mushaklarini boshqaradi, shu bilan birga tovushlarni qabul qilishda yordam beradi. Uning zararlanishi giperakuziya va mimik mushaklar falajlanishiga olib keladi.\n- **Giperakuziya** – ovozga yuqori sezuvchanlik.\n- **Raketka va Parus simptomlari** – yuzning bir tomonidagi mushaklarning bo‘shashi va yuzning asimmetrik holati."
},
{
  "question": "Vaziyatli masala 9. Bemoming shikoyati bosh aylanishga, muvozanatni saqlay olmasligiga. Ob'ektiv, miyacha sinamalari o'ng tomonda musbat, mushaklar tonusi pasaygan. Romberg holatida tura olmaydi. Savol: ataksiyani turini aniqlang.",
  "answer": "Ataksiyaning turi: **Cerebellar ataksiya**. Bu holat miyachadagi disfunktsiyalar natijasida yuzaga keladi, bunda mushaklar tonusining pasayishi va muvozanatni saqlashda qiyinchiliklar kuzatiladi. Romberg simptomi musbat bo‘lishi cerebellar disfunktsiyani ko‘rsatadi. Tashxisni tasdiqlash uchun miyacha MRI o‘tkaziladi.\n\nIzoh:\n- **Cerebellar ataksiya** – miyacha zararlanganda yuzaga keladigan ataksiya turi, bunda mushaklar tonusi pasayadi va muvozanatni saqlash qiyinlashadi.\n- **Romberg testi** – ko‘zlar yopiq bo‘lib turganda bemorning muvozanatini saqlash qobiliyatini tekshiradi. Agar bemor yiqilsa, bu miyacha yoki vestibulyar tizim zararlanishi mumkinligini ko‘rsatadi."
},
{
  "question": "Vaziyatli masala 10. Bemor 30 yoshda o'ng oyog'idagi quvatsizlik va chap oyog'idagi uvushishga, kamarsimon og'riqqa shikoyat qilmqda. I yildan buyon hasta. Nevrostatus: o'ng oyoqda mushaklar kuchi sustlashgan, tonusi spastik tipda oshgan, patologik reflekslar Oppengeym va Sheffer musbat. O'tkazuvchi tipda chap oyoqda yuzaki sezgini pasayishi. O'ng oyoqda chuqur sezgi pasayishi. Topik tashxis qo'ying.",
  "answer": "Topik tashxis: **Orqa miyaning shikastlanishi (myelopatiya)**. Bu holatda motor va sezgi yo‘llari bir xil darajada zararlanadi, spastik tipda tonus oshishi va patologik reflekslar (Oppengeym va Sheffer musbat) mavjud. Tashxisni tasdiqlash uchun orqa miya MRT o‘tkazilishi kerak.\n\nIzoh:\n- **Myelopatiya** – orqa miyaning zararlanishi, bunda motot va sezgi yo‘llari shikastlanadi.\n- **Oppengeym refleksi** – oyoq kaftini silkitishda barmoqning sekin ko‘tarilishi (UMN zararlanishi).\n- **Sheffer refleksi** – oyoqning pastga qarab harakati (UMN zararlanishi)."
},
{
  "question": "Vaziyatli masala 11. Bemor 52 yosh. Xisobchi bo'lib ishlaydi. Tinch xolatda hech narsa bezovta qilmasada aqliy mehnat va jismoniy xarakatdan so'ng bosh og'riği, bosh aylanishi, umumiy quvvatsizlik, charchash paydo bo'lmoqda. Bemor ko'p chekadi, ba'zan alkogol ichimlik ichib turadi, yog'li ovqatlar ko'p istemol qiladi. AB 110/80 mm sm ust teng. Nevrostatusda o'qchoqli o'zgarishlar aniqlanmadi. Bemorda qanday tekshirish usullari o'tkazish kerak? Sizning tashxisingiz.",
  "answer": "Tashxis: **Gipertenziya va miya qon tomirlari aterosklerozi**. Bemorda bosh og'rig'i, bosh aylanishi, quvvatsizlik va charchash – miya qon tomirlari patologiyasi (ateroskleroz, gipertoniya) alomatlaridir. Tashxisni tasdiqlash uchun miya MRI, dopplerografiya, va qon tomirlarining holatini tekshirish zarur. Bemorning alkogol iste'moli va yog'li ovqatlar ko'p iste'mol qilish ko'rinishida, ko'krak va bosh miya tomirlarining zararlanishi mumkinligini ko'rsatadi.\n\nIzoh:\n- **Gipertenziya** – qon bosimining uzoq muddatda yuqori bo'lishi, miya tomirlarining zararlanishiga olib kelishi mumkin.\n- **Aterosklerozi** – arteriyalar devorlarida yog'lar va xolesterinning to'planishi natijasida tomirlarning torayishi va qattiqlashishi."
},
{
  "question": "Vaziyatli masala 12. Bemor 23 yosh. Grippdan so'ng ikkala oyoqni yaxshi ishlamayotganini sezgan. Nevrostatus tekshirilganda oyoqlarda spastik paraparez. O'rta va pastki qorin reflekslari chaqinilmayapti. Tizza va axill reflekslari kuchaygan. Babinskiy simptomi 2 tomonda ham musbat. Orqa miyaning shikastlangan qismini aniqlang.",
  "answer": "Orqa miyaning shikastlangan qismi: **Orqa miya (kamar va bel) mintaqasi**. Spastik paraparez va Babinskiy simptomi musbat bo‘lishi orqa miya motor yo‘llarining yuqori qismlarida (bel va kamar) zararlanishni ko‘rsatadi. Shuningdek, tizza va axill reflekslarining kuchayishi, orqa miyaning yuqori darajadagi shikastlanishiga ishora qiladi. Tashxisni tasdiqlash uchun orqa miya MRT o‘tkaziladi.\n\nIzoh:\n- **Spastik paraparez** – oyoqlarda harakatni cheklash, mushak tonusining oshishi (UMN zararlarida).\n- **Babinskiy simptomi** – umumbosh miya zararlanishi bilan bog‘liq bo‘lib, oyoqning katta barmog‘ining yuqoriga qarab ko‘tarilishi.\n- **Axill refleksi** – orqa miya (kamar) darajasida refleksning ortishi."
},
{
  "question": "Vaziyatli masala 13. 20 yoshli bemorda, sovuq qotishdan so'ng tana xaroratining 39C gacha ko'tarilishi, boshda og'riq, titrash, butun tanada og'riq kuzatilib, uch kundan keyin esa oyoqda kuchsizlik, yurishning qiyinlashishi, peshob va axlatning tutilishi paydo buldi. Qanaqa asorat haqida so'z ketayapti?",
  "answer": "Asorat: **Guillain-Barré sindromi**. Bu autoimmun kasallikda periferik asab tizimi zararlanadi, natijada kuchsizlik, yurish qiyinlishuvi va aksessuar funktsiyalar (peshob, axlat tutilishi) buzilishi kuzatiladi. Tashxisni tasdiqlash uchun likvor tahlili, elektromiyografiya va nerv elektrofiziologik tekshiruvlar kerak.\n\nIzoh:\n- **Guillain-Barré sindromi** – tez rivojlanayotgan periferik nervlarning demielinizatsiyasi. Kasallik odatda infeksiya yoki virusli kasallikdan so‘ng yuzaga keladi.\n- **Likvor tahlili** – miyaning yoki orqa miya suyuqligining tahlili. Guillain-Barré sindromi uchun bu tahlilda protein darajasining oshishi kuzatiladi."
},
{
  "question": "Vaziyatli masala 14. Bemor 45 yoshda, psixo-emotsional zurig‘ishdan keyin o‘zini yomon his etdi, boshi og‘ridi, keyinchalik xushini yugotdi. Anamnez: Bemor dispanser ro‘yhatda gipertoniya kasalligini tashxisi bilan turadi. Ko‘rikda: yuzi qizargan, xushi - soporoz. AB- 180/190 mm sm ust teng. Nevrostatusda: parez, plegiyalar yo‘q, sezuvchanlik o‘zgarmagan. Meningial simptomlar bor. Orqa miya suyuqligida- oksil-xujara dissotsiatsiyasi, qon aralash. Klinik diagnoz. Davo.",
  "answer": "Klinik tashxis: **Subaraxnoidal qon quyilishi (suhbatning ehtimoliy sababi - gipertoniya)**. Bemorning psixo-emotsional stressdan keyin xushsizlanishi, bosh og‘rig‘i va meningial simptomlar (og‘riq, yuqori bosim) subaraxnoidal qon quyilishining mumkinligini ko‘rsatadi. Oksil-xujara dissotsiatsiyasi va qon aralashiklarining aniqlanishi bu tashxisini tasdiqlaydi. Tashxisni tasdiqlash uchun miya KT yoki MRI o‘tkaziladi. Davolash: konservativ davolash, agar zarur bo‘lsa, jarrohlik yordamiga murojaat qilish.\n\nIzoh:\n- **Meningial simptomlar** – bosh miyaning qobiq qismi (meninges)ning ta'sirlanishini ko‘rsatadi, ya'ni qon quyilishi bilan bog‘liq.\n- **Oksil-xujara dissotsiatsiyasi** – likvorda hujayralarning o‘zaro ajralishi, qon aralashishi."
},
{
  "question": "Vaziyatli masala 15. Bemor 68 yoshda, ertalab uxlab turgandan so‘ng, o‘ng qo‘lida uvushishga, xarakat cheklanganiga shikoyat qildi, bir necha soat o‘tgach nutq o‘zgarishi kuzatildi. Anamnezda yurak va bosh miya qon tomirlari aterosklerozi tashxisi bilan nazoratda turadi. Nevrostatus: BMN-konvergensiya parez, VII va XII juft markaziy parezi. Pay reflekslari - anizorefleksiya D=S, patologik reflekslar - Babinskiy, Rossolimo musbat. Gemigipesteziya o‘ngda. Sizning klinik tashxisingiz va davolash rejasi.",
  "answer": "Klinik tashxis: **Ishemik insult (yurak va bosh miya qon tomirlari aterosklerozining oqibati)**. Bemorda yuzning o‘ng tomonida paralich, nutqning o‘zgarishi, patologik reflekslar (Babinskiy, Rossolimo) va gemigipesteziya (sezgi buzilishi) bor. Bu holat, yurak va bosh miya qon tomirlarining ateroskleroziga oid ishemik insultni ko‘rsatadi. Davolash: trombolitik terapiya, antihipertenziv dori-darmonlar, va reabilitatsiya davosi zarur.\n\nIzoh:\n- **Ishemik insult** – miya qon tomirlarining torayishi yoki to‘silishi natijasida yuzaga keladi. Bunda miya hujayralari kislorodsiz qoladi, natijada neyronlarning o‘limi va motor va sezgi funktsiyalarining buzilishi sodir bo‘ladi.\n- **Anizorefleksiya** – o‘ng va chap tomondagi reflekslarning asimmetrikligi, bu o‘ng tomondagi markaziy paralichga ishora qiladi."
},
{
  "question": "Vaziyatli masala 16. Bemor 40 yoshda, tromboflebiti bilan xastalangan. Anamnezda: ikki kun oldin birdan yuzining qiyshayishi, o‘ng qo‘l va oyog‘ida quvvatsizlik vujudga keldi. 2-3 soat mobaynida paralich kuchaydi, nutqi qiyinlashdi, lekin gapni ugadi. Ob'ektiv: A/D 115/65 mm sm, puls o‘ngda kuchli. O‘ng qo‘l va oyog‘ida falajlik. Mushaklar tonusi o‘ngda oshgan. Pay reflekslari o‘ngda oshgan. Patologik reflekslar - Babinskiy va Oppengeym o‘ngda musbat. Gemianesteziya o‘ngda. Taxlillar: EChT - 12 mm/s, leykotsitlar - 8000, PTI - 118%. Klinik tashxisni asoslang. Davolash.",
  "answer": "Klinik tashxis: **Ishemik insult, miya qon tomirlarining tromboziga bog‘liq**. Bemorning yuzining qiyshayishi, qo‘l va oyog‘ida falajlik, nutq qiyinchiliklari, patologik reflekslar va gemianesteziya (sezuvchanlikning yo‘qolishi) – bu ishemik insult belgilari. EChTda past tezlik, trombozning mavjudligini ko‘rsatadi. Davolash: trombolitik terapiya (agregatlarni kamaytirish), qon bosimini nazorat qilish, reabilitatsiya. Antikoagulyantlar va antiagregantlar dori vositalari qo‘llanilishi kerak.\n\nIzoh:\n- **Ishemik insult** – miya qon tomirlarining to‘silishi natijasida yuzaga keladi. Tromboz miya tomirlarini to‘sib qo‘yadi, bu esa ishemiyani keltirib chiqaradi.\n- **Trombolitik terapiya** – qon tomirlaridagi tromblarni eritish uchun ishlatiladigan davolash usuli."
},
{
  "question": "Vaziyatli masala 17. Bemorda o'tkir stress vaqtida kuchli bosh og'riqlar paydo bo'lgan va xushini yuqotgan. Tekshiruvdan so'ng meningial belgilar aniqlandi. Bosh miyani boshqa organik zararlanish belgilari aniqlanmadi. Likvorda lyumbal punksiya paytida qon aralashgani aniqlandi. Klinik tashxis qo'ying.",
  "answer": "Klinik tashxis: **Subaraxnoidal qon quyilishi**. Bosh og‘rig‘i va xushni yo‘qotish, meningial belgilar bilan birga, subaraxnoidal qon quyilishining aniq belgilaridir. Likvorda qon aralashishi ham bu tashxisni tasdiqlaydi. Tashxisni tasdiqlash uchun miya KT yoki MRI o‘tkaziladi. Davolash: konservativ davolash (analjeziklar, gipertoniya boshqaruvi), zarur bo‘lsa jarrohlik aralashuvi.\n\nIzoh:\n- **Meningial belgilar** – bosh miyaning qobiq qismi (meninges) ta'sirlanishini ko‘rsatadi.\n- **Subaraxnoidal qon quyilishi** – bu bosh miyadagi qon tomirlarida qon to‘planishi, ko‘pincha subarachnoid bo‘shliqda ro‘y beradi."
},
{
  "question": "Vaziyatli masala 18. Bemor reanimatsiya bo'limiga xushsiz xolda keltirilgan (koma). Qorachig'lari keskin toraygan, yorug'likka javobi yo'q, Cheyn-Stoks tipida nafas olmoqda. Yurak-qon tomir tizimi xilpillovchi aritmiya. Nevrostatusda gormeotoniya. Tashxis quying, Likvorda kanday o'zgarishlar ko'zatilishi mumkin? Tashxisni aniqlash uchun qanday qo'shimcha tekshirishlar o'tkazish zarur?",
  "answer": "Klinik tashxis: **Qattiq miya shikastlanishi yoki miya o‘tkir zararlanishi (masalan, subaraxnoidal qon quyilishi yoki miyaga qon ketishi)**. Qorachiqning yorug‘likka javob bermasligi, Cheyn-Stoks nafas olish turi, xilpillovchi aritmiya va gormeotoniya – bosh miyaning og‘ir shikastlanishini ko‘rsatadi. Likvorda qon yoki yuqori protein darajalari ko‘rsatilishi mumkin. Tashxisni aniqlash uchun miya KT, MRI va likvor tahlili zarur. Davolash: reanimatsiya, neyroprotektiv terapiya va zarur bo‘lsa jarrohlik yordami.\n\nIzoh:\n- **Cheyn-Stoks nafas olish turi** – miyadagi zararlanish natijasida nafas olishning tartibsizligi, tibbiyotda og‘ir holatni ko‘rsatadi.\n- **Gormeotoniya** – miya faoliyatining buzilishi, ko‘pincha jiddiy nevrologik holatga ishora qiladi."
},

{
  "question": "Vaziyatli masala 19. Bemorda subaraxnoidal qon quyilishi aniqlangan. O'tkazilgan davoga qaramasdan bemorda BMN VII juft markaziy turda falaj rivojlangan, Chap qo‘l va oyoqlarda xarakatlar cheklangan, Babinskiy, Rossolimo simptomlari chapda musbat. Tashxis qo'ying. Qayta lyumbal punksiyani qanday maqsadda va muddatda o'tkazish mumkin?",
  "answer": "Klinik tashxis: **Subaraxnoidal qon quyilishi va miya o‘tkir shikastlanishi (insult)**. Bemorda subaraxnoidal qon quyilishi bo‘lishi natijasida VII juft nervi markaziy falaj rivojlanmoqda. Chap qo‘l va oyoqlarda harakat cheklanishi, Babinskiy va Rossolimo simptomlari musbat bo‘lishi miya o‘tkir zararlanishi belgisidir. Qayta lyumbal punksiyani 5-7 kun o‘tgach, qonning miqdori va bosimni o‘lchash maqsadida o‘tkazish mumkin. Davolash: konservativ davolash, miya tomirlarining qon aylanishini yaxshilash va neyroprotektiv terapiya.\n\nIzoh:\n- **Subaraxnoidal qon quyilishi** – bu miya va uning atrofida qon to‘planishi, ko‘pincha og‘ir natijalarga olib keladi.\n- **Lyumbal punksiya** – miya suyuqligini olish va tahlil qilish jarayoni, bu qonning miqdori va o‘zgarishlarini aniqlashga yordam beradi."
},
{
  "question": "Vaziyatli masala 20. Bemor 10 yildan beri gipertoniya kasalligi bilan og‘riydigan 48 yoshli bemor, to‘satdan keskin bosh aylanishini sezdi, turmoqchi bo‘lganda yiqildi. Nutq tushunarsiz, oyoq-qo‘llarda ortiqcha harakatlar, noqulayliklar. 20 minutdan so‘ng bemor xushini yo‘qotdi. Ob'ektiv: axvoli juda og‘ir, puls 120 minutda, nafas to‘lqinsimon, kam. Chuqur koma, mushaklar atoniyasi va arefleksiya. Sizning taxminiy diagnozingiz? Topik tashxis?",
  "answer": "Taxminiy tashxis: **Hemorragik insult**. Bemorning gipertoniya tarixiga asoslanib, to‘satdan bosh aylanishi, yiqilish, nutqning tushunarsizligi, ortiqcha harakatlar va xushni yo‘qotish – hemorragik insultning belgilari. Chuqur koma, arefleksiya va mushaklar atoniyasi insultning og‘ir shaklini ko‘rsatadi. Topik tashxis: **Miya qon tomirlarining yirtilishi va miya ichidagi qon quyilishi**. Tashxisni tasdiqlash uchun miya KT yoki MRI, likvor tahlili zarur. Davolash: jarrohlik yordam va intensiv davolash.\n\nIzoh:\n- **Hemorragik insult** – miya qon tomirlarining yirtilishi yoki tutilishi natijasida yuzaga keladi, bu esa miya ichida qon to‘planishiga olib keladi."
},
{
  "question": "Vaziyatli masala 21. Bemor 30 yosh. O'tgan yili Rossiyaga ishlaganani borgan, o'shanda isitma, bosh og'rishi, bosh aylanishi, uyquchanlik, ko'zni xarakatlantiruvchi mushaklarni falaji, nistagm, ba'zan ortiqcha so'lak ajralishi, yuzni yog'simon bo'lib qolishi kuzatilgan. Davolanib axvoli yaxshilangan. Oxirgi kunlarda bemorda yurishi sekinlashib qo'lida qaltirash paydo bo'lib qoldi, oldinga munkib ketish xolatlari kuzatilmoqda, gapirishi sekin va past bo'lib qoldi. Sizning tashxisingiz va davolash taktikangiz?",
  "answer": "Klinik tashxis: **Parkinson kasalligi**. Bemorning bosh og‘rishi, bosh aylanishi, nistagm, yuzning yog‘simon bo‘lishi va ko‘z mushaklarining falaji allaqachon nevrologik buzilishlar sifatida ko‘rinadi, keyin esa yurishning sekinlashishi, qo‘lda qaltirash, oldinga munkib ketish, gapirishning pastligi Parkinson kasalligi belgilari. Davolash: dopamin agonistlari (levodopa, dopamin receptorlarining stimulyatorlari) va simptomatik terapiya. Reabilitatsiya, fizioterapiya, kasalni to‘g‘ri boshqarish zarur. \nIzoh: Parkinson kasalligi – bu neyrodegenerativ kasallik bo‘lib, harakatlarni boshqarishda muammolar, titrash, sekin yurish va mushaklarning qattiqligi bilan tavsiflanadi."
},
{
  "question": "Vaziyatli masala 23. Bemor boshda diffuz, yorilib ketgudek qattik og'riq bulayotganidan shikoyat qilmoqda. Og'riqni yorug'lik va tovushlar kuchaytirmokda, ko'ngil aynib qayt qilmoqda, umumiy giperesteziya kuzatilmoqda, bo'yin orqaga tortilgan, oyoq tizza bo'g'imidan bukilib qoringa tortilgan. O'chokli belgilar yo'q. Ensa mushaklarini rigidligi va Keming simptomi musbat. Bemorda kanday sindrom kuzatilmokda?",
  "answer": "Klinik tashxis: **Meningit**. Bemorning boshidagi diffuz og‘riq, yorug‘lik va tovushdan sezgirlikning kuchayishi (fotofobiya va fonofobiya), ko‘ngil aynishi, giperesteziya, bo‘yinning rigidligi va Keming simptomi meningitning klassik belgilaridir. Likvor tahlili orqali meningitni tasdiqlash mumkin. Davolash: antibiotiklar, yallig‘lanishga qarshi dorilar va simptomatik terapiya.\nIzoh: Meningit – bu bosh miyaning membranalarining yallig‘lanishi bo‘lib, bakterial yoki virusli infektsiya natijasida yuzaga keladi."
},
{
  "question": "Vaziyatli masala 24. Bemor 34 yosh peshob va axlat tuta olmayotganidan shikoyat qilib keldi. Anamnezidan bir xafta oldin ORVI bilan xastalangan. Ob'ektiv ko'rilganda somatik statusda xech qanday patologik o'zgarish aniqlanmadi. Nevrostatus tekshirilganda xarakat buzilishlari yo'q. Anogenital soxada sezuchanlikning barcha turlari buzilgan. Anal refleks yo'q, peshob va axlat tutib turormaslik aniklandi. Tashxis qo'ying va zararlanish o'chog'ini aniglang.",
  "answer": "Klinik tashxis: **Aksial miyelopatiya (spinal kord zararlanishi)**, ehtimol virusli etiologiya, ORVI bilan bog‘liq. Peshob va axlatni tutib turishning buzilishi, anal reflekslarning yo‘qligi, sezuvchanlikning yo‘qolishi va harakatlarning normal bo‘lishi aksial (orqa) miyelopatiya belgilari hisoblanadi. Zararlanish o‘chog‘i: **Orqa miyadagi sakral darajadagi neyronlar (S2-S4).** Davolash: antivirus terapiya, reabilitatsiya, peshob va axlatni boshqarish uchun muolajalar.\nIzoh: Aksial miyelopatiya – bu orqa miya zararlanishi natijasida yuzaga keladigan simptomlar to‘plami."
},
{
  "question": "Vaziyatli masala 25. Bemor 32 yoshda shikoyatlari: uyqu yo'qligiga, qo'lda xarakat cheklanganiga va qaltirash borligiga. Kasalligini ikki yil avval ORVI o'tkazganligi bilan bog'laydi, kasalligi tana xarorati oshishi bilan boshlangan. Korikda: Yuzi nikobsimon, ovozi pasaygan, gapirishi monoton, giper solivatsiya kuzatilyapti. Yurishi mayda kadam, parez paralichlar yo'q. Mushaklar tonusi ortgan, tishli g'ildirak belgisi bor. Qo'lbarmog'larida tremor bor. Savol: Klinik diagnoz.",
  "answer": "Klinik tashxis: **Shiyofreniform sindrom yoki Parkinsonizm (boshqa ehtimol: Post-ORVI sindromi)**. Bemorning uyqusizlik, qaltirash, yuzning nikobsimon ko‘rinishi, ovozning pasayishi, monoton gapirish va giper salivatsiya Parkinsonizmning belgilaridir. Shuningdek, ORVI’dan keyin yuzaga kelgan nevrologik simptomlar, tishli g‘ildirak belgisi va tremor Parkinson kasalligining post-ORVI shakli sifatida qaralishi mumkin. Davolash: dopamin agonistlari (levodopa), simptomatik terapiya va reabilitatsiya.\nIzoh: Parkinsonizm – bu neyrodegenerativ kasallik bo‘lib, harakatlarni boshqarishda muammolar va titrash bilan tavsiflanadi."
}
];