const tickets = [
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
  }
];