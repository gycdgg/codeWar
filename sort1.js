let arr = [1,2,3,4,5,312,5234,564,456,324,54,3546,234]

// 冒泡排序

function bubble(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length -i; j++)
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }

    return arr
}

console.log(bubble(arr))