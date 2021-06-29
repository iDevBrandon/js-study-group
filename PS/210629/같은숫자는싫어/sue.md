# 같은 숫자는 싫어 풀이

```javascript

function solution(arr) {
    let cnt = 1;
    let answer = [];

    arr.forEach((v, i) => {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i])
            cnt = 1
        } else {
            cnt++;
        }
    });
}

```