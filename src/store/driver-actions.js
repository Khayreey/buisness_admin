import { driversActions } from "./driveSlice";
export const getAllDrivers = () => {
  return async (dispatch) => {
    const getAll = async () => {
      const data = await fetch("http://127.0.0.1:8000/admin/getAllDrivers");
      const response = await data.json();
      const formattedResponse = response.map(({password ,user_id
        , user_type ,approved	, approved_at  , ...e})=>{
          return e
      })
     
      return formattedResponse;
    };
    try {
      dispatch(driversActions.setWaitingTrue());
      const data = await getAll();
      dispatch(driversActions.setWaitingFalse());
      dispatch(driversActions.getDriversFromDb(data));
      dispatch(driversActions.clearDriverError());
    } catch (err) {
      
      dispatch(driversActions.setErrorInGetDrivers(err));
      dispatch(driversActions.setWaitingFalse());
    }
  };
};
export const getAllAvailableDrivers = () => {
    return async (dispatch) => {
      const getAll = async () => {
        const data = await fetch("http://127.0.0.1:8000/admin/getAll_available_Drivers");
        const response = await data.json();
        const formattedResponse = response.map(({password ,user_id
          , user_type ,approved	, approved_at , status , ...e})=>{
            return e
        })
       
        return formattedResponse;
      };
      try {
        dispatch(driversActions.setWaitingTrue());
        const data = await getAll();
        dispatch(driversActions.setWaitingFalse());
        dispatch(driversActions.getAvaliableDriversFromDb(data));
        dispatch(driversActions.clearDriverError());
      } catch (err) {
        console.log(err);
        dispatch(driversActions.setErrorInGetDrivers(err));
        dispatch(driversActions.setWaitingFalse());
      }
    };
  };

  export const getAllUnAvailableDrivers = () => {
    return async (dispatch) => {
      const getAll = async () => {
        const data = await fetch("http://127.0.0.1:8000/admin/getAll_Notavailable_Drivers");
        const response = await data.json();
        const formattedResponse = response.map(({password ,user_id
          , user_type ,approved	, approved_at , status , ...e})=>{
            return e
        })
       
        return formattedResponse;
      };
      try {
        dispatch(driversActions.setWaitingTrue());
        const data = await getAll();
        dispatch(driversActions.setWaitingFalse());
        dispatch(driversActions.getUnAvaliableDriversFromDb(data));
        dispatch(driversActions.clearDriverError());
      } catch (err) {
        console.log(err);
        dispatch(driversActions.setErrorInGetDrivers(err));
        dispatch(driversActions.setWaitingFalse());
      }
    };
  };

  export const getAllBusyDrivers = () => {
    return async (dispatch) => {
      const getAll = async () => {
        const data = await fetch("http://127.0.0.1:8000/admin/getAll_busy_Drivers");
        const response = await data.json();
        const formattedResponse = response.map(({password ,user_id
          , user_type ,approved	, approved_at , status , ...e})=>{
            return e
        })
       
        return formattedResponse;
      };
      try {
        dispatch(driversActions.setWaitingTrue());
        const data = await getAll();
        dispatch(driversActions.setWaitingFalse());
        dispatch(driversActions.getBusyDriversFromDb(data));
        dispatch(driversActions.clearDriverError());
      } catch (err) {
        console.log(err);
        dispatch(driversActions.setErrorInGetDrivers(err));
        dispatch(driversActions.setWaitingFalse());
      }
    };
  };


