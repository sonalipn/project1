function myFunction(elem) {
    console.log("alerting");
    alert("this is an alert");

}
function myFunction1(elem) {
    console.log("alerting");
    alert("this is a double alert");

}
function myFunction2(elem) {
    console.log("alerting");
    alert("this is a on mouseover alert");

}
function myFunction3(elem,elem2) {
    console.log("alerting");
    console.log(elem2.clientX+ ':' +event.clientY)
   debugger
}
function sayHi(elem)
{
    console.log(event.target.value)
    document.getElementById("changed").innerHTML=event.target.value;
    
    // elem.innerHTMl= "change"
    // alert("child");
}