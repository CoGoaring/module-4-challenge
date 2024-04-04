const mainEl = document.querySelector(`main`);

// parse data (make sure there is data)
const username = JSON.parse(localStorage.getItem("username"));
const title = JSON.parse(localStorage.getItem("title"));
const content = JSON.parse(localStorage.getItem("content"));

const blogs = [];

const getSavedBlogs = function() {
    if (localStorage.getItem('blogs') !== null) {
        blogs.push(JSON.parse(localStorage.getItem('blogs')));
    } else {/*Do Nothing*/}
}

console.log(username);
console.log(title);
console.log(content);

// create blog post with data 
const renderBlogs = function () {
    const blogSection = document.createElement("section");
    const blogTitle = document.createElement("h3");
    const blogContent = document.createElement("p");
    const blogUsername = document.createElement("p");

    blogTitle.textContent = title;
    blogContent.textContent = content;
    blogUsername.textContent = username;

    blogSection.appendChild(blogTitle);
    blogSection.appendChild(blogContent);
    blogSection.appendChild(blogUsername);

    blogs.push(blogSection);
    localStorage.setItem(`blogs`, blogs);

    for (let i=0; i<blogs.length; i++) {
        mainEl.appendChild(blogs[i]);
    }
    // mainEl.appendChild(blogSection);
}



getSavedBlogs();

renderBlogs();