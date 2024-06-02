function solution(n) {
    for(i=1; i<10000000000; i++) {
        if((6*i)%n === 0) {
            return i;
        }
    }
}