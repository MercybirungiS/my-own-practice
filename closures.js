function outer (){
    var s=40;

function inner(){
    var f=30;
    console.log(s+f);
}
return inner;
}
var first =outer();
console.dir(first);
var second =outer();
second();

