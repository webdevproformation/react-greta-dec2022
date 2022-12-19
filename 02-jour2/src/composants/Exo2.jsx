const Exo2 = () => {

    const handleClick = () => {
        console.log("coucou")
    }

    return ( <>
        <p>solution 1</p>
        <button 
                className="btn btn-success"
                onClick={handleClick}
        > 
                bonjour 
        </button>
        <p>solution 2</p>
        <button 
            className="btn btn-success"
            onClick={() => handleClick()}
        > 
            bonjour 
        </button>
    </> );
}
 
export default Exo2;