function solution(x) {
    const div = [...String(x)].map(v => Number(v)).reduce((sum,value) => sum += value)
    return x%div === 0 ? true : false;
}