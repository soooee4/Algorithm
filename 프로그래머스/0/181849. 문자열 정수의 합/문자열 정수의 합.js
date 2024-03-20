function solution(num_str) {
    let answer = 0;
    [...num_str].forEach((el) => {
        answer += Number(el); 
    });
    return answer;
}