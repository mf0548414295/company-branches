import { useContext } from "react";
import { BranchesContext } from "../../Context/branchesContext";
import { TextField } from "@mui/material";
import { freeText } from "./FreeTextSearch.StyleSheet";

function FreeTextSearch() {
  const {freeTextSearch,setFreeTextSearch}=useContext(BranchesContext);
  const enterFreeTextHandle=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setFreeTextSearch(event.target.value);
  };

  return (
   <TextField 
      placeholder="free text search" 
      value={freeTextSearch} 
      onChange={enterFreeTextHandle} 
      sx={freeText}
      variant="filled"
    />
  )
}

export default FreeTextSearch;
