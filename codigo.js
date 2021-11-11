function addItem() {
    const cantidad = document.getElementById("input").value
    const tipo = document.getElementById("options").value
    console.log(cantidad)
    console.log(tipo)

    const fila = document.createElement("tr")
    const c1 = document.createElement("td")
    c1.innerText = tipo
    const c2 = document.createElement("td")
    c2.innerText = cantidad
    fila.appendChild(c1)
    fila.appendChild(c2)

    var contenido = document.getElementById("items")
    contenido.appendChild(fila)


}