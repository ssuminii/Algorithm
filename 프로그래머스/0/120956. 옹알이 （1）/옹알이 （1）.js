function solution(babbling) {
    const arr = ["aya", "ye", "woo", "ma"];
    return babbling.filter(v => {
        for (let i of arr) {
            v = v.split(i).join(' ');
        }
        return v.trim() === '';
    }).length;
}