function solution(box, n) {
    return box.map(v => ~~(v/n)).reduce((a,b) => a*b,1);
}