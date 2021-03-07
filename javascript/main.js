const button = document.getElementById("btn");
const drinkImage = document.getElementById("image");
const glassType = document.getElementById("glass-type");
const drinkName = document.getElementById("drink-name");
const ingredient1 = document.getElementById("ingredient-1");
const ingredient2 = document.getElementById("ingredient-2");
const ingredient3 = document.getElementById("ingredient-3");
const ingredient4 = document.getElementById("ingredient-4");
const ingredient5 = document.getElementById("ingredient-5");
const ingredient6 = document.getElementById("ingredient-6");
const ingredient7 = document.getElementById("ingredient-7");
const instructions = document.getElementById("instructions");

button.addEventListener("click", (e) => {
    e.preventDefault();
    getData();
})

url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

const getData = () => {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        drinkImage.src = data.drinks[0].strDrinkThumb
        drinkName.innerHTML = data.drinks[0].strDrink
        glassType.innerHTML = data.drinks[0].strGlass
        ingredient1.textContent = data.drinks[0].strIngredient1
        ingredient2.innerHTML = data.drinks[0].strIngredient2
        ingredient3.innerHTML = data.drinks[0].strIngredient3
        ingredient4.innerHTML = data.drinks[0].strIngredient4
        ingredient5.innerHTML = data.drinks[0].strIngredient5
        ingredient6.innerHTML = data.drinks[0].strIngredient6
        ingredient7.innerHTML = data.drinks[0].strIngredient7
        instructions.innerHTML = data.drinks[0].strInstructions
    }); 
}