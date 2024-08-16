function solution(num) {
    let result = 0;
    if (num === 1) {
        return 0;
    } else {
        while(num > 1) {
            if(num%2 === 0) {
                num = num / 2;
                result += 1;
            } else {
                num = num * 3+1;
                result += 1;
            }
        }
    }
    return result > 500 ? -1 : result;
}