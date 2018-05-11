## question 1
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

### solution 1
```js
function expandedForm(num) {
  let arr = []
  num += ""
  let len = num.length
  for(let i = 0; i < len; i++){
    let rest = num%10
    num = Math.floor(num/10)
    rest && arr.unshift(rest*Math.pow(10,i))
  }
  return arr.join(' + ')
}
```

## question 2
Write function avg which calculates average of numbers in given list.
### solution
```js
function find_average(array) {
  return array.reduce((pre,cur) => pre += cur,0)/array.length
}
```
