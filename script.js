function print(text) {
    document.write(`<div>${text}</div>`);
    }

const getAccumulatedIncome = (salary, extraMoney, expensesAmount) => (salary + extraMoney) - expensesAmount;

const getTargetMonth = (accumulatedIncome, purpose) => Math.ceil(purpose / accumulatedIncome);

const GetbudgetDay = (accumulatedIncome) => Math.floor(accumulatedIncome / 30);

const init = () => {
    const salary = Number.parseFloat(prompt('Ваш месячный доход?'));
    print(`Месячный доход: ${salary} Руб`);
    
    const extraMoney = Number.parseFloat(prompt(`Перечислите возможный доход за ваши дополнительные работы:`))
    print(`Дополнительный доход: ${extraMoney} Руб`);
    
    const expenseCategories = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    print(`Категории Расходов: ${expenseCategories}`);
    
    const expensesAmount = Number.parseFloat(prompt('Во сколько обойдутся обязательные статьи расходов?'));
    print(`Сумма расходов: ${expensesAmount} Руб`);

    const purpose = Number.parseFloat(prompt('Введите сумму которую желаете накопить?'));
    print(`Целевая сумма: ${purpose} Руб`);
    
    const accumulatedIncome = getAccumulatedIncome(salary, extraMoney, expensesAmount);

    const targetMonth = getTargetMonth(accumulatedIncome, purpose);
    print(`Нужная сумма будет накоплена через: ${targetMonth} месяцев`);

    const budgetDay = GetbudgetDay(accumulatedIncome)

    console.clear()

        if (budgetDay < 0) {
        console.log('Что-то пошло не так'); 
        } else if (budgetDay > 6000) {
            console.log('У вас высокий уровень дохода');
        } else if (budgetDay > 3000 && budgetDay < 6000) {
        console.log('У вас средний уровень дохода');
        } else if (budgetDay < 3000 && budgetDay > 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        }
};






// const deposit = prompt('Есть ли у вас вклад в банке?');

// const purpose = 500000;

// const budgetMonth = money - amount;

// const months = Math.ceil(purpose / budgetMonth);

// const budgetDay = Math.floor(budgetMonth / 30);


// if (budgetMonth > 0) {
// console.log(`Вам копить ${months} месяца (-ев)`);
// console.log (`Бюджет на день: ${budgetDay}`);
// } else console.log('Вы не накопите');

// if (budgetDay < 0) {
// console.log('Что-то пошло не так'); 
// } else if (budgetDay > 6000) {
//     console.log('У вас высокий уровень дохода');
// } else if (budgetDay > 3000 && budgetDay < 6000) {
// console.log('У вас средний уровень дохода');
// } else if (budgetDay < 3000 && budgetDay > 0) {
//     console.log('К сожалению у вас уровень дохода ниже среднего');
// }