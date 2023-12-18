import React, {useState} from 'react';
import {useAppSelector} from "../../../store/store";

import s from "./hourly.module.css";

import HourlyOtherData from "./otherData/hourlyOtherData";


import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


type HourlyTodayType = {
    theme: string
}

const HourlyToday = (props:HourlyTodayType) => {
    const state = useAppSelector(state => state.weather)
    const hourly = useAppSelector(state => state.hourlyForecast)

    const [showData, setShowData] = useState(false)

    const [id, setId] = useState<number | null>(null)

    const onClick = (id: number) => {
        setId(id)
        setShowData(!showData)
    }
    const setImgWeather = (value: string) => {
        return value === 'Snow' ?
            <AcUnitIcon/> :
            value === 'Overcast' ?
                <CloudIcon/> :
                value === 'Rain' ?
                    <ThunderstormIcon/> :
                    <WbSunnyIcon/>
    }

    return (
        <div>
            {hourly.map(e => {
                const weather = e.conditions.split(',')[0]
                return (
                    <div className={s.container} key={e.datetimeEpoch}>

                        <div className={s.wrapper} onClick={() => onClick(e.datetimeEpoch)}>

                            <div className={s.infoData}>
                                <div>{state.currentData}</div>
                                <div>{e.datetime}</div>
                            </div>

                            <div className={s.info}>
                                {setImgWeather(weather)}
                                <div>{e.temp} °C</div>
                                <div>{e.conditions}</div>
                            </div>

                            <div className={s.infoFeelsLike}>
                                <span>Real feel: {e.feelslike} °C</span>
                                <span className={s.openClose}>
                                    {id === e.datetimeEpoch && showData? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                                </span>
                            </div>

                        </div>


                        {id === e.datetimeEpoch && showData && <HourlyOtherData
                            pressure={e.pressure}
                            windspeed={e.windspeed}
                            visibility={e.visibility}
                            humidity={e.humidity}
                            theme={props.theme}
                        /> }

                    </div>
                )
            })}

        </div>
    )
};

export default HourlyToday;