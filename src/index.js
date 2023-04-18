import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;
var debounce = require('lodash.debounce');

const refs = {
  searchInput: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryItem: document.querySelector('.country-item'),
  countryInfo: document.querySelector('.country-info'),
};
refs.searchInput.addEventListener('input', debounce(search, DEBOUNCE_DELAY));
// console.log(refs.countryItem)

function search (event){
  event.preventDefault();
  const inputValue = event.target.value.trim();

 fetchCountries(inputValue)
  .then(response => { 
    console.log(response);
      if (response.status === 404){
        Notify.failure('Oops, there is no country with that name')
        // refs.searchInput.value = "";
      }
      else if (response.length > 10){
        Notify.info('Too many matches found. Please enter a more specific name.');
      } 
      else if(response.length >= 2 && response.length <= 10){
        
        const markup = response.map(element => {
          return markupCountryList(element)
        }).join("");
        updateCountryList (markup)
      }  
      else if (response.length === 1){
        
        
        const markupInfo = response.map(element => {
          return markupCountryInfo(element)
        }).join("");
        updateCountryInfo(markupInfo);
      };
  }).catch(err => {console.log(err)});
};

function markupCountryList({flags, name}){
  return`
          <li class="country-item"><img src =${flags.svg} alt='flags of ${name.official}' width=60 height=40/><h2 class="country-name">${name.common}</h2></li>
        `;
};
function markupCountryInfo({flags, name, capital, population, languages}){
  return`
          <div class="country-item"><img src =${flags.svg} alt='flags of ${name.official}' width=60 height=40/><h2 class="country-name">${name.common}</h2></div>
          <h3 class="text-title">Capital: <span class="data-title">${capital}</span></h3>
          <h3 class="text-title">Population: <span class="data-title">${population}</span></h3>
          <h3 class="text-title">Languages: <span class="data-title">${Object.values(languages)}</span></h3>
        `;  
};

function updateCountryList (markupCountryList){
  refs.countryInfo.innerHTML = "";
  refs.countryList.innerHTML = markupCountryList; 
};
function updateCountryInfo (markupCountryInfo){
  refs.countryList.innerHTML = "";
  refs.countryInfo.innerHTML = markupCountryInfo;
};

