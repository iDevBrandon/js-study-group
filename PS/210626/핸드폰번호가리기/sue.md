# 핸드폰 가리기 풀이


`formalDigit` :  마지막 4자리를 제외한 번호들

`latterDigit` : 마지막 4자리 번호


```javascript

function solution(phone_number) {
    
    const formalDigit = phone_number.substr(0,phone_number.length-4);
    const latterDigit = phone_number.substr(phone_number.length-4);
    
    return formalDigit.replace(/\d/g,'*') +latterDigit;
}

```