import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {useEffect, useState} from "react";
import PreLoader from "./components/PreLoader.jsx";

const  App = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    },[])
    
    return (
          <>
              {
                  isLoading ? (
                      <PreLoader />
                  ):(
                      <BrowserRouter>
                          <Routes>
                              <Route path="/" element={<HomePage />} />
                          </Routes>
                      </BrowserRouter>
                  )
              }
          </>
       )
}

export default App
