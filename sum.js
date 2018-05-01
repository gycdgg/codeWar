// var test = (function(a){
//     this.a = a;
//     return function(b){
//         return this.a + b
//     }
// }(function(a,b){
//     return a
// }(1,2)))

// console.log(test(4))


//全排列问题
let str = 'abcd'

// function sort(str){
//     if(str.length <= 1) return [str]
//     let left = str[0]
//     let arr = []
//     let rest = str.substr(1)
//     let strArr = sort(rest)
//     for(let i = 0; i < strArr.length; i++){
//         for(let j = 0 ; j < strArr[i].length + 1; j++){
//             let subStr = strArr[i].slice(0,j) + left + strArr[i].slice(j)
//             arr.push(subStr)
//         }
//     }
//     return arr
// }


function sort(str){
    if(str.length <= 1) return [str]
    let left = str[0]
    let arr = []
    let rest = str.substr(1)
    let strArr = sort(rest)
    strArr.forEach(v=>{
        for(let j = 0; j <= v.length; j++){
            let _str = v.slice(0,j) + left + v.slice(j)
            arr.push(_str)
        }
    })
    return arr
}
console.log(sort(str))