const {readFileSync, writeFileSync} = require ('fs')
const first = readFileSync('./content/first.txt','utf8');
const secounds = readFileSync('./content/secound.txt','utf8');
console.log(first,secounds)
writeFileSync(
    './content/result_sync.txt',`Here is the result : ${first}, ${secounds}`,{flag: 'a'}
)