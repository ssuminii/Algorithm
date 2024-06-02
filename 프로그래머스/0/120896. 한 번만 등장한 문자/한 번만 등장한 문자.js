function solution(s) {
    let result = [];
    let s1 = [...s].sort();
    for (let i = 1; i < s1.length; i++) {
        if (s1[i] === s1[i-1] && !result.includes(s1[i])) {
            result.push(s1[i]);
        }
    }
    return s1.filter((v) => !result.includes(v)).join('');
}