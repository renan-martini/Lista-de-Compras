const input = document.getElementById("inputLista")
const button = document.getElementById("buttonAdd")
const listaDeCompras = []
const parentList = document.getElementById("parentList")

function addItem(){
    let text = input.value
    listaDeCompras.push(text)
    reload()
}

button.addEventListener("click", addItem)

const lis = document.getElementsByTagName("li")

function identificaItem(event){
    let targetClick = event.target
    if(targetClick.tagName === "INPUT"){
        checked(targetClick)
    }
    if(targetClick.tagName === "BUTTON"){
        remove(targetClick)
    }
}

parentList.addEventListener("click", identificaItem)



function checked(target){
    target.parentNode.classList.toggle("checked")
}

function remove(target){
    listaDeCompras.splice(target.id, 1)
    reload()
    target.parentNode.remove()
}
function reload(){
    parentList.innerHTML = ""
    for(let i = 0; i < listaDeCompras.length; i++){
        let texto = listaDeCompras[i]
        let listItem = document.createElement("li")
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        let textItem = document.createElement("label")
        let removeButton = document.createElement("button")

        removeButton.id = i
        textItem.innerText = texto
        removeButton.innerText = "X"
        listItem.appendChild(checkBox)
        listItem.appendChild(textItem)
        listItem.appendChild(removeButton)

        parentList.appendChild(listItem)
        input.value = ""
    }
}