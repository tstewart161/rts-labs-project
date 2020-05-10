import React from 'react';

class Results extends React.Component{ // Decide how many results to display.
    
    constructor(props) {
        super(props);

        this.state = {
            num_to_display: 10
        }
    }
    
    createResultsList = () => {
        let results = this.props.search_results.slice(0, this.state.num_to_display);
        console.log(results)

        return (
            <ul>
                {results.map((item, i) => (
                    <li key={i}>
                        {item.title}
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
                    <select onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                {this.createResultsList()}
            </div>
        )
    }
}

export default Results