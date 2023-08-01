export default function hasValuesFromArray(set, array){
    let bool;
    for (let i=0; i<array.length; i++){
        if (set.has(array[i]) === false){
            return false;
        }
        bool = true;
    }
    return bool;
}
