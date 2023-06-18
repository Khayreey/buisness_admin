import { customersActions } from "./customerSlice";
 
export const getAllCustomers = () => {
  return async (dispatch) => {
    const getAll = async () => {
      const data = await fetch("http://127.0.0.1:8000/admin/get_all_customers");

      const response = await data.json();
      const formatResponse = response.map(({ password , cart , ...e})=>{
            return e
      }) 
      return formatResponse
    };
    try {
      dispatch(customersActions.setWaitingTrue());
      dispatch(customersActions.clearCustomerError());
      const data = await getAll();
      dispatch(customersActions.setWaitingFalse());
      dispatch(customersActions.getCustomersFromDb(data));
     
    } catch (err) {
      dispatch(customersActions.setErrorInGetCustomers(err));
      dispatch(customersActions.setWaitingFalse());
    }
  };
};
