function solution(a, b) {
    const bothOdd = a % 2 === 1 && b % 2 === 1;
    const anyOdd = a % 2 === 1 || b % 2 === 1;
    
    if (bothOdd) {
        return a * a + b * b;
    } else if (anyOdd) {
        return 2 * (a + b);
    } else {
        return Math.abs(a - b);
    }
}