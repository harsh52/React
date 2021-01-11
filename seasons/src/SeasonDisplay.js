//import the React and reactDOM libraries
import React from 'react';
import "semantic-ui-css/semantic.min.css";
import './seasonDisplay.css';

const seasonConfig =  {
    Summer: {
        text: "It is summer",
        iconName: "sun"
    },
    Winter:{
        text: "It is Winter",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) => {
    // console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
     console.log(season)
    //const text = season === 'Winter' ? 'It is Winter' : 'It is summer';
    //const icon = season === 'Winter' ? 'snowflake' : 'sun';

    const { text, iconName } = seasonConfig[season];
    return (
        <div>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;