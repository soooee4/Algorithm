function solution(cipher, code) {
    const cipherArr = cipher.split("");
    let answerArr = cipherArr.filter((word, i) => 
        (i + 1) % code === 0);
    return answerArr.join("")

}