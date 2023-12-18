import {DaysType, weatherAPI} from "../../../api/api";
import {Dispatch} from "redux";
import {errorMessageAC} from "../errorReducer/errorReducer";


const nextWeekReducer = (state: InitialType[] = initialState , action: ReturnType<typeof getWeatherWeekAC>): InitialType[] => {
    switch (action.type){
        case "GET_WEEK_WEATHER":
           // Нужно только 7 элементов
           const week = action.days.map((el,i) => {
                   return ({
                           conditions: el.conditions,
                           datetime: el.datetime.split('-').reverse().join('.'),
                           temp: +((+el.temp - 32) / 1.8).toFixed(0),

                           feelslike: +((+el.feelslike - 32) / 1.8).toFixed(0),
                           windspeed: el.windspeed,
                           humidity: el.humidity,

                           visibility: el.visibility,
                           pressure: el.pressure,
                           datetimeEpoch: el.datetimeEpoch,

                           tempMax: +((+el.tempmax - 32) / 1.8).toFixed(0),
                           tempMin: +((+el.tempmin - 32) / 1.8).toFixed(0),
                           sunrise: el.sunrise,
                           sunset: el.sunset,
                       }
                   )

           })
            return week.filter((e, i) => i > 0 && i <8 && e)
        default:
            return state
    }

};

export default nextWeekReducer;

export const getWeatherWeekAC = (days: DaysType[]) => ({type: "GET_WEEK_WEATHER", days} as const)

export const hourlyForecastNextWeekTC = (city: string) => (dispatch: Dispatch) => {
    weatherAPI.getWeekWeather(city)
        .then(res => {
            const days = res.data.days
            dispatch(getWeatherWeekAC(days))
            dispatch(errorMessageAC(null))
        }).catch(res => {
        dispatch(errorMessageAC('The city is entered incorrectly'))
    })
}

type InitialType = {
    datetime: string
    conditions: string
    temp: number
    feelslike: number
    pressure: number
    windspeed: number
    humidity: number
    visibility: number
    datetimeEpoch: number
    tempMax: number
    tempMin: number
    sunrise: string
    sunset: string
}
const initialState: InitialType[] = []