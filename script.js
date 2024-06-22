// Contador de visitas (usando localStorage)
let visitas = localStorage.getItem('visitas') || 1;
visitas++;
localStorage.setItem('visitas', visitas);
document.getElementById('contador-visitas').textContent = visitas;

// Aquí puedes agregar cualquier otra función o código necesario para tu página
// Este archivo JavaScript ahora incluye el contador de visitas usando localStorage
