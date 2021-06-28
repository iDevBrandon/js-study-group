```javascript
function solution(num) {
    var answer = 0;
    
    while(1){
        if(answer==500)
            return -1;
        if(num==1)
            break;
        
        if(num%2==0)
            num/=2;
        else{
            num*=3;
            num+=1;
        }
        
        answer++;
    }
    return answer;
}
```

