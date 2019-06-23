(function() {
	if (typeof NodeList.prototype.forEach === 'function') return false;
	NodeList.prototype.forEach = Array.prototype.forEach;
})();

//  Language translation english and french
var language = {
	en: {
		buttonLanguage: 'Fr',
		home: 'Home',
		about: 'About Us',
		rules: 'Rules',
		laws: 'Game laws',
		infosheet: 'Infosheets',
		administration: 'Administration',
		competitions: 'Competitions',
		results: 'Results',
		teams: 'Teams',
		national: 'National',
		championship: 'Championships',
		championship17: 'Championship 2017',
		championship18: 'Championship 2018',
		championship19: 'Championship 2019',
		cup: 'Cups',
		cup17: 'Cup 2017',
		cup18: 'Cup 2018',
		cup19: 'Cup 2019',
		tournament: 'Clubs tournament',
		international: 'International',
		world: 'World Cups',
		clubs: 'Clubs',
		contact: 'Contact',
		official: 'Official website',
		donation: 'Donate',
		footer: 'Canadian Federation of Maracana',
		agenda: 'Agenda',
		news: 'News',
		knowledge: 'Knowledge',
		federation: 'Federation',
		council: 'Council',
		contact: 'Contacts',
		form: 'Form'
	},
	fr: {
		buttonLanguage: 'En',
		home: 'Accueil',
		about: 'À propos',
		rules: 'Règles',
		laws: 'Lois du jeu',
		infosheet: 'Capsules',
		administration: 'Administration',
		competitions: 'Compétitions',
		results: 'Résultats',
		teams: 'Équipes',
		national: 'Nationales',
		championship: 'Championnats',
		championship17: 'Championnat 2017',
		championship18: 'Championnat 2018',
		championship19: 'Championnat 2019',
		cup: 'Coupes',
		cup17: 'Coupe 2017',
		cup18: 'Coupe 2018',
		cup19: 'Coupe 2019',
		tournament: 'Tournois des clubs',
		international: 'Internationales',
		world: 'Mondiales',
		clubs: 'Clubs',
		contact: 'Contact',
		official: 'Site officiel',
		donation: 'Faites un don',
		footer: 'Fédération Canadienne de Maracana',
		agenda: 'Agenda',
		news: 'Actualités',
		knowledge: 'Infos',
		federation: 'Fédération',
		council: 'Conseil',
		contact: 'Contacts',
		form: 'Formulaire'
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

		textToChange.forEach(function(text) {
			// check if the language object has a property like the class' key
			if (
				language[browserLanguage].hasOwnProperty(
					text.getAttribute('data-key')
				)
			) {
				text.innerHTML =
					language[browserLanguage][text.getAttribute('data-key')];
			}
		});
	},
	false
);

function changeLanguage() {
	// get the classes that contain the text to change
	let textToChange = document.querySelectorAll('.translateText');

	let buttonLanguage = getButtonLanguage();

	textToChange.forEach(function(text) {
		// check if the language object has a property like the class' key
		if (
			language[buttonLanguage].hasOwnProperty(
				text.getAttribute('data-key')
			)
		) {
			text.innerHTML =
				language[buttonLanguage][text.getAttribute('data-key')];
		}
	});
}
