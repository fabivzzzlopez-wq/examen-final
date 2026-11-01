// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    const listaMovimientos = document.getElementById('lista-movimientos');
    const totalPrecioTxt = document.getElementById('total-precio');
    
    let totalAcumulado = 0;

    // Asignar evento click a cada botón de los productos
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Obtener datos del producto contenedor
            const productoElemento = e.target.closest('.producto');
            const id = productoElemento.getAttribute('data-id');
            const nombre = productoElemento.getAttribute('data-nombre');
            const precio = parseFloat(productoElemento.getAttribute('data-price') || productoElemento.getAttribute('data-precio'));

            // Registrar el movimiento en la tabla
            agregarMovimientoATabla(id, nombre, precio);

            // Actualizar el costo total
            totalAcumulado += precio;
            totalPrecioTxt.textContent = totalAcumulado.toFixed(2);
        });
    });

    // Función para insertar filas dinámicas a la tabla de movimientos
    function agregarMovimientoATabla(id, nombre, precio) {
        const fechaActual = new Date().toLocaleString();
        
        // Crear una nueva fila
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>#${id}</td>
            <td>${nombre}</td>
            <td>$${precio.toFixed(2)}</td>
            <td>${fechaActual}</td>
        `;

        // Añadir la fila al cuerpo de la tabla
        listaMovimientos.appendChild(fila);
    }
});