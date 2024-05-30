function solution(s1, s2) {
    return s1.filter((item) => {
        for(i=0; i<s2.length; i++) {
            if(item === s2?.[i]) {
                return item;
            }
        } 
    }).length;
}
