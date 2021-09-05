// npm i <packageName>  (local use in project)
// npm i -g <packageName>  (global use in any project)

// package.json by npm init(step by step) or npm init -y(everything default)


const loadash = require('loadash')

const items= [1, [2, [3, [4]]]]
const newItems= loadash.flattenDeep(items)
console.log(newItems);