function solution(sides) {
    const temp = sides.sort((a, b) => b - a);
    if (temp[0] < temp[1] + temp[2]) return 1;
    else return 2;
}
