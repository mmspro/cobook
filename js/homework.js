//Перелік уроків
var chLesson = {

	'uklen': {
		'lesson': 'Українська мова',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'uklit': {
		'lesson': 'Українська література',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'zarlit': {
		'lesson': 'Зарубіжна література',
		'teacher': 'Солодка Ірина Петрівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'eng': {
		'lesson': 'Англійська мова',
		'teacher': 'Задоянчук Оксана Василівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'mat': {
		'lesson': 'Математика',
		'teacher': 'Карабаджак Ірина Анатоліївна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'mus': {
		'lesson': 'Музичне мистецтво',
		'teacher': 'Кериченко Наталія Миколаївна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'hist': {
		'lesson': 'Історія',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'etika': {
		'lesson': 'Етика',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTg1MzQ5ODM1ODQ4',
		'homework': '',
		'meet': 'https://meet.google.com/uob-rwtu-xgf ',
		'booklink': '',
		'book': ''
	},
	'fiz': {
		'lesson': 'Фізична культура',
		'teacher': 'Стеблюк Олександра Вікторівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'pain': {
		'lesson': 'Образотворче мистецтво',
		'teacher': 'Шклярук Світлана Олександрівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'prog': {
		'lesson': 'Інформатика',
		'teacher': 'Гутова Валентина Миколаївна',//'Шевчук Андрій Григорович',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'dram': {
		'lesson': 'Драматургія і театр',
		'teacher': 'Рахнянська Наталія Федорівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'oz': {
		'lesson': 'Основи здоров\'я',
		'teacher': 'Щепанська Алла Борисівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'tec': {
		'lesson': 'Технологія',
		'teacher': 'Іванова Алла Опанасівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'nat': {
		'lesson': 'Пізнаємо природу',
		'teacher': 'Касяненко Світлана Володимирівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'geog': {
		'lesson': 'Географія',
		'teacher': 'Касяненко Світлана Володимирівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	}
};

//Розклад уроків - на тиждень

//2023
var arSсhedule = [
	['etika', 'zarlit', 'uklen', 'nat', 'dram', 'fiz'],
	['pain', 'geog', 'uklen', 'hist', 'mat', 'eng', 'fiz'],
	['mus', 'mat', 'hist', 'eng', 'fiz', 'uklit', 'uklit'],
	['oz', 'zarlit', 'prog', 'mat', 'uklen', 'geog'],
	['uklen', 'mat', 'mat', 'eng', 'nat', 'tec', 'tec']

];

//Розклад дзвінків

//2023
var arTime = ['08:30', '09:25', '10:20', '11:15', '12:20', '13:20', '14:15', '15:15'];

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
	'etika': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'fiz': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'pain': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'prog': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'dram': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'oz': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'tec': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'nat': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'geog': { 'chDate': { 'count': 0 }, 'arI': [0] }
};

//Домашні завдання - по дням їх видачі
var chHomework = {

	'2023-09-04': {
		'etika': '||1. Д/з в презентації',
		'zarlit': '||1. Стор.9 Завдання № 11 (намалювати або описати)',
		'uklen': '||1. Впр. 9 (доробити)|2. Виписати 2 прислівя про мову або слово',
		'nat': '||1. Стор. 12, параг. 1,2, запитання, завдання, дослідження',
		'dram': '||1. Сцена з будьякого епізоду з вистави - намалювати або описати письмово!!!???',
		'fiz': '||1. Форма'
	},
	'2023-09-05': {
		'pain': '||1. Альбом, фарби, пензлі|2. Нитки 50 см трьох кольорів',
		'geog': '||!!!',
		'uklen': '||1. Впр. 25 (доробити)',
		'hist': '||!!!',
		'mat': '||1. №9 (3, 4)',
		'eng': '||1. P. 8, ex 1,2,3 ',
		'fiz': '||1. Форма'
	},
	'2023-09-06': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-09-07': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-09-08': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-09-11': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-09-12': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-09-13': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-09-14': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-09-15': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-09-18': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-09-19': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-09-20': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-09-21': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-09-22': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-09-25': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-09-26': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-09-27': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-09-28': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-09-29': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-10-02': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-10-03': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-10-04': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-10-05': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-10-06': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-10-09': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-10-10': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-10-11': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-10-12': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-10-13': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-10-16': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-10-17': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-10-18': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-10-19': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-10-20': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-10-23': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-10-24': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-10-25': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-10-26': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-10-27': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-10-30': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-10-31': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-01': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-02': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-11-03': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-11-06': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-11-07': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-08': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-09': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-11-10': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-11-13': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-11-14': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-15': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-16': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-11-17': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-11-20': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-11-21': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-22': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-23': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-11-24': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-11-27': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-11-28': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-29': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-30': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-01': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-12-04': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-12-05': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-12-06': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-12-07': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-08': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-12-11': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-12-12': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-12-13': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-12-14': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-15': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-12-18': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-12-19': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-12-20': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-12-21': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-22': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-12-25': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-12-26': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-12-27': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-12-28': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-29': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' }

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

