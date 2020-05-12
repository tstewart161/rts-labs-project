import React from 'react';
import { displayElement } from './displayElement.js';
import { timeElapsedSincePosted } from './timeElapsedSincePosted.js';

export function createResultsList(searchResults, numToDisplay) {
    if (typeof searchResults === 'undefined') {
        searchResults = []; // Should I return an empty array?
    }
    let results = searchResults.slice(0, numToDisplay);
    // Check this whole function for errors and edge cases! What if no titles? Error catching and logging.
    // Add time elapsed since created?
    return (
        <ul>
            {results.map((item, i) => (
                <li key={i}>
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
                    <br/> 
                    <br/>
                </li>
            ))}
        </ul>
    )
}