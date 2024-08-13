function solution(phone_number) {
    let a = [...phone_number].slice(0,phone_number.length-4).join('').replace(/[0-9]/g,'*')
    let b = [...phone_number].slice(phone_number.length-4,phone_number.length).join('')
    return a + b;
}