# 소수만들기 풀이

```javascript

function solution(nums) {
    var answer = -1;
    const selectedNums = 3
    //주어진 숫자 3개 수를 더했을 때 소수가 되는 경우의 개수 
    //3개를 선택하는 경우의 수 구하기 
    let cnt = 0;
    const combArr = getComb(nums,selectedNums)
    for (let comb of combArr){
         if(isPrime(comb)) cnt++; 
    }
    
    return cnt;
}

function isPrime(comb){
    if(comb ===1 ) return false;
    for(let i =2; i<= parseInt(comb**0.5,10);i++ ){
         if(comb%i === 0) return false      
    }
    return true;
}
function getComb(nums,selectedNums){
        
    let temp= Array.from ({length:selectedNums}, ()=>0);
    let res = [];
    dfs(0,0)
    
    function dfs( index,start){
        if(index === selectedNums){
           return res.push( temp.reduce((acc,cur)=> acc+cur,0));
        }else{
                   
            for(let i = start; i<nums.length;i++ ){
                temp[index] = nums[i]; 
                dfs(index+1,i+1)
            }
            
        }
        
    } 
    return res
}

```