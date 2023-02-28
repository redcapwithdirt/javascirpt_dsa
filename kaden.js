
function kadenalgo(array){
    // max_so_far
    msf = array[0]
    // max_ending_here
    meh = 0

    for(let i = 0;i<array.length;i++){
        meh = meh + array[i]
        if(msf<meh){
            msf = meh
        }

        if(meh<0){
            meh = 0
        }
    }

    return msf
}





let a = [-2,-3,4,-1,-2,1,5,-3]
console.log(a)
let ans = kadenalgo(a)
console.log("The largest subarray sum is:",ans)