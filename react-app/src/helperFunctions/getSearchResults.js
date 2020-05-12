export function getSearchResults(searchTerms) {
    let URL = 'http://hn.algolia.com/api/v1/' 
            + searchTerms.sortBy
            + `?query=${searchTerms.query}`
            + `&tags=${searchTerms.tags}`
            + `&numericFilters=${searchTerms.numComments},${searchTerms.points}`
            + `&hitsPerPage=50`; 

    return (
        fetch(URL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            mode: 'cors'
          })
        .then((response) => (response.json()))
        .then((data) => {
            return data.hits;
        })
        .catch((error) => {
            console.log(`getSearchResults() failed: ${error}`);
        })
    );
}