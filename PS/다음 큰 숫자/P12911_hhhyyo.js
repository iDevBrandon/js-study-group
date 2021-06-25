//toString(2)로 이진수로 변환하고
//count 함수를 만들어서 1의 개수를 세주었습니다
//숫자를 1씩 올리면서 1의 개수가 같을때 답

function solution(n) {
    let answer = 0;
    let bin = n.toString(2);
    let next = n+1;
    let cnt = count(bin);
    
    while(1){
        let next_bin=next.toString(2);
        if(count(next_bin)==cnt){
            answer=next;
            break;
        }
        next++;
    }
    
    return answer;
}

function count(bin){
    
    let count = 0;
    
    for (let i=0;i<bin.length;i++){
        if (bin[i]=='1'){
            count++;
        }
    }
    
    return count;
}
