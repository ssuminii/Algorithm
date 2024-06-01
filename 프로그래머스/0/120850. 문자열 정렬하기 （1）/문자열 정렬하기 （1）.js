function solution(my_string) {
    return [...my_string].filter((v) => !isNaN(v)) .map(Number).sort((a, b) => a - b); 
}