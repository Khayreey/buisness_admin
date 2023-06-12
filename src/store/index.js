import {configureStore} from '@reduxjs/toolkit' 
import buisnessSlice from './buisnessSlice'

const store = configureStore({
    reducer : {
        buisness : buisnessSlice.reducer ,
    }
})

export default store