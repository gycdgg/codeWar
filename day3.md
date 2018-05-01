## question1
Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

solution1:
```js
function divisors(integer) {
  let arr = []
  for(let i = 2; i< integer; i++){
    Number.isInteger(integer/i) && arr.push(i,integer/i)
  }
  let _arr = [...(new Set(arr))]
  if (_arr.length === 0) return `${integer} is prime`
  return _arr.sort((a,b)=> a - b)
};
```

## question2

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

```js
your_order("is2 Thi1s T4est 3a")
[1] "Thi1s is2 3a T4est"
```

## solution

```js

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}

```