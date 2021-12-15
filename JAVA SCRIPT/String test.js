function NumOfL() {
    let output=0;
    let userinput=prompt("Enter your message here:");
    let orgLength=userinput.length;
    for(let i=0;i<=orgLength;i++) {

        if(userinput.charAt(i).toLowerCase()=="l") 
            output++
        
    }
    alert("Number of L in your phrase/word is "+output);
}
function NumOfVowels() {

    let output=0;
    let userinput=prompt("Enter your message here:");
    let orgLength=userinput.length;
    for(let i=0;i<=orgLength;i++) {

        if(userinput.charAt(i).toLowerCase()=="a") 
            output++
        else if(userinput.charAt(i).toLowerCase()=="o")
            output++
        else if(userinput.charAt(i).toLowerCase()=="u")
            output++
        else if(userinput.charAt(i).toLowerCase()=="e")
            output++
        else if(userinput.charAt(i).toLowerCase()=="y")
            output++
        else if(userinput.charAt(i).toLowerCase()=="i")
            output++
    }
    alert("Number of vowels in your phrase/word is "+output);

}
function CheckIfPalindrome() {
    let backwards="";
    let userinput=prompt("Enter your message here:");
    let tmpString=userinput.toLowerCase().trim();
    let output=userinput + " is";
    for(i=userinput.length-1;i>=0;i--) {
        backwards=backwards+tmpString[i];
    };
    backwards=backwards.replace(/ /g,"");
    console.log(backwards);
    tmpString=tmpString.replace(/ /g,"");
    console.log(tmpString);
    if(backwards==tmpString) {
        output=output+" palindrome";
    }
    else {
        output=output+" not palindrome"
    } ; 
        alert(output);
}