function solution(myString) {
    let answer = [];
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'a') {
            answer.push('A'); 
        } else if (myString[i] === myString[i].toUpperCase() && myString[i] !== 'A') {
            answer.push(myString[i].toLowerCase());
        } else {
            answer.push(myString[i]);
        }
    }
    return answer.join('');
}
