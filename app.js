const mainCard = document.querySelector('main')
const input = document.querySelector('#input')
const selectId = document.querySelector('#select-id')
const darkMode = document.querySelector('.header-p')

  const themeLink = document.querySelector('link[href="style.css"]');

  darkMode.addEventListener('click', () => {
  themeLink.href = "dark.css";
});

fetch(`https://restcountries.com/v3.1/all`)
 .then(response => response.json())
 .then(data =>  displayContent(data))



 function displayContent (data){
    mainCard.innerHTML = ""
    data.forEach((element) => {
        const {name:{common},flags:{png},population,continents,capital} = element
        mainCard.innerHTML +=
        `
        <div class=card>
        <a href="detailed.html?common=${common}" >
        <img src="${png}" alt="image" class=image>
        <h1 class=country>${common}</h1>
        <p>Population: ${population}</p>
        <p>Region: ${continents}</p>
        <p>Capital: ${capital}</p>
        </div>
        `
        
    });
 }
/*   displayContent()  */


 input.addEventListener('input', (e) =>{ 
    e.preventDefault(); 
    const inputValue = input.value 
    searchCountries(inputValue) 
    
}) 
    async function searchCountries(name){ 
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`) 
        const results = await data.json() 
            displayContent(results) 
    }


  selectId.addEventListener('change',(e)=>{
    e.preventDefault()
        const selectInput = e.target.value
            searchRegion(selectInput)    
  })   

    async function searchRegion(continents){
        const data = await fetch(`https://restcountries.com/v3.1/region/${continents}`)
         const results = await data.json()
            displayContent(results)
    } 


    