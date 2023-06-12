import {createSlice} from '@reduxjs/toolkit'

const buisnessSlice = createSlice({
    name : 'buisness' , 
    initialState : {
        allBuisness : [] , 
        selectedBuisness : {} ,
        isWaitingForGetBusiness : false , 
        numOfallBuisness : 0 , 
        errorInGetBusiness : {}
    }
    ,
    reducers : {
        getBuisnessFromDb(state , action){
            state.allBuisness = action.payload 
            state.numOfallBuisness = action.payload.length
        } , 
        setWaitingTrue(state){
            state.isWaitingForGetBusiness = true
        } ,
        setWaitingFalse(state){
            state.isWaitingForGetBusiness = false
        } , 
        setErrorInGetBusiness(state , action) {
            state.errorInGetBusiness = action.payload
        } , 
        clearBusinessError(state){
            state.errorInGetBusiness = {}
        }
    }
})
export const businessActions = buisnessSlice.actions
export default buisnessSlice