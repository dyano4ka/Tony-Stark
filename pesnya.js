function showList() {
  const pesnya = [
    "Chernye Glaza",
    "Videli Noch",
    "Zemlya v Illiuminatore",
    "Murka",
    "Pesnya pro Zaicev",
    "Pamaghi Mne",
    "A Ya Siady v Kabriolet",
    "Imperatritsa",
    "Faina",
    "Ti Edinstvennaia Moya",
    "Patamushta Nelizea Bit' Krasivoi Takoi",

  ];

  let len = pesnya.length;
  let text = "";

  for (let i = 0; i < len; i++) {
    text += pesnya[i] + "<br>";
  }

  document.getElementById("text").innerHTML = text;
}