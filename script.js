function signUp(){

    let firstName = document.getElementById("firstName").value.trim();
    let  text = document.getElementById("text");

    let lastName = document.getElementById("lastName").value.trim();

    let countryCode = document.getElementById("countryCode").value;


    let number = document.getElementById("number").value.trim();
    let error = document.getElementById("error");

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email"); 

    let password =  document.getElementById("password").value.trim();
    let para = document.getElementById("para");


    let confirmPassword =  document.getElementById("confirmPassword").value.trim();
    let pass = document.getElementById("pass");

    let fullPhoneNumber = countryCode + number;

       let passwordLength = 7;
       let passwordRegex =
    /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{7,}$/;
    

    let userData =
    {
        firstName,
        lastName,
        username,
       number: fullPhoneNumber,
        password,
    }

    if(firstName === "" ){
         text.innerText = "Name is mandatory";
         text.style.color = "red";
    }


     if(number === "" ){
        error.innerText = "Contact number is mandatory";
        error.style.color = "red";   
    }

    else if(!/^[0-9]{10}$/.test(number)) {
    error.innerText = "Enter a valid 10-digit mobile number";
      error.style.color = "red";
       return;
    }
     

    if(username === ""){
        email.innerText = "Email is mandatory";
        email.style.color = "red";
    }
     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)){
        email.innerText = "Enter Valid Email Address";
          email.style.color = "red";    
    }
 
   if (password === "") {
  para.innerText = "Password is mandatory";
  para.style.color = "red";
  return;
  }

if(password !== confirmPassword){
  console.log("user id not created");
}
  
  else{
     localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
     localStorage.setItem("number", number);
     localStorage.setItem("email", username);
    localStorage.setItem("password", password);
     localStorage.setItem("confirmPassword", confirmPassword);
    window.location.href = "dashboard/dashboard.html";
   console.log(userData);
//    window.location.href = "login.html";
  } 
}
   
function toggleIcon(){
      let myImage = document.getElementById("myImage");
    let password = document.getElementById("password");

    
    if (password.type === "password") {
       password.type = "text";
       myImage.src = "eye-hidden-icon.png";
    }
    else{
         password.type = "password";
         myImage.src = "eye-icon.jpg";
    }
}

function togglePassword(){
      let eyeIcon = document.getElementById("eyeIcon");
    let confirmPassword = document.getElementById("confirmPassword");

    
    if (confirmPassword.type === "password") {
       confirmPassword.type = "text";
       eyeIcon.src = "eye-hidden-icon.png";
    }
    else{
         confirmPassword.type = "password";
         eyeIcon.src = "eye-icon.jpg";
    }
}
function hideError(){
    let firstName = document.getElementById("firstName").value.trim();
    let  text = document.getElementById("text");

    let password =  document.getElementById("password").value.trim() ;
     let para = document.getElementById("para");

       if(firstName !== ""){
          text.style.display = "none";
       }

       if(password !== ""){
        para.style.display = "none";
       } 

}

function checkConfirmPassword() {
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let pass = document.getElementById("pass");

  if (confirmPassword === "") return;

  if (confirmPassword !== password) {
    pass.innerText = "Password does not match";
    pass.style.color = "red";
    pass.style.display = "block";
  } else {
    pass.style.display = "none";
  }
}

function handlePhoneTyping(input) {
  input.value = input.value.replace(/[^0-9]/g, '');

  
  document.getElementById("error").style.display = "none";
}

function validatePhone() {
  let number = document.getElementById("number").value.trim();
  let error = document.getElementById("error");

  if (number === "") {
    error.innerText = "Contact number is mandatory";
    error.style.color = "red";
    error.style.display = "block";
    return;
  }

  if (!/^[6-9][0-9]{9}$/.test(number)) {
    error.innerText = "Enter a valid 10-digit mobile number";
    error.style.color = "red";
    error.style.display = "block";
    return;
  }
  error.style.display = "none";
}

function validateEmail(){
  let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email"); 

    if(username === ""){
      email.innerText = "Email is mandatory";
      email.style.color = "red";
      email.style.display = "block";
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)){
      email.innerText = "Enter valid email address";
      email.style.color = "red";
      email.style.display = "block";
      return;
    }
    email.style.display = "none";
}

function validatePassword(){
  let password =  document.getElementById("password").value.trim() ;
     let para = document.getElementById("para");
       let passwordLength = 7;
       let passwordRegex =
    /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{7,}$/;

   if (password === "") {
  para.innerText = "Password is mandatory";
 para.style.display = "block";
 para.style.color = "red";
  return;
  }

if (password.length < passwordLength) {
  para.innerText = "Password must be at least 7 characters";
 para.style.display = "block";
 para.style.color = "red";
  return;
}

if (!passwordRegex.test(password)) {
  para.innerText = "Password must contain at least one special character";
  para.style.display = "block";
  para.style.color = "red";
  return;
}
para.style.display = "none";
}

