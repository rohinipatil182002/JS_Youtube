const arr=[2,4,5,6,7,8,9,10];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//  console.log(arr[i]);
//     }
   
// }

// console.log("Multiplication Table\n");
// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("\n");
// }

// for(let i=0;i<10;i++){
//     if(i==5){
//         console.log("5 is found");
//         break;
//     }
//     console.log(i);
// }

for(let i=0;i<10;i++){
    if(i==5){
        console.log("5 is found")
        continue
    }
    console.log(i);
}