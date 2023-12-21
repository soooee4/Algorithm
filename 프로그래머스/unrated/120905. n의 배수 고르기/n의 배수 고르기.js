function solution(n, numlist) {
    return numlist.filter((li) => li % n === 0);
}