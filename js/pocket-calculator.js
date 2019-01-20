/*add changing border color*/
var x = 9;
let num1 = ""

function insert(num) {
/*  if (document.form.textview.value = 0) {
    document.form.textview.value = " ";
    document.form.textview.value = document.form.textview.value + num;
  }
  else {
  document.form.textview.value = document.form.textview.value + num;
}*/
  document.form.textview.value = document.form.textview.value + num;
}

function reset() {
  document.form.textview.value = "";
}

function equals() {
  var exp = document.form.textview.value;
  if (exp){
    document.form.textview.value = eval(exp);
  }
}

function add() {
  document.form.textview.value = document.form.textview.value + "+";
}

function subtract() {
  document.form.textview.value = document.form.textview.value + "-";
}

function multiply() {
  document.form.textview.value = document.form.textview.value + "*";
}

function divide() {
  document.form.textview.value = document.form.textview.value + "/";
}

/*make negate work with chain of funcions --> 85+4 turns into 85+ (-4)*/
function negate() {
  document.form.textview.value = document.form.textview.value * -1;
  if (document.form.textview.value == "") {
    document.form.textview.value = "";
  }
/*  if (document.form.textview.value.includes("-")) {
    document.form.textview.value = document.form.textview.value - "-";
    document.form.textview.value = document.form.textview.value + "+";
  }
  */
}

function percentage() {
  document.form.textview.value = document.form.textview.value / 100;
}

/*Figure out what replaces insert() or putting in the actual exponent*/
function exponent() {

  document.form.textview.value = Math.pow(num1, document.form.textview.value);
}

/*Math.pow(n, 1/root); n is base value being rooted*/
function root() {

}

function pi() {
  document.form.textview.value = document.form.textview.value + "3.14"
}
