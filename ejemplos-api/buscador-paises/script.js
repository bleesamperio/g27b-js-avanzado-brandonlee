const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const countryList = document.getElementById("country-list")

function searchCountries(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {//Recibir de lista de paises
        if(data.status =='404'){
            countryList.innerHTML = "<p>Country not found</p>"
        }else{
            countryList.innerHTML = ''
            data.forEach(country => {
                const countryCard = document.createElement('div')
                const currencies = Object.keys(country.currencies)//EUR
                const name_currenciess = currencies.map(key => country.currencies[key].name).join()
                const languages = Object.values(country.languages).join("")

                console.log(name_currenciess)
                console.log(languages)

                countryCard.innerHTML = `
                <h2>${country.name.common}</h2>
                <h3>${country.name.official}</h3>
                <p>Capital: ${country.capital.toString()}</p>
                <p>Currencies: ${name_currenciess}</p>
                <p>Languages: ${languages}</p>
                <img src='${country.flags.png}' height=130px width=200px />

                ` //Cierre de texto concatenado
                countryList.appendChild(countryCard)
            });
        }
    })
}


searchButton.addEventListener('click', function () {
    const countryText = searchInput.value.trim()
    console.log(countryText);

    if(countryText.length > 2){
        searchCountries(countryText)
    }else{
        countryList.innerHTML = '<p>Enter at least 2 characters to search</p>'
    }
})