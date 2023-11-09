// Define an array of book data with information about each book.
const books = [
    {
        title: "The Perks of Being a Wallflower",
        imageUrl: "img/theperksofbeingawallflower.jpeg",
        link: "https://www.goodreads.com/book/show/22628.The_Perks_of_Being_a_Wallflower"
    },
    {
        title: "The Stranger",
        imageUrl: "img/thestranger.jpg",
        link: "https://www.goodreads.com/book/show/49552.The_Stranger"
    },
    {
        title: "The Fault In Our Stars",
        imageUrl: "img/thefaultinourstars.jpg",
        link: "https://www.goodreads.com/book/show/11870085-the-fault-in-our-stars"
    },
    {
        title: "Angels And Demons",
        imageUrl: "img/angelsanddemons.jpg",
        link: "https://www.goodreads.com/book/show/960.Angels_Demons"
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        imageUrl: "img/thesevenhusbandsofevelynhugo.jpg",
        link: "https://www.goodreads.com/book/show/32620332-the-seven-husbands-of-evelyn-hugo"
    },
    {
        title: "The House In The Cerulean Sea",
        imageUrl: "img/thehouseintheceruleansea.jpg",
        link: "https://www.goodreads.com/book/show/45047384-the-house-in-the-cerulean-sea"
    },
    {
        title: "Harry Potter",
        imageUrl: "img/harrypotter.jpg",
        link: "https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone"
    },
    {
        title: "To All The Boys",
        imageUrl: "img/toalltheboys.jpg",
        link: "https://www.goodreads.com/book/show/15749186-to-all-the-boys-i-ve-loved-before"
    },
    {
        title: "Heartstopper",
        imageUrl: "img/heartstopper1.jpg",
        link: "https://www.goodreads.com/book/show/40495957-heartstopper"
    },
    {
        title: "Heartstopper",
        imageUrl: "img/heartstopper2.jpg",
        link: "https://www.goodreads.com/book/show/43307358-heartstopper"
    },
    {
        title: "Heartstopper",
        imageUrl: "img/heartstopper3.jpg",
        link: "https://www.goodreads.com/book/show/43449920-heartstopper"
    },
    {
        title: "Heartstopper",
        imageUrl: "img/heartstopper4.jpg",
        link: "https://www.goodreads.com/book/show/56060300-heartstopper"
    }
];

// Get the container element
const bookGrid = document.getElementById("bookGrid");

// Loop through the book data and generate HTML for each book
books.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "overflow-hidden rounded-r-2xl font";

    const bookLink = document.createElement("a");
    bookLink.href = book.link;

    const bookImage = document.createElement("img");
    bookImage.className = "w-full h-full object-cover";
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title;

    bookLink.appendChild(bookImage);
    bookDiv.appendChild(bookLink);

    bookGrid.appendChild(bookDiv);
});
