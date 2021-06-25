/* FETCH */
// 1. install node-fetch npm install
// 2. add package.json

/* fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(result));
 */

var urlencoded = new URLSearchParams();
urlencoded.append("geoloc", "123,123");
urlencoded.append("status", "ACTIVE");
urlencoded.append("label", "entrance");

var requestOptions = {
  method: "GET",
  body: urlencoded,
  redirect: "follow",
};

fetch("https://ws-staging.staysafe.ph/api/v1/integrator/qr", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

// /*   ASYNC & AWAIT */

// import fetch from "node-fetch";
// const photos = [];

// async function photoUpload() {
//   let uploadStatus = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       photos.push("picture");
//       resolve("Photo uploaded");
//     }, 3000);
//   });

//   let result = await uploadStatus;
//   console.log(result);
//   console.log(photos.length);
// }

// photoUpload();

// /* challenge 2 */

// /* async function randomJoke() {
//   let response = await fetch("https://api.chucknorris.io/jokes/random");
//   let data = await response.json();
//   console.log(data.value);
// }
// randomJoke(); */
