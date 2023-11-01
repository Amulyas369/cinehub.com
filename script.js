
const movieslist=[
    {
        moviesID:1,
        language:"HI",
        title:"Ganpath",
        poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSZH4Mw_iXjxc5RPcblJ1knDmv3wb5O86c9nu9GupPLGH4fFu",
        url:"https://www.veed.io/embed/8f253afa-16cb-4a0e-b9f7-92268cb6436f",
        download_url:"https://www.veed.io/view/8f253afa-16cb-4a0e-b9f7-92268cb6436f?panel=showcase"
    },
    {
         moviesID:1,
        language:"HI",
        title:"Tiger Zinda Hai",
        poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSZH4Mw_iXjxc5RPcblJ1knDmv3wb5O86c9nu9GupPLGH4fFu",
        url:"https://www.veed.io/embed/8f253afa-16cb-4a0e-b9f7-92268cb6436f",
        download_url:"https://www.veed.io/view/8f253afa-16cb-4a0e-b9f7-92268cb6436f?panel=showcase"
    },
    {
         moviesID:1,
        language:"HI",
        title:"Ram Lila",
        poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSZH4Mw_iXjxc5RPcblJ1knDmv3wb5O86c9nu9GupPLGH4fFu",
        url:"https://www.veed.io/embed/8f253afa-16cb-4a0e-b9f7-92268cb6436f",
        download_url:"https://www.veed.io/view/8f253afa-16cb-4a0e-b9f7-92268cb6436f?panel=showcase"
    }
]

//const movieslist=[]
 const container=document.querySelector(".container")

// fetch('http://localhost:8083/')
// .then(response => response.json())
// .then(data => {
//     data.data.forEach((item) => {
//         movieslist.push(item);
//     });





console.log(movieslist)
movieslist.map((data,index)=>{
     console.log(data.poster)
    const movie_container= document.createElement("div")
    movie_container.classList.add("movie_container")
    movie_container.innerHTML=`
    <img src=${data.poster} alt="Poster Not Available" class="poster"/>
            <div class="description_container">
            <div class="description">
                <h2><a href=${data.url} alt="" >${data.title} </a></h2>
                <div class="language_sec">
                    <p class="lang_f">LN</p>
                    <p class="lang_l">${data.language}</p>
                </div>
            </div>
            <div class="description">
                <div class="Download"><a href=${data.download_url} target="_blank" download><i class="fa fa-download "></i> Download</a></div>
                <a href="#hero" class="watch" onclick="getID(${movieslist[index].moviesID})"><i class="fa fa-video-camera" aria-hidden="true"></i> Watch</a>
            </div>
        </div>
    </div>
    `
    container.appendChild(movie_container)

}
)




// })





//  function getID(moviesID) {
//         console.log(moviesID);
//         const selectedMovie = movieslist.find(movie => movie.moviesID === moviesID); // Fix the variable name here
//     console.log(selectedMovie); // Log the selected movie object
//     if (selectedMovie && selectedMovie.url) {
//         const hero= document.querySelector("#vedio")
//         hero.src=selectedMovie.url
//         console.log(selectedMovie.url)
//     } else {
//         console.log('Invalid movie ID or URL.');
//     } 
// }
    
    
    
    
   



    // const container = document.querySelector(".container");
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        const filteredMovies = movieslist.filter(movie => movie.title.toLowerCase().includes(query));

        container.innerHTML = "";

        filteredMovies.forEach(movie => {
            const movieContainer = document.createElement("div");
            movieContainer.classList.add("movie_container");
            movieContainer.innerHTML = `
                <img src=${movie.poster} alt="Poster Not Available" class="poster"/>
                <div class="description_container">
                    <div class="description">
                        <h2><a href=${movie.url} alt="">${movie.title}</a></h2>
                        <div class="language_sec">
                            <p class="lang_f">LN</p>
                            <p class="lang_l">${movie.language}</p>
                        </div>
                    </div>
                    <div class="description">
                        <div class="Download"><a href=${movie.download_url} target="_blank" download><i class="fa fa-download "></i> Download</a></div>
                         <a href="#hero" class="watch" onclick="getID(${movie.moviesID})"><i class="fa fa-video-camera" aria-hidden="true"></i> Watch</a>
                    </div>
                </div>
            </div>`;

            container.appendChild(movieContainer);
        });
    });

    function getID(moviesID) {
        const selectedMovie = movieslist.find(movie => movie.moviesID === moviesID);
        if (selectedMovie && selectedMovie.url) {
            const hero = document.querySelector("#vedio");
            hero.src = selectedMovie.url;
        } else {
            console.log('Invalid movie ID or URL.');
        }
    }