function func(text) {
    document.write(`<div>${text}</div>`);
    }

const getAccumulatedIncome = (salary, extraMoney, expensesAmount) => (salary + extraMoney) - expensesAmount;

const getTargetMonth = (accumulatedIncome, purpose) => Math.ceil(purpose / accumulatedIncome);

const GetbudgetDay = (accumulatedIncome) => Math.floor(accumulatedIncome / 30);

const questionLoop = (question, defaultValue) => {
    const answer = Number.parseFloat(prompt(question, defaultValue));

    if (isNaN(answer)) return questionLoop(question, defaultValue);
    return answer;
};


const init = () => {
    const salary = questionLoop('Ваш месячный доход?');
    func(`Месячный доход: ${salary} Руб`);
    
    const extraMoney = questionLoop(`Перечислите возможный доход за ваши дополнительные работы:`)
    func(`Дополнительный доход: ${extraMoney} Руб`);
    
    const expenseCategories = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    func(`Категории Расходов: ${expenseCategories}`);
    
    const expensesAmount = questionLoop('Во сколько обойдутся обязательные статьи расходов?');
    func(`Сумма расходов: ${expensesAmount} Руб`);

    const purpose = questionLoop('Введите сумму которую желаете накопить?');
    func(`Целевая сумма: ${purpose} Руб`);
    
    const accumulatedIncome = getAccumulatedIncome(salary, extraMoney, expensesAmount);

    const targetMonth = getTargetMonth(accumulatedIncome, purpose);
    func(targetMonth > 0
        ? `Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${targetMonth}`
        : 'Ваша цель не будет достигнута');

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



// hard homework

const array = ['12341', '414123', '75673453', '456452', '65477768', '873542', '2346356'];

array.filter(number => ['2', '4'].includes(number[0])).forEach(func)


const cutText = (arg) => {
    if (typeof arg === 'string'){
        arg = arg.trim();
        if (arg.length > 30) {
            arg = arg.slice(0, 30).concat('...')
        }
        return arg;
    } else console.log ('Это не текст');
};

const resultText = cutText('312321331312323131231312312312323131231111123123132312331231312312312312312312313123');

document.write(resultText);