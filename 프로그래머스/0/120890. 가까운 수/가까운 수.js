function solution(array, n) {
    array.push(n);
    array.sort((a, b) => a - b);
    let index = array.indexOf(n);

    if (index === 0) {
        return array[1];
    } else if (index === array.length - 1) {
        return array[array.length - 2];
    } else {
        let before = Math.abs(array[index] - array[index - 1]);
        let after = Math.abs(array[index] - array[index + 1]);
        return before <= after ? array[index - 1] : array[index + 1];
    }
}