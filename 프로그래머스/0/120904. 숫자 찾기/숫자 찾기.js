function solution(num, k) {
    const Idx = num.toString().split('').findIndex((el) => el === k.toString());
    return Idx !== -1 ? Idx + 1 : -1; 
}