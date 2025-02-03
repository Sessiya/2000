const tickets = [
{
  "question": "Bilet №1. Sut bezlarini palpatsiya qilish texnikasi.",
  "answer": "[1] Bemor yotgan yoki tik turgan holda bo'lishi mumkin. [2] Tekshiruv bir qo'lni ko'tarib, boshqa qo'l bilan dumaloq harakatlar bilan palpatsiya qilish orqali amalga oshiriladi. [3] Palpatsiya uch bosqichda: yuzaki, o'rta va chuqur bosim bilan olib boriladi. [4] G'uddalar, tugunlar yoki zichlashgan joylar aniqlansa, biopsiya yoki mamografiya tavsiya etiladi."
},
{
  "question": "Bilet №2. Oshqozonni endoskopik tekshirish texnikasi.",
  "answer": "[1] Bemor och qoringa kelishi kerak. [2] Lokal anesteziya uchun lidokain spreyi qo'llaniladi. [3] Endoskop bemorning og'zi yoki buruni orqali kiritilib, oshqozon ichki yuzasi vizualizatsiya qilinadi. [4] Zarurat bo'lsa, biopsiya olinadi."
},
{
  "question": "Bilet №3. Kolonoskopiya o'tkazish texnikasi.",
  "answer": "[1] Bemor maxsus parhezga amal qiladi va ichak tozalovchi vositalar qabul qiladi. [2] Protsedura davomida yotgan holatda bo'ladi. [3] Endoskop anus orqali rektum va yo'g'on ichakka kiritiladi. [4] Ichki yuzalar tekshiriladi, poliplar yoki shubhali joylar biopsiya qilinadi."
},
{
  "question": "Bilet №4. Oshqozonning hajmli hosilalarini palpatsiya qilish texnikasi.",
  "answer": "[1] Bemor yotgan yoki tik turgan holatda bo'lishi mumkin. [2] Shifokor ikkala qo'l bilan chuqur palpatsiya usulini qo'llaydi. [3] Tumorlarning joylashuvi, zichligi, o'lchami baholanadi. [4] Agar palpatsiyada massalar aniqlansa, endoskopiya yoki tasviriy tekshiruvlar talab qilinadi."
},
{
  "question": "Bilet №5. Mamografiya tekshiruvi o'tkazish texnikasi.",
  "answer": "[1] Bemor oldindan dezodorant ishlatmasligi kerak. [2] Har ikkala ko'krak ikki pozitsiyada siqilgan holda rentgen qilinadi. [3] Oddiy va shubhali holatlarda maxsus vizualizatsiyalar olinadi. [4] Agar shubhali hosila aniqlansa, biopsiya tavsiya etiladi."
},
{
  "question": "Bilet №6. To'g'ri ichak saratonida barmoq bilan tekshirish.",
  "answer": "[1] Bemor tizzalarini bukib yonboshlagan holatda bo'ladi. [2] Shifokor steril qo'lqop kiyib, vazelin yoki lubrikant ishlatadi. [3] To'g'ri ichakka barmoq bilan kirib, devorlarning zichligi, massasini tekshiradi. [4] Agar o'smalar sezilsa, kolonoskopiya yoki biopsiya kerak bo'lishi mumkin."
},
{
  "question": "Bilet №7. Qalqonsimon bezni palpatsiya qilish.",
  "answer": "[1] Bemor tik holatda bo'ladi. [2] Shifokor ikkala qo'li bilan old tomondan yoki orqa tomondan bezni tekshiradi. [3] Tugunlar, kattalashish yoki og'riqli joylar aniqlansa, ultratovush yoki biopsiya tavsiya etiladi."
},
{
  "question": "Bilet №8. Biopsiya turlari va ularni o'tkazish texnikasi.",
  "answer": "[1] Biopsiya turlari: jarrohlik, igna biopsiyasi, tru-cut, endoskopik va likvid biopsiya. [2] Texnika: bemor lokal yoki umumiy behushlik ostida bo'ladi. [3] Igna yordamida to'qima namunalari olinadi va mikroskop ostida tekshiriladi."
},
{
  "question": "Bilet №9. Tashqi joylashgan limfa tugunlarini palpatsiya qilish texnikasi.",
  "answer": "[1] Tekshiriladigan joylar: bo'yin, qo'ltiq, inguinal soha. [2] Shifokor barmoqlar bilan limfa tugunlarini bosib ko'radi. [3] Tugunlarning kattaligi, zichligi, harakatchanligi baholanadi. [4] Agar shubhali holatlar bo'lsa, biopsiya yoki ultratovush tekshiruvi o'tkaziladi."
},
{
  "question": "Bilet №10. Qizilo'ngach saratonining rentgenologik belgilari.",
  "answer": "[1] Kontrastli rentgenografiyada torayish yoki to'siq belgisi kuzatiladi. [2] 'Yutish qiyinlashishi' sindromi aniqlanadi. [3] O'sma cheklangan yoki diffuz shaklda bo'lishi mumkin. [4] Shubhali holatlarda endoskopiya va biopsiya tavsiya etiladi."
},
{
  "question": "Bilet №11. Biopsiya turlari.",
  "answer": "[1] Jarrohlik biopsiyasi (ochiq va yopiq) – to'qimaning katta qismi olinadi. [2] Ignali biopsiya – yupqa yoki qalin igna yordamida amalga oshiriladi. [3] Endoskopik biopsiya – endoskop orqali olib boriladi. [4] Tru-cut biopsiya – maxsus kesuvchi igna yordamida chuqur to'qimalardan namuna olinadi. [5] Likvid biopsiya – qon yoki boshqa suyuqlik namunasidan o'sma markerlari aniqlanadi."
},
{
  "question": "Bilet №12. Tashqi joylashgan limfa tugunlaridan mazok-otpechatok olish texnikasi.",
  "answer": "[1] Limfa tuguni yuzasini antiseptik eritma bilan tozalanadi. [2] Steril shisha plastinka yoki slayddan foydalanib, tugunning yuzasiga bosiladi. [3] Namuna havo bilan quritilib, bo'yash va mikroskopik tahlil uchun laboratoriyaga yuboriladi."
},
{
  "question": "Bilet №13. Duktografiya tekshiruvini o'tkazish texnikasi.",
  "answer": "[1] Sut bezi so'rg'ichi antiseptik bilan tozalanadi. [2] Kontrast modda sut yo'llariga yupqa kateter orqali yuboriladi. [3] Rentgen tasvirlari olinib, yo'llarning torayishi yoki patologik o'zgarishlari baholanadi."
},
{
  "question": "Bilet №14. Tashqi joylashgan o'smalardan ochiq biopsiya olish texnikasi.",
  "answer": "[1] Mahalliy yoki umumiy behushlik ostida bajariladi. [2] O'sma atrofidagi teri antiseptik bilan tozalanadi. [3] Skalp yoki maxsus asboblar yordamida to'qima namunasi olinadi. [4] Yaraga tikish qo'yilib, namuna gistologik tekshiruvga yuboriladi."
},
{
  "question": "Bilet №15. Tsistografiya tekshiruvini o'tkazish texnikasi.",
  "answer": "[1] Bemor yotgan holatda bo'ladi. [2] Kateter orqali siydik pufagiga kontrast modda yuboriladi. [3] Rentgen tasvirlari olinib, siydik yo'llarining holati baholanadi."
},
{
  "question": "Bilet №16. Tashqi joylashgan o'smalardan insizion biopsiya olish texnikasi.",
  "answer": "[1] Mahalliy yoki umumiy behushlik ostida bajariladi. [2] O'sma ustidan kichik kesma qilinadi. [3] O'smadan kichik to'qima namunasi olinib, analiz uchun yuboriladi. [4] Yaraga tikish qo'yilib, antiseptik bilan yopiladi."
},
{
  "question": "Bilet №17. O'pka saratonida auskultativ tekshiruv o'tkazish texnikasi.",
  "answer": "[1] Bemor tik yoki o'tirgan holatda bo'ladi. [2] Shifokor fonendoskop bilan o'pkaning old, orqa va yon sohalarini eshitadi. [3] Stridor, xirilash yoki boshqa patologik tovushlar aniqlansa, qo'shimcha tekshiruvlar tavsiya etiladi."
},
{
  "question": "Bilet №18. Bimanual tekshiruv o'tkazish texnikasi.",
  "answer": "[1] Ginekologik tekshiruv kursisida bajariladi. [2] Bir qo'l qorin devorida, ikkinchi qo'l esa vaginal yoki rektal tekshiruv uchun ishlatiladi. [3] Bachadon, tuxumdon va parametrial to'qimalarning hajmi, harakatchanligi, og'riqli zonalari baholanadi."
},
{
  "question": "Bilet №19. Qalqonsimon bez saratonida tomogrammalar xulosalarini interpretatsiya qilish.",
  "answer": "[1] Bezgacha bo'lgan normal tuzilma va hajm aniqlanadi. [2] Saraton mavjud bo'lsa, tugunlar, zichlik oshishi, atrof to'qimalar bilan yopishganlik kuzatiladi. [3] Metastazlar bo'lsa, bo'yin limfa tugunlari kattalashgan bo'ladi."
},
{
  "question": "Bilet №20. Prostata bezini rektal tekshirish texnikasi.",
  "answer": "[1] Bemor tizzalarini bukib yonboshlagan yoki tik holatda bo'lishi mumkin. [2] Shifokor steril qo'lqop va lubrikant ishlatib, barmoq bilan prostata bezini rektum orqali tekshiradi. [3] Prostata hajmi, shakli, zichligi va tugunlarning mavjudligi baholanadi."
},
{
  "question": "Bilet №21. Teri saratonida mazok olish texnikasi.",
  "answer": "[1] Jarayon antiseptik bilan tozalanadi. [2] Steril skalpel yoki shisha plastinka yordamida o'sma yuzasidan material olinadi. [3] Material mikroskopik tekshiruv uchun shisha plastinkaga o'tkaziladi va bo'yash amalga oshiriladi."
},
{
  "question": "Bilet №22. O'pka saratonida palpatsiya va perkussiya o'tkazish.",
  "answer": "[1] Palpatsiya: ko'krak qafasining assimetriyasi, subkutan emfizema yoki limfa tugunlarining kattalashishi baholanadi. [2] Perkussiya: shish joylashgan hududda perkutor tovush pasayishi yoki timpanik tovush kuzatilishi mumkin."
},
{
  "question": "Bilet №23. To'g'ri ichak saratonining rentgenologik belgilari.",
  "answer": "[1] Bariy kontrasti bilan tekshiruvda ichak lümeni toraygan bo'ladi. [2] 'Napkin ring' belgisi – o'sma ichak devorlarini aylana bo'ylab o'rab olishi. [3] Ichak harakatining buzilishi va to'liq to'siqlik rivojlanishi mumkin."
},
{
  "question": "Bilet №24. Tashqi joylashgan limfa tugunlarini palpatsiya qilish texnikasi.",
  "answer": "[1] Bemorda yengil holatda tekshirish o'tkaziladi. [2] Shifokor ikki qo'l bilan limfa tugunlarini asta bosib, ularning kattaligi, harakatchanligi va og'riqliligini baholaydi. [3] Patologik o'zgarishlar kuzatilsa, qo'shimcha diagnostika talab etiladi."
},
{
  "question": "Bilet №25. O'pka saratonida bronxoskopiya tekshiruvini o'tkazish texnikasi.",
  "answer": "[1] Mahalliy yoki umumiy behushlik ostida bajariladi. [2] Bronxoskop og'iz yoki burun orqali traxeya va bronxlarga kiritiladi. [3] Vizual tekshiruv o'tkazilib, biopsiya uchun namuna olinishi mumkin."
},
{
  "question": "Bilet №26. Yo'g'on ichak saratonida rentgenologik xulosalarni interpretatsiya qilish.",
  "answer": "[1] Kontrastli irrigoskopiyada ichak torayishi yoki yo'g'on devor tuzilishining o'zgarishi kuzatiladi. [2] Ichakning segmentar yoki diffuz torayishi kuzatilishi mumkin. [3] Tumor sababli ichak harakati buzilgan bo'lishi mumkin."
},
{
  "question": "Bilet №27. Yuzaki va chuqur palpatsiya o'tkazish texnikasi.",
  "answer": "[1] Yuzaki palpatsiya: qorin devorining ohangini, og'riqli zonalarni baholash uchun qo'lning barmoqlari engil bosiladi. [2] Chuqur palpatsiya: ichki organlarning hajmi, shakli va harakatchanligini baholash uchun qo'l barmoqlari chuqurroq bosiladi."
},
{
  "question": "Bilet №28. Sut bezi saratonida uchraydigan patologik simptomlarni sanab o'ting.",
  "answer": "[1] Bezgakda qattiq tugun yoki o'sma mavjudligi. [2] Teri ustida 'limon po'stlog'i' simptomi. [3] So'rg'ichdan qonli yoki shilimshiq ajralmalar kelishi. [4] So'rg'ich ichkariga tortilishi. [5] Qo'ltiq sohasidagi limfa tugunlarining kattalashishi."
},
{
  "question": "Bilet №29. Sitologik tekshiruv o'tkazish uchun limfa tugunidan material olish texnikasi.",
  "answer": "[1] Joy antiseptik bilan tozalanadi. [2] Yupqa igna aspiratsion biopsiyasi yordamida material olinadi. [3] Material shisha plastinkaga o'tkazilib, bo'yash va mikroskopik tekshiruv amalga oshiriladi."
},
{
  "question": "Bilet №30. Qorin bo'shlig'ini palpatsiya qilish.",
  "answer": "[1] Bemor yotgan holatda bo'lishi kerak. [2] Shifokor asta-sekin qo'llar bilan qorin devorini bosib, og'riqli joylarni aniqlaydi. [3] Ichki organlarning kattaligi, harakatchanligi va zichligi baholanadi."
},
{
  "question": "Bilet №31. Buyrak palpatsiyasi.",
  "answer": "[1] Bemor yotgan yoki tik turgan holatda bo'lishi mumkin. [2] Shifokor ikkala qo'l bilan old va orqa tomondan buyraqni ushlab ko'radi. [3] Buyrak harakatchanligi, kattaligi va og‘riqliligi baholanadi."
},
{
  "question": "Bilet №32. Onkologik bemorlarda tashqi teri va shilliq qavatlarni ko‘zdan kechirishning o‘ziga xosligi.",
  "answer": "[1] O‘simta o‘sishining belgilarini baholash: yaralar, tugunlar, rang o‘zgarishi. [2] Shilliq qavatlarda qizarish, qonash yoki yara mavjudligini tekshirish. [3] Ko‘zdan kechirish yorug‘lik va maxsus vositalar yordamida amalga oshiriladi."
},
{
  "question": "Bilet №33. Tuxum palpatsiyasi.",
  "answer": "[1] Bemor tik turgan yoki yotgan holatda bo‘lishi mumkin. [2] Shifokor ikkala qo‘l bilan tuxum hajmi, shakli va og‘riqliligini baholaydi. [3] Anormal o‘zgarishlar (qattiqlik, o‘simta, assimetriya) aniqlansa, qo‘shimcha tekshiruvlar talab etiladi."
},
{
  "question": "Bilet №34. Ekskretor urografiya o‘tkazish texnikasi.",
  "answer": "[1] Bemorga kontrast modda vena ichiga yuboriladi. [2] Bir necha daqiqadan keyin buyraklar, siydik yo‘llari va siydik pufagi rentgen yordamida kuzatiladi. [3] Natijalar buyraklar funksional faoliyati va patologiyalarni aniqlash uchun tahlil qilinadi."
},
{
  "question": "Bilet №35. Jigar saratonida jigarni yuzaki va chuqur palpatsiyasini o‘tkazish texnikasi.",
  "answer": "[1] Yuzaki palpatsiya: qorin devori ustidan engil bosish orqali jigar kattaligi va yuzasini tekshirish. [2] Chuqur palpatsiya: bemor nafas olayotganda jigar qirrasi aniqlanadi, uning zichligi va og‘riqliligi baholanadi."
},
{
  "question": "Bilet №36. Teri melanomalarida Figaro formulasini qo‘llash.",
  "answer": "[1] Asimmetriya (A) – o‘simta shakli notekis. [2] Chegaralar (B) – o‘simta chegaralari notekis va tarqalgan. [3] Rang (C) – rang o‘zgarishi (qora, jigarrang, ko‘kimtir). [4] Diametr (D) – 6 mm dan katta bo‘lishi. [5] Evolyutsiya (E) – o‘sma kattalashishi yoki shakl o‘zgarishi."
},
{
  "question": "Bilet №37. Siydik pufagini kateterizatsiya qilish texnikasi.",
  "answer": "[1] Antiseptik ishlatiladi va kateter steril holatda bo‘lishi kerak. [2] Erkaklarda uzun, ayollarda esa qisqa kateter ishlatiladi. [3] Kateter siydik yo‘liga ehtiyotkorlik bilan kiritiladi, siydik chiqishi kuzatiladi."
},
{
  "question": "Bilet №38. Rektosigmoidoskopiya o‘tkazish texnikasi.",
  "answer": "[1] Bemorga tayyorgarlik: ichak tozalanishi. [2] Rektosigmoidoskop sekinlik bilan to‘g‘ri ichakka kiritiladi. [3] Ichki yuzalar, shilliq qavatlar tekshiriladi, biopsiya olinishi mumkin."
},
{
  "question": "Bilet №39. Siydik pufagi saratonining rentgenologik belgilari.",
  "answer": "[1] Ekskretor urografiyada siydik pufagida to‘ldirilmagan joylar kuzatiladi. [2] Siydik pufagi devorlarining notekisligi. [3] Kalsifikatsiya yoki patologik o‘zgarishlar aniqlanishi mumkin."
},
{
  "question": "Bilet №40. Plevra bo‘shlig‘ini punksiya qilish texnikasi.",
  "answer": "[1] Bemorni o‘tirgan holatda oldinga egilish holatiga keltirish. [2] Maxsus igna yordamida plevra bo‘shlig‘idan suyuqlik olinadi. [3] Material diagnostika uchun laboratoriyaga yuboriladi."
},
{
  "question": "Bilet №41. Teri melanomalarida ABCD formulasi bo‘yicha tekshiruv qanday o‘tkaziladi?",
  "answer": "[1] Asimmetriya (A) – o‘simta shakli notekis va assimetrik. [2] Chegaralar (B) – chegaralar notekis yoki tarqoq. [3] Rang (C) – o‘simta turli ranglarda (qora, jigarrang, ko‘kimtir). [4] Diametr (D) – 6 mm dan katta bo‘lishi malignlik ehtimolini oshiradi."
},
{
  "question": "Bilet №42. Qorin pardasi orti o‘smalarida chuqur palpatsiya o‘tkazish texnikasi.",
  "answer": "[1] Bemor yotgan holatda bo‘lishi kerak. [2] Shifokor ikki qo‘li bilan qorin devorini chuqur bosib, retroperitoneal hududni tekshiradi. [3] O‘simtaning kattaligi, zichligi, harakatchanligi va og‘riqliligi baholanadi."
},
{
  "question": "Bilet №43. Teri saratonida ABCD formulasi bo‘yicha tekshiruv qanday o‘tkaziladi?",
  "answer": "[1] Asimmetriya (A) – o‘simtaning ikki tomoni bir-biriga mos emas. [2] Chegaralar (B) – o‘simta chegaralari noaniq va tarqoq. [3] Rang (C) – o‘simtaning rangi bir xil emas. [4] Diametr (D) – 6 mm dan katta bo‘lsa, malignlik xavfi oshadi."
},
{
  "question": "Bilet №44. Teri melanomalarida Doktor formulasi bo‘yicha tekshiruv qanday o‘tkaziladi?",
  "answer": "[1] D – Dinamika: o‘simtaning tez o‘sishi. [2] O – O‘zgartirish: rangi yoki shaklining o‘zgarishi. [3] K – Konturlar: notekis va noaniq chegaralar. [4] T – Tuzilishi: qattiq yoki notekis bo‘lishi. [5] O – O‘lchami: kattalashishi yoki 6 mm dan oshishi. [6] R – Rang: rang o‘zgarishlari yoki bir necha tusda bo‘lishi."
},
{
  "question": "Bilet №45. Bachadon bo‘ynidan biopsiya olish texnikasi.",
  "answer": "[1] Vaginal ko‘zgular yordamida bachadon bo‘yni ochiladi. [2] Maxsus biopsiya qisqichi bilan shubhali joydan to‘qima namunasi olinadi. [3] Namuna formalinda fiksatsiya qilinib, gistologik tekshiruvga yuboriladi."
},
{
  "question": "Bilet №46. Bachadon bo‘shlig‘idan qirindi olish texnikasi.",
  "answer": "[1] Mahalliy yoki umumiy behushlik ostida amalga oshiriladi. [2] Maxsus kureta yordamida bachadon ichki shilliq qavati qiriladi. [3] Olingan material gistologik tekshiruvga yuboriladi."
},
{
  "question": "Bilet №47. Prostata bezini barmoq bilan tekshirish.",
  "answer": "[1] Bemor tizzalarini bukib, oldinga egilgan holda bo‘lishi kerak. [2] Shifokor qo‘lqop kiygandan keyin, vazelin bilan yog‘langan ko‘rsatkich barmog‘ini to‘g‘ri ichakka kiritadi. [3] Prostata bezining hajmi, zichligi, og‘riqliligi baholanadi."
},
{
  "question": "Bilet №48. Gistologik tekshiruv o‘tkazish uchun preparat tayyorlash texnikasi.",
  "answer": "[1] Biopsiya namunasi 10% formalinda fiksatsiya qilinadi. [2] To‘qima parafinga joylanib, ingichka kesmalar tayyorlanadi. [3] Kesma bo‘yalib, mikroskop ostida o‘rganiladi."
},
{
  "question": "Bilet №49. Bronxoskopiya tekshiruvini o‘tkazish texnikasi.",
  "answer": "[1] Bemorga mahalliy yoki umumiy behushlik qilinadi. [2] Bronxoskop burun yoki og‘iz orqali traxeyaga kiritiladi. [3] Bronxlar ichki yuzasi tekshiriladi, biopsiya yoki yuvindi suyuqlik olinadi."
},
{
  "question": "Bilet №50. Nefrostoma o‘rnatish texnikasi.",
  "answer": "[1] Bemorga mahalliy behushlik qilinadi. [2] Teridan maxsus igna orqali buyrakka drenaj kateteri kiritiladi. [3] Kateter buyrak to‘qimasida joylashib, siydik tashqariga oqishini ta’minlaydi."
},
{
  "question": "Bilet №51. Epitsistostoma o‘rnatish texnikasi.",
  "answer": "[1] Mahalliy behushlik qilinadi. [2] Qorin pastki qismida kichik kesma qilinadi. [3] Siydik pufagi devori ochilib, maxsus kateter joylashtiriladi. [4] Kateter teriga tikilib, siydik tashqariga chiqariladi."
},
{
  "question": "Bilet №52. Kolostoma o‘rnatish texnikasi.",
  "answer": "[1] Qorin devorida operativ yo‘l bilan teshik ochiladi. [2] Yo‘g‘on ichakning bir qismi qorin yuzasiga chiqariladi. [3] Ichak devori teriga tikilib, kolostoma shakllantiriladi. [4] Stoma atrofini parvarishlash uchun maxsus sumkalar qo‘llaniladi."
},
{
  "question": "Bilet №53. Qorin bo‘shlig‘ini punksiya qilish texnikasi.",
  "answer": "[1] Bemorga yotish holati beriladi. [2] Qorin pastki qismida antiseptik ishlov beriladi. [3] Mahsus igna orqali qorin bo‘shlig‘iga kirib, suyuqlik olinadi. [4] Olingan material laborator tahlilga yuboriladi."
},
{
  "question": "Bilet №54. Trepan-biopsiya o‘tkazish texnikasi.",
  "answer": "[1] Bemorga mahalliy behushlik qilinadi. [2] Maxsus trepan ignasi suyak ichiga kiritiladi. [3] Suvaksimon to‘qima namunasi olinadi. [4] Namuna gistologik tekshiruvga yuboriladi."
},
{
  "question": "Bilet №55. Gastrostoma o‘rnatish texnikasi.",
  "answer": "[1] Qorin devorida kichik kesma qilinadi. [2] Oshqozon old devoriga ochilish hosil qilinadi. [3] Maxsus gastrostoma kateteri joylashtiriladi. [4] Stoma atrofini gigiyenik parvarishlash tavsiya etiladi."
},
{
  "question": "Bilet №56. Traxeostoma o‘rnatish texnikasi.",
  "answer": "[1] Bemorga behushlik qilinadi. [2] Bo‘yin old qismida traxeya ustida kesma qilinadi. [3] Traxeya devorida ochilish hosil qilinadi. [4] Maxsus traxeostoma naychasi joylashtiriladi."
},
{
  "question": "Bilet №57. Limfa tugunlarida punktsion-biopsiya o‘tkazish texnikasi.",
  "answer": "[1] Teri antiseptik bilan ishlanadi. [2] Nozik igna limfa tuguniga kiritiladi. [3] Namuna olinib, laborator tahlilga yuboriladi."
},
{
  "question": "Bilet №58. Kolostoma parvarishi.",
  "answer": "[1] Kolostoma atrofini toza suv bilan yuvish. [2] Maxsus himoya kremlaridan foydalanish. [3] Kolostoma sumkasini o‘z vaqtida almashtirish."
},
{
  "question": "Bilet №59. Nefrostoma parvarishi.",
  "answer": "[1] Nefrostoma atrofini antiseptik bilan ishlash. [2] Kateter o‘tkazuvchanligini tekshirish. [3] Infeksiya oldini olish uchun gigiyenaga rioya qilish."
},
{
  "question": "Bilet №60. Traxeostoma parvarishi.",
  "answer": "[1] Traxeostoma naychasini muntazam tozalash. [2] Atrofdagi terini antiseptik bilan ishlash. [3] Naycha ichida shilliq to‘planishining oldini olish uchun mukozani aspiratsiya qilish."
},
{
  "question": "Bilet №61. Siydik pufagini kateterizatsiya qilish texnikasi.",
  "answer": "[1] Bemorga yotish holati beriladi. [2] Siydik yo‘llari antiseptik bilan ishlanadi. [3] Steril kateter asta-sekin siydik yo‘liga kiritiladi. [4] Siydik chiqarilgach, kateter ehtiyotkorlik bilan olinadi."
},
{
  "question": "Bilet №62. Oshqozonni yuvish texnikasi.",
  "answer": "[1] Bemorga yutish refleksini tekshirish. [2] Burun yoki og‘iz orqali oshqozonga zond kiritish. [3] Iliq suv yoki maxsus eritma bilan oshqozonni yuvish. [4] Suvni aspiratsiya qilish va bemorni kuzatish."
},
{
  "question": "Bilet №63. Biopsiya turlari.",
  "answer": "[1] Eksizional biopsiya – to‘qima butunlay olib tashlanadi. [2] Insizional biopsiya – shubhali sohaning bir qismi olinadi. [3] Punktatsion biopsiya – igna orqali namuna olinadi. [4] Endoskopik biopsiya – endoskop orqali olingan namuna."
},
{
  "question": "Bilet №64. Oshqozonda o‘tkaziladigan tashxisdan oldin bemorni tayyorlash.",
  "answer": "[1] Tahlildan 8-10 soat oldin ovqat iste’molini to‘xtatish. [2] Oshqozonni tozalash uchun maxsus dorilar qabul qilish. [3] Bemorga tekshiruv jarayonini tushuntirish. [4] Zarur hollarda sedativ preparatlar qo‘llash."
},
{
  "question": "Bilet №65. Laparo- sentes o‘tkazish texnikasi.",
  "answer": "[1] Qorin bo‘shlig‘iga antiseptik ishlov beriladi. [2] Mahsus igna yoki trokar bilan qorin bo‘shlig‘iga kiriladi. [3] Ortiqcha suyuqlik aspiratsiya qilinadi. [4] Tekshiruv natijalari laboratoriyaga yuboriladi."
},
{
  "question": "Bilet №66. Sitologik tekshiruv uchun preparat tayyorlash texnikasi.",
  "answer": "[1] Olingan namuna steril oynaga surtiladi. [2] Fiksatsiya uchun maxsus eritma qo‘llanadi. [3] Bo‘yash (Papanikolaou yoki Romanovskiy-Gimza usuli). [4] Mikroskop ostida tekshiriladi."
},
{
  "question": "Bilet №67. Irrigoskopiya o‘tkazish texnikasi.",
  "answer": "[1] Ichaklarni tozalash uchun bemor tayyorlanadi. [2] Maxsus bariy sulfat eritmasi rektal yo‘l bilan kiritiladi. [3] Rentgen yordamida ichak holati tekshiriladi. [4] Olingan tasvirlar tahlil qilinadi."
},
{
  "question": "Bilet №68. Mammografiya o‘tkazish texnikasi.",
  "answer": "[1] Bemorga tekshiruv jarayoni tushuntiriladi. [2] Suyak va to‘qimalarni yaxshi ko‘rish uchun maxsus pozitsiyalar qo‘llanadi. [3] Past dozali rentgen nurlari bilan sut bezlari skanerlash qilinadi. [4] Natijalar baholanadi va kerak bo‘lsa biopsiya tavsiya qilinadi."
},
{
  "question": "Bilet №69. Oshqozondan biopsiya olish texnikasi.",
  "answer": "[1] Bemorga endoskop orqali tekshiruv o‘tkaziladi. [2] Maxsus biopsiya forsepslari yordamida shubhali soha namuna olinadi. [3] Namuna formalin eritmasiga joylashtiriladi. [4] Laboratoriyada gistologik tekshiruv o‘tkaziladi."
},
{
  "question": "Bilet №70. Tsistoskopiya o‘tkazish texnikasi.",
  "answer": "[1] Siydik yo‘llari antiseptik bilan ishlanadi. [2] Mahsus moslama – tsistoskop siydik yo‘liga kiritiladi. [3] Siydik pufagi devorlari ichidan tekshiriladi. [4] Zarur hollarda biopsiya olinadi."
},
{
  "question": "Bilet №71. Punktsion biopsiya texnikasi.",
  "answer": "[1] Bemorning terisi antiseptik bilan ishlanadi. [2] Maxsus igna shubhali soha ichiga kiritiladi. [3] To‘qima yoki suyuqlik namunasi olinadi. [4] Namuna laboratoriyaga yuboriladi."
},
{
  "question": "Bilet №72. Bachadon qirindisini olish texnikasi.",
  "answer": "[1] Bemorga mahalliy yoki umumiy og‘riqsizlantirish beriladi. [2] Bachadon bo‘yni kengaytiriladi. [3] Kuret yordamida bachadon ichki qavati qiriladi. [4] Namuna laboratoriyaga yuboriladi."
},
{
  "question": "Bilet №73. Shiller probasini qo‘yish.",
  "answer": "[1] Bachadon bo‘yni yod eritmasi bilan bo‘yaladi. [2] Agar epiteliya to‘qimasi normal bo‘lsa, jigarrang bo‘yaladi. [3] Agar bo‘yalish kuzatilmasa, shubhali hudud deb hisoblanadi. [4] Natijalar bo‘yicha biopsiya tavsiya qilinishi mumkin."
},
{
  "question": "Bilet №74. PAP-test o‘tkazish texnikasi.",
  "answer": "[1] Bachadon bo‘ynidan maxsus cho‘tka bilan namuna olinadi. [2] Namuna oynaga surtiladi va fiksatsiya qilinadi. [3] Papanikolaou usuli bilan bo‘yaladi. [4] Mikroskop ostida sitologik tekshiruv o‘tkaziladi."
},
{
  "question": "Bilet №75. Sitologiya uchun namuna tayyorlash texnikasi.",
  "answer": "[1] Olingan to‘qima yoki suyuqlik oynaga surtiladi. [2] Fiksatsiya uchun maxsus eritma qo‘llanadi. [3] Namuna bo‘yaladi (PAP yoki Gimza usuli). [4] Mikroskop ostida tahlil qilinadi."
},
{
  "question": "Bilet №76. Torakotsentez texnikasi.",
  "answer": "[1] Bemorga o'tirish holati beriladi. [2] Qovurg‘alar oralig‘i antiseptik bilan ishlanadi. [3] Maxsus igna yoki trokar pleura bo‘shlig‘iga kiritiladi. [4] Ortiqcha suyuqlik aspiratsiya qilinadi va laboratoriyaga yuboriladi."
},
{
  "question": "Bilet №77. Gisterografiya o‘tkazish texnikasi.",
  "answer": "[1] Bachadon bo‘yni antiseptik bilan ishlanadi. [2] Maxsus kontrast modda bachadon bo‘shlig‘iga yuboriladi. [3] Rentgen yoki MRT orqali tasvir olinadi. [4] Natijalar baholanadi."
},
{
  "question": "Bilet №78. Oshqozonni yuvish texnikasi.",
  "answer": "[1] Bemorga burun yoki og‘iz orqali oshqozon zondi kiritiladi. [2] Iliq suv yoki maxsus eritma bilan yuvish amalga oshiriladi. [3] Suyuqlik aspiratsiya qilinadi. [4] Bemorning umumiy holati kuzatib boriladi."
},
{
  "question": "Bilet №79. Klistir qilish texnikasi.",
  "answer": "[1] Bemorga yon yoki tizzachalqan holati beriladi. [2] Issiq suv yoki maxsus eritma maxsus quvur orqali to‘g‘ri ichakka yuboriladi. [3] Bemorga suyuqlikni iloji boricha ichakda ushlab turish tavsiya etiladi. [4] Ichak bo‘shatilishi kuzatiladi."
}
];
