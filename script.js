// Contador de visitas (usando localStorage)
let visitas = localStorage.setItem('visitas', visitas); || 0;
visitas++;
localStorage.setItem('visitas', visitas);
document.getElementById('contador-visitas').textContent = visitas;
