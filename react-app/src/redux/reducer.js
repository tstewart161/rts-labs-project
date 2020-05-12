const initialState = {
    searchTerms: {
        query: '',
        tags: '',
        numComments: 'num_comments>=0',
        points: 'points>=0',
        sortBy: 'search'
    }
}
  
export function reducer(state = initialState, action) {
    switch(action.type) {
        case "INPUT": 
            let newSearchTerms = action.searchTerms;
            return {
                searchTerms: newSearchTerms
            }
        default:
        return state;
    }
}