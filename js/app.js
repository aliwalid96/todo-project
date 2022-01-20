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

