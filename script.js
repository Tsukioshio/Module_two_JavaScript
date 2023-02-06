const money = 30000;
const profit = "Фриланс";
const expenses = "Аренда, Питание, проезд, Досуг";
const purpose = 150000;
const period = 6;

console.log(typeof money, typeof profit);
console.log(expenses.length);
console.log(`Период равен ${period} месяцам`);
console.log(`Цель заработать ${purpose} рублей`);

const budgetPerday = money / 30;
console.log(`${ Math.floor(budgetPerday) } Рублей / день`);

console.log(expenses.toLowerCase());
console.log(expenses.split(', '));
