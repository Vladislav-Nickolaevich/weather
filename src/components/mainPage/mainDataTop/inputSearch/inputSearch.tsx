import React, {ChangeEvent, useState, KeyboardEvent, memo} from 'react';
import SearchIcon from '@mui/icons-material/Search';

import {IconButton, InputAdornment, TextField} from "@mui/material";

import input from './inputSearch.module.css'


const InputSearch = memo((props: InputSearchType) => {
    const [city, setCity] = useState('')

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setCity(value)
    }

    const onClickSearch = () => {
        if (city.trim() !== '') {
            let newCity = city[0].toUpperCase() + city.slice(1)
            props.searchCity(newCity)
            setCity('')
            props.showError(null)
        } else {
            setCity('')
            props.showError('Enter the city')
        }
    }
    const styleDark = {border: '1px solid white', color: 'white'}
    const changeColorInput = props.theme === 'dark' ? styleDark : {}
    const changeColorLoop = props.theme === 'dark' ? {color: 'white'} : {}

    const onKeyDownInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickSearch()
        }
    }
    return (
        <div className={input.container}>
            <TextField
                placeholder="Enter city"
                type="text"
                autoComplete="on"
                autoFocus
                error={!!props.error}
                value={city}
                required
                fullWidth
                color="primary"
                variant="outlined"
                onChange={changeValue}
                size={'small'}
                onKeyDown={onKeyDownInput}
                InputProps={{
                    style: changeColorInput,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton style={changeColorLoop} onClick={onClickSearch}>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

        </div>
    );
})

export default InputSearch;


type InputSearchType = {
    searchCity: (value: string) => void
    showError: (error: string | null) => void
    error: string | null
    theme: string
}