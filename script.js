let openBtn = document.getElementById("openBtn");
let myNavClose = document.getElementById("myNavClose");

openBtn.addEventListener("click", function() {
    document.getElementById("myNav").style.display = "block";
});
myNavClose.addEventListener("click", function () {
    document.getElementById("myNav").style.display = "none";
});



let date = new Date(); // получение текущей даты
var tomorrow = new Date(date.getTime() + (24 * 60 * 60 * 1000)); // получение завтра
let text = tomorrow.toLocaleDateString().split('.').join('.'); // получение даты год месяц день
let dateMin = document.querySelector('#dateBron'); // получение ид куда записать сегодняшюю дату
let dateDeparture = document.querySelector("#dateDeparture"); // получение ид куда записать сегодняшюю дату
dateMin.value = text; // отоброжение текущей даты на странице
dateDeparture.value = text; // отоброжение текущей даты на странице




let submitInput = document.getElementById("submit");
let human = document.getElementById('human');
const dateRegular = /\d{2}(.|\/)\d{2}\1\d{4}/g;

submitInput.addEventListener('click', function(e) {
    let dateMinValue = dateMin.value;
    let dateDepartureValue = dateDeparture.value;
    let humanValue = human.value;

    function dateRegeXp(stingDateOne) { // проверка валидности даты заезда
        return dateRegular.test(stingDateOne); 
    };

    function dateRegeXp(stingDateTwo) { // проверка валидности даты выезда
        return dateRegular.test(stingDateTwo); 
    };

    function hasDigits(humanValue) { //Проверка пароля. Пароль должен содержать хотя бы одну цифру
        return /[1-9]/.test(humanValue);
    };

    function lengthMoreThan(humanValue, limit) { // проверка длины строки 15 и менее символов
        return humanValue.length > limit;        
    };

    function isDateValid(stingDateOne, stingDateTwo, humanValue) {
        if (!dateRegeXp(stingDateOne, stingDateTwo)) {
            alert('Дата введена не корректно');
            return e.preventDefault();
        }


        if(!hasDigits(humanValue)) {
            alert('Поле должно содержать количество человек, больше нуля')
            return e.preventDefault();
        }

        if (lengthMoreThan(humanValue, 15)) {
            alert('Слишком много символов, укажите меньше 15');
            return e.preventDefault();
        }


    alert('Поздравляем! Счатливого полёта на Марс!');
    
    return true;
    }

    isDateValid(dateMinValue, dateDepartureValue, humanValue)
});
