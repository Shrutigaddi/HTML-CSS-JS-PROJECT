const forts = [
    {
        name: "Lohagad Fort",
        location: "Pune, Maharashtra",
        description: "Known for its impressive architecture.",
        image: "lohagad.jpg",
        moreInfo: "1.html"
    },
    {
        name: "Panhala Fort",
        location: "Kolhapur, Maharashtra",
        description: "Known for its strategic importance and the escape of Shivaji Maharaj from Siddi Johar's siege.",
        image: "panhala.jpg",
        moreInfo: "2.html"
    },
    
    {
        name: "Pratapgad Fort",
        location: "Satara, Maharashtra",
        description: "Famous for the battle between Shivaji and Afzal Khan.",
        image: "prathapgad.jpg",
        moreInfo: "3.html"
    },
    {
        name: "Purandar Fort",
        location: "Pune, Maharashtra",
        description: "Known for its historical significance.",
        image: "purandar.jpg",
        moreInfo: "4.html"
    },

    {
        name: "Rajgad Fort",
        location: "Pune, Maharashtra",
        description: "The first capital of the Maratha Empire.",
        image: "rajgad.jpg",
        moreInfo: "5.html"
    },
    {
        name: "Samangad Fort",
        location: "Kolhapur, Maharashtra",
        description: "A hill fort that was strategically important for the Maratha Empire.",
        image: "samangad.jpg",
        moreInfo: "6.html"
    },

    {
        name: "Shivneri Fort",
        location: "Pune, Maharashtra",
        description: "Birthplace of Shivaji Maharaj.",
        image: "shivneri.jpg",
        moreInfo: "7.html"
    },
    {
        name: "Sindhudurg Fort",
        location: "Sindhudurg, Maharashtra",
        description: "A sea fort built by Shivaji Maharaj.",
        image: "sindhudurg.jpg",
        moreInfo: "8.html"
    },
    {
        name: "Torna Fort",
        location: "Pune, Maharashtra",
        description: "The first fort captured by Shivaji Maharaj.",
        image: "torna.jpg",
        moreInfo:"9.html"
    },
 
    {
        name: "Vijaydurg Fort",
        location: "Sindhudurg, Maharashtra",
        description: "An important naval base for the Marathas.",
        image: "vijaydurga.jpg",
        moreInfo: "10.html"
    },
  
];

document.addEventListener('DOMContentLoaded', () => {
    const fortList = document.getElementById('fort-list');
    forts.forEach(fort => {
        const fortDiv = document.createElement('div');
        fortDiv.className = 'fort';
        fortDiv.innerHTML = `
            <img src="${fort.image}" alt="${fort.name}">
            <h2>${fort.name}</h2>
            <p><strong>Location:</strong> ${fort.location}</p>
            <p>${fort.description}</p>
            <button onclick="window.location.href='${fort.moreInfo}'">More Info</button>
        `;
        fortList.appendChild(fortDiv);
    });
});

function searchFort() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const fortDivs = document.querySelectorAll('.fort');
    
    fortDivs.forEach(fort => {
        const fortName = fort.querySelector('h2').innerText.toLowerCase();
        if (fortName.includes(searchInput)) {
            fort.style.display = '';
        } else {
            fort.style.display = 'none';
        }
    });
}
