import React, { createContext, PropsWithChildren, useState } from "react";

interface BranchesContextProps {
    selectedArea:string,
    setSelectedArea: React.Dispatch<React.SetStateAction<string>>,
    selectedCity:string,
    setSelectedCity:React.Dispatch<React.SetStateAction<string>>,
    freeTextSearch:string,
    setFreeTextSearch:React.Dispatch<React.SetStateAction<string>>
}

export const BranchesContext = createContext<BranchesContextProps>({
  selectedArea:'',
  setSelectedArea:()=>{},
  selectedCity:'',
  setSelectedCity:()=>{},
  freeTextSearch:'',
  setFreeTextSearch:()=>{}
});

interface TilesProviderProps {}

export const BranchesProvider: React.FC<PropsWithChildren<TilesProviderProps>> = (
  props
) => {
const [selectedArea,setSelectedArea]=useState<string>('');
const [selectedCity,setSelectedCity]=useState<string>('');
const [freeTextSearch,setFreeTextSearch]=useState<string>('');

  return (
    <BranchesContext.Provider 
      value={{
        selectedArea,
        setSelectedArea,
        selectedCity,
        setSelectedCity,
        freeTextSearch,
        setFreeTextSearch
      }}
    >
      {props.children}
    </BranchesContext.Provider>
  );
};
