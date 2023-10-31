new Swiper('.image-slider',{
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	//Прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
	},
	//Скроллбар
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	simulateTouch: true,

	grabCursor: true,
	// Управление клавиатурой
	keyboard: {
		// Вкл/Выкл
		enabled: true,
		// Вкл/Выкл
		// pgUp/pgDn
		pageUpDown: false,
	},
	// Управление колесом мыши
	mousewheel: {
		// Чувствительность
		sensivity: 1,
		// Класс объекта на котором будет срабатывать прокрутка мышкой
		//eventsTarget: ".image-slider"
	},
	// Автовысота
	autoHeight: true,
	// Кол-во слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: -10,
	// Активный слайд по центру
	centeredSlides: true,
	// Бесконечный слайдер
	loop: true,

	// Автопрокрутка
	autoplay: {
		// Пауза между прокурткой
		delay: 2000,
		// Отключить после ручного переключения
		disableOnInteraction: false,
		// Оставновка при наведении мыши 
		pauseOnMouseEnter: true,
	},
	// Скорость прокрутки
	speed: 700,

	// Куб
	/*effect: 'cube',

	// Дополнение к cube
	cubeEffect: {

	}*/
	
	// CoverFlow
	effect: 'coverflow',

});