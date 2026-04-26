x = Math.floor(100 * Math.random());
console.log(x);

let menores = [];
let maiores = [];

function enviar(){
    input = document.getElementById("input").value;
    if (input > x) {
        maiores.push(input);
      
        document.getElementById("maior").innerHTML = maiores.join(", ")
        document.getElementById("maior").style.setProperty("background-color", "red")
    };

    if (input < x) {
        menores.push(input);

        document.getElementById("menor").innerHTML = menores.join(", ")
         document.getElementById("menor").style.setProperty("background-color", "red")
    };

    if (input == x){
        document.getElementById("igual").innerHTML = "Você acertou o número!"
        document.getElementById("igual").style.setProperty("background-color", "green")
    };
};

