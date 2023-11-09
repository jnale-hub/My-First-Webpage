// Define an array of movie data with information about each movie.
const movies = [
    {
        title: "The Witcher",
        imageUrl: "img/thewitcher.jpg",
        description: "I definitely love this show. I love the world that it created, I love the visuals in here. I normally watch series at 1.5x speed, but this was an exception. The fight scenes and naked scenes, chef's kiss. I was just obsessed. 'Toss you coins to your witcher...'",
    },
    {
        title: "Game of Thrones",
        imageUrl: "img/gameofthrones.jpg",
        description: "This is the show that I would watch over and over again, the show that will always have a seat in my heart. I had a huge attachment with the characters, the plot, the world, the incestuous acts.",
    },
    {
        title: "Money Heist",
        imageUrl: "img/moneyheist.jpg",
        description: "Because of this amazing show, I decided to learn Spanish. I am still mourning the death of Tokyo. I love the hype, excitement, and frustration it made me feel when I am watching this, especially every highlight of the scenes. 'When you get what you want but not what you need...'",
    },
    {
        title: "The Society",
        imageUrl: "img/thesociety.jpg",
        description: "I definitely love this show. I love the world that it created, I love the visuals in here. I normally watch series at 1.5x speed, but this was an exception. The fight scenes and naked scenes, chef's kiss. I was just obsessed. 'Toss you coins to your witcher...'",
    },
    {
        title: "Harry Potter",
        imageUrl: "img/harrypotterseries.jpg",
        description: "Because of this amazing show, I decided to learn Spanish. I am still mourning the death of Tokyo. I love the hype, excitement, and frustration it made me feel when I am watching this, especially every highlight of the scenes. 'When you get what you want but not what you need...'",
    },
    {
        title: "Modern Family",
        imageUrl: "img/modernfamily.jpg",
        description: "My comfort show. If I want to feel good and laugh, this is the best thing.",
    },
    {
        title: "Sex Education",
        imageUrl: "img/sexed.jpg",
        description: "This is very funny and addicting and just amazing. I still remember the poo in the sock that was flying on the bus and went to the car.",
    },
    {
        title: "The End Of The Fucking World",
        imageUrl: "img/theend.jpg",
        description: "This show is chaotic, hilarious, psychological, and there is just something different with it. Dark comedy.",
    },
    {
        title: "The Good Doctor",
        imageUrl: "img/thegooddoctor.jpg",
        description: "One of the best medical shows I have seen. The characters are lovable, the medical cases and drama are captivating. I can't say if it is medically accurate, but Doctor Mike says it is, so I probably believe him.",
    },
    {
        title: "Stranger Things",
        imageUrl: "img/strangerthings.jpg",
        description: "One of the best shows I have ever seen. The plot was amazing, the visuals are exceptional, the thrill and suspense.",
    },
    {
        title: "Schitt's Creek",
        imageUrl: "img/schittscreek.jpg",
        description: "This show is my comfort show. I love every character here, especially Moira Rose and Alexis Rose. 'I'm a Lamborghini... I'm a Hollywood star...'",
    }
];

// Get the container element
const moviesList = document.getElementById("moviesList");

// Loop through the movie data and generate HTML for each movie
movies.forEach(movie => {
    const movieDiv = document.createElement("div");
    movieDiv.className = "grid md:grid-cols-2 p-5 mb-3 items-center gap-5";

    const imageDiv = document.createElement("div");
    imageDiv.className = "max-w-md md:ml-auto mx-auto";

    const image = document.createElement("img");
    image.src = movie.imageUrl;
    image.alt = movie.title;
    imageDiv.appendChild(image);

    const contentDiv = document.createElement("div");
    contentDiv.className = "py-3 max-w-lg mx-auto";

    const title = document.createElement("h3");
    title.className = "font-semibold text-xl mb-3 md:mb-5 text-gray-700";
    title.textContent = movie.title;

    const hr = document.createElement("hr");
    hr.className = "py-2";

    const description = document.createElement("p");
    description.className = "mb-3 text-gray-500";
    description.textContent = movie.description;

    contentDiv.appendChild(title);
    contentDiv.appendChild(hr);
    contentDiv.appendChild(description);

    movieDiv.appendChild(imageDiv);
    movieDiv.appendChild(contentDiv);

    moviesList.appendChild(movieDiv);
});
