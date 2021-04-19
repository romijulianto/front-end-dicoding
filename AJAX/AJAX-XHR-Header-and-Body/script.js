const xhr = new XMLHttpRequest();

xhr.onload = function() {
  document.body.innerText = this.responseText;
}

xhr.onerror = function() {
  console.log("Ups something error");
}

xhr.open("POST", "https://web-server-book-dicoding.appspot.com/add");

// menambahkan properti pada header request
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345")

// Mendapatkan angka acak agar meminimalisir duplikasi data
const randomNumber = Math.floor(Math.random() * 1000) + 1;

const book = {
  id: randomNumber,
  title: `Book ${randomNumber}`,
  author: `Author-${randomNumber}`
}

xhr.send(JSON.stringify(book));