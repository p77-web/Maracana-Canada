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
		form: 'Form',
		info: 'Maracana is soccer played with 6 players without a goalkeeper',
		n_cup: 'National Cup 2019',
		n_cup_date: 'July 20th',
		n_cup_sub: 'All on the assault of Peace Team',
		ch_w_2019: '2019 Championship winners',
		scorer_2019: '2019 Championship best scorer',
		i_c_2018: 'Ivory Coast 2018',
		n_cup_2018: '2018 National cup winners',
		ch_w_2018: '2018 Championship winners',
		mali_2017: 'Departure for 2017 Mali Mara’CAN',
		f_p: 'Fairplay to Canada in Mali 2017 tournament',
		visit: 'A training center visit in Mali',
		donations: 'Donations to a training center in Burkina Faso',
		practice: 'Team Canada first practice',
		interview: "President Cissé's interview on RFI",
		n_cup_mtl: 'Montreal 2019 National Cup',
		n_cup_mtl_date: 'July 20th, 2019',
		n_cup_mtl_info: 'Registrations have begun',
		acn: 'African Cup of Nations in Conakry',
		acn_date: '23 to 30 September 2019',
		acn_c: 'Guest countries',
		acn_c_ca: 'Canada',
		acn_c_us: 'United States',
		acn_c_fr: 'France',
		acn_c_ch: 'China',
		acn_c_sw: 'Sweden',
		a_title: 'Actualities',
		a_subtitle_1: "Preparations for Mara'CAN 2019",
		a_text_1: 'Mission, experts of the FIMAA, prospection of competition sites and accommodation in Conakry.',
		a_subtitle_2: 'Visit of the FIMAA VP in charge of competitions',
		a_text_2:
			'Coming to represent the president of the FIMAA at the Canadian championship April 27, 2019, Mr. Maiguizo visited the pioneering team of Maracana in Canada, Ivory Foot Montreal.',
		pr_title: 'What you need to know',
		pr_text_1:
			'Maracana is a soccer played six players without a goalkeeper, on a handball field. With specific rules, each game is played over two periods of 10 minutes. It is very technical and is based on a Conviviality - Fraternity - Friendship spirit. There are two official categories of competitions: seniors (35 and over) and veterans (over 45). However, we integrate the juniors (30 to 35 years) during the break-in period of our discipline under certain conditions.',
		pr_text_2:
			'Maracana Canada, the official name of the Canadian Maracana Federation, regulates, organizes and promotes this sport throughout the country. It was created in July 2016 and aims to find hidden talents across Canada to bring trophies back to the world. This will be done through information and awareness tours followed by major competitions. We invite you to show your interest in this sport by registering for our next demonstration sessions. Maracana Canada is looking forward to meeting you.',
		pt_title: 'OUR PARTNERS'
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
		form: 'Formulaire',
		info: 'Le maracana est du soccer à 6 sans gardien de but',
		n_cup: 'Coupe nationale 2019',
		n_cup_date: '20 juillet',
		n_cup_sub: "Tous à l'assaut de Peace Team",
		ch_w_2019: 'Champions Nationaux 2019',
		scorer_2019: 'Meilleur buteur du Championnat 2019',
		i_c_2018: "Côte d'Ivoire 2018",
		n_cup_2018: 'Vainqueurs de la Coupe Nationale 2018',
		ch_w_2018: 'Champions Nationaux 2018',
		mali_2017: "Départ pour la MARA'CAN MALI 2017",
		f_p: 'La medaille du Fair-Play au Canada',
		visit: "Visite d'un centre de formation en Mali",
		donations: 'Remise de dons au Burkina Faso',
		practice: 'Première pratique de Team Canada',
		interview: 'Entrevue du président Cissé sur RFI',
		n_cup_mtl: 'Coupe nationale 2019 à Montréal',
		n_cup_mtl_date: '20 juillet 2019',
		n_cup_mtl_info: 'Les inscriptions ont débuté',
		acn: "Coupe d'Afrique des nations à Conakry",
		acn_date: '23 au 30 septembre 2019',
		acn_c: 'Pays invités',
		acn_c_ca: 'Le Canada',
		acn_c_us: 'Les États-Unis',
		acn_c_fr: 'La France',
		acn_c_ch: 'La Chine',
		acn_c_sw: 'La Suéde',
		a_title: 'Actualités',
		a_subtitle_1: "Préparatifs de la Mara'CAN 2019",
		a_text_1: "Mission, des experts de la FIMAA, de prospection des sites de compétitions et d'hébergement à Conakry.",
		a_subtitle_2: 'Visite du VP de la FIMAA en charge des compétitions',
		a_text_2:
			"Venu représenter le président de la FIMAA lors du championnat canadien du 27 avril 2019, Monsieur Maiguizo a rendu visite à l'équipe pionnière du Maracana au Canada, Ivoire Foot Montréal.",
		pr_title: "Ce qu'il faut savoir",
		pr_text_1:
			'Le maracana est du soccer joué à six joueurs sans gardien de but, sur un terrain de handball. Il a ses règles spécifiques et chaque match se joue sur deux périodes de 10 minutes. Il est très technique et se base sur un esprit CFA (Convivialité – Fraternité - Amitié). Il existe deux catégories officielles de compétitions : les séniors (35 et plus) et les vétérans (plus de 45 ans). Toutefois, nous intégrons les juniors (30 à 35 ans) pendant la période de rodage de notre discipline sous certaines	conditions.',
		pr_text_2:
			'Maracana Canada, nom officiel de la Fédération Canadienne de Maracana régit, organise et fait la promotion de ce sport à travers tout le pays. Elle a été créée en juillet 2016 et a pour objectif de dénicher les talents cachés partout au Canada afin	de ramener des trophées sur le plan international.	Cela se fera par des tournées d’information et de sensibilisation suivie de compétitions majeures. Nous vous invitons à manifester votre intérêt pour ce sport en vous inscrivant à nos prochaines séances	de démonstration. Maracana Canada a hâte de vous rencontrer.',
		pt_title: 'NOS PARTENAIRES'
	}
};

