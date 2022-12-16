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
//display books details

const booksDetailContainer = document.getElementById('booksDetails')
function displayBooksDetails(e) {
fetch("https://anapioficeandfire.com/api/books").then((response) => response.json()).then((data)=> {
    data.map(book => {
        if(e.target.innerHTML === book.name) {
            const books = `
            <p><b>NAME</b>: ${book.name}</p>
            <p><b>ISBN</b>: ${book.isbn}</p>
            <p><b>AUTHORS</b>: ${book.authors}</p>
            <p><b>NUMBER OF PAGES</b>: ${book.numberOfPages}</p>
            <p><b>PUBLISHER</b>: ${book.publisher}</p>
            <p><b>COUNTRY</b>: ${book.country}</p>
            <p><b>MEDIA TYPE</b>: ${book.mediaType}</p>
            <p><b>RELEASED </b>: ${book.released}</p>
            
             `
      booksDetailContainer.innerHTML = ""
booksDetailContainer.insertAdjacentHTML("afterbegin",books)

            }

        })
    })


}
booksList.addEventListener('click', displayBooksDetails)
    
