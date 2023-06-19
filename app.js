// Task 1
let age = prompt("Введіть ваш вік!");

if (age >= 18 && age <= 45) {
  alert("Ваш вік підходить!");
} else {
  alert("Ваш вік не підходить!");
}

// Task 2
let a = prompt("Введіть число a!");
let b = prompt("Введіть число b!");

if (a > 3 && a < 12 && b >= 5 && b < 13) {
  alert("Вірно!");
} else {
  alert("Не вірно!");
}

let name = prompt("Ваше ім'я?");
let depositSum = prompt("Яку суму ви бажаєте покласти на депозит?");
let mounth = prompt("На яку кількість місяців ви бажаєте покласти депозит?");
let percent;

if (mounth < 6) {
  percent = 15;
} else if (mounth >= 6 && mounth <= 9) {
  percent = 16;
} else {
  percent = 17;
}

let paySum;

function calcDeposit() {
  let a = percent / 12;
  let b = (depositSum * a) / 100;
  paySum = mounth * b;
  return alert(
    `Шановний ${name}, Ви внесли ${depositSum} грн., під ${percent}% річних, на термін ${mounth} місяців. За цей період часу Ви заробите ${paySum.toFixed(
      2
    )} грн.`
  );
}

let question = confirm("Бажаєте побачити інформацію по депозиту?");

if (question === true) calcDeposit();
