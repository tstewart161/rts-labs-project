import React from 'react';
import Results from './Results';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search_term: '',
            search_results: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getSearchResults = (search_term) => {
        // Gets search results based on input search term.
        try {

        } catch {

        }
    }

    handleSubmit(event) {
        // Handle search submit.
    }

    handleChange(event) {
        // Handle search change.
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="searchBar">
                        <input type="text" name="search_term" onChange={this.handleChange}/>
                    </label>
                    <div>
                        <input type="submit" value="Search"/>
                    </div>
                </form>
                <Results search_results={this.state.search_results}/>
            </div>
        )
    }
}

export default UserInput;