const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const validateAnswer = (answer) => {
    // if (answer == null) alert('Игра окончена');
    if (answer == '') alert('Нужно ввести число!');
    else if (isNaN(answer)) alert('Введите число!');
    else return true;
};

const start = () => {
    const MIN_VALUE = 1;
    const MAX_VALUE = 10;

    const ATTEMPTS_COUNT = 5;

    let attemptsLeft = ATTEMPTS_COUNT;

    const searchNumber = getRandomNumber(MIN_VALUE, MAX_VALUE)

    const loop = () => {
        if (attemptsLeft == 0) {
            const runAgain = confirm('У вас закончились попытки! Хотите сыграть еще?')

            if (runAgain) start();
            else alert('Игра окончена!');
            return;
        }

        const userAnswer = prompt(`Угадай число от ${MIN_VALUE} до ${MAX_VALUE} за ${attemptsLeft} попыток`);

        if (userAnswer == null) {
        alert('Игра окончена');
        return;
    }
    
        if (validateAnswer(userAnswer)) {
            const answer = Number.parseInt(userAnswer);
            if (answer > searchNumber) {
                attemptsLeft--;
                alert(`Загаданное число меньше, осталось попыток: ${attemptsLeft}!`);
                loop();
            } else if (answer < searchNumber) {
                attemptsLeft--;
                alert(`Загаданное число больше, осталось попыток: ${attemptsLeft}!`);
                loop();
            } else if (answer == searchNumber) {
                const runAgain = confirm(`Вы угадали за ${ATTEMPTS_COUNT - attemptsLeft + 1} попыток!!! 
Хотели бы сыграть еще?`);
                if (runAgain) start();
                else alert('Игра окончена!');
            }
        } else loop();
    };

    loop();
};