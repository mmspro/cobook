//Перелік уроків
var chLesson = {
	'uklen': {
		'lesson': 'Українська мова',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy',
		'homework': 'https://classroom.google.com/w/NTQ1MjMyODExMjEy/t/all',
		'meet': 'https://meet.google.com/qte-iqxy-dcs',
		'booklink': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy',
		'book': '5_ukrainian_language.pdf'
	},
	'uklit': {
		'lesson': 'Українська література',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0',
		'homework': 'https://classroom.google.com/w/NTQ1MjMzNDAzMDE0/t/all',
		'meet': 'https://meet.google.com/zrm-ipgh-oxb',
		'booklink': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0',
		'book': '5_ukrainian literature.pdf'
	},
	'zarlit': {
		'lesson': 'Зарубіжна література',
		'teacher': 'Солодка Ірина Петрівна',
		'classroom': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1',
		'homework': 'https://classroom.google.com/w/NTQ0NzUwODYxNzA1/t/all',
		'meet': 'https://meet.google.com/try-xbxe-eax',
		'booklink': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1',
		'book': '5_world_literature.pdf'
	},
	'eng': {
		'lesson': 'Англійська мова',
		'teacher': 'Задоянчук Оксана Василівна',
		'classroom': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5',
		'homework': 'https://classroom.google.com/w/NTQ1NTY3Mjk4ODQ5/t/all',
		'meet': 'https://meet.google.com/zvd-crbk-vgb',
		'booklink': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5',
		'book': '5_english.pdf'
	},
	'mat': {
		'lesson': 'Математика',
		'teacher': 'Карабаджак Ірина Анатоліївна',
		'classroom': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz',
		'homework': 'https://classroom.google.com/w/NTI2OTIzMTIyMzUz/t/all',
		//'meet': 'https://meet.google.com/wwy-pvek-fpm' //2022-09-07
		//'meet': 'https://meet.google.com/kcp-tbxz-khb' //2022-09-08
		//'meet': 'https://meet.google.com/kzz-cugu-smk' //2022-09-09
		'meet': 'https://meet.google.com/kcp-tbxz-khb', //2022-09-12
		'booklink': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTQ1NTY1NDEzNzky/details',
		'book': '5_mathematics.pdf'
	},
	'mus': {
		'lesson': 'Музичне мистецтво',
		'teacher': 'Кериченко Наталія Миколаївна',
		'classroom': 'https://classroom.google.com/c/NTI2OTIxMzY1NjM3',
		'homework': 'https://classroom.google.com/w/NTI2OTIxMzY1NjM3/t/all',
		'meet': 'https://meet.google.com/nfa-usas-xei',
		'booklink': 'https://files.pidruchnyk.com.ua/uploads/booklink/5_mystetstvo_kondratova_2022.pdf',
		'book': '5_music.pdf'
	},
	'hist': {
		'lesson': 'Історія',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw',
		'homework': 'https://classroom.google.com/w/NTQ0NzkyOTQ2MTgw/t/all',
		'meet': 'https://meet.google.com/gkd-tmfp-gfs',
		'booklink': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw',
		'book': '5_history.pdf'
	},
	'fiz': {
		'lesson': 'Фізична культура',
		'teacher': 'Стеблюк Олександра Петрівна',
		'classroom': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1',
		'homework': 'https://classroom.google.com/w/NTI3MjA4NzU0NjU1/t/all',
		'meet': 'https://meet.google.com/zhz-eesi-pif',
		'booklink': '-',
		'book': '-'
	},
	'pain': {
		'lesson': 'Образотворче мистецтво',
		'teacher': 'Шклярук Світлана Олександрівна',
		'classroom': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5',
		'homework': 'https://classroom.google.com/w/NTI3MTc4MTYzNjQ5/t/all',
		//'meet': 'https://meet.google.com/cny-cwqt-dxb',
		'meet': 'https://meet.google.com/iyg-eygc-tdm', //2022-09-14
		'booklink': '-',
		'book': '-'
	},
	'prog': {
		'lesson': 'Інформатика',
		'teacher': 'Шевчук Андрій Григорович',
		'classroom': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx',
		'homework': 'https://classroom.google.com/w/NTQ1MTU5NzIwMDMx/t/all',
		'meet': 'https://meet.google.com/tvf-poiw-qym',
		'booklink': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx',
		'book': '5_informatics.pdf'
	},
	'dram': {
		'lesson': 'Драматургія і театр',
		'teacher': 'Рахнянська Наталія Федорівна',
		'classroom': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx',
		'homework': 'https://classroom.google.com/w/NTI3MTI3NTg1MjMx/t/all',
		'meet': 'https://meet.google.com/knk-wynn-myc',
		'booklink': '-',
		'book': '-'
	},
	'oz': {
		'lesson': 'Основи здоров\'я',
		'teacher': 'Щепанська Алла Борисівна',
		'classroom': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2',
		'homework': 'https://classroom.google.com/w/NTQ1MDE1NTYzNDM2/t/all',
		//'meet': 'https://meet.google.com/pkt-dgom-uzx',
		'meet': 'https://meet.google.com/feh-sygz-vig', //2022-09-15
		'booklink': '-',
		'book': '-'
	},
	'tec': {
		'lesson': 'Технологія',
		'teacher': 'Іванова Алла Опанасівна',
		'classroom': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz',
		'homework': 'https://classroom.google.com/w/NTQ1NTc3MDc3MTYz/t/all',
		'meet': 'https://meet.google.com/uwr-mgkm-nnc',
		'booklink': '-',
		'book': '-'
	},
	'nat': {
		'lesson': 'Пізнаємо природу',
		'teacher': 'Касяненко Світлана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1',
		'homework': 'https://classroom.google.com/w/NTQ1MDc1MDgxMzg1/t/all',
		'meet': 'https://meet.google.com/hfo-mkni-seh',
		'booklink': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1',
		'book': '5_nature.pdf'
	}
};

