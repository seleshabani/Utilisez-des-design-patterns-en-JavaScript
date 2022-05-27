class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {
        // Ici je récupère mes films de mon fichier old-movie-data.json
        const internalMoviesData = await this.moviesApi.getMovies();
        const externalMoviesData = await this.externalMoviesApi.getMovies();
        // appel aux factories pour chaque données recuperé
        const internalMovie = internalMoviesData.map(movie => new MoviesFactories(movie,'old'));
        const externalMovie = externalMoviesData.map(movie => new MoviesFactories(movie,'external'));
        // mélange les donées de deux api dans un seul tableaux
        let moviesData = internalMovie.concat(externalMovie);
        
        moviesData
            // Affichage des données
            .forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
            })
    }
}

const app = new App()
app.main()
