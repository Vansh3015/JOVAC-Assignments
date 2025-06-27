const screen = document.getElementById('screen');
let undoList = [];
let redoList = [];

screen.addEventListener('click', (e) => {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.left = e.clientX + 'px';
  circle.style.top = e.clientY + 'px';

  screen.appendChild(circle);
  undoList.push(circle);
  redoList = []; 
});

function undoCircle() {
  const last = undoList.pop();
  if (last) {
    screen.removeChild(last);
    redoList.push(last);
  }
}

function redoCircle() {
  const last = redoList.pop();
  if (last) {
    screen.appendChild(last);
    undoList.push(last);
  }
}

function resetCircles() {
  undoList.forEach(c => screen.removeChild(c));
  undoList = [];
  redoList = [];
}