import registerPic from './pics/registerPic.png';
import './App.css'
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation(); 
  return (
    <> {(location.pathname =='/login'      ||
      location.pathname =='/'   
     ) && 
     <img className='bgimg' src={registerPic} alt="רקע" />}
            
      <Outlet />
    


    </>
  )
}

export default App;
