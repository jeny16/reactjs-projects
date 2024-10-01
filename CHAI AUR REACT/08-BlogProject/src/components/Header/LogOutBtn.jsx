import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/Auth'
import { logOut } from '../../store/authSlice'

function LogOutBtn() {

    const dispatch = useDispatch(); 
    const logOutHandler = () => {
        authService.logout().then(() => {
            dispatch(logOut())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogOut</button>
  )
}

export default LogOutBtn;