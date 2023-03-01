
function dutch(array){
    let len = array.length
    let high = len-1
    let mid = 0
    let low = 0

    while(mid<high){
        if(array[mid]==0){
            [array[mid],array[low]] = [array[low],array[mid]]
            mid++
            low++
        }
        else if(array[mid]==1){
            mid++
        }
        else{
            [array[mid],array[high]] = [array[high],array[mid]]
            high--
        }
    }
}



let array = [0,1,2,2,0,2,0,2,1,1,0,0,0]
console.log("Input Array:",array)
dutch(array)
console.log("Output Array:",array)