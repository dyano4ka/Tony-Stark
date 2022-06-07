function favoriteMovies() {
    const movies = {
        action: "Terminator",
        horror: "American horror story",
        fantasy: "Harry Potter",
        comedy: "Borat",
        drama: "Hatiko",
        adventure: "Life of Pi",
        historical: "Mein Kampf",
        animation: "Wall-E"
    };

    
    for (let x in movies) {
            text += movies[x] + ",";
      }

      document.getElementById("mymovie").innerHTML = "My favorite movies are:" + text;
}

