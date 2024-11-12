async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-mais-praticados.json';
  const res = await fetch(url);
  const dados = await res.json();
  const nomeDosEsportes = Object.keys(dados);
  const quantidadeUsuarios = Object.values(dados);

  const data = [
    {
      x: nomeDosEsportes,
      y: quantidadeUsuarios,
      type: 'bar',
      marker: {
        color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#555555', '#aaaaaa'], // Exemplo de cores diferentes para cada coluna
      }
    }
  ];

  const grafico = document.createElement('div');
  grafico.className = 'grafico';
  document.getElementById('graficos-container').appendChild(grafico);
  Plotly.newPlot(grafico, data);
}

quantidadeUsuarios();
