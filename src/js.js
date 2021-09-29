
let word = 'Привет',
    sentence = 'Число, введеное вами не является большим семи',
    number = +prompt ("Введите любое число, которое больше семи:");
    if (number > 7) { 
      alert(word);
    }else {
      alert(sentence);
    }



let hisName = 'Вячеслав',
    typingName = prompt ('Введите имя:');
    if (typingName.toLowerCase() ===  hisName.toLowerCase()) {
      alert ('Привет, Вячеслав');
    } else {
      alert ('Нет такого имени');
    }



const divideOnThree = (a) => {
  for (let i = 0; i <a.length; i++) {
    if (a[i] % 3 === 0) {
      console.log(`${'Числo кратное трем: '}${a[i]}`);
    }
  }
}
divideOnThree([5,7,10, 12,13, 45, 27]);
  

