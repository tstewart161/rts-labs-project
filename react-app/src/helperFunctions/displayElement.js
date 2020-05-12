import React from 'react';

export function displayElement(element, elementName) {
    if (element !== "" && element !== null) {
        return <>{element}</>
    } else {
        return `No ${elementName} for this post`
    }
}