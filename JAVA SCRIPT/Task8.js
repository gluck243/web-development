function Factorial() {
    
    let userinput=parseInt(prompt("Enter your number:"));
    let output=1;
    if(userinput>0) {
        for(let i=1;i<=userinput;i++) {

            output=i*output;
            console.log(output);
        };
    }
    else if(userinput==0) {

       output=1;
    }
    else {

        output="Your number is negative";
    };
    alert(output);

}
function SumofN() {

    let userinput=parseInt(prompt("Enter your number:"));
    let output=0;
    if(userinput>0) {
        for(let i=1;i<=userinput;i++) {

            output=i+output;
            console.log(output);
        };
    
    }
    else {

        output="Number must be at least 1"
    };
    alert(output);
}
function ModSum() {

    let userinput=parseInt(prompt("Enter your number:"));
    let oddsum=0;
    let evensum=0;
    if(userinput>0) {
        for(let i=0;i<=userinput;i=i+2) {

            evensum=i+evensum;
        };
        for(let i=1;i<=userinput;i=i+2) {

            oddsum=i+oddsum
        }
    
    }
    else {

        output="Number must be at least 1"
    };
    alert("Sum of even numbers: "+evensum);
    alert("Sum of odd numbers: "+oddsum);

}