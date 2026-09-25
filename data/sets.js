// СТАТУСЫ:
// "available" → Доступен
// "rented"    → В аренде
// "tradeban"  → Трейд бан
//statusUntil: "срок до которого сет недоступен"

const sets = [
  {
  slug: "pink",
  name: "Неоново-розовый сет",
  tag: "Идеально для снайпера",
  status: "tradeban",
  statusUntil: "До 20 октября",
  price: "3 250 ₽",
  duration: "6 дней",
  moneyback: "1 500 ₽",

  description:
    "★ Складной нож | Волны (Factory New) + ★ Спортивные перчатки | Порок (Field-Tested)",

  value: "≈ 71 200 ₽",

  items: [
  "★ Flip Knife | Doppler Phase 2 (Factory New)",
  "★ Sport Gloves | Vice (Field-Tested)",
  "Desert Eagle | Mulberry (Minimal Wear)",
],

  images: [
    "/sets/pink/1.jpg",
    "/sets/pink/2.jpg",
    "/sets/pink/3.jpg",
    "/sets/pink/4.jpg"
  ]
},

  {
    slug: "omega",
    name: "Омега сет",
    tag: "NEW",
    status: "rented",
    statusUntil: "Долгосрочная аренда",
    price: "3 250 ₽",
    duration: "6 дней",
    moneyback: "1 500 ₽",

    description:
      "★ Штык-нож М9 | Зуб тигра (Factory New) + ★ Спортивные перчатки | Омега (Field-Tested)",

    value: "≈ 73 400 ₽",

    items: [
      "★ Штык-нож М9 | Зуб тигра (Factory New)",
      "★ Спортивные перчатки | Омега (Field-Tested)",
    ],

    images: [
      "/sets/omega/1.jpg",
      "/sets/omega/2.jpg",
      "/sets/omega/3.jpg",
      "/sets/omega/4.jpg"
    ]
  },

  {
    slug: "blue",
    name: "Синий сет",
    tag: "С готовым инвентарём",
    status: "rented",
    statusUntil: "Долгосрочная аренда",
    price: "3 500 ₽",
    duration: "6 дней",
    moneyback: "1 500 ₽",

    description:
      "★ Нож-бабочка | Чистая вода (MW) + ★ Мотоциклетные перчатки | Полигон (FT)",

    value: "≈ 72 150 ₽",

    items: [
      "★ Нож-бабочка | Чистая вода",
      "★ Мотоциклетные перчатки | Полигон",
      "AWP | Солнце в знаке Льва",
      "M4A1-S | Ночной кошмар",
      "M4A4 | Безлюдный космос",
      "StatTrak™ Glock-18 | Пришелец",
      "StatTrak™ MAC-10 | Океанские мотивы",
      "StatTrak™ Desert Eagle | Синяя фанера",
      "Zeus x27 | Электрическая синь",
      "Автомат «Галиль» | Холодный синтез",
      "MP9 | Синий буйвол",
      "FAMAS | Йети-камуфляж",
      "USP-S | Горный камуфляж",
      "MP7 | Перистое облако",
      "Dual Berettas | Синий кварц",
    ],

    images: [
      "/sets/blue/1.jpg",
      "/sets/blue/2.jpg",
      "/sets/blue/3.jpg",
      "/sets/blue/4.jpg",
      "/sets/blue/5.jpg",
      "/sets/blue/6.jpg",
      "/sets/blue/7.jpg",
      "/sets/blue/8.jpg"
    ]
  },

  {
    slug: "snow",
    name: "Снежный сет",
    status: "tradeban",
    statusUntil: "До 5 октября",
    tag: "Идеально чистый",
    price: "2 700 ₽",
    moneyback: "1 300 ₽",
    duration: "6 дней",

    description:
      "★ Коготь + ★ Перчатки спецназа | Капитан 3-го ранга (Minimal Wear)",

    value: "≈ 43 750 ₽",

    items: [
      "★ Коготь",
      "Перчатки спецназа | Капитан 3-го ранга (Minimal Wear)",
    ],

    images: [
      "/sets/snow/1.jpg",
      "/sets/snow/2.jpg",
      "/sets/snow/3.jpg",
      "/sets/snow/4.jpg"
    ]
  },
  {
    slug: "darkblue",
    name: "Тёмно-синий сет",
    tag: "С дополнительными скинами",
    statusUntil: "До 1 октября",
    status: "rented",
    price: "2 250 ₽",
    duration: "6 дней",
    moneyback: "1 250 ₽",

    description:
      "★ Скелетный нож | Вороненая сталь (Minimal Wear) + ★ Перчатки спецназа | Полевой агент (Field-Tested)",

    value: "≈ 36 860 ₽",

    items: [
      "★ Скелетный нож | Вороненая сталь",
      "★ Перчатки спецназа | Полевой агент",
      "M4A1-S | Помой меня пж",
      "USP-S | Бесшумный выстрел",
      "Desert Eagle | Недовольство",
      "M4A4 | Рваный морской камуфляж",
      "StatTrak™ SSG 08 | Мейнфрейм 001",
      "Glock-18 | Океаническая топография",
      "MP9 | Синий буйвол",
      "SG 553 | Ночной камуфляж",
    ],

    images: [
      "/sets/darkblue/1.jpg",
      "/sets/darkblue/2.jpg",
      "/sets/darkblue/3.jpg",
      "/sets/darkblue/4.jpg",
    ]
  },


  {
    slug: "darkwhite",
    name: "Чёрно-белый сет",
    tag: "Готовый инвентарь",
    status: "tradeban",
    statusUntil: "27 сентября",
    price: "3 500 ₽",
    duration: "6 дней",
    moneyback: "2 000 ₽",

    description:
      "★ Butterfly Knife | Black Laminate (Minimal Wear) + ★ Moto Gloves | Smoke Out (Field-Tested)",

    value: "≈ 68 520 ₽",

    items: [
      "★ Butterfly Knife | Black Laminate (Minimal Wear)",
      "★ Moto Gloves | Smoke Out",
      "AWP | Конец",
      "AK-47 | Прорыв",
      "UMP-45 | Арктический волк",
      "SSG 08 | Zeno",
      "M4A1-S | Василиск",
      "Glock-18 | След зафиксирован",
      "Desert Eagle | «Дейли Дигл»",
      "USP-S | Билет в ад",
      "FAMAS | Серый призрак",
      "Five-SeveN | Серебряный кварц",
      "M4A4 | Эолова тьма",
      "CZ75-Auto | Штамп",
      "AUG | Жуть",
      "Tec-9 | Пиксельный камуфляж «Город»",
      "MAC-10 | Снежные брызги",
      "Автомат «Галиль» | Серый дым",
      "Dual Berettas | Серебряный налив",
      "MP9 | Голова кругом",
      "P250 | Ледяная корка",
    ],

    images: [
      "/sets/darkwhite/1.jpg",
      "/sets/darkwhite/2.jpg",
      "/sets/darkwhite/3.jpg",
      "/sets/darkwhite/4.jpg",
      "/sets/darkwhite/5.jpg",
      "/sets/darkwhite/6.jpg",
      "/sets/darkwhite/7.jpg",
      "/sets/darkwhite/8.jpg",
    ]
  },

  {
    slug: "doppler4",
    name: "Волнистое облако",
    status: "rented",
    statusUntil: "Долгосрочная аренда",
    tag: "Идеальное сочетание",
    price: "4 250 ₽",
    moneyback: "2 250 ₽",
    duration: "6 дней",

    description:
      "★ Karambit | Doppler Phase 4 (Factory New) + ★ Specialist Gloves | Cloud Chaser (Field-Tested)",

    value: "≈ 152 750 ₽",

    items: [
      "★ Karambit | Doppler Phase 4",
      "★ Specialist Gloves | Cloud Chaser",
    ],

    images: [
      "/sets/doppler4/1.jpg",
      "/sets/doppler4/2.jpg",
      "/sets/doppler4/3.jpg",
      "/sets/doppler4/4.jpg"
    ]
  },

  {
    slug: "mystic",
    name: "Мистический сет",
    tag: "С готовым инвентарём",
    status: "rented",
    statusUntil: "Долгосрочная аренда",
    price: "5 000 ₽",
    duration: "6 дней",
    moneyback: "2 000 ₽",

    description:
      "★ Butterfly Knife | Slaughter (Factory New) + ★ Sport Gloves | Occult (Field-Tested)",

    value: "≈ 210 550 ₽",

    items: [
      "★ Butterfly Knife | Slaughter",
      "★ Sport Gloves | Occult",
      "Desert Eagle | Fennec Fox",
      "AWP | Queen's Gambit",
      "M4A4 | The Emperor",
      "USP-S | The Traitor",
      "AK-47 | Legion of Anubis",
      "Glock-18 | Ramese's Reach",
      "Galil AR | Dusk Ruins",
      "FAMAS | Survivor Z",
      "Tec-9 | Sultan",
      "M4A1-S | Night Terror",
      "FAMAS | Survivor Z",
      "SSG 08 | Calligrafaux",
      "MP7 | Coral Paisley",
    ],

    images: [
      "/sets/mystic/1.png",
      "/sets/mystic/2.png",
      "/sets/mystic/3.png",
      "/sets/mystic/4.png",
      "/sets/mystic/5.png",
      "/sets/mystic/6.png",
      "/sets/mystic/7.png",
      "/sets/mystic/8.png"
    ]
  },

  {
    slug: "biba",
    name: "Камуфляжный сет",
    tag: "Бесплатно",
    status: "tradeban",
    statusUntil: "1 октября",
    price: "500 ₽",
    duration: "6 дней",
    moneyback: "500 ₽",

    description:
      "★ Kukri Knife | Boreal Forest (Field-Tested) + ★ Specialist Gloves | Buckshot (Field-Tested) \n\n Сет является бесплатным при выполнении следующих условий: покупка через авито, положительный отзыв, самостоятельная отмена трейда в конце аренды",

    value: "≈ 6 850 ₽",

    items: [
      "★ Kukri Knife | Boreal Forest",
      "★ Specialist Gloves | Buckshot",
    ],

    images: [
      "/sets/biba/1.png",
      "/sets/biba/2.png",
      "/sets/biba/3.png",
      "/sets/biba/4.png",
    ]
  },


];

export default sets;