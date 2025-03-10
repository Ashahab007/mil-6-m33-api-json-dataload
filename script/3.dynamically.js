const loadUserData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => showData(data));
};

const showData = (users) => {
  //   console.log(users);
  let userContainer = document.getElementById("users-lists");
  for (let user of users) {
    console.log(user);

    let li = document.createElement("li");
    li.innerText = user.name;
    userContainer.append(li);
  }
};
