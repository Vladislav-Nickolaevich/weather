import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "./store/store";
import {weatherTC} from "./store/reducers/weatherReducer/wetherReducer";

import HourlyForecast from "./components/houlyForecast/hourlyForecast";
import MainPage from "./components/mainPage/mainPage";

import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./components/themes/globalStyles";
import {getLocalStorage, setAppTheme, setLocalStorage } from './utils';
import {themeAC} from "./store/reducers/themeReducer/themeReducer";



function App() {
    const city = useAppSelector(state => state.weather.city)
    const themeFromRedux = useAppSelector(state => state.theme.theme)

    const dispatch = useAppDispatch()

    const [edit, setEdit] = useState(false)
    const [theme, setTheme] = useState(themeFromRedux);

    const isDarkTheme = theme === "dark";

    const onClickHourly = (value: boolean) => setEdit(value)

    const toggleTheme = () => {
        const updatedTheme = isDarkTheme ? "light" : "dark";
        setTheme(updatedTheme);
        setLocalStorage("theme", updatedTheme)
        dispatch(themeAC(updatedTheme))
    };
    const onClickSearchCity = (newCity: string) => dispatch(weatherTC(newCity))

    useEffect(() => {
        const savedTheme = getLocalStorage("theme")
        setAppTheme(savedTheme, setTheme)
        dispatch(weatherTC(city))
    }, []);
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <GlobalStyles/>
                {
                    !edit ?
                    <MainPage
                        onClickHourly={onClickHourly}
                        onClickSearchCity={onClickSearchCity}
                        edit={edit}
                        toggleTheme={toggleTheme}
                    />
                    :
                    <HourlyForecast
                        edit={onClickHourly}
                        city={city}
                    />
                }
        </ThemeProvider>
    );
}

export default App;
