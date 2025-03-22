async function scrapeData() {
    try {
        const response = await fetch('http://190.86.189.164:8095/?');
        const html = await response.text();

        // Crear un DOM virtual
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extraer datos (ajusta el selector según la estructura de la página)
        const data = doc.body.innerText;
        console.log('Datos extraídos:', data);

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Ejecutar la función
scrapeData();
