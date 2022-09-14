//Домашні завдання - день виконання
var chHomework = {
	'uklen': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'uklit': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'zarlit': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'eng': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'mat': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'mus': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'hist': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'fiz': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'pain': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'prog': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'dram': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'oz': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'tec': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] },
	'nat': { 'chDataHw': { 'count': 0 }, 'arIHw': [0] }
};

//Домашні завдання - день видачі
var chHomeworkGive = {
	'2022-09-01': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-02': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-09-05': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-09-06': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-09-07': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-09-08': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-09': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

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
		'prog': '1. Читати підручник сторінка 9-10.|2. Виконати вправу 3 сторінка 10.',
		'pain': '',
		'fiz': '',
		'uklen': '',
		'dram': '',
		'mat': ''
	},
	'2022-09-15': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-16': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-09-19': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-09-20': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-09-21': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-09-22': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-23': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-09-26': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-09-27': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-09-28': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-09-29': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-30': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-10-03': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-10-04': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-10-05': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-10-06': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-10-07': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-10-10': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-10-11': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-10-12': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-10-13': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-10-14': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-10-17': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-10-18': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-10-19': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-10-20': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-10-21': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-10-24': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-10-25': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-10-26': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-10-27': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-10-28': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' }
};


function GetHomework() {
	for (let kDate in chHomeworkGive) { // отримуємо дату видачі завдання
		for (let kLesson in chHomeworkGive[kDate]) { // отримуємо назву уроку
			// Отримуємо дамашнє завдання
			//let Task = chHomeworkGive[kDate][kLesson];

			// Зберігаємо номер дати домашнього завдання з попереднього уроку
			let iHw = chHomework[kLesson].chDataHw.count;
			// Присвоюємо даті видачі домашнього завдання - номер
			chHomework[kLesson].chDataHw[kDate] = iHw; //Якщо iLesson = 0 - дрмашнє завдання не задано

			// Інкремент номеру дати видачі домашнього завданя
			chHomework[kLesson].chDataHw.count++;
			// Присвоюємо номер - даті видачі домашнього завдання 
			chHomework[kLesson].arIHw[iHw] = kDate;
		}
	}

}

