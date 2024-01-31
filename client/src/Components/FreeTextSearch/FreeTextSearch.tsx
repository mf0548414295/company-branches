import { useContext } from "react";
import { BranchesContext } from "../../Context/branchesContext";

function App() {
  const {freeTextSearch,setFreeTextSearch}=useContext(BranchesContext);
  const enterFreeTextHandle=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setFreeTextSearch(event.target.value);
  };

  return (
   <input placeholder="free text search" value={freeTextSearch} onChange={enterFreeTextHandle}></input>
  )
}

export default App;
