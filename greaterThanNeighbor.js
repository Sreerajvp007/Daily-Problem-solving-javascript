let arr = [14,5,6,3,10,2];
let newArr =[]

for(let i=0;i<arr.length;i++){
    let flag=0;
    for(let j=i+1;j<arr.length;j++){
    if(arr[i]<arr[j]){
        flag =1
    }
}
if(flag ===0){
    newArr.push(arr[i])
}
}

console.log(newArr)