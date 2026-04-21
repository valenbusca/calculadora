function calcular() {
    // Captura de datos
    const kms = parseFloat(document.getElementById('kms').value);
    const min = parseFloat(document.getElementById('minutos').value);
    const nafta = parseFloat(document.getElementById('nafta').value);
    const cons = parseFloat(document.getElementById('consumo').value);
    const vHora = parseFloat(document.getElementById('valorHora').value);

    // Validación básica
    if (!kms || !min || !nafta || !cons || !vHora) return alert("Faltan datos");

    // Conversión interna: Minutos a Horas
    const horas = min / 60;

    // Fórmulas
    const costoNafta = (kms / cons) * nafta;
    const costoTiempo = horas * vHora;
    const total = costoNafta + costoTiempo;

    // Mostrar resultados formateados
    document.getElementById('resNafta').innerText = `$${costoNafta.toFixed(2)}`;
    document.getElementById('resTiempo').innerText = `$${costoTiempo.toFixed(2)}`;
    document.getElementById('resTotal').innerText = `$${total.toFixed(2)}`;
    
    document.getElementById('resultado').style.display = 'block';
}