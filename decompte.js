let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");

let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArrete = true;

const demarrer = () => {
  if (estArrete) {
    estArrete = false;
    defilerTemps();
  }
};

const arreter = () => {
  if (!estArrete) {
    estArrete = true;
    clearTimeout(timeout);
  }
};

const defilerTemps = () => {
  if (estArrete) return;

  secondes = parseInt(secondes);
  minutes = parseInt(minutes);
  heures = parseInt(heures);

  secondes++;

  if (secondes == 60) {
    minutes++;
    secondes = 0;
  }

  if (minutes == 60) {
    heures++;
    minutes = 0;
  }

//--------------affichage--------------------------
  if (secondes < 10) {
    secondes = "0" + secondes; // ex 4 => 04
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (heures < 10) {
    heures = "0" + heures;
  }

  chrono.textContent = `${heures}:${minutes}:${secondes}`;

  timeout = setTimeout(defilerTemps, 1000);
};

const reset = () => {
  chrono.textContent = "00:00:00";
  estArrete = true;
  heures = 0;
  minutes = 0;
  secondes = 0;
  clearTimeout(timeout);
};

startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);


// -------------------------DECOMPTE--------------------------------
// function getChrono(){
//   const now= new Date().getTime();
//   const countdouwnDate = new Date("May 8, 2024").getTime();

//   const distanceBase = countdouwnDate - now;
//   const days = Math.floor(distanceBase/ (1000*60*60*24));
//   // Math.floor(c'est pour arrondir)   distanceBase en millisecone / 1000 milliseconde=1sec *60(=1min)*60(min)*24(heure)(=1 JOUR EN MILISECONDE)
//   // console.log(days);
//   const hours = Math.floor((distanceBase % (1000*60*60*24)) / (1000*60*60));
//   // % modulo reste de l'opération précédente divisé par (1000*60*60=1H)
//   // console.log(hours);
//   const minutes = Math.floor((distanceBase % (1000*60*60)) / (1000*60));
//   const seconds = Math.floor((distanceBase % (1000*60)) / 1000);
//   // console.log(days, hours, minutes, seconds);

//   Text.getElementById ("chrono") = `${minutes} MINUTES ${seconds} SECONDES`;
// };

// getChrono()

// const countDownInterval = setInterval(() => {

//   getChrono()

// }, 1000);
