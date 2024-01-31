import { useContext, useEffect, useState } from "react";
import { getBranches } from "../../Services/api";
import { BranchesContext } from "../../Context/branchesContext";
import { getUniqueArray } from "../CommonFunctions";

function AreasDropdown() {
    const {selectedArea,setSelectedArea}=useContext(BranchesContext);
    const [areas,setAreas]=useState<string[]>();

    useEffect(()=>{
        const areas=getBranches().map(branch=>branch.store_region);//get all the areas of branches
        const areasUniqueArray = getUniqueArray(areas);//remove the duplicate areas
        setAreas(areasUniqueArray);
    },[]);

    const chooseAreaHandle=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedArea(event.target.value);
    };

    return (
     <div>
       <select
        value={selectedArea}
        onChange={chooseAreaHandle}
        >
          {areas?.map((area,index)=><option value={area} key={index}>{area}</option>)}
      </select>
     </div>
    )
  }
  
  export default AreasDropdown;
  