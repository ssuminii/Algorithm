function solution(letter) {
    let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return letter.split(' ').map((v)=> alphabet[arr.indexOf(v)]).join('');
}