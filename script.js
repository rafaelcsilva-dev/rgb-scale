// Seleção dos elementos de input
const slideR = document.getElementById("slideR");
const slideG = document.getElementById("slideG");
const slideB = document.getElementById("slideB");

// Seleção dos elementos de exibição de valor
const valR = document.getElementById("valR");
const valG = document.getElementById("valG");
const valB = document.getElementById("valB");

// Preview e Texto Hex
const preview = document.getElementById("color-preview");
const hexValue = document.getElementById("hexValue");

// Botões
const btnBlack = document.getElementById("btnBlack");
const btnWhite = document.getElementById("btnWhite");
const btnRandom = document.getElementById("btnRandom");

// Função para converter decimal para Hexadecimal
function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const hex = parseInt(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function copyHexValue() {
  // Capturamos o texto que está sendo exibido no momento do clique
  const textoParaCopiar = hexValue.innerText;

  // Executamos a cópia
  navigator.clipboard.writeText(textoParaCopiar)
    .then(() => {
      // Feedback visual elegante: muda o texto temporariamente
      const textoOriginal = hexValue.innerText;
      hexValue.innerText = "Copiado!";
      
      // Volta para o código HEX após 1 segundo
      setTimeout(() => {
        hexValue.innerText = textoOriginal;
      }, 500);
    })
    .catch((err) => {
      console.error("Erro ao copiar", err);
    });
}

// Função principal de atualização
function updateColor() {
  const r = slideR.value;
  const g = slideG.value;
  const b = slideB.value;

  // Atualiza os números ao lado das letras (R, G, B)
  valR.innerText = r;
  valG.innerText = g;
  valB.innerText = b;

  // Atualiza a cor do quadro de visualização
  preview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Atualiza o código HEX no rodapé
  hexValue.innerText = rgbToHex(r, g, b);
}

// Função auxiliar para os botões de atalho
function setRGB(r, g, b) {
  slideR.value = r;
  slideG.value = g;
  slideB.value = b;
  updateColor();
}

// Ouvintes de eventos para os sliders
slideR.addEventListener("input", updateColor);
slideG.addEventListener("input", updateColor);
slideB.addEventListener("input", updateColor);

// Ouvintes de eventos para os botões
btnBlack.addEventListener("click", () => setRGB(0, 0, 0));
btnWhite.addEventListener("click", () => setRGB(255, 255, 255));
btnRandom.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  setRGB(r, g, b);
});
hexValue.addEventListener("click", copyHexValue);

// Inicialização (começa em preto conforme seu HTML)
updateColor();
