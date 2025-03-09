//!1. Intro to JSON, JSON structure, parse, stringify

// Normal object
const person = {
  name: "Hena",
  age: 30,
  friend: ["hero alom", "Korim"],
  isMarrid: false,
};
/* 
Note: when dynamically data fetching the data was not in object form. They are in JSON form.
*/

// JSON = Javascript object notation (following is the JSON format)

/* const person1 = {
  "name": "Hena",
  "age": 30,
  "friend": ["hero alom", "Korim"],
}; */

//! i. convert an object to JSON format using JSON.stringify()

const newPerson = JSON.stringify(person);
console.log(newPerson); //{"name":"Hena","age":30,"friend":["hero alom","Korim"],"isMarrid":false}

/* Note: number and boolean are not strigify during JSON data conversion*/

//! ii. convert JSON format to plain object using JSON.parse()
console.log(JSON.parse(newPerson)); //{name: 'Hena', age: 30, friend: Array(2), isMarrid: false}

//! 2.JSON Placeholder, get data, display data
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(
    (response) => response.json()
    //console.log(response) or console.log(response.json())
  )
  .then((data) => console.log(data));
/* 
  Note: এখানে https://jsonplaceholder.typicode.com/todos/1 হল API.এখানে fetch দিয়ে API call করা হয়েছে। যা server এ যেয়ে data টা দিবে। fetch এর মাধ্যমে একটা promise আসে যা .then() এর মাধ্যমে পাই। এই promise টা resolve অথবা reject হতে পারে। যদি reject হয় তাহলে error দিবে। আর resolve হলে তা response এ চলে যায়। আর এই response কে যদি console.log(response) করা হয় তাহলে একটা object Response আসে। আর যদি console.log(response.json() তাহলে একটা promise আসে। এই promise টাই then() এর মাধ্যমে plain object এ convert হয়ে data এর মাধ্যমে receive করেছি।
  */

//   Following is the example of data fetching using functional button
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
    res.json().then((data) => console.log("Button Clicked data loading ", data))
  );
};
// Button Clicked data loading  {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
