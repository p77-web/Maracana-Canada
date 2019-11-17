(function() {
	if (typeof NodeList.prototype.forEach === 'function') return false;
	NodeList.prototype.forEach = Array.prototype.forEach;
})();

//  Language translation english and french
var language = {
	en: {
		// Page title
		home_title: 'Home | Maracana Canada',
		about_title: 'About | Maracana Canada',
		rules_title: 'Game rules | Maracana Canada',
		administration_title: 'Administration | Maracana Canada',
		competitions_title: 'Competitions | Maracana Canada',
		clubs_title: 'Clubs | Maracana Canada',
		contact_title: 'Contact | Maracana Canada',
		ch_17_title: 'Championship 2017 | Maracana Canada',
		ch_18_title: 'Championship 2018 | Maracana Canada',
		ch_19_title: 'Championship 2019 | Maracana Canada',
		cup_17_title: 'Cup 2017 | Maracana Canada',
		cup_18_title: 'Cup 2018 | Maracana Canada',
		cup_19_title: 'Cup 2019 | Maracana Canada',
		scorer_title: 'Scorer 2019 | Maracana Canada',
		ci_title: 'Ivory Coast 2018 | Maracana Canada',
		visit_title: 'Visit 2017 | Maracana Canada',
		dons_title: 'Dons | Maracana Canada',
		practice_title: 'Practice | Maracana Canada',
		interview_title: 'Interview | Maracana Canada',
		wc_title: 'International | Maracana Canada',

		// Menu
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
		buttonLanguage: 'Fr',

		// Submenu
		agenda: 'Agenda',
		news: 'News',
		knowledge: 'Knowledge',
		federation: 'Federation',
		council: 'Council',
		contact: 'Contacts',
		form: 'Form',

		// Header & Footer
		official: 'Official website',
		donation: 'Donate',
		pt_title: 'OUR PARTNERS',
		footer: 'Canadian Maracana Federation',

		// Home page
		info: 'Maracana is soccer played with 6 players without a goalkeeper',
		maraCAN: "Mara'CAN 2019",
		maraCAN_sub: 'Conakry, Guinea',
		img_sub: 'The Canadian Delegation',
		acn: 'African Cup of Nations in Conakry',
		acn_date: '23 to 30 September 2019',
		acn_c: 'Guest countries',
		acn_c_ca: 'Canada',
		acn_c_us: 'United States',
		acn_c_fr: 'France',
		acn_c_ch: 'China',
		acn_c_sw: 'Sweden',
		a_title: 'Maracana Canada News',
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

		// Administration page
		commitee: 'Commitee',
		adm_council: 'Board of Directors',
		president: 'President',
		vice_president_1: '1st Vice President in charge of organization and financing',
		vice_president_2: '2nd Vice President in charge of Legal Affairs',
		vice_president_3: '3em Vice President in charge of Competitions',
		vice_president_4: '4th Vice President in charge of Development in Western Canada',
		director_1: 'General Secretary',
		director_2: 'Financial Manager',
		director_2a: 'Treasurer General',
		director_3: 'Director of Communications',
		director_3a: 'Spokesman',
		director_4: 'National Technical Director',

		// Clubs page
		how_to: 'How to find a club?',
		club_message:
			"It is easy to find a maracana club. It is now played in several major cities across Canada. This does not prevent you from forming your own club. As a maracana game is played with six even five player by team, a few friends calls can lead to the formation of a team in your location. We'll list a few contacts below.",
		club_contacts: 'CONTACTS OF RESOURCES IN CLUBS',

		// Contact page
		write_us: 'WRITE US VIA',

		// Carousel & carousel pages
		n_cup_2019: '2019 National Cup Winners',
		n_cup_2019_text: "Ivory Foot Montreal, defender of Peace Team in the semifinals, breaks the White Eagles's dream of double, winner of CAMASM. Final score 1 to 0.",
		ch_w_2019: '2019 Championship Winners',
		ch_w_2019_text:
			'In their 2nd participation the White Eagles dethroned the two-time defending champion CAMASM (Ste-Marthe), they also won the fair play team of the tournament.',
		scorer_2019: '2019 Championship best scorer',
		scorer_2019_nav: 'Top scorer 2019',
		scorer_2019_text:
			'Things always come in threes, they say. Well, he did it. Serge Litié of the MCSH (St-Hyacinthe) wins the 2019 top scorer trophy for the third year in a row.',
		i_c_2018: 'Ivory Coast 2018',
		i_c_2018_text_1: 'Our two selections reach the quarter-finals',
		i_c_2018_text_2:
			"The Mara'CAN Abidjan 2018 was held from 26 to 30 September. The delegation consisted of the senior team and the super seniors team both leaded by NTD Émile Tamakloé.",
		i_c_2018_text_3: 'Simply BRAVO!',
		n_cup_2018: '2018 National Cup Winners',
		n_cup_2018_text:
			'Peace team Maracana was able to take revenge on CAMASM and win the National Cup in Ottawa the July 14th 2018, score 2-1. It is with rage to conquer and revenge in the mind that they have left no respite to their adversaries.',
		ch_w_2018: '2018 Championship Winners',
		ch_w_18_title: 'National Champions 2017 & 2018 - Cup 2017',
		ch_w_18_text:
			'After hovering on the Canadian Maracana in 2017, achieving the double National Championship and National Cup, the Club of Friends of Maracana Ste-Marthe (CAMASM) wins the 2018 championship. They must now have the pressure of the national cup.',
		mali_2017: 'Departure for 2017 Mali Mara’CAN',
		mali_2017_text:
			"On Sunday, October 15, 2017, the Canadian delegation receives support and farewell from the sponsors of Kokodi Transit at Montreal's Pierre Elliott Trudeau International Airport. Team Canada will make an honorable run by finishing semi-finalist.",
		f_p: 'Fairplay to Canada in Mali 2017 tournament',
		f_p_text:
			'Due to a general exemplary attitude, without any warnings during their six games, Canada was awarded the highest distinction of Maracana which is the medal of Friendliness, Fraternity, Friendship (FFF); A very important principle for FIMAA.',
		visit: 'A training center visit in Mali',
		visit_nav: 'Visit 2017',
		visit_text:
			"Taking advantage of a break between two rounds of MARA'CAN 2017, Team Canada visited the young students of the Jean-Marc Guirou Academy in Bamako. Like their predecessors Yaya and Kolo Toure, Gervinho, these youngsters showed great control of the ball.",
		donations: 'Donations to a training center in Burkina Faso',
		donations_nav: 'Donations 2017',
		donations_text:
			"In 2017, our delegation took advantage of its presence at the annual assembly of the International Federation of Maracana Association (FIMAA) in Ouagadougou located in Burkina Faso to offer sporting equipments to children's and teenager's in needs at the RTB.",
		practice: 'Team Canada first practice',
		practice_nav: 'Practice 2016',
		practice_text:
			'On Sunday, October 2nd 2016, athletes get in touch with their coaches and their leaders. A presentation of Maracana Canada and objectives to be achieved followed by a very good demonstration of the talents of the new Canadian maracananian.',
		interview: "President Cissé's interview on RFI",
		interview_nav: 'Interview 2016',
		interview_text:
			'On the occasion of the 2016 CAN of Maracana which took place from September 17 to 18, 2016 in Ouagadougou, the President of the Federation of Maracana Canada granted an interview at the invitation of Annie Gasnier of RFI in his International Radio Foot broadcast. '
	},
	fr: {
		// Page title
		home_title: 'Accueil | Maracana Canada',
		about_title: 'À propos | Maracana Canada',
		rules_title: 'Lois du jeu | Maracana Canada',
		administration_title: 'Administration | Maracana Canada',
		competitions_title: 'Compétitions | Maracana Canada',
		clubs_title: 'Clubs | Maracana Canada',
		contact_title: 'Contact | Maracana Canada',
		ch_17_title: 'Championnat 2017 | Maracana Canada',
		ch_18_title: 'Championnat 2018 | Maracana Canada',
		ch_19_title: 'Championnat 2019 | Maracana Canada',
		cup_17_title: 'Coupe 2017 | Maracana Canada',
		cup_18_title: 'Coupe 2018 | Maracana Canada',
		cup_19_title: 'Coupe 2019 | Maracana Canada',
		scorer_title: 'Buteur 2019 | Maracana Canada',
		ci_title: "Côte d'Ivoire 2018 | Maracana Canada",
		visit_title: 'Visite 2017 | Maracana Canada',
		dons_title: 'Donations | Maracana Canada',
		practice_title: 'Pratique | Maracana Canada',
		interview_title: 'Entrevue | Maracana Canada',
		wc_title: 'Internationales | Maracana Canada',

		// Menu
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
		buttonLanguage: 'En',

		// Submenu
		agenda: 'Agenda',
		news: 'Actualités',
		knowledge: 'Infos',
		federation: 'Fédération',
		council: 'Conseil',
		contact: 'Contacts',
		form: 'Formulaire',

		// Header & Footer
		official: 'Site officiel',
		donation: 'Faites un don',
		pt_title: 'NOS PARTENAIRES',
		footer: 'Fédération Canadienne de Maracana',

		// Home Page
		info: 'Le maracana est du soccer à 6 sans gardien de but',
		maraCAN: "Mara'CAN 2019",
		maraCAN_sub: 'Conakry, Guinée',
		img_sub: 'La Délégation Canadienne',
		acn: "Coupe d'Afrique des nations à Conakry",
		acn_date: '23 au 30 septembre 2019',
		acn_c: 'Pays invités',
		acn_c_ca: 'Le Canada',
		acn_c_us: 'Les États-Unis',
		acn_c_fr: 'La France',
		acn_c_ch: 'La Chine',
		acn_c_sw: 'La Suéde',
		a_title: 'Actualités Maracana Canada',
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

		// Administration page
		commitee: 'Les commissions',
		adm_council: "Conseil d'Administration",
		president: 'Président',
		vice_president_1: "1ère Vice-présidente chargée de l'organisation et du financement",
		vice_president_2: '2em Vice-président chargé des affaires juridiques',
		vice_president_3: '3em Vice-président chargé des compétitions',
		vice_president_4: "4em Vice-président chargé du développement dans l'ouest canadien",
		director_1: 'Secrétaire Général',
		director_2: 'Directrice financière',
		director_2a: 'Trésorière Générale',
		director_3: 'Directeur des communications',
		director_3a: 'Porte-parole',
		director_4: 'Directeur technique national',

		// Clubs page
		how_to: 'Comment trouver un club?',
		club_message:
			"Il est bien facile de trouver un club de maracana où pratiquer ce sport. Il se pratique aujourd'hui dans plusieurs grandes villes du Canada. Cela n'empêche pas de former votre propre club. Le maracana étant une	discipline qui se joue à six contre six ou même à cinq, seulement quelques contacts peuvent mener à la formation d'une équipe dans votre lieu d'habitation. Nous vous listons, tout de même, quelques contacts ci-dessous.",
		club_contacts: 'CONTACTS DE PERSONNES RESSOURCES DANS DES CLUBS',

		// Contact page
		write_us: 'ÉCRIVEZ-NOUS VIA',

		// Carousel & carousel pages
		n_cup_2019: 'Vainqueurs de la Coupe Nationale 2019',
		n_cup_2019_text: 'Ivoire Foot Montréal, tombeur de Peace Team en demi-finale, brise le rêve de doublé de White Eagles, vainqueur de CAMASM. Score final 1 à 0.',
		ch_w_2019: 'Champions Nationaux 2019',
		ch_w_2019_text:
			"Les White Eagles, dès leur deuxième participation, détrônent le double champion en titre CAMASM (Ste-Marthe). C'est par ailleurs l'équipe CFA de ce tournoi.",
		scorer_2019: 'Meilleur buteur du Championnat 2019',
		scorer_2019_nav: 'Meilleur buteur 2019',
		scorer_2019_text:
			"Jamais deux sans trois, dit-on. Eh bien, il l'a fait. Serge Litié du MCSH (St-Hyacinthe) décroche pour la 3è année consécutive, son trophée de meilleur buteur 2019.",
		i_c_2018: "Côte d'Ivoire 2018",
		i_c_2018_text_1: 'Nos deux sélections atteignent les quarts de finale',
		i_c_2018_text_2:
			"La Mara'CAN Abidjan 2018 s'est tenue du 26 au 30 septembre. La délégation était composée de l'équipe des seniors et de celle des super seniors toutes conduites par le DTN Émile Tamakloé.",
		i_c_2018_text_3: 'Tout simplement BRAVO!',
		n_cup_2018: 'Vainqueurs de la Coupe Nationale 2018',
		n_cup_2018_text:
			"Peace Team Maracana a réussi à prendre sa revanche sur le CAMASM en remportant la victoire sur un score de 2 buts à 1 à la coupe nationale du 14 juillet 2018 à Ottawa. C'est avec la rage de vaincre et la revanche dans l'esprit qu'ils n'ont laissé aucun répit à leurs adversaires.",
		ch_w_2018: 'Champions Nationaux 2018',
		ch_w_18_title: 'Champions Nationaux 2017 & 2018 - Coupe 2017',
		ch_w_18_text:
			'Après avoir plané sur le Maracana canadien en 2017, en réalisant le doublé Championnat national et Coupe nationale, Le Club des Amis du Maracana de Ste-Marthe (CAMASM) remporte le championat 2018. Ils doivent maintenant avoir la pression de la coupe nationale.',
		mali_2017: "Départ pour la MARA'CAN MALI 2017",
		mali_2017_text:
			"Le dimanche 15 octobre 2017, la délégation canadienne reçoit le soutien et l'au-revoir des responsables du sponsor Kokodi Transit à l'aéroport international Pierre-Elliott Trudeau de Montréal. Team Canada fera un parcours honorable en terminant demi-finaliste.",
		f_p: 'La medaille du Fair-Play au Canada',
		f_p_text:
			"Grâce à un comportement exemplaire général, sans aucun avertissement lors de leurs six matchs, le Canada s'est mérité la plus haute distinction du Maracana qui est la medaille de la Convivialité - Fraternité - Amitié (CFA), principe très cher à la FIMAA.",
		visit: "Visite d'un centre de formation en Mali",
		visit_nav: 'Visite 2017',
		visit_text:
			"Profitant de la pause d'entre deux tours de la MARA'CAN 2017, Team Canada a rendu visite aux jeunes élèves de l'Academie Jean-Marc Guirou de Bamako. A l'image de leurs prédecesseurs Yaya et Kolo Touré, Gervinho, ces jeunes ont démontré une grande maîtrise du ballon rond.",
		donations: 'Remise de dons au Burkina Faso',
		donations_nav: 'Dons 2017',
		donations_text:
			"Notre délégation a profité de sa présence à l'assemblée annuelle de la Fédération Internationale de Maracana Association(FIMAA) à Ouagadougou, au Burkina Faso, en 2017, pour offrir des équipements sportifs à des enfants et à des jeunes défavorisés à la RTB.",
		practice: 'Première pratique de Team Canada',
		practice_nav: 'Pratique 2016',
		practice_text:
			"Le dimanche 2 octobre 2016, les athlètes prennent contact avec leurs encadreurs et leurs dirigeants. Une présentation de Maracana Canada et des objectifs à atteindre suivis d'une très bonne démonstrations des talents des nouveaux maracanaiers canadiens.",
		interview: 'Entrevue du président Cissé sur RFI',
		interview_nav: 'Entrevue 2016',
		interview_text:
			"A l'occasion de la CAN 2016 de Maracana qui s'est déroulée du 17 au 18 septembre 2016 à Ouagadougou, le Président de la Féderation de Maracana Canada a accordé une entrevue à l'invitation de Annie Gasnier de RFI dans son émission Radio Foot Internationale."
	}
};

