function solution(s) {
    let parts = s.split(' ');
    let stack = [];

    for (let part of parts) {
        if (part === 'Z') {
            stack.pop();
        } else {
            stack.push(part);
        }
    }

    return stack.map(Number).reduce((a,b) => a+b,0);
}