function solution(num_list) {
    let even = Number(num_list.filter(el => el % 2 === 0).join(''));
    let odd = Number(num_list.filter(el => el % 2 !== 0).join(''));
    return even + odd;
}