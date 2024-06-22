// Función para obtener y actualizar el contador de visitas
function actualizarContadorVisitas() {
    let contador = localStorage.getItem('visitas') || 0;
    contador++;
    localStorage.setItem('visitas', contador);
    document.getElementById('visitasNumero').textContent = contador;
}

// Llama a la función al cargar la página
actualizarContadorVisitas();
