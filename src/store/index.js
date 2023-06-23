import {configureStore} from '@reduxjs/toolkit' 
import buisnessSlice from './buisnessSlice'
import customerSlice from './customerSlice'
import ordersSlice from './orderSlice'
import driverSlice from './driveSlice'
import pendingBuisnessSlice from './pendingBuisnessSlice'
const store = configureStore({
    reducer : {
        buisness : buisnessSlice.reducer ,
        customer : customerSlice.reducer , 
        order : ordersSlice.reducer  ,
        driver : driverSlice.reducer , 
        pendingBuisness : pendingBuisnessSlice.reducer
    }
})

export default store