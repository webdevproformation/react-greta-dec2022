import { useEffect, useState } from "react";

const CycleVie = () => {
    const [nb, setNb] = useState(0)
    const [nb2 , setNb2] = useState(0)
    //const [timer, setTimer] = useState(null) 
    // componentDidMount(){}
    // lorsque le composant est chargé dans le DOM 
    let timer = null ;
    useEffect(function(){
        console.log("le composant est synchrone dans le DOM")
        timer = setInterval(function(){
            console.log("je suis un timer")
        }, 500)
        //document.addEventListener("mousemove")
        
    } , []); // tableau vide => le call back exécute 1 seule fois 

    // componentWillUpdate(){}
    useEffect(function(){
        if(nb > 0){
            console.log("la variable nb du state est modifiée");
        }
    }, [nb]); // le callback exécuter uniquement si nb est modifiée
              // si nb2 est modifié => le callback n'est exécutée 

    // exécuter le callback dès que le state du composant est modifié
    // et ou lorsque les props du composant sont modifiées 
    useEffect(function(){

    })

    // componentWillUnmount(){}
    useEffect( function(){
       
        return () => {
            console.log("le composant Cycle de Vie est unmounted");
            // clearInterval 
            clearInterval(timer)
        }
    }, [])

    return ( 
        <>
            <button onClick={() =>setNb(nb + 1)}>compteur {nb}</button>
            <button onClick={() =>setNb2(nb2 + 1)}>compteur {nb2}</button>
        </>
     );
}
 
export default CycleVie;