function bubblesort(array,n){
    if(n==1){
        return 
    }

    let count = 0
    for(let i = 0;i<n-1;i++){
        if(array[i]>array[i+1]){
            let temp = array[i]
            array[i] = array[i+1]
            array[i+1] = temp
            count++
        }
    }

    if(count==0){
        return 
    }

    bubblesort(array,n-1)
    
}





let array = [2,-4,-9,10,11,23,4,2,-2]
console.log("Array:",array)
bubblesort(array,array.length)
console.log("Sorted Array:",array)
