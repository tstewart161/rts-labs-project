import React from 'react';
import Results from './Results';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            sort_by: 'search',
            tags: '',
            search_results: [],
            num_comments: '',
            points: ''
        }
    }

    getSearchResults = (sort_by, query, tags, num_comments, points) => { // Should I move this to an actions folder?
        // Gets search results based on input search term.
        let url = 'http://hn.algolia.com/api/v1/' 
                + sort_by
                + `?query=${query}`
                + `&tags=${tags}`
                + `&num_comments=${num_comments}`
                + `&points=${points}`; 
                // This has to work with multiple tags AND/OR-ing
                // What other params should I have?
                // Make sure this is error-free.

        fetch(url)
        .then((response) => (response.json()))
        .then((data) => {
            this.setState({
                search_results: data.hits
            })
            console.log(data.hits)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleSubmit = (event) => { // Clean this up.
        event.preventDefault();
        this.getSearchResults(this.state.sort_by, this.state.query, this.state.tags);
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
                        <input type="text" name="query"/>
                    </label>
                    <br/>
                    <label>
                        With tags:
                        <select onChange={this.handleChange} name="tags">
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
                        Comments:   
                        <select onChange={this.handleChange} name="num_comments">
                            <option defaultValue value=""></option>
                            <option value="XXX">0-10</option>
                            <option value="XXX">10-50</option>
                            <option value="XXX">50-100</option>
                            <option value="XXX">100-200</option>
                            <option value="XXX">200-500</option>
                            <option value="XXX">500+</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Points:   
                        <select onChange={this.handleChange} name="points">
                            <option defaultValue value=""></option>
                            <option value="XXX">0-10</option>
                            <option value="XXX">10-50</option>
                            <option value="XXX">50-100</option>
                            <option value="XXX">100-200</option>
                            <option value="XXX">200-500</option>
                            <option value="XXX">500+</option>
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