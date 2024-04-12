function solution(arr, delete_list) {
   const answer = arr.filter(element => !delete_list.includes(element));
  
  return answer;
}