import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "./store/store";
import {weatherTC} from "./store/reducers/weatherReducer/wetherReducer";

import HourlyForecast from "./components/houlyForecast/hourlyForecast";
import MainPage from "./components/mainPage/mainPage";

import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./components/themes/globalStyles";



function App() {
    const city = useAppSelector(state => state.weather.city)
    const dispatch = useAppDispatch()

    const [edit, setEdit] = useState(false)
    const [theme, setTheme] = useState("light");

    const isDarkTheme = theme === "dark";

    const onClickHourly = (value: boolean) => setEdit(value)

    const toggleTheme = () => {
        const updatedTheme = isDarkTheme ? "light" : "dark";
        setTheme(updatedTheme);
        localStorage.setItem("theme", updatedTheme);
    };
    const onClickSearchCity = (newCity: string) => dispatch(weatherTC(newCity))

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme && ["dark", "light"].includes(savedTheme)) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        dispatch(weatherTC(city))
    }, [])
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <GlobalStyles/>
                {
                    !edit ?
                    <MainPage
                        onClickHourly={onClickHourly}
                        onClickSearchCity={onClickSearchCity}
                        edit={edit}
                        toggleTheme={toggleTheme}
                        theme={theme}
                    />
                    :
                    <HourlyForecast
                        edit={onClickHourly}
                        city={city}
                        theme={theme}
                    />
                }
            </>
        </ThemeProvider>
    );
}

export default App;
