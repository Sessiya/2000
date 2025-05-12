const tickets = [
  {
  "question": "Эпидемик жараён тушунчаси ва унинг мохияти",
  "answer": `Epidemik jarayon — bu yuqumli kasalliklarning uzluksiz rivojlanishidir. Uch asosiy bo‘g‘indan iborat: infeksiya manbai, yuqish yo‘li va sezgir aholi guruhining mavjudligi.`
},
{
  "question": "Юқумлилик жараёни, унинг босқичлари",
  "answer": `Yuqumlilik jarayoni — mikroblarning organizmga kirib, ko‘payib, kasallik chaqirishi. Bosqichlari: kirish, ko‘payish, tarqalish, chiqarilish va yuqish.`
},
{
  "question": "Юқумли касалликлар хақида тушунча",
  "answer": `Yuqumli kasalliklar — mikroorganizmlar chaqiradigan, odamdan odamga yuqadigan kasalliklardir. Ular epidemiyalar yoki pandemiyalarni keltirib chiqarishi mumkin.`
},
{
  "question": "Инфекция манбаи - эпидемик жараённинг ривожланишидаги мухим роли",
  "answer": `Infeksiya manbai — kasallik qo‘zg‘atuvchisini chiqaradigan organizm. Bu bo‘g‘in bo‘lmasa, epidemik jarayon rivojlanmaydi.`
},
{
  "question": "Эпидемик жараённинг ривожланишида беморлар ва турли тоифадаги бактерия ташувчиларнинг, хамда хайвонларнинг инфекция манбаи сифатидаги ахамияти",
  "answer": `Bemor va tashuvchilar mikroblarni atrofga tarqatadi. Hayvonlar esa zoonoz kasalliklar uchun manba bo‘lib xizmat qiladi.`
},
{
  "question": "Паразитлар келтириб чикарган касалликларда ташки мухит объектларининг қўзғатувчилар учун резервуар вазифасини бажаришини тушунтиринг",
  "answer": `Suv, tuproq va boshqa tashqi muhit obyektlari ayrim parazitlar uchun yashash va saqlanish joyi — ya’ni rezervuar bo‘lib xizmat qiladi.`
},
{
  "question": "Антропоноз, зооноз ва сапроноз касалликлар хақида тушунча",
  "answer": `Antroponoz – odamdan odamga yuqadi. Zoonoz – hayvondan odamga. Sapronoz – tashqi muhitdan yuqadigan kasalliklar.`
},
{
  "question": "Юкиш механизми - эпидемик жараённинг ривожланиши ва узликсизлигини таъминлашдаги ўрни",
  "answer": `Yuqish mexanizmi infeksiya manbaidan sog‘lom odamga mikroblar o‘tishini ta’minlaydi. Bu epidemiya uzluksizligini ta’minlaydi.`
},
{
  "question": "Юкиш механизмининг таърифи, боскичлари ва типлари. Таркатиш йулларии ва омиллари.",
  "answer": `Ta’rifi: mikroblarning manbadan sog‘lom odamga o‘tishi. Bosqichlari: chiqish, tashqi muhitda bo‘lish, kirish. Tiplari: havo-tomchi, kontakt, oziq-ovqat, qon, transmissiv.`
},
{
  "question": "Ахолининг мойиллиги – эпидемик жараённинг ривожланиши ва узлуксизлигини таъминлашдаги зарурий бўғин. Ахолининг иммун холати, уни табиий ва сунъий хосил килиш йуллари.",
  "answer": `Sezgirlik – immuniteti yo‘q odamlarning ko‘pligi. Immun holat: tabiiy (kasallikdan so‘ng) va sun’iy (emlash orqali) hosil bo‘ladi.`
},

  ];

// 1-biletni ko‘rsatish uchun:
const ticket = tickets[0];

document.querySelector('.answer').innerText = ticket.answer;
const markdownAnswer = marked(ticket.answer);
document.querySelector('.answer').innerHTML = markdownAnswer;
document.querySelector('.answer').innerHTML = ticket.answer;
