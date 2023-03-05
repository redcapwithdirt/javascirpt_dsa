function inserttionsort(array,n){
    if(n<=1){
        return
    }

    inserttionsort(array,n-1)

    let last = array[n-1]
    let j = n-2

    while(j>=0 && array[j]>last){
        array[j+1] =array[j]
        j--
    }

    array[j+1]= last
}



let array = [-9,1,-10,0,4,55,2]
console.log("Array:",array)
inserttionsort(array,array.length)
console.log("Sorted Array:",array)
