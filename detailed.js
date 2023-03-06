document.addEventListener("DOMContentLoaded",()=>{
    let currentUrlStr = window.location.href;
    let currentUrl = new URL(currentUrlStr);
    let common = currentUrl.searchParams.get("common");
    const countryDetails = document.querySelector('.country-details')
    const backBtns = document.querySelector('.button')
    
  /*   backBtns.addEventListener('click',(e)=>{
        e.preventDefault()
        const back=backBtns.target
        back.innerHTML+=
        `
        
        `
    }) */

    infoCountries(common)

    function displayContent (element){
            console.log(element);
            const {name:{common},altSpellings,flags:{png},population,continents,capital,    
                subregion,tld,currencies,languages,borders} = element[0]
            countryDetails.innerHTML = ""
            countryDetails.innerHTML +=
            `
            <div class=card>
            <img src="${png}" alt="image" class=image>
            </div>
            <div class=cardparent>
            <div class=card2>
            <h1 class=country>${common}</h1>
            <p><b>Native Name:</b> ${altSpellings[1]}</p>
            <p><b>Population:</b> ${population}</p>
            <p><b>Region:</b> ${continents}</p>
            <p><b>Sub Region:</b> ${subregion}</p>
            <p><b>Capital:</b> ${capital}</p>
            <div class=card21>
            <p class=bordercountries><b>Border Countries:</b></p>
            </div>
            </div>
            <div class=card3>
            <p><b>Top Level Domain:</b> ${tld}</p>
            <p><b>Currencies:</b> ${Object.values(currencies)[0].name}</p>
            <p><b>Languages:</b> ${Object.values(languages).join(', ')}</p>
            </div>
            </div>
            `
            displayBorders(borders)
        ;
     }


async function infoCountries(name){ 
    console.log(name);
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`) 
        const results = await data.json() 
        displayContent(results) 
    }

    

    async function displayBorders(border){
        const displayBordersCountry = document.querySelector('.bordercountries')
       try{ border.forEach(async code => {
            const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            const res = await data.json()
            const {name: {
                common
            }} = res[0]


            displayBordersCountry.innerHTML+= 
            `
            <a href="detailed.html?common=${common}"><button class="border-country-btn">${common}</button></a>
            `
        })
    } catch (err){
        console.log(err.message);
    }
    } 
})







