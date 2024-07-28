function solution(arr1, arr2) {
    const arr1Sum = arr1.reduce((sum,value) => sum += value);
    const arr2Sum = arr2.reduce((sum,value) => sum += value);
    
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length === arr2.length) {
        if (arr1Sum > arr2Sum) {
            return 1;
        } else if (arr1Sum === arr2Sum) {
            return 0;
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}