function solution(survey, choices) {
    let result = [];
    const obj = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};

    survey.forEach((v, i) => {
        const [p1, p2] = v.split('');

        if (choices[i] < 4) {
            obj[p1] +=  4 - choices[i];
        } else if (choices[i] > 4) {
            obj[p2] += choices[i] - 4;
        }
    });

    obj.R >= obj.T ? result.push('R') : result.push('T');
    obj.C >= obj.F ? result.push('C') : result.push('F');
    obj.J >= obj.M ? result.push('J') : result.push('M');
    obj.A >= obj.N ? result.push('A') : result.push('N');

    return result.join('');

}