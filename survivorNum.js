// In a number arena, only survivor numbers are allowed to remain. A number is considered a survivor if it satisfies at least one of the following conditions: 
// The number appears more than twice in the array 
// The number appears more than once and is an even number
// Any number that does not satisfy these conditions is not a survivor and must be removed. 

// The original order of elements must NOT be changed Do not sort the array

// Input [9, 10, 10, 3, 12, 12, 12, 5, 6, 6, 7, 8, 8] 
// Output [10, 10, 12, 12, 12, 6, 6, 8, 8]

let arr = [9, 10, 10, 3, 12, 12, 12, 5, 6, 6, 7, 8, 8] ;
let newArr= [];
let count;
for(let i=0;i<arr.length;i++){
    count =0
    for(let j=0;j<arr.length;j++){
         
        if(arr[i]==arr[j]){
            count++;
        }
    
}
if(count>1 && arr[i]%2==0){
    newArr.push(arr[i])
}
}

console.log(newArr)