
function searchForm(){
    const searchText = document.getElementById("searchText");
    displayNewList(searchText.value);
    
}
function displayNewList(startingLike){
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = "";
    fetch("https://anapioficeandfire.com/api/books").then((response) => response.json()).then((data)=> {
    data.map(book => {
        const bookName = book.name;
        if(bookName.toUpperCase().startsWith(startingLike.toUpperCase())){
            const markup = `<p>${book.name}</p>`
            booksList.insertAdjacentHTML('afterbegin',markup)
        }
        
    })
})
}
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

const signupform = document.getElementById("signupform");

function displayLogIn(event) { 
    event.preventDefault();
 const signUp = document.getElementById('signUp');
  signUp.style.display = "none";
  const logIn = document.getElementById("logIn");
    logIn.style.display = "inline";

}
signupform.addEventListener('submit', displayLogIn);

//making the about us icon active

function displayAboutUsDetails() {

    const contactUsForm = document.getElementById('contactUsForm')
contactUsForm.style.display = "none"
    
    const booksList = document.getElementById('container');
    booksList.style.display = "none"

    const searchArea = document.getElementById('searchArea');
    searchArea.style.display = "none"

    const aboutUs = document.getElementById('aboutUs');
    aboutUs.style.display = "inline";
    
    const booksDetails = document.getElementById('booksDetails');
    booksDetails.style.display = "none";
}
const aboutUsListItem = document.getElementById('aboutUsListItem');
aboutUsListItem.addEventListener('click',displayAboutUsDetails);

//making the home icon active
const home = document.getElementById('home');
function displayHomeDetails() {
    const searchArea = document.getElementById('searchArea');
    searchArea.style.display = "block"

    const booksList = document.getElementById('container');
    booksList.style.display = "inline";

    const aboutUs = document.getElementById('aboutUs');
    aboutUs.style.display = "none";
    
    const booksDetails = document.getElementById('booksDetails');
    booksDetails.style.display = "block";

  const contactUsForm = document.getElementById('contactUsForm')
  contactUsForm.style.display = "none"
}
home.addEventListener('click',displayHomeDetails);

//making the contact us icon active
const contactUsListItem = document.getElementById('contactUsListItem')

function makeContactUsActive() {

const contactUsForm = document.getElementById('contactUsForm');
contactUsForm.style.display = "inline";

const booksList = document.getElementById('container');
    booksList.style.display = "none"

    const searchArea = document.getElementById('searchArea');
    searchArea.style.display = "none"

const aboutUs = document.getElementById('aboutUs');
    aboutUs.style.display = "none";
}


contactUsForm.addEventListener('submit',function(event) {
    event.preventDefault();

});
contactUsListItem.addEventListener('click',makeContactUsActive);






    
