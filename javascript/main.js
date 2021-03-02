const button = document.getElementById("btn");
const drinkImage = document.getElementById("image");
const glassType = document.getElementById("glass-type");
const drinkName = document.getElementById("drink-name");
const ingredient = document.getElementById("ingredient-1");
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
        instructions.innerHTML = data.drinks[0].strInstructions
        console.log(data)
    }); 
}