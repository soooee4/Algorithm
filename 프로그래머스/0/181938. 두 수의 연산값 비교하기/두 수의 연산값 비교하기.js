function solution(a, b) {
    let concatValue = parseInt(a+"" + b+"");
    let productValue = 2 * a * b;
    return concatValue >= productValue ? concatValue : productValue;
} 