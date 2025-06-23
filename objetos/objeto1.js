const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "prata",
  ligado: false,

  ligar: function() {
    if (!this.ligado) {
      this.ligado = true;
      console.log("O carro foi ligado. Vrum vrum!");
    } else {
      console.log("O carro já está ligado.");
    }
  },

  desligar: function() {
    if (this.ligado) {
      this.ligado = false;
      console.log("O carro foi desligado.");
    } else {
      console.log("O carro já está desligado.");
    }
  },

  detalhes: function() {
    console.log(
      `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}`
    );
  }
};

console.log("--- Informações do Carro ---");
console.log("--- Detalhes do Carro ---");
carro.detalhes();

console.log("\n--- Tentando ligar o carro ---");
carro.ligar();

console.log("\n--- Tentando ligar novamente ---");
carro.ligar();

console.log("\n--- Desligando o carro ---");
carro.desligar();
