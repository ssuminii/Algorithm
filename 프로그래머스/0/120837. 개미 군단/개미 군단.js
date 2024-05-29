function solution(hp) {
    let result5 = ~~(hp/5)
    let rest5 = hp%5;
    let result3 = ~~(rest5/3);
    let result1 = rest5%3;
    return result5 + result3 + result1;
}