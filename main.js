const form = document.getElementById('formulario');
const nomes = []
const telefones = []

linhas = ''

form;addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha()
    atualizaTabela ()
})

function adicionarLinha(){
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido`)
    } else {
        nomes.push (inputNome.value)
        telefones.push(Number(inputNome.value))
        
    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`
    linha += `</tr>`

    linhas += linha

    inputNome.value = ''
    inputTelefone.value = ''
    }

}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}