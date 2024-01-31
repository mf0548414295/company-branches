import { useContext, useEffect, useState } from "react";
import { getBranches } from "../../Services/api";
import { BranchesContext } from "../../Context/branchesContext";
import { getClearArray, getUniqueArray } from "../CommonFunctions";
import { Branch } from "../../Models/Branch";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { citiesSelect } from "./CitiesDropdown.StyleSheet";

function CitiesDropdown() {
    const {selectedCity,setSelectedCity,selectedArea,}=useContext(BranchesContext);
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
            setSelectedCity("");
        }
    },[selectedArea]);

    const getUniqueCities=(branches:Branch[])=>{
        const cities=branches.map(branch=>branch.city);//get all the cities of branches
        const clearCities=getClearArray(cities);
        return getUniqueArray(clearCities).sort((a,b)=>a.localeCompare(b));
        //remove the duplicate cities and sort the array
    };
    const chooseCityHandle=(event:SelectChangeEvent<string>)=>{
        setSelectedCity(event.target.value);
    };

    return (
    <FormControl sx={citiesSelect}>
      <InputLabel>select city</InputLabel>
      <Select
        value={selectedCity}
        onChange={chooseCityHandle}
        label="select city"
        >
          {cities?.map((city,index)=><MenuItem value={city} key={index}>{city}</MenuItem>)}
      </Select>
    </FormControl>
    )
  }
  
  export default CitiesDropdown;
  