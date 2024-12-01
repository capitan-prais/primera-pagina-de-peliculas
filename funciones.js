document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos con la clase '.carousel'
    const elementosCarousel = document.querySelectorAll('.carousel');

    // Configuración común para todos los carousels
    const opcionesCarousel = {
        duration: 280,         // Duración de la animación
        dist: 1,               // Distancia entre los elementos
        shift: 10,             // Desplazamiento de los elementos
        padding: 300,          // Espaciado del contenido
        numVisible: 20,        // Número de elementos visibles
        indicators: true,      // Mostrar indicadores
        noWrap: false          // Hacer que el carousel se repita
    };

    // Inicializar todos los carousels con las opciones definidas
    M.Carousel.init(elementosCarousel, opcionesCarousel); 
});


//activa o cierra el menu lateral al achicar la pagina
	const menu = document.querySelector('.menu');
	const btn = document.querySelector('.menu-btn');

		btn.addEventListener('click', () => {
			menu.classList.toggle('active')
		
		}
		// btn.addEventListener('click', () => {
		// 	menu.classList.toggle('pause')
		// }
		);