import './SeasonDisplay.css';
import React from 'react';

export default class SeasonDisplay extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.seasonConfig = {
            summer: {
                text: "Let's Hit the Beach!",
                iconName: 'sun',
            },
            winter: {
                text: "Time to Bundle Up!",
                iconName: 'snowflake',
            }
        }
    }
    getSeason(latitude) {
        const date = new Date();
        const currentMonth = date.getMonth();
        const isNorthernHemisphere = latitude > 0;
        const isWinterNothern = isNorthernHemisphere && (currentMonth >= 9 || currentMonth <=2);
        const isWinterSouthern = !isNorthernHemisphere && (currentMonth >= 3 && currentMonth <=8);
        const isWinter = isWinterNothern || isWinterSouthern;
        if (isWinter) return 'winter';
        else return 'summer';
    }
    render() {
        const season = this.getSeason(this.props.lat);
        return (
            <div className={`${season} season-display`}>
                <i className={`${this.seasonConfig[season].iconName} icon icon-left massive`}></i>
                <h1>{this.seasonConfig[season].text}</h1>
                <i className={`${this.seasonConfig[season].iconName} icon icon-right massive`}></i>
            </div>
        );
    }
}
