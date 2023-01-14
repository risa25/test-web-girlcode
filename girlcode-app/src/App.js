document.getElementById("button").addEventListener('click', function() {
  let sentence = document.getElementById("textbox").value;
  let words = sentence.split(" ");
  let size = 0;
  for (let i=0; i < words.length; i++) {
      size++;
  }
  console.log(size);
  alert(size);
});

document.getElementById("clear").addEventListener('click', function() {
  document.getElementById("textbox").value = "";
});

