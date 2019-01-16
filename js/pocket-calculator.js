/*add changing border color*/
function insert(num) {
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

/*make negate work with chain of funcions --> 85+4 turns into 85+ (-4)*/
function negate() {
  document.form.textview.value = document.form.textview.value * -1;
  if (document.form.textview.value == "") {
    document.form.textview.value = "";
  }
}

function percentage() {
  document.form.textview.value = document.form.textview.value / 100;
}

/*Figure out what replaces insert() or putting in the actual exponent*/
function exponent() {
  document.form.textview.value = Math.pow(document.form.textview.value, x);
}

/*Math.pow(n, 1/root); n is base value being rooted*/
function root() {
  
}
