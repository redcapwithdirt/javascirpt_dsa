function maxsum(array,k){
    let n = array.length
    // let ans = 0
    let sum = 0
    for(let i = 0;i<k ;i++){
        sum = sum + array[i]
    }
    let ans = sum 
    for(let i=k;i<n;i++){
        sum = sum + array[i] - array[i-k]
        ans = Math.max(ans,sum)
    }

    return ans
}



let array = [10,3,7,4,2]
console.log("Input Array:",array)
ans = maxsum(array,2)
console.log("Maximum Sub-array",ans)