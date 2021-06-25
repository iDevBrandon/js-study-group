# 문제 풀이

|문제링크|난이도|
|------|---|
|[다음 큰 숫자](https://programmers.co.kr/learn/courses/30/lessons/12911#qna)|2|


유의 사항은 n은 1,000,000 이하의 자연수 입니다. 문제의 효율성으로 봤을 땐, n이 백만이니 O(n^2) 보단 당연히 낮아야 합니다. 즉, 이진수를 loop을 이용하여 직접 구하는 것은 효율성에서 떨어지므로, `Number(n).toString(2); ` 이진수 변환법 사용합니다.

이진수에서 regex를 이용하여 1이 포함된 횟수를 구합니다.  `(binary.toString().match(/1/g)).length;`


```javascript

function solution(n) {

    let binary =Number(n).toString(2); //이진수 변환
    let originBinaryCount = (binary.toString().match(/1/g)).length; //1이 포함된 횟수
    let newBinaryCount=0;

    while(true){
        n+=1;
        
        binary = Number(n).toString(2);
        
        newBinaryCount = (binary.toString().match(/1/g)).length;
        
        if(originBinaryCount===newBinaryCount) break;
        
    }
    
    return n
}

solution(15); 

```

