function solution(my_string) {
    let result = [...my_string].filter((item) => {
        return !isNaN(item) && item !== ' '
    }).map(Number);
    return result.reduce((sum,value) => sum+=value, 0);
}