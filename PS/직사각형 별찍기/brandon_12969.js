process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a); // same as n
    // console.log(b); // same as m
     
        
    let row = '*'.repeat(a);
     // console.log(row) // *****
    let answer = ''
   
    for(let i=0; i<b; i++) {
        answer += row + '\n'
    }
    
    console.log(answer)
    
});


// n = 5; 가로
// m = 3; 세로
