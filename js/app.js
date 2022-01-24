let name1=prompt("enter your name please ");
var gender =prompt(" please enter your gender ");
if(gender !="male" &&gender !="female"){
    alert("the gender should be male or female")
}
var age =prompt("enter your age  ");
if(age<=0){
    alert("the age should ber mor than 0");
}
var confirmation=confirm("please click cancel if you want to skip welcoming massage ");
console.log(confirmation);
if(confirmation==true){
    if(gender=="male"){
        alert("you are welcom Mr "+name1);
    }else if(gender=="female"){
        alert("you are welcom Ms "+name1);
    }else{
        alert("you are welcom  "+name1);
    }

    


}
let traviling=prompt("have you ever travel");
    let visitPetra=prompt("have you ever visit petra ");
    let goodLearner=prompt("do ypo think  you are good learner ");

    function checkTheAnswer (theanswer){
        if(theanswer==""){
            return "invalid"
        }
        return theanswer;
    }

let travilingAnswer= checkTheAnswer(traviling);
let visitPetraAnswer=checkTheAnswer(visitPetra);
let goodLearnerAnswer=checkTheAnswer(goodLearner);

let theAnswerArr=[travilingAnswer,visitPetraAnswer,goodLearnerAnswer]; 
//console.log(theAnswerArr)

function printTheAnswer (answer){
    
    for(let i=0;i<answer.length;i++){
        console.log(answer);

    }
    
    
}
printTheAnswer(theAnswerArr);

