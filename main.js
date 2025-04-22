const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#Password");
const confemPassword = document.querySelector("#confemPassword");
const form =  document.querySelector("#form");

const showError = (input,message) => {

 let parentElement = input.parentElement;
 parentElement.classList = 'form-control error';
 const small = parentElement.querySelector("small");
 const successIcon = parentElement.querySelectorAll("i")[0];
 const errorIcon = parentElement.querySelectorAll("i")[1];
 errorIcon.style.visibility = 'visible';
 successIcon.style.visibility = 'hidden';
 small.innerText = message; 

}

const showSuccess = (input) => {

   let parentElement = input.parentElement;
   parentElement.classList = 'form-control success';
   const successIcon = parentElement.querySelectorAll("i")[0];
   const errorIcon = parentElement.querySelectorAll("i")[1];
   errorIcon.style.visibility = 'hidden';
   successIcon.style.visibility = 'visible';
  
  }


  const checkEmail = (email) => {
   const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if(reg.test(email.value)){
      showSuccess(email);
   }else{
      showError(email, 'Invalid Email'); 
   }
  }

  const checkPasswordLength = (input,min,max) => {

   if(input.value.length < min){
      showError(input,`password atleast ${min} Chartcater `);
   }else if (input.value.length > max){
      showError(input, `password maximun charactor is ${max}`);
   }else{
      showSuccess(input);
   }

  }

form.addEventListener("submit", (event) => {

   const checkEmpty = (elements) => {
     
      elements.forEach( (element) => {
         if(element.value === ''){
            showError(element,'Input required');
         }else{
            showSuccess(element);
         }
      });
   }
   event.preventDefault();

   checkEmpty( [username,email,password,confemPassword]);
   checkEmail(email);

   checkPasswordLength(password,6,10);
   checkPasswordLength(confemPassword,6,10);
   
});

