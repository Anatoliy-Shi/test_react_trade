import {createSlice} from '@reduxjs/toolkit'

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        value: false,
        minutes: 2,
        seconds: 0,
        winAuction: ''
    },
    reducers: {
        visible: (state, action) => {
            state.value = action.payload
        },
        takeMinutes: (state, action) => {
            state.minutes = action.payload
        },
        takeSeconds: (state, action) => {
            state.seconds = action.payload
        },
        setWinAuction: (state, action) => {
            state.winAuction = action.payload
        },

    }
})

// Action creators are generated for each case reducer function
export const {visible, takeSeconds, takeMinutes, setWinAuction} = timerSlice.actions

export default timerSlice.reducer