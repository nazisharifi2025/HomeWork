// function inside a function
function add(a, b, c = 3) {
  let resultNumber = 0;
  multiply();
  function multiply() {
    resultNumber = a + b * c;
    console.log(resultNumber);
  }
}
add(2, 5, 7);
// callback function
function UserName(call) {
  let Name = prompt("enter your name:");
  call(Name);
}
function greeting(Response) {
  console.log("Hello" + " " + Response);
}
UserName(greeting);
