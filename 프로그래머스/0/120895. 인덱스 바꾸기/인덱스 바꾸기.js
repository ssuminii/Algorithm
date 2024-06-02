function solution(my_string, num1, num2) {
    let string = [...my_string]
    string.splice(num1, 1, my_string[num2]);
    string.splice(num2, 1, my_string[num1]);
    return string.join('');
}