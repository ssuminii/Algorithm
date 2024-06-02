function solution(dot) {
    if(Math.sign(dot[1]) === 1) {
        return Math.sign(dot[0]) === 1 ? 1 : 2;
    } else if (Math.sign(dot[1]) === -1) {
        return Math.sign(dot[0]) === -1 ? 3 : 4;
    }
}