# 로또의 최고 순위와 최저 순위


`unkownLottoCount:` 0 인 로또 번호
`winningNumCount` : 실제 로또 당첨번호와 맞은 개수
`lottoMap`: `key` : 민우가 가진 로또 번호, `value`: 1 
`highestRank` : 높은 순위를 가질 가능성은  0 인 로또 번호의 개수 + 로또 당첨번호와 맞은 개수
`lowestRank` : 민우가 가진 0인 번호가 모두 맞지 않을경우, 즉 오직 실제 로또 당첨번호와 맞은 개수만 포함된다. 


```javascript


function solution(lottos, win_nums) {
    var answer = [];
    const lottoMap = new Map();
    let unkownLottoCount = 0; 
    let winningNumCount = 0;
    
    //map에  할당 
    for (let lotto of lottos){
        if(lotto===0){
            unkownLottoCount++;
        }else{
            lottoMap.set(lotto,1);                 
        }
    }
    for (let num of win_nums){
            //winning num count
           if(lottoMap.has(num)){
               winningNumCount++;
           }
        
    }
    
    const rank=[6,6,5,4,3,2,1]
    let highestRank = rank[unkownLottoCount+winningNumCount];
    let lowestRank=  rank[winningNumCount]
    
    answer.push(highestRank,lowestRank)
    return answer;
}

```