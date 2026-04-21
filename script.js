function calcular() {
    const mes = parseInt(document.getElementById('mes').value);
    const anio = parseInt(document.getElementById('anio').value);
    const viajesDia = parseFloat(document.getElementById('viajesDia').value);
    const kms = parseFloat(document.getElementById('kms').value);
    const min = parseFloat(document.getElementById('minutos').value);
    const nafta = parseFloat(document.getElementById('nafta').value);
    const valorHora = parseFloat(document.getElementById('valorHora').value);
    const consumo = parseFloat(document.getElementById('auto').value);

    if (isNaN(kms) || isNaN(min) || isNaN(nafta) || isNaN(valorHora)) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // 1. Cálculo de días hábiles Argentina 2026
    let diasHabiles = 0;
    let fecha = new Date(anio, mes, 1);
    
    const feriados2026 = [
        "2026-0-1", "2026-1-16", "2026-1-17", "2026-2-24", 
        "2026-3-2", "2026-3-3", "2026-3-2", "2026-4-1", 
        "2026-4-25", "2026-5-15", "2026-5-20", "2026-6-9", 
        "2026-7-17", "2026-8-12", "2026-9-12", "2026-10-20",
        "2026-11-8", "2026-11-25"
    ];

    while (fecha.getMonth() === mes) {
        const diaSemana = fecha.getDay();
        const fechaString = `${anio}-${mes}-${fecha.getDate()}`;
        
        // No es Sábado (6), ni Domingo (0), ni Feriado
        if (diaSemana !== 0 && diaSemana !== 6 && !feriados2026.includes(fechaString)) {
            diasHabiles++;
        }
        fecha.setDate(fecha.getDate() + 1);
    }

    // 2. Cálculos finales
    const viajesTotales = diasHabiles * viajesDia;
    const costoCombustibleViaje = (kms / consumo) * nafta;
    const costoTiempoViaje = (min / 60) * valorHora;
    const totalMes = (costoCombustibleViaje + costoTiempoViaje) * viajesTotales;

    // 3. Mostrar en pantalla
    document.getElementById('resDias').innerText = diasHabiles;
    document.getElementById('resViajesTotales').innerText = viajesTotales;
    document.getElementById('resTotal').innerText = "$" + totalMes.toLocaleString('es-AR', {maximumFractionDigits: 0});
    
    document.getElementById('resultado').style.display = 'block';
}
