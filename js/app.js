const firebaseConfig = {
  apiKey: "AIzaSyDqJJ_GpDjKB0FLv_nETF_1WGh2ts-gys4",
  authDomain: "loguin-acf03.firebaseapp.com",
  projectId: "loguin-acf03",
  storageBucket: "loguin-acf03.firebasestorage.app",
  messagingSenderId: "197130458618",
  appId: "1:197130458618:web:7a3fb44aa1877a445fc043"
};
firebase.initializeApp(firebaseConfig);

// Activar Auth
const auth = firebase.auth();

// Manejo del formulario de login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      // Si el login está bien → ir a home.html
      window.location.href = "home.html";
    })
    .catch(err => {
      document.getElementById("mensaje").innerText = "Error: " + err.message;
    });
});