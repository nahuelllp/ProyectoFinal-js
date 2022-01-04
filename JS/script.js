//tienda.html
let productos = []
divProductos = document.getElementById("divProductos")
botonCarrito = document.getElementById("botonCarrito")
table = document.getElementById("table")

fetch("../productos.json")
.then(response => response.json())
.then(data => {
    data.forEach((producto, indice) => {
        divProductos.innerHTML += `
        <div class="col-lg-3">
        <div class="card tarjeta__tienda" id="producto${indice}" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text ee">$${producto.precio}</p>
                <a href="#" class="btn btn-primary" id="boton${indice}">Comprar</a>
            </div>
        </div>
    </div>
        `
    })

    data.forEach((producto, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', () => {
            productos.push(producto)
            localStorage.setItem('carrito', JSON.stringify(productos))
        })
    })
})

botonCarrito.addEventListener('click', () => {
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito'))
    table.innerHTML = `
        <thead class="tabla__texto">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
            </tr>
        </thead>
    `

    productosEnCarrito.forEach((producto, indice) => {
        table.innerHTML += `

        <tr class="tabla__texto" id="productoCarrito${indice}">
            <th scope="row">${indice +1}</th>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio}</td>
            <td><button id="botonEliminar${indice}" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
        </tr> 

        `
    })

    productosEnCarrito.forEach((producto, indice) => {
        document.getElementById(`botonEliminar${indice}`).addEventListener('click', () => {
            document.getElementById(`productoCarrito${indice}`).remove()
            productos.splice(indice, 1)
            localStorage.setItem('carrito', JSON.stringify(productos))
        })
    })
})