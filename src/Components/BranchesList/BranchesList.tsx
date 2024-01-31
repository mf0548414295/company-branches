import { useContext, useEffect, useState } from "react";
import { BranchesContext } from "../../Context/branchesContext";
import { Branch } from "../../Models/Branch";
import { getBranches } from "../../Services/api";
import "./BranchesList.css";

function BranchesList() {
  const {freeTextSearch,selectedArea,selectedCity}=useContext(BranchesContext);
  const [filteredBranches,setFilteredBranches]=useState<Branch[]>();

  useEffect(()=>{
    let branches=getBranches();
    if(selectedArea){
      branches=sortByArea(branches);
    }
    if(selectedCity){
      branches=sortByCity(branches);
    }
    if(freeTextSearch){
      branches=sortByFreeTextSearch(branches);
    }
    setFilteredBranches(branches);
  },[freeTextSearch,selectedArea,selectedCity]);

  const sortByArea=(branches:Branch[])=>{
    return branches.filter(branch=>branch.store_region===selectedArea)
  };
  const sortByCity=(branches:Branch[])=>{
    return branches.filter(branch=>branch.city.trim()===selectedCity);
  };
  const sortByFreeTextSearch=(branches:Branch[])=>{
    return branches.filter(branch=>Object.keys(branch).find((key=>//get all items in one branch
      String(branch[key as keyof Branch]).includes(freeTextSearch))))//and check if the entered free text includes in the item
  };

  return (
  <>{
    filteredBranches?.map((branch,index)=>
    <ul className="table" key={index}>
        <li className="row">
            <span className="cell">{branch.store_id}</span>
            <span className="cell">{branch.store_title}</span>
            <span className="cell">{branch.store_address}</span>
            <span className="cell">{branch.city}</span>
            <span className="cell">{branch.store_region}</span>
        </li>
    </ul>)}
  </>
  )}

export default BranchesList;
