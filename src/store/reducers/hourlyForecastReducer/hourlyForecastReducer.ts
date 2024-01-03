import {HoursType, weatherAPI} from "../../../api/api";
import {Dispatch} from "redux";
import {errorMessageAC} from "../errorReducer/errorReducer";
import { getTemp } from "../../../utils";
import {InitialType} from "../nextWeekReducer/nextWeekReducer";

const hourlyForecastReducer = (state: InitialType[] = initialState, action: ActionsType): InitialType[] => {
    switch (action.type) {
        case 'HOURS_WEATHER_TODAY':
            let hoursNow = String((new Date()).getHours() + 1)
            let result = hoursNow.length === 1 ? '0' + hoursNow: hoursNow

            const newStateToday = action.hours.map(el => {
                return ({
                        conditions: el.conditions,
                        datetime: el.datetime.slice(0, 5),
                        temp: getTemp(el.temp),
                        feelslike: getTemp(el.feelslike),
                        windspeed: el.windspeed,
                        humidity: el.humidity,
                        visibility: el.visibility,
                        pressure: el.pressure,
                        datetimeEpoch: el.datetimeEpoch
                    }
                )
            })
            return newStateToday.filter((e, i) => e.datetime > result)

        case 'HOURS_WEATHER_TOMORROW':
            const newStateTomorrow = action.hours.map(el => {
                return ({
                        conditions: el.conditions,
                        datetime: el.datetime.slice(0, 5),
                        temp: getTemp(el.temp),
                        feelslike: getTemp(el.feelslike),
                        windspeed: el.windspeed,
                        humidity: el.humidity,
                        visibility: el.visibility,
                        pressure: el.pressure,
                        datetimeEpoch: el.datetimeEpoch
                    }
                )
            })
            return newStateTomorrow
        default:
            return state
    }
};

export default hourlyForecastReducer;


type getWeatherHoursTodayACType = ReturnType<typeof getWeatherHoursTodayAC>
export const getWeatherHoursTodayAC = (hours: HoursType[]) => ({type: 'HOURS_WEATHER_TODAY', hours} as const)

type getWeatherHoursTomorrowACType = ReturnType<typeof getWeatherHoursTomorrowAC>
export const getWeatherHoursTomorrowAC = (hours: HoursType[]) => ({type: 'HOURS_WEATHER_TOMORROW', hours} as const)


type ActionsType = getWeatherHoursTodayACType
    | getWeatherHoursTomorrowACType


export const hourlyForecastDayHoursTC = (city: string) => (dispatch: Dispatch) => {
    weatherAPI.getHoursWeather(city)
        .then(res => {
            const dayNow = (new Date()).getHours()
            if (dayNow < 23) {
                const day = res.data.days[0].hours
                dispatch(getWeatherHoursTodayAC(day))
            } else {
                const day = res.data.days[1].hours
                dispatch(getWeatherHoursTomorrowAC(day))
            }
            dispatch(errorMessageAC(null))
        }).catch(res => {
        dispatch(errorMessageAC('The city is entered incorrectly'))
    })

}

const initialState: InitialType[] = []

