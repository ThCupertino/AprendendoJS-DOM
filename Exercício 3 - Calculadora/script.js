const main = document.querySelector('main')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(",  ")",  "/",  "*",  "-",  "+",  "9",  "8",  "7",  "6",  "5",  "4",  "3",  "2", "1", "0",  ".", "%", " "];

function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add("error");

  const result = eval(input.value)
  resultInput.value = result
  return resultInput
}

document.querySelectorAll('.charKey').forEach( (charKey) => {
  charKey.addEventListener('click', () => {
    input.value += charKey.dataset.value
  })
})

//DETECTING PRESSED KEY
input.addEventListener('keydown', (element) => {
  element.preventDefault()
  if (allowedKeys.includes(element.key)) {
    input.value += element.key
  } else if (element.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  } else if (element.key === 'c') {
    input.value = ''
    resultInput.value = ''
  } else if(element.key === 'Enter') {
    calculate()
    input.value = ''
  }
})

function clear () {
  input.value = ''
  resultInput.value = ''
  input.focus()
}

document.getElementById('clear').addEventListener('click', clear)

document.addEventListener('keydown', (element) => {
  element.preventDefault()
  if (element.key === 'c') {
    clear()
  }
})

document.getElementById('equal').addEventListener('click', () => {
  calculate()
  input.value = ''
})

document.getElementById('copyToClipboard').addEventListener('click', () => {
  navigator.clipboard.writeText(resultInput.value)
  const btnCopy = document.getElementById('copyToClipboard')
  if(btnCopy.innerText === 'COPY') {
    btnCopy.innerText = 'Copied!'
    btnCopy.classList.add('copy')
  } else {
    btnCopy.innerText = 'Copy'
    btnCopy.classList.remove('copy')
  }
})

const root = document.querySelector(':root')

//SWITCH THEME
document.getElementById('switchTheme').addEventListener('click', () => {
  if(main.dataset.theme === 'light') {
    root.style.setProperty('--bg-color', '#113335')
    root.style.setProperty('--primary-color', '#2a7377')
    root.style.setProperty('--btn-color', '#b2fbff')
    root.style.setProperty('--btn-color', '#b2fbff')
    root.style.setProperty('--copy-color', '#71f1eb')
    root.style.setProperty('--copy-bg-color', '#71f1eb')
    root.style.setProperty('--switch-color', '#51fff6')
    main.dataset.theme = 'dark'
  } else {
    root.style.setProperty('--bg-color', '#599497')
    root.style.setProperty('--primary-color', '#8BF5FA')
    root.style.setProperty('--btn-color', '#59ced4')
    root.style.setProperty('--copy-color', '#00FFF6')
    root.style.setProperty('--copy-bg-color', '#0a504d')
    root.style.setProperty('--switch-color', '#0a504d')

    main.dataset.theme = 'light'
  }
})