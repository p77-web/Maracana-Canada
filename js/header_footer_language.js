//  Language translation english and french
let language = {
	en: {
		buttonLanguage: 'Fr',
		home: 'Home',
		about: 'About Us',
		rules: 'Game rules',
		administration: 'Administration',
		competitions: 'Competitions',
		clubs: 'Clubs',
		contact: 'Contact',
		official: 'Official website of the Canadian Federation of Maracana',
		footer: 'Canadian Federation of Maracana'
	},
	fr: {
		buttonLanguage: 'En',
		home: 'Accueil',
		about: 'À propos',
		rules: 'Lois du jeu',
		administration: 'Administration',
		competitions: 'Compétitions',
		clubs: 'Clubs',
		contact: 'Contact',
		official: 'Site officiel de la Fédération Canadienne de Maracana',
		footer: 'Fédération Canadienne de Maracana'
	}
};

function getBrowserLanguage() {
	let browserFullLanguage =
		window.navigator.userLanguage || window.navigator.language;

	let browserLanguage = browserFullLanguage.split('-');
	if (browserLanguage[0] !== 'en' && browserLanguage[0] !== 'fr') {
		browserLanguage[0] = 'en';
	}

	return browserLanguage[0];
}

function getButtonLanguage() {
	let buttonLanguage = document.querySelector('.translate');

	return buttonLanguage.textContent.trim().toLowerCase();
}

// print the text by browser language
window.addEventListener(
	'DOMContentLoaded',
	function() {
		let textToChange = document.querySelectorAll('.translateText');

		// get the browser default language
		let browserLanguage = getBrowserLanguage();

		textToChange.forEach(text => {
			// check if the language object has a property like the class' key
			if (
				language[browserLanguage].hasOwnProperty(
					text.getAttribute('key')
				)
			) {
				text.innerHTML =
					language[browserLanguage][text.getAttribute('key')];
			}
		});
	},
	false
);

function changeLanguage() {
	// get the classes that contain the text to change
	let textToChange = document.querySelectorAll('.translateText');

	let buttonLanguage = getButtonLanguage();
	// console.log(buttonLanguage);

	textToChange.forEach(text => {
		// check if the language object has a property like the class' key
		if (language[buttonLanguage].hasOwnProperty(text.getAttribute('key'))) {
			text.innerHTML = language[buttonLanguage][text.getAttribute('key')];
		}
	});
}
