document.getElementById('search-btn').addEventListener('click', ()=>{
    const inputBtn = document.getElementById('input-btn').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputBtn}`)
    .then(res => res.json())
    .then(data => displayNames(data))

    const displayNames = mealItems =>{
            const displayItems = document.getElementById('display-items');

            const mealItemNames = mealItems.meals;
            mealItemNames.forEach(shownNames => {
                console.log(shownNames)
                    const mealsDiv =document.createElement('div');
                    mealsDiv.className ='meals';
                    const mealsInfo = `
                    <img class="menu-img" src="${shownNames.strMealThumb}" alt="">
                    <h6 class="menu-name">${shownNames.strMeal}</h6>
                `
                mealsDiv.innerHTML = mealsInfo;
                displayItems.appendChild(mealsDiv);
            });
        
    }
})

