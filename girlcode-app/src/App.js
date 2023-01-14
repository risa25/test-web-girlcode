function changeDressImage() {
  document.getElementById("model").src="modeldress.png";
}

function changeShirtImage() {
  if (document.getElementById("model").src.match("modeljustskirt.png")) {
    document.getElementById("model").src="modelskirt.png";
  } else {
    document.getElementById("model").src="modelshirt.png";
  }
}

function addSkirtImage() {
  if (document.getElementById("model").src.match("modeldress.png")||document.getElementById("model").src.match("modelresized.png"))  {
    document.getElementById("model").src="modeljustskirt.png";
  } else {
    document.getElementById("model").src="modelskirt.png";
  }

}