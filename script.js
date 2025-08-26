const positions = {
  'В': { x: 260, y: 700 },
  'ЗЛ': { x: 100, y: 550 },
  'ЗЦ': { x: 260, y: 550 },
  'ЗП': { x: 420, y: 550 },
  'ПЛ': { x: 100, y: 350 },
  'ПЦ': { x: 260, y: 350 },
  'ПП': { x: 420, y: 350 },
  'ФЛ': { x: 100, y: 150 },
  'ФЦ': { x: 260, y: 150 },
  'ФП': { x: 420, y: 150 },
};

function placePlayers() {
  const input = document.getElementById('playersInput').value.trim().split('\n');
  const field = document.getElementById('field');
  field.innerHTML = '';

  input.forEach(line => {
    const [name, pos] = line.split('-').map(s => s.trim());
    if (name && pos && positions[pos]) {
      const div = document.createElement('div');
      div.className = 'player';
      div.style.left = positions[pos].x + 'px';
      div.style.top = positions[pos].y + 'px';
      div.innerText = name + " (" + pos + ")";
      field.appendChild(div);
    }
  });
}
