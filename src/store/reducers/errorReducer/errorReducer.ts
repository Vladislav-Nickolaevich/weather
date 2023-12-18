const initialState = {error: null}
type InitialStateType = {
    error: string | null
}

const errorReducer = (state: InitialStateType = initialState, action: ReturnType<typeof errorMessageAC>):InitialStateType  => {
    switch (action.type){
        case "ERROR_MESSAGE":
            return {
                ...state,
                error: action.value
            }
        default:
            return state
    }
};

export default errorReducer;

export const errorMessageAC = (value: string | null) => ({type: 'ERROR_MESSAGE', value} as const)