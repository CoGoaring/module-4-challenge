const mainEl = document.querySelector(`main`);

// parse data (make sure there is data)
const username = JSON.parse(localStorage.getItem("username"));
const title = JSON.parse(localStorage.getItem("title"));
const content = JSON.parse(localStorage.getItem("content"));
// returns empty array if null
const namesArray = JSON.parse(localStorage.getItem('usernames') || "[]");
const titlesArray = JSON.parse(localStorage.getItem('titles')  || "[]");
const contentsArray = JSON.parse(localStorage.getItem('contents')  || "[]");

const usernames = [];
const titles = [];
const contents = [];

const getSavedBlogs = function() {
    namesArray.push(username);
    titlesArray.push(title);
    contentsArray.push(content);

    usernames.push(namesArray);
    titles.push(titlesArray);
    contents.push(contentsArray);

}

// create blog post with data 
const renderBlogs = function () {
    // only need to check one since blogs cant be posted unless all values are filled
    for (let i=0; i<namesArray.length; i++) {
        const blogSection = document.createElement("section");
        const blogTitle = document.createElement("h3");
        const blogContent = document.createElement("p");
        const blogUsername = document.createElement("h4");

        blogTitle.textContent = titlesArray[i];
        blogContent.textContent = contentsArray[i];
        blogUsername.textContent = `Posted by: ${namesArray[i]}`;

        blogSection.appendChild(blogTitle);
        blogSection.appendChild(blogContent);
        blogSection.appendChild(blogUsername);

        console.log(blogSection);
            
        mainEl.appendChild(blogSection);
    }
}

const saveBlogs = function () {
    for (let i=0; i<usernames.length; i++) {
        localStorage.setItem('usernames', JSON.stringify(namesArray));
        localStorage.setItem('titles', JSON.stringify(titlesArray));
        localStorage.setItem('contents', JSON.stringify(contentsArray));
    }
}

getSavedBlogs();

renderBlogs();

saveBlogs();