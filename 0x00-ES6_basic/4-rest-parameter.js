export default function returnHowManyArguments(initialNumber, ...args) {
    let count = 0;
    if (initialNumber) {
        count = 1;
    }
    count += args.length;
    return count;
}