export {fetchCountries};
const ENDPOINT = "https://restcountries.com/v3.1";
const fields = 'fields=name.official, capital, population, flags.svg, languages';

function fetchCountries(usa){
  return fetch('${ENDPOINT}/name/${name}')
  .then((data) => data.json()).then(({capital}) => console.log(capital)).catch(error => console.log(error));
};
  