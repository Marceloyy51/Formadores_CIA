const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    //console.log(dados)

    const pessoasMundo = (dados.total_pessoas_mundo / 1e9)
    const pessoasPraticam = (dados.total_pessoas_que_praticam_esportes_regularmente / 1e9)
    const pessoasAssistem = (dados.total_pessoas_que_assistem_esportes / 1e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round((dados.tempo_medio_semana_praticando_esportes - horas ) * 60)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = 
                `Com uma população mundial estimada em <span>${pessoasMundo}</span> bilhão de pessoas, o esporte se mostra como uma paixão global.
                <br>Os dados revelam que <span>${pessoasPraticam}</span> bilhões de pessoas dedicam parte do seu tempo livre à prática regular de atividades físicas, representando quase metade da população mundial. Em média, essas pessoas investem ${horas}</span> horas e <span>${minutos}</span> minutos por semana em esportes.
                <br>Além de praticar, <span>${pessoasAssistem}</span> bilhões de pessoas se declaram acompanhar jogos e competições. Esses números demonstrar o enorme potencial do setor esportivo, que movimenta bilhões de dólares e gera empregos em todo o mundo.
                <br>O esporte é mais do que uma simples atividade de lazer. É um fenômeno global que une pessoas, culturas e economias. No entanto, apesar dos números expressivos, ainda há desafios a serem superados, como a desigualdade de acesso ao esporte em algumas regiões e a necessidade de políticas públicas que incentivem a prática esportiva.
                `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()

