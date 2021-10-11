let user = document.getElementById("user");
let password = document.getElementById("pwd");
let eyeIcon = document.getElementById("eye-icon");
let eye = document.getElementById("hide-eye");
let eyeSlash = document.getElementById("hide-eye-slash");
let login = document.getElementById("login");
let hello = document.getElementById("hello");

eyeIcon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eye.style.display = "block";
    eyeSlash.style.display = "none";

  } else {
    password.type = "password";
    eye.style.display = "none";
    eyeSlash.style.display = "block";
  }
}

function loginClick() {
  let name = document.querySelector("#user-name");
  login.style.display = 'none';
  hello.style.display = 'block';
  if (user.value != '') {
    name.innerHTML = user.value;
    
  }
  else {
    name.innerHTML = 'Tên Đăng Nhập Rỗng';

  }
}

function logoutClick() {
  login.style.display = 'block';
  hello.style.display = 'none';
}

function checkName(str) {
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return format.test(str) && false;
}