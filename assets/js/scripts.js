function pintar() {
  ele.style.backgroundColor = "yellow";
}
let ele = document.getElementById("ele1");
// le da color verde por defecto
ele.style.backgroundColor = "green";

ele.addEventListener("click", pintar);
