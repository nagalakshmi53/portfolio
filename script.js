
const text = "Nagalakshmi";
let index = 0;
const typeText = document.getElementById("type-text");

function typeWriter() {
  if (index < text.length) {
    typeText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);
  }
}

typeWriter();
