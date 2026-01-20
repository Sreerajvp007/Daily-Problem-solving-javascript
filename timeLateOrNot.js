let employees =[
  "Amit 08:50",
  "Riya 10:00",
  "John 09:10",
  "Sara 04:20"
];

function check(employees){
    let obj ={}
    let ontime=0;
    let late=0;
    let notallow =0; 
    for(let i=0;i<employees.length;i++){
        let hr =employees[i].split(" ")[1].split(":")[0];
        let min =employees[i].split(" ")[1].split(":")[1];
         if(hr>9){
             notallow++;
         }else if(hr<9){
             ontime++;
         }else if(hr==9){
             if(min>15){
                 notallow++;
             }else if(min>0 && min<15){
                 late++;
             }else{
                 ontime++;
             }
         }
    }
    
    return {ontime,late,notallow};
}

console.log(check(employees))