export function getUniqueArray<T>(array:Array<T>){
    return [...new Set(array)];
};