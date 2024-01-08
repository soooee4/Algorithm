function solution(hp) {
    const hp계산 = hp % 5;
    const 오개미 = parseInt(hp / 5);
    let 삼개미 = 0;
    let 일개미 = 0;
    
    if(hp계산 < 3) {
        일개미 = hp계산;
    } else {
        삼개미 = 1;
        일개미 = hp계산 - 3;
    }
    return 오개미 + 삼개미 + 일개미;
}
