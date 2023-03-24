'use strict'

let money = 0 // доходы
let profit = 'фриланс'
let extraMoney = 0 // доп доходы
let expenses =  "питание, проезд"
let amount = 0 // расходы
let purpose = 2000000
let period = 0
let deposit = true

const getAccumulatedIncome = () => {
  const sumMoneyElement = document.querySelector('#sumMoney');
  const result = (money + extraMoney) - amount;

  sumMoneyElement.textContent = result.toString();
  return result;
}

const getSumMoneyDay = () => {
  const sumMoneyDayElement = document.querySelector('#sumMoneyDay');
  const result = Math.floor((money + extraMoney) / 30);

  sumMoneyDayElement.textContent = result.toString();
  
} 

// let accumulatedIncome = getAccumulatedIncome()
// let budgetDay = accumulatedIncome / 30

function getTargetMonth(accumulatedIncome) {
  const purposeElement = document.querySelector('#purpose');
  const result = Math.ceil(purpose / accumulatedIncome)
  purposeElement.textContent = (result).toString()
}

// console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
// console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
// console.log('Дневной бюджет', budgetDay);
// конслтрукция условий

function onInputMoney({target}) {
  const {value} = target
  money = +value
  
}

function onInputExtraMoney({target}) {
  const {value} = target
  extraMoney = +value
  
}

function onInputAmount({target}) {
  const {value} = target
  amount = +value

}



function calc() {
  const accumulatedIncome =  getAccumulatedIncome();
  getTargetMonth(accumulatedIncome)
  getSumMoneyDay()
}



// удалили
// console.log('getTargetMonth', getTargetMonth());
// console.log('accumulatedIncome', accumulatedIncome);

// console.log('budgetDay', budgetDay);
// console.log(`цель будет достигнута за ${purpose / budgetMonth}`);