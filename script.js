// Array of Tarot cards with brief descriptions
const tarotCards = [
    { name: "The Fool", description: "A new journey or beginning. Embrace the unknown." },
    { name: "The Magician", description: "You have all the tools you need to succeed." },
    { name: "The High Priestess", description: "Intuition and knowledge. Trust your inner wisdom." },
    { name: "The Empress", description: "Nurturing and abundance. Time for creativity and growth." },
    { name: "The Emperor", description: "Stability and structure. Take control of your destiny." },
    // Add more cards as needed
];

// Function to show a random card
document.getElementById('random-card-button').addEventListener('click', function() {
    const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    document.getElementById('card-description').innerText = Carte aleasă: ${randomCard.name}. Mesaj: ${randomCard.description};
});
