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
  statusUntil: "20.10",
  price: "3 850 ₽",
  duration: "6 дней",
  moneyback: "1 850 ₽",

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
    price: "4 250 ₽",
    duration: "6 дней",
    moneyback: "2 250 ₽",

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
    statusUntil: "11.10",
    price: "4 500 ₽",
    duration: "6 дней",
    moneyback: "2 500 ₽",

    description:
      "★ Нож-бабочка | Чистая вода (MW) + ★ Мотоциклетные перчатки | Полигон (FT)",

    value: "≈ 72 150 ₽",

    items: [
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
    status: "rented",
    statusUntil: "12.10",
    tag: "Идеально чистый",
    price: "3 200 ₽",
    moneyback: "1 700 ₽",
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
    statusUntil: "30.10",
    status: "tradeban",
    price: "2 850 ₽",
    duration: "6 дней",
    moneyback: "1 750 ₽",

    description:
      "★ Скелетный нож | Вороненая сталь (Minimal Wear) + ★ Перчатки спецназа | Полевой агент (Field-Tested)",

    value: "≈ 36 860 ₽",

    items: [
      "M4A1-S | Wash me plz",
      "USP-S | Silent Shot",
      "Desert Eagle | Tilted",
      "M4A4 | Naval Shred Camo",
      "StatTrak™ SSG 08 | Mainframe 001",
      "Glock-18 | Ocean Topo",
      "MP9 | Buff Blue",
      "SG 553 | Night Camo",
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
    statusUntil: "06.11",
    price: "4 250 ₽",
    duration: "6 дней",
    moneyback: "3 000 ₽",

    description:
      "★ Butterfly Knife | Black Laminate (Minimal Wear) + ★ Moto Gloves | Smoke Out (Field-Tested) \n\n Сет предоставляется только при условии самостоятельной отмены трейда с вашей стороны. После завершения аренды необходимо отменить обмен самостоятельно. В случае отказа от отмены вы потеряете возможность получить обратно 3 250 ₽ (манибэк), а также будете внесены в чёрный список сайта и лишены возможности дальнейшей аренды. ",

    value: "≈ 68 520 ₽",

    items: [
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
    statusUntil: "15.10",
    tag: "Идеальное сочетание",
    price: "5 200 ₽",
    moneyback: "2 200 ₽",
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
    statusUntil: "11.10",
    price: "5 150 ₽",
    duration: "6 дней",
    moneyback: "2 000 ₽",

    description:
      "★ Butterfly Knife | Slaughter (Factory New) + ★ Sport Gloves | Occult (Field-Tested)",

    value: "≈ 210 550 ₽",

    items: [
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
    statusUntil: "09.10",
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

  {
    slug: "tiger",
    name: "Тигриный сет",
    tag: "Готовый инвентарь",
    status: "rented",
    statusUntil: "10.10",
    price: "2 850 ₽",
    duration: "6 дней",
    moneyback: "1 650 ₽",

    description:
      "★ Stiletto Knife | Tiger Tooth (Factory New) + ★ Sport Gloves | Omega (Field-Tested)",

    value: "≈ 44 120 ₽",

    items: [
      "Desert Eagle | Conspiracy",
      "Galil AR | Black Sand",
      "M4A1-S | Nitro",
      "Tec-9 | Mummy's Rot",
      "M4A4 | Dark Operative",
      "AK-47 | Elite Build",
      "Glock-18 | Wraiths",
      "AWP | Phobos",
      "Dual Berettas | Dualing Dragons",
      "USP-S | Desert Tactical",
      "SSG 08 | Slashed",
      "MP7 | Armor Core",
      "MAC-10 | Light Box",
      "MP9 | Broken Record",
      "Sawed-Off | Spirit Board",
      "P250 | Bullfrog",
      "FAMAS | Corp Defense",
      "Five-SeveN | Silver Quartz",
      "Nova | Dark Sigil",
      "MAG-7 | Foresight",
    ],

    images: [
      "/sets/tiger/1.png",
      "/sets/tiger/2.png",
      "/sets/tiger/3.png",
      "/sets/tiger/4.png",
      "/sets/tiger/5.png",
      "/sets/tiger/6.png",
    ]
  },

  {
    slug: "doppler3",
    name: "Кристаллический сет",
    tag: "Идеальное сочетание",
    status: "available",
    statusUntil: "23.10",
    price: "4 250 ₽",
    duration: "6 дней",
    moneyback: "2 250 ₽",

    description:
      "★ M9 Bayonet | Doppler Phase 3 (Factory New) + ★ Moto Gloves | Polygon (Field-Tested)",

    value: "≈ 90 050 ₽",

    items: [
       "★ M9 Bayonet | Doppler Phase 3",
       "★ Moto Gloves | Polygon",
    ],

    images: [
      "/sets/doppler3/1.png",
      "/sets/doppler3/2.png",
    ]
  },

  {
    slug: "purple",
    name: "Фиолетовый сет",
    tag: "С дополнительными скинами",
    status: "tradeban",
    statusUntil: "23.10",
    price: "4 250 ₽",
    duration: "6 дней",
    moneyback: "2 250 ₽",

    description:
      "★ Butterfly Knife | Freehand (Minimal Wear) + ★ Driver Gloves | Imperial Plaid (Field-Tested)",

    value: "≈ 69 170 ₽",

    items: [
       "AK-47 | Midnight Laminate",
       "Glock-18 | Shinobu",
       "M4A1-S | Black Lotus",
       "USP-S | Sleeping Potion",
       "Desert Eagle | Firebreathing",
    ],

    images: [
      "/sets/purple/1.png",
      "/sets/purple/2.png",
      "/sets/purple/3.png",
      "/sets/purple/4.png",
      "/sets/purple/5.png",
    ]
  },


];

export default sets;
