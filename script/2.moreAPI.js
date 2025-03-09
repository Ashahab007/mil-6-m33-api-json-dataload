//! 3. More API Example using user
const handleLoadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("More User", data);
      displayData(data);
    });
};

const displayData = (users) => {
  console.log(users[0]);
};
