new Swiper('.image-slider',{
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	//Прогрессбар
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	//Скроллбар
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});