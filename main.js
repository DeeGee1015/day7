function LightTheme() {
  document.body.style.backgroundColor = '#fff'
  document.body.style.Color = '#333'
}

function darkTheme() {
  document.body.style.backgroundColor = '#333'
  document.body.style.color = 'white'
}

function sepiaTheme() {
  document.body.style.backgroundColor = 'cc9d68'
  document.body.style.Color = '#333'
}

function turnpage() {
  let screen = document.getElementById('screen')
  screen.classList.add('page')
setTimeout(function() {
  screen.classList.remove('page')
}, 1400)
}
// same as on the index
