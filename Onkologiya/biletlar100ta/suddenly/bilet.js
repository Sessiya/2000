const tickets = [
  {
    "question": "Yomon sifatli o'smalarni yaxshi sifatli o'smadan farqi.",
    "answer": `Yomon sifatli o'smalar infiltrativ o'sadi, ya'ni atrof to'qimalarga o'sib kiradi, aniq chegaraga ega emas, tez o'sadi va metastaz beradi. Yaxshi sifatli o'smalar esa kapsulada bo'ladi, sekin o'sadi, atrof to'qimalarga o'sib bormaydi va metastaz bermaydi.`
  },
  {
    "question": "Yomon sifatli o'smalarni metastaz berish yo'llari.",
    "answer": `Metastazlar limfogen (limfa yo'llari orqali), gematogen (qon tomirlari orqali) va implantasion (o'sma hujayralari bo'shliqlarga tushib joylashishi) yo'llari orqali tarqaladi.`
  },
  {
    "question": "Qaysi organda uchraydigan yomon sifatli o'sma O'zbekistonda 1-o'rinda turadi?",
    "answer": `O'zbekistonda eng ko'p uchraydigan yomon sifatli o'sma ayollar orasida ko'krak bezi raki, erkaklar orasida esa nafas yo'llari (o'pka) raki hisoblanadi.`
  },
  {
    "question": "Xavfli o'smalar stadiyasini o'rganishdan maqsad.",
    "answer": `O'sma stadiyasini aniqlash bilan kasallikning tarqalish darajasi, davolash rejasi va prognozi belgilanadi. Har bir bosqichga qarab davo usullari farqlanadi.`
  },
  {
    "question": "O'sma kelib chiqishidagi asosiy nazariya.",
    "answer": `O'smalarning kelib chiqishiga oid asosiy nazariyalarga mutatsion nazariya, virusli-genetik nazariya, immunologik nazariya va regeneratsion-namoyon bo'lish nazariyasi kiradi.`
  },
  {
    "question": "O'smalar etiologiyasini o'rganishdan maqsad.",
    "answer": `O'smalar etiologiyasini o'rganish natijasida ularni keltirib chiqaruvchi omillar aniqlanadi va profilaktika, erta diagnostika va samarali davolash choralarini ishlab chiqish imkonini beradi.`
  },
  {
    "question": "Onkologik deontologiya.",
    "answer": `Onkologik deontologiya — bu onkologik bemorlar bilan muomala qilishda axloqiy-me'yoriy yondashuvlar majmuasidir. Bemorni ruhiy qo'llab-quvvatlash, dardini tushuntirish va ishonch bilan muomala qilish asosiy tamoyillardandir.`
  },
  {
    "question": "Onkologik ehtiyotkorlik.",
    "answer": `Onkologik ehtiyotkorlik — har qanday shubhali klinik belgilarda o'smani istisno qilmasdan tekshirishni o'z ichiga oladi. Bu erta diagnostikani ta'minlaydi va hayotni saqlab qolishga yordam beradi.`
  },
  {
    "question": "Birlamchi profilaktika.",
    "answer": `Birlamchi profilaktika — o'smalarning paydo bo'lishining oldini olishga qaratilgan choralardir. Bularga sog'lom turmush tarzini shakllantirish, zararli odatlarni yo'qotish, ekologik muhitni yaxshilash kiradi.`
  },
  {
    "question": "Ikkilamchi profilaktika.",
    "answer": `Ikkilamchi profilaktika — o'smalarning erta bosqichlarida aniqlash va davolash choralari. Bunga skrining dasturlari, dispanser tekshiruvlar, shubhali belgilarni erta aniqlash kiradi.`
  },
  {
    "question": "O‘sma kasalliklarini TNM bo‘yicha klassifikatsiyasi.",
    "answer": `TNM klassifikatsiyasi uchta asosiy parametrga asoslanadi: T (tumor) – o‘smaning hajmi va tarqalish darajasi; N (nodus) – limfa tugunlaridagi metastazlar mavjudligi; M (metastasis) – uzoq a'zolarga metastaz bor yoki yo‘qligi. Har biri bosqichlarga ajratiladi, masalan, T1-T4, N0-N3, M0-M1.`
  },
  {
    "question": "O‘sma hujayrasining morfogenetik rivojlanishi.",
    "answer": `O‘sma hujayrasi normal hujayraning genetik mutatsiyaga uchrashi natijasida paydo bo‘ladi. Bu jarayon bosqichma-bosqich kechadi: metaplaziya → displaziya → karcinoma in situ → invaziv rak.`
  },
  {
    "question": "To‘g‘ri ichak raki klinikasi.",
    "answer": `To‘g‘ri ichak rakida asosiy belgilar: najasda qon aralashmasi, ich ketishi va qabziyatning navbatma-navbat paydo bo‘lishi, defekatsiya vaqtida og‘riq, noaniq og‘riqlar, umumiy holsizlik, vazn yo‘qotish.`
  },
  {
    "question": "To‘g‘ri ichak rakida patognomonik klinik belgi.",
    "answer": `Patognomonik belgi — najasda toza qon yoki shilliq-qon aralashmalarining doimiy ravishda ko‘rinishi, defekatsiya vaqtida qon ketishi.`
  },
  {
    "question": "To‘g‘ri ichak raki diagnostikasi.",
    "answer": `To‘g‘ri ichak rakini aniqlashda rektal tekshiruv, rektoskopiya, irrigoskopiya, biopsiya, kolonoskopiya, kompyuter tomografiya va qonni yashirin qon testlari qo‘llaniladi.`
  },
  {
    "question": "To‘g‘ri ichak rakida irrigoskopik tekshiruvi.",
    "answer": `Irrigoskopiya — kontrast modda (odatda bariy) yordamida ichakning rentgenografik tekshiruvidir. Rakda 'yemirilgan alma' belgisini, ichak lümenining toraygan qismini ko‘rsatadi.`
  },
  {
    "question": "To‘g‘ri ichak rakida rektoskopik tekshiruvi.",
    "answer": `Rektoskopiya — to‘g‘ri ichakka maxsus asbob yordamida kirib, ichki yuzasini ko‘rish va biopsiya olish usuli. Bu usul o‘smani bevosita ko‘rish imkonini beradi.`
  },
  {
    "question": "To‘g‘ri ichak raki differensial diagnostikasi.",
    "answer": `To‘g‘ri ichak raki gemorroy, anal yoriqlar, paraproktit, ichak poliplari, ichak tuberkulyozi bilan farqlanishi lozim. Shubhali holatlarda biopsiya qilinadi.`
  },
  {
    "question": "To‘g‘ri ichak rakini davolash.",
    "answer": `Asosiy davolash usuli — jarrohlik (rezyeksiya yoki ekstirpatsiya). Qo‘shimcha ravishda kimyoterapiya, radioterapiya qo‘llaniladi. Davolash o‘smaga, bosqichga va bemor holatiga bog‘liq.`
  },
  {
    "question": "To‘g‘ri ichak rak oldi kasalliklari.",
    "answer": `Rak oldi holatlariga: adenomatoz poliplar, diffuz polipoz, yassi epiteliya displaziyasi, Kron kasalligi, ichak yallig‘lanish kasalliklari (masalan, yarali kolit) kiradi.`
  },
  {
    "question": "Yo‘g‘on ichak rakida irrigoskopik tekshiruvi.",
    "answer": `Irrigoskopiya — kontrast modda (odatda bariy) yordamida yo‘g‘on ichakni rentgen orqali tekshirish usuli. Rakda ichak devorining torayishi, konturlarining tekis emasligi, 'yemirilgan olma' belgilari kuzatiladi.`
  },
  {
    "question": "Yo‘g‘on ichak rakida kolonoskopik tekshiruvi.",
    "answer": `Kolonoskopiya — butun yo‘g‘on ichak bo‘ylab optik asbob bilan tekshiriladi. Rakka xos belgilardan biri — ichak devorida qon ketuvchi, notekis, o‘suvchi to‘qima. Biopsiya olinadi.`
  },
  {
    "question": "Yo‘g‘on ichakning o‘ng tomonida uchraydigan o‘smalar qanday klinik ko‘rinishda bo‘ladi va sababi.",
    "answer": `O‘ng tomon (ko‘tariluvchi ichak) o‘smalari odatda toksikoanemik shaklda namoyon bo‘ladi: holsizlik, terining oqarishi, qon kamlik. Sababi — bu hududda ichak keng va o‘sma najas o‘tishiga to‘sqinlik qilmaydi, biroq ichki qon ketish bo‘ladi.`
  },
  {
    "question": "Yo‘g‘on ichak rakining toksikoanemik klinik shakli.",
    "answer": `Toksikoanemik shakl — bemorda umumiy intoksikatsiya belgilari: zaiflik, ishtaha yo‘qolishi, vazn yo‘qotish, me’da-ichak buzilishi, va eng asosiysi — yashirin yoki ochiq qon ketish natijasida anemiya.`
  },
  {
    "question": "Yo‘g‘on ichak rakining stenozlovchi klinik shakli.",
    "answer": `Stenozlovchi shakl — o‘sma ichak lümenini toraytiradi. Belgilari: qabziyat, meteorizm, ich ketishi bilan navbatma-navbat, najasda qon aralashmasi, kolik og‘riqlar va intestinal obstruktsiyaga moyillik.`
  },
  {
    "question": "Yo‘g‘on ichak o‘smalarida rentgenologik belgilari.",
    "answer": `Rentgenologik belgilarga ichak konturining o‘zgarishi, 'yemirilgan olma', 'to‘g‘rilanmagan segment', 'karikatura belgilari' kiradi. Bariy bilan to‘ldirilganda defektlar aniqlanadi.`
  },
  {
    "question": "Yo‘g‘on ichak rakida tashxis turlari.",
    "answer": `Tashxis turlari: klinik (shikoyatlar va simptomlar), laborator (gemoglobin, yashirin qon), endoskopik (kolonoskopiya, rektoskopiya), rentgenologik (irrigoskopiya), gistologik (biopsiya), instrumental (KT, MRT).`
  },
  {
    "question": "Yo‘g‘on ichak rakini davolash.",
    "answer": `Asosiy davolash usuli — jarrohlik: rak joylashuviga qarab ichak segmentar rezektsiyasi yoki gemikolektomiya. Qo‘shimcha ravishda kimyo va nurlanish terapiyasi qo‘llaniladi.`
  },
  {
    "question": "Yo‘g‘on ichak rakini differensial diagnostikasi.",
    "answer": `Gemorroy, ichak divertikuliti, Kron kasalligi, ichak tuberkulyozi, ichak parazitlari, invaginatsiya va ichak poliplari bilan farqlanadi. Biopsiya va kolonoskopiya asosiy farqlovchi usullar hisoblanadi.`
  },
  {
    "question": "Yo‘g‘on ichak polipi diagnostikasi.",
    "answer": `Asosiy usullar: rektoskopiya, kolonoskopiya (to‘liq ko‘rish va biopsiya olish), irrigoskopiya (kontrast bilan poliplar soyasini aniqlash), qonda yashirin qon tahlili.`
  },
  {
    "question": "Buyrak rakini davolash.",
    "answer": `Buyrak rakini asosiy davolash usuli bu — nefrektomiya (buyrakni butunlay olib tashlash). Kichik o‘smalarda buyrakni saqlovchi rezektsiya mumkin. Qo‘shimcha ravishda immunoterapiya, maqsadli terapiya va kam hollarda kimyoterapiya qo‘llaniladi.`
  },
  {
    "question": "Buyrak o‘smalarida varikostellening sababi.",
    "answer": `Varikostele — moyak venalarining kengayishi. Buyrak o‘smalarida chap buyrak venasi bosilib, orqa oqim yuzaga keladi va chap moyak venasida varikostele rivojlanadi.`
  },
  {
    "question": "Prostata bezi raki klinikasi.",
    "answer": `Prostata raki asta-sekin rivojlanadi. Belgilari: siydikda qon, siyishdagi qiyinchilik, siydik oqimining susayishi, tez-tez siyish, og‘riqli eyakulyatsiya, suyaklarda og‘riq (metastazlar).`
  },
  {
    "question": "Prostata bezi raki diagnostikasi.",
    "answer": `Asosiy usullar: rektal tekshiruv (qattiqlashgan bez), PSA (prostata spetsifik antigeni) darajasi, TRUS (transrektal UTT), biopsiya, MRT yoki KT bilan metastazlarni aniqlash.`
  },
  {
    "question": "Prostata bezi raki differensial diagnostikasi.",
    "answer": `Prostata adenomasi, prostatit, siydik yo‘llari infektsiyasi bilan farqlanadi. Adenomada PSA ko‘tarilmaydi, prostata yumshoqroq bo‘ladi; rakda esa qattiq, notekis. Biopsiya farqlovchi usul.`
  },
  {
    "question": "Prostata bezi raki davolash.",
    "answer": `Radikal prostatektomiya (butun bezni olib tashlash), nurlanish terapiyasi, gormonterapiya (androgen blokada), ba’zida kimyoterapiya. Kattalar uchun individual yondashuv tanlanadi.`
  },
  {
    "question": "Siydik pufagi raki klinikasi.",
    "answer": `Eng ko‘p uchraydigan belgisi — og‘riqsiz gematuriya (siydikda qon). Boshqa belgilar: siydik chiqarishda achishish, tez-tez siyish, qorin pastida og‘riq.`
  },
  {
    "question": "Siydik pufagi raki diagnostikasi.",
    "answer": `Asosiy usullar: umumiy siydik tahlili, sitologik tahlil, tsistoskopiya (ichkarini bevosita ko‘rish), biopsiya, UTT, KT yoki MRT orqali o‘smaning tarqalishini aniqlash.`
  },
  {
    "question": "Siydik pufagi raki differensial diagnostikasi.",
    "answer": `Siydik yo‘llari infektsiyasi, tsistit, toshlar, travmalar, shuningdek, benign papillomalar bilan farqlanadi. Tsistoskopiya va biopsiya muhim rol o‘ynaydi.`
  },
  {
    "question": "Siydik pufagi rakini davolash.",
    "answer": `Yuzaki o‘smalarda — transuretral rezeksiyasi (TUR), intravezikal BCG-terapiya. Chuqur o‘sgan raklarda — tsistektomiya (pufakni olib tashlash), kimyoterapiya, nurlanish terapiyasi.`
  },
  {
    "question": "Teri rakining sabablari.",
    "answer": `Teri rakining asosiy sabablari: uzoq muddatli quyosh nurlanishi (UV), surunkali yaralar, jigar dog‘lari, kimyoviy moddalarga (arzang, smola) ta’sirlanish, genetik moyillik va immunitetning pasayishi.`
  },
  {
    "question": "Teri rakining klinik shakllari.",
    "answer": `Teri rakining shakllari: ekzofitik (yara yoki tugun), infiltrativ (teriga chuqur kiruvchi), verrukoz (siğilga o‘xshash), bazalioma (asosiy joylashuvi — yuzda), melanoma (melanositlardan kelib chiqadi).`
  },
  {
    "question": "Bazalioma klinikasi va diagnostikasi.",
    "answer": `Bazalioma odatda yuzda joylashadi, teri ustida silliq, yaralanuvchi, o‘suvchi tugun shaklida paydo bo‘ladi. Diagnostikasi — dermatoskopiya, biopsiya, histologik tekshiruv.`
  },
  {
    "question": "Bazaliomani davolash.",
    "answer": `Bazaliomani davolash: jarrohlik yo‘li bilan olib tashlash, krioterapiya (suyuq azot bilan), radioterapiya, lazer bilan buqish yoki mahalliy sitotoksik preparatlar bilan muolaja.`
  },
  {
    "question": "Bachadon raki klinikasi.",
    "answer": `Asosiy belgilar: postmenopauzal qon ketish, hayzlar oralig‘ida qon, og‘riqli hayz ko‘rish, pastki qorinda og‘riq, yoqimsiz hidli ajralmalar.`
  },
  {
    "question": "Bachadon raki diagnostikasi.",
    "answer": `Ultratovush tekshiruvi (endometrium qalinligi), fraksion kuretaj (bachadon ichini qirib olish), biopsiya, histeroskopiya, MRT.`
  },
  {
    "question": "Bachadon raki differenstial diagnostikasi.",
    "answer": `Differensial diagnostika: endometriyal gipoplaziya, endometrioz, mioma, poliplar, bachadon bo‘yni patologiyalari bilan olib boriladi.`
  },
  {
    "question": "Bachadon raki davolash.",
    "answer": `Radikal davolash — gistorektomiya (bachadon va qo‘shimchalarni olib tashlash), zarurat bo‘lsa limfa tugunlari ham chiqariladi. Qo‘shimcha — radioterapiya, gormonterapiya, kam hollarda kimyoterapiya.`
  },
  {
    "question": "Bachadon rakida tashrix turlari.",
    "answer": `1) Endometrial adenokarsinoma (eng ko‘p), 2) Seröz karsinoma, 3) Klar hujayrali karsinoma, 4) Karcinosarkoma, 5) Sekretsion va miks turlari.`
  },
  {
    "question": "Bachadon rakida tashrixdan keyingi asoratlarini diagnostikasi va davolash.",
    "answer": `Asoratlar: limfoza, siydik chiqarish buzilishi, ichak faoliyati buzilishi, infeksiyalar. Diagnostika: klinik va instrumental usullar (UZT, KT, analizlar). Davolash — simptomatik va jarrohlik tuzatish.`
  },
  {
    "question": "O`pka rakini davolash.",
    "answer": `Davolash turiga o‘pka rakining turi (kichik hujayrali yoki katta hujayrali), bosqichi va bemorning umumiy holatiga qarab tanlanadi. Asosiy usullar: jarrohlik (lobektomiya, pneumonektomiya), kimyoterapiya, nurlantirish (radioterapiya), immunoterapiya va maqsadli terapiya (targeted therapy).`
  },
  {
    "question": "O`pkaning metastatik raklarida rentgenologik belgilari.",
    "answer": `O‘pka rentgenida ko‘plab mayda tugunlar ("sharshara") ko‘rinishida, ba’zida yirik o‘choqlar, plevral suyuqlik, limfa tugunlarining kattalashuvi ko‘rinadi. Tugunlar bir xil yoki turli o‘lchamda, simmetrik yoki assimetrik joylashgan bo‘ladi.`
  },
  {
    "question": "O`pka raki nima uchun erkaklarda kup uchraydi.",
    "answer": `Asosiy sabablar: erkaklarda chekish ko‘proq tarqalgan, zararli ishlab chiqarishlarda ko‘proq ishlaydi, atrof-muhit ta’siriga ko‘proq duchor bo‘ladi. Gormonal farqlar ham rol o‘ynaydi.`
  },
  {
    "question": "«Kesilgan shox» simptomi kaysi tekshiruvda aniklanadi.",
    "answer": `Bu simptom bronxografiya paytida aniqlanadi. Tumorning bronxni to‘sib qo‘yishi natijasida bronx kesilgan shox kabi ko‘rinadi.`
  },
  {
    "question": "«Penkosta» raki klinikasi.",
    "answer": `Bu rak o‘pkaning yuqori chuqurchasida joylashadi. Klinikasi: yelka og‘rig‘i, qo‘lga nurlanuvchi og‘riq, Horner sindromi (ptoz, mioz, enoftalm), supraklavikular limfadenopatiya va yelka mushaklarining atrofiyasi.`
  },
  {
    "question": "O`pka rakining Savistkiy bo`yicha klassifikastiyasi.",
    "answer": `Savitskiy bo‘yicha o‘pka raki klinik shakllari: 1) Markaziy (asosiy bronxlardan kelib chiqadi), 2) Periferik (o‘pka to‘qimasidan boshlanadi), 3) Plevral shakl (plevra bilan bog‘liq), 4) Penkost raki (cho‘qqi qismida joylashgan).`
  },
  {
    "question": "Oshqozon raki klinikasi.",
    "answer": `Erta bosqichda aniq simptom yo‘q. Keyinchalik: ishtaha yo‘qolishi, vazn kamayishi, tez to‘yish, qorinda og‘riq, ko‘ngil aynishi, qusish, qon aralash najas yoki qora najas.`
  },
  {
    "question": "Oshqozon raki klassifikastiyasi.",
    "answer": `1) TNM bo‘yicha (T - o‘smaga kirib borishi, N - limfa tugunlari, M - metastaz), 2) Bormann bo‘yicha (1-polipoid, 2-oyincha, 3-infiltrativ-yarali, 4-diffuz infiltrativ), 3) Lauren bo‘yicha (intestinal va diffuz turlari).`
  },
  {
    "question": "Oshqozon raki diagnostikasi.",
    "answer": `EGDS (gastroskopiya) + biopsiya, rentgen kontrast tekshiruvi, UTT, KT, MRT, PET, qonni umumiy va biokimyoviy tahlil, onkomarkerlar (CEA, CA 72-4, CA 19-9).`
  },
  {
    "question": "Oshqozon rakida tashrix turlari.",
    "answer": `Tashxis turlari: adenokarsinoma (eng ko‘p), signet-ring cell carcinoma, mukozal karsinoma, squamous cell carcinoma, lenfoma, gistiyotsitoma.`
  },
  {
    "question": "Oshqozon rakining uzoq organlarga metastazlari.",
    "answer": `Metastazlar jigarga, o‘pka, suyak, miya, tuxumdon (Krukenberg shishi), plevra va qorin parda bo‘shlig‘iga tarqaladi.`
  },
  {
    "question": "Oshqozon rakida radikal davo.",
    "answer": `Radikal davo — jarrohlik: subtotal yoki total gastrektomiya limfa tugunlari bilan birga olib tashlanadi. Keyinchalik kimyoterapiya va/yoki radioterapiya qo‘shiladi.`
  },
  {
    "question": "Oshqozon rakida palliativ davo.",
    "answer": `O‘smaga qarshi kurashish imkoni bo‘lmagan hollarda: og‘riqni kamaytirish, stent o‘rnatish, gastrostomiya, palliativ kimyo yoki radioterapiya, simptomatik davo.`
  },
  {
    "question": "Tuxumdon raki klinikasi.",
    "answer": `Erta bosqichda simptom yo‘q. Keyin: qorinda og‘irlik, og‘riq, shish, hayz buzilishi, tez-tez siyish, dispepsik belgilar, askit.`
  },
  {
    "question": "Tuxumdon raki klassifikastiyasi.",
    "answer": `1) Epiteliya o‘smalari (adenokarsinoma, seröz, mukoza va boshqalar), 2) Germinativ hujayrali, 3) Stromal o‘smalar, 4) Metastatik o‘smalar (Krukenberg).`
  },
  {
    "question": "Tuxumdon raki diagnostikasi.",
    "answer": `USM (transvaginal), KT, MRT, laparoskopiya, CA-125 va boshqa onkomarkerlar, biopsiya (agar kerak bo‘lsa).`
  },
  {
    "question": "Tuxumdon raki differenstial diagnostikasi.",
    "answer": `Kistalar, tuxumdonning boshqa benign o‘smalari, endometrioz, tuxumdon apopleksiyasi, pelvik infeksiyalar, askit bilan kechuvchi kasalliklar bilan ajratiladi.`
  },
  {
    "question": "Tuxumdon rakida tashrix turlari.",
    "answer": `Asosiy histologik turlari: seroz adenokarsinoma, mukoz adenokarsinoma, endometrioid, klar hujayrali, Brenner o‘smalari, germinativ hujayrali teratoma va disgerminoma.`
  }
];

document.querySelector('.answer').innerText = ticket.answer;
const markdownAnswer = marked(ticket.answer);
document.querySelector('.answer').innerHTML = markdownAnswer;
document.querySelector('.answer').innerHTML = ticket.answer;
