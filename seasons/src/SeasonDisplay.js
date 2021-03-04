import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's Hit the Beach!",
        iconName: 'sun',
    },
    winter: {
        text: "Time to Bundle Up!",
        iconName: 'snowflake',
    }
}

function getSeason(latitude) {
    const date = new Date();
    const currentMonth = date.getMonth();
    const isNorthernHemisphere = latitude > 0;
    const isWinterNothern = isNorthernHemisphere && (currentMonth >= 9 || currentMonth <=2);
    const isWinterSouthern = !isNorthernHemisphere && (currentMonth >= 3 && currentMonth <=8);
    const isWinter = isWinterNothern || isWinterSouthern;

    if (isWinter) return 'winter';
    else return 'summer';
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat);

    return (
        <div className={`${season} season-display`}>
            <i className={`${seasonConfig[season].iconName} icon icon-left massive`}></i>
            <h1>{seasonConfig[season].text}</h1>
            <i className={`${seasonConfig[season].iconName} icon icon-right massive`}></i>
        </div>
    );
}

export default SeasonDisplay;