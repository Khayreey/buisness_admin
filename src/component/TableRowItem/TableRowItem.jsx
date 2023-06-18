import React from "react";
import {  useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { businessActions } from "../../store/buisnessSlice";
import { customersActions } from "../../store/customerSlice";
const TableRowItem = ({ to, item, columns }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNavigateClick = ()=>{
     if(!to) return 
     switch (to) {
      case 'buisness':
        dispatch(businessActions.setSelectingBuisness(item))
        break;
      case 'customers': 
        dispatch(customersActions.setSelectingCustomer(item))
        break;
      default:
        break;
     }

        if(typeof item["_id"] === "string"){
          navigate(`/${to}/${item["_id"]}`)
        }
        else {
          navigate(`/${to}/${Object.values(item["_id"])[0]}`)
        }
    }

    const handleBuisnessMenu = (e)=>{
        e.stopPropagation()
        navigate(`/${to}/${Object.values(item["_id"])[0]}/${Object.values(item["menu"])[0]}`)
    }

  return (
    
    <tr onClick={handleNavigateClick}>
      
        {columns.map((column, columnIndex) =>
          column === "_id" ? null : column === "menu" ? (
            <td key={columnIndex}>
                <Button variant="warning" className='text-white'
                 onClick={(e)=>handleBuisnessMenu(e)}>Menu</Button>
            </td>
          ) : (
            <td key={columnIndex}>{item[column]}</td>
          )
        )}
      
    </tr>
    
  );
};

export default TableRowItem;
