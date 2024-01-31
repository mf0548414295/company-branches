import AreasDropdown from "./Components/AreasDropdown/AreasDropdown";
import CitiesDropdown from "./Components/CitiesDropdown/CitiesDropdown";
import { BranchesProvider } from "./Context/branchesContext";
import './App.css';
import FreeTextSearch from "./Components/FreeTextSearch/FreeTextSearch";
import BranchesList from "./Components/BranchesList/BranchesList";

function App() {

  return (
   <div className="appContainer">
      <h1>Company Branches</h1>
      <BranchesProvider>
        <div className="filtersContainer">
          <AreasDropdown/>
          <CitiesDropdown/>
          <FreeTextSearch/>
        </div>
         <BranchesList/>
      </BranchesProvider>
   </div>
  )
}

export default App;
