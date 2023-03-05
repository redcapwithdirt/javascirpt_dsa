function bubblesort(array,n){
    for(let i = 0;i<n-1;i++){
        for(let j = 0;j<n-1-i;j++){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
}




let array = [12,-2,34,2,0,1,8]
console.log("Array:",array)
bubblesort(array,array.length)
console.log("Sorted Array:",array)

