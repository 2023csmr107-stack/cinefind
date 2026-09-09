* =====================================================
   CINEFIND JAVASCRIPT
===================================================== */


/* ================= MOVIE DATA ================= */

const allMovies = [

    {
        name: "The Shawshank Redemption",
        year: "1994",
        rating: "9.3",
        image: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
    },

    {
        name: "The Godfather",
        year: "1972",
        rating: "9.2",
        image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },

    {
        name: "The Dark Knight",
        year: "2008",
        rating: "9.0",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },

    {
        name: "Pulp Fiction",
        year: "1994",
        rating: "8.9",
        image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
    },

    {
        name: "Forrest Gump",
        year: "1994",
        rating: "8.8",
        image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
    },

    {
        name: "Fight Club",
        year: "1999",
        rating: "8.8",
        image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
    },

    {
        name: "Inception",
        year: "2010",
        rating: "8.8",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },

    {
        name: "Interstellar",
        year: "2014",
        rating: "8.7",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },

    {
        name: "The Matrix",
        year: "1999",
        rating: "8.7",
        image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },

    {
        name: "Goodfellas",
        year: "1990",
        rating: "8.7",
        image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"
    },

    {
        name: "The Lord of the Rings",
        year: "2003",
        rating: "8.9",
        image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
    },

    {
        name: "Gladiator",
        year: "2000",
        rating: "8.5",
        image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
    },

    {
        name: "Avengers: Endgame",
        year: "2019",
        rating: "8.2",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },

    {
        name: "Spider-Man: No Way Home",
        year: "2021",
        rating: "8.0",
        image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    },

    {
        name: "Oppenheimer",
        year: "2023",
        rating: "8.6",
        image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },

    {
        name: "Dune: Part Two",
        year: "2024",
        rating: "8.6",
        image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
    },

    {
        name: "Joker",
        year: "2019",
        rating: "8.1",
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },

    {
        name: "Whiplash",
        year: "2014",
        rating: "8.5",
        image: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg"
    }

];


/* ================= ELEMENTS ================= */

const searchInput =
    document.getElementById("search-input");

const searchButton =
    document.getElementById("search-btn");

const searchResultsSection =
    document.getElementById("search-results-section");

const searchResults =
    document.getElementById("search-results");


const homePage =
    document.getElementById("home-page");

const allMoviesPage =
    document.getElementById("all-movies-page");

const allMoviesContainer =
    document.getElementById("all-movies-container");


const trendingSeeAll =
    document.getElementById("trending-see-all");

const topSeeAll =
    document.getElementById("top-see-all");

const backHome =
    document.getElementById("back-home");


const themeButton =
    document.getElementById("theme-btn");


const profileButton =
    document.getElementById("profile-btn");

const profilePanel =
    document.getElementById("profile-panel");

const closeProfile =
    document.getElementById("close-profile");


const reviewForm =
    document.getElementById("review-form");

const reviewContainer =
    document.getElementById("review-container");


/* ================= IMAGE FALLBACK ================= */

function posterFallback(image) {

    image.onerror = null;

    image.src =
        "https://via.placeholder.com/500x750/222222/ffffff?text=Movie+Poster";

}


/* ================= SEARCH ================= */

function searchMovies() {

    const searchText =
        searchInput.value.trim().toLowerCase();


    if (searchText === "") {

        searchResultsSection.classList.add("hidden");

        return;

    }


    const results =
        allMovies.filter(movie =>
            movie.name
                .toLowerCase()
                .includes(searchText)
        );


    searchResults.innerHTML = "";


    if (results.length === 0) {

        searchResults.innerHTML = `

            <p style="
                color:#888;
                grid-column:1/-1;
                text-align:center;
                padding:40px;
            ">
                No movies found.
            </p>

        `;

    }

    else {

        results.forEach(movie => {

            searchResults.innerHTML += `

                <div class="movie-card">

                    <img
                        src="${movie.image}"
                        alt="${movie.name}"
                        onerror="posterFallback(this)"
                    >

                    <div class="movie-card-content">

                        <h3>
                            ${movie.name}
                        </h3>

                        <p>
                            ${movie.year}
                        </p>

                        <span>
                            ⭐ ${movie.rating}
                        </span>

                    </div>

                </div>

            `;

        });

    }


    searchResultsSection.classList.remove("hidden");

    searchResultsSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* Search button */

searchButton.addEventListener(
    "click",
    searchMovies
);


/* Enter key */

searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            searchMovies();

        }

    }
);


