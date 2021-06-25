내가 푼 방법

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(let i=0;i<b;i++){
        for(let j=0;j<a;j++){
            process.stdout.write('*'); //줄바꿈없이 a번만큼 출력
        }
        console.log() //줄바꿈
    }
});
```



다른 사람 풀이1

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});
```



다른 사람 풀이2

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
	
  let result = "";

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      result += '*';
    }
    result += '\n'
  }
  
  console.log(result);

});
```

