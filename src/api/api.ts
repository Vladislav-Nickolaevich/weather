import axios from 'axios'


export const instance = axios.create({
    baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
})

export const weatherAPI = {
    getCurrentWeather(city: string) {
        return instance
            .get<DataGetType>(`/${city}?key=49RQ628GBHUEHHDNW5K6FS87W`)
    },
    getHoursWeather(city: string) {
        return instance
            .get<DataGetType>(`/${city}?key=49RQ628GBHUEHHDNW5K6FS87W`)
    },
    getWeekWeather(city: string) {
        return instance
            .get<DataGetType>(`/${city}?key=49RQ628GBHUEHHDNW5K6FS87W`)
    }
}



export type DataGetType = {
    queryCost: number
    latitude: number
    longitude: number
    resolvedAddress: string
    address: string
    timezone: string
    tzoffset: number
    description: string
    days: DaysType[]
    alerts: []
    stations: {}
    currentConditions: CurrentConditionsType
}

export type CurrentConditionsType = {
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: null,
    precipprob: number
    snow: number
    snowdepth: number
    preciptype: null,
    windgust: null,
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    conditions: string
    icon: string
    stations: string[]
    source: string
}

export type DaysType = {
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: null,
    precipprob: number
    snow: number
    snowdepth: number
    windgust: null,
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    conditions: string
    icon: string
    stations: string[]
    source: string
    tempmax: number
    tempmin: number
    feelslikemax: number
    feelslikemin: number
    precipcover: number
    preciptype: []
    severerisk: number
    hours: HoursType[]
}

export type HoursType = {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: null,
    precipprob: number
    snow: number
    snowdepth: number
    preciptype: null,
    windgust: null,
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    conditions: string
    icon: string
    stations: string[]
    source: string
}
