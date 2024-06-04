function solution(s) {
    const obj = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9};
    const key = Object.keys(obj);
    for(let i = 0; i<key.length; i++) {
        if(s.includes(key[i])) {
            s = s.split(key[i]).join(obj[key[i]]);
        }
    }
    return Number(s);
}