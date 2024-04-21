function solution(strArr) {
   const answer = strArr.filter(el => !el.includes('ad'));
    return answer;
}