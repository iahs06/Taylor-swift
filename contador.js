// Función para obtener y actualizar el contador de visitas
function actualizarContadorVisitas() {
    let contador = localStorage.getItem('visitas') || 0;
    contador++;
    localStorage.setItem('visitas', contador);
    document.getElementById('visitasNumero').textContent = contador;
}

// Función para reiniciar el contador de visitas
function reiniciarContadorVisitas() {
    localStorage.removeItem('visitas');
    actualizarContadorVisitas(); // Llama a la función para actualizar el contador después de reiniciar
}

// Llama a la función al cargar la página
actualizarContadorVisitas();
