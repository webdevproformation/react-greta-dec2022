import { createContext } from "react"

export const ListeContext = createContext(); 
// ListeContext === store => contexte variable qui contient le state que l'on veut partager entre plusieurs composants

// un composant qui va permettre de fournir à tous ses composants enfants / petit enfant les données du store 
export const ListeContextProvider = (props) => {
    const data = ["premier élément du context", "element2", "element3"] 
    return <ListeContext.Provider value={data}>
        { props.children }
    </ListeContext.Provider>
}
