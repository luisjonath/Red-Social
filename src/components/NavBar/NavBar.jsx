import React from 'react'
import "./NavBar.css"
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'


export const NavBar = () => {
   
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(startLogout())
       
    }

  return (
    <div className='navbar-container'>
        
            <button>hola</button>
            <button>hola</button>
            <input type="text" />
            <button>hola</button>
            <button onClick={onLogout}>Logout</button>
        
    </div>
  )
}
