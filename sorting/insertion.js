
function insertionsort(array,n){
    for(let step = 0;step <n;step++){
        let key  = array[step]
        let j = step-1

        while(j>=0 && array[j]>key){
            array[j+1] = array[j]
            j--
        }

        array[j+1] = key 
    }
}


let array = [12,-2,34,2,0,1,8]
console.log("Array:",array)
insertionsort(array,array.length)
console.log("Sorted Array:",array)
