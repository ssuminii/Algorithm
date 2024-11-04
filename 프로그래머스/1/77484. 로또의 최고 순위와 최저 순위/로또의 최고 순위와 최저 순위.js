function solution(lottos, win_nums) {
    let match = 0;
    let zero = lottos.filter(v => v === 0).length;
    
    for(let win_num of win_nums) {
        for(let i = 0; i < lottos.length; i++) {
            if(win_num === lottos[i]) {
                match += 1
            }
        }
    }
    
    switch(match) {
        case 6:
            return [1, 1]
        case 5:
            return [2-zero, 2]
        case 4:
            return [3-zero, 3]
        case 3:
            return [4-zero, 4]
        case 2:
            return [5-zero, 5]
        case 1:
            return [6-zero, 6]
        case 0:
            return zero ? [7-zero, 6] : [6, 6]
    }
    
}