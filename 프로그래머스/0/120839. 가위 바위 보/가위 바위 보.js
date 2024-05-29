function solution(rsp) {
    return [...rsp].map((item) => {
        if(item === '2') {
            return '0';
        } else if (item === '0') {
            return '5';
        } else if (item === '5') {
            return '2';
        }
    }).join('');
}