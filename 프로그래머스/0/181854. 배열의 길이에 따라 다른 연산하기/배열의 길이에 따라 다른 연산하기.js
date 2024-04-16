function solution(arr, n) {
    const isOdd = arr.length % 2 !== 0;
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if ((isOdd && i % 2 === 0) || (!isOdd && i % 2 !== 0)) {
            answer.push(arr[i] + n);
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}
