var API_KEY="live_DIcXyU8WF1CXivY4YCaad0VreVDQLCCNRfThmUxw2Q3oNccmMocAlzMYnYuyiYBQ",BASE_URL="https://api.thecatapi.com/v1/images",BREEDS="https://api.thecatapi.com/v1/breeds",fetchBreeds=function(){return fetch("".concat(BREEDS,"?api_key=").concat(API_KEY)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))},fetchCatByBreed=function(t){return fetch("".concat(BREEDS,"/").concat(t,"?api_key=").concat(API_KEY)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))};
//# sourceMappingURL=index.57308e81.js.map
