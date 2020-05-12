import React from 'react';
import '../styles/Welcome.css';

export function Welcome() {
    return (
        <div>
            <h2>
                Welcome to RTS Hacker News feed!
            </h2>
            <p>
                Search HN using the parameters below, choosing keywords 
                from post title, url, and author, posts' tags, comment count,
                point count, and then choose how to sort the results.
            </p>
            <p>
                Once you have your list of results, choose how many to display.
            </p>
        </div>
    );
}