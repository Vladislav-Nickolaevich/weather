import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import weatherReducer from "./reducers/weatherReducer/wetherReducer";
import hourlyForecastReducer from "./reducers/hourlyForecastReducer/hourlyForecastReducer";
import nextWeekReducer from "./reducers/nextWeekReducer/nextWeekReducer";
import errorReducer from "./reducers/errorReducer/errorReducer";


const rootReducer = combineReducers({
    weather: weatherReducer,
    hourlyForecast: hourlyForecastReducer,
    newxtWeek: nextWeekReducer,
    error: errorReducer
})

type ThunkDispatchType = ThunkDispatch<AppRootState, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof rootReducer>

export const useAppSelector : TypedUseSelectorHook<AppRootState> = useSelector