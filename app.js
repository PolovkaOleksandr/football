const positions = [
  // Форварди
  { x: 30, y: 15, code: "ФЛ" },
  { x: 50, y: 15, code: "ФЦ" },
  { x: 70, y: 15, code: "ФП" },
  // Півзахисники
  { x: 30, y: 40, code: "ПЛ" },
  { x: 50, y: 40, code: "ПЦ" },
  { x: 70, y: 40, code: "ПП" },
  // Захисники
  { x: 30, y: 65, code: "ЗЛ" },
  { x: 50, y: 65, code: "ЗЦ" },
  { x: 70, y: 65, code: "ЗП" },
  // Воротар
  { x: 50, y: 90, code: "В" },
];

function placePlayers() {
  const input = document.getElementById("playersInput").value.trim().split("\n").filter(n => n);
  const field = document.getElementById("field");
  field.innerHTML = "";

  const maxPlayers = positions.length;
  const count = Math.min(input.length, maxPlayers);

  for (let i = 0; i < maxPlayers; i++) {
    const div = document.createElement("div");
    div.className = "player";
    div.style.left = positions[i].x + "%";
    div.style.top = positions[i].y + "%";

    if (i < count) {
      div.textContent = input[i];
    } else {
      div.textContent = positions[i].code;
    }
    field.appendChild(div);
  }
}
