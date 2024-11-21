import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Services/auth'
import { logout } from '../../store/authSlice'

export const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        authService.logout().then(() =>
        dispatch(logout()))
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue rounded-full'>Logout</button>
  )
}
