auth.onAuthStateChanged(user => {
  if (!user) {
    // Si NO está logueado → regresar al login
    window.location.href = "index.html";
  }
});

// Botón cerrar sesión
document.getElementById("cerrar").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
});
