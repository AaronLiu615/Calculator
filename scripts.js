const DISPLAY = document.querySelector(".display");
const btns = document.querySelectorAll("button");
const symbol = ["/", "*", "-", "+"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let past = "";
let current = "0";
let operator = "none";

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function mutiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,symbol){
    if (symbol === "+"){
        return add(a,b);
    }
    else if (symbol === "-"){
        return subtract(a,b);
    }
    else if (symbol === "*"){
        return mutiply(a,b);
    } 
    else{
        return divide(a,b);
    }
}

btns.forEach(btn => {
    btn.addEventListener("click", function(e){

        if(numbers.includes(e.target.textContent)){
            if(current === "0"){
                current = "";
                current += e.target.textContent;
                DISPLAY.textContent = current;
            }
            else{
                current += e.target.textContent;
                DISPLAY.textContent = current;
            }
        }
        
        if(symbol.includes(e.target.textContent)){
            operator = e.target.textContent;
            past = current;
            current = "";
        }

        if(e.target.textContent === "="){
            if(current === ""){
                DISPLAY.textContent = operate(past,past,operator);
                current = operate(past,past,operator);
                console.log(current);
            }
            else{
                DISPLAY.textContent = operate(past,current,operator);
                current = operate(past,current,operator);
                console.log(current);
            }
        }
        
        if(e.target.textContent === "AC"){
            current = "0";
            DISPLAY.textContent = current;
            operator = "none";
        }

        if(e.target.textContent === "%"){
            current = current / 100;
            DISPLAY.textContent = current;
        }

        if(e.target.textContent === "+/-"){
            if(current.includes("-")){
                current = current.replace("-", "");
                console.log(current);
                DISPLAY.textContent = current;
            }
            else{
                current = "-" + current;
                DISPLAY.textContent = current;
            }
        }

        if(e.target.textContent === "."){
            if(current.includes(".") === false){
                current += e.target.textContent;
                DISPLAY.textContent = current;
            }
        }
        
    });
});

