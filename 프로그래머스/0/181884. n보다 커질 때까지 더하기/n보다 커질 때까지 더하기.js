function solution(numbers, n) {
    let answer = 0;
    numbers.forEach((el) => {
        if (answer > n) return;
        answer += el;
    })
    return answer;
}

