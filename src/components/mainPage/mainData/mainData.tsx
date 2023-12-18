import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../store/store";
import s from './mainData.module.css'

const MainData = () => {
    const state = useAppSelector(state => state.weather)

    const [dateNow, setDate] = useState(getTime())

    useEffect(() => {
        setInterval(() => {
            setDate(getTime())
        }, 10000)

    }, [])

    function getTime() {
        let date = new Date(),
            hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
            minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
        return {hours, minutes}
    }

    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.city}>{state.city}</div>
                <div className={s.currentData}>
                    <div>{state.currentData}</div>
                    <div>{dateNow.hours}:{String(dateNow.minutes)}</div>
                </div>
            </div>

            <div className={s.temp}>{state.degree} °C</div>

            <div className={s.description}>
                <div>Real feel: {state.feelingDegree} °C</div>
                <div>{state.description}</div>
            </div>

        </div>
    );
};

export default MainData;