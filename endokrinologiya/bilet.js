const tickets = [
  {
    "question": "Gipofiz qayerda joylashgan va u qanday qismlardan iborat?",
    "answer": "Gipofiz bezi miya ostida, turk egarchasi (sella turcica) deb ataladigan suyak kovagida joylashgan. U gipotolamus bilan tor kanalcik (gipofizar so‘rg‘ich) orqali bog‘langan. Gipofiz uch qismdan iborat: 1) Oldingi bo‘lim (adenogipofiz) – asosiy gormonlarni chiqaradi. 2) Orqa bo‘lim (neyrogipofiz) – gipotolamusdan kelgan gormonlarni chiqaradi. 3) Oraliq bo‘lim – ba'zi o‘sish va pigmentatsiyaga ta'sir qiladigan gormonlarni chiqaradi."
  },
  {
    "question": "Oldingi gipofiz bezi qanday gormonlarni chiqaradi?",
    "answer": "Oldingi gipofiz (adenogipofiz) quyidagi gormonlarni ishlab chiqaradi: STG (o‘sish gormoni), TTG (qalqonsimon bezni stimulyatsiya qiluvchi gormon), AKTG (adrenokortikotrop gormon), FSH (follikulostimullovchi gormon), LH (luteinlovchi gormon), PRL (prolaktin)."
  },
  {
    "question": "Adrenokortikotrop gormon (AKTG) funktsiyalari qanday?",
    "answer": "AKTG buyrak usti bezlari po‘stlog‘ini stimulyatsiya qiladi, kortizol va boshqa gormonlarning ajralishini oshiradi. Kortizol stressga qarshi kurashadi, qonda glyukoza miqdorini oshiradi va yallig‘lanishni kamaytiradi."
  },
  {
    "question": "Qalqonsimon bez stimulyatsiya qiluvchi gormon (TTG) qanday funktsiyalarga ega?",
    "answer": "TTG qalqonsimon bezni faollashtiradi, T3 va T4 gormonlarini chiqarishga yordam beradi. Bu gormonlar modda almashinuvini tezlashtiradi, energiya sarfini oshiradi, tana haroratini va yurak urishini boshqaradi."
  },
  {
    "question": "Somatotrop gormon (STG) ning biologik ta'sirlarini sanab bering.",
    "answer": "STG suyaklar va mushaklarning o‘sishini rag‘batlantiradi, oqsil sintezini kuchaytiradi, yog‘larni parchalashni oshiradi, qonda glyukoza miqdorini oshiradi. Yetishmovchilikda karlik, ortiqchalikda gigantizm yoki akromegaliya yuzaga keladi."
  }
];

// 1-biletni ko‘rsatish uchun:
const ticket = tickets[0];

document.querySelector('.answer').innerText = ticket.answer;
const markdownAnswer = marked(ticket.answer);
document.querySelector('.answer').innerHTML = markdownAnswer;
document.querySelector('.answer').innerHTML = ticket.answer;
