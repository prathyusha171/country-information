async function searchCountry() {
    const searchInput = document.getElementById('searchInput').value;
    const countryInfoDiv = document.getElementById('countryInfo');

    try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${searchInput}?
    fullText=true`);
    const data = await response.json();
    console.log(response)

    if (data.status === 404) {
    countryInfoDiv.innerHTML = '<p>Country not found</p>';
    } else {
    const country = data[0];
    const flag = country.flags.svg;
    const capital = country.capital[0];
    const population = country.population ;
    const languages = Object.values (country.languages).join(', '); // Joining multiple
    languages
    countryInfoDiv.innerHTML =` 
    <h2>${country.name.common}</h2>
    <img src="${flag}" alt="Flag" width="100">
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>Population:</strong> ${population}</p>
    <p><strong>Languages:</strong> ${languages}
    </p>`;
}
} 
catch (error) {
console.log('Error fetching data', error);
countryInfoDiv.innerHTML = '<p>Something went wrong</p>';
    }
    }