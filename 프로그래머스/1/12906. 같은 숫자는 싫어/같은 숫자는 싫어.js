function solution(arr)
{
    let numbers = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i-1]) {
            numbers.push(arr[i]);
        }
    }
    return numbers;
}