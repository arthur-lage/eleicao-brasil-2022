const tableBody = document.querySelector("#table-body")

const reload = async () => {
  const res = await fetch("https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json")

  const json = await res.json()

  console.log(json)

  updateTable(json)
}

function updateTable (data) {
  tableBody.innerHTML = ""

  data.cand.forEach(candidato => {
    tableBody.innerHTML += `
    <tr>
      <td>${candidato.seq}</td>
      <td>${candidato.nm}</td>
      <td>${candidato.vap}</td>
      <td>${candidato.pvap}%</td>
    </tr>
    `
  })
}

window.addEventListener("load", () => {
  reload()
})