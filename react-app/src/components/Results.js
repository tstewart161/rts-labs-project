import React from 'react';
import { createResultsList } from '../helperFunctions/createResultsList.js';

class Results extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            numToDisplay: 10
        }
    }

    handleChange = (numToDisplayDropdown) => {
        this.setState({
            numToDisplay: numToDisplayDropdown.target.value
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    How many results to display:
                    <select defaultValue="10" onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div>
                    {createResultsList(this.props.searchResults, this.state.numToDisplay)}
                </div>
            </div>
        )
    }
}

export default Results