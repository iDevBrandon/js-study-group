# 직사각형 별찍기 풀이

```javascript

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const col = Number(n[0]), row = Number(n[1]);
    const oneLine = `${'*'.repeat(col)} \n`
    console.log( oneLine.repeat(row))
    
});

```