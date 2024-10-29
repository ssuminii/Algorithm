function solution(s, n) {
    let result = [];
    
    for (let char of s) {
        let num = char.charCodeAt();
        
        if (char === ' ') {
            result.push(' '); 
        } else if (num >= 65 && num <= 90) { 
            num = ((num - 65 + n) % 26) + 65; 
            result.push(String.fromCharCode(num));
        } else if (num >= 97 && num <= 122) {  
            num = ((num - 97 + n) % 26) + 97;  
            result.push(String.fromCharCode(num));
        }
    }
    
    return result.join('');
}