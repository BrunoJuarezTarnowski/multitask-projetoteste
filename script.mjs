// Importações no início do arquivo
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpVH-5NVfcceFlVfoKf1_SuPsYGdHZdZE",
  authDomain: "mtp-recados-1ac05.firebaseapp.com",
  projectId: "mtp-recados-1ac05",
  storageBucket: "mtp-recados-1ac05.appspot.com",
  messagingSenderId: "326941509830",
  appId: "1:326941509830:web:778dfadcf27c69f64befc7"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navbg = document.querySelector('.nav-bg');
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const navLinks = document.querySelectorAll('.navbar a');
    const btnLogout = document.querySelector('.btnLogout-popup');

    function checkLoginStatus() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const passagemLink = document.querySelector('a[href="/Passagem.html"]');
        const recadosLink = document.querySelector('a[href="/Recados.html"]');

      
    }
    
    checkLoginStatus();

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
            navbg.classList.toggle('active');
        });
    }

    if (btnPopup) {
        btnPopup.addEventListener('click', () => {
            window.location.href = "/Início.html";
        });
    }

    if (iconClose) {
        iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            sessionStorage.removeItem('isLoggedIn');
            window.location.href = '/index.html';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
            navbg.classList.remove('active');
        });
    });

    const registrarBtn = document.getElementById('registrar-btn');
    const listaPassagem = document.getElementById('lista-passagem');

    if (registrarBtn && listaPassagem) {
        registrarBtn.addEventListener('click', function () {
            const cliente = document.getElementById('cliente').value;
            const informacao = document.getElementById('informacao').value;

            if (informacao) {
                const li = document.createElement('li');
                li.textContent = `${cliente}: ${informacao}`;

                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remover';
                removeBtn.addEventListener('click', function () {
                    li.remove();
                });

                li.appendChild(removeBtn);
                listaPassagem.appendChild(li);
              
                document.getElementById('informacao').value = '';
            }
        });
    }

    const submit = document.getElementById('submit');
    if (submit) {
        submit.addEventListener("click", function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //alert("Login Efetuado com sucesso!");
                sessionStorage.setItem('isLoggedIn', true); 
                window.location.href = "Início.html";
            })
            .catch((error) => {
                alert("E-mail ou Senha incorretos. Por favor tente novamente!");
            });
        });
    }
});
