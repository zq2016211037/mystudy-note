// 判断回文数
// * 排序算法
var arr = [43, 1, 23, 29, 27, 12,98,42]
//冒泡
function bubbleSort(arr){
    for(let i = 0; i< arr.length -1; i++) {
        for(let j = 0; j <arr.length - 1 -i; j++){
            if(arr[j] > arr[j +1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // console.log(arr);
}
// bubbleSort(arr)
//选择
function selectSort(arr){
    for(let i = 0, len = arr.length - 1; i < arr.length - 1; i++, len--){
        var maxPos = len;
        var minPos = i;
        for(let j = i; j <= len; j++){
            if(arr[maxPos] < arr[j]){
                maxPos = j
            }
            if(arr[minPos] > arr[j]){
                minPos = j
            }
        }
        var max = arr[maxPos];
        var min = arr[minPos];
        arr[minPos] = arr[i];
        arr[maxPos] = arr[len];
        arr[i] = min;
        arr[len] = max;
    }
    console.log(arr)
}
// selectSort(arr)
//插入
function inserSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        var pos = i + 1;
        var present = arr[pos]
        for(let j = pos; j >=0; j--, pos-- ){
            if(arr[j - 1] > present) {
                arr[j] = arr[j - 1]
            }else{
                break;
            }
        }
        arr[pos] = present;
    }
    console.log(arr)
}
// inserSort(arr)
//快速排序
function quickSort(arr){
    if(arr.length == 0){
        return []
    }
    var left = [];
    var right = [];
    var mid = arr[0];

    arr.forEach(item => {
        if(item > mid){
            right.push(mid)
        }else{
            left.push(mid)
        }
    });
    return quickSort(left).concat(mid).concat(quickSort(right))
}
function quickSort2(arr, start, end){
    if(start > end){
        return;
    }
    var i = start;
    var j = end;
    var pivot = arr[start];

    while(i !== j){
        while(arr[j] >= pivot && i < j){
            j--;
        }
        while(arr[i] <= pivot && i < j){
            i++;
        }
        if(i <  j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[start] = arr[i];
    arr[i] = pivot;

    quickSort2(arr, start, i - 1);
    quickSort2(arr, i + 1, end);
    // return [arr, pivot];
}
quickSort2(arr, 0, arr.length -1)
console.log(arr)
// 希尔排序
var arr = [2,4,6,1,3,5]
function shellSort(arr){
    for(let gap = Math.floor(arr.length/2); gap > 0; gap = Math.floor(gap/2)){
        // console.log(gap)
        for(let i = gap; i < arr.length; i++){  
           let present = arr[i];
           let j;
           for(j = i - gap; j >= 0 && arr[j] < present; j = j - gap){
                arr[j + gap] = arr[j]
           }
           arr[j + gap] = present;
       }
    }
    console.log(arr)
}
// shellSort(arr);

// 归并排序
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    var mid = Math.floor(arr.length / 2)
    var left = arr.slice(0, mid);
    var right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right){
    var result = [];
    // console.log(left, right)
    for(var i = 0, j = 0, m = 0;i < left.length || j < right.length; m++){
        if(i >= left.length){
            result[m] = right[j++];
        }else if(j >= right.length){
            result[m] = left[i++];
        }else if(left[i] < right[j]){
            result[m] = left[i++]
        }else{
            result[m] = right[j++]
        }
    }
    return result;
}
console.log(mergeSort(arr))

// 查找算法（顺序查找、二分查找）
var arr = [23,43,54,645]
function sequenceSearch(arr, goal){
    let i = -1
    arr.forEach((item, index) => {
        if(item == goal){
            i = index;
        }
    })
    return i;
}

// console.log(sequenceSearch(arr, 13));

// function binarySearch(arr, goal){
//     var start = 0;
//     var end = arr.length - 1;

//     while(start < end){
//         let mid = Math.floor((end + 1)/2)
//         console.log(mid, goal, arr[mid])
//         if(arr[mid] == goal){
//             return mid;
//         }else if(arr[mid] > goal){
//             end = mid - 1;
//         }else{
//             start = mid + 1;
//         }
//     }
// }

function binarySearch(arr, goal, start, end){
    if(start > end){
        return false;
    }
    var start = start || 0 ;
    var end = end || arr.length - 1;
    var mid = Math.floor((end + start) / 2)
    if(arr[mid] == goal){
        return mid;
    }else if(arr[mid] > goal){
        return binarySearch(arr, goal, start, mid -1)
    }else{
        return binarySearch(arr, goal, mid + 1, end)
    }
    return false
}
// console.log(binarySearch(arr, 43))
// 高级算法（动态规划、贪婪算法）
// 动态规划
// 1. 爬梯子
function climbStairs(n){
    if(n == 1 || n == 2){
        return n
    };
    var arr = [1, 2];
    for(var i = 2; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i -2]
    }
    return arr[n - 1];
}
// console.log(climbStairs(3))
// 2. 不同路径
function uniquePaths(m, n){
    // if(m ==0 || n == 0){
    //     return 0;
    // }
    var arr = [];
    for(let i = 0;i<= m; i++){
        arr[i] = new Array(n +1)
    }
    for(let i = 0; i <= m; i++){
        arr[i][0] = 0;
    }
    for(let j = 0; j <= n; j++){
        arr[0][j] = 0;
    }
    arr[1][1] = 1
    // console.log(arr)
    for(let i = 0; i<= m; i++){
        for(let j = 0; j <= n;j++){
            if(i == 0 && j == 0){
                continue;
            }
            arr[i][j] == arr[i-1][j] + arr[i][j-1]
        }
    }
    console.log(arr)
    return arr[m][n]
}
// console.log(uniquePaths(4,5))


// 面试题
// 判断回文字符串
function isPalindrom(str){
    return str.split('').reverse().join('') == str
}

//数组去重
// 1. filter（）+ indexOf 过滤
function unique(arr){
    return arr.filter((item, index) => {
        return arr.indexOf(item, index + 1) == -1;
    })
}
// 2. 对象属性
// 3. set函数
function unique(arr){
    return Array.from(new Set(arr))
}
// console.log(unique([2,2,4,1,6,7,34]))

//统计出现最多的字符串
var str = '111122333444444'
function findMaxChar(str){
    var maxChar = '';
    var maxValue = 1;
    var obj = {}
    var arr = str.split('')
    arr.forEach(item => {
        if(item in obj){
            obj[item] ++;
        }else{
            obj[item] = 1;
        }
    })
    for(let item in obj){
        if(obj[item] > maxValue){
            maxValue = obj[item]
        }
    }
    // console.log(maxValue)
}
// findMaxChar(str)

// 找出正整数最大的差值
var arr = [3,4,5,6,21,1]
function getMaxProfit(arr){
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    return max - min;
}
// console.log(getMaxProfit(arr))
