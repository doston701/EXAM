const getBtn = document.querySelector("#btn");
const getform = document.querySelector(".login__form");

getBtn.addEventListener("click", (e) => {
  e.preventDefault();

  function login() {
    const getInput = document.querySelector("#email").value;
    const getInput2 = document.querySelector("#pass").value;

    if (getInput == "eve.holt@reqres.in" && getInput2 == "user124") {
      window.location.href = "index.html";
    } else {
      window.location.href = "login.html";
      alert("Password or email is wrong tray again");
    }
  }

  login();
});
