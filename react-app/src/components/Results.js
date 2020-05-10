import React from 'react';

class Results extends React.Component{ // Decide how many results to display.
    
    constructor(props) {
        super(props);

        this.state = {
            num_to_display: 10
        }
    }
    
    createResultsList = () => {

    }
    
    render() {
        return (
            <div>
                Results
            </div>
        )
    }
}

export default Results