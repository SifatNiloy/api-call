function loadCountries() {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
function displayCountries(countries) {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p> ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    })
}
const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
    // console.log(url)
}
const displayCountryDetail = country => {

    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>name: ${country.name}</h2>
    <p>population:${country.population}</p>
    <img width="100px" src="${country.flag}"<img>
    `
    console.log(country);
}