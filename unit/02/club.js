export default class Club{
    constructor(clubName) {
        this.clubName = clubName;
    }

    titulo(titulo){
        console.log('Esse time ' + this.clubName + ' tem esse titulo ' + titulo)
    }
}

