// Se ejecuta al cargar la página
window.onload = function() {
    const anioActual = new Date().getFullYear();
    document.getElementById('currentYear').innerText = anioActual;
    calcular(); // Calcula inicial al abrir
};

function calcular() {
    const mes = parseInt(document.getElementById('mes').value);
    const anio = new Date().getFullYear();
    const viajesDia = parseFloat(document.getElementById('viajesDia').value) || 0;
    const kms = parseFloat(document.getElementById('kms').value) || 0;
    const min = parseFloat(document.getElementById('minutos').value) || 0;
    const nafta = parseFloat(document.getElementById('nafta').value) || 0;
    const valorHora = parseFloat(document.getElementById('valorHora').value) || 0;
    const consumo = parseFloat(document.getElementById('auto').value);

    // Días Hábiles Argentina
    let diasHabiles = 0;
    let fecha = new Date(anio, mes, 1);
    
    // Feriados 2026 corregidos
    const feriados = ["2026-0-1", "2026-1-16", "2026-1-17", "2026-2-24", "2026-3-2", "2026-3-3", "2026-3-2", "2026-4-1", "2026-4-25", "2026-5-15", "2026-5-20", "2026-6-9", "2026-7-17", "2026-9-12", "2026-10-20", "2026-11-8", "2026-11-25"];

    while (fecha.getMonth() === mes) {
        const diaSemana = fecha.getDay();
        const fechaString = `${anio}-${mes}-${fecha.getDate()}`;
        if (diaSemana !== 0 && diaSemana !== 6 && !feriados.includes(fechaString)) {
            diasHabiles++;
        }
        fecha.setDate(fecha.getDate() + 1);
    }

    const viajesTotales = diasHabiles * viajesDia;
    const costoViaje = ((kms / consumo) * nafta) + ((min / 60) * valorHora);
    const totalMes = costoViaje * viajesTotales;

    // Actualización instantánea de la interfaz
    document.getElementById('resDias').innerText = diasHabiles;
    document.getElementById('resViajesTotales').innerText = viajesTotales;
    document.getElementById('resTotal').innerText = "$" + totalMes.toLocaleString('es-AR', {maximumFractionDigits: 0});
}
