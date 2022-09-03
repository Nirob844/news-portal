// call category api
const loadCategory = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    try {
        const response = await fetch(url)
        const data = await response.json();
        return data.data.news_category;
    } catch (error) {
        console.log(error)
    }

}
// display category 
const categoryDisplay = async () => {
    const data = await loadCategory();
    data.forEach(category => {
        let categorySection = document.getElementById('category-area');
        const createCategory = document.createElement('div')
        createCategory.innerHTML = `
        <div class="d-grid gap-2 mb-1">
            <button onClick="loadNews(${category.category_id})" class="btn btn-outline-dark" type="button">${category.category_name}</button>
        </div>
        `
        categorySection.appendChild(createCategory);
    })
}
categoryDisplay()