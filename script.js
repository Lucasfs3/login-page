let labelEmail = document.getElementById("labelEmail");
let labelPassword = document.getElementById("labelPassword");
let inputs = document.getElementsByClassName("input");
let button = document.getElementById("button");

function state1(obj) {
  obj.style.transform = "translateY(2rem)";
  obj.style.color = "var(--color5)";
}

function state2(obj) {
  obj.style.transform = "translateY(0)";
  obj.style.color = "var(--color4)";
}

function stateButton1(obj) {
  obj.style.boxShadow = "0 0 1rem 0.5rem var(--color4)";
}

function stateButton2(obj) {
  obj.style.boxShadow = "none";
}


if (email.value != "") {
  state2(labelEmail);
}

if (password.value != "") {
  state2(labelPassword);
}



for (let i of inputs) {

  i.addEventListener("click", (event) => {
    if (event.target.id == "email") {
      state2(labelEmail);
    } else {
      state2(labelPassword);
    }
  });

  i.addEventListener("focusin", (event) => {
    if (event.target.id == "email") {
      state2(labelEmail);
    } else {
      state2(labelPassword);
    }
  });
  
  i.addEventListener("focusout", (event) => {
    if (event.target.id == "email") {
      if (email.value == "") {
        state1(labelEmail);
      } else {
        state2(labelEmail);
      }
    } else {
      if (password.value == "") {
        state1(labelPassword);
      } else {
        state2(labelPassword);
      }
    }
  });
}


button.addEventListener("focusin", (event) => {
  stateButton1(event.target.parentNode);
});


button.addEventListener("focusout", (event) => {
  stateButton2(event.target.parentNode);
});