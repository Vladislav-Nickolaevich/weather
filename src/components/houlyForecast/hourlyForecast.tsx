import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../store/store";
import {hourlyForecastDayHoursTC} from "../../store/reducers/hourlyForecastReducer/hourlyForecastReducer";

import HourlyToday from "./today/hourlyToday";
import HourlyNextWeek from "./nextWeek/hourlyNextWeek";

import s from './hourlyForecast.module.css'

import {Button} from "@mui/material";
import Divider from "@mui/material/Divider";



const HourlyForecast = (props: HourlyForecastType) => {
    const dispatch = useAppDispatch()

    const onClickBack = () => props.edit(false)

    const [today, setToday] = useState(true)

    const onClickToday = () => setToday(true)
    const onClickNextWeek = () => setToday(false)


    useEffect(() => {
        dispatch(hourlyForecastDayHoursTC(props.city))
    }, [])

    return (
        <div>
            <div className={s.header}>
                <div className={s.hourlyText}>
                    Hourly forecast: {props.city}
                </div>

                <Button
                    variant="outlined"
                    onClick={onClickBack}
                    color={'inherit'}
                    size={'small'}
                >
                    Back
                </Button>
            </div>

            <div className={s.line}>
                <Divider
                    light={true}
                    orientation={'horizontal'}
                    variant={'fullWidth'}
                    color={props.theme === 'light' ? 'black' : 'white'}
                />
            </div>

            <div className={s.wrapperBtns}>
                <Button variant="outlined" onClick={onClickToday} color={'inherit'}>
                    Today
                </Button>

                <Button variant="outlined" onClick={onClickNextWeek} color={'inherit'}>
                    Next week
                </Button>
            </div>
            { today? <HourlyToday theme={props.theme}/>: <HourlyNextWeek theme={props.theme}/> }

        </div>
    );
};

export default HourlyForecast;


type HourlyForecastType = {
    city: string
    edit: (value: boolean) => void
    theme: string
}