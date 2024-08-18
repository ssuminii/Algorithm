function solution(price, money, count) {
    let result = 0
    for(i=1; i<=count; i++) {
        result += (i*price)
    }
    return result - money > 0 ? result - money : 0 ;
}