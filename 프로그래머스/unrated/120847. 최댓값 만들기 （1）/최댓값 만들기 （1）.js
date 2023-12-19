function solution(numbers) {
    let arr = [];
    arr = numbers.sort((a, b) => b - a).map((el) => parseInt(el))
    return arr[0] * arr[1]
}