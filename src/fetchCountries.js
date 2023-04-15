export {fetchCountries};
const ENDPOINT = "https://restcountries.com/v3.1";
const fields = 'fields=name,capital,population,flags,languages';


function fetchCountries(name){
  return fetch(`${ENDPOINT}/name/${name}?${fields}`)
  .then(response => {return response.json()}
  // .then(response => console.log(response))
  // .then(({name}) => console.log(name.official))
  );
};
// .catch(error =>{console.log(error)})
// then(response => response.json().then(response => response[0]).then(({capital}) =>console.log(capital)));