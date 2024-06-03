function solution(babbling) {
    const arr = ["aya", "ye", "woo", "ma"];
    return babbling.filter(v => {
        let valid = true;
        let lastMatch = '';
        
        while (valid && v.length > 0) {
            let found = false;
            
            for (let i = 0; i < arr.length; i++) {
                if (v.startsWith(arr[i]) && lastMatch !== arr[i]) {
                    lastMatch = arr[i];
                    v = v.slice(arr[i].length);
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                valid = false;
            }
        }
        
        return valid && v.length === 0;
    }).length;
}