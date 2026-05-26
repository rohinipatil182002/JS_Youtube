// let value=0
// while(value<10){
//     console.log(`value is ${value}`)
//     value++
// }

// let score=2

// while(score<=20){
//     console.log(`your score is ${score}`)
//     score+=2
// }

// let index=1;
// do{
//     console.log(`index is ${index}`)
//     index++
// }while(index<=10);

// let arr=["apple","banana","grapes","orange"];
// let i=0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }


//Reverse number 

let number=12345;
let reverse=0;
while(number>0){
    let digit=number%10;
    reverse=reverse*10+digit;
    number=Math.floor(number/10);
}
console.log(`Reverse of the number is ${reverse}`);

// largest number in array 

let arrnum=[10,20,400,700,200,12];

let index=0;
let largest=arrnum[0];

while(arrnum.length>index){
    if(largest<arrnum[index]){
        largest=arrnum[index]
    }
    index++
}
console.log(`Largest number in the array is ${largest}`);

