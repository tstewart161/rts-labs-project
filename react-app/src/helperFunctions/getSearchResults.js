export function getSearchResults(searchTerms) {
    /* 
    Contacting this endpoint gives a CORS error on Safari but not on Chrome. In development,
    I'd just prepend 'https://cors-anywhere.herokuapp.com/' to the URL to bypass client-server 
    CO requests or just disable CORS restrictions in Safari (or just use Chrome). In production 
    I'd spin up my own webserver with Node+Express or route through company webserver. I think 
    the first looks kind of 'hacky' for this project and the other seems out of the scope of 
    it, so I'll just leave it as is for now. I think the API uses wildcard CORS auth headers
    after research and curl-ing the endpoint, which isn't supported in Safari.
    */
    let URL = 'http://hn.algolia.com/api/v1/' 
            + searchTerms.sortBy
            + `?query=${searchTerms.query}`
            + `&tags=${searchTerms.tags}`
            + `&numericFilters=${searchTerms.numComments},${searchTerms.points}`
            + `&hitsPerPage=50`; 
    return (
        fetch(URL, { method: "GET" })
        .then((response) => (response.json()))
        .then((data) => {
            console.log(data)
            return data.hits;
        })
        .catch((error) => {
            console.log(`getSearchResults() failed: ${error}`);
        })
    );
}