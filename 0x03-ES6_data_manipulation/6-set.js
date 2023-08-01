export default function setFromArray(array){
    return (new Set(array));
}

console.log(setFromArray([12, 32, 15, 78, 98, 15]));