function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) { // 1부터 n까지의 수에 대해 반복
        let divisorCount = 0;

        for (let j = 1; j <= n; j++) { // i의 약수를 찾기 위해 1부터 i까지의 수에 대해 반복
            if (i % j === 0) {
                divisorCount++;
            }
        }

        if (divisorCount > 2) {
            answer++;
        }
    }

    return answer;
}