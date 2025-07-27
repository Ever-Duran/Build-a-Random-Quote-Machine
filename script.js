const btn = document.getElementById("new-quote");
const text = document.getElementById("text");
const author = document.getElementById("author");
const container = document.getElementById("container");


function getRandomColor() {
  const randomNum = Math.floor(Math.random() * 0xFFFFFF);
  const hexColor = "#" + randomNum.toString(16).padStart(6, "0");
  return hexColor;
}

async function obtenerFrase() {
    
  try {
    const resp = await fetch("https://dummyjson.com/quotes/random");
    const data = await resp.json();
    const quote = data[0];
        
    text.innerText = data.quote;
    author.innerText = `— ${data.author}`;

    const color = getRandomColor();
    container.style.backgroundColor = color;
    author.style.color = color;
    text.style.color = color;

    
  } catch (e) {
    console.error("Error al obtener la frase:", e);
    text.innerText = "Error while loading the quote. Please retry later.";
    author.innerText = "";
  }
}




btn.addEventListener("click", obtenerFrase);





