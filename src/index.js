
const form = document.getElementById("loginForm");
function handleForm(event) { 
    event.preventDefault();
    //1.hiding log-in form

    const logIn = document.getElementById("logIn");
    logIn.style.display = "none";

    //2.display home page
    const main = document.getElementById("main");
    main.style.display = "inline";

 } 
form.addEventListener('submit', handleForm);

//displaying the sign up form
const sign = document.getElementById('sign');
function displaySignUp(event) { 
    event.preventDefault();
 //hiding log-in form
    const logIn = document.getElementById("logIn");
    logIn.style.display = "none"

   // displaying sign up form

  const signUp = document.getElementById('signUp');
  signUp.style.display = "inline";

}
sign.addEventListener('click',displaySignUp);

// displaying the log in page and hiding signup form

const signUpButton = document.getElementById("signUpButton")

function displayLogIn(event) { 
    event.preventDefault();
 const signUp = document.getElementById('signUp');
  signUp.style.display = "none";
  const logIn = document.getElementById("logIn");
    logIn.style.display = "inline"

}
signUpButton.addEventListener('submit',displayLogIn)


//display books names
const booksList = document.getElementById('booksList')

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




    
