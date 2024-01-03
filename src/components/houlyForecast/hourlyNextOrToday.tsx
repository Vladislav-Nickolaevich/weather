import React, {useState} from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import s from "./today/hourly.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HourlyOtherData from "./today/otherData/hourlyOtherData";

import {InitialType} from "../../store/reducers/nextWeekReducer/nextWeekReducer";


export const HourlyNextOrToday = (props:HourlyNextOrTodayType) => {
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
            {props.arr.map((e) => {
                const weather = e.conditions.split(',')[0]
                return (
                    <div className={s.container} key={e.datetimeEpoch}>
                        <div className={s.wrapper} onClick={() => onClick(e.datetimeEpoch)}>
                            <div className={s.infoData}>{e.datetime}</div>
                            <div className={s.info}>
                                {setImgWeather(weather)}
                                <div>{e.temp} °C</div>
                                <div>{e.conditions}</div>
                            </div>
                            <div className={s.infoFeelsLike}>
                                <span>Real feel: {e.feelslike} °C</span>
                                <span className={s.openClose}>
                                    {id === e.datetimeEpoch && showData ? <KeyboardArrowDownIcon/> :
                                        <KeyboardArrowUpIcon/>}
                                </span>
                            </div>
                        </div>

                        {id === e.datetimeEpoch && showData
                            && <HourlyOtherData
                                tempMin={e.tempMin}
                                tempMax={e.tempMax}
                                sunrise={e.sunrise}
                                sunset={e.sunset}
                                humidity={e.humidity}
                                visibility={e.visibility}
                                windspeed={e.windspeed}
                                pressure={e.pressure}
                            />
                        }

                    </div>
                )
            })}

        </div>
    )
}

type HourlyNextOrTodayType = {
    arr: InitialType[]
    weatherData?: string
}