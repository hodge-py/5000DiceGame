class BuildGame{

    constructor(){
        this.main()
        this.players = 0;

    }

    main(){
        this.players()
    }

    players(){
        this.players = prompt("How many players?");
        console.log(this.players);
    }

}



var game = new BuildGame();