const buttonEl = document.querySelector(`#formButton`);

console.log(`hello`);


// handle form submissions
const formSubmit = function (event) {
    event.preventDefault();

    console.log(`hellow`);
    // create form values
    const form = {
        userName: document.querySelector(`#userName`).value.trim(),
        title: document.querySelector(`#title`).value.trim(),
        content: document.querySelector(`#content`).value.trim()
    };
    let check = false;
    if (form.userName === "" ||
        form.title === "" ||
        form.content === "") {
        console.log("need to fill out your post!")
    } else {
        check = true;
    }

    localStorage.setItem("username", JSON.stringify(form.userName));
    localStorage.setItem("title", JSON.stringify(form.title));
    localStorage.setItem("content", JSON.stringify(form.content));

    if (check) {
        window.location.href="./blog.html";
    }
}


document.querySelector(`#form1`).addEventListener(`submit`, formSubmit);
