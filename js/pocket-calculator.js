/*add changing border color*/
function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function reset() {
  document.form.textview.value = "";
}

function equals() {
  var exp = document.form.textview.value
  if (exp){
    document.form.textview.value = eval(exp);
  }
}

function negate() {
  document.form.textview.value = document.form.textview.value * -1
  if (document.form.textview.value == "") {
    document.form.textview.value = ""
  }
}

/*function zero() {
  var display = 0
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
  return display;
}

function one() {
  var display = 1;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function two() {
  var display = 2;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function three() {
  var display = 3;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function four() {
  var display = 4;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function five() {
  var display = 5;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function six() {
  var display = 6;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function seven() {
  var display = 7;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function eight() {
  var display = 8;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function nine() {
  var display = 9;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function clear() {
  var display = 0;
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}

function add() {
  display = zero() + "+";
  var div=document.getElementById('calc-output');
  div.innerHTML=(`${display}`);
}
*/
