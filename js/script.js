$(document).ready(function () {
	let currentFloor = 2; // Переменная с текущим этажом
	let floorPath = $('.main__home path'); /* текущий этаж */
	let counterUp = $(".main__info-btn__up"); /* кнопка увелечения этажа */
	let counterDown = $(".main__info-btn__down"); /* кнопка уменьшения этажа */
	let modal = $(".modal"); /* получаем класс модального окна */
	let body = $('body'); // получаем тег body
	let modalCloseButton = $(".modal__close"); /* получаем класс кнопки закрытия модальнного окна */
	let buttonClose = $(".main__info-button__primery");


	floorPath.on("click", function () { // функция открытия модального окна
		modal.toggleClass("_active");
		body.toggleClass("_lock");
	})
	buttonClose.on("click", function () { // функция открытия по кнопке модального окна
		modal.toggleClass("_active");
		body.toggleClass("_lock");
	})
	modalCloseButton.on("click", function () { // функция закрытия модального окна
		modal.removeClass("_active");
		body.removeClass("_lock");
	})

	floorPath.on('click', function () { /* функция выбора этажа по картинке */
		floorPath.removeClass('_active'); // удаляем активный класс
		currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
		$(".counter").text(currentFloor); // Записываем значение этажа в счётчик справа
	});




	counterUp.on('click', function () { /* кнопка увелечения этажа */
		if (currentFloor < 18) { // Проверяем значение этажа
			currentFloor++; // Прибавляем один этаж
			usCurentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false}); // Форматируем переменную с этажом, чтобы было 01, а не 1
			$(".main__info-counter").text(usCurentFloor); // Записываем значение этажа в счётчик слева
			floorPath.removeClass('_active'); // удаляем активный класс
			$(`[data-floor=${usCurentFloor}]`).toggleClass("_active"); // добавляем класс если его нет для подсветки
		}
	})
	counterDown.on('click', function () { /* кнопка уменьшения этажа */
		if (currentFloor > 2) { // Проверяем значение этажа
			currentFloor--; // отнимаем один этаж
			usCurentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false});// Форматируем переменную с этажом, чтобы было 01, а не 1
			$(".main__info-counter").text(usCurentFloor);// Записываем значение этажа в счётчик слева
			floorPath.removeClass('_active');// удаляем активный класс
			$(`[data-floor=${usCurentFloor}]`).toggleClass("_active"); // добавляем класс если его нет для подсветки
		}
	})
});