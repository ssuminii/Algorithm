function solution(n)
{
    let sum = 0;
    const nums = [...String(n)].map(v => Number(v));
    for(num of nums) {
        sum += num;
    }
    return sum;
}