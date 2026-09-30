
// ======================================
// BOOKNEST - JAVASCRIPT
// ======================================

// 1. DONNÉES DES LIVRES

const books = [
    { id: 1, title: "The Power of Small Habits", author: "Sarah Mitchell", price: 120000, category: "personal" },
    { id: 2, title: "Start Your Business", author: "Daniel Carter", price: 150000, category: "business" },
    { id: 3, title: "The World of Coding", author: "Michael Anderson", price: 180000, category: "technology" },
    { id: 4, title: "Master Your Money", author: "Olivia Brown", price: 140000, category: "finance" },
    { id: 5, title: "The Art of Productivity", author: "Emma Wilson", price: 130000, category: "personal" },
    { id: 6, title: "The Future of Leadership", author: "James Williams", price: 160000, category: "business" }
];

// 2. TRADUCTIONS

const translations = {
    fr: {
        navHome: "Accueil",
        navShop: "Boutique",
        navAbout: "À propos",
        navContact: "Contact",
        heroSmall: "Bienvenue chez BookNest",
        heroTitle: "Découvrez votre prochain livre préféré",
        heroDescription: "Explorez une collection de livres soigneusement sélectionnés pour apprendre, grandir et vous inspirer.",
        heroButton: "Découvrir les livres",
        categorySubtitle: "Explorez",
        categoryTitle: "Nos catégories",
        categoryAll: "Tous les livres",
        categoryPersonal: "Développement personnel",
        categoryBusiness: "Entrepreneuriat",
        categoryTechnology: "Technologie",
        shopSubtitle: "Notre collection",
        shopTitle: "Livres populaires",
        searchPlaceholder: "Rechercher un livre...",
        filterAll: "Toutes les catégories",
        filterPersonal: "Développement personnel",
        filterBusiness: "Entrepreneuriat",
        filterTechnology: "Technologie",
        filterFinance: "Finance",
        personalCategory: "Développement personnel",
        businessCategory: "Entrepreneuriat",
        technologyCategory: "Technologie",
        financeCategory: "Finance",
        addToCart: "Ajouter",
        aboutSubtitle: "À propos de nous",
        aboutTitle: "Bienvenue dans l'univers de BookNest",
        aboutText: "BookNest est une librairie en ligne créée pour rendre la découverte et l'achat de livres simples, accessibles et agréables.",
        whySubtitle: "Pourquoi nous choisir ?",
        whyTitle: "Une expérience simple et agréable",
        featureOneTitle: "Collection variée",
        featureOneText: "Découvrez des livres dans différentes catégories.",
        featureTwoTitle: "Bilingue",
        featureTwoText: "Naviguez facilement en français ou en anglais.",
        featureThreeTitle: "Panier simple",
        featureThreeText: "Ajoutez vos livres préférés au panier facilement.",
        contactSubtitle: "Contactez-nous",
        contactTitle: "Une question ?",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre adresse e-mail",
        messagePlaceholder: "Votre message",
        sendMessage: "Envoyer le message",
        footerText: "Découvrez. Lisez. Grandissez.",
        rights: "Tous droits réservés.",
        cartTitle: "Votre panier",
        emptyCart: "Votre panier est vide.",
        total: "Total :",
        checkout: "Passer la commande",
        remove: "Supprimer",
        added: "Livre ajouté au panier !",
        contactSuccess: "Merci ! Votre message a bien été saisi.",
        checkoutEmpty: "Votre panier est vide.",
        checkoutDemo: "Ceci est une boutique de démonstration. Aucun paiement réel n'est effectué."
    },

    en: {
        navHome: "Home",
        navShop: "Shop",
        navAbout: "About",
        navContact: "Contact",
        heroSmall: "Welcome to BookNest",
        heroTitle: "Discover your next favorite book",
        heroDescription: "Explore a carefully selected collection of books to learn, grow and find inspiration.",
        heroButton: "Explore Books",
        categorySubtitle: "Explore",
        categoryTitle: "Our Categories",
        categoryAll: "All Books",
        categoryPersonal: "Personal Development",
        categoryBusiness: "Entrepreneurship",
        categoryTechnology: "Technology",
        shopSubtitle: "Our Collection",
        shopTitle: "Popular Books",
        searchPlaceholder: "Search for a book...",
        filterAll: "All Categories",
        filterPersonal: "Personal Development",
        filterBusiness: "Entrepreneurship",
        filterTechnology: "Technology",
        filterFinance: "Finance",
        personalCategory: "Personal Development",
        businessCategory: "Entrepreneurship",
        technologyCategory: "Technology",
        financeCategory: "Finance",
        addToCart: "Add to Cart",
        aboutSubtitle: "About Us",
        aboutTitle: "Welcome to the World of BookNest",
        aboutText: "BookNest is an online bookstore created to make discovering and buying books simple, accessible and enjoyable.",
        whySubtitle: "Why Choose Us?",
        whyTitle: "A Simple and Enjoyable Experience",
        featureOneTitle: "Wide Collection",
        featureOneText: "Discover books across different categories.",
        featureTwoTitle: "Bilingual",
        featureTwoText: "Browse easily in French or English.",
        featureThreeTitle: "Simple Cart",
        featureThreeText: "Easily add your favorite books to your cart.",
        contactSubtitle: "Contact Us",
        contactTitle: "Have a Question?",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email address",
        messagePlaceholder: "Your message",
        sendMessage: "Send Message",
        footerText: "Discover. Read. Grow.",
        rights: "All rights reserved.",
        cartTitle: "Your Cart",
        emptyCart: "Your cart is empty.",
        total: "Total:",
        checkout: "Place Order",
        remove: "Remove",
        added: "Book added to cart!",
        contactSuccess: "Thank you! Your message has been entered.",
        checkoutEmpty: "Your cart is empty.",
        checkoutDemo: "This is a demo store. No real payment is processed."
    }
};

