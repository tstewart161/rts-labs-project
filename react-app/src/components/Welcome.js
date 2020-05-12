import React from 'react';
import '../styles/Welcome.css';
import logo from '../assets/rts_labs_logo.png';

export function Welcome() {
    return (
        <div>
            <h1>
                Welcome to the RTS Hacker News feed!
            </h1>
            <img alt="logo" src={logo}/>
            <p>
                Search HN using the parameters below, choosing keywords 
                from post title, url, and author, posts' tags, comment count,
                point count, and then choose how to sort the results.
            </p>
            <p>
                Once you have your list of results, choose how many to display.
            </p>
            <br/>
        </div>
    );
}