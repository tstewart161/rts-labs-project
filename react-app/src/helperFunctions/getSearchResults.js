export function getSearchResults(search_terms, sort_by) {
    let url = 'http://hn.algolia.com/api/v1/' 
            + sort_by
            + `?query=${search_terms.query}`
            + `&tags=${search_terms.tags}`
            + `&numericFilters=${search_terms.num_comments},${search_terms.points}`
            + `&hitsPerPage=50`; 
            // This has to work with multiple tags AND/OR-ing?
            // Make sure this is error-free.
    fetch(url)
    .then((response) => (response.json()))
    .then((data) => {
        return data.hits;
    })
    .catch((error) => {
        console.log(`getSearchResults() failed: ${error}`); // Better error messages?
    })
}