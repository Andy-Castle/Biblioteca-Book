const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
//Form part
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputImage = document.getElementById("image");
const inputRead = document.getElementById("read");
const buttonAdd = document.getElementById("add");
//show books
const showBooksContainer = document.getElementById("books");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

buttonAdd.addEventListener("click", addBookToLibrary);

function cleanForm() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputImage.value = "";
  inputRead.checked = false;
  dialog.close();
}

const myLibrary = [];

class Book {
  constructor(title, author, pages, image, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.image = image;
    this.read = read;
  }
}

function addBookToLibrary() {
  if (inputRead.checked) {
    inputRead.value = true;
  } else {
    inputRead.value = false;
  }
  myLibrary.push(
    new Book(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputImage.value,
      inputRead.value
    )
  );
  cleanForm();
  showBooks();
  console.log(myLibrary);
}

const inversorInteligente = new Book(
  "El inversor inteligente",
  "Benjamin Graham",
  624,
  "https://m.media-amazon.com/images/I/71o-fj+FpDL._AC_UF894,1000_QL80_.jpg",
  false
);

const unPasoPorDelanteDeWallstreet = new Book(
  "Un paso por delante de Wall Stree",
  "Peter Lynch",
  368,
  "https://m.media-amazon.com/images/I/515YbevffDL.jpg",
  false
);

const psicologiaDelDinero = new Book(
  "La psicología del dinero",
  "Morgan Housel",
  312,
  "https://m.media-amazon.com/images/I/71A8FH9qVKL._AC_UF894,1000_QL80_.jpg",
  false
);

const principiosParaElExito = new Book(
  "Principios para el éxito",
  "Ray Dalio",
  600,
  "https://m.media-amazon.com/images/I/412fPm-MOGL._SY342_.jpg",
  false
);

myLibrary.push(
  inversorInteligente,
  unPasoPorDelanteDeWallstreet,
  psicologiaDelDinero,
  principiosParaElExito
);

function showBooks() {
  myLibrary.forEach((elem) => {
    showBooksContainer.innerHTML += `
    <div class="individual-book">
    <h1>${elem.title}</h1>
    <h4>${elem.author}</h4>
    <img src=${elem.image} alt=${elem.title}/>
    <p>Pages: ${elem.pages}</p>
    <p>Read it? : ${elem.read ? "Yes" : "No"}</p>
    </div>
    `;
  });
}

showBooks();
