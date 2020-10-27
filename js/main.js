const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

/*  day 1  */

const btnAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const btnCloseAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const passInput = document.querySelector('#password');
const userName = document.querySelector('.user-name');
const btnOut = document.querySelector('.button-out');
let login = localStorage.getItem('loginFood');

function toggleModalAuth() {
    modalAuth.classList.toggle("is-open");
}
function authorized() {
  function logOut(){
    login = null;
    btnAuth.style.display = '';
    userName.style.display = '';
    btnOut.style.display = '';
    btnOut.removeEventListener('click', logOut)
    localStorage.removeItem('loginFood');
    checkAuth();
  }
    btnAuth.style.display = 'none';
    userName.textContent = login;
    userName.style.display = 'flex';
    btnOut.style.display = 'flex';
    btnOut.addEventListener('click', logOut)
}
function notAuthorized() {
    function logIn(e) {
      let logVal = loginInput.value.trim();
      let pasVal = passInput.value.trim();
      e.preventDefault();
      if(!logVal&&!pasVal){
        alert('Введи логин и пароль')
      } else if(!pasVal){
        // alert('Введите, пожалуйста, пароль')
        passInput.value = '';
        passInput.style.border = '2px solid red';
        passInput.setAttribute('placeholder', 'Введи пароль');
      } else if (!logVal){
        // alert('Введите, пожалуйста, логин')
        loginInput.value = '';
        loginInput.style.border = '2px solid red';
        loginInput.setAttribute('placeholder', 'Введи логин');
      } else {
        login = logVal;
        localStorage.setItem('loginFood', login);
        toggleModalAuth();
        btnAuth.removeEventListener('click', toggleModalAuth);
        btnCloseAuth.removeEventListener('click', toggleModalAuth);
        logInForm.removeEventListener('submit', logIn)
        loginInput.value = '';
        passInput.value = '';
        checkAuth();
      }
    }
    btnAuth.addEventListener('click', toggleModalAuth);
    btnCloseAuth.addEventListener('click', toggleModalAuth);
    btnCloseAuth.addEventListener('click', function () {
      loginInput.value = '';
      loginInput.style.border = '';
      loginInput.removeAttribute('placeholder');
      passInput.value = '';
      passInput.style.border = '';
      passInput.removeAttribute('placeholder');
    });
    logInForm.addEventListener('submit', logIn)
    loginInput.addEventListener('click', function () {
      loginInput.style.border = '';
      loginInput.removeAttribute('placeholder');
    })
    passInput.addEventListener('click', function () {
      passInput.style.border = '';
      passInput.removeAttribute('placeholder');
    })
}
function checkAuth() {
    if (login) {
        authorized();
    } else {
        notAuthorized();
    }
}
checkAuth();