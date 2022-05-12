function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

arrayAutos = [];

for (i = 0; i < 3; i++) {
    
    marca = prompt("marca del auto"); //pido input del usuario para después mandarlo al objeto
    
    modelo = prompt("modelo del auto");
    
    annio = prompt("año del auto");
    arrayAutos.push(new auto(marca, modelo, annio));
      
}
for(let i = 0 ; i < arrayAutos.length ; i++){
    console.log(arrayAutos[i]);
  }


