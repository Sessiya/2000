const tickets = [
  {
  "question": "Bilet 1. Ishemik insultni davolash qanday amalga oshiriladi?",
  "answer": "Ishemik insultda asosiy davolash usullari quyidagilar: <br> 1. Trombolitik terapiya (Alteplaza) <br> 2. Antikoagulyantlar va antitrombotiklar (Heparin, Aspirin) <br> 3. Qon bosimini nazorat qilish (Labetalol) <br> 4. Giperglisemiyani nazorat qilish (Insulin) <br> 5. Neuroprotektsiya (Nimodipin) <br> 6. Reabilitatsiya va fizik terapiya"
  },
  {
  "question": "Bilet 2. Gemorragik insultni davolash qanday amalga oshiriladi?",
  "answer": "Bilet 1. Gemorragik insultni davolashda asosiy maqsad qon ketishini to'xtatish, miyadagi bosimni pasaytirish va bemorni reabilitatsiya qilishdir. Davolashda quyidagi usullar qo'llaniladi: <br> 1. Gipertenziya va gipovolemiya nazorati <br> 2. Miyaning bosimini kamaytirish (mannit, diuretiklar) <br> 3. Neyroxirurgik yordam (qon to'planishini olib tashlash) <br> 4. Tromboz va emboliyani oldini olish <br> 5. Reabilitatsiya va fizioterapiya"
},
{
  "question": "Bilet 3. O'tkir meningitlarni davolash qanday amalga oshiriladi?",
  "answer": "O'tkir meningitlarni davolashda maqsad infeksiya sababini aniqlash va unga qarshi davolashni boshlashdir. Asosiy usullar: <br> 1. Antibiotiklar (bakterial meningit uchun) yoki antiviruslar (virusli meningit uchun) <br> 2. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 3. Suv-salish muvozanatini tiklash <br> 4. Qon bosimini nazorat qilish <br> 5. Qo'shimcha reabilitatsiya va simptomatik davolash"
},
{
  "question": "Bilet 4. Surunkali meningitlarni davolash qanday amalga oshiriladi?",
  "answer": "Surunkali meningitlarni davolashda infeksiya yoki yallig'lanishning sababini aniqlash muhimdir. Davolash usullari quyidagilardan iborat: <br> 1. Uzun muddatli antibiotiklar yoki antiviral davolash <br> 2. Immunosupressiv terapiya (autoimmun meningitda) <br> 3. Kortikosteroidlar <br> 4. Simptomatik davolash (og'riqni kamaytirish, tana haroratini boshqarish) <br> 5. Qo'llab-quvvatlovchi terapiya va reabilitatsiya"
},
{
  "question": "Bilet 5. Yuz nervi neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "Yuz nervi neyropatiyasini davolashda asosiy maqsad nervning tiklanishini qo'llab-quvvatlash va alomatlarni kamaytirishdir. Davolash usullari: <br> 1. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 2. Fizikal terapiya (mushaklarni tiklash) <br> 3. Analjeziklar (og'riqni kamaytirish) <br> 4. Antiviral davolash (agar infektsion sabablar mavjud bo'lsa) <br> 5. Reabilitatsiya va fizioterapiya"
},
{
  "question": "Bilet 6. Uch shoxli nerv nevralgiyasini davolash qanday amalga oshiriladi?",
  "answer": "Uch shoxli nerv nevralgiyasini davolashda asosiy maqsad og'riqni boshqarish va nervning tiklanishini ta'minlashdir. Davolash usullari: <br> 1. Antikonvulsantlar (karbamazepin, gabapentin) <br> 2. Analjeziklar (og'riqni kamaytirish) <br> 3. Nervni blokada qilish (anesteziya) <br> 4. Neyroxirurgik aralashuv (qisqarish yoki nevrostimulyatsiya) <br> 5. Vitaminlar va qo'llab-quvvatlovchi terapiya"
},
  {
  "question": "Bilet 7. n.medianus nervini zararlanishida davolash qanday amalga oshiriladi?",
  "answer": "n.medianus nervini zararlanishida davolash asosan alomatlarni kamaytirish va tiklanishni qo'llab-quvvatlashga qaratilgan. Davolash usullari: <br> 1. Fizioterapiya va mashqlar <br> 2. Og'riqni kamaytirish uchun analjeziklar <br> 3. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 4. Jarrohlik davolash (agar konservativ usullar samarasiz bo'lsa) <br> 5. Reabilitatsiya va qo'llab-quvvatlovchi terapiya"
},
{
  "question": "Bilet 8. Kana ensefalitini davolash qanday amalga oshiriladi?",
  "answer": "Kana ensefalitini davolashda asosiy maqsad infeksiya bilan kurashish va asoratlarni oldini olishdir. Davolash usullari: <br> 1. Antiviral davolash (zidovudina yoki boshqa mos preparatlar) <br> 2. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 3. Suv-salish muvozanatini saqlash <br> 4. Simptomatik davolash (og'riqni kamaytirish, ko'ngil aynishiga qarshi) <br> 5. Reabilitatsiya va neyroprotezlash"
},
{
  "question": "Bilet 9. Gemorragik insultni qorinchalarga qon quyilishini davolash qanday amalga oshiriladi?",
  "answer": "Gemorragik insultni qorinchalarga qon quyilishini davolashda qon ketishini to'xtatish va miyadagi bosimni kamaytirish muhim. Davolash usullari: <br> 1. Neyroxirurgik aralashuv (qon to'planishini olib tashlash) <br> 2. Mannit yoki boshqa diuretiklar yordamida miyadagi bosimni kamaytirish <br> 3. Trombolitik yoki antikoagulyantlar (qon quyilishining oldini olish) <br> 4. Qo'llab-quvvatlovchi davolash (ventilyatsiya, elektrolit muvozanati) <br> 5. Reabilitatsiya va post-insult davolash"
},
{
  "question": "Bilet 10. n.radialis neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "n.radialis neyropatiyasini davolashda maqsad og'riqni kamaytirish va nervning tiklanishini qo'llab-quvvatlashdir. Davolash usullari: <br> 1. Kortikosteroidlar yoki boshqa yallig'lanishga qarshi dori-darmonlar <br> 2. Fizioterapiya (mushtlarni tiklash uchun mashqlar) <br> 3. Analjeziklar (og'riqni kamaytirish) <br> 4. Jarrohlik davolash (nevroplastiya yoki nervni tiklash) <br> 5. Reabilitatsiya va qo'llab-quvvatlash terapiyasi"
},
{
  "question": "Bilet 11. Ikkilamchi ensefalitlarni davolash qanday amalga oshiriladi?",
  "answer": "Ikkilamchi ensefalitlarni davolashda asosiy maqsad infeksiya sababini davolash va miyadagi yallig'lanishni kamaytirishdir. Davolash usullari: <br> 1. Antiviral yoki antibakterial davolash (agar infektsion sabab aniqlansa) <br> 2. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 3. Suv-salish muvozanatini saqlash <br> 4. Simptomatik davolash (og'riqni kamaytirish, konvulsiyalarni nazorat qilish) <br> 5. Reabilitatsiya va fizioterapiya"
},
  {
  "question": "Bilet 12. Mielit kasalligi davolash qanday amalga oshiriladi?",
  "answer": "Mielit kasalligi davolashda yallig'lanishni kamaytirish va nerv tizimining tiklanishini qo'llab-quvvatlash muhimdir. Davolash usullari: <br> 1. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 2. Antiviral yoki antibakterial dori-darmonlar (infektsion sabab aniqlansa) <br> 3. Simptomatik davolash (og'riqni kamaytirish, haroratni tushirish) <br> 4. Fizioterapiya va reabilitatsiya (harakatlarni tiklash) <br> 5. Qo'llab-quvvatlovchi terapiya"
},
{
  "question": "Bilet 13. Polimielit kasalligini davolash qanday amalga oshiriladi?",
  "answer": "Polimielit kasalligi davolashda infeksiya tarqalishining oldini olish va asoratlarni kamaytirish muhim. Davolash usullari: <br> 1. Antivirus dori-darmonlar <br> 2. Yallig'lanishga qarshi dorilar (kortikosteroidlar) <br> 3. Simptomatik davolash (og'riq, isitma, spazmlar) <br> 4. Fizioterapiya va reabilitatsiya (mushtlarni tiklash, harakatlarni qayta tiklash) <br> 5. Imunoterapiya (agar zarur bo'lsa)"
},
{
  "question": "Bilet 14. n.ulnaris neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "n.ulnaris neyropatiyasini davolashda asosiy maqsad nervning tiklanishini qo'llab-quvvatlash va og'riqni kamaytirishdir. Davolash usullari: <br> 1. Analjeziklar (og'riqni kamaytirish) <br> 2. Fizioterapiya va mashqlar (mushtlarni tiklash uchun) <br> 3. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 4. Jarrohlik davolash (nervni tiklash yoki dekompressiya) <br> 5. Reabilitatsiya terapiyasi"
},
{
  "question": "Bilet 15. n.peroneus neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "n.peroneus neyropatiyasini davolashda asosiy maqsad nervning tiklanishini va harakatlarni qayta tiklashdir. Davolash usullari: <br> 1. Fizioterapiya (mushaklarni tiklash uchun mashqlar) <br> 2. Analjeziklar (og'riqni kamaytirish) <br> 3. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 4. Jarrohlik davolash (nervni tiklash yoki dekompressiya) <br> 5. Reabilitatsiya terapiyasi"
},
{
  "question": "Bilet 16. n.tibialis neyropatiyasini davolash qanday amalga oshiriladi?",
  "answer": "n.tibialis neyropatiyasini davolashda nerv tizimining tiklanishini qo'llab-quvvatlash va simptomlarni kamaytirish muhimdir. Davolash usullari: <br> 1. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 2. Analjeziklar (og'riqni kamaytirish) <br> 3. Fizioterapiya (mushaklarni tiklash uchun mashqlar) <br> 4. Jarrohlik davolash (nervni tiklash yoki dekompressiya) <br> 5. Reabilitatsiya terapiyasi"
},
  {
  "question": "Bilet 17. Leptomeningitni davolash qanday amalga oshiriladi?",
  "answer": "Leptomeningitni davolashda asosiy maqsad infeksiya sabablarini bartaraf etish va miyadagi yallig'lanishni kamaytirishdir. Davolash usullari: <br> 1. Antibakterial dori-darmonlar (infeksiya sababiga qarab) <br> 2. Antifungal yoki antiviral preparatlar (agar zarur bo'lsa) <br> 3. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 4. Simptomatik davolash (og'riqni kamaytirish, isitmani tushirish) <br> 5. Neyroprotektsiya (miya hujayralarini himoya qilish)"
},
{
  "question": "Bilet 18. Xorionependematitni davolash qanday amalga oshiriladi?",
  "answer": "Xorionependematitni davolashda asosiy maqsad yallig'lanishni kamaytirish va infeksiyani to'liq yo'q qilishdir. Davolash usullari: <br> 1. Antibakterial yoki antifungal dori-darmonlar (infektsiya sababiga qarab) <br> 2. Kortikosteroidlar (yallig'lanishni kamaytirish) <br> 3. Simptomatik davolash (og'riqni kamaytirish, isitmani tushirish) <br> 4. Neyroprotektsiya va reabilitatsiya"
},
{
  "question": "Bilet 19. Tarkok sklerozni davolash qanday amalga oshiriladi?",
  "answer": "Tarkok sklerozni davolashda asosiy maqsad bemorning simptomlarini kamaytirish va nerv tizimi faoliyatini qo'llab-quvvatlashdir. Davolash usullari: <br> 1. Imunomodulyatorlar (yallig'lanish jarayonlarini kamaytirish) <br> 2. Kortikosteroidlar (o'tkir epizodlarda) <br> 3. Simptomatik davolash (og'riqni kamaytirish, spazmlarni bartaraf etish) <br> 4. Reabilitatsiya va fizioterapiya"
},
{
  "question": "Bilet 20. Yon amiotrofik sklerozni davolash qanday amalga oshiriladi?",
  "answer": "Yon amiotrofik sklerozni davolashda bemorning hayot sifatini yaxshilash va simptomlarni kamaytirish maqsad qilinadi. Davolash usullari: <br> 1. Riluzol (nevromuskulyar faoliyatni qo'llab-quvvatlash) <br> 2. Spazmlarga qarshi dorilar (mushtlarni bo'shatish) <br> 3. Analjeziklar (og'riqni kamaytirish) <br> 4. Fizioterapiya va reabilitatsiya (harakatlarni tiklash)"
},
  {
  "question": "Bilet 21. Palidar tizim degenerativ kasalligi - Parkinson kasalligini davolash qanday amalga oshiriladi?",
  "answer": "Parkinson kasalligi asosan dopamin tizimini tiklashga qaratilgan davolash usullaridan foydalaniladi. Davolash usullari: <br> 1. Levodopa (dopamin sintezini oshirish) <br> 2. Dopamin agonistlari (dopamin retseptorlarini rag'batlantirish) <br> 3. MAO-B inhibitörleri (dopaminni parchalanishini kamaytirish) <br> 4. Antikolinergiklar (mushtlarni boshqarish) <br> 5. Simptomatik davolash (tremor va rigidlikni kamaytirish) <br> 6. Xirurgik aralashuvlar (stimulyatsiya)"
},
{
  "question": "Bilet 22. Nasliy miyacha ataksiyalarini davolash qanday amalga oshiriladi?",
  "answer": "Nasliy miyacha ataksiyalarini davolashda asosan simptomatik yondashuv qo'llaniladi, chunki kasallikning genetikasini o'zgartirish mumkin emas. Davolash usullari: <br> 1. Vitamin va mineral komplekslari (neuropatik alomatlarni kamaytirish) <br> 2. Fizioterapiya (harakatlarni tiklash) <br> 3. Spazmolitiklar (spazmlarni kamaytirish) <br> 4. O'tkazuvchi davolash (og'riq va balansni yaxshilash)"
},
{
  "question": "Bilet 23. Epilepsiya kasalligini davolash qanday amalga oshiriladi?",
  "answer": "Epilepsiya davolashda asosan antikonvulsant dori-darmonlar qo'llaniladi. Davolash usullari: <br> 1. Antiepileptik dorilar (valproat, lamotrijin, karbamazepin) <br> 2. Neyrostimulyatsiya (miya faoliyatini boshqarish) <br> 3. Jarrohlik aralashuvlar (dori terapiyasiga javob bermaydigan holatlar uchun) <br> 4. Fizioterapiya va reabilitatsiya (epileptik ataklar orasida funktsional tiklanishni qo'llab-quvvatlash)"
},
{
  "question": "Bilet 24. Migren bosh og'rig'ini davolash qanday amalga oshiriladi?",
  "answer": "Migren bosh og'rig'ini davolashda asosiy maqsad og'riqni kamaytirish va ataklarning oldini olishdir. Davolash usullari: <br> 1. Analjeziklar (paratsetamol, ibuprofen) <br> 2. Triptanlar (serotonin retseptorlarini rag'batlantirish) <br> 3. Beta-blokatorlar (preparatlar orqali profilaktika) <br> 4. Antikonvulsantlar (migrenning profilaktikasi) <br> 5. Spazmolitiklar (bosh og'rig'ini kamaytirish)"
},
{
  "question": "Bilet 25. Zo'rikish bosh og'rig'ini davolash qanday amalga oshiriladi?",
  "answer": "Zo'rikish bosh og'rig'ini davolashda asosan stressni kamaytirish va og'riqni boshqarish maqsad qilinadi. Davolash usullari: <br> 1. Spazmolitiklar (mushtlarni yumshatish) <br> 2. Analjeziklar (og'riqni kamaytirish) <br> 3. Stressni kamaytiruvchi terapiya (psixoterapiya, massaj) <br> 4. Fizioterapiya (bosh og'rig'ining oldini olish) <br> 5. Yurak-qon tomir tizimini boshqarish"
},
{
  "question": "Bilet 26. Miasteniya kasalligini davolash qanday amalga oshiriladi?",
  "answer": "Miasteniya davolashda asosiy maqsad muskullarni mustahkamlash va autoimmun jarayonlarni kamaytirishdir. Davolash usullari: <br> 1. Antikolinestraz preparatlari (acetilxolin esterazni to'xtatish) <br> 2. Kortikosteroidlar (autoimmun jarayonlarni kamaytirish) <br> 3. Imunoglobulin terapiyasi (immunitetni boshqarish) <br> 4. Plazmaferez (zararlangan antikorlarni tozalash) <br> 5. Chirurgik davolash (timoma bo'lsa)"
},
  {
  "question": "Bilet 27. Bosh aylanishini davolash qanday amalga oshiriladi?",
  "answer": "Bosh aylanishini davolashda sababga qarab turli usullar qo'llaniladi. Davolash usullari: <br> 1. Vestibulyar terapiya (muvozanatni tiklash uchun maxsus mashqlar) <br> 2. Antihistaminiklar (vertigo va bosh aylanishini kamaytirish) <br> 3. Diuretiklar (ichki quyuqlanishni kamaytirish) <br> 4. Antiemetiklar (ko'ngil aynishini kamaytirish) <br> 5. Bosh aylanishining asosiy sababiga qarab davolash (masalan, Meniere kasalligi uchun diuretiklar yoki vestibulyar nevrit uchun steroidi davolash)"
  }
  ];

const container = document.getElementById("ticket-container");

tickets.forEach(ticket => {
  const ticketDiv = document.createElement("div");
  const question = document.createElement("h2");
  question.innerHTML = ticket.question; // HTML-ni to'g'ri chiqarish
  ticketDiv.appendChild(question);

  const answer = document.createElement("p");
  answer.innerHTML = ticket.answer; // HTML-ni to'g'ri chiqarish
  ticketDiv.appendChild(answer);

  container.appendChild(ticketDiv);
});
