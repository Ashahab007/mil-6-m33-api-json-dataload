//! 4. Dynamically display loaded data in Website

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

//! 5. Load post and display on the website

const loadPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => showPost(data));
};

const showPost = (posts) => {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    // console.log(Object.keys(post));
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <h4>ID: ${post.id}</h4>
    <h4>Title: <span>${post.title}</span> </h4>
    <h4>Post: <span>${post.body}</span></h4>
    `;
    postContainer.append(div);
  }
  let postButton = document.getElementById("btn-post");
  postButton.setAttribute("disabled", true);
};
