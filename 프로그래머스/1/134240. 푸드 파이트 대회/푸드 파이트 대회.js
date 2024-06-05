function solution(food) {
    let cal = '';
    for(let i = 1; i < food.length; i++) {
        for(let j=1; j <= ~~(food[i]/2); j++) {
            cal += i;
        } 
    }
    // console.log(cal); 122333
    const reverseCal = [...cal].reverse().join('');
    return cal + 0 + reverseCal;
}