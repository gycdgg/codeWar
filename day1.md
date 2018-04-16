### question1 Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

* Only lower case letters will be used (a-z).
* No punctuation or digitswill be included.
Performance needs to be considered
Examples
```js
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
```

### solution
```js
function scramble(str1, str2) {
  let obj1 = countStr(str1)
  let obj2 = countStr(str2)
  for(let i in obj2){
    if(obj1[i] === undefined){
      return false
      }
    if(obj1[i] < obj2[i]){
      return false
    }
  }
  return true
}

countStr = (str) => {
  let obj = {}
  str.split('').map((v,i)=>{
    if(obj[v] === undefined){
      obj[v] = 1
    } else {
      obj[v]++
    }
  })
  return obj
}
```
构建对象。统计每个字符出现的次数，str2的次数》= str1的

### question Break camelCase

```js
solution('camelCasing') // => should return 'camel Casing'
```

### solution

```js
// complete the function
function solution(string) {
    let _string = string.split('').reduce((pre,cur)=>{
      (cur === cur.toUpperCase()) && (pre += ' ')
      pre += cur
      return pre
    },'')
    
    return _string.trim()
}
```

### Does my number look big in this?
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

### solution

```js
function narcissistic( value ) {
  return value.toString().split('').reduce((pre,cur,index,array) => pre + Math.pow(cur,array.length),0) === value
}

```


### Valid Parentheses
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

### solution

```js
function validParentheses(parens){
  let arr = parens.split('')
  if(arr.filter(v=> v === ")").length !== arr.filter( v => v === "(").length){
    return false
  }
  for(let i = 0; i < parens.length; i++){
    let _arr = arr.slice(0, i+1)
    let left = _arr.filter(v => v === ')').length
    let right = _arr.filter( v => v === '(').length
    if( left > right) return false
}
return true
}

```
