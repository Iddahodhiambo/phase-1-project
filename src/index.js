const booksList = document.getElementById('booksList')
const list = document.getElementById('list')

//display books names
function displayBooksName() {
fetch("https://anapioficeandfire.com/api/books").then((response) => response.json()).then((data)=> {
    data.map(book => {
        const markup = `<p>${book.name}</p>`
        booksList.insertAdjacentHTML('afterbegin',markup)
    })
})

}

displayBooksName()

