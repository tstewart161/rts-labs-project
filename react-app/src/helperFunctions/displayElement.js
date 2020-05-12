import React from 'react';

export function displayElement(element, elementName) {
    if (element !== null && element !== "") {
        return (<>{element}</>); // Don't need to render a new DOM element, just return to parent.
    } else {
        return `No ${elementName} for this post`;
    }
}