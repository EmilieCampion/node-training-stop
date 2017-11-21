// console.log('Hello world');
// var a = 34;
// var b = '45';
// console.log(a+parseInt(b));
// console.log(0.1 + 0.2);
// var c=15;
// console.log(c%4);
// if(a > 43){
//     console.log('hello');
// } else{
//     console.log(`You should not pass`);
// }

// console.log(false);
// if(!0){
//     console.log(false)
// }
// if(!undefined){
//     console.log(false)
// }
// if(!NaN){
//     console.log(false)
// }
// if(!null){
//     console.log(false)
// }

// var a = '3';
// // if (a==3){
// //     console.log(`C'est Ok`)
// // }
// if (a===3){
//     console.log(`C'est Ok`)
// } else{
//     console.log('Not ok')
// }

// var mesCourses = new Array();
// mesCourses.push('Pommes', 'Poires', 'Scoubidous');
// // console.log(mesCourses);
// // console.log(mesCourses[1]);
// // var mesCourses2= ['Pommes', 'Poires', 'Scoubidous'];
// // var doubleArray = [
// //     ["a", 1],
// //     ["b",2]
// // ]
// // console.log(doubleArray[1][1]);

// for (var i = 0; i < mesCourses.length; i++) {
//     var element = mesCourses[i];
//     console.log(element);
// }

// function sayHello(personna){
//     return personna  + ' vous dit bonjour';
// }

// console.log(sayHello('Emilie'));

// var a = "Gilles";
// function test () {
//     a = "Vincent";
// }
// test();
// console.log(a);

//  b = "Gilles";
// function test2 () {
//     var b = "Vincent";
// }
// test2();
// console.log(b);

// (function(){
//     for (var i = 0; i < 10 ; i++) {
//         console.log(i)
//     }
// })();

// (function(){
//     for (var i = 0; i < 10 ; i++) {
//         console.log(i)
//     }
// })();

var obj ={
    name: 'Gilles',
    age:43,
    toString:function(){
        return this.name + ', ' + this.age + ' ans';
    }
}
console.log(obj.age);
console.log(obj['age']);
console.log(obj.toString());

function call(func){
    function test(){
        console.log('Call test');
    }
    function reTest(){
        console.log('Call re test');
    }
    eval(func)();
}
call('test')
call('reTest')