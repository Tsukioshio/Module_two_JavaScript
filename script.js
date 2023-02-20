const money = prompt('Ваш месячный доход?');

const purpose = 500000;

const expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

const amount = prompt('Во сколько обойдутся обязательные статьи расходов?');

const deposit = prompt('Есть ли у вас вклад в банке?');

const budgetMonth = money - amount;

const months = Math.ceil(purpose / budgetMonth);

const budgetDay = Math.floor(budgetMonth / 30);


if (budgetMonth > 0) {
console.log(`Вам копить ${months} месяца (-ев)`);
console.log (`Бюджет на день: ${budgetDay}`);
} else console.log('Вы не накопите');

if (budgetDay < 0) {
console.log('Что-то пошло не так'); 
} else if (budgetDay > 6000) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 3000 && budgetDay < 6000) {
console.log('У вас средний уровень дохода');
} else if (budgetDay < 3000 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}