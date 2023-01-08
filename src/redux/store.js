import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './slice/timerSlice'


export default configureStore({
    reducer: {
        timer: timerReducer
    }
})