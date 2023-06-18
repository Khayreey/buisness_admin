import React from 'react'
import {useSelector} from 'react-redux'
const SingleCustomer = () => {
   const singleCustomer = useSelector((state)=>state.customer.selectedCustomers) 
   console.log(singleCustomer)
  return (
    <div>SingleCustomer</div>
  )
}

export default SingleCustomer