window.addEventListener("DOMContentLoaded", () => {
    const articlesList = document.getElementById("articles-list");
    const articles = [
        { title: "My First Article", link: "#" },
        { title: "Web Development Tips", link: "#" },
    ];

    if (articlesList) {
        articles.forEach(article => {
            const articleItem = document.createElement("div");
            articleItem.className = "article-item fade-in delay-1";
            articleItem.innerHTML = `<a href="${article.link}" class="article-link">${article.title}</a>`;
            articlesList.appendChild(articleItem);
        });
    }

    // Adding scroll event listener for header background change
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }
    });
});