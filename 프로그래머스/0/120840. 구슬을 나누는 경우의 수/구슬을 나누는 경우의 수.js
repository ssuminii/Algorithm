function solution(balls, share) {
    let ballSum = BigInt(1);
    for(i=BigInt(1); i<=balls; i++) {
        ballSum *= i
    }
    
    let sub = balls-share;
    let subSum = BigInt(1);
    for(i=BigInt(1); i<=sub; i++) {
        subSum *= i
    }
    
    let shareSum = BigInt(1);
    for(i=BigInt(1); i<=share; i++) {
        shareSum *= i;
    }
    return ballSum / (subSum * shareSum);
    
}