// Переменные объявлены внутри функций видны только внутри функций

function f1() {
  let a = 1;
  const b = 2;
  var c = 3;
}
// console.log(a); //ошибка
// console.log(b); //ошибка
// console.log(c); //ошибка

// Функция имеет доступ в внещним переменным. И может их изменять после объявления функции, если это НЕ параметр!

let d = 10;

function f2() {
  d += " изменено";
}
console.log(d); // 10
f2();
console.log(d); // изменено после объявления ф-ции

// А вот тут уже пример с параметром, глобальная переменная не меняется, меняется только параметр

let f = 10;
function f4(f) {
  f += " изменено f параметр ф-ции";
  console.log(f);
}
console.log(f); // 10
f4(f); // 10 изменено
console.log(f); // 10

// Локальные переменные в ф-ции перекрывают глобальные переменные. Лучше сводить глобальные переменные к минимуму

let e = 100;
(function f3() {
  let e = 100;
  console.log("е локальная", e);
})();

// Значения по умолчанию можно задать 5ю способами

function f5(g = 10, h, i, j) {
  h = h ?? "h через оператор нулевого слияния"; // ищет первый null или undefined и выдает др значение. 0 это не null.
  i = i || "i через //"; // ищет первый true или выдает последний false(если true нет)
  if (j === undefined) {
    j = "значение j  по умолчанию через if";
  }
  console.log(g, h, i, j);
}

f5(15, 0);

// return может быть в нескольких местах ф-ции как только выполнение до него дальше не идет. Пустой return ===undefined прекращение выполнения кода. Если у return сложное выражение, то берем в скобки и на одной строке.

// Переписать функцию через тернарный оператор и через //
/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  } */

function checkAge1(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
console.log(checkAge1(19));

function checkAge2(age) {
  return age > 18 || confirm("Родители разрешили?");
}

console.log(checkAge2(199));

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

function min(a, b) {
  let c = Math.min(a, b);
  return c;
}

console.log(min(1, 1));

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow(a, b) {
  if (b % 1 === 0) {
    return a > 0 && b > 0 ? a ** b : "введите число, которое больше нуля";
  } else {
    return "степень должна быть целое число";
  }
}
// let number1 = prompt("введите первое число");
// let number2 = prompt("введите степень");
// console.log(pow(number1, number2));

// Перепишите с использованием функции-стрелки

/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  ); */

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

/* ask(
  "Вы согласны?",
  () => {
    alert("Вы согласились.");
  },
  () => {
    alert("Вы отменили выполнение.");
  }
); */

// ___________________________________CODE WARS_________________________________________________________________

// Создать функцию, которая будет принимать число с плавающей точкой и возвращать сумму, форматированную в долларах и центах.
// 3 needs to become $3.00
// 3.1 needs to become $3.10

function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

console.log(formatMoney(3));

//Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// Если задано [34, 15, 88, 2], ваше решение вернет 2
//Если задано [34, -345, -1, 100], ваше решение вернет -345
// Вы можете предположить, для целей этого ката, что предоставленный массив не будет пустым.

function findSmallestInt(arr) {
  return (minNumber = Math.min(...arr));
}

console.log(findSmallestInt([34, -345, -1, 100]));

// Часы показывают h часов, m минут и s секунд после полуночи. Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах. Пример: h = 0 m = 1 s = 1 result = 61000
// Input constraints:
/* 0 <= h <= 23
0 <= m <= 59
0 <= s <= 59 */

let timeToMillisecond = function (h, m, s) {
  return 0 <= h && h <= 23 && 0 <= m && m <= 59 && 0 <= s && s <= 59
    ? (s + m * 60 + h * 60 ** 2) * 1000
    : "для расчета миллисекунд укажите корректное значение";
};

console.log(timeToMillisecond(2, 1, 1));

// Напишите функцию, которая вычисляет среднее значение чисел в заданном массиве.

const calcAverageAmount = (array) => {
  return array.reduce((item, acc) => (acc += item), 0) / array.length || 0;
};
console.log(calcAverageAmount([]));

// Наша футбольная команда завершила чемпионат. Результаты матчей нашей команды записаны в набор строк. Каждый матч представлен строкой в ​​формате "x:y", где x — счет нашей команды, а y — счет нашего соперника.Нам нужно написать функцию, которая берет эту коллекцию и возвращает количество очков, набранных нашей командой (x)
/* if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie) 
our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4*/

function points(games) {
  return games.length === 10
    ? games.reduce((acc, item) => {
        let x = Number(item[0]);
        let y = Number(item[2]);

        if (x > y && 0 <= x && x <= 4 && 0 <= y && y <= 4) {
          acc += 3;
        } else if (x === y && 0 <= x && x <= 4 && 0 <= y && y <= 4) {
          acc += 1;
        } else if (x < y && 0 <= x && x <= 4 && 0 <= y && y <= 4) {
          acc = acc;
        } else {
          return "Ошибка вводимых значений. X и Y  находятся в промежутке от 0 включительно до 4 включительно ";
        }
        return acc;
      }, 0)
    : "ошибка количества матчей";
}

console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:3", "3:4"])
);

// Дано число и вы должны сделать его отрицательным.
/* makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12 */

console.log(makeNegative(0)); // function declaration можно объявлять до функции

function makeNegative(num) {
  num > 0 ? (num = -num) : (num = num);
  return num;
}

// Напишите программу, которая находит сумму каждого числа от 1 до num (оба включительно). Число всегда будет положительным целым числом больше 0. Вашей функции нужно только вернуть результат, то, что показано в скобках в примере ниже, — это то, как вы достигаете этого результата, и это не его часть, см. примеры тестов.
/* 2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) */

// function expression объявляем только после функции
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(8));

// Верните массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным. Если входные данные — пустой массив или равны нулю, верните пустой массив.

function countPositivesSumNegatives(input) {
  if (input === null || input === undefined) {
    return [];
  } else if (input.every((item) => Number(item) === 0)) {
    return [];
  } else {
    return input.reduce(
      (acc, item) => {
        item > 0 ? (acc[0] += 1) : (acc[1] += item);
        return acc;
      },
      [0, 0]
    );
  }
}

console.log(countPositivesSumNegatives(undefined));
git