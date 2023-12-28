import React from 'react'
import loading from "../../../public/loading2.gif"
import "./CheckingAuth.css"

export const CheckingAuth = () => {
  return (
    <div className='container-loading'>
        <img src={loading} alt="" />
    </div>
  )
}
