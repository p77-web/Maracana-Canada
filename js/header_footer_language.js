(function () {
  if (typeof NodeList.prototype.forEach === "function") return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

//  Language translation english and french
var language = {
  en: {
    // Page title
    home_title: "Home | Maracana Canada",
    about_title: "About | Maracana Canada",
    rules_title: "Game rules | Maracana Canada",
    administration_title: "Administration | Maracana Canada",
    competitions_title: "Competitions | Maracana Canada",
    clubs_title: "Clubs | Maracana Canada",
    contact_title: "Contact | Maracana Canada",
    ch_17_title: "Championship 2017 | Maracana Canada",
    ch_18_title: "Championship 2018 | Maracana Canada",
    ch_19_title: "Championship 2019 | Maracana Canada",
    ch_20_title: "Championship 2020 | Maracana Canada",
    cup_17_title: "Cup 2017 | Maracana Canada",
    cup_18_title: "Cup 2018 | Maracana Canada",
    cup_19_title: "Cup 2019 | Maracana Canada",
    scorer_title: "Scorer 2019 | Maracana Canada",
    ci_title: "Ivory Coast 2018 | Maracana Canada",
    visit_title: "Visit 2017 | Maracana Canada",
    dons_title: "Dons | Maracana Canada",
    practice_title: "Practice | Maracana Canada",
    interview_title: "Interview | Maracana Canada",
    wc_title: "International | Maracana Canada",

    // Menu
    home: "Home",
    about: "About Us",
    rules: "Rules",
    laws: "Game laws",
    infosheet: "Infosheets",
    administration: "Administration",
    competitions: "Competitions",
    results: "International Competitions",
    teams: "Teams",
    national: "National",
    championship: "Championships",
    championship17: "Championship 2017",
    championship18: "Championship 2018",
    championship19: "Championship 2019",
    cup: "Cups",
    cup17: "Cup 2017",
    cup18: "Cup 2018",
    cup19: "Cup 2019",
    tournament: "Clubs tournament",
    international: "International",
    world: "World Cups",
    clubs: "Clubs",
    contact: "Contact",
    buttonLanguage: "Fr",

    // Submenu
    agenda: "Agenda",
    news: "News",
    knowledge: "Knowledge",
    federation: "Federation",
    council: "Council",
    contact: "Contacts",
    form: "Form",

    // Header & Footer
    official: "Official website",
    donation: "Donate",
    pt_title: "OUR PARTNERS",
    footer: "Canadian Maracana Federation",

    // Home page
    info: "Maracana is soccer played with 6 players without a goalkeeper",
    // maraCAN: 'National Championship 2020',
    // maraCAN_sub: 'Saint-Hyacinthe - April 18th',
    // img_sub: 'In the presence of Bleu Charlemagne, the President of FIMAA',
    maraCAN: "COVID-19",
    // maraCAN_sub: 'Saint-Hyacinthe - April 18th',
    img_sub:
      "Suspension of all our national and international competitions until further notice",
    world_cup: "World Cup",
    world_cup_date: "Montreal 2020",
    world_cup_c: "Qualified countries",
    world_cup_ca: "Canada",
    world_cup_us: "United States",
    world_cup_fr: "France",
    world_cup_ch: "China",
    world_cup_ci: "Ivory Coast",
    world_cup_gn: "Guinea",
    world_cup_tg: "Togo",
    world_cup_bf: "Burkina Faso",
    a_title: "Maracana Canada News",
    a_subtitle_1: "Preparations for Mara'CAN 2019",
    a_text_1:
      "Mission, experts of the FIMAA, prospection of competition sites and accommodation in Conakry.",
    a_subtitle_2: "Visit of the FIMAA VP in charge of competitions",
    a_text_2:
      "Coming to represent the president of the FIMAA at the Canadian championship April 27, 2019, Mr. Maiguizo visited the pioneering team of Maracana in Canada, Ivory Foot Montreal.",
    pr_title: "What you need to know",
    pr_text_1:
      "Maracana is a soccer played six players without a goalkeeper, on a handball field. With specific rules, each game is played over two periods of 10 minutes. It is very technical and is based on a Conviviality - Fraternity - Friendship spirit. There are two official categories of competitions: seniors (35 and over) and veterans (over 45). However, we integrate the juniors (30 to 35 years) during the break-in period of our discipline under certain conditions.",
    pr_text_2:
      "Maracana Canada, the official name of the Canadian Maracana Federation, regulates, organizes and promotes this sport throughout the country. It was created in July 2016 and aims to find hidden talents across Canada to bring trophies back to the world. This will be done through information and awareness tours followed by major competitions. We invite you to show your interest in this sport by registering for our next demonstration sessions. Maracana Canada is looking forward to meeting you.",

    // Administration page
    commitee: "Commitee",
    adm_council: "Board of Directors",
    president: "President",
    vice_president_1:
      "1st Vice President in charge of organization and financing",
    vice_president_2: "2nd Vice President in charge of Legal Affairs",
    vice_president_3: "3em Vice President in charge of Competitions",
    vice_president_4:
      "4th Vice President in charge of Development in Western Canada",
    director_1: "General Secretary",
    director_2: "Financial Manager",
    director_2a: "Treasurer General",
    director_3: "Director of Communications",
    director_3a: "Spokesman",
    director_4: "National Technical Director",

    // Clubs page
    how_to: "How to find a club?",
    club_message:
      "It is easy to find a maracana club. It is now played in several major cities across Canada. This does not prevent you from forming your own club. As a maracana game is played with six even five player by team, a few friends calls can lead to the formation of a team in your location. We'll list a few contacts below.",
    club_contacts: "CONTACTS OF RESOURCES IN CLUBS",

    // Contact page
    write_us: "WRITE US VIA",

    // Carousel & carousel pages
    n_cup_2019: "2019 National Cup Winners",
    n_cup_2019_text:
      "Ivory Foot Montreal, defender of Peace Team in the semifinals, breaks the White Eagles's dream of double, winner of CAMASM. Final score 1 to 0.",
    ch_w_2019: "2019 Championship Winners",
    ch_w_2019_text:
      "In their 2nd participation the White Eagles dethroned the two-time defending champion CAMASM (Ste-Marthe), they also won the fair play team of the tournament.",
    scorer_2019: "2019 Championship best scorer",
    scorer_2019_nav: "Top scorer 2019",
    scorer_2019_text:
      "Things always come in threes, they say. Well, he did it. Serge Litié of the MCSH (St-Hyacinthe) wins the 2019 top scorer trophy for the third year in a row.",
    i_c_2018: "Ivory Coast 2018",
    i_c_2018_text_1: "Our two selections reach the quarter-finals",
    i_c_2018_text_2:
      "The Mara'CAN Abidjan 2018 was held from 26 to 30 September. The delegation consisted of the senior team and the super seniors team both leaded by NTD Émile Tamakloé.",
    i_c_2018_text_3: "Simply BRAVO!",
    n_cup_2018: "2018 National Cup Winners",
    n_cup_2018_text:
      "Peace team Maracana was able to take revenge on CAMASM and win the National Cup in Ottawa the July 14th 2018, score 2-1. It is with rage to conquer and revenge in the mind that they have left no respite to their adversaries.",
    ch_w_2018: "2018 Championship Winners",
    ch_w_18_title: "National Champions 2017 & 2018 - Cup 2017",
    ch_w_18_text:
      "After hovering on the Canadian Maracana in 2017, achieving the double National Championship and National Cup, the Club of Friends of Maracana Ste-Marthe (CAMASM) wins the 2018 championship. They must now have the pressure of the national cup.",
    mali_2017: "Departure for 2017 Mali Mara’CAN",
    mali_2017_text:
      "On Sunday, October 15, 2017, the Canadian delegation receives support and farewell from the sponsors of Kokodi Transit at Montreal's Pierre Elliott Trudeau International Airport. Team Canada will make an honorable run by finishing semi-finalist.",
    f_p: "Fairplay to Canada in Mali 2017 tournament",
    f_p_text:
      "Due to a general exemplary attitude, without any warnings during their six games, Canada was awarded the highest distinction of Maracana which is the medal of Friendliness, Fraternity, Friendship (FFF); A very important principle for FIMAA.",
    visit: "A training center visit in Mali",
    visit_nav: "Visit 2017",
    visit_text:
      "Taking advantage of a break between two rounds of MARA'CAN 2017, Team Canada visited the young students of the Jean-Marc Guirou Academy in Bamako. Like their predecessors Yaya and Kolo Toure, Gervinho, these youngsters showed great control of the ball.",
    donations: "Donations to a training center in Burkina Faso",
    donations_nav: "Donations 2017",
    donations_text:
      "In 2017, our delegation took advantage of its presence at the annual assembly of the International Federation of Maracana Association (FIMAA) in Ouagadougou located in Burkina Faso to offer sporting equipments to children's and teenager's in needs at the RTB.",
    practice: "Team Canada first practice",
    practice_nav: "Practice 2016",
    practice_text:
      "On Sunday, October 2nd 2016, athletes get in touch with their coaches and their leaders. A presentation of Maracana Canada and objectives to be achieved followed by a very good demonstration of the talents of the new Canadian maracananian.",
    interview: "President Cissé's interview on RFI",
    interview_nav: "Interview 2016",
    interview_text:
      "On the occasion of the 2016 CAN of Maracana which took place from September 17 to 18, 2016 in Ouagadougou, the President of the Federation of Maracana Canada granted an interview at the invitation of Annie Gasnier of RFI in his International Radio Foot broadcast. ",

    // Competitions pages
    intro_title: "The competitions",
    intro_text:
      "Maracana Canada is in charge of organizing provincial, territorial and federal Maracana competitions. Since 2017, it organizes annually a national championship followed by a national cup. The championship is played in a single pool where all the clubs play each other. Depending on the affiliations, these competitions take place in one of the major cities of the different provinces of Canada. Currently in the break-in period, the clubs consist of players aged 30 and over with the use of two players over 24 years old.",
    intro_subtitle: "New clubs",
    intro_subtext:
      "Any club wishing to participate in our competitions, can register at any time of the year with the Federation.",
    ranking: "Matches results and ranking",
    ranking_subtitle: "Ranking",
    fair_play: "Fair play team",
    results_tab: "Matches results",
    tab_scores: "Goals",
    lice: "The teams in the running",
    pool_a: "Ranking - POOL A",
    pool_a_results: "Matches results - POOL A",
    pool_b: "Ranking - POOL B",
    pool_b_results: "Matches results - POOL B",
    final: "FINAL",
    teams_subtitle: "The teams",

    // 2017 championship page
    title_2017: "The 2017 National Championship",
    description_2017:
      "It was in Antoine-de-Saint-Exupéry's gymnasium in Montreal that nine teams competed on May 13, 2017 in a single pool, one-way. In 36 games, the attacks hit the net 83 times.",
    attack_2017: "Best attack (20 goals)",
    defense_2017: "Best defense (3 goals)",
    striker_2017: "Top scorer (6 goals)",

    // 2018 championship page
    title_2018: "The 2018 National Championship",
    description_2018:
      "Maracana Canada, for its second edition, organized the national championship in the Cégep du Vieux Montréal gymnasium on May 5th for the first Maracana night, starting at 6PM, with two new clubs, the White Eagles and Peace Team Maracana.",
    description_1_2018:
      "As in the first edition, nine teams have fought hard to succeed CAMASM, for some, and to retain its title for the last one. The eight teams must take their patience as the CAMASM keeps its trophy in front of the brand new maracana club, The White Eagles. In 36 games, one-way, the attacks moved the net 87 times, 4 goals more than last season.",
    attack_2018: "Best attack (19 goals)",
    defense_2018: "Best defense (1 goal)",
    striker_2018: "Top scorer (11 goals)",

    // 2019 championship page
    title_2019: "The 2019 National Championship",
    description_2019:
      "The third edition of the national championship was held on April 27 in the gymnasium of the Cégep du Vieux Montréal for the second Maracana night, which began at 6PM in the presence of the new Ambassador of Ivory Coast to Canada, HE Mr. Filbert Fagnidi and Mr. Saadou Maiguizo, Vice President of the FIMAA responsible for competitions, representing the president of the said institution, Mr. Charlemagne Bleu.",
    picture_2019:
      "The White Eagles, after their second participation, dethroned the two-times champion CAMASM (Ste-Marthe)",
    description_1_2019:
      "Never two without three, it is customary to say. Unfortunately, the CAMASM could not achieve a 3rd consecutive consecration. Blame the White Eagles who learned their lessons only a year ago. From the 10 competing clubs, they have been the ones who have offered the many audience present what are the values ​​and spirit of Maracana. Hunanimity, their beautiful game and their spirit of fairplay were recognized by the participants. In addition to the title of champion 2019, they won the most important trophy of Maracana, that of the spirit CFA (Conviviality - Fraternity - Friendship).",
    attack_2019: "Best attack (21 goals)",
    defense_2019: "Best defense (4 goal)",
    striker_2019: "Top scorer (9 goals)",

    // 2020 championship page
    title_2020: "The 2020 National Championship",
    description_2020:
      "The third edition of the national championship was held on April 27 in the gymnasium of the Cégep du Vieux Montréal for the second Maracana night, which began at 6PM in the presence of the new Ambassador of Ivory Coast to Canada, HE Mr. Filbert Fagnidi and Mr. Saadou Maiguizo, Vice President of the FIMAA responsible for competitions, representing the president of the said institution, Mr. Charlemagne Bleu.",
    picture_2020:
      "The White Eagles, after their second participation, dethroned the two-times champion CAMASM (Ste-Marthe)",
    description_1_2020:
      "Never two without three, it is customary to say. Unfortunately, the CAMASM could not achieve a 3rd consecutive consecration. Blame the White Eagles who learned their lessons only a year ago. From the 10 competing clubs, they have been the ones who have offered the many audience present what are the values ​​and spirit of Maracana. Hunanimity, their beautiful game and their spirit of fairplay were recognized by the participants. In addition to the title of champion 2019, they won the most important trophy of Maracana, that of the spirit CFA (Conviviality - Fraternity - Friendship).",
    attack_2020: "Best attack (21 goals)",
    defense_2020: "Best defense (4 goal)",
    striker_2020: "Top scorer (9 goals)",
    info2020:
      "For further information contact Assane Diawandou at 438 930-6801.",
    date2020: "April 18th at 4PM",

    // 2017 cup page
    title_cup_2017: "The 2017 national cup",
    description_cup_2017:
      "Le Club des Amis du Maracana de Ste-Marthe (CAMASM) was opposed, in the final, to the new team affiliated Peace Team Maracana of Montreal. Duel won on penalties by Ste-Marthe after a score of two goals everywhere in regular time, achieving the double of the season.",
    picture_cup_2017:
      "2017 finalists - CAMASM and Peace Team Maracana of Montreal",
    description_cup_1_2017:
      "In the end, 10 teams from Quebec and Ontario competed in two pools of 5 on July 8, 2017 at the Toronto Pan Am Sports Center gymnasium. The first of each group was directly qualified for the semi-finals, while the second and third were to fight in the quarter-finals to join them. The heads of the pools were Ste-Marthe and Ivoire Foot Montreal.",
    striker_cup_2017: "Top scorer (5 goals)",
    final_2017:
      "Peace Team Montreal and CAMASM, winners on FC Multi C and Ivory Foot Montreal, respectively, played in a very resounding final, each losing one lead in turn to finish on a scorched score of 2 goals everywhere. The cold blood and the experience of the CAMASM helped them to win over the newcomer on penalties.",

    // 2018 cup page
    title_cup_2018: "The 2018 national cup",
    description_cup_2018:
      "Peace Team Maracana of Montreal takes revenge on the Club des Amis du Maracana de Ste-Marthe (CAMASM) who could not keep his trophy thus breaking their dream of achieving the double for a second consecutive year.",
    picture_cup_2018: "The winning team 2018 - Peace Team Maracana of Montreal",
    description_cup_1_2018:
      "It was in the gymnasium of the Cité collégiale in Ottawa, the federal capital, that six teams from Quebec and Ontario fought back and forth in two pools of three on July 14, 2018. first two of each group were directly qualified for the semi-finals. The heads of the pools were Ste-Marthe and Ivoire Foot Montreal.",
    striker_cup_2018: "Top scorers (4 goals)",
    final_2018:
      "After being neutralized, twice on a score of one goal everywhere, Peace Team Montreal and CAMASM, dominators of Ivory Foot Montreal (5-4) and Ottawa (2-0) respectively, were again, found in the final for a second consecutive year. It smelled of revenge for the first mentioned and confirmation for the trophy holder. A hard-fought final that ends with the advantage of Peace Team on a score of 2 goals to 1.",

    // 2019 cup page
    title_cup_2019: "The 2019 national cup",
    description_cup_2019:
      "Under a punishing sun, Ovila-Légaré Park, the challenge was on Saturday, July 20, 2019. The teams of the top 5 of the last championship were in contention. They were accompanied by the little puppy named Volcan FC.",
    picture_cup_2019: "The winning team 2019 - Ivory Foot Montreal",
    description_cup_1_2019:
      "The questions were many. Who from White Eagles or Peace Team would succeed in achieving the double of the season, for the first or to keep his trophy, for the last? Or, would the CAMASM (Ste-Marthe) be able to take back his trophy lost last year or Ivory Foot Montreal where it is rather the Maracana Club of St-Hyacinthe who managed to raise his first national trophy?",
    attack_cup_2019: "Best attack (7 goals)",
    defense_cup_2019: "Best defense (1 goal)",
    striker_cup_2019: "Top scorer (4 goals)",
    final_2019:
      "Ivory Foot Montreal, defender of Peace Team in the semifinal, breaks the dream of doubled White Eagles, winner of CAMASM. Final score 1 to 0.",

    // international competitions page
    title_ic: "Prize list",
    description_ic:
      "The Canadian Maracana Federation being affiliated with the International Federation of MAracana Association (FIMAA) since its creation in 2016, its national teams have been invited every year since 2017 to the various Maracana Nations Cups of African Nations called Mara'CAN.",
    ic_2019: "Guinea 2019",
    picture_ic_2019:
      "The Canadians finished at the bottom of the podium by losing the small final against Benin on the score of 2 goals to 1, but again with the Fair Play medal in their pocket",
    ic_2018: "Ivory Coast 2018",
    picture_ic_2018:
      "Seniors and super seniors (aged 45 and over) advance to the quarter-finals",
    ic_2017: "Mali 2017",
    picture_ic_2017:
      "Seniors (35 years old and over) enter the semifinals in addition to being the fair play team",
  },
  fr: {
    // Page title
    home_title: "Accueil | Maracana Canada",
    about_title: "À propos | Maracana Canada",
    rules_title: "Lois du jeu | Maracana Canada",
    administration_title: "Administration | Maracana Canada",
    competitions_title: "Compétitions | Maracana Canada",
    clubs_title: "Clubs | Maracana Canada",
    contact_title: "Contact | Maracana Canada",
    ch_17_title: "Championnat 2017 | Maracana Canada",
    ch_18_title: "Championnat 2018 | Maracana Canada",
    ch_19_title: "Championnat 2019 | Maracana Canada",
    ch_20_title: "Championnat 2020 | Maracana Canada",
    cup_17_title: "Coupe 2017 | Maracana Canada",
    cup_18_title: "Coupe 2018 | Maracana Canada",
    cup_19_title: "Coupe 2019 | Maracana Canada",
    scorer_title: "Buteur 2019 | Maracana Canada",
    ci_title: "Côte d'Ivoire 2018 | Maracana Canada",
    visit_title: "Visite 2017 | Maracana Canada",
    dons_title: "Donations | Maracana Canada",
    practice_title: "Pratique | Maracana Canada",
    interview_title: "Entrevue | Maracana Canada",
    wc_title: "Internationales | Maracana Canada",

    // Menu
    home: "Accueil",
    about: "À propos",
    rules: "Règles",
    laws: "Lois du jeu",
    infosheet: "Capsules",
    administration: "Administration",
    competitions: "Compétitions",
    results: "Compétitions Internationales",
    teams: "Équipes",
    national: "Nationales",
    championship: "Championnats",
    championship17: "Championnat 2017",
    championship18: "Championnat 2018",
    championship19: "Championnat 2019",
    cup: "Coupes",
    cup17: "Coupe 2017",
    cup18: "Coupe 2018",
    cup19: "Coupe 2019",
    tournament: "Tournois des clubs",
    international: "Internationales",
    world: "Mondiales",
    clubs: "Clubs",
    contact: "Contact",
    buttonLanguage: "En",

    // Submenu
    agenda: "Agenda",
    news: "Actualités",
    knowledge: "Infos",
    federation: "Fédération",
    council: "Conseil",
    contact: "Contacts",
    form: "Formulaire",

    // Header & Footer
    official: "Site officiel",
    donation: "Faites un don",
    pt_title: "NOS PARTENAIRES",
    footer: "Fédération Canadienne de Maracana",

    // Home Page
    info: "Le maracana est du soccer à 6 sans gardien de but",
    // maraCAN: 'Championnat National 2020',
    // maraCAN_sub: 'Saint-Hyacinthe - 18 avril',
    // img_sub: 'En présence du Président de la FIMAA, Bleu Charlemagne',
    maraCAN: "COVID-19",
    // maraCAN_sub: 'Saint-Hyacinthe - 18 avril',
    img_sub:
      "Suspension de toutes nos compétitions nationales et internationales jusqu'à nouvel ordre",
    world_cup: "Coupe du monde",
    world_cup_date: "Montréal 2020",
    world_cup_c: "Pays qualifiés",
    world_cup_ca: "Le Canada",
    world_cup_us: "Les États-Unis",
    world_cup_fr: "La France",
    world_cup_ch: "La Chine",
    world_cup_ci: "La Côte d'Ivoire",
    world_cup_gn: "La Guinée",
    world_cup_tg: "Le Togo",
    world_cup_bf: "Le Burkina Faso",
    a_title: "Actualités Maracana Canada",
    a_subtitle_1: "Préparatifs de la Mara'CAN 2019",
    a_text_1:
      "Mission, des experts de la FIMAA, de prospection des sites de compétitions et d'hébergement à Conakry.",
    a_subtitle_2: "Visite du VP de la FIMAA en charge des compétitions",
    a_text_2:
      "Venu représenter le président de la FIMAA lors du championnat canadien du 27 avril 2019, Monsieur Maiguizo a rendu visite à l'équipe pionnière du Maracana au Canada, Ivoire Foot Montréal.",
    pr_title: "Ce qu'il faut savoir",
    pr_text_1:
      "Le maracana est du soccer joué à six joueurs sans gardien de but, sur un terrain de handball. Il a ses règles spécifiques et chaque match se joue sur deux périodes de 10 minutes. Il est très technique et se base sur un esprit CFA (Convivialité – Fraternité - Amitié). Il existe deux catégories officielles de compétitions : les séniors (35 et plus) et les vétérans (plus de 45 ans). Toutefois, nous intégrons les juniors (30 à 35 ans) pendant la période de rodage de notre discipline sous certaines	conditions.",
    pr_text_2:
      "Maracana Canada, nom officiel de la Fédération Canadienne de Maracana régit, organise et fait la promotion de ce sport à travers tout le pays. Elle a été créée en juillet 2016 et a pour objectif de dénicher les talents cachés partout au Canada afin	de ramener des trophées sur le plan international.	Cela se fera par des tournées d’information et de sensibilisation suivie de compétitions majeures. Nous vous invitons à manifester votre intérêt pour ce sport en vous inscrivant à nos prochaines séances	de démonstration. Maracana Canada a hâte de vous rencontrer.",

    // Administration page
    commitee: "Les commissions",
    adm_council: "Conseil d'Administration",
    president: "Président",
    vice_president_1:
      "1ère Vice-présidente chargée de l'organisation et du financement",
    vice_president_2: "2em Vice-président chargé des affaires juridiques",
    vice_president_3: "3em Vice-président chargé des compétitions",
    vice_president_4:
      "4em Vice-président chargé du développement dans l'ouest canadien",
    director_1: "Secrétaire Général",
    director_2: "Directrice financière",
    director_2a: "Trésorière Générale",
    director_3: "Directeur des communications",
    director_3a: "Porte-parole",
    director_4: "Directeur technique national",

    // Clubs page
    how_to: "Comment trouver un club?",
    club_message:
      "Il est bien facile de trouver un club de maracana où pratiquer ce sport. Il se pratique aujourd'hui dans plusieurs grandes villes du Canada. Cela n'empêche pas de former votre propre club. Le maracana étant une	discipline qui se joue à six contre six ou même à cinq, seulement quelques contacts peuvent mener à la formation d'une équipe dans votre lieu d'habitation. Nous vous listons, tout de même, quelques contacts ci-dessous.",
    club_contacts: "CONTACTS DE PERSONNES RESSOURCES DANS DES CLUBS",

    // Contact page
    write_us: "ÉCRIVEZ-NOUS VIA",

    // Carousel & carousel pages
    n_cup_2019: "Vainqueurs de la Coupe Nationale 2019",
    n_cup_2019_text:
      "Ivoire Foot Montréal, tombeur de Peace Team en demi-finale, brise le rêve de doublé de White Eagles, vainqueur de CAMASM. Score final 1 à 0.",
    ch_w_2019: "Champions Nationaux 2019",
    ch_w_2019_text:
      "Les White Eagles, dès leur deuxième participation, détrônent le double champion en titre CAMASM (Ste-Marthe). C'est par ailleurs l'équipe CFA de ce tournoi.",
    scorer_2019: "Meilleur buteur du Championnat 2019",
    scorer_2019_nav: "Meilleur buteur 2019",
    scorer_2019_text:
      "Jamais deux sans trois, dit-on. Eh bien, il l'a fait. Serge Litié du MCSH (St-Hyacinthe) décroche pour la 3è année consécutive, son trophée de meilleur buteur 2019.",
    i_c_2018: "Côte d'Ivoire 2018",
    i_c_2018_text_1: "Nos deux sélections atteignent les quarts de finale",
    i_c_2018_text_2:
      "La Mara'CAN Abidjan 2018 s'est tenue du 26 au 30 septembre. La délégation était composée de l'équipe des seniors et de celle des super seniors toutes conduites par le DTN Émile Tamakloé.",
    i_c_2018_text_3: "Tout simplement BRAVO!",
    n_cup_2018: "Vainqueurs de la Coupe Nationale 2018",
    n_cup_2018_text:
      "Peace Team Maracana a réussi à prendre sa revanche sur le CAMASM en remportant la victoire sur un score de 2 buts à 1 à la coupe nationale du 14 juillet 2018 à Ottawa. C'est avec la rage de vaincre et la revanche dans l'esprit qu'ils n'ont laissé aucun répit à leurs adversaires.",
    ch_w_2018: "Champions Nationaux 2018",
    ch_w_18_title: "Champions Nationaux 2017 & 2018 - Coupe 2017",
    ch_w_18_text:
      "Après avoir plané sur le Maracana canadien en 2017, en réalisant le doublé Championnat national et Coupe nationale, Le Club des Amis du Maracana de Ste-Marthe (CAMASM) remporte le championat 2018. Ils doivent maintenant avoir la pression de la coupe nationale.",
    mali_2017: "Départ pour la MARA'CAN MALI 2017",
    mali_2017_text:
      "Le dimanche 15 octobre 2017, la délégation canadienne reçoit le soutien et l'au-revoir des responsables du sponsor Kokodi Transit à l'aéroport international Pierre-Elliott Trudeau de Montréal. Team Canada fera un parcours honorable en terminant demi-finaliste.",
    f_p: "La médaille du Fair-Play au Canada",
    f_p_text:
      "Grâce à un comportement exemplaire général, sans aucun avertissement lors de leurs six matchs, le Canada s'est mérité la plus haute distinction du Maracana qui est la medaille de la Convivialité - Fraternité - Amitié (CFA), principe très cher à la FIMAA.",
    visit: "Visite d'un centre de formation en Mali",
    visit_nav: "Visite 2017",
    visit_text:
      "Profitant de la pause d'entre deux tours de la MARA'CAN 2017, Team Canada a rendu visite aux jeunes élèves de l'Academie Jean-Marc Guirou de Bamako. A l'image de leurs prédecesseurs Yaya et Kolo Touré, Gervinho, ces jeunes ont démontré une grande maîtrise du ballon rond.",
    donations: "Remise de dons au Burkina Faso",
    donations_nav: "Dons 2017",
    donations_text:
      "Notre délégation a profité de sa présence à l'assemblée annuelle de la Fédération Internationale de Maracana Association(FIMAA) à Ouagadougou, au Burkina Faso, en 2017, pour offrir des équipements sportifs à des enfants et à des jeunes défavorisés à la RTB.",
    practice: "Première pratique de Team Canada",
    practice_nav: "Pratique 2016",
    practice_text:
      "Le dimanche 2 octobre 2016, les athlètes prennent contact avec leurs encadreurs et leurs dirigeants. Une présentation de Maracana Canada et des objectifs à atteindre suivis d'une très bonne démonstrations des talents des nouveaux maracanaiers canadiens.",
    interview: "Entrevue du président Cissé sur RFI",
    interview_nav: "Entrevue 2016",
    interview_text:
      "A l'occasion de la CAN 2016 de Maracana qui s'est déroulée du 17 au 18 septembre 2016 à Ouagadougou, le Président de la Féderation de Maracana Canada a accordé une entrevue à l'invitation de Annie Gasnier de RFI dans son émission Radio Foot Internationale.",

    // Competitions pages
    intro_title: "Les Compétitions",
    intro_text:
      "Maracana Canada est en charge d’organiser les compétitions provinciales, territoriales et fédérales de Maracana. Depuis 2017, elle organise annuellement un championnat national suivi d'une coupe nationale. Le championnat se joue en une poule unique où tous les clubs se croisent. En fonction des affiliations, ces compétitions se déroulent dans une des grandes villes des différentes provinces du Canada. Actuellement en période de rodage, les clubs sont constitués de joueurs de 30 ans et plus avec l'utilisation de deux joueurs de plus de 24 ans.",
    intro_subtitle: "Nouveaux clubs",
    intro_subtext:
      "Tout club désireux de participer à nos compétitions, peut s'inscrire à tout moment de l'année auprès de la Fédération.",
    ranking: "Résultats des rencontres et classement",
    ranking_subtitle: "Classement",
    fair_play: "Équipe fair-play",
    results_tab: "Résultats des rencontres",
    tab_scores: "Buts",
    lice: "Les équipes en lice",
    pool_a: "Classement - POULE A",
    pool_a_results: "Résultats des rencontres - POULE A",
    pool_b: "Classement - POULE B",
    pool_b_results: "Résultats des rencontres - POULE B",
    final: "FINALE",
    teams_subtitle: "Les équipes",

    // 2017 championship page
    title_2017: "Le championnat national 2017",
    description_2017:
      "C'est dans le gymnase de l'école Antoine-de-Saint-Exupéry à Montréal que neuf équipes ont compéti le 13 mai 2017 en une poule unique, en aller simple. En 36 confrontations, les attaques ont touché le filet 83 fois.",
    attack_2017: "Meilleure attaque (20 buts)",
    defense_2017: "Meilleure défense (3 buts)",
    striker_2017: "Meilleur buteur (6 buts)",

    // 2018 championship page
    title_2018: "Le championnat national 2018",
    description_2018:
      "Maracana Canada, pour sa deuxième édition, a organisé le championnat national dans le gymnase du Cégep du Vieux Montréal le 5 mai pour une première nuit du maracana dès 18H avec deux nouveaux clubs que sont les White Eagles et Peace Team Maracana.",
    description_1_2018:
      "Comme lors de la première édition, neuf équipes ont chaudement lutté pour succéder au CAMASM, pour les unes, et pour conserver son titre pour la dernière citée. Les huit équipes doivent prendre leur mal en patience puisque le CAMASM conserve son trophée devant le tout nouveau club de maracana, The White Eagles. En 36 confrontations, en aller simple, les attaques ont remué le filet 87 fois, 4 buts de plus que la saison dernière.",
    attack_2018: "Meilleure attaque (19 buts)",
    defense_2018: "Meilleure défense (1 but)",
    striker_2018: "Meilleur buteur (11 buts)",

    // 2019 championship page
    title_2019: "Le championnat national 2019",
    description_2019:
      "La troisième édition du championnat national a été organisée le 27 avril dans le gymnase du Cégep du vieux Montréal pour la deuxième nuit du maracana qui a débuté à 18H en présence du nouvel Ambassadeur de Côte d'Ivoire au Canada, SEM Filbert Fagnidi et de Monsieur Saadou Maiguizo, vice-président de la FIMAA chargé des compétitions, représentant le président de la dite institution, Monsieur Charlemagne Bleu.",
    picture_2019:
      "Les White Eagles, dès leur deuxième participation, détrônent le double champion en titre CAMASM (Ste-Marthe)",
    description_1_2019:
      "Jamais deux sans trois, a-t-on coutume de dire. Hélas, le CAMASM n'a pu réaliser un 3è sacre consécutif. La faute aux White Eagles qui ont bien appris leurs léçons débutées seulement il y a un an. Des 10 clubs compétiteurs, ils ont été ceux qui ont offert au public nombreux présent ce que sont les valeurs et l'esprit du Maracana. A l'hunanimité, leur beau jeu et leur esprit du fairplay ont été reconnus par les participants. En plus du titre de champion 2019, ils ont décroché le trophée le plus important du Maracana, celui de l'esprit CFA (Convivialité - Fraternité - Amitié).",
    attack_2019: "Meilleure attaque (21 buts)",
    defense_2019: "Meilleure défense (4 buts)",
    striker_2019: "Meilleur buteur (9 buts)",

    // 2020 championship page
    title_2020: "Le championnat national 2020",
    description_2020:
      "La troisième édition du championnat national a été organisée le 27 avril dans le gymnase du Cégep du vieux Montréal pour la deuxième nuit du maracana qui a débuté à 18H en présence du nouvel Ambassadeur de Côte d'Ivoire au Canada, SEM Filbert Fagnidi et de Monsieur Saadou Maiguizo, vice-président de la FIMAA chargé des compétitions, représentant le président de la dite institution, Monsieur Charlemagne Bleu.",
    picture_2020:
      "Les White Eagles, dès leur deuxième participation, détrônent le double champion en titre CAMASM (Ste-Marthe)",
    description_1_2020:
      "Jamais deux sans trois, a-t-on coutume de dire. Hélas, le CAMASM n'a pu réaliser un 3è sacre consécutif. La faute aux White Eagles qui ont bien appris leurs léçons débutées seulement il y a un an. Des 10 clubs compétiteurs, ils ont été ceux qui ont offert au public nombreux présent ce que sont les valeurs et l'esprit du Maracana. A l'hunanimité, leur beau jeu et leur esprit du fairplay ont été reconnus par les participants. En plus du titre de champion 2019, ils ont décroché le trophée le plus important du Maracana, celui de l'esprit CFA (Convivialité - Fraternité - Amitié).",
    attack_2020: "Meilleure attaque (21 buts)",
    defense_2020: "Meilleure défense (4 buts)",
    striker_2020: "Meilleur buteur (9 buts)",
    info2020:
      "Pour toutes informations contacter Assane Diawandou au 438 930-6801.",
    date2020: "18 avril à 16h",

    // 2017 cup page
    title_cup_2017: "La coupe nationale 2017",
    description_cup_2017:
      "Le Club des Amis du Maracana de Ste-Marthe (CAMASM) était opposé, en finale, à la nouvelle équipe affiliée Peace Team Maracana de Montréal. Duel remporté aux tirs au but par Ste-Marthe après un score de deux buts partout en temps réglémentaire, réalisant ainsi le doublé de la saison.",
    picture_cup_2017:
      "Les finalistes 2017 - CAMASM et Peace Team Maracana de Montréal",
    description_cup_1_2017:
      "C'est finalement 10 équipes, venues du Québec et de l'Ontario, qui se sont affrontées en deux poules de 5, le 8 juillet 2017 dans le gymnase du Centre Sportif Panaméricain de Toronto. La première de chaque poule était directement qualifiée pour les demi-finales tandis que les deuxièmes et troisièmes devaient se battre en quart de finales pour les y rejoindre. Les têtes de poules étaient Ste-Marthe et Ivoire Foot Montréal.",
    striker_cup_2017: "Meilleure buteur (5 buts)",
    final_2017:
      "Peace Team Montréal et CAMASM, tombeurs de FC Multi C et Ivoire Foot Montréal respectivement, ont disputé une finale très relévée chacun perdant une avance à tour de rôle pour terminer sur un score étrillé de 2 buts partout. Le sang froid et l'expérience du CAMASM a eu raison du tout nouveau venu pour l'emporter aux tirs au but.",

    // 2018 cup page
    title_cup_2018: "La coupe nationale 2018",
    description_cup_2018:
      "Peace Team Maracana de Montréal prend sa revanche sur le Club des Amis du Maracana de Ste-Marthe (CAMASM) qui n'a pu conserver son trophée brisant ainsi leur rêve de réaliser le doublé pour une deuxième année consécutive.",
    picture_cup_2018:
      "L'équipe gagnante 2018 - Peace Team Maracana de Montréal",
    description_cup_1_2018:
      "C'est dans le gymnase de la Cité collégiale d'Ottawa, capitale fédérale que six équipes, venues du Québec et de l'Ontario, se sont affrontées, en aller-retour, dans deux poules de trois, le 14 juillet 2018. Les deux premières de chaque poule étaint directement qualifiées pour les demi-finales. Les têtes de poules étaient Ste-Marthe et Ivoire Foot Montréal.",
    striker_cup_2018: "Meilleure buteurs (4 buts)",
    final_2018:
      "Après s'être neutralisés, par deux fois sur un score d'un but partout, Peace Team Montréal et CAMASM, dominateurs d'Ivoire Foot Montréal (5-4) et d'Ottawa (2-0) respectivement, se sont, à nouveau, retrouvés en finale pour une deuxième année consécutive. Cela sentait un parfum de revanche pour la première citée et de confirmation pour la détentrice du trophée. Une finale âprement discutée qui se termine à l'avantage de Peace Team sur un score de 2 buts à 1.",

    // 2019 cup page
    title_cup_2019: "La coupe nationale 2019",
    description_cup_2019:
      "Sous un soleil plombant, au parc Ovila-Légaré, le chalenge était de taille le samedi 20 juillet 2019. Les équipes du top 5 du dernier championnat étaient en lice. Elles étaient accompagnées par le petit poucet du nom de Volcan FC.",
    picture_cup_2019: "L'équipe gagnante 2019 - Ivoire Foot Montréal",
    description_cup_1_2019:
      "Les questions étaient nombreuses. Qui de White Eagles ou de Peace Team réussirait à réaliser le doublé de la saison, pour le premier ou à conserver son trophée, pour le dernier? Ou alors, le CAMASM (Ste-Marthe) réussirait-t-il à reprendre son trophée perdu l'année dernière ou Ivoire Foot Montréal ou c'est plutôt le Maracana Club de St-Hyacinthe qui réussirait à soulever son premier trophée national?",
    attack_cup_2019: "Meilleure attaque (7 buts)",
    defense_cup_2019: "Meilleure défense (1 but)",
    striker_cup_2019: "Meilleurs buteur (4 buts)",
    final_2019:
      "Ivoire Foot Montréal, tombeur de Peace Team en demi-finale, brise le rêve de doublé de White Eagles, vainqueur de CAMASM. Score final 1 à 0.",

    // international competitions page
    title_ic: "Palmarès",
    description_ic:
      "La Fédération canadienne de Maracana étant affiliée à la Fédération Internationale de MAracana Association(FIMAA) dès sa création en 2016, ses équipes nationales ont été, depuis 2017, invitées aux différentes Coupes d'Afrique des Nations de maracana successives dénommées Mara'CAN et ce, à chaque année.",
    ic_2019: "Guinée 2019",
    picture_ic_2019:
      "Les Canadiens terminent au bas du podium en perdant la petite finale face au Bénin sur le score de 2 buts à 1, mais encore une fois avec la médaille du Fair-Play en poche",
    ic_2018: "Côte d'Ivoire 2018",
    picture_ic_2018:
      "Les séniors et les super séniors (45 ans et plus) accèdent aux quart de finales",
    ic_2017: "Mali 2017",
    picture_ic_2017:
      "Les séniors (35 ans et plus) accèdent aux demi-finales en plus d'être l'équipe fair-play",
  },
};

function getBrowserLanguage() {
  let browserFullLanguage =
    window.navigator.userLanguage || window.navigator.language;

  let browserLanguage = browserFullLanguage.split("-");
  if (browserLanguage[0] !== "en" && browserLanguage[0] !== "fr") {
    browserLanguage[0] = "en";
  }

  let language = "";

  // verify if the localStorage has any value stored
  if (localStorage["maracana-canada_language"]) {
    language = localStorage.getItem("maracana-canada_language");
  } else {
    localStorage.setItem("maracana-canada_language", browserLanguage[0]);
    language = localStorage.getItem("maracana-canada_language");
  }

  return language;
}

function getButtonLanguage() {
  let buttonLanguage = document.querySelector(".translate");

  // store user's chosen language
  localStorage.setItem(
    "maracana-canada_language",
    buttonLanguage.textContent.trim().toLowerCase()
  );
  let language = localStorage.getItem("maracana-canada_language");

  return language;
}

// print the text by browser language
window.addEventListener(
  "DOMContentLoaded",
  function () {
    // get the classes that contain the text to change
    let textToChange = document.querySelectorAll(".translateText");
    // get the classes that contain the pdf link to change
    let pdfNavLink = document.querySelectorAll(".game-rules-nav-link");

    // get the form placeholders
    let name = document.getElementById("nom");
    let courriel = document.getElementById("courriel");
    let mess = document.getElementById("mess");
    let sendButton = document.getElementById("form__button");

    // get the browser default language
    let browserLanguage = getBrowserLanguage();

    pdfNavLink.forEach(function (link) {
      if (browserLanguage === "fr") {
        link.setAttribute("href", "Lois_du_jeu.pdf");
      } else {
        link.setAttribute("href", "Game_rules.pdf");
      }
    });

    textToChange.forEach(function (text) {
      // check if the language object has a property like the class' key
      if (
        language[browserLanguage].hasOwnProperty(text.getAttribute("data-key"))
      ) {
        text.innerHTML =
          language[browserLanguage][text.getAttribute("data-key")];
      }
    });

    if (name || courriel || mess) {
      if (browserLanguage === "fr") {
        name.placeholder = "Votre nom";
        courriel.placeholder = "Votre courriel";
        mess.placeholder = "Votre message";
        sendButton.value = "Envoyer";
      } else {
        name.placeholder = "Your name";
        courriel.placeholder = "Your email";
        mess.placeholder = "Your message";
        sendButton.value = "Send";
      }
    }
  },
  false
);

function changeLanguage() {
  // get the classes that contain the text to change
  let textToChange = document.querySelectorAll(".translateText");
  // get the classes that contain the pdf link to change
  let pdfNavLink = document.querySelectorAll(".game-rules-nav-link");

  // get the form placeholders
  let name = document.getElementById("nom");
  let courriel = document.getElementById("courriel");
  let mess = document.getElementById("mess");
  let sendButton = document.getElementById("form__button");

  let buttonLanguage = getButtonLanguage();

  pdfNavLink.forEach(function (link) {
    if (buttonLanguage === "fr") {
      link.setAttribute("href", "Lois_du_jeu.pdf");
    } else {
      link.setAttribute("href", "Game_rules.pdf");
    }
  });

  textToChange.forEach(function (text) {
    // check if the language object has a property like the class' key
    if (
      language[buttonLanguage].hasOwnProperty(text.getAttribute("data-key"))
    ) {
      text.innerHTML = language[buttonLanguage][text.getAttribute("data-key")];
    }
  });
  if (name || courriel || mess) {
    if (buttonLanguage === "fr") {
      name.placeholder = "Votre nom";
      courriel.placeholder = "Votre courriel";
      mess.placeholder = "Votre message";
      sendButton.value = "Envoyer";
    } else {
      name.placeholder = "Your name";
      courriel.placeholder = "Your email";
      mess.placeholder = "Your message";
      sendButton.value = "Send";
    }
  }
}
