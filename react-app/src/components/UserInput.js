import React from 'react';
import Results from './Results';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search_term: '',
            sort_by: 'search',
            tags: '',
            search_results: []
        }
    }

    getSearchResults = (sort_by, search_term, tags) => { // Should I move this to an actions folder?
        // Gets search results based on input search term.
        let url = 'http://hn.algolia.com/api/v1/' 
                + sort_by
                + `?query=${search_term}`
                + `&tags=${tags}`; // This has to work with multiple tags AND/OR-ing
                // What other params should I have?
                // Make sure this is error-free.

        fetch(url)
        .then((response) => (response.json()))
        .then((data) => console.log(data))
        .catch((error) => {
            console.log(error);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.getSearchResults(this.state.sort_by, this.state.search_term, this.state.tags);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label className="searchTerm">
                        Search
                        <input type="text" name="search_term"/>
                    </label>
                    <br/>
                    <label>
                        With tags:
                        <select>
                            <option defaultValue value=""></option>
                            <option value="story">Story</option>
                            <option value="comment">Comment</option>
                            <option value="poll">Poll</option>
                            <option value="pollopt">Poll Opt</option>
                            <option value="show_hn">Show HN</option>
                            <option value="ask_hn">Ask HN</option>
                            <option value="front_page">Front Page</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        And filters: 
                        <select>
                            <option defaultValue value=""></option>
                            <option value="created_at_i">Created at i:</option>
                            <option value="points">Points:</option>
                            <option value="num_comments">Number of comments:</option>
                        </select>
                    </label>
                    <br/>
                    <label className="sortBy">
                        Sorted by:
                        <input value="search" name="sort_by" type="radio" defaultChecked/>
                        Popularity
                        <input value="search_by_date" name="sort_by" type="radio"/>
                        Date
                    </label>
                    <br/>
                    <label className="submit">
                        <input type="submit" value="Search"/>
                    </label>
                </form>
                <Results search_results={this.state.search_results}/>
            </div>
        )
    }
}

export default UserInput;