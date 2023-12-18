import React from 'react';
import s from "./mainPage.module.css";

import MainData from "./mainData/mainData";
import OtherDataMain from "./otherDataMain/otherDataMain";
import MainDataTop from "./mainDataTop/mainDataTop";

import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';


const MainPage = (props: HeaderType) => {

    const onClick = () => props.onClickHourly(!props.edit)
    const colorLine = props.theme === 'light' ? 'black' : 'white'

    return (
        <div>
            <MainDataTop
                toggleTheme={props.toggleTheme}
                onClickSearchCity={props.onClickSearchCity}
                theme={props.theme}
            />

            <div className={props.theme === 'dark'? s.containerDark: s.containerLight}>
                <div className={s.wrapperWeather}>

                    <MainData/>

                    <Button
                        onClick={onClick}
                        variant="outlined"
                        color={'inherit'}
                        fullWidth
                    >
                        Show hourly forecast
                    </Button>

                    <div className={s.line}>
                        <Divider
                            light={true}
                            orientation={'horizontal'}
                            variant={'fullWidth'}
                            color={colorLine}
                        />
                    </div>

                    <OtherDataMain theme={props.theme}/>

                </div>
            </div>

        </div>
    );
};

export default MainPage;


type HeaderType = {
    onClickSearchCity: (value: string) => void
    onClickHourly: (value: boolean) => void
    edit: boolean
    toggleTheme: () => void
    theme: string
}