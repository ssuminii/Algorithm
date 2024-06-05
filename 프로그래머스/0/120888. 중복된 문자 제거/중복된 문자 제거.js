function solution(my_string) {
    let result = '';
    for(let str of my_string) {
        if(!result.includes(str)){
            result += str;
        }
    }
    return result;
}