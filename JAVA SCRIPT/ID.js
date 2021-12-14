function CheckId() {

    let output="";
    let userinput=(prompt("Enter your indetification number:"));
    let day=parseInt(userinput.slice(0,2));
    console.log(day);
    let month=parseInt(userinput.slice(2,4));
    console.log(month);
    let year=parseInt(userinput.slice(4,6));
    console.log(year);
    let century=userinput.slice(6,7);
    console.log(century);
    if(century=="+") {
        century="18";
        console.log(century);
    }
    else if(century=="-") {
        century="19";
        console.log(century);
    }
    else if(century=="A") {
        century="20";
        console.log(century);
    };
    let fullyear=parseInt(century.concat("",year));
    console.log(fullyear);
    let sex=userinput.slice(7,10);
    console.log(sex);
    if(sex%2==0) {

        sex="Female";
        console.log(sex);
    }
    else {

        sex="Male";
        console.log(sex);
    };
    const normyear=["0","31","28","31","30","31","30","31","31","30","31","30","31"];
    const strangeyear=["0","31","29","31","30","31","30","31","31","30","31","30","31"];
    if(fullyear%4==0) {
        if(day>strangeyear[month]) {
            output+="Incorrect day input, ";
        };
    }
    else {
        if(day>normyear[month]) {
            output+="Incorrect day input, ";
        };
    };
    if(month>12) {
        output+="Incorrect month input, ";
    };
    let controlchar=LastCharCheck(userinput);
    console.log(controlchar)
    let controlcharinput=userinput.slice(10,11);
    if(controlchar==controlcharinput) {
        output+="indetification number is correct";
    }
    else {
        output+="control character is incorrect";
    };
    const date=new Date();
    const inputdate=new Date(fullyear,month,day);
    let age=parseInt((date-inputdate)/(1000*3600*365.25*24));
    console.log(age);
    if(output=="indetification number is correct") {
        alert("Input: "+userinput+"\n"+"Correctness: "+output+"\n"+"Sex: "+sex+"\n"+"Age: "+age+" years");
    }
    else {
        alert("Input: "+userinput+"\n"+"Correctness: "+output);
    };
}
function LastCharCheck(userinput) {

    let number1=userinput.slice(0,6);
    let number2=userinput.slice(7,10);
    let fullnumber=number1.concat("",number2);
    console.log(fullnumber);
    let result=fullnumber%31;
    console.log(result);
    const variables=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"];
    let controlchar=variables[result];
    console.log(controlchar);
    return controlchar;
}

function CreateId() {

    let output="";
    let userinput=(prompt("Enter your indetification number:"));
    let day=parseInt(userinput.slice(0,2));
    console.log(day);
    let month=parseInt(userinput.slice(2,4));
    console.log(month);
    let year=parseInt(userinput.slice(4,6));
    console.log(year);
    let century=userinput.slice(6,7);
    console.log(century);
    if(century=="+") {
        century="18";
        console.log(century);
    }
    else if(century=="-") {
        century="19";
        console.log(century);
    }
    else if(century=="A") {
        century="20";
        console.log(century);
    };
    let fullyear=parseInt(century.concat("",year));
    console.log(fullyear);
    const normyear=["0","31","28","31","30","31","30","31","31","30","31","30","31"];
    const strangeyear=["0","31","29","31","30","31","30","31","31","30","31","30","31"];
    if(fullyear%4==0) {
        if(day>strangeyear[month]) {
            output+="Incorrect day input";
        };
    }
    else {
        if(day>normyear[month]) {
            output+="Incorrect day input";
        };
    };
    if(month>12) {
        output+="Incorrect month input";
    };
    let controlchar=LastCharCheck(userinput);
    console.log(controlchar);
    let fullid=userinput.concat(controlchar);
    if(output=="Incorrect day input" || output=="Incorrect month input") {
        alert("Input: "+userinput+"\n"+"Warning: "+output+"!");
    }
    else {
        alert("Input: "+userinput+"\n"+"Control character: "+controlchar+"\n"+"Full correct Id: "+fullid);
    };
}