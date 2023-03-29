function generateQuote() {
    const quotes = [
        {
            quote: "Listen to the part of yourself that knows theres more out there for you",
            author: "Bianca Sparacino"
        },
        {
            quote: "No one will ever fully be able to understand the internal battles you had to endure just to heal, just to grow, just to make it here today. Be proud of the way you fought to save yourself. Be proud of the way you survived",
            author: "Bianca Sparacino"
        },
        {
            quote: "Life is a mess - yes, but my god, is it ever a beautiful one.",
            author: "Bianca Sparacino"
        },
        {
            quote: "Forgive yourself for the way you held yourself back because you didnt believe in your own potential because you didnt believe in your capacity to take up space",
            author: "Bianca Sparacino"
        },
        {
            quote: "You have to believe that your ideas, and your hope, and your being, deserve to take up space",
            author: "Bianca Sparacino"              
        }
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    // console.log(currentQuote);

    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = quotes[currentQuote].author;

}

window.onload = function() {
    generateQuote();
    document.getElementById('generate').addEventListener('click', generateQuote);
}

