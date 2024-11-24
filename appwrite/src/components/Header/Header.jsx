import React from 'react'
import { Logo, LogoutBtn } from '../index'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Container, Button} from '../index'

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItem = [{
    name : 'Home',
    slug:'/',
    active: true
  },{
    name : 'Login',
    slug:'/login',
    active: !authStatus
  },{name : 'Signup',
    slug:'/signup',
    active: !authStatus},
  {name : 'All Posts',
    slug:'/all-posts',
    active: authStatus},{
      name : 'Add Post',
    slug:'/add-post',
    active: authStatus
    }]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className="mr-4">
            <Link to='/'>
              <Logo/>
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItem.map((item) => item.active? (<li key={item.name}><Button onClick={() => navigate(item.slug)} className='inline-bock px-6 py-2 duration-200 hover:bg-gray-100 rounded-full'>{item.name}</Button></li>) : null)}
            {authStatus && (<li><LogoutBtn/></li>)}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header