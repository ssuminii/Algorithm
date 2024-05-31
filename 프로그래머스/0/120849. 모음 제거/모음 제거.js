function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return [...my_string].filter((item) => !vowels.includes(item)).join('');
}