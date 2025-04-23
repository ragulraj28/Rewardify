import { useState, useEffect} from "react";

const useResize = () => {
    const[winWidth, setwinWidth] = useState(window.innerWidth); 
    
    const handleResize = () => {
        setwinWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])

    return winWidth;

}

export default useResize