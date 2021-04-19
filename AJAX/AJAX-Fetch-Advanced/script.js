// Mendapatkan angka acak agar meminimalisir duplikasi data
const randomNumber = Math.floor(Math.random() * 1000) + 1;

fetch("https://web-server-book-dicoding.appspot.com/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": "12345"
  },
  body: JSON.stringify({
    id: randomNumber,
    title: `Title - ${randomNumber}`,
    author: `Author - ${randomNumber}`
  })
})
.then(response => {
  return response.json();
})
.then(responseJson => {
  console.log(responseJson);
})
.catch(error => {
  console.log(error);
})