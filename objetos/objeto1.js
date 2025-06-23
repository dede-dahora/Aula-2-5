const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  ano: 1954,
  emprestado: false,

  emprestar: function() {
    if (!this.emprestado) {
      this.emprestado = true;
      console.log("O livro foi emprestado.");
    } else {
      console.log("O livro já está emprestado.");
    }
  },

  devolver: function() {
    if (this.emprestado) {
      this.emprestado = false;
      console.log("O livro foi devolvido.");
    } else {
      console.log("O livro já está na biblioteca.");
    }
  },

  detalhes: function() {
    console.log(
      `Título: ${this.titulo}\nAutor: ${this.autor}\nAno: ${this.ano}`
    );
  }
};

console.log("--- Detalhes do Livro ---");
livro.detalhes();

console.log("\n--- Tentando emprestar o livro ---");
livro.emprestar();

console.log("\n--- Tentando emprestar novamente ---");
livro.emprestar();

console.log("\n--- Devolvendo o livro ---");
livro.devolver();