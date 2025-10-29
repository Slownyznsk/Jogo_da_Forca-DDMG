const words = [
  { word: "Pânico", clue: "Filme de terror" },
  { word: "Morcego", clue: "Animal cavernoso" },
  { word: "Gato Preto", clue: "Felino famoso" },
  { word: "Vampiro", clue: "Monstro" },
  { word: "Doces ou Travessuras", clue: "Frase icônica" },
  { word: "Chocolate", clue: "Doces" },
  { word: "Cemitério", clue: "Lugar macabro" },
  { word: "Abóbora", clue: "Decoração" },
  { word: "Chucky", clue: "Boneco" },
  { word: "Dracula", clue: "Caixão" },
  { word: "Poção", clue: "Bruxa" },
  { word: "Freddy Krueger", clue: "Sonhos" },
  { word: "Fantasia", clue: "Estilo de roupas" },
  { word: "Sangue", clue: "Líquido humano" },
  { word: "Outubro", clue: "Mês" },
  { word: "Bolo de Abóbora", clue: "Comidas típicas" },
  { word: "Aranha", clue: "Aracnideo" },
  { word: "Lua Cheia", clue: "Lobisomem" },
  { word: "Espantalho", clue: "Milharal" },
  { word: "Vela", clue: "Luz de emergência" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
