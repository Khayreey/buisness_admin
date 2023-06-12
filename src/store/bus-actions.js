import { businessActions } from "./buisnessSlice"
let headers = new Headers();
headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
headers.append('Access-Control-Allow-Credentials', 'true');

export const getAllBusiness =  ()=>{
    return async (dispatch)=>{
       
        const getAll = async ()=>{
            const data = await fetch('http://127.0.0.1:8000/admin/getAllBusiness')

            const response = await data.json()
            console.log(response)
            //return response 
        }
        try{
            dispatch(businessActions.setWaitingTrue())
            const data = await getAll()
            dispatch(businessActions.setWaitingFalse())
            // dispatch(businessActions.getBuisnessFromDb(data))
            dispatch(businessActions.clearBusinessError())
        }
        catch(err){
            console.log(err)
            dispatch(businessActions.setErrorInGetBusiness(err))
            dispatch(businessActions.setWaitingFalse())
        }
    }
}