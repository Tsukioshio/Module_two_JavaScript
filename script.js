function init() {
  reorderBooks();
  removeAds();
  repairThirdBookName();
  reorderNumber
}


const reorderBooks = () => {
  const root = document.querySelector('.books')
  const books = document.querySelectorAll('.book');


  const indexes = []

  books.forEach(book => {
    const index = getBookNumber(book);
    indexes.push(index)
  })

  for (let i = 1; i <= indexes.length; i++) {
    const bookIndex = indexes.indexOf(i);

    root.appendChild(books[bookIndex])
  }
}

const getBookNumber = ({innerText}) => +innerText.replace(/.*\s(\d).*/, '$1')[0];

const removeAds = () => {
  const root = document.querySelector('body');
  const adv = document.querySelector('.adv');

  root.removeChild(adv)
}

const repairThirdBookName = () => {
  const thirdBookTitle = document.querySelector('.book:nth-child(3) > h2 > a');

  thirdBookTitle.textContent = 'Книга 3. this и Прототипы Объектов'
}




// const list = document.querySelector('.bookOrder')
// const items = document.querySelectorAll('.bookOrder li')

const reorderNumber = () => {
  const list = document.querySelector('.bookOrder')
  const items = document.querySelectorAll('li');


  const indexes = []

  li.forEach(li => {
    const indexLi = getLiNumber(li);
    indexes.push(indexLi)
  })

  for (let i = 1; i <= indexes.length; i++) {
    const liIndex = indexes.indexOf(i);

    root.appendChild(li[liIndex])
  }
}

const getLiNumber = ({innerText}) => +innerText.replace(/.*\s(\d).*/, '$1')[0];
