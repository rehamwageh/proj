var bill_amount = 0;
var service = "";
var pepole = 0;

function valid1()
{
   var bill_amount =document.getElementById("bill").value;
   
    if (bill_amount==="")  {
        alert("please enter bill amount");
        
    }
    if (isNaN(bill_amount)) {
      alert("billamount must be anumber"); 
    } 
}
function valid2()
{
   var service =document.getElementById("service").value;
    if (service==="0" ) {
        alert("Please choose service satisfaction");
    }
}
function valid3()
{
  var  pepole=document.getElementById("share").value;
    if (isNaN(pepole)|| pepole==="") {
      alert("please enter number of pepole") ; 
    }
  }
function calc(bill_amount, service, pepole) {
    var bill_amount =document.getElementById("bill").value;
    var  pepole=document.getElementById("share").value;
    var service =document.getElementById("service").value;
    var result = (bill_amount * service) / pepole;
document.getElementById("result").innerHTML="tip = " + result;
}
    
   