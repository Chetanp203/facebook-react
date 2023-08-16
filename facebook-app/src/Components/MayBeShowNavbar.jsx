import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

const MayBeShowNavbar = ({children}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    useEffect(()=>{
     console.log("this is location",location)
     if (location.pathname === "/login" ){
        setShowNavbar(false)
     }else{
        setShowNavbar(true)
     }
    },[location])
    
    useEffect(()=>{
     console.log("this is location",location)
     if (location.pathname === "/create" ){
        setShowNavbar(false)
     }else{
        setShowNavbar(true)
     }
    },[location])


  return (
    <div>{showNavbar && children}</div>
  )
}

export default MayBeShowNavbar