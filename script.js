const regForm = document.getElementById('reg_form');
const authForm = document.getElementById('auth_form');

if (regForm) {
    regForm.addEventListener('submit', event => {
        event.preventDefault();

        if (validateForm(event.target)) {
            const inputUserName = document.getElementById('username');
            const inputPassword = document.getElementById('password');
            localStorage.setItem('username', inputUserName.value);
            localStorage.setItem('password', inputPassword.value);
        }
    });

}

if (authForm) {
    document.getElementById('auth_form').addEventListener('submit', event => {
        const form = event.target;

        event.preventDefault();

        if (validateForm(form)) {
            const inputUserName = document.getElementById('username');
            const inputPassword = document.getElementById('password');

            if (
                localStorage.getItem('username') === inputUserName.value &&
                localStorage.getItem('password') === inputPassword.value
            ) {
                location.replace("./result.html");
            }
            else {
                const errBlock = form.querySelector('.error_text');
                errBlock.innerText = 'Логин/Пароль не верные';
                errBlock.style.display = 'block';
            }
        }
    });
}

document.querySelectorAll('.autorization_entry-field input').forEach(input => {
    input.addEventListener('focus', inputFocus);
});

document.querySelectorAll('.entry-checkbox input').forEach(input => {
    input.addEventListener('change', inputFocus);
});


function validateForm(form) {
    const arInputs = form.querySelectorAll('.entry-field_required input');
    let isValid = true;
    let formData = {};

    for (let i = 0; i < arInputs.length; i++) {
        let input = arInputs[i];

        if (!inputValidation(input)) {
            isValid = false;
        }

        formData[input.name] = input.value;
    }

    return isValid;
}


function inputValidation(input) {
    const value = input.value;
    const parentNode = input.parentNode;
    let errMessage = '';

    if (!value) {
        errMessage = 'Поле обязательно для заполнения';
    }
    else if (input.type === 'checkbox' && !input.checked) {
        errMessage = 'Поле обязательно для заполнения';
    }
    else if (input.type === 'password' && value.length < 8) {
        errMessage = 'Пароль должен содержать как минимум 8 символов';
    }
    else if (input.type === 'email' && !validateEmail(value)) {
        errMessage = 'Некорректный email';
    }

    if (errMessage) {
        parentNode.classList.add('entry-field_error');
        parentNode.querySelector('.signature').innerText = errMessage;
    }

    return !errMessage;
}


function inputFocus(event) {
    event.target.parentNode.classList.remove('entry-field_error');
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}