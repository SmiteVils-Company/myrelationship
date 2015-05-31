// Array Text
var welcome_text = new Array("Привет!", "MyRelationship.Ru - поможет быстро узнать кто кому кем является!", "<button class='start_button'>Старт!</button>");
var wt_position = 0; // Slide Index
var intervalID_1; // ID intelval

// Функция заменяет текст и элемены на преветственном экране
function addWelcomeText() {
	// Задаем текст из массива по порядкому номеру
	$("p#welcome-text").html(welcome_text[wt_position]);
	// Показываем элемент
	$("p#welcome-text").show(2000);
	// Прибавляем единицу к индексу
	wt_position++;
	console.log(wt_position);
	// Если массив закончился выходим из функции
	if (wt_position == welcome_text.length) {
		return;
	};
	// Прячем элемент
	$("p#welcome-text").delay(2000).hide(1000);
	// Повторяем функцию, но с другой задержкой
	setTimeout(addWelcomeText, 5000);
}

/* Выполняем скрипт после загрузки DOM */
$(document).ready(function(){
	//Быстро скрываем елемент*/
	$("p#welcome-text").hide();
	// Запускаем функцию
	addWelcomeText();
});