var count=0;
function myFunction() {
  var data = window.location.href.split('=');
  var id = window.location.href.split('=')[1];
  var name= id.split('&')[0];
  var otp=data[2].split('&')[0];
  var phoneNo=data[3].split('&')[0];
  
  localStorage.setItem("otp", otp);
  document.getElementById("demo").innerHTML = "Dear " + name +"<br>"+"Thank you for your inquiry. A 4 digit verification number has been sent to your phone number: "+phoneNo+", please enter in the following box and submit for confirmation:";
  console.log("Vrushali",name,otp,phoneNo)
}
function validate(){

  var otpData=document.getElementById("otp").value;
  if(otpData==localStorage.getItem("otp")){
    document.getElementById("otpform").style.display="none"

    document.getElementById("success").style.display="block"  
    // document.getElementById("demo").style.display="none"
    document.getElementById("success").textContent="Validation Successful!"
    window.location.href = "http://pixel6.co/"
  }
  else{
    count=count+1;
    localStorage.setItem("count", count);
    if(localStorage.getItem("count")>=3){
    document.getElementById("error1").style.display="block"
    document.getElementById("error1").textContent="404 (Page Not Found)"
    window.location.href = "http://pixel6.co/"
    }
    
    
    document.getElementById("otp").value="" 
    alert("invalid otp\n Enter it again");

  }

}
