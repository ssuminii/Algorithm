function solution(num_list, n) {
    var answer = [[]];
    for(i=0; i<num_list.length; i+=n) {
        answer.push(num_list.slice(i, i+n));
    }
    answer.shift();
    return answer;
}