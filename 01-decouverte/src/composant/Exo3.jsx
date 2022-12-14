import pika from "../pikachu.jpg"; 

const Exo3 = () => {
    const handleMouseOver = () => {
        console.log("je survole une image")
    }

    const handleClick = () => {
        console.log("j'ai cliqué")
    }
    const handleMouseLeave = () => {
        console.log("j'ai quitté l'image")
    }

    return ( 
        <>
            <img src="logo/mario.jpg" alt="" width="200" />
            <img src="https://via.placeholder.com/200x100" alt="" />
            <img 
                src={pika} 
                alt="" 
                width="200" 
                onMouseOver={handleMouseOver} 
                onMouseLeave={handleMouseLeave}/>
            <button onClick={handleClick}>Action</button>
        </>
     );
}
 
export default Exo3;