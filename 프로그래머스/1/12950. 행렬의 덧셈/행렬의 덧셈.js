function solution(arr1, arr2) {
    let result = [];
    let arr = [];
    for(i=0; i<arr1.length; i++) {
        for(j=0; j<arr1[0].length; j++) {
            arr.push(arr1[i][j] + arr2[i][j])
        }
        result.push(arr)
        arr = [];
    }
    return result;
}