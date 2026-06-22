import Button from "../../components/Button";
function Hero(){

    function handleClick():void{
        alert("hellow i clieck")
    }
return (
    <>

    <h1>This is the hero section </h1>
    <Button text="Downlaod" onClick={handleClick}/>
    
    </>
)
}

export default Hero;