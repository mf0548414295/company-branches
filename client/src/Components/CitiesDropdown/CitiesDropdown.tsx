import { useContext, useEffect, useState } from "react";
import { getBranches } from "../../Services/api";
import { BranchesContext } from "../../Context/branchesContext";
import { getUniqueArray } from "../CommonFunctions";
import { Branch } from "../../Models/Branch";

function CitiesDropdown() {
    const {selectedCity,setSelectedCity,selectedArea}=useContext(BranchesContext);
    const [cities,setCities]=useState<string[]>();
    useEffect(()=>{
       setCities(getUniqueCities(getBranches()));
    },[]);
    useEffect(()=>{
        if(selectedArea){
            const branchesByArea=getBranches().filter(branch=>
                branch.store_region===selectedArea);//get branches by the selected area
            const uniqueArray = getUniqueCities(branchesByArea);
            setCities(uniqueArray);
        }
    },[selectedArea]);

    const getUniqueCities=(branches:Branch[])=>{
        const cities=branches.map(branch=>branch.city);//get all the cities of branches
        return getUniqueArray(cities);//remove the duplicate cities
    };
    const chooseCityHandle=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedCity(event.target.value);
    };

    return (
     <div>
       <select
        value={selectedCity}
        onChange={chooseCityHandle}
        >
          {cities?.map((city,index)=><option value={city} key={index}>{city}</option>)}
      </select>
     </div>
    )
  }
  
  export default CitiesDropdown;
  