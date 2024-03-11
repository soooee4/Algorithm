function solution(age) {
    const arr = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));
    const temp = age + ''
    const num = temp.split('').map((el) => parseInt(el))
    return num.map(n => arr[n]).join('');
}

