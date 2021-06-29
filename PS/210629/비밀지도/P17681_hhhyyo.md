내풀이

```javascript
function solution(n, arr1, arr2) {
    //공백으로 초기화된 크기 n*n 2차원 배열 만들기
    let answer = Array.from(Array(n),()=>Array(n).fill(' '));
    //2진수로 변경 후 n*n 배열로 만드는 함수
    let a=f1(n,arr1);
    let b=f1(n,arr2);
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(a[i][j]==1 || b[i][j]==1)
                answer[i][j]="#";
        }
    }

    for(let i=0;i<n;i++){
        //문자열로 만들기
        answer[i]=answer[i].join('')
    }
  
    return answer;
}

function f1(n,arr){
    let ret=new Array(n).fill(0);
    
    arr.forEach((v,i)=>{
        let bin=v.toString(2)
        let len=bin.length;
        //2진수로 만들었을때 길이가 n보다 짧으면 0을 차이나는 만큼 앞에 붙이기
        if(len<n){
            bin='0'.repeat(n-len)+bin;
        }
        ret[i]=bin.split('');
    })
    
    return ret;
}
```



