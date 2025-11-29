// Esperar a que Firebase cargue correctamente
auth.onAuthStateChanged(user => {
  // Si NO está logueado, lo mandamos al login
  if (!user) {
    window.location.href = "index.html";
  }
});

// Asegurar que el botón existe antes de usarlo
const cerrarBtn = document.getElementById("cerrar");

if (cerrarBtn) {
  cerrarBtn.addEventListener("click", () => {
    auth.signOut()
      .then(() => {
        window.location.href = "index.html";
      })
      .catch(error => {
        console.error("Error al cerrar sesión:", error);
      });
  });
}
