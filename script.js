const lamps = document.querySelectorAll(".lamp");
const inputs = document.querySelectorAll(".inputs");
const valueSpans = document.querySelectorAll(".values");

const placeholder = document.getElementById("placeholder");

const colors = {
  red: 255,
  green: 255,
  blue: 255,
};

inputs.forEach((input, i) => {
  input.addEventListener("input", () => {
    const value = input.value;
    const color = input.dataset.color;

    colors[color] = value;

    valueSpans[i].textContent = value; // atualiza número na tela

    updateColor();
  });
});

const updateColor = () => {
  lamps.forEach((lamp) => {
    const color = lamp.dataset.color;

    let r = 0,
      g = 0,
      b = 0;

    if (color === "red") r = colors.red;
    if (color === "green") g = colors.green;
    if (color === "blue") b = colors.blue;

    lamp.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  // cor combinada
  placeholder.style.backgroundColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
};
const slideR = document.getElementById("slideR");
const slideG = document.getElementById("slideG");
const slideB = document.getElementById("slideB");

const valR = document.getElementById("valR");
const valG = document.getElementById("valG");
const valB = document.getElementById("valB");

const preview = document.getElementById("color-preview");
const hexValue = document.getElementById("hexValue");

const btnBlack = document.getElementById("btnBlack");
const btnWhite = document.getElementById("btnWhite");
const btnRandom = document.getElementById("btnRandom");

// Converte valor RGB para Hexadecimal
function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const hex = parseInt(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// Atualiza a cor e as informações na tela
function updateColor() {
  const r = slideR.value;
  const g = slideG.value;
  const b = slideB.value;

  // Atualiza textos dos valores
  valR.innerText = r;
  valG.innerText = g;
  valB.innerText = b;

  // Aplica a cor de fundo
  preview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Atualiza código hexadecimal
  hexValue.innerText = rgbToHex(r, g, b);
}

// Define valores diretamente para os sliders
function setRGB(r, g, b) {
  slideR.value = r;
  slideG.value = g;
  slideB.value = b;
  updateColor();
}

// Eventos para mudança de sliders
slideR.addEventListener("input", updateColor);
slideG.addEventListener("input", updateColor);
slideB.addEventListener("input", updateColor);

// Eventos dos botões de atalho
btnBlack.addEventListener("click", () => setRGB(0, 0, 0));
btnWhite.addEventListener("click", () => setRGB(255, 255, 255));
btnRandom.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  setRGB(r, g, b);
});

// Inicializa a cor como preto
updateColor();
