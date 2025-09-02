

// question--1
var n=3;

var count=5;
let arr=[];

for(var i=n-count+1;i<n;i++){
   
arr.push(i)

}
for(var i=n;i>n-count;i--){
   
   
arr.push(i)

}

console.log(arr.join(" "))

// question--2
var nums = [2, 7, 11,11, 15, -2, 9,-5 ,1,-5,-5];
nums=nums.sort((a,b)=>a-b)
nums =nums.filter((x,index)=>x!=nums[index+1]?x:null)

console.log(nums)
const target =-10;
let miniArr=[]
let mainArr=[]

for(var i=0;i<nums.length-1;i++){
   
       for(var j=i;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
           miniArr=[nums[i],nums[j]];
           mainArr.push(miniArr)
        }
       }
  
}

console.log(mainArr)

//     question-3
var ar1 = [1, 5, 10, 20,20, 40, 80];

var ar2= [6, 7, 20, 80, 100];

 var ar3= [3, 4, 15, 20, 30, 70, 80, 120];
 var mainArr=[];
 
 
 for(var i=0;i<ar1.length;i++){
     for(var j=0;j<ar2.length;j++){
         for(var k=0;k<ar3.length;k++){
             
             if(ar1[i]==ar2[j]&&ar1[i]==ar3[k]){
                 let condition =mainArr.includes(ar1[i]);
                 if(condition ===false){
                     mainArr.push(ar1[i]);
                 }
             }
 }
     
 }
 }
 console.log(mainArr);

//     question-4

let sentence ="the cat and the dog and the rat";

let splitted =sentence.split(" ");

let arr=[];

splitted.forEach((x)=>{
    if(arr.includes(x)==false){
        arr.push(x)
    }
})

for(let i =0;i<arr.length;i++){
    let count=0
   for(let j =0;j<splitted.length;j++){
       
       if(arr[i]==splitted[j]){
           count++;
       }
   
}
console.log(arr[i] +":"+count)

}
