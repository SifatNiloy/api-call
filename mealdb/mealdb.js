const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log(searchText);
  if (searchText == '') {
    const p = document.createElement('p');
    p.innerHTML = `<h2> please write something to display</h2>`;
    searchField.appendChild(p);
    console.log('please write something to display')
  }
  else {
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
      `
    // console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.meals));
  }

}
const displaySearchResult = meals => {

  console.log(meals);


  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';

  meals.forEach(meal => {
    // console.log(meal)
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
                
        <div class="col">
          <div class="card" onclick="loadMealDetail(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
        </div>
        `
    searchResult.appendChild(div);

  })


}
const loadMealDetail = mealId => {
  console.log(mealId)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
    .then(res => res.json())
    .then(data => showMealDetails(data.meals[0]));
}
const showMealDetails = meal => {
  console.log(meal)
  const mealdetails = document.getElementById('meal-details');
  mealdetails.textContent = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
    <div class="card " >
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 300)}.</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
  mealdetails.appendChild(div);

}