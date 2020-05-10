import React from 'react';
import Results from './Results';
import { getSearchResults } from '../helperFunctions/getSearchResults';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerms: {
                query: '',
                tags: '',
                numComments: 'numComments>=0',
                points: 'points>=0',
                sortBy: 'search'
            },
            searchResults: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        getSearchResults(this.state.searchTerms).then((results) => {
            this.setState({
                searchResults: results
            })
        })
    }

    handleChange = (event) => {
        let newSearchTerms = this.state.searchTerms
        newSearchTerms[event.target.name] = event.target.value;

        this.setState({
            searchTerms: newSearchTerms
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label className="searchTerm">
                        Search
                        <input type="text" name="query"/>
                    </label>
                    <br/>
                    <label>
                        With tags:
                        <select onChange={this.handleChange} name="tags">
                            <option defaultValue value=""></option>
                            <option value="story">Story</option>
                            {/* <option value="comment">Comment</option> */}
                            <option value="poll">Poll</option>
                            {/* <option value="pollopt">Poll Opt</option> */}
                            <option value="show_hn">Show HN</option>
                            <option value="ask_hn">Ask HN</option>
                            <option value="front_page">Front Page</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Comments:   
                        <select onChange={this.handleChange} name="numComments">
                            <option defaultValue value="numComments>=0"></option>
                            <option value="numComments<=10">0-10</option>
                            <option value="numComments>=10,numComments<=50">10-50</option>
                            <option value="numComments>=50,numComments<=100">50-100</option>
                            <option value="numComments>=100,numComments<=200">100-200</option>
                            <option value="numComments>=200,numComments<=500">200-500</option>
                            <option value="numComments>=500">500+</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Points:   
                        <select onChange={this.handleChange} name="points">
                            <option defaultValue value="points>=0"></option>
                            <option value="points>=0,points<=10">0-10</option>
                            <option value="points>=10,points<=50">10-50</option>
                            <option value="points>=50,points<=100">50-100</option>
                            <option value="points>=100,points<=200">100-200</option>
                            <option value="points>=200,points<=500">200-500</option>
                            <option value="points>=500">500+</option>
                        </select>
                    </label>
                    <br/>
                    <label className="sortBy">
                        Sorted by:
                        <input value="search" name="sortBy" type="radio" defaultChecked/>
                        Popularity
                        <input value="search_by_date" name="sortBy" type="radio"/>
                        Date
                    </label>
                    <br/>
                    <label className="submit">
                        <input type="submit" value="Search"/>
                    </label>
                </form>
                <Results searchResults={this.state.searchResults} />
            </div>
        )
    }
}

export default UserInput;