import { useState, useEffect } from "react";

export function useCocktails(){
    const [cocktails, setCocktails] = useState([])
    const [lodding, setLoading] = useState(true)

    async function getCocktails(){
        const reponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        const cocktails = await reponse.json()
        setLoading(false)
        setCocktails(cocktails.drinks.map(function(item){
            return {
                id : item.idDrink,
                nom : item.strDrink,
                img : item.strDrinkThumb,
                description : item.strInstructions
            }
        }))
    }

    useEffect( () => {
        getCocktails()
    }, [])

    return [cocktails,lodding ]
}