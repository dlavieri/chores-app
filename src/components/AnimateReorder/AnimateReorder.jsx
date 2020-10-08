import React, { useEffect, useState, useLayoutEffect } from 'react';
import getBoundingBox from '../../helpers/getBoundingBox';
import usePrevious from '../../hooks/usePrevious';

const AnimateReorder = ({ children }) => {
    const [ boundingBox, setBoundingBox ] = useState({});
    const [ prevBoundingBox, setPrevBoundingBox ] = useState({});
    const prevChildren = usePrevious(children);

    // calculate new bounding box when component updates/mounts (new postion for animation)
    useLayoutEffect(() => {
        const newBoundingBox = getBoundingBox(children);
        setBoundingBox(newBoundingBox);
    }, [children])

    // calculate previous bounding boxes (start position for animation)
    useLayoutEffect(() => {
        const prevBoundingBox = getBoundingBox(prevChildren);
        setPrevBoundingBox(prevBoundingBox)
        console.log(prevBoundingBox)
    }, [prevChildren])

    // animate before re-render
    useEffect(() => {
        const hasPrevious = Object.keys(prevBoundingBox).length;

        if (hasPrevious) {
            React.Children.forEach(children, child => {
                const domNode = child.ref.current;
                const startPos = prevBoundingBox[child.key] || {top:0};
                const endPos = boundingBox[child.key] || {top:0};
                const changeInY = startPos.top - endPos.top;
                if (changeInY) {
                    requestAnimationFrame(() => {
                        // before DOM repaints, translate child to old positon
                        domNode.style.transform = `translateY(${changeInY}px)`;
                        domNode.style.transition = "transform 0s";

                        requestAnimationFrame(() => {
                            // remove translation to perform transition
                            domNode.style.transform = "translateY(0)";
                            domNode.style.transition = "transform 500ms";
                        });
                    });
                }
            })
        }
    })

    return children;
}

export default AnimateReorder;