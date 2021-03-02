const button = document.getElementById("btn");
const drinkImage = document.getElementById("image");
const glassType = document.getElementById("glass-type");
const drinkName = document.getElementById("drink-name");
const ingredient = document.getElementById("ingredient-1");

button.addEventListener("click", (e) => {
    e.preventDefault();
    getData();
})

url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

const getData = () => {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        drinkName.innerHTML = data.drinks[0].strDrink
        glassType.innerHTML = data.drinks[0].strGlass
    }); 
}