function getBrowserLanguage() {
	let browserFullLanguage = window.navigator.userLanguage || window.navigator.language;

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
		// get the classes that contain the text to change
		let textToChange = document.querySelectorAll('.translateText');
		// get the classes that contain the pdf link to change
		let pdfNavLink = document.querySelectorAll('.game-rules-nav-link');

		// get the browser default language
		let browserLanguage = getBrowserLanguage();

		pdfNavLink.forEach(function(link) {
			if (browserLanguage === 'fr') {
				link.setAttribute('href', 'Lois_du_jeu.pdf');
			} else {
				link.setAttribute('href', 'Game_rules.pdf');
			}
		});

		textToChange.forEach(function(text) {
			// check if the language object has a property like the class' key
			if (language[browserLanguage].hasOwnProperty(text.getAttribute('data-key'))) {
				text.innerHTML = language[browserLanguage][text.getAttribute('data-key')];
			}
		});
	},
	false
);

function changeLanguage() {
	// get the classes that contain the text to change
	let textToChange = document.querySelectorAll('.translateText');
	// get the classes that contain the pdf link to change
	let pdfNavLink = document.querySelectorAll('.game-rules-nav-link');

	let buttonLanguage = getButtonLanguage();

	pdfNavLink.forEach(function(link) {
		if (buttonLanguage === 'fr') {
			link.setAttribute('href', 'Lois_du_jeu.pdf');
		} else {
			link.setAttribute('href', 'Game_rules.pdf');
		}
	});

	textToChange.forEach(function(text) {
		// check if the language object has a property like the class' key
		if (language[buttonLanguage].hasOwnProperty(text.getAttribute('data-key'))) {
			text.innerHTML = language[buttonLanguage][text.getAttribute('data-key')];
		}
	});
}
