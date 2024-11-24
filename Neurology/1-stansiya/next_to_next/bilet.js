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
  }
];