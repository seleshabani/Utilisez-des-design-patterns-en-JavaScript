class MoviesFactories
{
    constructor(data,type){
        if (type == 'external') {
            return new ExternalMovie(data);
        } else if(type == 'old') {
            return new Movie(data);
        }else{
            throw console.error('type inconnu');
        }
    }
}