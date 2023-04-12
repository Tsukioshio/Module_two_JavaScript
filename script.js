'use strict'

function validateEmail() {
    const {classList: wrapperClasses} = document.querySelector('.email-wrapper')
    const {value: email, classList: inputClasses} = document.querySelector('#email')

if(!isEmpty(email)) {
    wrapperClasses.remove('input_email')

    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

    if(!regExp.test(email)) {
        inputClasses.add('error-box')
        wrapperClasses.add('error-email-box')
    } else {
        inputClasses.remove('error-box')
        wrapperClasses.remove('error-email-box')
    }
} else {
    wrapperClasses.remove('error-email-box')
    wrapperClasses.add('input_email')
    inputClasses.add('error-box')
}
}

// function validatePassword() {
//     const errorBox = document.querySelector('#error-box')
//     const {value: password, classList: inputClasses} = document.querySelector('#password')

//     if(!isEmpty(password)) {
//         errorBox.style.display = 'none'

//         if(password.length <= 8) {
//             inputClasses.add('error-box')
//             errorBox.textContent = 'Пароль должен содержать как минимум 8 символов'
//             errorBox.style.display = 'block'
//         } else {
//             inputClasses.remove('error-box')
//             errorBox.style.display = 'none'
//         } 
//     }
//     else {
//         errorBox.textContent = 'Поле обязательно для заполнения'
//         errorBox.style.display = 'block'
//         inputClasses.add('error-box')
//         }
//     }

function validatePassword() {
  const errorBox = document.querySelector('.password-wrapper')
  const {value: password, classList: inputClasses} = document.querySelector('#password')

  if(!isEmpty(password)) {
      errorBox.style.display = 'none'

      if(password.length <= 8) {
          inputClasses.add('error-box')
          errorBox.textContent = 'Пароль должен содержать как минимум 8 символов'
          errorBox.style.display = 'block'
      } else {
          inputClasses.remove('error-box')
          errorBox.style.display = 'none'
      } 
  }
  else {
      errorBox.textContent = 'Поле обязательно для заполнения'
      errorBox.style.display = 'block'
      inputClasses.add('error-box')
      }
  }




function isEmpty(textValue) {
    return textValue.length === 0
}

function signIn() {
    const email = document.querySelector(`.input_email`).value
    const password = document.querySelector(`.input_password`).value
    const user = {email, password}
    console.log(user)
    document.location.href = './result.html'
}

function signUp() {
    validateEmail()

    const email = document.querySelector(`.input_email`).value
    const password = document.querySelector(`.input_password`).value

    localStorage.setItem('userEmail', email)

    
}

function getUsername() {
    const email = localStorage.getItem('userEmail')

    const messageElement = document.querySelector(`#message`)

    if(email) {
        messageElement.textContent = `Вы вошли в систему, ${email}`
    } else {
        messageElement.textContent = 'Что-то пошло не так'
    }
}

function logout() {
    localStorage.removeItem(`userEmail`)
}