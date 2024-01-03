import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {hourlyForecastNextWeekTC} from "../../../store/reducers/nextWeekReducer/nextWeekReducer";


import {HourlyNextOrToday} from "../hourlyNextOrToday";


const HourlyNextWeek = () => {
    const dispatch = useAppDispatch()

    const nextWeek = useAppSelector(state => state.newxtWeek)
    const city = useAppSelector(state => state.weather.city)

    useEffect(() => {
        dispatch(hourlyForecastNextWeekTC(city))
    }, [])

    return <HourlyNextOrToday arr={nextWeek}/>

};

export default HourlyNextWeek;