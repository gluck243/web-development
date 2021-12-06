// Read number1, operator and number2 from HTML page
function getValuesFromCalculator1(){
    //Read values
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let operator1 = document.getElementById("operator1").value;

    // alert("Read values: " + number1 + operator + number2)
    // Write result to HTML page
    let returnValue = calculate(number1, operator1, number2);

    document.getElementById("result").innerHTML = returnValue;

}

//This function makes calculations
function calculate(numberX, operator1, numberY){
    let returnValue = 0;
    switch (operator1){
        case "+":
            returnValue = numberX + numberY;
            break;
        case "-":
            returnValue = numberX - numberY;
            break;
        case "*":
            returnValue = numberX * numberY;
            break;
        case "/":
            returnValue = numberX / numberY;
            break;
    }
    return returnValue;
}
function Increase1() {

    let userinput=parseInt(document.getElementById("number3").value);
    userinput=1+userinput;
    document.getElementById("number3").value=userinput;
}
function Decrease1() {

    let userinput=parseInt(document.getElementById("number3").value);
    userinput=userinput-1;
    document.getElementById("number3").value=userinput;
}
function Increase2() {

    let userinput=parseInt(document.getElementById("number4").value);
    userinput=1+userinput;
    document.getElementById("number4").value=userinput;
}
function Decrease2() {

    let userinput=parseInt(document.getElementById("number4").value);
    userinput=userinput-1;
    document.getElementById("number4").value=userinput;
}
function getValuesFromCalculator2(){
    let number3 = parseInt(document.getElementById("number3").value);
    let number4 = parseInt(document.getElementById("number4").value);
    let operator2 = document.getElementById("operator2").value;

    let returnValue = calculate(number3, operator2, number4);

    document.getElementById("result2").innerHTML = returnValue;

}

function calculate(numberX, operator2, numberY){
    let returnValue = 0;
    switch (operator2){
        case "+":
            returnValue = numberX + numberY;
            break;
        case "-":
            returnValue = numberX - numberY;
            break;
        case "*":
            returnValue = numberX * numberY;
            break;
        case "/":
            returnValue = numberX / numberY;
            break;
    }
    return returnValue;
}
function getValuesFromCalculator3(){
    let number5 = parseInt(document.getElementById("number5").value);
    let number6 = parseInt(document.getElementById("number6").value);
    const form = document.getElementById("selection");
    let operator3 = form.elements["sel"].value;
    let returnValue = calculate(number5, operator3, number6);

    document.getElementById("result3").innerHTML = returnValue;

}

function calculate(numberX, operator3, numberY){
    let returnValue = 0;
    switch (operator3){
        case "+":
            returnValue = numberX + numberY;
            break;
        case "-":
            returnValue = numberX - numberY;
            break;
        case "*":
            returnValue = numberX * numberY;
            break;
        case "/":
            returnValue = numberX / numberY;
            break;
    }
    return returnValue;
}