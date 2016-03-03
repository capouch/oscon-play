function solution(A) {
  // write code for solution
  var ans = [];
  for (var i = 0; i < A.length; ++i) {
    if(f1(i,A) == f2(i,A)){
      ans.push(i);
    } else {
      ans.push(false);
    }
  }
  console.log(ans);
}

function f1(j, A) {
  var sum1 = 0;
  for(var i = 0; i < j; i++) {
    sum1 = A[i] + sum1;
  }
  console.log(sum1);
  return sum1;
}

function f2(j,A) {
  var sum2 = 0;
  for (var i = j+1; i < A.length; i++) {
    sum2 = sum2 + A[i];
  }
  console.log(sum2);
  return sum2;
}
var foo = [-1, 3, -4, 5, 1, -6, 2, 1];
var bar = [];

for (i = 0; i < 10; i++){
  bar.push(Math.floor(Math.random() * (10 - (-10))) + (-10));
}
console.log(foo);
solution(foo);
