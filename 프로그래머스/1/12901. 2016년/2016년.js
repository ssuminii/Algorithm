function solution(a, b) {
    let weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let day = new Date(`2016-${a}-${b}`).getDay();
    return weeks[day];
}