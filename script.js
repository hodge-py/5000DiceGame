const prompt = require("prompt-sync")();

class BuildGame{

    constructor(){
        this.main()
        this.players = 0;

    }

    main(){
        this.players()
    }

    players(){
        this.players = prompt("How many players? ");
        
    }

}



var game = new BuildGame();