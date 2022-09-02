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

    const uniqueArray = [];

    for (const news of category) {
        console.log(news);
        // console.log(uniqueArray.indexOf(news.news_category[0]))

        // uniqueArray.push(data);

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `<a>${data.news_category[0].category_name}</a>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>`;
        menu.appendChild(newsDiv);

    }

    //  console.log(uniqueArray)
}
setAllMenu();