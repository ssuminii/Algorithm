function solution(babbling) {
    const arr = ["aya", "ye", "woo", "ma"];
    return babbling.filter(v => {
        for(i=0; i<arr.length; i++) {
            v = v.split(arr[i]).join(' ');
        }
        return v.trim() === '';
    }).length;
}