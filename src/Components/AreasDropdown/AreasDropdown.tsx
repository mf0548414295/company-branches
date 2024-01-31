import { useContext, useEffect, useState } from "react";
import { getBranches } from "../../Services/api";
import { BranchesContext } from "../../Context/branchesContext";
import { getUniqueArray } from "../CommonFunctions";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { areasSelect } from "./AreasDropdown.StyleSheet";

function AreasDropdown() {
    const {selectedArea,setSelectedArea}=useContext(BranchesContext);
    const [areas,setAreas]=useState<string[]>();

    useEffect(()=>{
        const areas=getBranches().map(branch=>branch.store_region);//get all the areas of branches
        const areasUniqueArray = getUniqueArray(areas).sort((a,b)=>Number(a)-Number(b));
        //remove the duplicate areas and sort the array
        setAreas(areasUniqueArray);
    },[]);

    const chooseAreaHandle=(event:SelectChangeEvent<string>)=>{
        setSelectedArea(event.target.value);
    };

    return (
      <FormControl sx={areasSelect}>
        <InputLabel>select area</InputLabel>
          <Select
          value={selectedArea}
          onChange={chooseAreaHandle}
          label="select area"
          >
            {areas?.map((area,index)=><MenuItem value={area} key={index}>{area}</MenuItem>)}
          </Select>
    </FormControl>
    )
  }
  
  export default AreasDropdown;
  