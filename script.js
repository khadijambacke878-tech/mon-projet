function toggleNav() {
  const nav = document.getElementById("mySidenav");
  
  if (nav.style.width === "150px") {
    nav.style.width = "0";
  } else {
    nav.style.width = "150px";
  }
}
function changerLangue(langue) {
  applyLanguage(langue);
}

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    'nav.about': 'A propos',
    'btn.reserve': 'RESERVER UNE TABLE',
    'section.featured': 'Nos Plats Vedettes',
    'card1.title': 'SPÉCIALITÉ DU CHEF',
    'card1.desc': 'Une explosion de saveurs locales.',
    'card1.link': 'VOIR LE MENU',
    'card2.title': 'DÉLICE GOURMAND',
    'card2.desc': 'Le mariage parfait du croquant et du fondant.',
    'card2.link': 'VOIR LE MENU',
    'card3.title': 'FRAÎCHEUR MARINE',
    'card3.desc': 'Produits frais pêchés le matin même.',
    'contact.title': 'Contactez-nous',
    'contact.tagline': 'Une question ou une envie particulière? Notre équipe est à votre écoute.',
    'contact.phoneLabel': 'Téléphone :',
    'contact.addressLabel': 'Adresse :',
    'contact.emailLabel': 'Email :',
    'contact.hoursLabel': 'Horaires :',
    'contact.orderHeading': 'Passer une commande',
    'contact.namePlaceholder': 'Votre Nom complet',
    'contact.phonePlaceholder': 'Votre Numéro de téléphone',
    'contact.orderLabel': 'Votre commande :',
    'contact.orderPlaceholder': 'Ex: 2 plats de riz au poisson, 1 jus de bouye...',
    'contact.deliveryEmporter': 'À emporter',
    'contact.deliveryLivraison': 'Livraison à domicile',
    'contact.sendButton': 'Envoyer la commande',
    'location.title': 'Notre emplacement',
    'location.description': 'Le Baobab Gourmand se trouve à Dakar, au bord de la plage de Ngor, où le sable fin rencontre la brise marine.',
    'location.addressLabel': 'Adresse :',
    'location.addressText': 'Plage de Ngor, Dakar, Sénégal',
    'location.coordinatesLabel': 'Coordonnées :',
    'location.coordinates': '14.7667° N, 17.4333° W',
    'location.openMap': 'Ouvrir dans Google Maps',
    'hero.brand': 'LE BAOBAB',
    'hero.title': 'Gourmand',
    'about.title': 'L\'Art de la Table',
    'about.heroTitle': 'Notre Histoire',
    'about.storyTitle': 'L\'aventure du Baobab',
    'about.story1': 'Le Baobab Gourmand est né d\'une passion profonde pour la richesse culinaire de l\'Afrique de l\'Ouest. Fondé par <strong>Aminata Diallo</strong>, cheffe formée à Dakar et à Paris, ce restaurant est un hommage vibrant aux saveurs qui ont bercé son enfance à Ziguinchor.',
    'about.story2': 'Notre cuisine puise dans les recettes ancestrales transmises de génération en génération, tout en les réinventant avec des techniques modernes et des présentations soignées. Chaque plat raconte une histoire, chaque arôme évoque un souvenir.',
    'about.story3': 'Installé au cœur de Dakar, notre restaurant accueille les amoureux de bonne table dans un cadre chaleureux inspiré de l\'architecture traditionnelle sénégalaise — bois, tissus wax, lumières tamisées et musique d\'ambiance en fond.',
    'about.p2': 'Tout le monde se retrouve avec bonheur à Le Baobab Gourmand, le restaurant de Dakar vue sur mer vous reçoit dans un cadre idyllique pour des déjeuners et dîners savoureux et ensoleillés.',
    'about.p3': 'Dans l’agréable fraîcheur de la vaste terrasse ombragée, vous bénéficiez d’un panorama exceptionnel avec en toile de fond les îles de la Madeleine. Plaisir d’être là en famille, en couple, avec vos amis ou pour un déjeuner d’affaires en semaine.',
    'about.hours': 'Ouverte tous les jours de 10h00 à 01h00, Le Baobab Gourmand vous donne rendez-vous pour faire rimer gastronomie et détente.',
    'testimonials.title': 'Ce que disent nos clients',
    'testimonial1.text': 'Une expérience culinaire inoubliable. Le service est impeccable et les plats sont de véritables œuvres d\'art.',
    'testimonial1.author': '- Xalil Faye',
    'testimonial2.text': 'Le meilleur restaurant de la ville ! Je recommande vivement le plat vedette du chef.',
    'testimonial2.author': '- Marie Koné',
    'testimonial3.text': 'Geudj na leik lou neexe ni. Les plats sont incroyables, ce ne sera surement pas ma dernière fois.',
    'testimonial3.author': '- Khadija Mb',
    'modal.title': 'Réservation - Le Baobab Gourmand',
    'modal.dateLabel': 'Date :',
    'modal.hourLabel': 'Heure :',
    'modal.peopleLabel': 'Personnes :',
    'modal.confirmButton': 'Confirmer la réservation',
    'menu.subtitle': 'SAVEURS RAFFINÉES ENTRE TERRE ET MER',
    'menu.title': 'Notre Menu',
    'menu.description': 'Découvrez une expérience culinaire unique, mêlant les meilleurs produits locaux et des inspirations internationales.',
    'menu.filter.all': 'Tout',
    'menu.filter.entree': 'Entrées',
    'menu.filter.plat': 'Plats',
    'menu.filter.dessert': 'Desserts',
    'menu.filter.boisson': 'Boissons',
    'menu.section.entrees': 'Entrées',
    'menu.section.entreesDesc': 'Laissez vous séduire par nos entrées raffinées, un début parfait pour un festin inoubliable.',
    'menu.section.plats': 'Plats',
    'menu.section.platsDesc': 'Nos plats, une parfaite alchimie entre tradition et innovation pour ravir vos papilles.',
    'menu.section.desserts': 'Desserts',
    'menu.section.dessertsDesc': 'La touche sucrée qui termine en beauté un repas d\'exception.',
    'menu.section.boissons': 'Boissons',
    'menu.section.boissonsDesc': 'Découvrez notre sélection de boissons, un équilibre parfait entre tradition et créativité.',
    'menu.orderButton': 'Commander',
  },
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    'nav.about': 'About',
    'btn.reserve': 'BOOK A TABLE',
    'section.featured': 'Our Signature Dishes',
    'card1.title': 'CHEF’S SPECIALTY',
    'card1.desc': 'An explosion of local flavours.',
    'card1.link': 'VIEW MENU',
    'card2.title': 'GOURMET DELIGHT',
    'card2.desc': 'The perfect blend of crunch and softness.',
    'card2.link': 'VIEW MENU',
    'card3.title': 'MARINE FRESHNESS',
    'card3.desc': 'Fresh ingredients caught early in the morning.',
    'contact.title': 'Contact Us',
    'contact.tagline': 'A question or special request? Our team is here to help.',
    'contact.phoneLabel': 'Phone :',
    'contact.addressLabel': 'Address :',
    'contact.emailLabel': 'Email :',
    'contact.hoursLabel': 'Opening Hours :',
    'contact.orderHeading': 'Place an Order',
    'contact.namePlaceholder': 'Your full name',
    'contact.phonePlaceholder': 'Your phone number',
    'contact.orderLabel': 'Your order :',
    'contact.orderPlaceholder': 'Ex: 2 fish rice dishes, 1 bissap juice...',
    'contact.deliveryEmporter': 'Takeaway',
    'contact.deliveryLivraison': 'Home delivery',
    'contact.sendButton': 'Send Order',
    'location.title': 'Our Location',
    'location.description': 'Le Baobab Gourmand is located in Dakar on the shore of Ngor beach, where golden sand meets the sea breeze.',
    'location.addressLabel': 'Address :',
    'location.addressText': 'Ngor Beach, Dakar, Senegal',
    'location.coordinatesLabel': 'Coordinates :',
    'location.coordinates': '14.7667° N, 17.4333° W',
    'location.openMap': 'Open in Google Maps',
    'hero.brand': 'THE BAOBAB',
    'hero.title': 'Gourmet',
    'about.title': 'The Art of the Table',
    'about.heroTitle': 'Our Story',
    'about.storyTitle': 'The Baobab Journey',
    'about.story1': 'Le Baobab Gourmand was born from a deep passion for the culinary richness of West Africa. Founded by Aminata Diallo, a chef trained in Dakar and Paris, this restaurant is a vibrant tribute to the flavours that shaped her childhood in Ziguinchor.',
    'about.story2': 'Our cuisine draws from ancestral recipes passed down through generations, reinvented with modern techniques and refined presentations. Each dish tells a story, each aroma evokes a memory.',
    'about.story3': 'Located in the heart of Dakar, our restaurant welcomes food lovers in a warm setting inspired by traditional Senegalese architecture — wood, wax fabrics, soft lighting and ambient music.',
    'about.p2': 'Everyone finds joy at Le Baobab Gourmand, the seaside Dakar restaurant welcomes you in an idyllic setting for delicious and sunny lunches and dinners.',
    'about.p3': 'In the pleasant freshness of the large shaded terrace, you enjoy an exceptional panorama with the Madeleine islands in the background. Pleasure to be there with family, as a couple, with friends or for a business lunch during the week.',
    'about.hours': 'Open daily from 10:00 AM to 1:00 AM, Le Baobab Gourmand invites you to combine gastronomy and relaxation.',
    'testimonials.title': 'What our customers say',
    'testimonial1.text': 'An unforgettable culinary experience. The service is impeccable and the dishes are true works of art.',
    'testimonial1.author': '- Xalil Faye',
    'testimonial2.text': 'The best restaurant in town! I highly recommend the chef\'s signature dish.',
    'testimonial2.author': '- Marie Koné',
    'testimonial3.text': 'Geudj na leik lou neexe ni. The dishes are incredible, this will certainly not be my last visit.',
    'testimonial3.author': '- Khadija Mb',
    'modal.title': 'Reservation - Le Baobab Gourmand',
    'modal.dateLabel': 'Date :',
    'modal.hourLabel': 'Time :',
    'modal.peopleLabel': 'Guests :',
    'modal.confirmButton': 'Confirm Reservation',
    'menu.subtitle': 'REFINED FLAVOURS BETWEEN LAND AND SEA',
    'menu.title': 'Our Menu',
    'menu.description': 'Discover a unique culinary experience, blending the best local products with international inspirations.',
    'menu.filter.all': 'All',
    'menu.filter.entree': 'Starters',
    'menu.filter.plat': 'Main Courses',
    'menu.filter.dessert': 'Desserts',
    'menu.filter.boisson': 'Drinks',
    'menu.section.entrees': 'Starters',
    'menu.section.entreesDesc': 'Let yourself be seduced by our refined starters, the perfect beginning to an unforgettable feast.',
    'menu.section.plats': 'Main Courses',
    'menu.section.platsDesc': 'Our dishes are a perfect alchemy between tradition and innovation to delight your taste buds.',
    'menu.section.desserts': 'Desserts',
    'menu.section.dessertsDesc': 'The sweet touch that ends a meal beautifully.',
    'menu.section.boissons': 'Drinks',
    'menu.section.boissonsDesc': 'Discover our drink selection, a perfect balance between tradition and creativity.',
    'menu.orderButton': 'Order',
  }
};

