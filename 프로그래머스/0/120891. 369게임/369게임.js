function solution(order) {
    const nums = order + '';
    let result = 0;
    [...nums].forEach((el) => {
        if(el === '3' || el === '6' || el === '9') { 
            result++;
        }
    });
    return result;
}