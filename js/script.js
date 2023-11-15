







// function age(ageYear){
//     return ageYear*365.25
// }
// *******************************************************************************

// let arr = [1,5,8,3,2]
// function smallest(arr){
//     let small =arr[0]
//     for(let i = 0 ;  i<arr.length;i++){
//         if(arr[i]<small){
//             small = arr[i]
//         }
      
//     }
//     return small
// }
// console.log(smallest(arr))

// *******************************************************************************

// let arr = [1,2,3,4,5]

// function descending(arr){
//     for(let i = 0 ;  i<arr.length;i++){
//      for(let a =0 ; a<arr.length-i;a++){
//         if(arr[a]<arr[a+1]){
//             let temp =arr[a]
//             arr[a]=arr[a+1]
//             arr[a+1] = temp

//         }
//      }
//     }
//     console.log(arr)
// }

// descending(arr)
// *******************************************************************************


// let arr = [1,2,3]

// function average(arr){
//     let ave,sum = 0;
//     for(let i = 0 ; i < arr.length;i++){
//         sum+=arr[i]
//     }
//    return ave=sum/arr.length

    
// }
// *******************************************************************************
// ** what is the output of 
// Console.log( [ ]  == [ ] ) false
// Console.log( { } == { } ) false
// And explain your answer
// *******************************************************************************

// ** what is the output of this code with explaination

// function main() {
//   console.log("A");
//   setTimeout(function print() {
//     console.log("B");
//   }, 0);
//   console.log("C");
// }
// main();

// A
// C
// B

// *******************************************************************************

// ** what is the output of this code with explaination
// var num = 8;
// var num = 10;
// console.log(num);

// 10
// because assignment
// *******************************************************************************

// ** what is the output of this code with explaination
// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Ayush';
//   let age = 21;
// }
// sayHi();

// undefined  
// not access

// because hoisting 
