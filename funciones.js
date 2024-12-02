// aqui modificaremos el buscador 

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el campo de búsqueda y los elementos de título de película
    const searchInput = document.getElementById('searchInput');
    const movieTitles = document.querySelectorAll('.titulodepelicula'); // Todos los títulos de las películas
    
    // Evento que se activa cuando el usuario escribe en el buscador
    searchInput.addEventListener('input', function() {
        // Obtener el valor del campo de búsqueda, lo pasamos a minúsculas
        const searchText = searchInput.value.toLowerCase();
        
        // Recorrer todos los títulos de las películas
        movieTitles.forEach(function(title) {
            // Obtener el texto de cada título
            const titleText = title.textContent.toLowerCase();
            
            // Comprobar si el título contiene el texto buscado
            if (titleText.includes(searchText)) {
                // Si el título contiene el texto buscado, mostrarlo
                title.parentElement.style.display = 'block';
            } else {
                // Si no contiene el texto, ocultarlo
                title.parentElement.style.display = 'none';
            }
        });
    });
});

// <<aqui modificamos el carrusel>>

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos con la clase '.carousel'
    const elementosCarousel = document.querySelectorAll('.carousel');

    // Configuración común para todos los carouseles
    const opcionesCarousel = {
        duration: 280,         // Duración de la animación
        dist: 1,               // Distancia entre los elementos
        shift: 10,             // Desplazamiento de los elementos
        padding: 300,          // Espaciado del contenido
        numVisible: 20,        // Número de elementos visibles
        indicators: true,      // Mostrar indicadores
        noWrap: false          // Hacer que el carousel se repita
    };

    // Inicializar los carouseles con las opciones definidas
    M.Carousel.init(elementosCarousel, opcionesCarousel);

    // Función para mover el carousel a la siguiente imagen
    const siguiente = (carousel) => {
        // Avanzar al siguiente elemento del carousel
        carousel.M_Carousel.next();
    };

    // Función para mover el carousel a la imagen anterior
    const anterior = (carousel) => {
        // Retroceder al anterior elemento del carousel
        carousel.M_Carousel.prev();
    };

    // Para cada carousel, agregar los botones de navegación
    elementosCarousel.forEach((carousel, index) => {
        // Crear los botones de navegación
        const btnSiguiente = document.createElement('button');
        btnSiguiente.classList.add('btn', 'btn-siguiente');
        btnSiguiente.innerHTML = '<i class="material-icons">&#10095;</i>';  // Icono de siguiente (flecha derecha)
        
        const btnAnterior = document.createElement('button');
        btnAnterior.classList.add('btn', 'btn-anterior');
        btnAnterior.innerHTML = '<i class="material-icons">&#10094;</i>';  // Icono de anterior (flecha izquierda)

        // Agregar los botones al contenedor de cada carousel
        const carouselContainer = carousel.closest('.carousel-container');
        carouselContainer.appendChild(btnSiguiente);
        carouselContainer.appendChild(btnAnterior);

        // Asignar los eventos de clic a los botones
        btnSiguiente.addEventListener('click', () => siguiente(carousel));
        btnAnterior.addEventListener('click', () => anterior(carousel));
    });
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

type="text/javascript">
	$(document).ready(function(){
		$('.menu-i').mouseover(function(){
			$('audio')[0].play();
		});

		$('.menu-i').mouseup(function(){
			$('audio')[1].play();
		});

		$('.imagenpeli').mouseenter(function(){
			$('audio')[5].play();
		});

		$('.logo4').mouseup(function(){
			$('audio')[3].play();
		});

		$('.logo4').mouseenter(function(){
			$('audio')[3].pause();
		});

		$('.ContenedorBuscador').mouseup(function(){
			$('audio')[4].play();
		});

		$('.n').mouseover(function(){
			$('audio')[0].play();
		});

		$('.n').mousedown(function(){
			$('audio')[6].play();
		});
	});

        