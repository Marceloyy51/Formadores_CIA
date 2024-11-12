async function objetivosUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-mais-praticados.json '
    const res = await fetch(url)
    const dados = await res.json()
    const objetivosUso = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
  const data = [
    {
      labels: objetivosUso,
      values: quantidadeUsuarios,
      type: 'pie'
    }
  ]
  
  const layout = 
    {
      height: 600,
      width: 870,
    }
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
  
  }
  
  objetivosUsuarios()