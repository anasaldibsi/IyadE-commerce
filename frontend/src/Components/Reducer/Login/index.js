// Reducer File
const myStorage=window.localStorage;
const initialState = {
    token: myStorage.getItem('token'),
    isLoggedIn: myStorage.getItem('isLoggedIn') ? true : false,
}
//Reducer
export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOG_IN':
            state.token = payload;
            myStorage.setItem('isLoggedIn',true);
            return myStorage.setItem('token', payload);
        case 'LOG_OUT':
            state.isLoggedIn=false;
            state.token = "";
           return myStorage.clear;

        default:
            return state;
    }
}
// Actions
export const login = (token) => {
    return { type: 'LOG_IN', payload: token }
}

export const logout = () => {
    return { type: 'LOG_OUT' }
}

