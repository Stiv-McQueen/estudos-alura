console.log(dados);

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
        section.innerHTML = "O que você disse?"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    for (let dado of dados){
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_black">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_black>Mais informações</a>    
            </div>
            `
        } 
        if(!resultados){
            resultados = "<p>Escreve direito</p>"
        }
  
    }
    
    section.innerHTML = resultados

}

