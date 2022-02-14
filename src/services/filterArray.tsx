export default function filterArray(arr:string[], itemsPerCard:number){
    let startIndex = 0

    const separatedArray = []

    for(let i = 0; i < Math.ceil(arr.length/itemsPerCard); i++){
        separatedArray.push(arr.slice(startIndex, startIndex + itemsPerCard))
        startIndex += itemsPerCard
    }

    return separatedArray
}