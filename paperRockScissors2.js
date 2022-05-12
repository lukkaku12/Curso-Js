let array = ["piedra", "papel", "tijera"];
let user = prompt("elije una respuesta: piedra, papel o tijera");
let machine = array[Math.floor(Math.random()*3)];

switch (true) {
    case (machine === user):
        console.log("a tie");
        break;
    case (machine == "piedra" && user == "papel"):
        console.log("you won");
        break;
    case (machine == "papel" && user == "tijera"):
        console.log("you won");
        break;
    case (machine == "tijera" && user == "piedra"):
        console.log("you won");
        break;
    default:
        console.log("you lost");
        break;                 
}

