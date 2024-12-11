// Dit is de lijst met vragen en bijbehorende antwoorden
const vragen = [
    {
        vraag: "Hoe denk je over het verlies?",
        antwoorden: [
            "Het voelt nog steeds onwerkelijk, alsof het niet echt is gebeurd.",
            "Ik voel intens verdriet of pijn wanneer ik aan het verlies denk.",
            "Ik probeer manieren te vinden om mijn dagelijkse leven aan te passen.",
            "Ik begin de persoon een plek te geven in mijn herinneringen en probeer door te gaan."
        ]
    },
    {
        vraag: "Hoe vaak ervaar je emotionele pijn gerelateerd aan het verlies?",
        antwoorden: [
            "Ik voel geen sterke emoties over het verlies, meer verwarring.",
            "Vrijwel constant voel ik verdriet en rouw.",
            "Soms voel ik pijn, maar ik probeer verder te gaan.",
            "Het wordt minder intens en ik vind troost in herinneringen."
        ]
    },
    {
        vraag: "Hoe kijk je naar je toekomst zonder de persoon?",
        antwoorden: [
            "Ik kan me een toekomst zonder hen niet voorstellen.",
            "Ik voel me overweldigd door het verdriet en kan niet aan de toekomst denken.",
            "Ik probeer nieuwe routines te ontwikkelen zonder hen.",
            "Ik begin hoop te zien voor de toekomst en herinner me hen met liefde."
        ]
    }
];

// Begin bij de eerste vraag
let huidigeVraagIndex = 0;

// Verbindt JavaScript met de HTML-elementen door ze op te halen met hun classname
const vraagElement = document.querySelector('.vraag'); // H2-element waar de vraag wordt getoond
const antwoordenContainer = document.querySelector('.andwoorden'); // Div waar de antwoorden worden geplaatst
const terugKnop = document.querySelector('.terugknop'); // Knop om terug te gaan naar de vorige vraag
const overslaanKnop = document.querySelector('.overslaanknop'); // Knop om de huidige vraag over te slaan

// Functie om de huidige vraag en antwoorden te tonen
function toonVraag() {
    const huidigeVraag = vragen[huidigeVraagIndex]; // Haalt de vraag en antwoorden van de huidige index op
    vraagElement.textContent = huidigeVraag.vraag; // Zet de tekst van de vraag in het H2-element

    // Verwijdert alle bestaande antwoorden uit de container
    antwoordenContainer.innerHTML = '';

    // Voor elk antwoord in de lijst wordt een nieuw HTML-element gemaakt
    huidigeVraag.antwoorden.forEach((antwoord) => {
        const antwoordElement = document.createElement('p'); // Maakt een nieuw p
        antwoordElement.textContent = antwoord; // Zet de tekst van het antwoord in het p
        antwoordElement.classList.add('andwoord'); // Geeft het de CSS-class 'andwoord' voor styling

        // Eventlistener: als je op een antwoord klikt, wordt het geselecteerd
        antwoordElement.addEventListener('click', () => {
            if (huidigeVraagIndex < vragen.length - 1) {
                huidigeVraagIndex++; // Verhoogt de index om naar de volgende vraag te gaan
                toonVraag(); // Roept de functie opnieuw aan om de volgende vraag te tonen
            } else {
                // Als dit de laatste vraag is, laat een bedankbericht zien
                vraagElement.textContent = "Bedankt voor het invullen!";
                antwoordenContainer.innerHTML = ''; // Leegt de container
                terugKnop.classList.add('verborgen'); // Verbergt de "Terug"-knop
                overslaanKnop.classList.add('verborgen'); // Verbergt de "Overslaan"-knop
            }
        });

        antwoordenContainer.appendChild(antwoordElement); // Voegt het nieuwe antwoord toe aan de container
    });

    // Verbergt de "Terug"-knop als we bij de eerste vraag zijn
    terugKnop.classList.toggle('verborgen', huidigeVraagIndex === 0);
}

// Eventlistener: als je op de "Terug"-knop klikt, ga je naar de vorige vraag
terugKnop.addEventListener('click', () => {
    if (huidigeVraagIndex > 0) {
        huidigeVraagIndex--; // Verlaagt de index en gaat daardoor terug naar vorige vraag
        toonVraag(); // Roept de functie opnieuw aan om de vorige vraag te tonen
    }
});

// Eventlistener: als je op de "Overslaan"-knop klikt, ga je naar de volgende vraag
overslaanKnop.addEventListener('click', () => {
    if (huidigeVraagIndex < vragen.length - 1) {
        huidigeVraagIndex++; // Verhoogt de index om de vraag over te slaan
        toonVraag(); // Roept de functie opnieuw aan om de volgende vraag te tonen
    } else {
        // Als dit de laatste vraag is, laat een bedankbericht zien
        vraagElement.textContent = "Bedankt voor het invullen!";
        antwoordenContainer.innerHTML = ''; // Leegt de container
        terugKnop.classList.add('verborgen'); // Verbergt de "Terug"-knop
        overslaanKnop.classList.add('verborgen'); // Verbergt de "Overslaan"-knop
    }
});

// Start de vragenlijst door de eerste vraag te tonen
toonVraag();
