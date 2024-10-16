function solution(s) {
    return s.split(' ').map(v => {
        let result = ''
        for(i=0; i<v.length; i++) {
            if(i%2 === 0) {
                result += v[i].toUpperCase()
            } else result += v[i].toLowerCase()
        }
        return result
    }).join(' ')
}