function getBrowserLanguage() {
	let browserFullLanguage = window.navigator.userLanguage || window.navigator.language;

	let browserLanguage = browserFullLanguage.split('-');
	if (browserLanguage[0] !== 'en' && browserLanguage[0] !== 'fr') {
		browserLanguage[0] = 'en';
	}

	let language = '';

	// verify if the localStorage has any value stored
	if (localStorage['maracana-canada_language']) {
		language = localStorage.getItem('maracana-canada_language');
	} else {
		localStorage.setItem('maracana-canada_language', browserLanguage[0]);
		language = localStorage.getItem('maracana-canada_language');
	}

	return language;
}

function getButtonLanguage() {
	let buttonLanguage = document.querySelector('.translate');

	// store user's chosen language
	localStorage.setItem('maracana-canada_language', buttonLanguage.textContent.trim().toLowerCase());
	let language = localStorage.getItem('maracana-canada_language');

	return language;
}

// print the text by browser language
window.addEventListener(
	'DOMContentLoaded',
	function() {
		// get the classes that contain the text to change
		let textToChange = document.querySelectorAll('.translateText');
		// get the classes that contain the pdf link to change
		let pdfNavLink = document.querySelectorAll('.game-rules-nav-link');

		// get the form placeholders
		let name = document.getElementById('nom');
		let courriel = document.getElementById('courriel');
		let mess = document.getElementById('mess');
		let sendButton = document.getElementById('form__button');

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

		if (name || courriel || mess) {
			if (browserLanguage === 'fr') {
				name.placeholder = 'Votre nom';
				courriel.placeholder = 'Votre courriel';
				mess.placeholder = 'Votre message';
				sendButton.value = 'Envoyer';
			} else {
				name.placeholder = 'Your name';
				courriel.placeholder = 'Your email';
				mess.placeholder = 'Your message';
				sendButton.value = 'Send';
			}
		}
	},
	false
);

function changeLanguage() {
	// get the classes that contain the text to change
	let textToChange = document.querySelectorAll('.translateText');
	// get the classes that contain the pdf link to change
	let pdfNavLink = document.querySelectorAll('.game-rules-nav-link');

	// get the form placeholders
	let name = document.getElementById('nom');
	let courriel = document.getElementById('courriel');
	let mess = document.getElementById('mess');
	let sendButton = document.getElementById('form__button');

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
	if (name || courriel || mess) {
		if (buttonLanguage === 'fr') {
			name.placeholder = 'Votre nom';
			courriel.placeholder = 'Votre courriel';
			mess.placeholder = 'Votre message';
			sendButton.value = 'Envoyer';
		} else {
			name.placeholder = 'Your name';
			courriel.placeholder = 'Your email';
			mess.placeholder = 'Your message';
			sendButton.value = 'Send';
		}
	}
}
