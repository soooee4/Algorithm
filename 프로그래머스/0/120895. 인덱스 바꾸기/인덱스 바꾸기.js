function solution(my_string, num1, num2) {
    const splitArr = my_string.split('');
    [splitArr[num1], splitArr[num2]] = 
    [splitArr[num2], splitArr[num1]].join('');
    return splitArr.join('')
}