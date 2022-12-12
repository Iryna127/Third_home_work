//Первое задание

 let date = prompt("Введите ваше имя:");
let count = 1;
for (let i = 1; i <= 4; i++) {
  if (count == 3) {
    console.log(`Happy birthday, dear ${date}`);
    count += 1;
  } else if(count == 1){
    console.log(`Happy birthday to you`);
    count += 1;
  } else if (count == 2){
    console.log(`Happy birthday to you`);
    count += 1;
  } else {
    console.log(`Happy birthday to you`);
    count += 1;
  }
} 

//Второе задание

simvol = '';
let newDate = +prompt('Введите число:');
for (let i = 1; i <= newDate; i++) {
  simvol += '.#';
}
console.log(simvol);

// Третье задание
let number = +prompt('Введите число');
if (Boolean(number) == true) {
} else {
   number = +prompt('Invalid. You should enter a number", "Try again');
}
let numberOdd = 0;
for (let i = 0; i <= number; i++) {
  if (i % 2 === 1) {
    numberOdd += i;    
  } 
}
let result = numberOdd;
console.log(`Сума нечетных чисел = ${result}`);


// Четвертое задание
let interation = 1;
let rand = 0;
for (let i = 0; i < 1; ) {
  rand = Math.random();
  if (rand > 0.7) {
    break;
  }
  interation += 1;
  console.log(`Random: ${rand}`);
}
console.log(`Loop was finished because of: ${rand}`);
console.log(`Number of iterations: ${interation}`);

//Пятое задание

for (let i = 1; i < 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Div by 5 and 3");
  } else if (i % 5 == 0) {
    console.log("Div by 5");
  } else if (i % 3 == 0) {
    console.log("Div by 3");
  } else {
    console.log(i);
  }
} 

// Шестое задание
let dateNew = new Date();
console.log(dateNew.toUTCString());
console.log(dateNew.toDateString());
console.log(dateNew);






