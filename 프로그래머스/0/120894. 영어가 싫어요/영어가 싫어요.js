function solution(numbers) {
    let num = '';
    let result = [];
    const obj = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, }
    for(let number of numbers) {
        num += number;
        for(i=0; i<11; i++) {
            if(num === Object.keys(obj)[i]) {
                result.push(Object.values(obj)[i]);
                num = '';
                break;
            }
        }
    }
    return +result.join('');
}