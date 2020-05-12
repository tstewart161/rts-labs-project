import React from 'react';
import { Results } from './Results';
import { Welcome } from './Welcome';
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
            this.setState({
                searchResults: results
            })
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
                <div>
                    <Welcome />
                </div>
                {/* Search form */}
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label>
                        Search
                        <input type="text" name="query"/>
                    </label>
                    <br/>
                    {/* Tags dropdown menu */}
                    <label>
                        With tag:
                        <select defaultValue="" onChange={this.handleChange} name="tags">
                            <option value=""></option>
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
                    <br/>
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
                    <br/>
                    {/* Radio buttons to choose how to sort results. */}
                    <label className="sortBy">
                        Sort by:
                        <div>
                            <input value="search" name="sortBy" type="radio" defaultChecked/>
                            Popularity
                            <br/>
                            <input value="search_by_date" name="sortBy" type="radio"/>
                            Date
                        </div>
                    </label>
                    <br/>
                    <label className="submit">
                        <input type="submit" value="Search"/>
                    </label>
                </form>
                <br/>
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