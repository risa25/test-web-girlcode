function changeDressImage() {
  if (document.getElementById("model").src.match("modeldress.png")) {
    document.getElementById("model").src="modelresized.png";
  } else {
    document.getElementById("model").src="modeldress.png";
  }
}

function changeShirtImage() {
  if (document.getElementById("model").src.match("modeljustskirt.png")) {
    document.getElementById("model").src="modelskirt.png";
  }  else if (document.getElementById("model").src.match("modelshirt.png")) {
    document.getElementById("model").src="modelresized.png";
  } else if (document.getElementById("model").src.match("modelskirt.png")){
    document.getElementById("model").src="modeljustskirt.png";
  }else{
    document.getElementById("model").src="modelshirt.png";
  }
  
}

function addSkirtImage() {
  if (document.getElementById("model").src.match("modeldress.png")||document.getElementById("model").src.match("modelresized.png"))  {
    document.getElementById("model").src="modeljustskirt.png";
  } else if (document.getElementById("model").src.match("modeljustskirt.png")) {
    document.getElementById("model").src="modelresized.png";
  } else if (document.getElementById("model").src.match("modelskirt.png")) {
    document.getElementById("model").src="modelshirt.png";
  } else {
    document.getElementById("model").src="modelskirt.png";
  }

}