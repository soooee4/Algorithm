function solution(array) {
    const num = [...array].sort((a, b) => b - a)[0];
    const index = array.findIndex(el => el === num);
    return [num, index]
}