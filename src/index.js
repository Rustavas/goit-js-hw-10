import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;


const refs = {
  searchInput: document.getElementById('search-box'),
};
refs.searchInput.addEventListener('input', search);


function search (event){
event.preventDefault();
 const inputValue = event.target.value.trim();

 const searchInfo = fetchCountries(inputValue)
 .then(response => {
  for (const element of response ){
    console.log(element.name.common)
  }
 })
 .catch(onError);
//  .finally(.reset);
 console.log(searchInfo)

//  if (searchInfo.length === 0) throw new error("No data!") ;
};


function onError(err){
  console.log(err)
}
   
