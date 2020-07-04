function dis(val)
{
document.getElementById("result").value+=val
 }
function onoff(){
  currentvalue = document.getElementById('result').value;
  if(currentvalue == "Off"){
    document.getElementById("result").value="";
  }else{
    document.getElementById("result").value="";
  }
}
function solve()
{
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y
}
function clr()
{
document.getElementById("result").value = ""
}