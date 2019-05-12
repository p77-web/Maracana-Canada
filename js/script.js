let galerie = document.getElementById('galerie-header');
let delegationPictures = document.getElementById('delegation-img');
let header = document.getElementById('home-section');
let leftCard = document.getElementById('left-card');
let rightCard = document.getElementById('right-card');
let bottomCard = document.getElementById('bottom-card');
let leftCardTitle = document.getElementById('left-card-title');
let rightCardTitle = document.getElementById('right-card-title');
let bottomCardTitle = document.getElementById('bottom-card-title');

let fadePoint = 0;

if (window.innerHeight < 600) {
	fadePoint = 300;
} else if (window.innerHeight < 900) {
	fadePoint = 500;
} else {
	fadePoint = 700;
}

window.addEventListener('scroll', function() {
	if (galerie.offsetTop <= window.scrollY + fadePoint) {
		delegationPictures.style.opacity = '1';
		delegationPictures.style.WebkitTransition = '2s';
		delegationPictures.style.MozTransition = '2s';
	}

	if (leftCardTitle.getBoundingClientRect().top <= window.innerHeight - 200) {
		leftCard.style.opacity = '1';
		leftCard.style.WebkitTransition = '3s';
		leftCard.style.MozTransition = '3s';
	}

	if (
		rightCardTitle.getBoundingClientRect().top <=
		window.innerHeight - 200
	) {
		rightCard.style.opacity = '1';
		rightCard.style.WebkitTransition = '3s';
		rightCard.style.MozTransition = '3s';
	}

	if (
		bottomCardTitle.getBoundingClientRect().top <=
		window.innerHeight - 200
	) {
		bottomCard.style.opacity = '1';
		bottomCard.style.WebkitTransition = '3s';
		bottomCard.style.MozTransition = '3s';
	}
});
