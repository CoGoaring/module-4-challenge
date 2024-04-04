const mainEl = document.querySelector(`main`);

// parse data (make sure there is data)
const username = JSON.parse(localStorage.getItem("username"));
const title = JSON.parse(localStorage.getItem("title"));
const content = JSON.parse(localStorage.getItem("content"));

// const blogs = [];
const usernames = [];
const titles = [];
const contents = [];

const getSavedBlogs = function() {
    // only need to check one since blogs cant be posted unless all values are filled
    if (localStorage.getItem('usernames') !== null) {
        usernames.push(JSON.parse(localStorage.getItem('usernames')));
        titles.push(JSON.parse(localStorage.getItem('titles')));
        contents.push(JSON.parse(localStorage.getItem('contents')));
    } else {/*Do Nothing*/}
    usernames.push(username);
    titles.push(title);
    contents.push(content);
}

// create blog post with data 
const renderBlogs = function () {
    // only need to check one since blogs cant be posted unless all values are filled
    for (let i=0; i<usernames.length; i++) {
        const blogSection = document.createElement("section");
        const blogTitle = document.createElement("h3");
        const blogContent = document.createElement("p");
        const blogUsername = document.createElement("p");

        blogTitle.textContent = titles[i];
        blogContent.textContent = contents[i];
        blogUsername.textContent = usernames[i];

        blogSection.appendChild(blogTitle);
        blogSection.appendChild(blogContent);
        blogSection.appendChild(blogUsername);

        console.log(blogSection);
            
        mainEl.appendChild(blogSection);
    }
    // mainEl.appendChild(blogSection);
}

const saveBlogs = function () {
    localStorage.setItem('usernames', JSON.stringify(usernames));
    localStorage.setItem('titles', JSON.stringify(titles));
    localStorage.setItem('contents', JSON.stringify(contents));
}

getSavedBlogs();

renderBlogs();

saveBlogs();