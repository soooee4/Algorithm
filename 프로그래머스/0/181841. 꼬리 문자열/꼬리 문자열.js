function solution(str_list, ex) {
    const answer = str_list.filter((el) => !el.includes(ex)).join('');
    return answer;
}