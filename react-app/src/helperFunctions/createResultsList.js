import React from 'react';

export function createResultsList(searchResults, numToDisplay) {
    let results = searchResults.slice(0, numToDisplay);
    // Check this whole function for errors and edge cases! What if no titles? Error catching and logging.
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