

const API_KEY = 'live_DIcXyU8WF1CXivY4YCaad0VreVDQLCCNRfThmUxw2Q3oNccmMocAlzMYnYuyiYBQ';
const BASE_URL = 'https://api.thecatapi.com/v1/images';
const BREEDS = 'https://api.thecatapi.com/v1/breeds'; 



const fetchBreeds = () => {
    return fetch(`${BREEDS}?api_key=${API_KEY}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  };
  

  const fetchCatByBreed = breedId => {
    return fetch(`${BREEDS}/${breedId}?api_key=${API_KEY}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  };
    

