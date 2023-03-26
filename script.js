const getUsers = () => {
  const url = 'https://reqres.in/api/users?per_page=12';

  return fetch(url)
    .then(response => response.json())
}

const printSurnames = (users) => {
  users.forEach(({last_name: surname}) => console.log(surname))

  return users
}



const printUserWithSurnameStartsF = (users) => {
  users.filter(({last_name: surname}) => surname.startsWith('F'))
    .forEach(user => console.log(user))

  return users
}

const printDatabase = (users) => {
  const result = users.reduce((string, {first_name: name, last_name: surname}) => {
    return string.concat(`${surname} ${name}, `)
  }, 'Наша база содержит данные следующих пользователей: ')

  .trimEnd()
  .slice(0, -1)

  console.log(result);
  return users[0]
}

const printKeys = (user) => {
  Object.keys(user).forEach(key => console.log(key))
}

getUsers()
  .then(({data: users}) => users)
  .then(printSurnames)
  .then(printUserWithSurnameStartsF)
  .then(printDatabase)
  .then(printKeys)