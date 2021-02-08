document.getElementById('search-btn').addEventListener('click', () => {
    const inputBtn = document.getElementById('input-btn').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputBtn}`)
        .then(res => res.json())
        .then(data => displayNames(data))
        .catch(error => errorMassage('No results found'));

    const displayNames = mealItems => {
        const displayItems = document.getElementById('display-items');
        displayItems.innerHTML = '';
        const mealItemNames = mealItems.meals;
        mealItemNames.forEach(shownNames => {
            console.log(shownNames)
            const mealsDiv = document.createElement('div');
            mealsDiv.className = 'meals';
            const mealsInfo = `
                    <img onclick="mealsDetail('${shownNames.strMeal}')" class="menu-img" src="${shownNames.strMealThumb}" alt="">
                    <h6 class="menu-name">${shownNames.strMeal}</h6>
                `
            mealsDiv.innerHTML = mealsInfo;
            displayItems.appendChild(mealsDiv);
        });

    }
})

const mealsDetail = name =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealsDetail(data.meals[0]))
}

const renderMealsDetail = names =>{
    console.log(names)
    const mealDetails = document.getElementById('meal-detail');
    mealDetails.innerHTML = `
        <img class="detail-img" src="${names.strMealThumb}" alt="">
        <h4 class="menu-name">${names.strMeal}</h4>
        <h5> Ingredients</h5>
        <ul id="ingredients">
            <li>${names.strIngredient1} </li>
            <li>${names.strIngredient2}</li>
            <li>${names.strIngredient3}</li>
            <li>${names.strIngredient4}</li>
            <li>${names.strIngredient5}</li>
            <li>${names.strIngredient6}</li>
            <li>${names.strIngredient7}</li>
            <li>${names.strIngredient8}</li>
        </ul>
    `
}

const errorMessage = error =>{
    const errorTag = document.getElementById('error-text');
    errorTag.innerText = error;
}
 
