import React from 'react';
import { displayElement } from './displayElement.js';
import { timeElapsedSincePosted } from './timeElapsedSincePosted.js';

export function createResultsList(searchResults, numToDisplay) {
    if (searchResults[0] === 'no_results') {
        return (<div>No results for this search.</div>);
    }
    let results = searchResults.slice(0, numToDisplay);
    return (
        <ul>
            {results.map((item, i) => (
                <li key={i}>
                    <div>
                        <b>{displayElement(item.title, "title")}</b>
                        <br/>
                        <u>{displayElement(item.url, "url")}</u>
                        <br/>
                        Author: {displayElement(item.author, "author")}
                        <br/>
                        Comments: {displayElement(item.num_comments, "comment number")}
                        <br/>
                        Points: {displayElement(item.points, "point number")}
                        <br/>
                        {timeElapsedSincePosted(item.created_at)}
                    </div>
                    <br/>
                </li>
            ))}
        </ul>
    );
}