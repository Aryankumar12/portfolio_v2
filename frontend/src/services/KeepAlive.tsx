const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


const KeepAlive = () => {

setInterval(async() => {

    try{
        await fetch(`${BACKEND_URL}/health`)
    }
    catch(err){
        //silent error
    }
    
}, 14*60*100);
 
}

export default KeepAlive