function solution(n, arr1, arr2) {
    let result = [];
    
    arr1 = arr1.map(v => v.toString(2)); // ["101110","100001","100001","10110","11111","110010"]
    arr2 = arr2.map(v => v.toString(2)); // ["11011","111000","10011","1110","1110","1010"]

    
    for(i=0; i<arr1.length; i++) {
        result.push(Number(arr1[i]) + Number(arr2[i]));
    }
    
    result = result.map(v => v.toString().padStart(n, '0'));;
    
    return result.map(v => [...v.toString()].map(num => num.replaceAll(0, ' ').replaceAll(1, '#').replaceAll(2, '#')).join(''));
}