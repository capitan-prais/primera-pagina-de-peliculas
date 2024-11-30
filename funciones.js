
//carrusel
document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel, {

		// la velocidad con que puedes mover el carrucel mas es mas lento y menos mas rapido
		duration: 280,
		// con este modificas el ancho total de la ruleta
		dist: 1, 
		// establece la distacia entre las imagenes
		shift: 10,
		// espaciado que llevan dentro
 		padding: 300,
		// cantidad de imagenes que se muestran en la pagina
		numVisible: 20,
		// esto es para poner los indicadores de la ruleta
		indicators: true,
	
		// para que se cierre la ruleta con true y se repita con false
		noWrap: false
		

	}); 
})

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