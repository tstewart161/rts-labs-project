import React from 'react';

class Results extends React.Component{ // Decide how many results to display.
    
    constructor(props) {
        super(props);

        this.state = {
            num_to_display: 10
        }
    }
    
    createResultsList = (search_results) => {
        let results = search_results.slice(0, this.state.num_to_display);
        // Check this whole function for errors and edge cases! What if no titles? 
        // Add time elapsed since created?
        return (
            <ul>
                {results.map((item, i) => (
                    <li key={i}>
                        <b>{item.title}</b>
                        <br/>
                        <u>{item.url}</u>
                        <br/>
                        Author: {item.author}
                        <br/>
                        Comments: {item.num_comments}
                        <br/>
                        Points: {item.points}
                        <br/> 
                        <br/>
                    </li>
                ))}
            </ul>
        )
    }

    handleChange = (event) => {
        this.setState({
            num_to_display: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    How many results to display: // May need to move this to UserInput
                    <select defaultValue="10" onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                {this.createResultsList(this.props.searchResults)}
            </div>
        )
    }
}

export default Results