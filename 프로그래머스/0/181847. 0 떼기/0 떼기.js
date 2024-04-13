function solution(n_str) {
    let i;
    for (i = 0; i < n_str.length && n_str[i] === '0'; i++) {
    }
    return n_str.substring(i);
}