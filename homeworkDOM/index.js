'use strict'

let money = 0 // доходы
let profit = 'фриланс'
let extraMoney = 20000 // до доходы
let expenses =  "питание, проезд"
let amount = 0 // расходы
let purpose = 0
let period = 12
let deposit = true

const getAccumulatedIncome = () => {
  const sumMoneyElement = document.querySelector('#sumMoney');
  sumMoneyElement.textContent = ((money + extraMoney) - amount).toString()
}

// let accumulatedIncome = getAccumulatedIncome()
// let budgetDay = accumulatedIncome / 30

// function getTargetMonth() {
//   return purpose / accumulatedIncome
// }

// console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
// console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
// console.log('Дневной бюджет', budgetDay);
// конслтрукция условий

function onInputMoney({target}) {
  const {value} = target
  money = +value

  getAccumulatedIncome()
}

function onInputExtraMoney({target}) {
  const {value} = target
  extraMoney = +value

  getAccumulatedIncome()
}

function onInputAmount({target}) {
  const {value} = target
  amount = +value

  getAccumulatedIncome()
}



// удалили
// console.log('getTargetMonth', getTargetMonth());
// console.log('accumulatedIncome', accumulatedIncome);

// console.log('budgetDay', budgetDay);
// console.log(`цель будет достигнута за ${purpose / budgetMonth}`);