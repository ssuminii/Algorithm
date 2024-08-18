function solution(n) {
    let world = ''
    for(i=0; i<n; i++) {
        if(i%2 === 0) {
            world += '수'
        } else {
            world += '박'
        }
    }
    return world;
}