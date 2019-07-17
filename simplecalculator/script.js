function calculate() {  
  var operand1 = document.getElementById('operand1').value;
  var list = document.getElementById('operator');
  var listSelectedValue = list.options[list.selectedIndex].value;
  var operand2 = document.getElementById('operand2').value;

  var result;

  if ( listSelectedValue == "add") {
     result = +operand1 + +operand2;
  }

  if ( listSelectedValue == "subtract") {
     result = operand1 - operand2;
  }

  if ( listSelectedValue == "multiply") {
     result = operand1 * operand2;
  }

  if ( listSelectedValue == "divide") {
     result = operand1 / operand2;
  }


  document.getElementById('result').innerHTML = result;
  return;
}
