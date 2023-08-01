export default function cleanSet(set, startString){
    const restString = [];

    set.forEach((value) => {
        if (value.startsWith(startString)){
            restString.push(value.slice(startString.length));
        }
    })
    return restString;
};
