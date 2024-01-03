

const themeReducer = (state: InitialStateType = initialState , action: ReturnType<typeof themeAC>):InitialStateType => {
    switch (action.type){
        case "CHANGE_THEME":
            return {
                theme: action.value
            }
        default:
            return state
    }

};

export default themeReducer;


type InitialStateType = {
    theme: string
}
const initialState: InitialStateType = {theme: 'light'}


export const themeAC = (value: 'light' | 'dark') => ({type: 'CHANGE_THEME', value})