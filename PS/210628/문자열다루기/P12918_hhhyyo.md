isNaN() 함수는 어떤 값이 NaN인지 판별

지수형식("1e22")나 16진법("0x7d") 을 isNaN() 함수로 판별하면 false가 나온다

이 문제에서는 숫자로만 구성돼있는지 확인해야되기때문에 isNaN함수만으로 확인하면 틀림

```javascript
function solution(s) {
    var answer = true;
    
    if(s.length==4 || s.length==6){
        if(parseInt(s,10)!=s)
            answer=false;
    }else{
        answer=false;
    }
    
    return answer;
}
```


  