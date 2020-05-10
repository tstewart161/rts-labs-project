import React from 'react';
import { createResultsList } from '../helperFunctions/createResultsList';

class Results extends React.Component{ // Decide how many results to display.
    
    constructor(props) {
        super(props);

        this.state = {
            numToDisplay: 10
        }
    }

    handleChange = (event) => {
        this.setState({
            numToDisplay: event.target.value
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
                {createResultsList(this.props.searchResults, this.state.numToDisplay)}
            </div>
        )
    }
}

export default Results