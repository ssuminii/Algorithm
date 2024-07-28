function solution(num_list) {
    let answer = [];
    const result = num_list.sort((a,b) => a-b);
    for(i=0; i<=4; i++) {
        answer.push(result[i]);
    }
    return answer;
}