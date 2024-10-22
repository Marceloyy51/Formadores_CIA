const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    //console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No mundo, existem cerca de ${dados.total_pessoas_mundo} de pessoas, das quais a maioria (6    bilhões) têm acesso à educação. <br>No entanto, a quantidade de horas dedicadas ao estudo ainda é pequena.
                <br>João, por exemplo, sempre sonhou em cursar uma faculdade, mas, como muitos, precisou trabalhar desde cedo e só conseguia estudar poucas horas por dia.
                <br>Apesar das dificuldades, ele se dedicava como podia, sabendo que apenas uma pequena parte da população, cerca de 1,5 bilhão de pessoas, chega ao ensino superior.
                <br>João acreditava que, com esforço, poderia fazer parte desse grupo. Mesmo com pouco tempo, ele estudava 8 horas diariamente, enquanto a média global é de cerca de 4 horas. 
                <br>Assim, João obteve sucesso e conseguiu realizar seu sonho.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()

