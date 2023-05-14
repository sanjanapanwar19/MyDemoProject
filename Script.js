
function add(){
      let input1 = parseInt(document.getElementById('input-1').value);
      let input2 = parseInt(document.getElementById('input-2').value);
      let output = input1+input2;
      document.getElementById('output').innerHTML = output;
}
function sub(){
      let input1 = parseInt(document.getElementById('input-1').value);
      let input2 = parseInt(document.getElementById('input-2').value);
      let output = input1-input2;
      document.getElementById('output').innerHTML = output;
}
function multiply(){
      let input1 = parseInt(document.getElementById('input-1').value);
      let input2 = parseInt(document.getElementById('input-2').value);
      let output = input1*input2;
      document.getElementById('output').innerHTML = output;
}
function divide(){
      let input1 = parseInt(document.getElementById('input-1').value);
      let input2 = parseInt(document.getElementById('input-2').value);
      let output;
      if(input2==0){
            output = 0;
            document.getElementById('output').innerHTML = output;
            return;
      }
     output = input1/input2;
      document.getElementById('output').innerHTML = output;
}
function reset(){
      document.getElementById('input-1').value = ' ';
      document.getElementById('input-2').value = ' ';
      document.getElementById('output').innerHTML = 00;
}
