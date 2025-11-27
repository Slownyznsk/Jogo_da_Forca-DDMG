const words = [
  { word: "Corolla", clue: "Confiável" },
  { word: "Marea", clue: "Exótico incompreendido" },
  { word: "Opala", clue: "Pedra preciosa" },
  { word: "Fusca", clue: "Tanque de guerra" },
  { word: "Uno", clue: "Surreal de absurdo" },
  { word: "Celer", clue: "Carro do professor" },
  { word: "Palio", clue: "De pedreiro" },
  { word: "Saveiro", clue: "Frete" },
  { word: "Caravan", clue: "Funerária" },
  { word: "Chevette", clue: "Caixa de fósforo" },
  { word: "Kadett", clue: "Militar" },
  { word: "Polo", clue: "Rally moderno" },
  { word: "Gol", clue: "Pontuação" },
  { word: "Zafira", clue: "Tamanho família" },
  { word: "Azera", clue: "Riqueza falsa" },
  { word: "QQ", clue: "Microcarro" },
  { word: "Renegade", clue: "Decepção" },
  { word: "Linea", clue: "Linear" },
  { word: "Celta", clue: "Vagos" },
  { word: "ORA", clue: "Elétrico" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
