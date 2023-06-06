
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

import Notiflix from 'notiflix';

const refs = {
    breedSelect: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
    catImage: document.querySelector('.cat-image'),
    catName: document.querySelector('.cat-name'),
    catDescription: document.querySelector('.cat-description'),
    catTemperament: document.querySelector('.cat-temperament'),
};
 
 breedSelect.addEventListener('change', onChangeSelect);
 fetchAndRenderBreeds();

 function onChangeSelect(event) {
  loader.classList.remove('unvisible');
  catInfo.innerHTML = '';
  catDescription.innerHTML = '';
  const breedId = event.target.value;
  console.log('breedId: ', breedId);
  fetchCatByBreed(breedId)
    .then(breed => renderBreedDesc(breed))
    // .then(breed => console.log(breed))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => loaderEl.classList.add('unvisible'));
}


breedSelect.addEventListener('change', onChangeSelect);
  
