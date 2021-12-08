const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
        author: "Steve Jobs",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "If you really look closely, mosst overnight successes took a long time.",
        author: "Steve Jobs",
    },
    {
        quote: "The secret of success is to do the common thing uncommonly well.",
        author: "John D.Rockefeller Jr.",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Once i made a decision, I never though about it again.",
        author: "Michael Jordan",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;