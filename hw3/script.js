//Event listeners 
//listener for the search button
document.querySelector("#searchBtn").addEventListener("click", displayMovie);

//drop down menu section
async function getMovieData() {

    try {
        let movieSelect = document.querySelector("#movieSelection");

        let response = await fetch("https://ghibliapi.vercel.app/films");

        let data = await response.json();

        // displays all Ghibli movies
        data.forEach(function (movie) {
            let option = document.createElement("option");

            option.value = movie.id;
            option.textContent = movie.title;

            movieSelect.appendChild(option);
        });
    } catch (err) {
        if (err instanceof TypeError) {
            console.log("Error. API can't be accessed");
        }
    }
}
getMovieData();


//retrieves individual movie data based on what the user selects
async function displayMovie() {

    try {
        let movieChoice = document.querySelector("#movieSelection").value;

        //validation - cks if "Studio Ghibli" is in the dropdown selection
        if (movieChoice === "") {
            document.querySelector("#movieSelectionError").textContent = "Please select a movie";
            return;
        }
        // clears the error msg when user clicks search with a correct movie selection
        document.querySelector("#movieSelectionError").textContent = "";

        let url = "https://ghibliapi.vercel.app/films/" + movieChoice;

        let response = await fetch(url);

        let data = await response.json();

        //movie card details from api
        document.querySelector("#movieTitle").textContent = data.title;
        document.querySelector("#moviePoster").src = data.image;
        document.querySelector("#movieYear").textContent = data.release_date;
        document.querySelector("#movieRuntime").textContent = data.running_time + " minutes";
        document.querySelector("#movieDescription").textContent = data.description;
        document.querySelector("#movieDirector").textContent = data.director;
        document.querySelector("#movieScore").textContent = data.rt_score + "%";

        //display the movie result card; changes display: none to display: flex
        document.querySelector("#movieResults").style.display = "flex";

    } catch (err) {
        if (err instanceof TypeError) {
            console.log("Error. API can't be accessed");
        }
        console.log(err);
    }
}




