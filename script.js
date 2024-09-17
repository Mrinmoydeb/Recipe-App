const serch_box = document.querySelector('.searchbox');
const serch_button = document.querySelector('.searchbutton');
const read_more = document.querySelector('.button');
const recipe_title = document.querySelector('.recipe-title');
const grid_box = document.querySelector('.grids');


const fetchRecipes = async (val, div) => {
  try {
    recipe_title.textContent = "Fetching recipes..."
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
    const res = await data.json();
    recipe_title.textContent = ""
    res.meals.forEach(meal => {
      console.log(meal);
   
      let div = document.createElement("div");
      div.classList.add("bg-white", "p-1", "rounded", "text-center");
      div.innerHTML = `
        <img class="rounded w-full h-40 object-cover" src="${meal.strMealThumb}" alt="image"/>
              <h1 class="text-2xl">${meal.strMeal}</h1>
              <p>
                <span class="font-bold">${meal.strArea}</span> <span>Dish</span>
              </p>
              <p>
                Belongs to
                <span class="font-bold">${meal.strCategory}</span> category
              </p>
              <div
                class="bg-orange-600 p-2 mx-6 rounded font-bold text-[#fff] cursor-pointer my-2 button"
              >
                Read more
              </div> `
              grid_box.appendChild(div);
    })


  } catch (error) {
    recipe_title.textContent = "Error in Fetching recipes..."
  }
}

serch_button.onclick = (e) => {
  e.preventDefault()
  let inputVal = serch_box.value.trim()
  if(!inputVal){
    recipe_title.textContent= "Type the meal you want";
    return;
  }
  fetchRecipes(inputVal, ()=>{})

}