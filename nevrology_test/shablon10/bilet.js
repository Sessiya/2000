const questions = [
    {"question": "Ta'sirlangan joyni aniqlash nima deyiladi", "answers": ["Lokalizatsiya sezgisi", "Fazoviy-ikki ulchamli sezgi", "Diskriminatsiya sezgisi", "Teri-kinestetik sezgi"], "correct": 0},
    {"question": "Teri burmasini siljishi yo‘nalishini aniqlash kobiliyati nima deb ataladi", "answers": ["Teri-kinestetik sezgisi", "Fazoviy-ikki ulchamli sezgi", "Stereognoz sezgisi", "Lokalizatsiya sezgisi"], "correct": 0},
    {"question": "Tumtok narsa bilan teriga chizilgan shakl va sonlarni aniqlash sezgisi nima deb ataladi", "answers": ["Fazoviy-ikki o‘lchamli sezgi", "Diskriminatsion sezgi", "Stereognoz sezgisi", "Teri-kinestetik sezgisi"], "correct": 0},
    {"question": "Nafakat ta'sirlangan joyda, balki tananing simmetrik karama-qarshi tomonida ta'sirni sezish nima deb ataladi", "answers": ["Alloxeyriya", "Kauzalgiya", "Paresteziya", "Poliyesteziya"], "correct": 0},
    {"question": "Bemor bitta ta'sirni kuplab ta'sir sifatida kabul kilishi Qanday sezgi buzilishi deyiladi", "answers": ["Poliyesteziya", "Alloxeyriya", "Paresteziya", "Sinesteziya"], "correct": 0},
    {"question": "Orqa miyaning qaysi bo‘limidan chuqur sezgi yo‘llari o‘tadi", "answers": ["Orqa tizimcha", "Yen tizimcha", "Oldingi tizimcha", "Oldingi shox"], "correct": 0},
    {"question": "Talamus zararlanganda quyidagi buzilishlarning qaysi biri ko‘zatilmaydi", "answers": ["Gemiplegiya", "Gemianesteziya", "Gemianopsiya", "Gemiataksiya"], "correct": 0},
    {"question": "Bemorning yuzida o‘ng tomonlama,tana va qo‘l-oyok larida chap tomonlama og‘riq va xarorat sezgisi buzilishi ko‘zatiladi. Zararlanish o‘chog‘ini toping", "answers": ["Uzunchok miya", "Miya po‘stlogi", "Nurli toj", "Ichki kapsula"], "correct": 0},
    {"question": "Harakat buzilishlari yo‘q. Anogenital soxada sezuvchanlikning barcha turlari buzilgan. Anal refleks yo‘q, pyoshob va axlat tutib turormaslik. Nima zararlangan", "answers": ["Medullyar qonus", "Buyin kengligi", "Bel kengligi", "Ot dumi"], "correct": 0},
    {"question": "Qo‘l va oyoklarda barcha sezuvchanlik turlari 'qo‘lqop' va 'paypoq' tipida buzilgan. Sezuvchanlik buzilishining bu turi nima deb ataladi", "answers": ["Polinevritik", "O‘tkazuvchi", "Segmentar", "Tabetik"], "correct": 0},
    {"question": "Chap oyok panjasidan xurujsimon uvushish va paresteziya muntazam ravishda tananing yarmiga tarkaladi. O‘choq lokalizatsiyasini aniqlang", "answers": ["Orqa markaziy pushtaning yuqori qismi", "Orqa markaziy pushtaning pastki qismi", "O‘rta pyoshona pushtasi", "Oldingi markaziy pushtaning yuqori qismi"], "correct": 0},
    {"question": "Yen tizimcha D10 soxasida zararlangan. Qaysi soxadan boshlab yuzaki sezgi buzilganligini aniqlang", "answers": ["Kindik soxasidan", "Surgichlararo chiziqlardan pastda", "Qovurga ravogidan", "Chov burmasi soxasidan"], "correct": 0},
    {"question": "Orqa miyaning orqa shoxi S5-D1 soxada zararlangan. Sezuvchanlik buzilgan soxani aniqlang", "answers": ["Faqat qo‘lda", "O‘mrovdan pastda", "Surgichlararo chiziqdan pastda", "Qo‘lda va tanada"], "correct": 0},
    {"question": "Bemorning chap qo‘li da periferik falajlik, sezuvchanlakning xamma turlari buzilgan. Karpo-radial, bitseps va tritseps reflekslar chaqirilmaydi. Nima zararlangan", "answers": ["Yelka chigali", "Orqa miyaning orqa shoxi", "Orqa miyaning yen tizimchasi", "Orqa miyaning orqa tizimchasi"], "correct": 0},
    {"question": "Bosh miyaning qaysi bo‘limi zararlanganda aniq o‘rta chegaraligemigipesteziya yuzaga keladi", "answers": ["Talamus", "Varoliy ko‘prigi", "Miya oyoqchalari", "Ichki kapsula"], "correct": 0},
    {"question": "Oyoq larda periferik falajlik, oyoq larda va oralikda chidab bulmas og‘riq va shu soxada barcha sezuvchanlik turi pasaygan. Kremaster, anal, tizza, axil reflekslari chaqirilmaydi. Nima zararlangan", "answers": ["Ot dumi ildizchalari", "Bel kengligi", "Orqa miya ko‘krak qismi", "Medullyar epiqonus"], "correct": 0},
    {"question": "Chap ko‘krakning surgichi soxasida kuchli kuydiruvchi og‘riq. Shu soxada pufaksimon toshmalar va sezuvchanlikning barcha turlari gipesteziyasi giperpatiya bilan. Nima zararlangan", "answers": ["Umurtkalararo gangliy", "Spino-talamik yo‘l", "Goll va burdax tutamlari", "Oldingi ildizcha"], "correct": 0},
    {"question": "Qaysi tuzilma zararlanganda oddiy sezgi saklangan xolda murakkab sezgi buziladi", "answers": ["Tepa qismi", "Miya oyoqchalari", "Ichki kapsula", "Uzunchok miya"], "correct": 0},
    {"question": "Quyidagi tuzilmalarning qaysi biri zararlanganda sezuvchanlikning dissotsiatsiyalashgan tipdagi buzilishi yuzaga keladi", "answers": ["Orqa miyaning orqa tizimchasi", "Ichki kapsula", "Talamus", "Periferik nervlar"], "correct": 0},
    {"question": "O‘choq qayerda joylashganda sezuvchanlikning alternirlashgan buzilishi yuzaga keladi", "answers": ["Uzunchok miya", "Ichki kapsula", "Talamus", "Orqa markaziy pushta"], "correct": 0},
    {"question": "Quyidagi tuzilmalarning qaysi biri zararlanganda sezuvchanlikning segmentar buzilishi yuzaga keladi", "answers": ["Orqa shox", "Orqa tizimcha", "Yen tizimcha", "Yen shox"], "correct": 0},
    {"question": "Xidlov analizatorining po‘stloqdagi proyektsiyasi qayerda joylashgan", "answers": ["Chakka bulagida", "Pyoshona bulagida", "Yuqori tepa bulagida", "Pastki tepa bulagida"], "correct": 0},
    {"question": "Xid bilishni tekshirishda quyidagi moddalarning qaysi biri qo‘llanilmaydi", "answers": ["Ammiak eritmasi", "Valeriana", "Rayxon", "Benzin"], "correct": 0},
    {"question": "Orqa miyaning oldingi shoxi qaysi vazifani bajarmaydi", "answers": ["Sezuvchanlik", "Harakat", "Tonik", "Trofik"], "correct": 0},
    {"question": "Orqa ildizchadan qaysi sezuvchanlik yo‘llari o‘tadi", "answers": ["Xamma turi", "Faqat og‘riq", "Faqat xarorat", "Faqat taktil"], "correct": 0}
];