import React from 'react';
import Results from './Results';
import { getSearchResults } from '../helperFunctions/getSearchResults';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search_terms: {
                query: '',
                tags: '',
                num_comments: 'num_comments>=0',
                points: 'points>=0'
            },
            sort_by: 'search',
            search_results: []
        }
    }

    // getSearchResults = (search_terms, sort_by) => { // Should I move this to an actions folder?
    //     // Gets search results based on input search term.
    //     let url = 'http://hn.algolia.com/api/v1/' 
    //             + sort_by
    //             + `?query=${search_terms.query}`
    //             + `&tags=${search_terms.tags}`
    //             + `&numericFilters=${search_terms.num_comments},${search_terms.points}`
    //             + `&hitsPerPage=50`; 
    //             // This has to work with multiple tags AND/OR-ing?
    //             // What other params should I have?
    //             // Make sure this is error-free.
    //     fetch(url)
    //     .then((response) => (response.json()))
    //     .then((data) => {
    //         this.setState({
    //             search_results: data.hits
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        getSearchResults(this.state.search_terms, this.state.sort_by).then((results) => {
            this.setState({
                search_results: results
            })
        })
    }

    handleChange = (event) => {
        let new_search_terms = this.state.search_terms
        new_search_terms[event.target.name] = event.target.value;

        this.setState({
            search_terms: new_search_terms
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
                        <select onChange={this.handleChange} name="num_comments">
                            <option defaultValue value="num_comments>=0"></option>
                            <option value="num_comments<=10">0-10</option>
                            <option value="num_comments>=10,num_comments<=50">10-50</option>
                            <option value="num_comments>=50,num_comments<=100">50-100</option>
                            <option value="num_comments>=100,num_comments<=200">100-200</option>
                            <option value="num_comments>=200,num_comments<=500">200-500</option>
                            <option value="num_comments>=500">500+</option>
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
                <Results searchResults={this.state.search_results} />
            </div>
        )
    }
}

export default UserInput;