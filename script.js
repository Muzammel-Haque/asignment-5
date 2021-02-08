fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
.then(res => res.json())
.then(data => displayNames(data))

const displayNames = mealItems =>{
        const displayItems = document.getElementById('display-items');

        const mealItemNames = mealItems.meals;
        for (let i = 0; i < 8; i++) {
            const shownNames = mealItemNames[i];
            console.log(shownNames)
            const mealsDiv =document.createElement('div');
            mealsDiv.className ='meals';
            const mealsInfo = `
            <img class="menu-img" src="${shownNames.strMealThumb}" alt="">
            <h6 class="menu-name">${shownNames.strMeal}</h6>
        `
        mealsDiv.innerHTML = mealsInfo;
        displayItems.appendChild(mealsDiv);
        }
       
}