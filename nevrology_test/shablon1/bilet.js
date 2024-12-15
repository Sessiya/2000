// Savollar va javoblar ro'yxati
const questions = [
    {
        "question": "Neyronning eng ko‘p tarqalgan formasi hisoblangan hujayrasi",
        "answers": ["Multipolyar", "Bipolyar", "Unipolyar", "Soxtaunipolyar"],
        "correct": 0
    },
    {
        "question": "Neyronning eng ko‘p tarqalgan formasi hisoblangan hujayrasi",
        "answers": ["Sinapsda", "Lizosomada", "Mitoxondriyada", "Sitoplazmada"],
        "correct": 0
    },
    {
        "question": "Miyelin qobig‘i nerv tolalari qaysi xususiyatlarini to‘g‘risida dalolat beradi",
        "answers": ["Nerv impulslari o‘tkazuvchanlik tezligini", "Sezgi o‘tkazuvchanligi", "Akson uzunligi va aniq o‘tqazuvchanlikni", "Akson uzunligi"],
        "correct": 0
    },
    {
        "question": "Neyrogliya vazifasi",
        "answers": ["Tayanch va trofik", "Tayanch va sekretor", "Faqat sekretor", "Trofik va energetik"],
        "correct": 0
    },
    {
        "question": "Ikkita o‘simtali neyron qanday hujayra hisoblanadi",
        "answers": ["Bipolyar", "Unipolyar", "Multipolyar", "Soxtaunipolyar"],
        "correct": 0
    },
    {
        "question": "Nerv impulьslarining o‘tqazilish joyi hisoblanadi",
        "answers": ["Sinapsda", "Lizosomada", "Mitoxondriyada", "To‘g‘ri javob yo‘q"],
        "correct": 0
    },
    {
        "question": "Miyelin qobig‘ xususiyatlariga kiradi",
        "answers": ["Nerv impulьslari o‘tqazilish tezligini saqlaydi", "Trofik vazifa", "Trofik va energetik", "Faqat sekretor"],
        "correct": 0
    },
    {
        "question": "Neyronning eng katta o‘lchami",
        "answers": ["120 mikron", "150 mikron", "80 mikron", "180 mikron"],
        "correct": 0
    },
    {
        "question": "Miyelin qobig‘ xususiyatlariga kiradi",
        "answers": ["Ranve yoriqlari bo‘lishi", "Trofik vazifa", "Tayanch vazifa", "Harakat o‘tkazuvchanligi"],
        "correct": 0
    },
    {
        "question": "To‘g‘ri iborani tanlang",
        "answers": ["Shvann qobig‘li nervda yoriqlar bo‘ladi", "Tayanch vazifani bajaradi", "Shvann qobig‘li nervda yoriqlar bo‘lmaydi", "Tayanch vazifani bajarmaydi"],
        "correct": 0
    },
    {
        "question": "Orqa miya oldingi shoxlarida joylashgan:",
        "answers": ["Alfa va betta- motoneyronlar", "Klark ustunining xujayralari", "Vegetativ markazlar", "Og‘riq va temperatura sezgi yo‘lining 1-neyroni"],
        "correct": 0
    },
    {
        "question": "Orqa miya yen shoxlarida joylashgan:",
        "answers": ["Vegetativ xujayralar", "Og‘riq va temperatura sezgi yo‘lining 1-neyroni", "Alfa va betta- motoneyronlar", "Klark ustunining xujayralari"],
        "correct": 0
    },
    {
        "question": "Orqa miya dumg‘aza qismi yen shoxlarida joylashgan:",
        "answers": ["Parasimpatik vegetativ xujayralar", "Og‘riq va temperatura sezgi yo‘lining 2-neyroni", "Og‘riq va temperatura sezgi yo‘lining 1-neyroni", "Klark ustunining xujayralari"],
        "correct": 0
    },
    {
        "question": "Orqa miya ko‘krak qismi sohasida yen shoxlarida joylashgan:",
        "answers": ["Simpatik vegetativ xujayralar", "Og‘riq va temperatura sezgi yo‘lining 2-neyroni", "Og‘riq va temperatura sezgi yo‘lining 1-neyroni", "Alfa va betta- motoneyronlar"],
        "correct": 0
    },
    {
        "question": "Orqa miya orqa shoxlarida joylashgan:",
        "answers": ["Og‘riq va xarorat sezgi yo‘lining 2-neyroni", "Alfa va betta- motoneyronlar", "Simpatik vegetativ xujayralar", "Klark ustunining xujayralari"],
        "correct": 0
    },
    {
        "question": "Orqa miya orqa shoxlari asosida joylashgan:",
        "answers": ["Klark ustunining xujayralari", "Alfa va betta- motoneyronlar", "Simpatik vegetativ xujayralar", "Og‘riq va temperatura sezgi yo‘lining 1-neyroni"],
        "correct": 0
    },
    {
        "question": "Miya qattiq pardasi nima hosil qilishda ishtirok etadi:",
        "answers": ["Venoz sinuslar, miya o‘rog‘i va miyacha tomi (namet)", "Miya qutisi asosidagi tyoshiklarni", "Miya qutisi choklarini", "Tomir chigalini"],
        "correct": 0
    },
    {
        "question": "Simpatik hujayralar joylashishi:",
        "answers": ["Asosan yen shoxlarda", "Orqa shoxlarda", "Oldingi va orqa shoxlarda", "To‘g‘ri javob yo‘q"],
        "correct": 0
    },
    {
        "question": "Miyelin markaziy nerv tizimida ishlab chiqariladi:",
        "answers": ["Oligodendrogliotsitlar", "Mikrogliotsitlar", "Ependimotsitlar", "Astrotsitlar"],
        "correct": 0
    },
    {
        "question": "Nerv impulslari tarqalish-yoyilishi qayerda bo‘ladi:",
        "answers": ["Tashqi membranada", "Aksonda", "Ependimotsitlar", "Mikrogliotsitlar"],
        "correct": 0
    },
    {
        "question": "Umurtkalararo gangliy qanday xujayralardan tuzilgan:",
        "answers": ["Psevdounipolyar", "Yulduzsimon", "Noksimon", "Bipolyar"],
        "correct": 0
    },
    {
        "question": "Piramida sistema qaysi harakat uchun javob beradi:",
        "answers": ["Ixtiyoriy", "Ixtiyorsiz", "Fakat ko‘l-oyoklardagi harakatlarga", "Piramida sistemasi harakatlar uchun javob bermaydi"],
        "correct": 0
    },
    {
        "question": "Piramida yo‘lining I-neyroni qayerda joylashgan:",
        "answers": ["Bosh miya po‘stlogida", "Bazal gangliyalarda", "Orqa miya oldingi shoxida", "Orqa miya yen shoxida"],
        "correct": 0
    },
    {
        "question": "Piramida yo‘lining II-neyroni qayerda joylashgan:",
        "answers": ["Orqa miya oldingi shoxida", "Orqa miya orqa shoxida", "Orqa miya yen shoxida", "Bosh miya po‘stlogida"],
        "correct": 0
    },
    {
        "question": "Kortikospinal yo‘l ichki kapsulaning qayeridan o‘tadi:",
        "answers": ["Orqa sonini oldingi 2/3 qism idan", "Oldingi sonini oldingi 2/3 qism idan", "Oldingi sonining orqa 1/3 qismidan", "Tizzasidan"],
        "correct": 0
    }
]
