const tickets = [
  {
  "question": "Bilet 1. Ishemik insultni davolash qanday amalga oshiriladi?",
  "answer": "Ishemik insultda asosiy davolash usullari quyidagilar: \n 1. Trombolitik terapiya (Alteplaza) \n 2. Antikoagulyantlar va antitrombotiklar (Heparin, Aspirin) \n 3. Qon bosimini nazorat qilish (Labetalol) \n 4. Giperglisemiyani nazorat qilish (Insulin) \n 5. Neuroprotektsiya (Nimodipin) \n 6. Reabilitatsiya va fizik terapiya"
  },
  {
  "question": "Bilet 2. Gemorragik insultni davolash qanday amalga oshiriladi?",
  "answer": "Bilet 1. Gemorragik insultni davolashda asosiy maqsad qon ketishini to'xtatish, miyadagi bosimni pasaytirish va bemorni reabilitatsiya qilishdir. Davolashda quyidagi usullar qo'llaniladi: \n 1. Gipertenziya va gipovolemiya nazorati \n 2. Miyaning bosimini kamaytirish (mannit, diuretiklar) \n 3. Neyroxirurgik yordam (qon to'planishini olib tashlash) \n 4. Tromboz va emboliyani oldini olish \n 5. Reabilitatsiya va fizioterapiya"
},
{
  "question": "Bilet 3. O'tkir meningitlarni davolash qanday amalga oshiriladi?",
  "answer": "O'tkir meningitlarni davolashda maqsad infeksiya sababini aniqlash va unga qarshi davolashni boshlashdir. Asosiy usullar: \n 1. Antibiotiklar (bakterial meningit uchun) yoki antiviruslar (virusli meningit uchun) \n 2. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 3. Suv-salish muvozanatini tiklash \n 4. Qon bosimini nazorat qilish \n 5. Qo'shimcha reabilitatsiya va simptomatik davolash"
},
{
  "question": "Bilet 4. Surunkali meningitlarni davolash qanday amalga oshiriladi?",
  "answer": "Surunkali meningitlarni davolashda infeksiya yoki yallig'lanishning sababini aniqlash muhimdir. Davolash usullari quyidagilardan iborat: \n 1. Uzun muddatli antibiotiklar yoki antiviral davolash \n 2. Immunosupressiv terapiya (autoimmun meningitda) \n 3. Kortikosteroidlar \n 4. Simptomatik davolash (og'riqni kamaytirish, tana haroratini boshqarish) \n 5. Qo'llab-quvvatlovchi terapiya va reabilitatsiya"
},
{
  "question": "Bilet 5. Yuz nervi neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "Yuz nervi neyropatiyasini davolashda asosiy maqsad nervning tiklanishini qo'llab-quvvatlash va alomatlarni kamaytirishdir. Davolash usullari: \n 1. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 2. Fizikal terapiya (mushaklarni tiklash) \n 3. Analjeziklar (og'riqni kamaytirish) \n 4. Antiviral davolash (agar infektsion sabablar mavjud bo'lsa) \n 5. Reabilitatsiya va fizioterapiya"
},
{
  "question": "Bilet 6. Uch shoxli nerv nevralgiyasini davolash qanday amalga oshiriladi?",
  "answer": "Uch shoxli nerv nevralgiyasini davolashda asosiy maqsad og'riqni boshqarish va nervning tiklanishini ta'minlashdir. Davolash usullari: \n 1. Antikonvulsantlar (karbamazepin, gabapentin) \n 2. Analjeziklar (og'riqni kamaytirish) \n 3. Nervni blokada qilish (anesteziya) \n 4. Neyroxirurgik aralashuv (qisqarish yoki nevrostimulyatsiya) \n 5. Vitaminlar va qo'llab-quvvatlovchi terapiya"
},
  {
  "question": "Bilet 7. n.medianus nervini zararlanishida davolash qanday amalga oshiriladi?",
  "answer": "n.medianus nervini zararlanishida davolash asosan alomatlarni kamaytirish va tiklanishni qo'llab-quvvatlashga qaratilgan. Davolash usullari: \n 1. Fizioterapiya va mashqlar \n 2. Og'riqni kamaytirish uchun analjeziklar \n 3. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 4. Jarrohlik davolash (agar konservativ usullar samarasiz bo'lsa) \n 5. Reabilitatsiya va qo'llab-quvvatlovchi terapiya"
},
{
  "question": "Bilet 8. Kana ensefalitini davolash qanday amalga oshiriladi?",
  "answer": "Kana ensefalitini davolashda asosiy maqsad infeksiya bilan kurashish va asoratlarni oldini olishdir. Davolash usullari: \n 1. Antiviral davolash (zidovudina yoki boshqa mos preparatlar) \n 2. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 3. Suv-salish muvozanatini saqlash \n 4. Simptomatik davolash (og'riqni kamaytirish, ko'ngil aynishiga qarshi) \n 5. Reabilitatsiya va neyroprotezlash"
},
{
  "question": "Bilet 9. Gemorragik insultni qorinchalarga qon quyilishini davolash qanday amalga oshiriladi?",
  "answer": "Gemorragik insultni qorinchalarga qon quyilishini davolashda qon ketishini to'xtatish va miyadagi bosimni kamaytirish muhim. Davolash usullari: \n 1. Neyroxirurgik aralashuv (qon to'planishini olib tashlash) \n 2. Mannit yoki boshqa diuretiklar yordamida miyadagi bosimni kamaytirish \n 3. Trombolitik yoki antikoagulyantlar (qon quyilishining oldini olish) \n 4. Qo'llab-quvvatlovchi davolash (ventilyatsiya, elektrolit muvozanati) \n 5. Reabilitatsiya va post-insult davolash"
},
{
  "question": "Bilet 10. n.radialis neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "n.radialis neyropatiyasini davolashda maqsad og'riqni kamaytirish va nervning tiklanishini qo'llab-quvvatlashdir. Davolash usullari: \n 1. Kortikosteroidlar yoki boshqa yallig'lanishga qarshi dori-darmonlar \n 2. Fizioterapiya (mushtlarni tiklash uchun mashqlar) \n 3. Analjeziklar (og'riqni kamaytirish) \n 4. Jarrohlik davolash (nevroplastiya yoki nervni tiklash) \n 5. Reabilitatsiya va qo'llab-quvvatlash terapiyasi"
},
{
  "question": "Bilet 11. Ikkilamchi ensefalitlarni davolash qanday amalga oshiriladi?",
  "answer": "Ikkilamchi ensefalitlarni davolashda asosiy maqsad infeksiya sababini davolash va miyadagi yallig'lanishni kamaytirishdir. Davolash usullari: \n 1. Antiviral yoki antibakterial davolash (agar infektsion sabab aniqlansa) \n 2. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 3. Suv-salish muvozanatini saqlash \n 4. Simptomatik davolash (og'riqni kamaytirish, konvulsiyalarni nazorat qilish) \n 5. Reabilitatsiya va fizioterapiya"
},
  {
  "question": "Bilet 12. Mielit kasalligi davolash qanday amalga oshiriladi?",
  "answer": "Mielit kasalligi davolashda yallig'lanishni kamaytirish va nerv tizimining tiklanishini qo'llab-quvvatlash muhimdir. Davolash usullari: \n 1. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 2. Antiviral yoki antibakterial dori-darmonlar (infektsion sabab aniqlansa) \n 3. Simptomatik davolash (og'riqni kamaytirish, haroratni tushirish) \n 4. Fizioterapiya va reabilitatsiya (harakatlarni tiklash) \n 5. Qo'llab-quvvatlovchi terapiya"
},
{
  "question": "Bilet 13. Polimielit kasalligini davolash qanday amalga oshiriladi?",
  "answer": "Polimielit kasalligi davolashda infeksiya tarqalishining oldini olish va asoratlarni kamaytirish muhim. Davolash usullari: \n 1. Antivirus dori-darmonlar \n 2. Yallig'lanishga qarshi dorilar (kortikosteroidlar) \n 3. Simptomatik davolash (og'riq, isitma, spazmlar) \n 4. Fizioterapiya va reabilitatsiya (mushtlarni tiklash, harakatlarni qayta tiklash) \n 5. Imunoterapiya (agar zarur bo'lsa)"
},
{
  "question": "Bilet 14. n.ulnaris neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "n.ulnaris neyropatiyasini davolashda asosiy maqsad nervning tiklanishini qo'llab-quvvatlash va og'riqni kamaytirishdir. Davolash usullari: \n 1. Analjeziklar (og'riqni kamaytirish) \n 2. Fizioterapiya va mashqlar (mushtlarni tiklash uchun) \n 3. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 4. Jarrohlik davolash (nervni tiklash yoki dekompressiya) \n 5. Reabilitatsiya terapiyasi"
},
{
  "question": "Bilet 15. n.peroneus neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "n.peroneus neyropatiyasini davolashda asosiy maqsad nervning tiklanishini va harakatlarni qayta tiklashdir. Davolash usullari: \n 1. Fizioterapiya (mushaklarni tiklash uchun mashqlar) \n 2. Analjeziklar (og'riqni kamaytirish) \n 3. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 4. Jarrohlik davolash (nervni tiklash yoki dekompressiya) \n 5. Reabilitatsiya terapiyasi"
},
{
  "question": "Bilet 16. n.tibialis neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "n.tibialis neyropatiyasini davolashda nerv tizimining tiklanishini qo'llab-quvvatlash va simptomlarni kamaytirish muhimdir. Davolash usullari: \n 1. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 2. Analjeziklar (og'riqni kamaytirish) \n 3. Fizioterapiya (mushaklarni tiklash uchun mashqlar) \n 4. Jarrohlik davolash (nervni tiklash yoki dekompressiya) \n 5. Reabilitatsiya terapiyasi"
},
  {
  "question": "Bilet 17. Leptomeningitni davolash qanday amalga oshiriladi?",
  "answer": "Leptomeningitni davolashda asosiy maqsad infeksiya sabablarini bartaraf etish va miyadagi yallig'lanishni kamaytirishdir. Davolash usullari: \n 1. Antibakterial dori-darmonlar (infeksiya sababiga qarab) \n 2. Antifungal yoki antiviral preparatlar (agar zarur bo'lsa) \n 3. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 4. Simptomatik davolash (og'riqni kamaytirish, isitmani tushirish) \n 5. Neyroprotektsiya (miya hujayralarini himoya qilish)"
},
{
  "question": "Bilet 18. Xorionependematitni davolash qanday amalga oshiriladi?",
  "answer": "Xorionependematitni davolashda asosiy maqsad yallig'lanishni kamaytirish va infeksiyani to'liq yo'q qilishdir. Davolash usullari: \n 1. Antibakterial yoki antifungal dori-darmonlar (infektsiya sababiga qarab) \n 2. Kortikosteroidlar (yallig'lanishni kamaytirish) \n 3. Simptomatik davolash (og'riqni kamaytirish, isitmani tushirish) \n 4. Neyroprotektsiya va reabilitatsiya"
},
{
  "question": "Bilet 19. Tarkok sklerozni davolash qanday amalga oshiriladi?",
  "answer": "Tarkok sklerozni davolashda asosiy maqsad bemorning simptomlarini kamaytirish va nerv tizimi faoliyatini qo'llab-quvvatlashdir. Davolash usullari: \n 1. Imunomodulyatorlar (yallig'lanish jarayonlarini kamaytirish) \n 2. Kortikosteroidlar (o'tkir epizodlarda) \n 3. Simptomatik davolash (og'riqni kamaytirish, spazmlarni bartaraf etish) \n 4. Reabilitatsiya va fizioterapiya"
},
{
  "question": "Bilet 20. Yon amiotrofik sklerozni davolash qanday amalga oshiriladi?",
  "answer": "Yon amiotrofik sklerozni davolashda bemorning hayot sifatini yaxshilash va simptomlarni kamaytirish maqsad qilinadi. Davolash usullari: \n 1. Riluzol (nevromuskulyar faoliyatni qo'llab-quvvatlash) \n 2. Spazmlarga qarshi dorilar (mushtlarni bo'shatish) \n 3. Analjeziklar (og'riqni kamaytirish) \n 4. Fizioterapiya va reabilitatsiya (harakatlarni tiklash)"
},
  {
  "question": "Bilet 21. Palidar tizim degenerativ kasalligi - Parkinson kasalligini davolash qanday amalga oshiriladi?",
  "answer": "Parkinson kasalligi asosan dopamin tizimini tiklashga qaratilgan davolash usullaridan foydalaniladi. Davolash usullari: \n 1. Levodopa (dopamin sintezini oshirish) \n 2. Dopamin agonistlari (dopamin retseptorlarini rag'batlantirish) \n 3. MAO-B inhibitörleri (dopaminni parchalanishini kamaytirish) \n 4. Antikolinergiklar (mushtlarni boshqarish) \n 5. Simptomatik davolash (tremor va rigidlikni kamaytirish) \n 6. Xirurgik aralashuvlar (stimulyatsiya)"
},
{
  "question": "Bilet 22. Nasliy miyacha ataksiyalarini davolash qanday amalga oshiriladi?",
  "answer": "Nasliy miyacha ataksiyalarini davolashda asosan simptomatik yondashuv qo'llaniladi, chunki kasallikning genetikasini o'zgartirish mumkin emas. Davolash usullari: \n 1. Vitamin va mineral komplekslari (neuropatik alomatlarni kamaytirish) \n 2. Fizioterapiya (harakatlarni tiklash) \n 3. Spazmolitiklar (spazmlarni kamaytirish) \n 4. O'tkazuvchi davolash (og'riq va balansni yaxshilash)"
},
{
  "question": "Bilet 23. Epilepsiya kasalligini davolash qanday amalga oshiriladi?",
  "answer": "Epilepsiya davolashda asosan antikonvulsant dori-darmonlar qo'llaniladi. Davolash usullari: \n 1. Antiepileptik dorilar (valproat, lamotrijin, karbamazepin) \n 2. Neyrostimulyatsiya (miya faoliyatini boshqarish) \n 3. Jarrohlik aralashuvlar (dori terapiyasiga javob bermaydigan holatlar uchun) \n 4. Fizioterapiya va reabilitatsiya (epileptik ataklar orasida funktsional tiklanishni qo'llab-quvvatlash)"
},
{
  "question": "Bilet 24. Migren bosh og'rig'ini davolash qanday amalga oshiriladi?",
  "answer": "Migren bosh og'rig'ini davolashda asosiy maqsad og'riqni kamaytirish va ataklarning oldini olishdir. Davolash usullari: \n 1. Analjeziklar (paratsetamol, ibuprofen) \n 2. Triptanlar (serotonin retseptorlarini rag'batlantirish) \n 3. Beta-blokatorlar (preparatlar orqali profilaktika) \n 4. Antikonvulsantlar (migrenning profilaktikasi) \n 5. Spazmolitiklar (bosh og'rig'ini kamaytirish)"
},
{
  "question": "Bilet 25. Zo'rikish bosh og'rig'ini davolash qanday amalga oshiriladi?",
  "answer": "Zo'rikish bosh og'rig'ini davolashda asosan stressni kamaytirish va og'riqni boshqarish maqsad qilinadi. Davolash usullari: \n 1. Spazmolitiklar (mushtlarni yumshatish) \n 2. Analjeziklar (og'riqni kamaytirish) \n 3. Stressni kamaytiruvchi terapiya (psixoterapiya, massaj) \n 4. Fizioterapiya (bosh og'rig'ining oldini olish) \n 5. Yurak-qon tomir tizimini boshqarish"
},
{
  "question": "Bilet 26. Miasteniya kasalligini davolash qanday amalga oshiriladi?",
  "answer": "Miasteniya davolashda asosiy maqsad muskullarni mustahkamlash va autoimmun jarayonlarni kamaytirishdir. Davolash usullari: \n 1. Antikolinestraz preparatlari (acetilxolin esterazni to'xtatish) \n 2. Kortikosteroidlar (autoimmun jarayonlarni kamaytirish) \n 3. Imunoglobulin terapiyasi (immunitetni boshqarish) \n 4. Plazmaferez (zararlangan antikorlarni tozalash) \n 5. Chirurgik davolash (timoma bo'lsa)"
},
  {
  "question": "Bilet 27. Bosh aylanishini davolash qanday amalga oshiriladi?",
  "answer": "Bosh aylanishini davolashda sababga qarab turli usullar qo'llaniladi. Davolash usullari: \n 1. Vestibulyar terapiya (muvozanatni tiklash uchun maxsus mashqlar) \n 2. Antihistaminiklar (vertigo va bosh aylanishini kamaytirish) \n 3. Diuretiklar (ichki quyuqlanishni kamaytirish) \n 4. Antiemetiklar (ko'ngil aynishini kamaytirish) \n 5. Bosh aylanishining asosiy sababiga qarab davolash (masalan, Meniere kasalligi uchun diuretiklar yoki vestibulyar nevrit uchun steroidi davolash)"
  }
  ];
