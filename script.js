window.onload = function() {
    inputArea = document.getElementById('input-screen');
    var buttons = document.getElementsByClassName('calc-button');
    var lastOp = null;
    var leftBrackets = 0;
    for(var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.onclick = function(event) {
            switch (event.target.getAttribute('data-type')){
                case "operator":
                        if (lastOp === "operator") inputArea.innerHtml = inputArea.innerHTML.substring(0, inputArea.innerHTML.length - 3);
                        lastOp = event.target.getAttribute('data-symbol');
                        inputArea.innerHTML += lastOp;
                    break;

                case "bracket":
                    if (inputArea.innerHTML === "0" ) {
                        if (event.target.getAttribute('data-symbol') === ")") break;
                        else {
                            inputArea.innerHTML = "(";
                            leftBrackets ++;
                        }
                    }
                    else {
                        inputArea.innerHTML += event.target.getAttribute('data-symbol');
                    }
                    break;

                case "number":


                    if (inputArea.innerHTML === "0") {
                        inputArea.innerHTML = (event.target.getAttribute('data-symbol'));
                        lastOp = "number";
                    }
                    else {
                        inputArea.innerHTML += (event.target.getAttribute('data-symbol'));
                    }
                    break;
                case "equals":
                    var mathstring = document.getElementById('input-screen').innerHTML;
                    var result = eval(mathstring);
                    document.getElementById('output-screen').innerHTML = result;
                    document.getElementById('input-screen').innerHTML = "0";
                break;

                case "clear":
                    document.getElementById('input-screen').innerHTML = "0";
                    document.getElementById('output-screen').innerHTML = "0";
                break;
            }
                





            
        }
    }
}