// 3. ÉTAT DU SITE

let currentLanguage = localStorage.getItem("booknestLanguage") || "fr";
let cart = [];

const languageSelector = document.getElementById("languageSelector");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartButton = document.getElementById("cartButton");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

// 4. CHANGEMENT DE LANGUE

function changeLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    languageSelector.value = language;

    localStorage.setItem("booknestLanguage", language);

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });

    renderCart();
    filterBooks();
}

languageSelector.addEventListener("change", event => {
    changeLanguage(event.target.value);
});

// 5. FORMATAGE DES PRIX

function formatPrice(price) {
    return new Intl.NumberFormat(
        currentLanguage === "fr" ? "fr-FR" : "en-US"
    ).format(price) + " GNF";
}

// 6. RECHERCHE ET FILTRES

function filterBooks() {
    const search = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;

    document.querySelectorAll(".book-card").forEach(card => {
        const id = Number(card.querySelector(".add-to-cart").dataset.id);
        const book = books.find(item => item.id === id);

        const matchesSearch =
            book.title.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" || book.category === category;

        card.classList.toggle(
            "hidden",
            !(matchesSearch && matchesCategory)
        );
    });
}

searchInput.addEventListener("input", filterBooks);
categoryFilter.addEventListener("change", filterBooks);

// Les boutons des catégories

document.querySelectorAll(".category-card").forEach(button => {
    button.addEventListener("click", () => {
        categoryFilter.value = button.dataset.category;
        filterBooks();

        document.getElementById("shop").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// 7. AJOUT AU PANIER

function addToCart(id) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, quantity: 1 });
    }

    renderCart();

    alert(translations[currentLanguage].added);
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        addToCart(Number(button.dataset.id));
    });
});

// 8. AFFICHAGE DU PANIER

function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-cart";
        emptyMessage.textContent =
            translations[currentLanguage].emptyCart;
        cartItems.appendChild(emptyMessage);
    }

    let total = 0;
    let quantityTotal = 0;

    cart.forEach(item => {
        const book = books.find(book => book.id === item.id);
        if (!book) return;

        total += book.price * item.quantity;
        quantityTotal += item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const title = document.createElement("h4");
        title.textContent = book.title;

        const price = document.createElement("p");
        price.textContent = formatPrice(book.price);

        info.append(title, price);

        const controls = document.createElement("div");
        controls.className = "cart-item-controls";

        const minus = document.createElement("button");
        minus.textContent = "−";
        minus.setAttribute("aria-label", "Decrease quantity");
        minus.addEventListener("click", () => updateQuantity(item.id, -1));

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.setAttribute("aria-label", "Increase quantity");
        plus.addEventListener("click", () => updateQuantity(item.id, 1));

        const remove = document.createElement("button");
        remove.className = "remove-item";
        remove.textContent = "×";
        remove.title = translations[currentLanguage].remove;
        remove.setAttribute("aria-label", translations[currentLanguage].remove);
        remove.addEventListener("click", () => removeFromCart(item.id));

        controls.append(minus, quantity, plus, remove);
        cartItem.append(info, controls);
        cartItems.appendChild(cartItem);
    });

    cartCount.textContent = quantityTotal;
    cartTotal.textContent = formatPrice(total);
}

// 9. MODIFIER LES QUANTITÉS

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    renderCart();
}

// 10. SUPPRIMER UN LIVRE

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

// 11. OUVRIR ET FERMER LE PANIER

cartButton.addEventListener("click", () => {
    cartModal.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartModal.classList.remove("active");
});

cartModal.addEventListener("click", event => {
    if (event.target === cartModal) {
        cartModal.classList.remove("active");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        cartModal.classList.remove("active");
    }
});

// 12. PASSER UNE COMMANDE (DÉMONSTRATION)

checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert(translations[currentLanguage].checkoutEmpty);
        return;
    }

    alert(translations[currentLanguage].checkoutDemo);
});

// 13. FORMULAIRE DE CONTACT (DÉMONSTRATION)

document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    alert(translations[currentLanguage].contactSuccess);
    event.target.reset();
});

// 14. INITIALISATION

changeLanguage(currentLanguage);
renderCart();
filterBooks();
