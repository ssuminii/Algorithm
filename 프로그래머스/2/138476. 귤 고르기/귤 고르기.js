function solution(k, tangerine) {
    const count = {};
    
    tangerine.forEach(v => {
        if (count[v] === undefined) {
            count[v] = 0;
        }
        count[v] += 1;
    });
    // console.log(count);
    // { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2 }
    
    const tangerines = Object.values(count).sort((a, b) => b - a);
    // console.log(tangerines);
    // [2, 2, 2, 1, 1]

    let total = 0;
    let result = 0;

    for (let t of tangerines) {
        total += t;
        result++;
        if (total >= k) {
            break;
        }
    }
    return result;
}