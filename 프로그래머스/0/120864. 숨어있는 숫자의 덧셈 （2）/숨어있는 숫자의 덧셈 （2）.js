function solution(my_string) {
    let result = my_string.match(/\d+/g)?.map(Number).reduce((a,b) => a+b,0);
     return my_string.match(/\d+/g) !== null ? result : 0;
}