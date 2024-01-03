import React from 'react';
import {useAppSelector} from "../../../store/store";

import {HourlyNextOrToday} from "../hourlyNextOrToday";


const HourlyToday = () => {
    const weatherData = useAppSelector(state => state.weather)
    const hourly = useAppSelector(state => state.hourlyForecast)

    return <HourlyNextOrToday arr={hourly} weatherData={weatherData.currentData}/>

};

export default HourlyToday;