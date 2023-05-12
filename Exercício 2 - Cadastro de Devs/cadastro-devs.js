

function createLabel(text, htmlfor) {
  const label = document.createElement('label')
  label.htmlFor = htmlfor
  label.innerText = text
  return label
}

function createInput(id, value, name, type='text', placeholder='') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}



const newTech = document.getElementById("newTech")
const form = document.getElementById("orderForm")
const devs = []
let inputRows = 0


//CRIANDO NOVA ROW
newTech.addEventListener('click', (event) => {
  const stackInputs = document.getElementById("stackInputs")
  const newRow = document.createElement("li")
  const rowIndex = inputRows
  inputRows++

  newRow.id = "inputRow-" + rowIndex
  newRow.className = "inputRow"

  const techNameLabel = createLabel("Nome da tecnologia: ", "techName-" + rowIndex)
  const techNameInput = createInput("techName-" + rowIndex, "", "techName", "text", "Nome")



  const expLabel = createLabel("Experiência: ")
  const id1 = "expRadio-" + rowIndex + ".1"
  const techRadioInput1 = createInput(id1, "0-2 Anos", "techExp-" + rowIndex, "radio")
  const techRadioLabel1 = createLabel("0-2 Anos", id1)

  const id2 = "expRadio-" + rowIndex + ".2"
  const techRadioInput2= createInput(id2, "2-4 Anos", "techExp-" + rowIndex, "radio")
  const techRadioLabel2 = createLabel("2-4 Anos", id2)

  const id3 = "expRadio-" + rowIndex + ".3"
  const techRadioInput3 = createInput(id3, "4-6 Anos", "techExp-" + rowIndex, "radio")
  const techRadioLabel3 = createLabel("5+ Anos", id3)

  const radios = document.createElement("li")
  radios.append(techRadioInput1, techRadioLabel1, techRadioInput2, techRadioLabel2, techRadioInput3, techRadioLabel3)


  const removeButton = document.createElement("button")
  removeButton.type = "button"
  removeButton.innerText = "Remover tecnologia"
  removeButton.addEventListener('click', (event) => {
    stackInputs.removeChild(newRow)
  })

  newRow.append(techNameLabel, techNameInput, radios, removeButton)
  stackInputs.appendChild(newRow)
})




//CADASTRAR USUÁRIO-
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.getElementById("nameDev")
  const inputRows = document.querySelectorAll(".inputRow")

  let technologies = []
  inputRows.forEach( (row) => {
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

    technologies.push({
      name: techName,
      exp: techExp
    })
  })

  const newDev = {
    fullname: name.value,
    technologies

  }

  devs.push(newDev)

  console.log(devs)
})