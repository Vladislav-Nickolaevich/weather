import {CurrentConditionsType, DaysType, weatherAPI} from "../../../api/api";
import {Dispatch} from "redux";
import {errorMessageAC} from "../errorReducer/errorReducer";
import { getTemp } from "../../../utils";


const weatherReducer = (state: WeatherType = initialState, action: DataWeatherACType):WeatherType  => {
    switch (action.type){
        case 'GET-DATA-WEATHER':
            let newData = action.day.datetime.split('-').reverse().join('.')
            return {
                currentData: newData,

                city: action.city,
                degree: getTemp(action.current.temp),
                feelingDegree: getTemp(action.current.feelslike),

                description: action.current.conditions,
                maxTemp: getTemp(action.day.tempmax),
                minTemp: getTemp(action.day.tempmin),

                sunrise: action.current.sunrise,
                sunset: action.current.sunset,
                visibility: +(action.current.visibility.toFixed(0)),

                pressure: +(action.current.pressure.toFixed(0)),
                humidity: action.current.humidity,
                windSpeed: action.current.windspeed
            }


        default:
            return state
    }
};

export default weatherReducer;


type DataWeatherACType = ReturnType<typeof dataWeatherAC>
export const dataWeatherAC = (current: CurrentConditionsType, city: string, day: DaysType) => ({type: 'GET-DATA-WEATHER', current, city, day} as const)

export const weatherTC = (city: string) => (dispatch: Dispatch) => {
    weatherAPI.getCurrentWeather(city)
        .then(res => {
            const current = res.data.currentConditions
            const day = res.data.days[0]
            const address = res.data.address
            dispatch(dataWeatherAC(current, address, day))
            dispatch(errorMessageAC(null))
        }).catch(res => {
        dispatch(errorMessageAC('The city is entered incorrectly'))
    })
}


type WeatherType = {
    currentData: string
    city: string
    degree: number | null
    feelingDegree: number | null
    description: string
    maxTemp: number | null
    minTemp: number | null
    sunrise: string
    sunset: string
    humidity: number | null
    pressure: number | null
    windSpeed: number | null
    visibility: number | null
}

const initialState: WeatherType = {
    currentData: '',
    city: 'Minsk',
    degree: null,
    feelingDegree: null,
    description: '',
    maxTemp: null,
    minTemp: null,
    sunrise: '',
    sunset: '',
    humidity: null,
    pressure: null,
    windSpeed: null,
    visibility: null
}