//Розклад уроків - на тиждень
var arSсhedule = [
	['uklen', 'uklen', 'zarlit', 'eng', 'mat', 'mus'],
	['eng', 'hist', 'mat', 'nat', 'uklit', 'fiz'],
	['prog', 'pain', 'fiz', 'uklen', 'dram', 'mat'],
	['fiz', 'nat', 'mat', 'uklen', 'zarlit', 'eng', 'oz'],
	['mat', 'tec', 'tec', 'hist', 'uklit', 'eng']
];

//Розклад дзвінків
var arTime = ['08:30', '09:25', '10:25', '11:25', '12:25', '13:25', '14:20'];

//Дні тижня
var arWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П\'ятниця'];

// Дати попередніх уроків
var chLessonDate = {
	'uklen': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'uklit': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'zarlit': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'eng': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'mat': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'mus': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'hist': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'fiz': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'pain': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'prog': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'dram': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'oz': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'tec': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'nat': { 'chDate': { 'count': 0 }, 'arI': [0] }
};

//Домашні завдання - по дням їх видачі
var chHomework = {
	'2022-09-01': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-09-02': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-09-05': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-09-06': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-09-07': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-09-08': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-09-09': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-09-12': {
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NTQ3MDU0MDY4NTA0/details||1. Знайди відповідне слово, утвори речення, запиши (останній слайд у презентації):|- димовий, димний, димучий, димчастий (порох, труба, камінь, вулкан).|- діловий, діловитий (людина, розмова).',
		'zarlit': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NTQ3MDU0MDY4NTA0/details||1. Дочитати казку до кінця|2. Детально переказати|3. Відповісти на питання 1-4 з сторінки 27',
		'eng': '1. Пригадати слова (a pen, a pencil, a ruler, a pencilcase, a rubber, a book, ...)|2. Скласти 12 словосполучень зі словами :this, that these, those  та зі словами ( a pen, a pencil...)|Example:|This copy-book|these bags|that ruler,|those vocabularies',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTQ3MDgyMTgzOTIz/details||1. №56(1,3,5) - з нового підручника|2. №64(1,3,5) - з нового підручника',
		'mus': 'https://classroom.google.com/c/NTI2OTIxMzY1NjM3/a/NDg5NjAzMTU5MDA3/details||1. Пергелянути і прочитати матеріали до укроку за посиланням.|2. В зошиті записати конспект.|3. Прослухати музичні композиції за посиланням.'
	},
	'2022-09-13': {
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Переглянути презентацію(знайти помилки в домашніх завданнях(вміти пояснити)|2. Доробити вправу з останнього слайду;|3. Ппр.3 ст.11 (електронний підручник) дивитись підказку на ст.137 (табличка Be)',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTQ3MzU0MzYwMTk5/details||1. Опрацювати презентаційний матеріал та дописати у зошит визначення: Історична подія.|2. Опрацювати матеріал підручника (електронний варіант) стор. 13 - 18 |3. Виконати завдання на стор. 18, QR - код, в зошиті.',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTQ3MjM1NDg0Nzc0/details||Завдання на урок:|1. В зошиті записати|13 вересня|Дистанційна робота||2. Перейди за посиланням і пограй у гру "Знайди пару"🤗|https://learningapps.org/view22838707|3. Пригадай, як виконуються дії з іменованими числами. Виконай усно номер 1 ( дивись додані картинки)|4. Фізкультхвилинка|5. Номер 65 виконай письмово в зошиті.|Виконай дію:|1) 4 кг 150 г + 7 кг 270 г;|2) 8 м 12 см – 5 м 31 см;|3) 4 км 25 м : 5;|4) 2 см 3 мм ∙ 4;|5) 3 ц 21 кг + 1 т 127 кг;|6) 5 хв 20 с – 1 хв 40 с;|7) 3 кг 200 г ∙ 8;|8) 6 ц 24 кг : 3.|6. Подумай, для чого тобі знадобляться ці знання?|7. Оціни свою роботу на уроці використовуючи світлофор ( дивись завантажені картинки). Результат запиши в коментарі ( який колір світлофора сьогодні ти обрав?)|Домашнє завдання|1. № 60 з нового підручника (завантажений 5 вересня в класрум).',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTQ3MjQ5NjY2MTIz/details||1. Продивіться відео.|2. Прочитайте сторінку 14 підручника, дайте відповідь на запитання на с.14|3. Виконайте практичну роботу за інструкцією в прикріпленому документі і відправте в класрум до зазначеного терміну (14.09.22 до 18.00)',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0/a/NTQ3MzY2MDQyNzY3/details||1. Виразно читати с. 113-117 (старий підручник)|2. Скласти три власних загадки та намалювати до них ілюстрації.',
		'fiz': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1/a/NTI3NjMwNDI2NTEy/details||Працюємо асинхронно, повторюємо минулу схему уроку:|1. Суглобова розминка|2. 3 х|Присід 12|Зірка 12|Сетапи 12|Джампінг Джек 12|3. Заминка, відновлення дихання.'
	},
	'2022-09-14': {
		'prog': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx/a/NDg5NzA0NTAwNjA0/details}}1. Читати підручник сторінка 9-10.|2. Виконати вправу 3 сторінка 10.',
		'pain': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5/a/NDg5NzA1MDI1MzUz/details||1. Переглянути відеоурок.|2. Дібрати необхідні матеріали|3. Створити свою композицію з осіннього листя, продумай на що схожа твоя композиція, доопрацюй маркером, або фломастером. Фото твоєї роботи прикріпи в класрум.',
		'fiz': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1/a/NTI3NzAzOTMxMDMw/details||Схема уроку:|1. Суглобова розминка|2. 3 х|Ангели стоячи 10|Бар’єрист 12|Підйом ніг в упорі сидячи 12|Стрибки на місці 12|3. Заминка, відновлення дихання.',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NDg5NzA4OTA0MDUx/details|||Самостійна робота|1. Утворити синонімічний ряд до слова: розумний|2. До поданих слів підіьрати антоніми: |молодість - |далеко - |либокий -|попереду - |3. Скласти два речення з поданими омонімами, щоб позначали різні значення: ніс і ніс|4. Скласти два речення із паронімами: незгода - негода',
		'dram': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx/a/NDg5NzA2NzkyMjMy/details||Виразно читати пєси',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTQ3NjIxMDUyNDg5/details||Самостійна робота|1 варіант- Ачкасов, Бажан,Бойко, Данилюк,Дудка,Дудник,Дяденко, Жмурко, Журбенко,Засаднюк, Іванова, Канишина, Коханчук|2 варіант- Кошляк, Лапайко, Нікітюк, Одайський, Пасічник, Рвачов,Сорока,Сорохманюк, Спеней, Спицька, Шарай, Юзько.'
	},
	'2022-09-15': {
		'fiz': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1/a/NTI3NzAzOTMxMDMw/details||Схема уроку:|1. Суглобова розминка|2. 3 х|Ангели стоячи 10|Бар’єрист 12|Підйом ніг в упорі сидячи 12|Стрибки на місці 12|3. Заминка, відновлення дихання.',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTI3NzUyMzM3NTI3/details||1. Опрацювати матеріал підручника с.15 - 17.|2. Дати відповіді на запитання на с.17',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. номер 84(1,2),|2. номер 86(1,2)',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Передостанній слайд у презентації (усно)|2. Останній слайд (письмово).',
		'zarlit': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1||1. С.15 підручника, виписати 2 прислівя, якиими можна охарактеризувати Момотару',
		'eng': '1. https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||Впр.2, ст.12 (електронний підручник) - письмово|2. Впр.3, ст.12 (усно)',
		'oz': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2||Підручник с.13-18, |прочитати, |записати в зошиті (берем тоненький зошит в клітинку) номери рятувальних та аварійних служб.'
	},
	'2022-09-16': {
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. №97,|2. 99. |3.Принести 3 тоненькі зошити (12-18 сторінок)',
		'tec': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz/a/NTQ4MTU3MjUzMzM5/details||1. Вітальна листівка',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTQ4MDU5MzMyMDg2/details||1. Підготувати повідомлення (3-5 речень), інформацію шукати в мережі інтернет.|Завдання вибираємо за бажанням з слайдів 4,6,8;',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0||1. Виразно читати с.124-126, |2. Виписати до словника визначення - акровірш;|3. скласти самостійно 1 або 2 акровірші (письмово).',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Впр.3, ст.12 (вивчити назви країн та національностей);|2. Впр.5, ст.13(читати 5раз вголос)'
	},

	'2022-09-19': {
		'uklen': '||1. Виписати 10 іншомовних слів з апострофом та мяким знаком',
		'zarlit': '||1. Намалювати малюнок бажаного предмету',
		'eng': '||1. Стор 5, впр. 3',
		'mat': '||Немає - була тестова робта',
		'mus': '||Подивтись відеоролік'
	},

	'2022-09-20': {
		'eng': '||1. Написати 5-6 речень про свою сімю (стор. 5, зразок впрва 3)',
		'hist': '||1. Прочитати пар.2 стор 12-13 (старий підручника).|2 Подивитись відео за QR-кодом з форзацу підручника ',
		'mat': '||1. 118|2. 123',
		'nat': '||1. Стор. 18-20 (новий підручник)|2. Стор. 22 №3',
		'uklit': '||1. Стор. 22-31 прочитати (стара книжка). |2. Скласти план',
		'fiz': '||1. Форма'
	},
	'2022-09-21': {
		'fiz': '||Форма',
		'pain': '||Зробити виріб (довільний)',
		'prog': '||1. Читати стор 12-15',
		'uklen': '||1. Стор. 37 впр. 83 (новий підручник)',
		'dram': '||1. Назвати по іншому олівці (записати у зошиті)',
		'mat': '||1. №127 1 приклад|2. 135 1, 2 приклади'
	},
	'2022-09-22': {
		'fiz': '||Форма',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTQ5NTAwODIwNjc5/details||1. Опрацювати с.19-21, на с.22 №4 -виконати письмово. (прочитати інформацію можна в старому підручнику на с.12-15, але письмове завдання, потрібно зробити з електронного підручника)',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. Параграф 2 читати|2. номер 146,148 виконати письмово',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NTQ5Mjk3NjYxNzE1/details||1. Опрацювати правила с. 39,|2. Переглянути відео,|3. Виконати вправу 88 (розподільна робота) с.39',
		'zarlit': '||1. Сторінка 64-67 читати(старий підручник)',
		'eng': '||1. Сторінка 6 прочитати|2. Вправа 3',
		'oz': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2||1. Ел. підручник с. 23-26, в зошиті записати потреби і бажання. '
	},
	'2022-09-23': {
		'mat': '||1. № 149, 153',
		'tec': '||1. Власний виріб',
		'hist': '||1. Параграф 2 стор. 19|2. Завдання 3 письмово',
		'uklit': '||1. Зробити сенкан до словосполучення "Яйце райце"',
		'eng': '||1. Таблиця на стор. 8 записати у зошит'
	},

	'2022-09-26': {
		'uklen': '||1. стор. 44 првавила (електронна книга)|2. вправа 101 стор 46 (електронна книга)',
		'zarlit': '||1. стор. 37 казка "Фарбований шакал" читати, переказати (стара книжка)',
		'eng': '||1. Вправа 1, 2 стор.9',
		'mat': '||1. №205, №224 (старий підручник)',
		'mus': '||'
	},
	'2022-09-27': {
		'eng': '||1. Вправа 3 стор. 123 (старий підручник)',
		'hist': '||1. Повторити стрічку часу (періоди)',
		'mat': '||1. № 217, №.229 (електронний підручник)',
		'nat': '||1. Зробити ваги',
		'uklit': '||1. План переказ стор. 33-36(старий підручник)',
		'fiz': '||1. Форма'
	},
	'2022-09-28': {
		'fiz': '||1. Форма',
		'pain': '||1. Підготувати: аркуш А4 для акварелі, пензлики, гуашь, палітра, стаканчик для води',
		'prog': '||!!!',
		'uklen': '||Впарва 21, стор. 18 (старий підручник)',
		'dram': '||1. Намалювати афішу для вистави (вистава на власний розсуд)',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. Тема: Віднімання натуральних чисел. Властивості віднімання Параграф 5 - опрацювати. 2. № 247(1,2), 250 (електронний підручник)'
	},
	'2022-09-29': {
		'fiz': '||Форма',
		'nat': '||!!!',
		'mat': '||1. №273, №275 (електронний підручник)',
		'uklen': '||1. Вправа 109 стор. 49 (електронний підручник)',
		'zarlit': '||!!!',
		'eng': '||1. Впарва 6 стор. 124 (старий підручник)',
		'oz': '||1. Параграф 3 читати і виконати завдання усно на стор.23-24 (старий підручник)'
	},
	'2022-09-30': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-10-03': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-10-04': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-10-05': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-10-06': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-10-07': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-10-10': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-10-11': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-10-12': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-10-13': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-10-14': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-10-17': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-10-18': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-10-19': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-10-20': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-10-21': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-10-24': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-10-25': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-10-26': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-10-27': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-10-28': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' }
};


function GetHomework() {
	let previosDate = '-';
	for (let keyDate in chHomework) { // отримуємо дату видачі завдання
		for (let keyLesson in chHomework[keyDate]) { // отримуємо назву уроку

			// Отримуємо номер дати попереднього уроку
			let previosI = chLessonDate[keyLesson].chDate.count;
			// Інкремент номеру дати уроку
			chLessonDate[keyLesson].chDate.count++;
			// Отримуємо номер дати цього уроку 
			let nowI = chLessonDate[keyLesson].chDate.count;

			// Присвоюємо номер - даті цього уроку 
			chLessonDate[keyLesson].arI[nowI] = keyDate;

			// Отримуємо дату поперднього уроку  
			previosDate = '-';
			if (previosI > 0) {
				previosDate = chLessonDate[keyLesson].arI[previosI];
			}
			// Присвоюємо даті уроку - попередню дату цього уроку
			chLessonDate[keyLesson].chDate[keyDate] = previosDate;
		}
	}
}

