function solution(num_list) {
    let even = [];
    let odd = [];
    const answer = [];
    num_list.forEach((el) => {
        if(el % 2 === 0) {
            even.push(el);
        } else {
            odd.push(el);
        }});
    answer.push(even.length, odd.length);
    return answer;
} 