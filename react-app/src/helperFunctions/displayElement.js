import React from 'react';

export function displayElement(element, elementType) {
    if (element !== "" && element !== null) {
        return <>{element}</>
    } else {
        return `No ${elementType} for this post`
    }
}