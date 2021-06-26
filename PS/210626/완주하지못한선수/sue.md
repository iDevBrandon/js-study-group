# 완주하지 못한 선수 

완주하지 못한 단 한명의 선수를 찾는 다는 것은 완주한 선수 리스트와 참가한 선수 리스트의 길이차이가 1.

두개의 다른 배열에서 각 아이템을 매치하여 포함되지 않는 하나를 찾는데 효율적인 방법은 sort()를 해서 리스트의 인덱스의 값이 다른 하나를 찾으면 된다. 

```sortedParticipant```: 오름 차순으로 정렬된 참가자 배열

```sortedCompletion``` : 오름 차순으로 정렬된 완주한 참가자 배열

```javascript

function solution(participant, completion) {
 
    const sortedParticipant = participant.sort();
    const sortedCompletion = completion.sort();

    for(let i = 0; i <sortedParticipant.length;i++){
        if (sortedParticipant[i]!==sortedCompletion[i]){
            return sortedParticipant[i]
        }
    }

 
}

```