const week = [
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',
'Sunday',
];

const weekendtDayIndex = [5, 6];
const currentDayIndex = new Date().getDay();


function printDay(index) {
    const classes = `text ${currentDayIndex === index ? 'italic' : ''} ${weekendtDayIndex.includes(index) ? 'bold' : ''}`
document.writeln(`<div class='${classes}'>${week[index]}</div>`)
}

// week.forEach(printDay);

for (let i = 0; i < week.length; i++) {
    printDay(i);
}




const arr = ['1234','34536434','767456485','54364234','33246346','4564345','7787654645'];

function checkFirstNumber(number) {
    let firstNumber = number;

    while(firstNumber > 10) firstNumber /= 10;

    firstNumber = Math.floor(firstNumber);

    return firstNumber === 3 || firstNumber === 7;
}

function print(item) {
    console.log(item);
}

arr
.filter((num)=>checkFirstNumber(num))
.forEach(print);