# Afanasev_JavaScript

//Задание 1
let word = 'Привет',
    sentence = 'Число, введеное вами не является большим семи',
    number = +prompt ("Введите любое число, которое больше семи:");
    if (number > 7) { 
      alert(word);
    }else {
      alert(sentence);
    }

//Задание 2

let hisName = 'Вячеслав',
    typingName = prompt ('Введите имя:');
    if (typingName.toLowerCase() ===  hisName.toLowerCase()) {
      alert ('Привет, Вячеслав');
    } else {
      alert ('Нет такого имени');
    }

//Задание 3

const divideOnThree = (a) => {
  for (let i = 0; i <a.length; i++) {
    if (a[i] % 3 === 0) {
      console.log(`${'Числo кратное трем: '}${a[i]}`);
    }
  }
}

divideOnThree([5,7,10, 12,13, 45, 27]);


// Задание 4

1.	Дана скобочная последовательность: [((())()(())]]
- Можно ли считать эту последовательность правильной?
- Если ответ на предыдущий вопрос “нет” - то что необходимо в ней изменить, чтоб она стала правильной?

Ответ: скобочная последовательность не является правильной. 
Чтобы она была правильной нужно, чтобы количество открытых скобок соответствовало (было равно) количеству закрытых. Ниже – исправленная версия скобочной последовательности:  
[(())()(())]
