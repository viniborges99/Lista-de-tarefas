let input = document.getElementById("input-pricipal")
let button = document.getElementById("botao-adicionar")
let tarefa = document.getElementById("nome-tarefa-id")
let listacompleta = document.getElementById("tarefas")


let arraydetarefas = []
recuperartarefas()


function mostrartarefas() {
    let novali = ""

    arraydetarefas.forEach((tarefa, index) => {

        novali = novali + `<li class="item-tarefa ${tarefa.concluido == true ? "concluido" : ""} ">
        <button class="botao-foquete " onclick="concluirtarefa(${index})">
            <i class="fas fa-rocket"></i>
        </button>
        <p class="nome-tarefa ${tarefa.concluido == true ? "concluido" : ""}" id="nome-tarefa-id">${tarefa.tarefa}</p>
        <button class="botao-delete" onclick="deletartarefa(${index})">
            <i class="fas fa-trash"></i>
        </button>
    </li>`

    })

    listacompleta.innerHTML = novali

    localStorage.setItem("lista", JSON.stringify(arraydetarefas))
}

function deletartarefa(index) {
    arraydetarefas.splice(index, 1)

    mostrartarefas()

}

function adicionartarefa() {

    if(input.value){
        arraydetarefas.push({
            tarefa: input.value,
            concluido: false
        })
    }
    else{
        alert("Digite uma tarefa!!")
    }
    input.value = ""
    mostrartarefas()
}

function concluirtarefa(index) {
    arraydetarefas[index].concluido = !arraydetarefas[index].concluido

    mostrartarefas()

}

function recuperartarefas() {
    let minhastarefas = localStorage.getItem("lista")

    if(minhastarefas){
        arraydetarefas = JSON.parse(minhastarefas)

        mostrartarefas()
    }

}

function adicionarpeloenter(teclas){

    if(teclas.key === "Enter"){
        adicionartarefa()
    }
}

button.addEventListener("click", adicionartarefa)

document.addEventListener("keypress", adicionarpeloenter)
