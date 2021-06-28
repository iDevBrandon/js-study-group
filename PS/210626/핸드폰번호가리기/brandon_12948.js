function solution(phone_number) {
    var answer = '';
    // cut the last 4 
    let last_four = phone_number.slice(-4);
    
    // 패드스타트 메소드 이용해, 전체 길이 + * 채워주기 
    answer = last_four.padStart(phone_number.length, '*')
    return answer;
  
  
}
