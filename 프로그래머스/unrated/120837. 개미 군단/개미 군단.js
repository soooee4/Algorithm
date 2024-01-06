function solution(hp) {
    if (hp % 5 === 0) {
        return Math.floor(hp / 5);
    } else if (hp % 5 === 1 || hp % 5 === 3) {
        return Math.floor(hp / 5) + 1;
    } else {
        return Math.floor(hp / 5) + 2;
    }
}
