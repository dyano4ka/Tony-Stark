function showAge() {
  let text1 = "";
  let i = 1;
  while (i < 41) {
    if (i <= 20) {
      text1 += "<br>Young & beautiful at " + i;
    }
    if (i > 20 && i <= 39) {
      text1 += "<br>Still Young & beautiful at " + i;
    }
    if (i > 39) {
        text1 += "<br>At " + i + " only beautiful";
    }
    i++;
  }
  document.getElementById("show_age").innerHTML = text1;
}

function ageMessage() {
  let text1 = "";
  let i = 1;
  do {
    if (i <= 20) {
      text1 += "<br>Young & beautiful at " + i;
    }
    if (i > 20 && i <= 39) {
      text1 += "<br>Still Young & beautiful at " + i;
    }
    if (i > 39) {
        text1 += "<br>At " + i + " only beautiful";
    }
    i++;
  }
  while (i < 41)
  document.getElementById("age_message").innerHTML = text1;
}