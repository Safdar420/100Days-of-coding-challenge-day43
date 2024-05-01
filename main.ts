//  Q no 127

const traditionalFunction =function(a,b){
  return a + b
}

const arrowFunction = (a,b) => {
    return a + b
}

console.log(traditionalFunction(5,8));
console.log(arrowFunction(9,8));

//  Q no 128

const multiplyParameters =(...numbers:number[]) =>
    numbers.reduce((total,number) => total * number,1);
console.log(multiplyParameters(3,5,8));

//  Q no 129

const traditionlVsArrow = {
    value: "traditionlVsArrowFunctionValue",
    traditionalFunction:function(){
        console.log("traditionl Function:",this.value);
    },
arrowFunction:() => {
  console.log("arrow function:",this.value);
  
},
};
traditionlVsArrow.traditionalFunction();
traditionlVsArrow.arrowFunction();