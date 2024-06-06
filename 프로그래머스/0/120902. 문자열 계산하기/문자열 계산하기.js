function solution(my_string) {
    let strings = my_string.split(' ');
    let total = 0;
    let currentOperation = '+';

    for(let string of strings) {
        if (string === '+' || string === '-') {
            currentOperation = string;
        } else {
            let number = Number(string);
            if (currentOperation === '+') {
                total += number;
            } else if (currentOperation === '-') {
                total -= number;
            }
        }
    }
    return total;
}