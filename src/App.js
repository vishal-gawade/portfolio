
import './App.css';
import Home from './Pages';
import {BrowserRouter as Router} from 'react-router-dom';
import { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  
    useEffect(()=>{
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 11000)
    }, [])
   
  return (
      <>
        {
          isLoading ?
          <div className="App">
              <HashLoader size={50}
            color={"#00ced1"}
               loading={isLoading}
               />
          </div>
          :

          <Router>
            <Home />
          </Router>
        }
      </>
     
    
  );

}

export default App;

