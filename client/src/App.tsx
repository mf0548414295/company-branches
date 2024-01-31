import AreasDropdown from "./Components/AreasDropdown/AreasDropdown";
import CitiesDropdown from "./Components/CitiesDropdown/CitiesDropdown";
import { BranchesProvider } from "./Context/branchesContext";
import './App.css';

function App() {

  return (
   <div>
      <h1>Company Branches</h1>
      <BranchesProvider>
      <div className="filtersContainer">
          <AreasDropdown/>
          <CitiesDropdown/>
      </div>
      </BranchesProvider>
   </div>
  )
}

export default App;
