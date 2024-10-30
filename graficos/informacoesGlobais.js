const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    //console.log(dados)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = 
                `No mundo, existem cerca de <span>${dados.total_pessoas_mundo}</span> de pessoas, das quais a maioria (<span>6    bilhões</span>) têm acesso à educação. 
                <br>No entanto, a quantidade de horas dedicadas ao estudo ainda é pequena.
                <br>João, por exemplo, sempre sonhou em cursar uma faculdade, mas, como muitos, precisou trabalhar desde cedo e só conseguia estudar poucas horas por dia.
                <br>Apesar das dificuldades, ele se dedicava como podia, sabendo que apenas uma pequena parte da população, cerca de <span>1,5 bilhão</span> de pessoas, chega ao ensino superior.
                <br>João acreditava que, com esforço, poderia fazer parte desse grupo. 
                <br>Mesmo com pouco tempo, ele estudava <span>8 horas</span> diariamente, enquanto a média global é de cerca de <span>4 horas</span>. 
                <br>Assim, João obteve sucesso e conseguiu realizar seu sonho.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()

