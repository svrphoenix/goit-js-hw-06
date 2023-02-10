const loginFormRef = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const {
    elements: {email, password},
  } = event.currentTarget;
  const userCredentials = {};
  
  if (email.value === "" || password.value === "") {
    alert("Усі поля форми повинні бути заповнені!");
  } else { 
    userCredentials.email = email.value;
    userCredentials.password = password.value;
    console.log(userCredentials);
    event.currentTarget.reset();
  }
};

loginFormRef.addEventListener("submit", onFormSubmit);
