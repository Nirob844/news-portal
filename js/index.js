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
// const displayNews = async () => {


//     const data = await loadNews();
//     const category = data.news_category;
//     console.log(category);
// }

const loadNewsDetail = () => {

    const url = `https://openapi.programming-hero.com/api/news/category/01`

    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsDetail(data.data));
}

const displayNewsDetail = newses => {
    //  console.log(newses);
    const newsDetail = document.getElementById('news-detail');
    for (const news of newses) {
        console.log(news);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card mb-3" style="max-width: 100%;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
        `
        newsDetail.appendChild(div);
    }

}

loadNewsDetail();
setAllMenu();
displayNewsDetail();
