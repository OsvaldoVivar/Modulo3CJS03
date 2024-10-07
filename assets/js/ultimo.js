let colorNuevo = "";

function cambiarColor(event) {
  const key = event.key.toLowerCase();
  if (key === "a") {
    colorNuevo = "pink";
  } else if (key === "s") {
    colorNuevo = "orange";
  } else if (key === "d") {
    colorNuevo = "lightblue";
  }

  if (["a", "s", "d"].includes(key)) {
    document.getElementById("key").style.backgroundColor = colorNuevo;
  }

  //CREAR NUEVO DIV
  if (key === "q") {
    crearDivNuevo("purple");
  } else if (key === "w") {
    crearDivNuevo("gray");
  } else if (key === "e") {
    crearDivNuevo("brown");
  }
}

function crearDivNuevo(color) {
  const newDiv = document.createElement("div");
  newDiv.className = "new-div";
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
document.addEventListener("keydown", cambiarColor);
