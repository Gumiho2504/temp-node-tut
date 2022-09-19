// Modules - Encapsulate code (only share minimun)
// CommonJS every file is module (by default)
// const names = require('./4-name')
// const sayHI = require('./5-utiil')
// console.log(names)
// console.log(sayHI)
// sayHI('khim')
// sayHI(names.peter)
// sayHI(names.john)
// const data = require('./6_alternative_flavor')
// console.log(data)
// const { readFile, writeFile} = require('fs')
// readFile('./content/first.txt',(err,result)=> {
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
// })
const _= require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

