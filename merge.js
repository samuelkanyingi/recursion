console.log("This was printed recursively");
function mergeSort(arr=[2,5, 1,7]) {
    
    if (arr.length ===1)
         return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right= mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    let results = [];
    let i=0, j=0, k=0;
  
    for(k=0;k<left.length+right.length;k++) {
        if(i<=left.length&&( j>=right.length || left[i]<=right[j])) {
            results.push(left[i++])
        }
        else 
            results.push(right[j++])
    }
    return results
}
let arr = [2, 5 ,6 ,7]
//mergeSort(arr);
console.log(mergeSort());
