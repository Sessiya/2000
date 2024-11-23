const tickets = [
  {
    question: "Propranolol uchun retsept yozing",
    answer: "Rp.: Tab. Propranololi (Propranolol) 40 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Cvitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin C (Acidum ascorbicum) 5%-10 ml N. 1\nD.S. 1-2 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Klofibrat uchun retsept yozing",
    answer: "Rp.: Tab. Clofibrati (Clofibratum) 500 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Novokainamid uchun retsept yozing",
    answer: "Rp.: Sol. Novocainamidi (Procainamidum) 10% - 10 ml N. 1\nD.S. 1 ml eritmani 100 ml 0.9% NaCl eritmasiga qo'shib v/i ga infuziya sifatida yuborilsin."
  },
  {
    question: "Nitroglitserin uchun retsept yozing",
    answer: "Rp.: Tab. Nitroglycerini (Nitroglycerinum) 0.5 mg N. 30\nD.S. 1 tabletkani kerak bo'lganda og'iz orqali qabul qilsin, angina xurujlari paytida."
  },
  {
    question: "Klopidogrel uchun retsept yozing",
    answer: "Rp.: Tab. Clopidogreli (Clopidogrel) 75 mg N. 10\nD.S. Har kuni 1 tabletkadan ichilsin."
  },
  {
    question: "Doksazosin uchun retsept yozing",
    answer: "Rp.: Tab. Doxazosini (Doxazosin) 4 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Lidokain uchun retsept yozing",
    answer: "Rp.: Sol. Lidocaini (Lidocainum) 2%-10 ml N. 1\nD.S. Lokal anesteziya uchun 5-10 ml miqdorida qo’llanilsin."
  },
  {
    question: "Enalapril uchun retsept yozing",
    answer: "Rp.: Tab. Enalaprili (Enalapril) 5 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Trinitrolong uchun retsept yozing",
    answer: "Rp.: Tab. Trinitrolongi (Isosorbide Mononitrate) 30 mg N. 30\nD.S. 1 tabletkani kuniga bir marta ertalab og'iz orqali qabul qilsin."
  },
  {
    question: "Nitrosorbitol uchun retsept yozing",
    answer: "Rp.: Tab. Nitrosorbitoli (Isosorbide Dinitrate) 10 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Simvastatin uchun retsept yozing",
    answer: "Rp.: Tab. Simvastatini (Simvastatin) 20 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Erinit uchun retsept yozing",
    answer: "Rp.: Tab. Eriniti (Isosorbide dinitrate) 5 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "D vitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin D (Cholecalciferolum) 200,000 IU/2 ml N. 1\nD.S. 1 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Aminokapron kislotasi uchun retsept yozing",
    answer: "Rp.: Sol. Acidum aminocapronicum (Aminocaproic acid) 5% - 100 ml N. 1\nD.S. 100 ml eritmani venaga tomchilab yuborilsin."
  },
  {
    question: "Norepinefrin uchun retsept yozing",
    answer: "Rp.: Sol. Norepinefrini (Norepinephrine) 1 mg/ml N. 10 ml\nD.S. 0.1-0.5 mcg/kg/min intravenoz infuziya shaklida yuborilsin, zaruratga qarab."
  },
  {
    question: "Bisoprolol uchun retsept yozing",
    answer: "Rp.: Tab. Bisoprololi (Bisoprolol) 5 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "B12 vitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin B12 (Cobalamini) 500 mcg/ml N. 1\nD.S. 1 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Lizinopril uchun retsept yozing",
    answer: "Rp.: Tab. Lisinoprili (Lisinopril) 10 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Lovastatin uchun retsept yozing",
    answer: "Rp.: Tab. Lovastatini (Lovastatin) 20 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Foliy kislotasi uchun retsept yozing",
    answer: "Rp.: Sol. Acidi folici (Acidum folicum) 5 mg/ml N. 1\nD.S. 1-2 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Metoprolol uchun retsept yozing",
    answer: "Rp.: Tab. Metoprololi (Metoprolol) 50 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "B6 vitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin B6 (Pyridoxini) 5%-10 ml N. 1\nD.S. 1-2 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Amiodaron uchun retsept yozing",
    answer: "Rp.: Sol. Amiodaroni (Amiodaronum) 50 mg/ml - 3 ml N. 1\nD.S. 150 mg (3 ml) infuziya sifatida 100 ml 0.9% NaCl eritmasiga qo’shib v/i ga yuborilsin."
  },
  {
    question: "Protamin sulfat uchun retsept yozing",
    answer: "Rp.: Injekt. Protamin sulfat (Protamine sulfate) 1%-1ml N. 5\nD.S. 1-2 ml intravenoz yuborilsin, zaruratga qarab, heparin ta’sirini bekor qilish uchun."
  },
  {
    question: "Xolestipol uchun retsept yozing",
    answer: "Rp.: Tab. Xolestipoli (Cholestipolum) 500 mg N. 30\nD.S. 1 tabletkani kuniga 1-2 marta og'iz orqali qabul qilsin."
  },
  {
    question: "Nikotin kislotasi uchun retsept yozing",
    answer: "Rp.: Sol. Acidi nicotinici (Acidum nicotinicum) 1% - 1 ml N. 10\nD.S. 1 ml eritmani 100 ml 0.9% NaCl eritmasiga qo’shib v/i ga infuziya shaklida yuborilsin."
  },
  {
    question: "E vitamini uchun retsept yozing",
    answer: "Rp.: Sol. Vitamin E (Tocopherolum) 5%-10 ml N. 1\nD.S. 1-2 ml intramuscular yoki intravenoz qo’llanilsin."
  },
  {
    question: "Amilorid uchun retsept yozing",
    answer: "Rp.: Tab. Amiloridi (Amiloride) 5 mg №10\nD.S. Ertalabda 1 tabletkadan ichilsin."
  },
    {
    question: "Enoksiparin uchun retsept yozing",
    answer: "Rp.: Sol. Enoxiparini (Enoxaparinum) 40 mg/0.4 ml N. 1\nD.S. 1 in'ektsiya subkutans yuborilsin kuniga bir marta."
  },
  {
    question: "Geparin uchun retsept yozing",
    answer: "Rp.: Sol. Heparini (Heparinum) 5000 IU/ml - 5 ml N. 1\nD.S. 5000 IU dozada subkutans yoki intravenoz yuborilsin zaruratga qarab."
  },
  {
    question: "Dipiridamol uchun retsept yozing",
    answer: "Rp.: Tab. Dipiridamoli (Dipyridamolum) 25 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Korglikon uchun retsept yozing",
    answer: "Rp.: Sol. Korglikoni (Digoxin) 0.25 mg/ml - 1 ml N. 10\nD.S. 0.5-1 ml intravenoz yuborilsin zaruratga qarab."
  },
  {
    question: "Neodikumarin uchun retsept yozing",
    answer: "Rp.: Tab. Neodicumari (Neodikumarinum) 1 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Alteplasa uchun retsept yozing",
    answer: "Rp.: Sol. Alteplasi (Alteplase) 50 mg/50 ml N. 1\nD.S. 15 mg iv bolus sifatida yuborilsin, qolgan miqdor esa infuziya sifatida."
  },
  {
    question: "Asetazolamid uchun retsept yozing",
    answer: "Rp.: Tab. Acetazolamidi (Acetazolamidum) 250 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Atsetilsalitsil kislotasi uchun retsept yozing",
    answer: "Rp.: Tab. Acetylsalicylic acid (Acidum acetylsalicylicum) 500 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Gidroxlorotiazid uchun retsept yozing",
    answer: "Rp.: Tab. Hydrochlorothiazidi (Hydrochlorothiazidum) 25 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Kontrikal uchun retsept yozing",
    answer: "Rp.: Sol. Contrycal (Aprotininum) 500,000 IU/5 ml N. 1\nD.S. 1 in'ektsiya intravenoz yuborilsin zaruratga qarab."
  },
  {
    question: "Streptokinaza uchun retsept yozing",
    answer: "Rp.: Sol. Streptokinasi (Streptokinase) 1500 IU/ml N. 1\nD.S. 1,500,000 IU infuziya sifatida intravenoz yuborilsin."
  },
  {
    question: "Strofantin uchun retsept yozing",
    answer: "Rp.: Sol. Strofantini (Strophantinum) 0.25 mg/ml - 1 ml N. 10\nD.S. 1-2 ml intravenoz yuborilsin zaruratga qarab."
  },
  {
    question: "Digoksin uchun retsept yozing",
    answer: "Rp.: Tab. Digoksini (Digoxin) 0.25 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Etakrin kislotasi uchun retsept yozing",
    answer: "Rp.: Tab. Etacrinic acid (Acidum etacrinicum) 25 mg N. 30\nD.S. 1 tabletkani kuniga ikki marta og'iz orqali qabul qilsin."
  },
  {
    question: "Digitoksin uchun retsept yozing",
    answer: "Rp.: Tab. Digitoksini (Digitoxin) 0.05 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Mezatonga retsept yozing",
    answer: "Rp.: Sol. Mezatoni (Metazone) 1%-10 ml N. 1\nD.S. 1 ml eritmani 100 ml 0.9% NaCl eritmasiga qo’shib intravenoz infuziya sifatida yuborilsin."
  },
  {
    question: "Etamzilat uchun retsept yozing",
    answer: "Rp.: Tab. Etamsylati (Etamsylatum) 250 mg N. 20\nD.S. 1 tabletkani kuniga 2-3 marta og'iz orqali qabul qilsin."
  },
  {
    question: "Veroshpiron uchun retsept yozing",
    answer: "Rp.: Tab. Spironolactoni (Spironolactonum) 25 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Vikasol uchun retsept yozing",
    answer: "Rp.: Sol. Vikasoli (Vikasolum) 1 mg/ml - 10 ml N. 1\nD.S. 1-2 ml intramuscular yuborilsin."
  },
  {
    question: "Furosemid uchun retsept yozing",
    answer: "Rp.: Tab. Furosemidi (Furosemidum) 40 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Indapamid uchun retsept yozing",
    answer: "Rp.: Tab. Indapamidi (Indapamidum) 2.5 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Triamteren uchun retsept yozing",
    answer: "Rp.: Tab. Triamtereni (Triamteren) 75 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  },
  {
    question: "Varfarin uchun retsept yozing",
    answer: "Rp.: Tab. Warfarini (Warfarinum) 5 mg N. 30\nD.S. 1 tabletkani kuniga bir marta og'iz orqali qabul qilsin."
  }
];
