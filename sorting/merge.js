
function mergesort(array){
    if(array.length>1){
        let n = Math.floor(array.length/2)

        let l = []
        let m = []

        

        for(let i = 0;i<n;i++){
            l.push(array[i])
        }
        for(let i = n;i<array.length;i++){
            m.push(array[i])
        }

        mergesort(l)
        mergesort(m)

        let i = 0
        let j = 0
        let k = 0

        while(i<l.length && j<m.length){
            if(l[i]<m[j]){
                array[k] = l[i]
                i++
            }
            else{
                array[k] = m[j]
                j++
            }
            k++
        }

        while(i<l.length){
            array[k] = l[i]
            i++
            k++
        }

        while(j<m.length){
            array[k] = m[j]
            k++
            j++
        }

    }
}




let array = [10,3,2,42,-4,-5,-10]
console.log("Array:",array)
mergesort(array)
console.log("Sorted Array:",array)