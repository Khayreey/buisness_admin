import {configureStore} from '@reduxjs/toolkit' 
import buisnessSlice from './buisnessSlice'
import customerSlice from './customerSlice'
import ordersSlice from './orderSlice'
const store = configureStore({
    reducer : {
        buisness : buisnessSlice.reducer ,
        customer : customerSlice.reducer , 
        order : ordersSlice.reducer  ,
    }
})

export default store