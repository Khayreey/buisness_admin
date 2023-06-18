import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux' 
const SingleBuisness = () => {
    const {id} = useParams()
    const singleBuisness = useSelector((state)=>state.buisness.selectedBuisness) 
    console.log(singleBuisness)
  return (
    <div>{id}</div>
  )
}

export default SingleBuisness