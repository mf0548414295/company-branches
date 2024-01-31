export function getUniqueArray<T>(array:Array<T>){
    return [...new Set(array)];
};
export function getClearArray(array:Array<string>){
    return array.map(item=>item.trim());//remove the white space from all the items of array
};