/* ================= POPULAR SEARCH TAGS ================= */

const movieTags =
    document.querySelectorAll(".movie-tag");


movieTags.forEach(tag => {

    tag.addEventListener(
        "click",
        function() {

            searchInput.value =
                this.textContent;

            searchMovies();

        }
    );

});


/* ================= SHOW ALL MOVIES ================= */

function showAllMovies() {

    homePage.classList.add("hidden");

    allMoviesPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    allMoviesContainer.innerHTML = "";


    allMovies.forEach(movie => {

        allMoviesContainer.innerHTML += `

            <div class="all-movie-card">

                <img
                    src="${movie.image}"
                    alt="${movie.name}"
                    onerror="posterFallback(this)"
                >

                <div class="all-movie-info">

                    <h3>
                        ${movie.name}
                    </h3>

                    <p>
                        ${movie.year}
                    </p>

                    <div class="all-movie-rating">
                        ⭐ ${movie.rating}
                    </div>

                </div>

            </div>

        `;

    });

}


/* ================= SEE ALL BUTTONS ================= */

trendingSeeAll.addEventListener(
    "click",
    showAllMovies
);


topSeeAll.addEventListener(
    "click",
    showAllMovies
);


/* ================= BACK HOME ================= */

backHome.addEventListener(
    "click",
    function() {

        allMoviesPage.classList.add("hidden");

        homePage.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ================= DARK / LIGHT MODE ================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.textContent = "☀️";

}


themeButton.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "light-mode"
        );


        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        if (isLight) {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

        else {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    }
);


/* ================= PROFILE ================= */

profileButton.addEventListener(
    "click",
    function() {

        profilePanel.classList.add(
            "active"
        );

    }
);


closeProfile.addEventListener(
    "click",
    function() {

        profilePanel.classList.remove(
            "active"
        );

    }
);


/* ================= REVIEWS ================= */

reviewForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "review-name"
            ).value;


        const movie =
            document.getElementById(
                "review-movie"
            ).value;


        const rating =
            document.getElementById(
                "review-rating"
            ).value;


        const review =
            document.getElementById(
                "review-text"
            ).value;


        let stars = "";

        for (
            let i = 0;
            i < 5;
            i++
        ) {

            if (i < Number(rating)) {

                stars += "★";

            }

            else {

                stars += "☆";

            }

        }


        const newReview =
            document.createElement("div");


        newReview.classList.add(
            "review-card"
        );


        newReview.innerHTML = `

            <div class="review-top">

                <div class="review-user">
                    👤
                </div>

                <div>

                    <h3>
                        ${name}
                    </h3>

                    <span>
                        ${stars}
                    </span>

                </div>

            </div>


            <h4>
                ${movie}
            </h4>


            <p>
                ${review}
            </p>


            <button class="helpful-btn">
                👍 Helpful <span>0</span>
            </button>

        `;


        reviewContainer.prepend(
            newReview
        );


        reviewForm.reset();


        alert(
            "Your review has been added!"
        );


        document.getElementById(
            "reviews"
        ).scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* ================= HELPFUL BUTTONS ================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "helpful-btn"
            )
        ) {

            const count =
                event.target.querySelector(
                    "span"
                );


            let number =
                Number(count.textContent);


            number++;


            count.textContent =
                number;

        }

    }
);
