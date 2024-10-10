window.addEventListener("DOMContentLoaded", () => {
    const articlesList = document.getElementById("articles-list");
    const articles = [
        { title: "My First Article", link: "#" },
        { title: "Web Development Tips", link: "#" },
    ];

    if (articlesList) {
        articles.forEach(article => {
            const articleItem = document.createElement("div");
            articleItem.className = "article-item";
            articleItem.innerHTML = `<a href="${article.link}" class="article-link">${article.title}</a>`;
            articlesList.appendChild(articleItem);
        });
    }
});