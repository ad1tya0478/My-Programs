const searchBtn = document.getElementById("search-button");
        const Results = document.getElementById("results");

        searchBtn.addEventListener("click", async () => {

            // to make the html go up 
            document.querySelector(".container").classList.add("shrink");

            // this line grabs the value from the input field and stores it in val
            const val = document.getElementById("search").value;

            const api = "db7752cf";

            const url = `https://www.omdbapi.com/?apikey=${api}&s=${val}`;

            const res = await fetch(url);  // will send a GET request to the API url you built, fetch(url) returns a promise, so the await will wait until the response is ready 
            const data = await res.json(); // takes the raw response and extracts the json data from it, JSON ALSO returns a promise, so await will be used obviously, and now the data holds the actual data as a usable JS object

            Results.innerHTML = "";

            if(data.Response === "True"){
                data.Search.forEach(async movie => {
                    const detailRes = await fetch(`https://www.omdbapi.com/?apikey=${api}&i=${movie.imdbID}`);
                    const details = await detailRes.json();

                    const frame = document.createElement("div");
                    frame.className = "frame";
                    frame.innerHTML = `
                    <img src="${details.Poster !== "N/A" ? details.Poster : 'https://via.placeholder.com/200'}" />
                    <h3>${details.Title}</h3>
                    <p><strong>Year:</strong> ${details.Year}</p>
                    <p><strong>Genre:</strong> ${details.Genre}</p>
                    <p><strong>IMDB:</strong> ${details.imdbRating}</p>
                    <p>${details.Plot.slice(0, 100)}...</p>
                    `;

                    Results.appendChild(frame);

                });
            } else {
                Results.innerHTML = "<p> Movie Not Found. Try Again.</p>"
            }

        });