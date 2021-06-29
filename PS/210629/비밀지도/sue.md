# 비밀지도 풀이

```javascript

function solution(n, arr1, arr2) {
    var answer = [];

    //1. create binary map 
    const arr1Map = createBinaryMap(arr1, n);
    const arr2Map = createBinaryMap(arr2, n);
    //2. arr1Map, arr2Map 완탐으로 돌면서 answer에 update
    for (let i = 0; i < n; i++) {
        let str = ""; //매 row에 들어갈 emtpy string
        answer.push([]); //새로운 row 만들기
     
        for (let j = 0; j < n; j++) {
            
            if (arr1Map[i][j] === "1" || arr2Map[i][j] === "1") {
                str += "#";
            }
            if (arr1Map[i][j] === "0" && arr2Map[i][j] === "0") {
                str += " ";
            }

        }
        answer[i] = str;
    }
    return answer;
}

function createBinaryMap(arr1, n) {
    return arr1.map((v, i) => {
        let row = v.toString(2);
        //2진수변환후, 생략된 0을 n개수만큼 채우기
        row = row.length < n ? '0'.repeat(n - row.length) + row : row
        return row.split('');
    });

}

```