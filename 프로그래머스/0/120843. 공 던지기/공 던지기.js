function solution(numbers, k) {
    if (2*k-1 < numbers.length) {
        return numbers[2*k-2];
    } else {
        let x = 2 * k - 1;
        while (x > numbers.length) {
            x -= numbers.length;
        }
        return numbers[x - 1];
    }
}