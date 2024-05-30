function solution(my_string) {
    return [...my_string].map((item) => {
        for(i=0; i<my_string.length; i++) {
            if(item === item.toUpperCase()) {
                return item.toLowerCase();
            } else if (item === item.toLowerCase()) {
                return item.toUpperCase();
            } 
        }
    }).join('');
}