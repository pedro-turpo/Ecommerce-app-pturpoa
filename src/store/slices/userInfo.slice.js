import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEcommerce } from "../../utils/configAxios";
const initialState = {
    token: "",
    user: null
}

const userInfoSlice = createSlice({
    initialState:JSON.parse(localStorage.getItem('userInfo')) ?? initialState,
    name: "userInfo",
    reducers: {
        setUserInfo: (state, action) => {
            const responseLogin = action.payload
            const newState = { ...state, ...responseLogin }
            localStorage.setItem('userInfo', JSON.stringify(newState))
            return newState
        },
        logout: (state) => {
            const newState = { ...state, ...initialState }
            localStorage.setItem('userInfo', JSON.stringify(newState))
            return newState
        }
    }
})

export const { setUserInfo, logout } = userInfoSlice.actions

export const loginUser = (dataForm) => (dispatch) => {

    axiosEcommerce
        .post("/users/login", dataForm)
        .then(({ data }) => dispatch(setUserInfo(data)))
        .catch((error) => console.log(error))
}

export default userInfoSlice.reducer 