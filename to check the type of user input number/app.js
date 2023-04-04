var ip = prompt("enter your input no");

  
if(ip == 1){
    document.write("1 is not a prime number nor composite");
}
else if(ip < 1){
    document.write("its a negative number");
}
else {
for(var i =2; i<ip; i++){
    if(ip % i == 0){
        var r = "it is  not a prime number"
        break;
    }
     else{
        var r = "it is  a prime number";
    }
}
};
document.write(r);