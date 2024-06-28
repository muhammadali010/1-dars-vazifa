// 1-misol 
// var a=1
// function outer() {
//     var b=2
//     function inner() {
//         var c=3
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
// inner()
// } 
// outer() 


// bu yerda var a global scope hamasini ichida ishlatsa boladi.
// b varda bolgani uchun javob 2 chiqadi chunki u   function scope ichida bolgani uchun 
// var c bu blok scope buni malumotlarini ozgartirib bolmaydi
// javobi birin ketin chiqadi 1,2,3


//2-masala
// console.log(a);
// var a=5
// console.log(a);

// birinchi logda undifaned chiqadi chunki log a ni topa olmaydi agar letda yozilganda 
// error berib toxtatib qoyar edi
// ikkinchi logda a da berilgan qiymat chiqadi


//3-masala
// console.log(a);
// let a=10
// console.log(a);

// bunda birinchi logda qiymat yoqligi uchun hatto berib yuboradi 
// agar bu varda yozilganda undifaned berar edi hozir birinchi logni ochirib tashlasak
// ikkinchisida a da berilgan qiymat chiqgan bolar esdi


//4-masala

// {
//     console.log(a);
//     let a=15
//     console.log(a);
// }

// bunda ham a ni topa olmagani uchun hato berib yuboradi
// bular block scope ichida yozilgan 
// agar varda yozilganda undifaned chiqib 2 chisida 15 chiqar edi


// masalalar
// 1chi masala
// let arr = ['tico','malibu','gentra','lada','tahoe']
// function cars(arr) {
//     let result = arr.filter(function(value) {
//         return value.length >= 5
//     })
//     result = result.map(function (value) {
//    value=  value.replace(value[0],value[0].toUpperCase())

//         return value;
//     })
//     return result;
// }
// console.log(cars(arr));



// 2chi masala
// const  students = [
// {name:"ali",age:23},
// {name:"rasil",age:28},
// {name:"tillo",age:13}
// ];

// const ageStudents = (arr) =>{
// let  result =arr.find(function (value) {
//     return value.age > 20
// })
// return result.name.toUpperCase()
// }
// console.log(ageStudents(students));


// 3chi masala
// let narxlar = [1000,6000,3000,2000];

// let sum = 0;
// narxlar.forEach(el =>{
// if(el > 100){
// sum  += el
// }
// })
// console.log(sum);


// 4chi masala
// function musbat(arr) {
// let result = arr.every(function(value) {
//     return value > 0
// })
// if (result) {
//     return "Barcha sonlar musbat";
// }else {
// return  "Musbat bo'lmagan sonlar bor"
// }
// }
// console.log(musbat([7,9,-1,10]));


// 5chi masala
// let arr = [1,2,3,4,5,6,7]
// function cube(arg) {
//     let result =arg.map(function(value) {
//         return value **2 ;
//     })
// console.log(result);
// }
// cube(arr);


// 6chi masala
// let arr = [1300,2000,4000,1600 ];
// function foiziniKopaytirish(arr) {
//     let result =arr.filter(function (value) {
// return value >= 2000
//     })
//     result = result.map(function (value) {
//         return Math.floor(value *1.1)
//     })
//     return result
// }
// console.log(foiziniKopaytirish(arr));


// 7chi masala 
// let oquvchilar = [
// {name:"Muhammadali",yoshi:17,ball:90},
// {name:"Saydullo",yoshi:17,ball:70},
// {name:"Muhammadrasul",yoshi:17,ball:85},
// {name:"Mirzatillo",yoshi:17,ball:80},
// ]
// function student(arr) {
//     let result = arr.find(function(value) {
//         return value.ball >=80
//     })
//     let succes =arr.filter(function (value) {
//         return value >= 80;
//     })
//     return[result.name,result.yoshi]
// }
// console.log(student(oquvchilar));


// 1-masala
// let arr = ['salom','hp','lenovo','mac'];
// let result = arr.toUpperCase(function(value) {
//     return value;
// })
// console.log(result);


// 5-masala
// let arr = '             salom                  ';
// let result = arr.trim();
// console.log(result);