 let firstName = localStorage.getItem("firstName");
    let lastName = localStorage.getItem("lastName");
    let number = localStorage.getItem("number");
    let email = localStorage.getItem("email");
    let username = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let confirmPassword = localStorage.getItem("confirmPassword");

    
  document.getElementById("showFirst").value = firstName || "";
  document.getElementById("showLast").value = lastName || "";
  document.getElementById("showContact").value = number || "";
  document.getElementById("showEmail").value = email || "";
  document.getElementById("showUser").value = username || "";
  document.getElementById("showPass").value = password || "";
  document.getElementById("showConfirmPass").value = confirmPassword || "";


  

  function toggleIcon(){
      let myImage = document.getElementById("myImage");
    let showPass = document.getElementById("showPass");

    
    if (showPass.type === "password") {
       showPass.type = "text";
       myImage.src = "eye-hidden-icon.png";
    }
    else{
         showPass.type = "password";
         myImage.src = "eye-icon.jpg";
    }
}

function togglePassword(){
      let eyeIcon = document.getElementById("eyeIcon");
    let showConfirmPass = document.getElementById("showConfirmPass");

    
    if (showConfirmPass.type === "password") {
      showConfirmPass.type = "text";
       eyeIcon.src = "eye-hidden-icon.png";
    }
    else{
         showConfirmPass.type = "password";
         eyeIcon.src = "eye-icon.jpg";
    }
}

function deleteUser(){
    let firstName = localStorage.removeItem("firstName");
    let lastName = localStorage.removeItem("lastName");
    let number = localStorage.removeItem("number");
    let email = localStorage.removeItem("email");
    let username = localStorage.removeItem("email");
    let password = localStorage.removeItem("password");
    let confirmPassword = localStorage.removeItem("confirmPassword");

    document.getElementById("showFirst").value = "";
  document.getElementById("showLast").value =  "";
  document.getElementById("showContact").value = "";
  document.getElementById("showEmail").value = "";
  document.getElementById("showUser").value = "";
  document.getElementById("showPass").value = "";
  document.getElementById("showConfirmPass").value =  "";   
}
 


function submitUser(event) {
  event.preventDefault();

  let firstName = showFirst.value.trim();
  let lastName = showLast.value.trim();
  let number = showContact.value.trim();
  let email = showEmail.value.trim();
  let username = showUser.value.trim();
  let password = showPass.value.trim();
  let confirmPassword = showConfirmPass.value.trim();
  let check = document.getElementById("check").checked;
  let text = document.getElementById("text");

  if (!firstName || !lastName || !number || !email || !username || !password || !confirmPassword) {
    text.innerText = "Please fill all required fields";
    text.style.color = "red";
    return;
  }

  if (!check) {
    text.innerText = "Please accept Terms & Conditions";
    text.style.color = "red";
    text.style.display = "block";
    
  }
  else{
   text.style.display = "none";
  console.log("Form submitted successfully");
  }
}


