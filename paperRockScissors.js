var opcion1 = "rock";
var opcion2 = "paper";
var opcion3 = "scissors";


 function resultado(user,cpu) {
    if (true) {
        
        user = prompt("whats your choice?");
        cpu = choiceFromCpu();
        
       

        function choiceFromCpu() {
            cpuChoice = Math.floor(Math.random()*10);
            if (cpuChoice <= 3) {
                return cpu = opcion1;
            }  else if (cpuChoice <= 6 || cpuChoice >= 4 ) {
                return cpu = opcion2;
            } else {
                return cpu = opcion3;
            }
        }

        switch (true) {
            case cpu === user:
                console.log("It's a tie!");
                break;
            case cpu == opcion1 && user == opcion3:
                console.log("you lost");
                break;  
            case cpu == opcion2 && user == opcion1:  
                console.log("you lost");
                break;  
            case cpu == opcion3 && user == opcion2:
                console.log("you lost");
                break;  
            default:
                console.log("you win!");
                break;        
        }
    } 

    else  {
        console.log("need at least 1 user to play")
    }
}