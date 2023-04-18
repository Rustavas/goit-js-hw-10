export {fetchCountries};
const ENDPOINT = "https://restcountries.com/v3.1";
const fields = 'fields=name,capital,population,flags,languages';


function fetchCountries(name){
  return fetch(`${ENDPOINT}/name/${name}?${fields}`)
  .then(response => {return response.json()}
  
  );
};
