// fichier extension .js ou .jsx 
// .jsx est conseillé car Visual Studio Code va réaliser une meilleure auto complétion (meilleure proposition)

import Premier from "./composant/Premier" ; // importer 
import Deuxieme from "./composant/Deuxieme";
import Loop from "./composant/Loop";
import Exo1 from "./composant/Exo1";
import If from "./composant/If";
import Exo2 from "./composant/Exo2";

function App() { // nom de la fonction = nom fichier 
                 // PascalCase 
                 // Premier 
                 // MenuNavigation 
                 // Menu_Navigation Kebab_Case Sneak_Case
                 // menuVraimentImportant camelCase 
  return (<div>
      bonjour
      <Exo2 />
      <If />
      <Exo1 />
      <Loop />
      <Premier />
      <Deuxieme />
    </div>)
  // minimum absolue d'une composant est retourner 
  // jsx 
  // ressemble beaucoup à du html 
  // ressemble beaucoup à une string 
  // mélange entre javascript / html / xml 
}

export default App

// à partir de 2015 => en javascript il a été décidé d'ajouter
// de nombreux mots clé dans le langage 
// const let 
// import 
// export 
// par défaut la fonction (Composant) App est local au fichier 
// je ne peux pas l'utiliser dans un autre fichier 
// si je veux l'utiliser dans un autre fichier (par exemple dans le fichier main.js )
// sauf si j'ajoute la ligne "export default App"

