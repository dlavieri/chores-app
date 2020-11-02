import React from 'react';

const getBoundingBoxes = children => {
    const boundingBoxes = {};

    // iterate over children
    React.Children.forEach(children, child => {
        // get each child on the DOM through its ref
        const domNode = child.ref.current;
        // calculate the position and dimensions of each child
        const nodeBoundingBox = domNode.getBoundingClientRect();
        // use its unique key attribute to store its current position and dims in obj
        boundingBoxes[child.key] = nodeBoundingBox;
    });

    return boundingBoxes;
}

export default getBoundingBoxes;