function solution(babbling) {
    const arr = ["aya", "ye", "woo", "ma"];
    return babbling.filter(v => {
        for(i=0; i<arr.length; i++) {
            // 공백 넣어주기,,
            v = v.split(arr[i]).join(' ');
        }
        return v.trim() === '';
    }).length;
}