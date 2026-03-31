let nama;

nama = "nabila ayla putri";

console.log(nama);

console.log("-------------------------------------------------")
let alas = 12
let tinggi = 20

console.log('luas Segitiga :', (0.5 *  alas * tinggi));

console.log("--------------------------------------------------")
let sisi = 8

console.log('Luas Persegi:', (sisi * sisi))

console.log("--------------------------If else------------------------")
var i = -1
if (i > 0){
  console.log(i + ": positif")
}else {
  console.log(i + ": negatif")
}

console.log("----------------------Latihan 2----------------------------")
var i = 20
if (i >= 90) {
    console.log("Selamat anda mendapatkan nilai A")
} else if (i >= 80 && i <= 89) {
    console.log("Anda mendapat nilai B")
} else if (i >= 70 && i <= 79) {
    console.log("Anda mendapat nilai C")
} else if (i >= 60 && i <= 69) {
    console.log("Anda mendapat nilai D")
} else {
    console.log("Anda mendapat nilai E")
}

console.log("----------------------Game kertas gunting batu----------------------------")
const SUIT = ['kertas', 'gunting', 'batu'];
const RULES = {
  batu: 'gunting',
  kertas: 'batu',
  gunting: 'kertas',
};

// Messages declare winner after a play
const WINNER = {
  computer: 'Komputer menang! 🤖\uD83E\uDD16',
  user: 'Kamu Menang! \uD83E\uDD73',
  tie: "It's a tie 👔\uD83D\uDC54"
};

// Get user's play
const getUserChoice = userInput => {
  // Convert all user inputs to lowercase
  userInput = userInput.toLowerCase();
  // Check that user inputs a valid parameter
  if (SUIT.includes(userInput)) return userInput;
  return null;
};
// Get computer's play
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return SUIT[randomNumber];
};

const determineWinner = (userChoice, computerChoice) => {
  if (!userChoice) return console.log('Error Ini Pak!')
  console.log(`User plays: ${userChoice}\nComputer plays: ${computerChoice}\n`);
  if (userChoice === computerChoice) return console.log(WINNER.tie);
  if (RULES[userChoice] === computerChoice) {
    return console.log(WINNER.user);
  }
  return console.log(WINNER.computer);
};

const userChoice = getUserChoice('batu');
const computerChoice = getComputerChoice();
determineWinner(userChoice, computerChoice);