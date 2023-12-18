import React from 'react';

import s from "../hourly.module.css";

import AirIcon from "@mui/icons-material/Air";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ScaleIcon from '@mui/icons-material/Scale';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const HourlyOtherData = (props: HourlyOtherDataType) => {

    const color = props.theme === 'dark'? s.wrapperInfoDark : s.wrapperInfoLight

    return (
        <div className={s.otherDataWrapper}>

            <div className={s.otherData}>
                <div className={color}>
                    <ScaleIcon/>
                    <span className={s.infoText}>Pressure: {props.pressure} mb</span>
                </div>
                <div className={color}>
                    <WaterDropIcon/>
                    <span className={s.infoText}>Humidity: {props.humidity} %</span>
                </div>

                {
                    props.sunrise && <>
                        <div className={color}>
                            <ArrowCircleUpIcon/>
                            <span className={s.infoText}>Sunrise: {props.sunrise}</span>
                        </div>
                        <div className={color}>
                            <ArrowCircleDownIcon/>
                            <span className={s.infoText}>Sunset: {props.sunset}</span>
                        </div>
                    </>
                }

            </div>


            <div className={s.otherData}>
                <div className={color}>
                    <AirIcon/>
                    <span className={s.infoText}>Wind speed: {props.windspeed} m/s</span>
                </div>
                <div className={color}>
                    <VisibilityIcon/>
                    <span className={s.infoText}>Visibility: {props.visibility} km</span>
                </div>

                {
                    props.sunrise && <>
                        <div className={color}>
                            <ArrowUpwardIcon/>
                            <span className={s.infoText}>Temp max: {props.tempMax} °C</span>
                        </div>
                        <div className={color}>
                            <ArrowDownwardIcon/>
                            <span className={s.infoText}>Temp min: {props.tempMin} °C</span>
                        </div>
                    </>
                }

            </div>
        </div>
    );
};

export default HourlyOtherData;

type HourlyOtherDataType = {
    pressure: number
    humidity: number
    visibility: number
    windspeed: number
    theme:string

    sunrise?: string
    sunset?: string
    tempMax?: number
    tempMin?: number
}