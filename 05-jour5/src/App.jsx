import Details from "./composants/Details";
import Formulaire from "./composants/Formulaire";
import Synthese from "./composants/Synthese";
import Total from "./composants/Total"; // #3
import { OperationContextProvider } from "./contexts/operationContext";

const App = () => {
  return ( <div className="container">
      <OperationContextProvider> {/** 12  */}
          <Total /> {/** #3 */}
          <hr />
          <Synthese /> {/** 5 */}
          <hr />
          <Details /> {/** 8 */}
          <hr />
          <Formulaire /> {/** 10 */}
        </OperationContextProvider>
  </div>
   );
}
 
export default App;