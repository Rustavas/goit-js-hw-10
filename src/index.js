import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;
// ================================

const refs = {
  searchInput: document.getElementById('search-box'),
};
refs.searchInput.addEventListener('input', search);


function search (){

};

fetchCountries()