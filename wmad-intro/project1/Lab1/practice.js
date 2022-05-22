// // var intoro = document.getElementById('intoro');

// // // var newNode = document.createElement('p');
// // // intoro.appendChild(newNode);
// // var byNode = document.getElementById('child');
// // var byNode = intoro.removeChild(child)
// // var textNode = document.createTextNode('hello world');
// // console.log(textNode);
// // var parentNode = document.getElementById('parent');
// // parentNode.appendChild(textNode);


// Lab1
// (1)
//     var base = prompt("enter the valuse");
//     var hight = prompt("enter the valuse");
//     var area = (base * hight) / 2;
//     console.log(area)
// (2)
// var x = parseInt(prompt("number x"));
// var y = parseInt(prompt("number y"));
// var sum = x + y;

// function comparison(){
// if (sum == 50 || x == 50 || y==50){
//     console.log("true")
//     }else{
//     console.log("false") 
//     } 
// } 
// comparison();
// (3)
// var x = parseInt(prompt("number x"));
// var y = parseInt(prompt("number y"));
// var z = parseInt(prompt("number z"));
// function last_digit(x, y, z)
// {
//  if ((x > 0) && y > 0 && z > 0)
//    {
//     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
//   }
//  else
//    return false;
// }
// console.log(last_digit(x, y, z));
// (4)
// var x = parseInt(prompt("number"))
// function Match(){
//     let randomNumber = Math.floor(Math.random()* 11);
//     console.log(randomNumber);
//     if(randomNumber === x){
//         console.log("Good Work")
//     }else{
//         console.log("Not matched")
//     }
// }
// (5)
// var x = parseInt(prompt("number"));
// var y = parseInt(prompt("numbery"));
// var sum = x + y;
// function check(){
//     if( sum >= 50 && sum <=80){
//         return 65;
//     }else{
//         return 80;
//     }
//     console.log(sum)
// }
// check()
// (6)
// const array =[1,2,3,4,5,6,7]
// var x = parseInt(prompt("number"));

// while(array.length > 2){
//     let middle = Math.floor(array.length/2)
//     console.log(middle)
//     let halfarray = array[middle]
//     console.log(halfarray)
//         if(x >= halfarray){
//             array.splice(0,middle);
//             console.log(array)
//         }
//         if(x === halfarray){
//             console.log(array)
//         }
//         if (x <= halfarray){
//             array.splice(middle)
//             console.log(array)
//         }
// }
//     if(array[0]<array[1]){
//         console.log(array[1])
//     }else{
//         console.log(array[0])
//     }
// (7)
// var x = parseInt(prompt("number x"));
// var y = parseInt(prompt("number y"));
// var z = parseInt(prompt("number z"));
// var array = [x,y,z];
// function rotate(){
//     return[array[1],array[2],array[0]];
// }
// console.log(rotate())