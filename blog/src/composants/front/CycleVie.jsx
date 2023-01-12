import { useState } from "react";

const CycleVie = () => {
    const [nb, setNb] = useState(0)
    const [nb2 , setNb2] = useState(0)
    return ( 
        <>
            <button onClick={() =>setNb(nb + 1)}>compteur {nb}</button>
            <button onClick={() =>setNb2(nb2 + 1)}>compteur {nb2}</button>
        </>
     );
}
 
export default CycleVie;