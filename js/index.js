const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
}

const setAllMenu = async () => {


    const data = await loadNews();
    const category = data.news_category;
    // console.log(category);

    const menu = document.getElementById("all-menu");

    for (const news of category) {
        //  console.log(news.category_name);

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');

        newsDiv.innerHTML = `<a>${news.category_name}</a>
        `;

        menu.appendChild(newsDiv);

    }
}
const displayNews = async () => {


    const data = await loadNews();
    const category = data.news_category;
    console.log(category);
}


setAllMenu();
displayNews();