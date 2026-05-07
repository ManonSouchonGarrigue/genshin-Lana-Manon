const armes = [
    {
        id: "Chroniques",
        nom: "Les Chroniques de l'Aube",
        img: "../img/Les-chroniques-de-laube_icone.webp",
        type_arme: "Arc",
        rarete: 5 },
    {
        id:"Chasseur",
        nom: "La Voie du Chasseur",
        img: "../img/La-voie-du-chasseur_icone.webp",
        type_arme: "Arc",
        rarete: 5
    },
    {
        id:"Jade",
        nom:"Lance de Jade Ailée",
        img: "../img/Lance-de-jade-ailee_icone.webp",
        type_arme: "Lance",
        rarete: 5
    },
    {
        id:"Pique",
        nom:"Pique du Croissant de Lune",
        img: "../img/Pique-du-croissant-de-lune_icone.webp",
        type_arme: "Lance",
        rarete: 4
    },{
        id:"Ruines",
        nom:"Ruines Sanglantes",
        img: "../img/Ruines-sanglantes_icone.webp",
        type_arme: "Lance",
        rarete: 5
    },
    {
        id:"Faucheur",
        nom:"Lumière du Faucheur",
        img: "../img/Lumiere-du-faucheur_icone.webp",
        type_arme: "Lance",
        rarete: 5
    },
    {
        id:"Clou",
        nom:"Clou Soutenant les Montagnes",
        img: "../img/Clou-soutenant-les-montagnes_icone.webp",
        type_arme: "Lance",
        rarete: 4
    },
    {
        id:"Condamneur",
        nom:"Condomneur",
        img: "../img/Condamneur_icone.webp",
        type_arme: "Espadon",
        rarete: 5
    },
    {
        id:"Mort",
        nom:"Mort du Loup",
        img: "../img/Mort-du-loup_icone.webp",
        type_arme: "Espadon",
        rarete: 5
    },
    {
        id:"Serenite",
        nom:"Appel de Sérénité",
        img: "../img/Appel-de-serenite_icone.webp",
        type_arme: "Épée",
        rarete: 4
    },
    {
        id:"Eclazur",
        nom:"Eclazur",
        img: "../img/Eclazur_icone.webp",
        type_arme: "Épée",
        rarete: 5
    },
    {
        id:"Reflet",
        nom:"Reflet de Tranche Brume",
        img: "../img/Reflet-de-tranche-brume_icone.webp",
        type_arme: "Épée",
        rarete: 5
    },
    {
        id:"Favonius",
        nom:"Epée de Favonius",
        img: "../img/Epee-de-Favonius_icone.webp",
        type_arme: "Épée",
        rarete: 4
    },
    {
        id:"Sacrificiel",
        nom:"Jade Sacrificiel",
        img: "../img/Jade-sacrificiel_icone.webp",
        type_arme: "Catalyseur",
        rarete: 4
    },
    {
        id:"Reve",
        nom:"Mille Rêves Flottants",
        img: "../img/Mille-reves-flottants_icone.webp",
        type_arme: "Catalyseur",
        rarete: 5
    },
    {
        id:"Flux",
        nom:"Tome du Flux Eternel",
        img: "../img/Tome-du-flux-eternel_icone.webp",
        type_arme: "Catalyseur",
        rarete: 5
    },
    {
        id:"Veillee",
        nom:"Veillée d'appel d'étoiles",
        img: "../img/Veillee-dappel-detoiles_icone.webp",
        type_arme: "Catalyseur",
        rarete: 5
    }
    ];

const container = document.getElementById('armes');
const filtresBoutons = document.querySelectorAll('.filtre');
const filtresArme = document.querySelectorAll('#arme ul li');



function afficherPersonnages(liste) {
    container.innerHTML = "";

    liste.forEach(perso => {
        const card = `
            <div class="personnage" id="${perso.id}">
                <img src="${perso.img}" alt="${perso.nom}">
                <p>${perso.nom}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

let rareteSelectionnee = "Tout";
let critereArmeSelectionne = "Tout";
const boutonReset = document.getElementById('reset');


boutonReset.addEventListener('click', () => {
    critereArmeSelectionne = "Tout";
    filtresArme.forEach(b => b.classList.remove("item-actif"));
    appliquerFiltres();
});


function appliquerFiltres() {
    let resultat = armes; // On part de la liste complète

    // application filtre de rareté s'il y en a un
    if (rareteSelectionnee !== "Tout") {
        const niveau = (rareteSelectionnee === "5 étoiles") ? 5 : 4;
        resultat = resultat.filter(p => p.rarete === niveau);
    }
    if (critereArmeSelectionne !== "Tout") {
        resultat = resultat.filter(p =>
            p.type_arme === critereArmeSelectionne
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


filtresArme.forEach(item => {
    item.addEventListener('click', () => {
        // Mise à jour de la mémoire et du style
        critereArmeSelectionne = item.textContent;
        filtresArme.forEach(c => c.classList.remove("item-actif"));
        item.classList.add("item-actif");
        appliquerFiltres();
    });
});




afficherPersonnages(armes);