function applyLanguage(langue) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[langue] && translations[langue][key]) {
      const translation = translations[langue][key];
      const containsHtml = /<[^>]+>/g.test(translation);
      if (containsHtml) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[langue] && translations[langue][key]) {
      el.placeholder = translations[langue][key];
    }
  });

  document.documentElement.lang = langue;
  localStorage.setItem('siteLanguage', langue);

  const btnFr = document.getElementById('btn-fr');
  const btnEn = document.getElementById('btn-en');
  if (btnFr && btnEn) {
    if (langue === 'fr') {
      btnFr.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnFr.classList.remove('active');
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const langueEnregistree = localStorage.getItem('siteLanguage') || 'fr';
  applyLanguage(langueEnregistree);
});




/* On récupère les éléments*/
const modal = document.getElementById("bookingModal");
const btn = document.querySelector(".btn-reserver");
const span = document.querySelector(".close");

if (btn && modal) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = "block";
  });
}

if (span && modal) {
  span.addEventListener('click', function() {
    modal.style.display = "none";
  });
}

if (modal) {
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function filterMenu(category) {
  let items = document.querySelectorAll(".menu-item");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else {
      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}


/*script menu ves contact*/

window.onload = function() {
    // 1. On analyse l'URL (ex: contact.html?plat=Tiep%20bou%20dien)
    const params = new URLSearchParams(window.location.search);
    const platSelectionne = params.get('plat');

    // 2. Si un plat est présent dans l'URL, on l'écrit dans le formulaire
    if (platSelectionne) {
        const champCommande = document.getElementById('commande-input');
        if (champCommande) {
            champCommande.value = "Je souhaite commander : " + platSelectionne;
        }
    }
};


/*script about*/

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Pour un défilement fluide et non brusque
  });
}










