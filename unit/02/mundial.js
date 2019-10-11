import club from './club';


export default class Mundial{
    constructor(){
        this.club = new club("São Paulo");
    }

    temMundial(){
        this.club.titulo("2005")
    }
}
