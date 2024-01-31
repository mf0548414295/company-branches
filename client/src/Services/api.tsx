import { Branch } from '../Models/Branch';
import branches from './branches.json';

export const getBranches: ()=>Branch[] = () => {
  return branches as Branch[];
};
