import React, {useState} from 'react';

import s from "./mainDataTop.module.css";

import InputSearch from "./inputSearch/inputSearch";

import {Button} from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Divider from "@mui/material/Divider";
import {useAppSelector} from "../../../store/store";
import {useDispatch} from "react-redux";
import {errorMessageAC} from "../../../store/reducers/errorReducer/errorReducer";


const MainDataTop = (props: MainPageTopType) => {
    const errorMessage = useAppSelector(state => state.error.error)
    const dispatch = useDispatch()

    const [error, setError] = useState<string | null>(errorMessage)

    const errorShow = (value: string | null) => {
        dispatch(errorMessageAC(error))
        setError(value)
    }

    const light = props.theme === 'light'

    return (
        <div className={s.top}>
            <div className={s.header}>
                <InputSearch
                    error={error}
                    showError={errorShow}
                    searchCity={props.onClickSearchCity}
                    theme={props.theme}
                />

                <div className={s.lineVertical}>
                    <Divider
                        light={true}
                        orientation={'vertical'}
                        variant={'fullWidth'}
                        color={light? 'black' : 'white'}/>
                </div>

                <div className={s.btnColor}>
                    <Button
                        color={'inherit'}
                        variant="outlined"
                        onClick={props.toggleTheme}
                        fullWidth={true}
                        size={'large'}
                    >
                        {light?
                            <BedtimeIcon/>:
                            <WbSunnyIcon/>
                        }
                    </Button>
                </div>

            </div>

            <div className={s.error}>{errorMessage}</div>

        </div>
    );
};

export default MainDataTop;

type MainPageTopType = {
    onClickSearchCity: (value: string) => void
    toggleTheme: () => void
    theme: string
}