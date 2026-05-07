// 1. On récupère les données (simulation d'importation du JSON)
const personnages = [
    {
        id: "Venti",
        nom: "Venti",
        image: "../img/Venti_avatar.webp",
        type_arme: "Arc",
        region: "Mondstadt",
        element: "Anémo",
        rarete: 5 },
    {
        id: "Diluc",
        nom: "Diluc",
        image: "../img/Diluc_avatar.webp",
        type_arme: "Espadon",
        region: "Mondstadt",
        element: "Pyro",
        rarete: 5 },
    {
        id: "Yanfei",
        nom: "Yanfei",
        image: "../img/Yanfei_avatar.webp",
        type_arme: "Catalyseur",
        region: "Liyue",
        element: "Pyro",
        rarete: 4 },
    {
        id: "Xiao",
        nom: "Xiao",
        image: "../img/Xiao_avatar.webp",
        type_arme: "Arme d'hast",
        region: "Liyue",
        element: "Anémo",
        rarete: 5 },
    {
        id: "Xingqiu",
        nom: "Xingqiu",
        image: "../img/Xingqiu_avatar.webp",
        type_arme: "Épée",
        region: "Liyue",
        element: "Hydro",
        rarete: 4
    },
    {
        id: "Ayaka",
        nom: "Kamisato Ayaka",
        image: "../img/Kamisato_Ayaka_avatar.webp",
        type_arme: "Épée",
        region: "Inazuma",
        element: "Cryo",
        rarete: 5
    },
    {
        id: "Raiden",
        nom: "Shogun Raiden",
        image: "../img/Shogun_Raiden_avatar.webp",
        type_arme: "Arme d'hast",
        region: "Inazuma",
        element: "Electro",
        rarete: 5
    },
    {
        id: "Nahida",
        nom: "Nahida",
        image: "../img/Nahida_avatar.webp",
        type_arme: "Catalyseur",
        region: "Sumeru",
        element: "Dendro",
        rarete: 5
    },
    {
        id: "Candace",
        nom: "Candace",
        image: "../img/Candace_avatar.webp",
        type_arme: "Arme d'hast",
        region: "Sumeru",
        element: "Hydro",
        rarete: 4
    },
    {
        id: "Tighnari",
        nom: "Tighnari",
        image: "../img/Tighnari_avatar.webp",
        type_arme: "Arc",
        region: "Sumeru",
        element: "Dendro",
        rarete: 5
    },
    {
        id: "Navia",
        nom: "Navia",
        image: "../img/Navia_avatar.webp",
        type_arme: "Espadon",
        region: "Fontaine",
        element: "Géo",
        rarete: 5
    },
    {
        id: "Neuvillette",
        nom: "Neuvillette",
        image: "../img/Neuvillette_avatar.webp",
        type_arme: "Catalyseur",
        region: "Fontaine",
        element: "Hydro",
        rarete: 5
    },
    {
        id: "Citlali",
        nom: "Citlali",
        image: "../img/Citlali_avatar.webp",
        type_arme: "Catalyseur",
        region: "Natlan",
        element: "Cryo",
        rarete: 5
    },
    {
        id: "Kachina",
        nom: "Kachina",
        image: "../img/Kachina_avatar.webp",
        type_arme: "Arme d'hast",
        region: "Natlan",
        element: "Géo",
        rarete: 4
    },
    {
        id: "Flins",
        nom: "Flins",
        image: "../img/Flins_avatar.webp",
        type_arme: "Arme d'hast",
        region: "Nod-krai",
        element: "Electro",
        rarete: 5
    },
    {
        id: "Skirk",
        nom: "Skirk",
        image: "../img/Skirk_avatar.webp",
        type_arme: "Épée",
        region: "Nod-krai",
        element: "Cryo",
        rarete: 5
    }
];


const container = document.getElementById('personnages');
const filtresBoutons = document.querySelectorAll('.filtre');
const filtresType = document.querySelectorAll('#type ul li');
const filtresArme = document.querySelectorAll('#arme ul li');
const filtresPays = document.querySelectorAll('#pays ul li');


function afficherPersonnages(liste) {
    container.innerHTML = "";

    liste.forEach(perso => {
        const card = `
            <div class="personnage" id="${perso.id}">
                <img src="${perso.image}" alt="${perso.nom}">
                <p>${perso.nom}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

let rareteSelectionnee = "Tout";
let critereTypeSelectionne = "Tout";
let critereArmeSelectionne = "Tout";
let criterePaysSelectionne = "Tout";
const boutonReset = document.getElementById('reset');


boutonReset.addEventListener('click', () => {
    critereTypeSelectionne = "Tout";
    critereArmeSelectionne = "Tout";
    criterePaysSelectionne = "Tout";
    filtresPays.forEach(b => b.classList.remove("item-actif"));
    filtresArme.forEach(b => b.classList.remove("item-actif"));
    filtresType.forEach(b => b.classList.remove("item-actif"));
    appliquerFiltres();
});


function appliquerFiltres() {
    let resultat = personnages; // On part de la liste complète

    // application filtre de rareté s'il y en a un
    if (rareteSelectionnee !== "Tout") {
        const niveau = (rareteSelectionnee === "5 étoiles") ? 5 : 4;
        resultat = resultat.filter(p => p.rarete === niveau);
    }

    // application du filtre de menu par-dessus le résultat précédent
    if (critereTypeSelectionne !== "Tout") {
        resultat = resultat.filter(p =>
            p.element === critereTypeSelectionne
        );
    }
    if (critereArmeSelectionne !== "Tout") {
        resultat = resultat.filter(p =>
            p.type_arme === critereArmeSelectionne
        );
    }
    if (criterePaysSelectionne !== "Tout") {
        resultat = resultat.filter(p =>
            p.region === criterePaysSelectionne
        );
    }
    afficherPersonnages(resultat);
}


filtresBoutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        // Mise à jour de la mémoire et du style
        rareteSelectionnee = bouton.value;
        filtresBoutons.forEach(b => b.classList.remove("bouton-actif"));
        bouton.classList.add("bouton-actif");

        appliquerFiltres();
    });
});

filtresType.forEach(item => {
    item.addEventListener('click', () => {
        // Mise à jour de la mémoire et du style
        critereTypeSelectionne = item.textContent;
        filtresType.forEach(c => c.classList.remove("item-actif"));
        item.classList.add("item-actif");
        appliquerFiltres();
    });
});

filtresArme.forEach(item => {
    item.addEventListener('click', () => {
        // Mise à jour de la mémoire et du style
        critereArmeSelectionne = item.textContent;
        filtresArme.forEach(c => c.classList.remove("item-actif"));
        item.classList.add("item-actif");
        appliquerFiltres();
    });
});

filtresPays.forEach(item => {
    item.addEventListener('click', () => {
        // Mise à jour de la mémoire et du style
        criterePaysSelectionne = item.textContent;
        filtresPays.forEach(c => c.classList.remove("item-actif"));
        item.classList.add("item-actif");
        appliquerFiltres();
    });
});


afficherPersonnages(personnages);