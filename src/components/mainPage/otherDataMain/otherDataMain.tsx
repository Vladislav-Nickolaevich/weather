import React from 'react';
import {useAppSelector} from "../../../store/store";
import s from './otherDataMain.module.css'

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AirIcon from '@mui/icons-material/Air';
import ScaleIcon from '@mui/icons-material/Scale';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

type OtherWeatherDataMainType = {
    theme: string
}

const OtherDataMain = (props: OtherWeatherDataMainType) => {
    const state = useAppSelector(state => state.weather)

    const color = props.theme === 'dark'? s.wrapperInfoDark : s.wrapperInfoLight
    return (
        <div className={s.container}>

            <div className={s.wrapper}>
                <span className={color}>
                    <ArrowUpwardIcon/>
                    <span className={s.textInfo}>Max temp: {state.maxTemp} °C</span>
                </span>

                <span className={color}>
                    <ArrowDownwardIcon/>
                    <span className={s.textInfo}>Min temp: {state.minTemp} °C</span>
                </span>

                <span className={color}>
                    <ArrowCircleUpIcon/>
                    <span className={s.textInfo}>Sunrise: {state.sunrise}</span>
                </span>
                <span className={color}>
                    <ArrowCircleDownIcon/>
                    <span className={s.textInfo}>Sunset: {state.sunset}</span>
                </span>
            </div>

            <div className={s.wrapper}>
                <span className={color}>
                    <ScaleIcon/>
                    <span className={s.textInfo}>Pressure: {state.pressure} mb</span>
                </span>
                <span className={color}>
                    <WaterDropIcon/>
                    <span className={s.textInfo}>Humidity: {state.humidity} %</span>
                </span>
                <span className={color}>
                    <AirIcon/>
                    <span className={s.textInfo}>Wind speed: {state.windSpeed} m/s</span>
                </span>
                <span className={color}>
                    <VisibilityIcon/>
                    <span className={s.textInfo}>Visibility: {state.visibility} km</span>
                </span>
            </div>
            
        </div>
    );
};

export default OtherDataMain;