// Función para que arranque apenas carga la web
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('currentYear').innerText = new Date().getFullYear();
    calcular();
});

function calcular() {
    try {
        const mes = parseInt(document.getElementById('mes').value);
        const anio = 2026; // Fijamos 2026 que es tu año de cursada
        const viajesDia = parseFloat(document.getElementById('viajesDia').value) || 0;
        const kms = parseFloat(document.getElementById('kms').value) || 0;
        const min = parseFloat(document.getElementById('minutos').value) || 0;
        const nafta = parseFloat(document.getElementById('nafta').value) || 0;
        const valorHora = parseFloat(document.getElementById('valorHora').value) || 0;
        const consumo = parseFloat(document.getElementById('auto').value) || 12;

        let diasHabiles = 0;
        let fecha = new Date(anio, mes, 1);
        
        // Feriados Argentina 2026 aproximados
        const feriados = ["2026-0-1", "2026-1-16", "2026-1-17", "2026-2-24", "2026-3-2", "2026-3-3", "2026-3-2", "2026-4-1", "2026-4-25", "2026-5-15", "2026-5-20", "2026-6-9", "2026-7-17", "2026-9-12", "2026-10-20", "2026-11-8", "2026-11-25"];

        while (fecha.getMonth() === mes) {
            let d = fecha.getDay();
            let fStr = `${anio}-${mes}-${fecha.getDate()}`;
            if (d !== 0 && d !== 6 && !feriados.includes(fStr)) {
                diasHabiles++;
            }
            fecha.setDate(fecha.getDate() + 1);
        }

        const viajesTotales = diasHabiles * viajesDia;
        const costoPorViaje = ((kms / consumo) * nafta) + ((min / 60) * valorHora);
        const total = costoPorViaje * viajesTotales;

        document.getElementById('resDias').innerText = diasHabiles;
        document.getElementById('resViajesTotales').innerText = viajesTotales;
        document.getElementById('resTotal').innerText = "$" + Math.round(total).toLocaleString('es-AR');
    } catch (e) {
        console.error("Error en el cálculo", e);
    }
}
