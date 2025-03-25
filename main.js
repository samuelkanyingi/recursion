function fib(n) {

    
    let arr=[];

let num1=0;
let num2=1;
let num3;
//console.log(num1);
//console.log(num2);
arr.push(num1, num2)
for(i=3;i<=n;i++) {
    console.log("This was printed recursively");
    num3 = num1+num2;
    arr.push(num3)
    num1=num2;
    num2=num3;
}//end of populatingloop
    return arr;
} // end of fib function
console.log(fib(8))

/*
let arr=[];
function fibRec(n) {
    console.log("This was printed recursively");

    if (n == 1)return 1;
    if (n == 0) return 0
   
    arr=( fibRec(n-1)+ (fibRec(n-2)))
    return arr;
    
    
}
console.log(fibRec(8));
*/