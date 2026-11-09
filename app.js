/**
 * Справа про порожній мольберт: Голос Надії
 * Шкільний інтерактивний детективний квест до акції «16 днів проти насильства»
 * Frontend Architecture & Logic (Vanilla JS, 100% Vector SVG)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. ВЕКТОРНІ SVG-АВАТАРИ ПЕРСОНАЖІВ ТА ГРАФІКА (100% КОДОМ)
  // ==========================================================================
  const SVG_AVATARS = {
    // Надія — художниця у береті з пензлем
    nadiia: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#065f46"/>
        <!-- Тіло / одяг художниці -->
        <path d="M20 100 C20 75, 40 70, 50 70 C60 70, 80 75, 80 100 Z" fill="#047857"/>
        <path d="M42 70 L50 82 L58 70 Z" fill="#fffbeb"/>
        <!-- Шия та обличчя -->
        <rect x="44" y="58" width="12" height="16" fill="#fcd34d" rx="4"/>
        <ellipse cx="50" cy="46" rx="22" ry="24" fill="#fde68a"/>
        <!-- Волосся -->
        <path d="M26 44 C26 26, 74 26, 74 44 C74 54, 70 64, 70 64 C64 54, 62 42, 50 42 C38 42, 36 54, 30 64 C30 64, 26 54, 26 44 Z" fill="#78350f"/>
        <!-- Очі та вираз обличчя -->
        <ellipse cx="42" cy="46" rx="2.5" ry="3.5" fill="#1e293b"/>
        <ellipse cx="58" cy="46" rx="2.5" ry="3.5" fill="#1e293b"/>
        <circle cx="43" cy="45" r="0.9" fill="#ffffff"/>
        <circle cx="59" cy="45" r="0.9" fill="#ffffff"/>
        <path d="M38 40 Q43 38 46 40" stroke="#78350f" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <path d="M54 40 Q57 38 62 40" stroke="#78350f" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <path d="M46 54 Q50 57 54 54" stroke="#b45309" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <!-- Маленька цятка фарби на щоці (деталь зі свідчення!) -->
        <circle cx="63" cy="52" r="2.2" fill="#3b82f6"/>
        <!-- Берет художниці -->
        <ellipse cx="48" cy="28" rx="28" ry="14" fill="#059669" transform="rotate(-8 48 28)"/>
        <circle cx="46" cy="14" r="3" fill="#047857"/>
        <!-- Пензлик біля плеча -->
        <line x1="72" y1="88" x2="84" y2="52" stroke="#d97706" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M84 52 L87 43 C88 40, 83 40, 82 44 Z" fill="#3b82f6"/>
      </svg>
    `,

    // Софія — модераторка в стильних окулярах
    sofiia: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#0369a1"/>
        <!-- Одяг / жакет -->
        <path d="M18 100 C18 76, 38 70, 50 70 C62 70, 82 76, 82 100 Z" fill="#0284c7"/>
        <path d="M40 70 L50 84 L60 70 Z" fill="#f8fafc"/>
        <path d="M48 76 L52 76 L51 92 L49 92 Z" fill="#0284c7"/>
        <!-- Шия та обличчя -->
        <rect x="44" y="58" width="12" height="15" fill="#fed7aa" rx="3"/>
        <ellipse cx="50" cy="46" rx="21" ry="23" fill="#ffedd5"/>
        <!-- Акуратне коротке волосся -->
        <path d="M27 45 C27 24, 73 24, 73 45 C73 58, 71 62, 71 62 C66 46, 62 38, 50 38 C38 38, 34 46, 29 62 C29 62, 27 58, 27 45 Z" fill="#1e1b4b"/>
        <!-- Окуляри модераторки -->
        <circle cx="41" cy="46" r="8" fill="rgba(255,255,255,0.25)" stroke="#0284c7" stroke-width="2.2"/>
        <circle cx="59" cy="46" r="8" fill="rgba(255,255,255,0.25)" stroke="#0284c7" stroke-width="2.2"/>
        <line x1="49" y1="46" x2="51" y2="46" stroke="#0284c7" stroke-width="2.5"/>
        <line x1="33" y1="45" x2="28" y2="43" stroke="#0284c7" stroke-width="1.8"/>
        <line x1="67" y1="45" x2="72" y2="43" stroke="#0284c7" stroke-width="1.8"/>
        <!-- Очі за склом -->
        <circle cx="41" cy="46" r="2.4" fill="#0f172a"/>
        <circle cx="59" cy="46" r="2.4" fill="#0f172a"/>
        <!-- Усмішка -->
        <path d="M45 56 Q50 59 55 56" stroke="#ea580c" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      </svg>
    `,

    // Максим — лідер у худі/куртці
    maksym: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#78350f"/>
        <!-- Одяг лідера (темно-бурштиновий світшот) -->
        <path d="M16 100 C16 75, 36 68, 50 68 C64 68, 84 75, 84 100 Z" fill="#d97706"/>
        <path d="M38 68 C38 78, 62 78, 62 68 Z" fill="#b45309"/>
        <!-- Шия та мужнє підборіддя -->
        <rect x="44" y="56" width="12" height="16" fill="#fcd34d" rx="3"/>
        <ellipse cx="50" cy="44" rx="21" ry="23" fill="#fde68a"/>
        <!-- Коротка стильна стрижка лідера -->
        <path d="M27 40 C27 24, 73 24, 73 40 C73 43, 70 34, 50 34 C30 34, 27 43, 27 40 Z" fill="#451a03"/>
        <path d="M30 32 L36 22 L46 26 L56 21 L64 25 L70 32 Z" fill="#451a03"/>
        <!-- Брови та очі лідера -->
        <path d="M36 39 L45 40" stroke="#451a03" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M55 40 L64 39" stroke="#451a03" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="41" cy="45" r="2.5" fill="#1e293b"/>
        <circle cx="59" cy="45" r="2.5" fill="#1e293b"/>
        <!-- Стриманий вираз -->
        <path d="M45 56 L55 56" stroke="#b45309" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `,

    // Денис — жартівник з навушниками на шиї
    denys: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#831843"/>
        <!-- Одяг / яскраве худі -->
        <path d="M16 100 C16 76, 36 70, 50 70 C64 70, 84 76, 84 100 Z" fill="#be185d"/>
        <!-- Навушники на шиї -->
        <path d="M30 70 C30 84, 70 84, 70 70" stroke="#0f172a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <ellipse cx="28" cy="68" rx="7" ry="9" fill="#1e293b"/>
        <ellipse cx="72" cy="68" rx="7" ry="9" fill="#1e293b"/>
        <!-- Шия та обличчя -->
        <rect x="44" y="56" width="12" height="16" fill="#fed7aa" rx="3"/>
        <ellipse cx="50" cy="44" rx="21" ry="23" fill="#ffedd5"/>
        <!-- Скуйовджене волосся -->
        <path d="M26 38 C28 20, 72 20, 74 38 C76 34, 70 24, 60 22 C52 18, 44 24, 38 22 C30 24, 26 32, 26 38 Z" fill="#b45309"/>
        <!-- Хитрі очі та підморгування -->
        <circle cx="40" cy="44" r="2.5" fill="#0f172a"/>
        <path d="M56 44 Q60 41 64 44" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Широка пустотлива посмішка -->
        <path d="M43 54 Q50 62 57 54" stroke="#9d174d" stroke-width="2.4" fill="#fff" stroke-linecap="round"/>
      </svg>
    `,

    // Лєра — тиха, уважна однокласниця
    lera: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#3b0764"/>
        <!-- Одяг (затишний фіолетовий светр) -->
        <path d="M18 100 C18 76, 38 72, 50 72 C62 72, 82 76, 82 100 Z" fill="#6b21a8"/>
        <path d="M42 72 C42 76, 58 76, 58 72 Z" fill="#581c87"/>
        <!-- Шия та обличчя -->
        <rect x="44" y="58" width="12" height="16" fill="#fcd34d" rx="3"/>
        <ellipse cx="50" cy="45" rx="20" ry="22" fill="#fde68a"/>
        <!-- М'яке довге волосся з проділом -->
        <path d="M26 44 C26 24, 74 24, 74 44 C74 66, 70 74, 70 74 C66 56, 62 44, 50 44 C38 44, 34 56, 30 74 C30 74, 26 66, 26 44 Z" fill="#312e81"/>
        <!-- Очі — великі, чуйні -->
        <ellipse cx="42" cy="46" rx="3" ry="3.8" fill="#1e1b4b"/>
        <ellipse cx="58" cy="46" rx="3" ry="3.8" fill="#1e1b4b"/>
        <circle cx="43" cy="45" r="1.1" fill="#ffffff"/>
        <circle cx="59" cy="45" r="1.1" fill="#ffffff"/>
        <!-- Лагідна скромна посмішка -->
        <path d="M46 56 Q50 58 54 56" stroke="#701a75" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      </svg>
    `
  };

  // ==========================================================================
  // 2. БАЗА ДАНИХ ПЕРСОНАЖІВ
  // ==========================================================================
  const CHARACTERS = {
    nadiia: {
      name: 'Надія Кравчук',
      role: 'Головна художниця виставки',
      classKey: 'char-nadiia',
      avatar: SVG_AVATARS.nadiia,
      desc: 'Талановита, щира, проте вразлива до тиску й несправедливості.',
      empathyScore: '100% (Потребує підтримки)'
    },
    sofiia: {
      name: 'Софія',
      role: 'Модераторка оргкомітету',
      classKey: 'char-sofiia',
      avatar: SVG_AVATARS.sofiia,
      desc: 'Організована, справедлива, веде розслідування з повагою до фактів.',
      empathyScore: '95% (Медіатор)'
    },
    maksym: {
      name: 'Максим',
      role: 'Лідер виставкового комітету',
      classKey: 'char-maksym',
      avatar: SVG_AVATARS.maksym,
      desc: 'Орієнтований на результат, схильний до авторитарності та знецінення.',
      empathyScore: '25% ➔ 90% (Трансформація)'
    },
    denys: {
      name: 'Денис',
      role: 'Жартівник та контент-мейкер',
      classKey: 'char-denys',
      avatar: SVG_AVATARS.denys,
      desc: 'Любить бути в центрі уваги, плутає дружній гумор із цькуванням.',
      empathyScore: '20% ➔ 85% (Усвідомлення)'
    },
    lera: {
      name: 'Лєра',
      role: 'Спостережлива однокласниця',
      classKey: 'char-lera',
      avatar: SVG_AVATARS.lera,
      desc: 'Усе бачить і співпереживає, але боялася сказати слово проти натовпу.',
      empathyScore: '40% ➔ 95% (Голос підтримки)'
    }
  };

  // ==========================================================================
  // 3. БАЗА ДАНИХ 6 ЛОКАЦІЙ ТА ФІНАЛУ (LAYER B)
  // ==========================================================================
  const LOCATIONS = {
    1: {
      id: 1,
      code: '2041',
      name: 'Кабінет інформатики',
      riddle: 'Першу зачіпку бачили там, де живуть алгоритми, клавіатури та локальна мережа школи. Зверніться до вчителя, який знає мову коду.',
      testimonyTime: 'Вчора, 11:20',
      testimonyText: 'Денис сфотографував чорновий ескіз Надії та її саму з краплею фарби на щоці й попри її прохання видалити зробив мем для групи зі словами: «Та розслабся, чого ти душниш, всім же весело!».',
      category: 'Кібербулінг та цифрові кордони',
      conclusions: [
        {
          text: 'Денис просто хотів розрядити обстановку і зробити кумедний контент',
          isAccurate: false,
          hint: 'Надія прямо попросила видалити фото. Коли смішно лише одному, а інший просить зупинитися — чи залишається це жартом?'
        },
        {
          text: 'Це порушення цифрових кордонів і кібербулінг, прихований за фразою "це просто жарт"',
          isAccurate: true,
          hint: null
        },
        {
          text: 'Надії варто було у відповідь сфотографувати Дениса і теж викласти в чат',
          isAccurate: false,
          hint: 'Помста в мережі лише розкручує спіраль цькування. Важливо захистити приватність, а не відповідати агресією.'
        }
      ],
      minigame: {
        type: 'bucket_sort',
        title: 'Мінігра 1: Дружній гумор vs Порушення кордонів',
        prompt: 'Розподіліть 4 ситуації у відповідні категорії:',
        cards: [
          { id: 'c1', text: 'Смішне фото кота по дорозі до школи', target: 'humor' },
          { id: 'c2', text: 'Невдале фото однокласника з їдальні без його дозволу для стікерів', target: 'boundary' },
          { id: 'c3', text: 'Спільний жартівливий скетч про домашку, який друзі виклали за обопільною згодою', target: 'humor' },
          { id: 'c4', text: 'Опитування в чаті з висміюванням чиїхось ідей', target: 'boundary' }
        ]
      }
    },

    2: {
      id: 2,
      code: '3182',
      name: 'Кабінет математики',
      riddle: 'Наступний свідок бачив суперечку там, де панують теореми, графіки функцій та точні обчислення.',
      testimonyTime: 'Вчора, 12:15',
      testimonyText: 'Коли Надія спокійно сказала Максиму, що її пропозиції перебивають, він відповів: «Надю, тобі все здається! Ти сама собі вигадала образу, у тебе просто бурхлива фантазія».',
      category: 'Газлайтинг та психологічна маніпуляція',
      conclusions: [
        {
          text: 'Максим намагався заспокоїти Надію',
          isAccurate: false,
          hint: 'Замість того щоб почути факт, він переконує її, що її почуття несправжні.'
        },
        {
          text: 'Це звичайне непорозуміння через втому',
          isAccurate: false,
          hint: 'Фраза "тобі все здається" на очевидні факти — це спосіб зняти з себе відповідальність.'
        },
        {
          text: 'Це газлайтинг — психологічна маніпуляція, яка змушує людину сумніватися у власному сприйнятті та почуттях',
          isAccurate: true,
          hint: null
        }
      ],
      minigame: {
        type: 'pair_match',
        title: 'Мінігра 2: З\'єднання логічних пар «Фраза ↔ Зміст»',
        prompt: 'З\'єднайте токсичні чи захисні фрази з їхнім психологічним змістом:',
        pairs: [
          { leftId: 'l1', left: '«Тобі все здається, такого не було»', rightId: 'r1', right: 'Заперечення фактів, щоб уникнути вибачення' },
          { leftId: 'l2', left: '«Ти просто не розумієш гумору»', rightId: 'r2', right: 'Перекладання провини з кривдника на постраждалого' },
          { leftId: 'l3', left: '«Я пам\'ятаю, що було сказано, прошу так не робити»', rightId: 'r3', right: 'Здоровий захист особистих кордонів' }
        ]
      }
    },

    3: {
      id: 3,
      code: '4593',
      name: 'Кабінет фізики / хімії',
      riddle: 'Третій епізод стався біля кабінету, де досліджують закони природи, сили тяжіння, струм або хімічні реакції.',
      testimonyTime: 'Вчора, 13:10',
      testimonyText: 'Максим і Денис вимагали, щоб Надія купила всі фарби та ватмани за власні подарункові гроші: «Якщо ти почнеш рахувати гроші — значить, ти нам не справжня подруга».',
      category: 'Економічний примус і шантаж провиною',
      conclusions: [
        {
          text: 'Це економічний примус та шантаж почуттям провини під виглядом перевірки на дружбу',
          isAccurate: true,
          hint: null
        },
        {
          text: 'Прохання було справедливим заради спільної справи',
          isAccurate: false,
          hint: 'Добровільна допомога не вибивається шантажем "інакше ти нам не подруга".'
        },
        {
          text: 'Надія мала мовчки заплатити, щоб уникнути сварки',
          isAccurate: false,
          hint: 'Дружба не купується через примус.'
        }
      ],
      minigame: {
        type: 'classify_four',
        title: 'Мінігра 3: Чесна домовленість чи Маніпуляція?',
        prompt: 'Визначте для кожної ситуації: це чесна домовленість чи маніпуляція:',
        items: [
          { id: 'i1', text: 'Рівний розподіл матеріалів через шкільне самоврядування', correct: 'fair' },
          { id: 'i2', text: 'Зроби за мене мою частину проєкту вночі, інакше виключимо з команди', correct: 'manipulation' },
          { id: 'i3', text: 'Купи мені булочку за свої гроші, якщо хочеш дружити', correct: 'manipulation' },
          { id: 'i4', text: 'Позич запасний олівець до кінця уроку, якщо маєш вільний', correct: 'fair' }
        ]
      }
    },

    4: {
      id: 4,
      code: '5724',
      name: 'Кабінет української мови та літератури',
      riddle: 'Четверта зачіпка чекає там, де вивчають силу слова, синтаксис і твори українських класиків.',
      testimonyTime: 'Вчора, 14:05',
      testimonyText: 'Лєра зізналася подрузі, що їй шкода Надю, але вона боїться написати слово на її захист у чаті, щоб не почали сміятися з неї самої.',
      category: 'Мовчання свідків та ефект натовпу',
      conclusions: [
        {
          text: 'Мовчання — наймудріший вибір',
          isAccurate: false,
          hint: 'Коли всі свідки мовчать, постраждалому здається, що весь клас проти нього.'
        },
        {
          text: 'Мовчання свідків створює ілюзію підтримки агресора; свідку варто хоча б підтримати людину особисто або звернутися до дорослого медіатора',
          isAccurate: true,
          hint: null
        },
        {
          text: 'Лєра винна найбільше за всіх',
          isAccurate: false,
          hint: 'Свідок часто мовчить через страх. Важливо знати безпечні кроки підтримки.'
        }
      ],
      minigame: {
        type: 'ordering',
        title: 'Мінігра 4: 4 кроки небайдужого свідка',
        prompt: 'Розставте кроки у правильній безпечній послідовності (від першого до четвертого):',
        correctOrder: [
          'Не підтримувати булінг лайками чи сміхом',
          'Написати слова підтримки постраждалій людині в особисті повідомлення',
          'Перевести розмову в чаті у конструктивне русло без переходу на особистості',
          'Залучити шкільного психолога або класного керівника, якщо тиск не припиняється'
        ]
      }
    },

    5: {
      id: 5,
      code: '6835',
      name: 'Кабінет історії',
      riddle: 'П\'ятий свідок перебуває там, де зберігається пам\'ять про століття, літописи та права людини.',
      testimonyTime: 'Вчора, 14:50',
      testimonyText: 'На банері виставки Максим вказав лише своє ім\'я, сказавши Надії: «Ти просто малювала картинки за моєю вказівкою, навіщо тобі підпис?».',
      category: 'Знецінення праці та авторської гідності',
      conclusions: [
        {
          text: 'Лідер завжди має право підписувати спільний проєкт лише своїм ім\'ям',
          isAccurate: false,
          hint: 'Кожен внесок у спільну роботу має бути визнаний. Привласнення результатів команди — це порушення довіри.'
        },
        {
          text: 'Це знецінення чужої праці та порушення авторської гідності',
          isAccurate: true,
          hint: null
        },
        {
          text: 'Надії треба було не зважати, адже головне — щоб виставка відбулася',
          isAccurate: false,
          hint: 'Знецінення демотивує людину і формує токсичну атмосферу в колективі.'
        }
      ],
      minigame: {
        type: 'pair_match',
        title: 'Мінігра 5: Справедливе командне партнерство',
        prompt: 'З\'єднайте виклики спільної роботи зі здоровими командними принципами:',
        pairs: [
          { leftId: 'l1', left: 'Внесок кожного учасника', rightId: 'r1', right: 'Обов\'язкове зазначення авторства та подяка' },
          { leftId: 'l2', left: 'Розподіл складних завдань', rightId: 'r2', right: 'Узгодження за бажанням та навичками, а не примус' },
          { leftId: 'l3', left: 'Виникнення труднощів', rightId: 'r3', right: 'Спільний пошук рішень без пошуку цапа-відбувайла' }
        ]
      }
    },

    6: {
      id: 6,
      code: '7946',
      name: 'Кабінет біології / географії',
      riddle: 'Шостий свідок чекає там, де вивчають живу природу, екосистеми або карти континентів.',
      testimonyTime: 'Вчора, 15:30',
      testimonyText: 'Троє учнів домовилися влаштувати Надії тихий бойкот і демонстративно не відповідати на її запитання щодо часу виставки.',
      category: 'Бойкот та групова ізоляція',
      conclusions: [
        {
          text: 'Це право учнів вибирати, з ким і коли їм розмовляти',
          isAccurate: false,
          hint: 'Змова про ігнорування — це не про вибір спілкування, а про цілеспрямоване завдання болю та виключення з групи.'
        },
        {
          text: 'Свідоме ігнорування (бойкот) — це форма психологічного насильства та ізоляції',
          isAccurate: true,
          hint: null
        },
        {
          text: 'Надія мала сама підходити й вибачатися за те, що дратує групу',
          isAccurate: false,
          hint: 'Потерпілий від бойкоту не повинен принижуватися. Бойкот — це агресія, яка вимагає втручання та діалогу.'
        }
      ],
      minigame: {
        type: 'imessage_builder',
        title: 'Мінігра 6: Конструктор «Я-повідомлення»',
        prompt: 'Зберіть конструктивне ненасильницьке висловлювання з трьох частин:',
        slots: [
          {
            label: '1. Констатація факту (без образ):',
            options: [
              { text: '«Коли мої повідомлення щодо проєкту залишаються без відповіді...»', correct: true },
              { text: '«Коли ви всі знову поводитесь як егоїсти та лінивці...»', correct: false }
            ]
          },
          {
            label: '2. Висловлення власного почуття:',
            options: [
              { text: '«...я відчуваю тривогу, розгубленість і неповагу до нашої спільної справи...»', correct: true },
              { text: '«...ви мене дико бісите і заслуговуєте на помсту...»', correct: false }
            ]
          },
          {
            label: '3. Конструктивне прохання / пропозиція:',
            options: [
              { text: '«...тому прошу відповідати на робочі питання вчасно та говорити про претензії прямо.»', correct: true },
              { text: '«...тому я теж буду вас ігнорувати до кінця чверті.»', correct: false }
            ]
          }
        ]
      }
    }
  };

  // Фінальний штаб примирення
  const FINAL_HQ = {
    code: '1616',
    name: 'Кабінет шкільного психолога / організатора',
    leadTitle: 'Фінальний Штаб Примирення (Код: 1616)',
    charterRules: [
      'Повага до особистих і цифрових кордонів: не викладати фото чи меми однокласників без їхньої прямої згоди.',
      'Культура гумору: жарт є жартом лише тоді, коли смішно всім, а не за рахунок приниження іншого.',
      'Активна позиція свідка: не підтримувати цькування мовчанням чи сміхом, висловити підтримку очно або покликати дорослого.',
      'Справедливе визнання: цінувати внесок кожного учасника проєкту та вказувати повне авторство на спільних роботах.',
      'Діалог замість бойкоту: говорити про проблеми через «Я-повідомлення», відмовитися від демонстративного ігнорування.',
      'Право на допомогу: у разі конфліктів звертатися до шкільної служби медіації або психолога без страху осуду.'
    ]
  };

  // ==========================================================================
  // 4. МАТРИЦЯ ЛАТИНСЬКОГО КВАДРАТА ДЛЯ МАРШРУТІВ (1–6 КОМАНД)
  // ==========================================================================
  const LATIN_SQUARE_ROUTES = {
    1: [1, 2, 3, 4, 5, 6],
    2: [2, 3, 4, 5, 6, 1],
    3: [3, 4, 5, 6, 1, 2],
    4: [4, 5, 6, 1, 2, 3],
    5: [5, 6, 1, 2, 3, 4],
    6: [6, 1, 2, 3, 4, 5]
  };

  // Тексти голосових повідомлень Надії
  const VOICE_TRANSCRIPTS = {
    1: '«Я цілий тиждень мовчала, бо не хотіла псувати спільне свято. Думала — потерплю, це ж дрібниці... Але коли твої кордони стирають день за днем, у якийсь момент просто закінчується повітря. Мої малюнки в безпечному місці. Якщо хочете зрозуміти, що сталося насправді — спитайте тих, хто бачив нас учора зі сторони».',
    2: '«Найважче — це коли тобі роблять боляче, а потім усміхаються і кажуть: "Та ми ж жартуємо, чого ти така серйозна?". І ти стоїш і думаєш: може, зі мною справді щось не так? Але ж образа від чужого сміху — справжня».',
    3: '«Коли троє тиснуть, а решта просто дивиться в підлогу і мовчить — здається, що проти тебе взагалі весь клас. Мені так хотілося, щоб хоч хтось один сказав: "Стоп, так не чесно". Навіть одне таке речення змінило б усе».',
    4: '«Дякую, що вислухали мене по-справжньому. Я не хотіла зривати виставку — усі плакати цілі. Я передала їх туди, де в нашій школі завжди вміють вислухати без осуду й допомогти знайти спільну мову. Приходьте туди разом».'
  };

  // ==========================================================================
  // 5. КЕРУВАННЯ СТАНОМ (LOCALSTORAGE)
  // ==========================================================================
  const STORAGE_KEY = 'school_quest_empty_easel_state_v2';

  const defaultState = {
    team: 1,
    stepsCount: 4,               // 4 або 6 перерв
    stepIndex: 0,                // скільки локацій завершено (0..stepsCount)
    completedLocations: [],      // масив id завершених локацій
    activeLocationId: null,      // поточна активна відкрита локація
    pendingUnlockLocId: null,
    inRecessMode: false,         // режим паузи на урок
    finalUnlocked: false,
    finalCompleted: false,
    selectedCharterRules: [],
    musicEnabled: false,
    timestamp: Date.now()
  };

  let gameState = loadState();

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Object.assign({}, defaultState, parsed);
      }
    } catch (e) {
      console.warn('Помилка читання localStorage:', e);
    }
    return Object.assign({}, defaultState);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    } catch (e) {
      console.warn('Помилка запису в localStorage:', e);
    }
  }

  // ==========================================================================
  // 6. АУДІО МЕНЕДЖЕР (BGM + VOICE З НАДІЙНИМ FALLBACK)
  // ==========================================================================
  const AudioManager = {
    bgmEl: document.getElementById('audio-bgm'),
    voiceEl: document.getElementById('audio-voice'),
    currentPlayingCard: null,
    simulatedTimer: null,
    audioCtx: null,

    init() {
      if (this.bgmEl) {
        this.bgmEl.volume = 0.35;
      }
      if (this.voiceEl) {
        this.voiceEl.addEventListener('ended', () => {
          this.stopVoiceVisuals();
        });
        this.voiceEl.addEventListener('timeupdate', () => {
          this.updateVoiceProgress();
        });
      }
    },

    toggleBgm() {
      if (!this.bgmEl) return;
      if (gameState.musicEnabled) {
        this.bgmEl.pause();
        gameState.musicEnabled = false;
      } else {
        const playPromise = this.bgmEl.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              gameState.musicEnabled = true;
            })
            .catch(() => {
              // Автоплей заблоковано браузером — увімкнеться після жесту
              gameState.musicEnabled = true;
            });
        }
      }
      saveState();
      UI.updateMusicButton();
    },

    playVoice(voiceNum, cardElement) {
      // Якщо вже грає цей самий запис — ставимо на паузу
      if (this.currentPlayingCard === cardElement) {
        this.stopVoice();
        return;
      }

      this.stopVoice();
      this.currentPlayingCard = cardElement;
      cardElement.classList.add('is-playing');
      const playBtn = cardElement.querySelector('.btn-voice-play');
      if (playBtn) {
        playBtn.classList.add('playing');
        playBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1"></rect>
            <rect x="14" y="5" width="4" height="14" rx="1"></rect>
          </svg>
        `;
      }

      // Спроба відтворити MP3
      const audioSources = [
        `assets/audio/voice_nadiia_${voiceNum}.mp3`,
        `voice_nadiia_${voiceNum}.mp3`
      ];

      let playedSuccessfully = false;
      if (this.voiceEl) {
        this.voiceEl.src = audioSources[0];
        const playPromise = this.voiceEl.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              playedSuccessfully = true;
            })
            .catch(() => {
              // Спробуємо запасний відносний шлях
              this.voiceEl.src = audioSources[1];
              this.voiceEl.play().catch(() => {
                this.fallbackSimulatedPlayback(voiceNum, cardElement);
              });
            });
        }
      } else {
        this.fallbackSimulatedPlayback(voiceNum, cardElement);
      }
    },

    fallbackSimulatedPlayback(voiceNum, cardElement) {
      // Плавна анімація звукової хвилі навіть без аудіофайлу
      let progress = 0;
      const totalDuration = 14; // 14 секунд симуляції
      const timeDisplay = cardElement.querySelector('.voice-time-current');
      
      clearInterval(this.simulatedTimer);
      this.simulatedTimer = setInterval(() => {
        progress += 0.5;
        if (timeDisplay) {
          const mins = Math.floor(progress / 60);
          const secs = Math.floor(progress % 60).toString().padStart(2, '0');
          timeDisplay.textContent = `0:${secs}`;
        }
        if (progress >= totalDuration) {
          this.stopVoice();
        }
      }, 500);

      // Автоматично відкриваємо розшифровку, якщо аудіо відсутнє
      const transcriptEl = cardElement.querySelector('.voice-transcript-content');
      if (transcriptEl) {
        transcriptEl.classList.add('open');
      }
    },

    updateVoiceProgress() {
      if (!this.currentPlayingCard || !this.voiceEl) return;
      const cur = this.voiceEl.currentTime;
      const dur = this.voiceEl.duration || 14;
      const timeDisplay = this.currentPlayingCard.querySelector('.voice-time-current');
      if (timeDisplay) {
        const secs = Math.floor(cur % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `0:${secs}`;
      }
    },

    stopVoice() {
      if (this.voiceEl) {
        this.voiceEl.pause();
      }
      clearInterval(this.simulatedTimer);
      if (this.currentPlayingCard) {
        this.currentPlayingCard.classList.remove('is-playing');
        const playBtn = this.currentPlayingCard.querySelector('.btn-voice-play');
        if (playBtn) {
          playBtn.classList.remove('playing');
          playBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <polygon points="6 4 20 12 6 20 6 4"></polygon>
            </svg>
          `;
        }
        this.currentPlayingCard = null;
      }
    },

    stopVoiceVisuals() {
      this.stopVoice();
    },

    playChime(type) {
      // Легкий синтезатор тонів через Web Audio API для кліків та успіху
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        if (!this.audioCtx) this.audioCtx = new AudioContext();
        if (this.audioCtx.state === 'suspended') {
          this.audioCtx.resume();
        }
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        const now = this.audioCtx.currentTime;
        if (type === 'success') {
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
          osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
          osc.start(now);
          osc.stop(now + 0.45);
        } else if (type === 'error') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.setValueAtTime(180, now + 0.1);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
        } else {
          osc.frequency.setValueAtTime(440, now);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.08);
        }
      } catch (e) {
        // Ігноруємо беззвучні середовища
      }
    }
  };

  // ==========================================================================
  // 7. МАРШРУТИЗАЦІЯ ТА ОТРИМАННЯ ЛОКАЦІЙ
  // ==========================================================================
  function getTeamRoute(teamNum) {
    const validTeam = Math.max(1, Math.min(6, parseInt(teamNum, 10) || 1));
    return LATIN_SQUARE_ROUTES[validTeam] || LATIN_SQUARE_ROUTES[1];
  }

  function getActiveRouteList() {
    const fullRoute = getTeamRoute(gameState.team);
    const limit = Math.min(fullRoute.length, gameState.stepsCount || 4);
    return fullRoute.slice(0, limit);
  }

  function getCurrentExpectedLocation() {
    const route = getActiveRouteList();
    if (gameState.stepIndex < route.length) {
      const locId = route[gameState.stepIndex];
      return LOCATIONS[locId] || null;
    }
    return null; // Всі локації пройдено, очікується фінал
  }

  // ==========================================================================
  // 8. ГОЛОВНИЙ UI МЕНЕДЖЕР ТА РЕНДЕРИНГ
  // ==========================================================================
  const UI = {
    chatStream: document.getElementById('chat-stream'),
    headerStack: document.getElementById('header-avatar-stack'),
    headerStatus: document.getElementById('header-status-text'),
    cluesProgressText: document.getElementById('clues-progress-text'),
    teamBadgeText: document.getElementById('team-badge-text'),
    teamRouteHint: document.getElementById('team-route-hint'),
    btnBgm: document.getElementById('btn-bgm'),
    dossierView: document.getElementById('dossier-view'),
    chatView: document.getElementById('chat-view'),
    dossierUnreadDot: document.getElementById('dossier-unread-dot'),

    // Модальні вікна
    modalCode: document.getElementById('modal-code'),
    modalSettings: document.getElementById('modal-settings'),
    modalCertificate: document.getElementById('modal-certificate'),
    pinDigits: document.querySelectorAll('.pin-digit'),
    pinFeedback: document.getElementById('pin-feedback'),

    enteredPin: '',

    init() {
      this.renderHeaderAvatars();
      this.updateMusicButton();
      this.updateProgressIndicator();
      this.bindEvents();
      this.renderFullChatStory();
      this.renderDossierBoard();
      this.checkUrlParameters();
    },

    renderHeaderAvatars() {
      if (!this.headerStack) return;
      this.headerStack.innerHTML = `
        <div class="stack-avatar" title="${CHARACTERS.sofiia.name}">${CHARACTERS.sofiia.avatar}</div>
        <div class="stack-avatar" title="${CHARACTERS.maksym.name}">${CHARACTERS.maksym.avatar}</div>
        <div class="stack-avatar" title="${CHARACTERS.denys.name}">${CHARACTERS.denys.avatar}</div>
        <div class="stack-avatar" title="${CHARACTERS.lera.name}">${CHARACTERS.lera.avatar}</div>
      `;
    },

    updateMusicButton() {
      if (!this.btnBgm) return;
      if (gameState.musicEnabled) {
        this.btnBgm.classList.add('music-on');
      } else {
        this.btnBgm.classList.remove('music-on');
      }
    },

    updateProgressIndicator() {
      const activeRoute = getActiveRouteList();
      const current = Math.min(gameState.stepIndex, activeRoute.length);
      const total = activeRoute.length;

      if (this.cluesProgressText) {
        this.cluesProgressText.textContent = `${current}/${total}`;
      }

      if (this.teamBadgeText) {
        this.teamBadgeText.textContent = `Команда №${gameState.team}`;
      }

      const nextLoc = getCurrentExpectedLocation();
      if (this.teamRouteHint) {
        if (gameState.finalCompleted) {
          this.teamRouteHint.textContent = 'Справу успішно закрито! Гра завершена.';
        } else if (gameState.finalUnlocked || gameState.stepIndex >= activeRoute.length) {
          this.teamRouteHint.textContent = 'Завдання: Фінальний Штаб (Код 1616)';
        } else if (gameState.inRecessMode) {
          this.teamRouteHint.textContent = 'Триває урок. Доказ зафіксовано!';
        } else if (nextLoc) {
          this.teamRouteHint.textContent = `Ціль ${current + 1}: ${nextLoc.name}`;
        }
      }

      // Оновлення досьє статистики
      const statProg = document.getElementById('dossier-stat-progress');
      if (statProg) {
        statProg.textContent = `${current} з ${total}`;
      }
      const statStatus = document.getElementById('dossier-case-status');
      if (statStatus) {
        if (gameState.finalCompleted) {
          statStatus.textContent = 'Справу закрито';
          statStatus.className = 'status-pill complete';
        } else {
          statStatus.textContent = 'Триває слідство';
          statStatus.className = 'status-pill active';
        }
      }
    },

    bindEvents() {
      // Перемикач музики
      if (this.btnBgm) {
        this.btnBgm.addEventListener('click', () => AudioManager.toggleBgm());
      }

      // Дошка розслідування
      const btnToggleDossier = document.getElementById('btn-toggle-dossier');
      const btnQuickDossier = document.getElementById('btn-quick-dossier');
      const btnBackToChat = document.getElementById('btn-back-to-chat');
      const btnEvidenceBadge = document.getElementById('btn-evidence-badge');

      const openDossier = () => {
        this.chatView.classList.remove('active');
        this.dossierView.classList.add('active');
        this.renderDossierBoard();
        if (this.dossierUnreadDot) this.dossierUnreadDot.style.display = 'none';
      };

      const closeDossier = () => {
        this.dossierView.classList.remove('active');
        this.chatView.classList.add('active');
      };

      if (btnToggleDossier) btnToggleDossier.addEventListener('click', openDossier);
      if (btnQuickDossier) btnQuickDossier.addEventListener('click', openDossier);
      if (btnEvidenceBadge) btnEvidenceBadge.addEventListener('click', openDossier);
      if (btnBackToChat) btnBackToChat.addEventListener('click', closeDossier);

      // Кнопки швидкого виклику коду
      const btnEnterCodeBar = document.getElementById('btn-enter-code-bar');
      if (btnEnterCodeBar) {
        btnEnterCodeBar.addEventListener('click', () => this.openCodeModal());
      }

      const btnQuickClue = document.getElementById('btn-quick-clue');
      if (btnQuickClue) {
        btnQuickClue.addEventListener('click', () => {
          this.scrollToLatestClue();
        });
      }

      // Налаштування організатора
      const btnOpenSettings = document.getElementById('btn-open-settings');
      const btnCloseSettings = document.getElementById('btn-close-settings-modal');
      if (btnOpenSettings) {
        btnOpenSettings.addEventListener('click', () => this.openSettingsModal());
      }
      if (btnCloseSettings) {
        btnCloseSettings.addEventListener('click', () => this.closeSettingsModal());
      }

      // Налаштування команд
      const teamBtns = document.querySelectorAll('.team-select-btn');
      teamBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const t = parseInt(e.target.dataset.team, 10);
          this.changeTeam(t);
        });
      });

      // Налаштування кількості перерв
      const btnSteps4 = document.getElementById('btn-steps-4');
      const btnSteps6 = document.getElementById('btn-steps-6');
      if (btnSteps4) {
        btnSteps4.addEventListener('click', () => this.changeStepsCount(4));
      }
      if (btnSteps6) {
        btnSteps6.addEventListener('click', () => this.changeStepsCount(6));
      }

      // Скидання прогресу
      const btnReset = document.getElementById('btn-reset-progress');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          if (confirm('Скинути весь прогрес слідства та розпочати розслідування спочатку?')) {
            this.resetAllProgress();
          }
        });
      }

      // Модальне вікно коду: NumPad
      const numKeys = document.querySelectorAll('.num-key[data-num]');
      numKeys.forEach(k => {
        k.addEventListener('click', () => {
          this.handlePinInput(k.dataset.num);
        });
      });

      const keyClear = document.getElementById('key-clear');
      if (keyClear) {
        keyClear.addEventListener('click', () => this.handlePinBackspace());
      }

      const keySubmit = document.getElementById('key-submit');
      if (keySubmit) {
        keySubmit.addEventListener('click', () => this.submitPin());
      }

      const btnCloseCode = document.getElementById('btn-close-code-modal');
      if (btnCloseCode) {
        btnCloseCode.addEventListener('click', () => this.closeCodeModal());
      }

      // Клавіатурне введення для десктопу
      window.addEventListener('keydown', (e) => {
        if (this.modalCode.classList.contains('active')) {
          if (e.key >= '0' && e.key <= '9') {
            this.handlePinInput(e.key);
          } else if (e.key === 'Backspace') {
            this.handlePinBackspace();
          } else if (e.key === 'Enter') {
            this.submitPin();
          } else if (e.key === 'Escape') {
            this.closeCodeModal();
          }
        }
      });

      // Сертифікат
      const btnCloseCert = document.getElementById('btn-close-certificate');
      const btnPrintCert = document.getElementById('btn-print-certificate');
      if (btnCloseCert) {
        btnCloseCert.addEventListener('click', () => {
          this.modalCertificate.classList.remove('active');
        });
      }
      if (btnPrintCert) {
        btnPrintCert.addEventListener('click', () => {
          window.print();
        });
      }
    },

    // ========================================================================
    // 9. СЮЖЕТНИЙ ЧАТ ТА ДІАЛОГИ (LAYER A)
    // ========================================================================
    renderFullChatStory() {
      if (!this.chatStream) return;
      this.chatStream.innerHTML = '';

      const route = getActiveRouteList();
      const currentStep = gameState.stepIndex;

      // ----------------------------------------------------------------------
      // ЕТАП 0: СТАРТ РОЗСЛІДУВАННЯ (ОБОВ'ЯЗКОВО ДЛЯ ВСІХ)
      // ----------------------------------------------------------------------
      this.appendSystemNotice('08:14 — Надія Кравчук покинула бесіду "Оргкомітет виставки"', 'alert');

      this.appendChatMessage(
        CHARACTERS.maksym,
        '«Народ, хтось розуміє, що це зараз було?! До відкриття виставки три години, а стенди порожні. Надя просто забрала всі плакати і вийшла з чату».'
      );

      this.appendChatMessage(
        CHARACTERS.denys,
        '«Та класика. Намалювала собі драму на рівному місці. Ми вчора нормально сиділи, жартували, ніхто їй слова поганого не сказав!»'
      );

      this.appendChatMessage(
        CHARACTERS.lera,
        '«Ну... вона вчора виглядала трохи втомленою. Але ж ми всі втомлені, правда?»'
      );

      this.appendChatMessage(
        CHARACTERS.sofiia,
        '«"Ніхто слова поганого не сказав"?! Денисе, ти серйозно? Я щойно знайшла на підвіконні її робочий блокнот. Тут доступ до її особистих голосових чернеток і список кабінетів, де ви вчора "нормально спілкувалися"».'
      );

      // Голосове повідомлення Надії №1
      this.appendVoiceMessage(1, 'Голосове повідомлення Надії №1');

      // ----------------------------------------------------------------------
      // ПОДАЛЬШИЙ СЮЖЕТ ЗАЛЕЖНО ВІД ПРОЙДЕНИХ ЛОКАЦІЙ
      // ----------------------------------------------------------------------
      for (let s = 0; s < currentStep; s++) {
        const locId = route[s];
        const loc = LOCATIONS[locId];

        // Картка свідчення вчителя
        this.appendTestimonyCard(loc, true);

        // Репліки персонажів та наступні голосові після кроків:
        if (s === 0) {
          // Після 1-ї пройденої локації
          this.appendChatMessage(
            CHARACTERS.sofiia,
            '«Ми щойно перевірили перше свідчення. І знаєте що? Це вже зовсім не схоже на "вона сама собі накрутила"».'
          );
          this.appendChatMessage(
            CHARACTERS.denys,
            '«Ой, та ладно вам! Ну було таке, але ж ми по-дружньому! Хіба в компанії друзів не можна пожартувати чи попросити про послугу?»'
          );
          this.appendVoiceMessage(2, 'Голосове повідомлення Надії №2');
        } else if (s === 1) {
          // Після 2-ї пройденої локації
          this.appendChatMessage(
            CHARACTERS.maksym,
            '«Окей, я бачу, куди ви хилите. Так, місцями ми перегнули палицю. Але ж результат проєкту важливіший за чиїсь настрої! Я як лідер мав тримати дисципліну, хіба ні?»'
          );
          this.appendChatMessage(
            CHARACTERS.lera,
            '«Максиме... якщо чесно, мені ще вчора здавалося, що ми занадто сильно на неї тиснемо. Просто я не наважилася сказати це вголос при всіх».'
          );
          this.appendVoiceMessage(3, 'Голосове повідомлення Надії №3');
        } else if (s === 2) {
          // Після 3-ї локації
          this.appendChatMessage(
            CHARACTERS.denys,
            '«Чесно кажучи, мені зараз реально ніяково. Я не думав, що один дурний жарт і кілька фраз у коридорі можуть так скластися одне до одного».'
          );
          this.appendChatMessage(
            CHARACTERS.maksym,
            '«І я не правий. Замість того, щоб розподілити роботу чесно, я просто спихнув усе на Надю, бо знав, що вона відповідальна і не відмовить».'
          );
        } else if (s >= 3 && s < route.length - 1) {
          // Проміжні репліки для формату на 6 перерв
          this.appendChatMessage(
            CHARACTERS.lera,
            '«Кожне свідчення розкриває все глибший ланцюжок. Ми не помічали, як руйнуємо довіру...»'
          );
        }
      }

      // Якщо зараз відкрита активна локація для вирішення
      if (gameState.activeLocationId && !gameState.inRecessMode) {
        const activeLoc = LOCATIONS[gameState.activeLocationId];
        this.appendTestimonyCard(activeLoc, false);
      }
      // Якщо в режимі перерви («Пауза на урок»)
      else if (gameState.inRecessMode) {
        this.appendRecessCard();
      }
      // Якщо всі локації пройдено, переходимо до фіналу
      else if (currentStep >= route.length) {
        this.appendFinalPhase();
      }
      // Інакше — виводимо наводку-загадку на поточну нерозгадану станцію
      else {
        const nextLoc = route[currentStep] ? LOCATIONS[route[currentStep]] : null;
        if (nextLoc) {
          this.appendClueCard(currentStep + 1, nextLoc);
        }
      }

      this.scrollToBottom();
    },

    appendChatMessage(character, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `chat-message ${character.classKey}`;
      msgDiv.innerHTML = `
        <div class="msg-avatar">${character.avatar}</div>
        <div class="msg-body">
          <div class="msg-header">
            <span class="msg-sender">${character.name}</span>
            <span class="sender-role">${character.role}</span>
          </div>
          <div class="msg-bubble">${text}</div>
        </div>
      `;
      this.chatStream.appendChild(msgDiv);
    },

    appendSystemNotice(text, type = 'normal') {
      const noticeDiv = document.createElement('div');
      noticeDiv.className = `system-notice ${type}`;
      noticeDiv.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <span>${text}</span>
      `;
      this.chatStream.appendChild(noticeDiv);
    },

    appendVoiceMessage(voiceNum, label) {
      const transcript = VOICE_TRANSCRIPTS[voiceNum] || '';
      const voiceDiv = document.createElement('div');
      voiceDiv.className = 'voice-card';
      voiceDiv.innerHTML = `
        <div class="voice-card-top">
          <div class="voice-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
            <span>${label}</span>
          </div>
          <span class="voice-time-current" style="font-size:11px; color:#93c5fd; font-family:monospace;">0:00</span>
        </div>

        <div class="voice-player-main">
          <button class="btn-voice-play" data-voice="${voiceNum}" aria-label="Відтворити запис">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <polygon points="6 4 20 12 6 20 6 4"></polygon>
            </svg>
          </button>
          
          <div class="voice-waveform-wrap">
            <svg class="voice-waveform-svg" viewBox="0 0 160 26" preserveAspectRatio="none">
              <!-- Анімовані векторні смужки звукової хвилі -->
              <rect class="waveform-bar" x="4" y="6" width="4" height="14" rx="2"/>
              <rect class="waveform-bar" x="12" y="3" width="4" height="20" rx="2"/>
              <rect class="waveform-bar" x="20" y="8" width="4" height="10" rx="2"/>
              <rect class="waveform-bar" x="28" y="2" width="4" height="22" rx="2"/>
              <rect class="waveform-bar" x="36" y="5" width="4" height="16" rx="2"/>
              <rect class="waveform-bar" x="44" y="9" width="4" height="8" rx="2"/>
              <rect class="waveform-bar" x="52" y="2" width="4" height="22" rx="2"/>
              <rect class="waveform-bar" x="60" y="7" width="4" height="12" rx="2"/>
              <rect class="waveform-bar" x="68" y="4" width="4" height="18" rx="2"/>
              <rect class="waveform-bar" x="76" y="8" width="4" height="10" rx="2"/>
              <rect class="waveform-bar" x="84" y="2" width="4" height="22" rx="2"/>
              <rect class="waveform-bar" x="92" y="6" width="4" height="14" rx="2"/>
              <rect class="waveform-bar" x="100" y="3" width="4" height="20" rx="2"/>
              <rect class="waveform-bar" x="108" y="7" width="4" height="12" rx="2"/>
              <rect class="waveform-bar" x="116" y="2" width="4" height="22" rx="2"/>
              <rect class="waveform-bar" x="124" y="6" width="4" height="14" rx="2"/>
              <rect class="waveform-bar" x="132" y="9" width="4" height="8" rx="2"/>
              <rect class="waveform-bar" x="140" y="4" width="4" height="18" rx="2"/>
              <rect class="waveform-bar" x="148" y="7" width="4" height="12" rx="2"/>
            </svg>
          </div>
        </div>

        <div class="voice-transcript-toggle">
          <button class="btn-text-transcript" type="button">
            <span>📝 Текстова розшифровка запису</span>
          </button>
        </div>

        <div class="voice-transcript-content">
          ${transcript}
        </div>
      `;

      // Прив'язка подій плеєра
      const playBtn = voiceDiv.querySelector('.btn-voice-play');
      playBtn.addEventListener('click', () => {
        AudioManager.playVoice(voiceNum, voiceDiv);
      });

      const transcriptBtn = voiceDiv.querySelector('.btn-text-transcript');
      const transcriptBox = voiceDiv.querySelector('.voice-transcript-content');
      transcriptBtn.addEventListener('click', () => {
        transcriptBox.classList.toggle('open');
      });

      this.chatStream.appendChild(voiceDiv);
    },

    appendClueCard(stepNumber, location) {
      const clueDiv = document.createElement('div');
      clueDiv.className = 'clue-envelope-card';
      clueDiv.id = `clue-step-${stepNumber}`;
      clueDiv.innerHTML = `
        <div class="clue-stamp">ЗАЧІПКА №${stepNumber}</div>
        <div class="clue-title">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>Куди прямувати команді:</span>
        </div>
        <div class="clue-riddle">
          «${location.riddle}»
        </div>
        <div class="clue-card-actions">
          <button class="btn-clue-action" data-loc="${location.id}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Ввести код зі звороту картки вчителя</span>
          </button>
        </div>
      `;

      const btn = clueDiv.querySelector('.btn-clue-action');
      btn.addEventListener('click', () => {
        this.openCodeModal(location.id);
      });

      this.chatStream.appendChild(clueDiv);
    },

    appendTestimonyCard(location, isAlreadyCompleted = false) {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'testimony-card';
      cardDiv.id = `testimony-loc-${location.id}`;

      let conclusionsHtml = '';
      location.conclusions.forEach((c, idx) => {
        const isAcc = c.isAccurate;
        const extraClass = (isAlreadyCompleted && isAcc) ? 'accurate' : '';
        conclusionsHtml += `
          <button class="conclusion-btn ${extraClass}" data-loc="${location.id}" data-idx="${idx}" ${isAlreadyCompleted ? 'disabled' : ''}>
            <span class="num-bullet">${idx + 1}</span>
            <span>«${c.text}»</span>
          </button>
        `;
      });

      cardDiv.innerHTML = `
        <div class="testimony-header">
          <span class="testimony-loc-badge">СВІДЧЕННЯ: ${location.name.toUpperCase()}</span>
          <span class="testimony-time">${location.testimonyTime}</span>
        </div>

        <div class="testimony-text-box">
          <span class="testimony-label">Побачене вчителем:</span>
          <div class="testimony-quote">«${location.testimonyText}»</div>
        </div>

        <div class="conclusions-group">
          <div class="conclusions-title">Оберіть точний висновок слідчої комісії:</div>
          <div class="conclusions-list">
            ${conclusionsHtml}
          </div>
          <div class="soft-hint-container" id="hint-loc-${location.id}"></div>
        </div>

        <div class="minigame-placeholder" id="minigame-loc-${location.id}"></div>
      `;

      // Прив'язка вибору висновку
      if (!isAlreadyCompleted) {
        const btns = cardDiv.querySelectorAll('.conclusion-btn');
        btns.forEach(b => {
          b.addEventListener('click', (e) => {
            const idx = parseInt(b.dataset.idx, 10);
            this.handleConclusionPick(location, idx, cardDiv);
          });
        });
      }

      this.chatStream.appendChild(cardDiv);

      // Якщо вже було розкрито в минулих кроках, одразу показуємо завершений бейдж
      if (isAlreadyCompleted) {
        const hintCont = cardDiv.querySelector(`#hint-loc-${location.id}`);
        if (hintCont) {
          hintCont.innerHTML = `
            <div class="insight-confirmed-box">
              <div class="insight-icon">✓</div>
              <div>
                <div class="insight-title">Доказ успішно долучено до справи!</div>
                <div class="insight-desc">${location.category}</div>
              </div>
            </div>
          `;
        }
      }
    },

    handleConclusionPick(location, index, cardElement) {
      const choice = location.conclusions[index];
      const hintContainer = cardElement.querySelector(`#hint-loc-${location.id}`);
      const buttons = cardElement.querySelectorAll('.conclusion-btn');

      if (!choice.isAccurate) {
        // М'яке заплутування: НЕ караємо, показуємо корекцію Софії
        AudioManager.playChime('error');
        buttons.forEach((b, i) => {
          if (i === index) b.classList.add('inaccurate-picked');
          else b.classList.remove('inaccurate-picked');
        });

        if (hintContainer) {
          hintContainer.innerHTML = `
            <div class="soft-hint-box">
              <div class="soft-hint-icon">💡</div>
              <div class="soft-hint-body">
                <strong>Коментар Софії (підказка):</strong> ${choice.hint}
              </div>
            </div>
          `;
        }
      } else {
        // Точний висновок!
        AudioManager.playChime('success');
        buttons.forEach((b, i) => {
          b.disabled = true;
          if (i === index) {
            b.classList.remove('inaccurate-picked');
            b.classList.add('accurate');
          }
        });

        if (hintContainer) {
          hintContainer.innerHTML = `
            <div class="insight-confirmed-box">
              <div class="insight-icon">✓</div>
              <div>
                <div class="insight-title">Точний інсайт знайдено!</div>
                <div class="insight-desc">${location.category}</div>
              </div>
            </div>
          `;
        }

        // Відкриваємо мінігру цієї локації
        const minigamePlaceholder = cardElement.querySelector(`#minigame-loc-${location.id}`);
        if (minigamePlaceholder) {
          this.renderMinigame(location, minigamePlaceholder);
        }
      }
    },

    // ========================================================================
    // 10. РЕНДЕРИНГ МІНІІГОР ДЛЯ 6 ЛОКАЦІЙ
    // ========================================================================
    renderMinigame(location, container) {
      const mg = location.minigame;
      container.innerHTML = `
        <div class="minigame-container">
          <div class="minigame-title">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            <span>${mg.title}</span>
          </div>
          <div class="minigame-prompt">${mg.prompt}</div>
          <div class="minigame-interactive-area" id="interactive-area-${location.id}"></div>
          <button class="btn-submit-minigame" id="btn-submit-mg-${location.id}" disabled>
            <span>Зафіксувати доказ у матеріалах справи</span>
          </button>
        </div>
      `;

      const area = container.querySelector(`#interactive-area-${location.id}`);
      const submitBtn = container.querySelector(`#btn-submit-mg-${location.id}`);

      // Розподіл за типом мінігри
      if (mg.type === 'bucket_sort') {
        this.setupBucketSortMinigame(mg, area, submitBtn, location);
      } else if (mg.type === 'pair_match') {
        this.setupPairMatchMinigame(mg, area, submitBtn, location);
      } else if (mg.type === 'classify_four') {
        this.setupClassifyFourMinigame(mg, area, submitBtn, location);
      } else if (mg.type === 'ordering') {
        this.setupOrderingMinigame(mg, area, submitBtn, location);
      } else if (mg.type === 'imessage_builder') {
        this.setupIMessageMinigame(mg, area, submitBtn, location);
      }

      submitBtn.addEventListener('click', () => {
        this.completeLocationAndTriggerRecess(location.id);
      });

      this.scrollToBottom();
    },

    // Мінігра 1: Bucket sort (Дружній гумор vs Порушення кордонів)
    setupBucketSortMinigame(mg, area, submitBtn, location) {
      const placements = {}; // cardId -> 'humor' | 'boundary'

      area.innerHTML = `
        <div class="buckets-grid">
          <div class="bucket-col bucket-humor" data-bucket="humor">
            <div class="bucket-header">😊 Дружній гумор</div>
            <div class="bucket-items-list" id="bucket-list-humor"></div>
          </div>
          <div class="bucket-col bucket-boundary" data-bucket="boundary">
            <div class="bucket-header">⚠️ Порушення кордонів</div>
            <div class="bucket-items-list" id="bucket-list-boundary"></div>
          </div>
        </div>
        <div class="unassigned-cards-pool" id="cards-pool">
          <div style="font-size:11px; color:#94a3b8; margin-bottom:4px; text-align:center;">Торкніться картки, щоб перемістити:</div>
          <div id="unassigned-items-list"></div>
        </div>
      `;

      const unassignedList = area.querySelector('#unassigned-items-list');
      const humorList = area.querySelector('#bucket-list-humor');
      const boundaryList = area.querySelector('#bucket-list-boundary');

      const renderCards = () => {
        unassignedList.innerHTML = '';
        humorList.innerHTML = '';
        boundaryList.innerHTML = '';

        mg.cards.forEach(card => {
          const itemEl = document.createElement('div');
          itemEl.className = 'sort-card-item';
          itemEl.textContent = card.text;

          const currentBucket = placements[card.id];
          if (!currentBucket) {
            itemEl.addEventListener('click', () => {
              placements[card.id] = 'humor';
              checkSuccess();
              renderCards();
            });
            unassignedList.appendChild(itemEl);
          } else if (currentBucket === 'humor') {
            itemEl.classList.add('placed-humor');
            itemEl.addEventListener('click', () => {
              placements[card.id] = 'boundary';
              checkSuccess();
              renderCards();
            });
            humorList.appendChild(itemEl);
          } else if (currentBucket === 'boundary') {
            itemEl.classList.add('placed-boundary');
            itemEl.addEventListener('click', () => {
              delete placements[card.id];
              checkSuccess();
              renderCards();
            });
            boundaryList.appendChild(itemEl);
          }
        });
      };

      const checkSuccess = () => {
        let allCorrect = true;
        let count = 0;
        mg.cards.forEach(c => {
          if (placements[c.id]) count++;
          if (placements[c.id] !== c.target) allCorrect = false;
        });

        if (count === mg.cards.length && allCorrect) {
          AudioManager.playChime('success');
          submitBtn.disabled = false;
        } else {
          submitBtn.disabled = true;
        }
      };

      renderCards();
    },

    // Мінігра 2 & 5: З'єднання пар
    setupPairMatchMinigame(mg, area, submitBtn, location) {
      const pairs = mg.pairs;
      let selectedLeft = null;
      let matchedCount = 0;

      // Перемішуємо праву колонку
      const shuffledRights = [...pairs].sort(() => Math.random() - 0.5);

      area.innerHTML = `
        <div class="pair-match-container">
          <div class="match-columns-grid">
            <div class="match-col match-left-col">
              ${pairs.map(p => `
                <div class="match-card left-card" data-left-id="${p.leftId}">
                  <span>${p.left}</span>
                </div>
              `).join('')}
            </div>
            <div class="match-col match-right-col">
              ${shuffledRights.map(p => `
                <div class="match-card right-card" data-right-id="${p.rightId}">
                  <span>${p.right}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      const leftCards = area.querySelectorAll('.left-card');
      const rightCards = area.querySelectorAll('.right-card');

      leftCards.forEach(lc => {
        lc.addEventListener('click', () => {
          if (lc.classList.contains('matched')) return;
          leftCards.forEach(c => c.classList.remove('selected'));
          lc.classList.add('selected');
          selectedLeft = lc.dataset.leftId;
        });
      });

      rightCards.forEach(rc => {
        rc.addEventListener('click', () => {
          if (rc.classList.contains('matched') || !selectedLeft) return;
          const targetPair = pairs.find(p => p.leftId === selectedLeft);
          if (targetPair && targetPair.rightId === rc.dataset.rightId) {
            // Влучно!
            AudioManager.playChime('success');
            const correspondingLeft = area.querySelector(`.left-card[data-left-id="${selectedLeft}"]`);
            if (correspondingLeft) {
              correspondingLeft.classList.remove('selected');
              correspondingLeft.classList.add('matched');
            }
            rc.classList.add('matched');
            matchedCount++;
            selectedLeft = null;

            if (matchedCount === pairs.length) {
              submitBtn.disabled = false;
            }
          } else {
            // Помилка
            AudioManager.playChime('error');
            rc.style.borderColor = '#ef4444';
            setTimeout(() => { rc.style.borderColor = ''; }, 400);
          }
        });
      });
    },

    // Мінігра 3: Класифікатор 4 ситуацій
    setupClassifyFourMinigame(mg, area, submitBtn, location) {
      const selections = {};

      area.innerHTML = `
        <div class="classify-list">
          ${mg.items.map(item => `
            <div class="classify-item" data-id="${item.id}">
              <div class="classify-text">«${item.text}»</div>
              <div class="classify-options">
                <button class="classify-btn btn-opt-fair" data-id="${item.id}" data-val="fair">🤝 Чесна домовленість</button>
                <button class="classify-btn btn-opt-manipulation" data-id="${item.id}" data-val="manipulation">🛑 Маніпуляція і примус</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      const btns = area.querySelectorAll('.classify-btn');
      btns.forEach(b => {
        b.addEventListener('click', () => {
          const id = b.dataset.id;
          const val = b.dataset.val;
          selections[id] = val;

          const parent = b.closest('.classify-item');
          parent.querySelectorAll('.classify-btn').forEach(btn => {
            btn.classList.remove('selected-fair', 'selected-manipulation');
          });

          if (val === 'fair') b.classList.add('selected-fair');
          else b.classList.add('selected-manipulation');

          checkDone();
        });
      });

      const checkDone = () => {
        let allCorrect = true;
        let answered = 0;
        mg.items.forEach(it => {
          if (selections[it.id]) answered++;
          if (selections[it.id] !== it.correct) allCorrect = false;
        });

        if (answered === mg.items.length && allCorrect) {
          AudioManager.playChime('success');
          submitBtn.disabled = false;
        } else {
          submitBtn.disabled = true;
        }
      };
    },

    // Мінігра 4: Впорядкування кроків небайдужого свідка
    setupOrderingMinigame(mg, area, submitBtn, location) {
      // Початково перемішаний порядок
      let currentItems = [...mg.correctOrder].sort(() => Math.random() - 0.5);

      const renderList = () => {
        area.innerHTML = `
          <div class="ordering-list">
            ${currentItems.map((text, idx) => `
              <div class="order-step-item" data-idx="${idx}">
                <div class="order-num-badge">${idx + 1}</div>
                <div class="order-step-text">${text}</div>
                <div class="order-actions">
                  <button class="btn-order-move btn-up" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''}>▲</button>
                  <button class="btn-order-move btn-down" data-idx="${idx}" ${idx === currentItems.length - 1 ? 'disabled' : ''}>▼</button>
                </div>
              </div>
            `).join('')}
          </div>
        `;

        area.querySelectorAll('.btn-up').forEach(b => {
          b.addEventListener('click', () => {
            const i = parseInt(b.dataset.idx, 10);
            if (i > 0) {
              const temp = currentItems[i];
              currentItems[i] = currentItems[i - 1];
              currentItems[i - 1] = temp;
              renderList();
              checkOrder();
            }
          });
        });

        area.querySelectorAll('.btn-down').forEach(b => {
          b.addEventListener('click', () => {
            const i = parseInt(b.dataset.idx, 10);
            if (i < currentItems.length - 1) {
              const temp = currentItems[i];
              currentItems[i] = currentItems[i + 1];
              currentItems[i + 1] = temp;
              renderList();
              checkOrder();
            }
          });
        });
      };

      const checkOrder = () => {
        let isCorrect = true;
        for (let i = 0; i < currentItems.length; i++) {
          if (currentItems[i] !== mg.correctOrder[i]) {
            isCorrect = false;
            break;
          }
        }
        if (isCorrect) {
          AudioManager.playChime('success');
          submitBtn.disabled = false;
          area.querySelectorAll('.order-step-item').forEach(it => it.classList.add('correct'));
        } else {
          submitBtn.disabled = true;
        }
      };

      renderList();
    },

    // Мінігра 6: Конструктор «Я-повідомлення»
    setupIMessageMinigame(mg, area, submitBtn, location) {
      const picked = [null, null, null];

      area.innerHTML = `
        <div class="imessage-builder">
          ${mg.slots.map((slot, sIdx) => `
            <div class="imessage-slot" data-slot="${sIdx}">
              <div class="slot-tag">${slot.label}</div>
              <div class="slot-choices">
                ${slot.options.map((opt, oIdx) => `
                  <button class="slot-choice-btn" data-slot="${sIdx}" data-opt="${oIdx}">
                    ${opt.text}
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;

      const choiceBtns = area.querySelectorAll('.slot-choice-btn');
      choiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const s = parseInt(btn.dataset.slot, 10);
          const o = parseInt(btn.dataset.opt, 10);
          picked[s] = o;

          const parent = btn.closest('.imessage-slot');
          parent.querySelectorAll('.slot-choice-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');

          checkDone();
        });
      });

      const checkDone = () => {
        let allCorrect = true;
        let count = 0;
        mg.slots.forEach((s, idx) => {
          const chosenOptIdx = picked[idx];
          if (chosenOptIdx !== null) {
            count++;
            if (!s.options[chosenOptIdx].correct) allCorrect = false;
          } else {
            allCorrect = false;
          }
        });

        if (count === 3 && allCorrect) {
          AudioManager.playChime('success');
          submitBtn.disabled = false;
        } else {
          submitBtn.disabled = true;
        }
      };
    },

    // ========================================================================
    // 11. ЗАВЕРШЕННЯ ЛОКАЦІЇ ТА РЕЖИМ ПЕРЕРВИ («ПАУЗА НА УРОК»)
    // ========================================================================
    completeLocationAndTriggerRecess(locationId) {
      if (!gameState.completedLocations.includes(locationId)) {
        gameState.completedLocations.push(locationId);
      }
      gameState.stepIndex++;
      gameState.activeLocationId = null;

      const activeRoute = getActiveRouteList();
      if (gameState.stepIndex >= activeRoute.length) {
        // Усі локації завершено -> виходимо на фінальний етап без паузи
        gameState.inRecessMode = false;
        gameState.finalUnlocked = true;
      } else {
        // Вмикаємо режим перерви ("Пауза на урок")
        gameState.inRecessMode = true;
      }

      saveState();
      this.updateProgressIndicator();
      this.renderFullChatStory();
      this.renderDossierBoard();

      // Сповіщення про нові матеріали в досьє
      if (this.dossierUnreadDot) {
        this.dossierUnreadDot.style.display = 'block';
      }
    },

    appendRecessCard() {
      const activeRoute = getActiveRouteList();
      const current = gameState.stepIndex;
      const total = activeRoute.length;

      const card = document.createElement('div');
      card.className = 'recess-card';
      card.innerHTML = `
        <div class="recess-icon-anim">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <div class="recess-title">Доказ зафіксовано! Час на урок</div>
        <div class="recess-sub">
          Свідчення опрацьовано та надійно збережено у досьє. Зараз час зосередитися на заняттях.
        </div>
        <div class="recess-status-pill">
          Пройдено станцій: <strong>${current} з ${total}</strong>
        </div>
        <button class="btn-recess-resume" id="btn-recess-resume">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>Почалася перерва — відкрити наступну зачіпку</span>
        </button>
      `;

      const resumeBtn = card.querySelector('#btn-recess-resume');
      resumeBtn.addEventListener('click', () => {
        gameState.inRecessMode = false;
        saveState();
        this.updateProgressIndicator();
        this.renderFullChatStory();
      });

      this.chatStream.appendChild(card);
    },

    // ========================================================================
    // 12. ФІНАЛЬНИЙ ЕТАП ТА ПРИМИРЕННЯ (КОД 1616)
    // ========================================================================
    appendFinalPhase() {
      // Фінальні репліки перед штабом
      this.appendChatMessage(
        CHARACTERS.sofiia,
        '«Усі свідчення зібрано! Подивіться на дошку розслідування: це був цілий ланцюжок порушення кордонів, знецінення почуттів, маніпуляцій та мовчання свідків. Відкрився останній голосовий запис Надії!»'
      );

      // Голосове №4
      this.appendVoiceMessage(4, 'Голосове повідомлення Надії №4 (Фінал)');

      if (!gameState.finalCompleted) {
        // Картка введення коду 1616
        const hqCard = document.createElement('div');
        hqCard.className = 'final-hq-card';
        hqCard.innerHTML = `
          <div class="final-hq-badge">ФІНАЛЬНА ТОЧКА МАРШРУТУ</div>
          <h3 class="final-hq-title">${FINAL_HQ.leadTitle}</h3>
          <p class="final-hq-desc">
            Надія передала свої малюнки туди, де завжди готові допомогти знайти взаєморозуміння без осуду. Введіть фінальний 4-значний код примирення, щоб повернути Надію в чат та затвердити Хартію класу.
          </p>
          <button class="btn-clue-action" id="btn-final-hq-unlock" style="background:#059669; border-color:#10b981;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Ввести код 1616 (Кабінет психолога)</span>
          </button>
        `;

        const btnUnlock = hqCard.querySelector('#btn-final-hq-unlock');
        btnUnlock.addEventListener('click', () => {
          this.openCodeModal('1616');
        });

        this.chatStream.appendChild(hqCard);
      } else {
        // Фінал уже пройдено: повне примирення в чаті та кнопка сертифіката
        this.renderCompletedReconciliation();
      }
    },

    showFinalCharterModal() {
      // Показуємо форму складання хартії
      const charterModalHtml = `
        <div class="final-hq-card" style="margin-top:14px; animation:fadeInMsg 0.3s ease-out;">
          <div class="final-hq-badge">СХВАЛЕННЯ ХАРТІЇ БЕЗПЕКИ</div>
          <h3 class="final-hq-title">Хартія взаємоповаги та безпечного класу</h3>
          <p class="final-hq-desc">
            Оберіть щонайменше 4 основоположні принципи класу, які унеможливлять булінг та збережуть дружні стосунки:
          </p>

          <div class="charter-rules-selector" id="charter-selector">
            ${FINAL_HQ.charterRules.map((rule, idx) => `
              <label class="charter-checkbox-label">
                <input type="checkbox" value="${idx}" class="charter-check" checked>
                <span>${rule}</span>
              </label>
            `).join('')}
          </div>

          <div class="charter-counter" id="charter-count-text">Обрано: 6 з 6 принципів</div>

          <button class="btn-submit-minigame" id="btn-confirm-charter" style="background:#10b981;">
            <span>Ухвалити Хартію та повернути Надію в команду</span>
          </button>
        </div>
      `;

      const wrapper = document.createElement('div');
      wrapper.innerHTML = charterModalHtml;
      this.chatStream.appendChild(wrapper);

      const checkboxes = wrapper.querySelectorAll('.charter-check');
      const counterText = wrapper.querySelector('#charter-count-text');
      const submitBtn = wrapper.querySelector('#btn-confirm-charter');

      const updateCount = () => {
        const checked = wrapper.querySelectorAll('.charter-check:checked');
        counterText.textContent = `Обрано: ${checked.length} з ${FINAL_HQ.charterRules.length} (потрібно від 4)`;
        if (checked.length >= 4) {
          submitBtn.disabled = false;
        } else {
          submitBtn.disabled = true;
        }
      };

      checkboxes.forEach(c => c.addEventListener('change', updateCount));

      submitBtn.addEventListener('click', () => {
        const selected = [];
        wrapper.querySelectorAll('.charter-check:checked').forEach(c => {
          selected.push(FINAL_HQ.charterRules[parseInt(c.value, 10)]);
        });
        gameState.selectedCharterRules = selected;
        gameState.finalCompleted = true;
        saveState();
        AudioManager.playChime('success');
        this.renderFullChatStory();
      });

      this.scrollToBottom();
    },

    renderCompletedReconciliation() {
      // Системне повернення Надії
      this.appendSystemNotice('09:30 — Надія Кравчук повернулася до бесіди "Оргкомітет виставки"', 'reconcile');

      // Репліки персонажів
      this.appendChatMessage(
        CHARACTERS.nadiia,
        '«Привіт усім! Я тут. Мені щойно передали плакати назад. Дякую кожному з вас, що знайшли час розібратися і почути мене... Тепер я знаю, що мої почуття важливі, а виставка стане початком справжньої поваги».'
      );

      this.appendChatMessage(
        CHARACTERS.maksym,
        '«Надю, пробач мені за те, що знецінював твою роботу і спихав усю відповідальність. Я зрозумів, що лідер має підтримувати команду, а не командувати без огляду на людей».'
      );

      this.appendChatMessage(
        CHARACTERS.denys,
        '«І мені дуже шкода за той дурний мем і фрази про "ти душниш". Я видалив його і більше ніколи не буду жартувати тим, що комусь боляче».'
      );

      this.appendChatMessage(
        CHARACTERS.lera,
        '«А я обіцяю більше ніколи не мовчати, коли бачу, що комусь потрібна підтримка».'
      );

      this.appendChatMessage(
        CHARACTERS.sofiia,
        '«Тепер ми справжня команда! Виставка відбудеться сьогодні об 11:00, і на кожному плакаті буде підпис усіх учасників».'
      );

      // Кнопка перегляду Сертифіката
      const certCard = document.createElement('div');
      certCard.className = 'final-hq-card';
      certCard.style.marginTop = '14px';
      certCard.innerHTML = `
        <div class="final-hq-badge" style="background:#f59e0b; color:#78350f;">СПРАВУ РОЗКРИТО!</div>
        <h3 class="final-hq-title">Сертифікат Комісії Примирення готовий!</h3>
        <p class="final-hq-desc">
          Команда №${gameState.team} успішно завершила шкільний квест, захистила гідність кожного учасника та ухвалила правила безпечного простору.
        </p>
        <button class="btn-clue-action" id="btn-open-cert" style="background:#d97706; font-size:14px; padding:12px;">
          <span>🏆 Відкрити та роздрукувати іменний Сертифікат</span>
        </button>
      `;

      const openCertBtn = certCard.querySelector('#btn-open-cert');
      openCertBtn.addEventListener('click', () => {
        this.openCertificateModal();
      });

      this.chatStream.appendChild(certCard);

      // Оновлюємо статус у шапці
      if (this.headerStatus) {
        this.headerStatus.textContent = 'Надія онлайн • Оргкомітет відновлено';
      }
      const statusInd = document.querySelector('.status-indicator');
      if (statusInd) {
        statusInd.classList.remove('offline');
      }
    },

    // ========================================================================
    // 13. ДОШКА РОЗСЛІДУВАННЯ (DOSSIER VIEW)
    // ========================================================================
    renderDossierBoard() {
      // 1. Картки 6 локацій
      const locGrid = document.getElementById('locations-dossier-grid');
      if (locGrid) {
        locGrid.innerHTML = '';
        const route = getActiveRouteList();

        for (let i = 1; i <= 6; i++) {
          const loc = LOCATIONS[i];
          const isCompleted = gameState.completedLocations.includes(i);
          const isExpected = getCurrentExpectedLocation() && getCurrentExpectedLocation().id === i;

          let tagClass = 'tag-locked';
          let tagText = 'Заблоковано';
          let cardClass = 'dossier-loc-card locked';

          if (isCompleted) {
            tagClass = 'tag-done';
            tagText = 'Розкрито ✓';
            cardClass = 'dossier-loc-card unlocked';
          } else if (isExpected) {
            tagClass = 'tag-pending';
            tagText = 'Поточна ціль ➔';
            cardClass = 'dossier-loc-card';
          }

          const c = document.createElement('div');
          c.className = cardClass;
          c.innerHTML = `
            <div class="dossier-loc-top">
              <span class="dossier-loc-name">Станція ${i}: ${loc.name}</span>
              <span class="dossier-loc-tag ${tagClass}">${tagText}</span>
            </div>
            <div class="dossier-loc-insight">
              ${isCompleted ? `<strong>Інсайт:</strong> ${loc.category}` : `<em>Зачіпка:</em> «${loc.riddle}»`}
            </div>
          `;
          locGrid.appendChild(c);
        }
      }

      // 2. Персонажі та шкали емпатії
      const charGrid = document.getElementById('characters-dossier-grid');
      if (charGrid) {
        charGrid.innerHTML = '';
        const progressRatio = gameState.completedLocations.length / getActiveRouteList().length;

        Object.keys(CHARACTERS).forEach(k => {
          const char = CHARACTERS[k];
          let fillPercent = 30;
          if (k === 'nadiia' || k === 'sofiia') fillPercent = 95;
          else if (gameState.finalCompleted) fillPercent = 95;
          else fillPercent = Math.min(95, Math.floor(30 + progressRatio * 65));

          const charCard = document.createElement('div');
          charCard.className = 'char-dossier-card';
          charCard.innerHTML = `
            <div class="char-dossier-avatar">${char.avatar}</div>
            <div class="char-dossier-info">
              <div class="char-dossier-name">${char.name}</div>
              <div class="char-dossier-role">${char.role}</div>
              <div class="char-dossier-desc">${char.desc}</div>
              <div class="char-meter-wrap">
                <div class="char-meter-label">
                  <span>Рівень усвідомлення та емпатії:</span>
                  <strong>${fillPercent}%</strong>
                </div>
                <div class="char-meter-bar">
                  <div class="char-meter-fill" style="width: ${fillPercent}%"></div>
                </div>
              </div>
            </div>
          `;
          charGrid.appendChild(charCard);
        });
      }

      // 3. Архів голосових
      const voiceList = document.getElementById('voice-archives-list');
      if (voiceList) {
        voiceList.innerHTML = '';
        for (let v = 1; v <= 4; v++) {
          const isUnlocked = v === 1 || (v === 2 && gameState.stepIndex >= 1) || (v === 3 && gameState.stepIndex >= 2) || (v === 4 && gameState.stepIndex >= getActiveRouteList().length);
          const vItem = document.createElement('div');
          vItem.className = 'voice-archive-item';
          vItem.innerHTML = `
            <div class="voice-archive-info">
              <div class="voice-archive-title">Голосовий запис Надії №${v}</div>
              <div class="voice-archive-sub">${isUnlocked ? 'Доступно для прослуховування' : 'Буде розблоковано за ходом розслідування'}</div>
            </div>
            <div>
              <button class="btn-icon" data-archive-voice="${v}" ${isUnlocked ? '' : 'disabled style="opacity:0.3"'}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          `;

          const btn = vItem.querySelector('button');
          if (btn && isUnlocked) {
            btn.addEventListener('click', () => {
              alert(`Запис №${v}:\n\n${VOICE_TRANSCRIPTS[v]}`);
            });
          }

          voiceList.appendChild(vItem);
        }
      }
    },

    // ========================================================================
    // 14. МОДАЛЬНЕ ВІКНО ВВЕДЕННЯ 4-ЗНАЧНОГО КОДУ ВЧИТЕЛЯ
    // ========================================================================
    openCodeModal(preferredLocId = null) {
      this.enteredPin = '';
      gameState.pendingUnlockLocId = preferredLocId;
      this.updatePinDisplay();
      if (this.pinFeedback) {
        this.pinFeedback.textContent = '';
        this.pinFeedback.className = 'pin-feedback';
      }
      this.modalCode.classList.add('active');
    },

    closeCodeModal() {
      this.modalCode.classList.remove('active');
    },

    handlePinInput(digit) {
      if (this.enteredPin.length < 4) {
        this.enteredPin += digit;
        AudioManager.playChime('click');
        this.updatePinDisplay();
        if (this.enteredPin.length === 4) {
          setTimeout(() => this.submitPin(), 180);
        }
      }
    },

    handlePinBackspace() {
      if (this.enteredPin.length > 0) {
        this.enteredPin = this.enteredPin.slice(0, -1);
        AudioManager.playChime('click');
        this.updatePinDisplay();
      }
    },

    updatePinDisplay() {
      this.pinDigits.forEach((el, idx) => {
        const val = this.enteredPin[idx];
        if (val) {
          el.textContent = val;
          el.classList.add('filled');
        } else {
          el.textContent = '';
          el.classList.remove('filled');
        }
      });
    },

    submitPin() {
      const pin = this.enteredPin;
      if (pin.length !== 4) return;

      // Перевіряємо, чи це фінальний код примирення 1616
      if (pin === '1616') {
        const activeRoute = getActiveRouteList();
        if (gameState.stepIndex < activeRoute.length) {
          this.setPinError('Спочатку розслідуйте всі призначені свідчення!');
          return;
        }

        AudioManager.playChime('success');
        this.setPinSuccess('Фінальний код підтверджено!');
        setTimeout(() => {
          this.closeCodeModal();
          this.showFinalCharterModal();
        }, 500);
        return;
      }

      // Шукаємо локацію за кодом
      let targetLoc = null;
      Object.keys(LOCATIONS).forEach(k => {
        if (LOCATIONS[k].code === pin) {
          targetLoc = LOCATIONS[k];
        }
      });

      if (!targetLoc) {
        this.setPinError('Невірний код! Перевірте картку вчителя.');
        return;
      }

      // Перевіряємо, чи ця локація відповідає поточному маршруту
      const expectedLoc = getCurrentExpectedLocation();
      if (!expectedLoc || expectedLoc.id !== targetLoc.id) {
        // Якщо локацію вже пройдено
        if (gameState.completedLocations.includes(targetLoc.id)) {
          this.setPinError('Цей доказ уже розслідувано раніше.');
          return;
        }

        // Черговість Латинського квадрата
        this.setPinError(`Зараз черга станції «${expectedLoc.name}»! Дотримуйтесь маршруту вашої команди.`);
        return;
      }

      // Успішне відкриття локації
      AudioManager.playChime('success');
      this.setPinSuccess(`Код прийнято: ${targetLoc.name}!`);
      gameState.activeLocationId = targetLoc.id;
      saveState();

      setTimeout(() => {
        this.closeCodeModal();
        this.renderFullChatStory();
      }, 500);
    },

    setPinError(msg) {
      AudioManager.playChime('error');
      if (this.pinFeedback) {
        this.pinFeedback.textContent = msg;
        this.pinFeedback.className = 'pin-feedback error';
      }
      setTimeout(() => {
        this.enteredPin = '';
        this.updatePinDisplay();
      }, 700);
    },

    setPinSuccess(msg) {
      if (this.pinFeedback) {
        this.pinFeedback.textContent = msg;
        this.pinFeedback.className = 'pin-feedback success';
      }
    },

    // ========================================================================
    // 15. НАЛАШТУВАННЯ ОРГАНІЗАТОРА (КОМАНДИ, ПЕРЕРВИ, СКИДАННЯ)
    // ========================================================================
    openSettingsModal() {
      // Підсвічуємо поточну команду
      const teamBtns = document.querySelectorAll('.team-select-btn');
      teamBtns.forEach(b => {
        if (parseInt(b.dataset.team, 10) === gameState.team) b.classList.add('active');
        else b.classList.remove('active');
      });

      // Підсвічуємо кількість перерв
      const btnSteps4 = document.getElementById('btn-steps-4');
      const btnSteps6 = document.getElementById('btn-steps-6');
      if (btnSteps4 && btnSteps6) {
        if (gameState.stepsCount === 6) {
          btnSteps6.classList.add('active');
          btnSteps4.classList.remove('active');
        } else {
          btnSteps4.classList.add('active');
          btnSteps6.classList.remove('active');
        }
      }

      this.updateRouteFormulaHint();
      this.modalSettings.classList.add('active');
    },

    closeSettingsModal() {
      this.modalSettings.classList.remove('active');
    },

    updateRouteFormulaHint() {
      const formulaEl = document.getElementById('settings-route-formula');
      if (formulaEl) {
        const route = getActiveRouteList();
        formulaEl.textContent = `Маршрут команди №${gameState.team}: [${route.join(' ➔ ')} ➔ Фінал]`;
      }
    },

    changeTeam(teamNum) {
      if (teamNum < 1 || teamNum > 6) return;
      gameState.team = teamNum;
      // Якщо поточний індекс за межами або зміна команди — зберігаємо
      saveState();
      this.updateSettingsUI();
      this.updateProgressIndicator();
      this.renderFullChatStory();
      this.renderDossierBoard();
    },

    changeStepsCount(count) {
      gameState.stepsCount = count === 6 ? 6 : 4;
      saveState();
      this.updateSettingsUI();
      this.updateProgressIndicator();
      this.renderFullChatStory();
      this.renderDossierBoard();
    },

    updateSettingsUI() {
      const teamBtns = document.querySelectorAll('.team-select-btn');
      teamBtns.forEach(b => {
        if (parseInt(b.dataset.team, 10) === gameState.team) b.classList.add('active');
        else b.classList.remove('active');
      });

      const btnSteps4 = document.getElementById('btn-steps-4');
      const btnSteps6 = document.getElementById('btn-steps-6');
      if (btnSteps4 && btnSteps6) {
        if (gameState.stepsCount === 6) {
          btnSteps6.classList.add('active');
          btnSteps4.classList.remove('active');
        } else {
          btnSteps4.classList.add('active');
          btnSteps6.classList.remove('active');
        }
      }
      this.updateRouteFormulaHint();
    },

    resetAllProgress() {
      gameState = Object.assign({}, defaultState, { team: gameState.team, stepsCount: gameState.stepsCount });
      saveState();
      this.closeSettingsModal();
      this.updateProgressIndicator();
      this.renderFullChatStory();
      this.renderDossierBoard();
      alert('Прогрес успішно скинуто! Справу розпочато заново.');
    },

    // ========================================================================
    // 16. СЕРТИФІКАТ КОМІСІЇ ПРИМИРЕННЯ (PRINTABLE)
    // ========================================================================
    openCertificateModal() {
      const teamDisplay = document.getElementById('cert-team-display');
      if (teamDisplay) {
        teamDisplay.textContent = `Слідча Команда №${gameState.team}`;
      }

      const dateDisplay = document.getElementById('cert-date-display');
      if (dateDisplay) {
        const today = new Date();
        const d = String(today.getDate()).padStart(2, '0');
        const m = String(today.getMonth() + 1).padStart(2, '0');
        const y = today.getFullYear();
        dateDisplay.textContent = `${d}.${m}.${y}`;
      }

      const listEl = document.getElementById('cert-charter-list');
      if (listEl) {
        const rules = gameState.selectedCharterRules.length > 0 ? gameState.selectedCharterRules : FINAL_HQ.charterRules.slice(0, 4);
        listEl.innerHTML = rules.map(r => `<li>${r}</li>`).join('');
      }

      this.modalCertificate.classList.add('active');
    },

    // ========================================================================
    // 17. РОБОТА З URL-ПАРАМЕТРАМИ ТА QR-КОДАМИ (?team=X, ?unlock=XXXX)
    // ========================================================================
    checkUrlParameters() {
      const params = new URLSearchParams(window.location.search);

      // Параметр ?team=1..6
      if (params.has('team')) {
        const t = parseInt(params.get('team'), 10);
        if (t >= 1 && t <= 6) {
          if (gameState.team !== t) {
            gameState.team = t;
            saveState();
            this.updateProgressIndicator();
            this.renderFullChatStory();
          }
        }
      }

      // Параметр ?unlock=XXXX (зовнішній QR-код від камери смартфона)
      if (params.has('unlock')) {
        const code = params.get('unlock').trim();
        if (code) {
          setTimeout(() => {
            this.enteredPin = code;
            this.submitPin();
          }, 350);
        }
      }
    },

    scrollToBottom() {
      setTimeout(() => {
        if (this.chatStream) {
          this.chatStream.scrollTop = this.chatStream.scrollHeight;
        }
      }, 80);
    },

    scrollToLatestClue() {
      const clues = this.chatStream.querySelectorAll('.clue-envelope-card, .testimony-card, .recess-card, .final-hq-card');
      if (clues.length > 0) {
        clues[clues.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        this.scrollToBottom();
      }
    }
  };

  // Запуск додатка після завантаження DOM
  document.addEventListener('DOMContentLoaded', () => {
    AudioManager.init();
    UI.init();
  });

})();
