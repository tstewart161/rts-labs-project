export function getSearchResults(searchTerms) {
    let url = 'http://hn.algolia.com/api/v1/' 
        + searchTerms.sortBy
        + `?query=${searchTerms.query}`
        + `&tags=${searchTerms.tags}`
        + `&numericFilters=${searchTerms.numComments},${searchTerms.points}`
        + `&hitsPerPage=50`; 
        // Make sure this is error-free.
        // More error catching and logging?
    console.log(url);
    return fetch(url)
    .then((response) => (response.json()))
    .then((data) => {
        return data.hits;
    })
    .catch((error) => {
        console.log(`getSearchResults() failed: ${error}`);
    })
}