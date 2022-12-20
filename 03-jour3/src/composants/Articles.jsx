import { useState } from "react"
import Article from "./Article";
import _ from "lodash"

const Articles = () => {
    const [articles, setArticles] = useState([
        {id : 1 , titre : "titre 1" , contenu : "lorem ipsum" , like : 1},
        {id : 2 , titre : "titre 2" , contenu : "lorem ipsum" , like : 0},
        {id : 3 , titre : "titre 3" , contenu : "lorem ipsum" , like : 10},
        {id : 4 , titre : "titre 4" , contenu : "lorem ipsum" , like : 40},
    ])
    const augmenter = (id) => {
        const cloneArticles = _.cloneDeep(articles);
        const articleAModifier = cloneArticles.find(function(item){
            return item.id === id ;
        })
        const index = cloneArticles.indexOf(articleAModifier);
        cloneArticles[index].like++;
        setArticles(cloneArticles);
    }

    return ( 
        <>
        {articles.map(function(item , index){
            return <Article  key={index} item={item} augmenter={augmenter} />
        })}
        </>

     );
}
 
export default Articles;