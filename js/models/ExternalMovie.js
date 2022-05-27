class ExternalMovie{
    constructor (data){
        this._title = {"fr":data.title_fr,"en":data.title_en};
        this._synopsis = data.synopsis;
        this._thumbnail = data.medias.thumbnail;
        this._picture = data.medias.picture;
        this._duration = data.infos.duration;
        this._released_in = data.infos._released_in;
    }
    get duration() {
        return this._duration;
    }

    get picture() {
        return `/assets/${this._picture}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`
    }

    get released_in() {
        return this._released_in
    }

    get synopsis() {
        return this._synopsis
    }

    get title() {
        return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['en']
    }
}