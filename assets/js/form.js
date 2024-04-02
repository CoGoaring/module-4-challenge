const userName = document.getElementById(`#userName`);
const title = document.getElementById(`#title`);
const content = document.getElementById(`#content`);
const form = {
    userName: "",
    title: "",
    content: ""
};

function formSubmit (event) {
    event.preventDefault();
    // form.userName = userName;
    // form.title = title;
    // form.content = content;
    localStorage.setItem("username", JSON.stringify(userName.value));
    localStorage.setItem("title", JSON.stringify(title.value));
    localStorage.setItem("content", JSON.stringify(content.value));
}

// function movePages (event) {
//     event.preventDefault();
//     location.href = "./blog.html";
// }