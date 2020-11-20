import React from 'react';
import './LoadingSpinner.css'

const LoadingSpinner = ({ width, color, radius }) => {

    const plotPoints = ( n, r ) => {
        let points = [];
        let originX = r
        let originY = r;
        let delay = 0;

        for (let i = 0; i < n; i++ ) {
            let x = originX + r * Math.cos(2 * Math.PI * i / n);
            let y = originY + r * Math.sin(2 * Math.PI * i / n);
            let d = delay;
            console.log(x + " " + y + " " + d)
            points.push([x,y,d]);
            delay += 0.12
        }
        return points;
    }

    const baseStyle = {
        height: width,
        width: width,
        backgroundColor: color
    }

    const containerStyle = {
        height: radius*2.5 + "px",
        width: radius*2.5 + "px",
    }

    return (
        <div className="loading-spinner" style={{...containerStyle}}>
            { plotPoints(8, radius).map(point => {
                return <div className="spinner" style={{...baseStyle, animationDelay: `${point[2]}s`, top: `${point[1]}px`, left: `${point[0]}px`}}/>
            })}
        </div>
    )
}

export default LoadingSpinner;