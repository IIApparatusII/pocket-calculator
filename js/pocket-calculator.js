/*add changing border color*/
function insert(num) {
  let num1 = document.form.textview.value;
  let zero = "0";
  let point = ".";


  if (num1.length == 9) {
    document.form.textview.value = document.form.textview.value;
  }

  else if (num1.indexOf(point) == 1) {
    document.form.textview.value = document.form.textview.value + num;
  }

  else if (num1.indexOf(zero) == 0) {
    document.form.textview.value = "" + num;
  }

  else {
    document.form.textview.value = document.form.textview.value + num;
  }
  /*LIMITS BUT BREAKS ONCE HITTING 9 DIGITS*/
  /*if (num1.length > 8) {
    while (num1.length > 8) {
      document.form.textview.value = num1.slice(num, -1);
    }
  }*/
}

function reset() {
  document.form.textview.value = "0";
}

function equals() {
  var exp = document.form.textview.value;
  let num1 = document.form.textview.value;

  if (document.form.textview.value == "Infinity"){
    document.form.textview.value = "Error";
  }

  else if (num1.lastIndexOf("+") == num1.length - 1 || num1.lastIndexOf("-") == num1.length - 1 || num1.lastIndexOf("*") == num1.length - 1 || num1.lastIndexOf("/") == num1.length - 1) {
    document.form.textview.value = "Error";
  }

  else if (exp){
    document.form.textview.value = eval(exp);
  }
}

function add() {
  let num1 = document.form.textview.value;
  let plus = "+";

  if (num1.length == 18) {
    document.form.textview.value = document.form.textview.value;
  }

  else if (num1.lastIndexOf(plus) == num1.length - 1) {
    document.form.textview.value = document.form.textview.value;
  }

  else {
    document.form.textview.value = document.form.textview.value + plus;
  }
}

function decimal() {
  let num1 = document.form.textview.value;
  let point = ".";

  document.form.textview.value = num1.includes(point)? document.form.textview.value : document.form.textview.value + ".";
}

function subtract() {
  let num1 = document.form.textview.value;
  let minus = "-";

  if (num1.length == 18) {
    document.form.textview.value = document.form.textview.value;
  }
  else if (num1.lastIndexOf(minus) == num1.length - 1) {
    document.form.textview.value = document.form.textview.value;
  }
  else {
    document.form.textview.value = document.form.textview.value + minus;
  }
}

function multiply() {
  let num1 = document.form.textview.value;
  let times = "*";

  if (num1.lastIndexOf(times) == num1.length - 1) {
    document.form.textview.value = document.form.textview.value;
  }
  else {
    document.form.textview.value = document.form.textview.value + times;
  }
}

function divide() {
  let num1 = document.form.textview.value;
  let slash = "/";

  if (num1.lastIndexOf(slash) == num1.length - 1) {
    document.form.textview.value = document.form.textview.value;
  }
  else {
    document.form.textview.value = document.form.textview.value + slash;
  }
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
  let num1 = document.form.textview.value;
  document.form.textview.value = Math.pow(num1, 2);
}

/*Math.pow(n, 1/root); n is base value being rooted*/
function root() {
  let num1 = document.form.textview.value;
  document.form.textview.value = Math.sqrt(num1);
}

function pi() {
  document.form.textview.value = document.form.textview.value + "3.14"
}
