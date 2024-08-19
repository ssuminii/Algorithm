function solution(arr1, arr2) {
    return arr1.map((v, i1) => v.map((v, i2) => v+arr2[i1][i2]));
}