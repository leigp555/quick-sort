// 1.快排

function quickSort(numbers){
    if(numbers.length<=1){return numbers}
    const pointIndex=Math.floor(numbers.length/2)
    const point=numbers.splice(pointIndex,1)
    const left=[]
    const right=[]
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>point){
            right.push(numbers[i])
        }else{
            left.push(numbers[i])
        }
    }
    return quickSort(left).concat(point).concat(quickSort(right))
}

const arr=[100,25,31,999,522]

console.log(quickSort(arr))


function mergeSoft(numbers){
    if(numbers.length<=1){return numbers}
    const pointIndex=Math.floor(numbers.length/2)
    const left=numbers.slice(0,pointIndex)
    const right=numbers.slice(pointIndex)
    return merge(mergeSoft(left),mergeSoft(right))
}
function merge(a,b){
    console.log(a,b)
    if(a.length===0)return b
    if(b.length===0)return a
    return a[0]>b[0]?[b[0]].concat(merge(a,b.slice(1))):[a[0]].concat(merge(a.slice(1),b))
}

const arr2=[100,25,31,999,522]

console.log(mergeSoft(arr2))