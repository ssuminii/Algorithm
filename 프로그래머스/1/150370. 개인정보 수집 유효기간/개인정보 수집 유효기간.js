function solution(today, terms, privacies) {
    // 오늘 날짜를 변환
    today = today.split('.').map(Number); // [2022, 5, 19]
    const todayInDays = (today[0] * 12 * 28) + (today[1] * 28) + today[2]; // 총 일수 계산

    // 약관 유효기간을 객체로 변환
    const termMap = {};
    terms.forEach(term => {
        const [type, period] = term.split(' ');
        termMap[type] = Number(period) * 28; // 기간을 일수로 변환
    });

    // 개인정보 수집일을 일수로 변환하고, 약관에 따른 만료일을 계산
    const expiredPrivacies = [];
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const dateParts = date.split('.').map(Number);
        const collectionInDays = (dateParts[0] * 12 * 28) + (dateParts[1] * 28) + dateParts[2];
        const expiryInDays = collectionInDays + termMap[type];

        if (expiryInDays <= todayInDays) { // 만료일이 오늘 날짜보다 작거나 같은 경우
            expiredPrivacies.push(index + 1);
        }
    });

    return expiredPrivacies;
}