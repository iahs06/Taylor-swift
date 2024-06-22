// Contador de visitas (usando localStorage)
let visitas = localStorage.getItem('visitas') || 0;
visitas++;
localStorage.setItem('visitas', visitas);
document.getElementById('contador-visitas').textContent = visitas;

// Aquí puedes agregar cualquier otra función o código necesario para tu página
// Este archivo JavaScript ahora incluye el contador de visitas usando localStorage
// Reiniciar el contador de visitas a 0 (usando localStorage)
let visitas = 0; // Establece el contador en 0
localStorage.setItem('visitas', visitas); // Guarda el valor en localStorage
document.getElementById('contador-visitas').textContent = visitas; // Actualiza el contador en la página

// Aquí puedes agregar cualquier otra función o código necesario para tu página
// Este archivo JavaScript ahora establece el contador de visitas en 0 al iniciar

