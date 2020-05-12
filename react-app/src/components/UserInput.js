import React from 'react';
import { Results } from './Results';
import { getSearchResults } from '../helperFunctions/getSearchResults.js';
import { connect } from 'react-redux';
import '../styles/UserInput.css';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }
    }

    handleSubmit = (searchForm) => {
        searchForm.preventDefault();
        getSearchResults(this.props.searchTerms).then((results) => {
            if (results.length === 0 || typeof results === 'undefined') {
                this.setState({
                    searchResults: ['no_results']
                })
            } else {
                this.setState({
                    searchResults: results
                })
            }
        })
    }

    handleChange = (searchForm) => {
        let newSearchTerms = Object.assign({}, this.props.searchTerms); // Don't mutate props!
        newSearchTerms[searchForm.target.name] = searchForm.target.value;
        this.props.dispatch({ type: "INPUT", searchTerms: newSearchTerms });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label>
                        Search
                        <input type="text" name="query"/>
                    </label>
                    {/* Tags dropdown menu */}
                    <label>
                        With tag:
                        <select defaultValue="" onChange={this.handleChange} name="tags">
                            <option value=""></option>
                            <option value="story">Story</option>
                            <option value="poll">Poll</option>
                            <option value="show_hn">Show HN</option>
                            <option value="ask_hn">Ask HN</option>
                            <option value="front_page">Front Page</option>
                        </select>
                    </label>
                    {/* Number of comments dropdown menu. */}
                    <label>
                        Comments:   
                        <select defaultValue="num_comments>=0" onChange={this.handleChange} name="numComments">
                            <option value="num_comments>=0"></option>
                            <option value="num_comments<=10">0-10</option>
                            <option value="num_comments>=10,num_comments<=50">10-50</option>
                            <option value="num_comments>=50,num_comments<=100">50-100</option>
                            <option value="num_comments>=100,num_comments<=200">100-200</option>
                            <option value="num_comments>=200,num_comments<=500">200-500</option>
                            <option value="num_comments>=500">500+</option>
                        </select>
                    </label>
                    {/* Number of points dropdown menu. */}
                    <label>
                        Points:   
                        <select defaultValue="points>=0" onChange={this.handleChange} name="points">
                            <option value="points>=0"></option>
                            <option value="points>=0,points<=10">0-10</option>
                            <option value="points>=10,points<=50">10-50</option>
                            <option value="points>=50,points<=100">50-100</option>
                            <option value="points>=100,points<=200">100-200</option>
                            <option value="points>=200,points<=500">200-500</option>
                            <option value="points>=500">500+</option>
                        </select>
                    </label>
                    {/* Radio buttons to choose how to sort results. */}
                    <label>
                        Sort by:
                        <div className="sortBy">
                            <input value="search" name="sortBy" type="radio" defaultChecked/>
                            Popularity
                            <input value="search_by_date" name="sortBy" type="radio"/>
                            Date
                        </div>
                    </label>
                    <label className="submit">
                        <input type="submit" value="Search"/>
                    </label>
                </form>
                <div>
                    <Results searchResults={this.state.searchResults} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchTerms: state.searchTerms
});

export default connect(mapStateToProps)(UserInput);