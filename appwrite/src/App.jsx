import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import authService from './Services/auth';
import {login,logout} from './store/authSlice'
import { Footer, Header } from './components';
import {Outlet} from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
    }).catch((error) => console.log(error())
    ).finally(() => setIsLoading(false));
  },[])
  console.log(import.meta.env.VITE_APPWRITE)
  return  !isLoading ? (<div className='min-h-screen fle flex-wrap content-betweeb=n bg-gray-400'>
      <div className="w-full block">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>) : null;
  
}

export default App
