//contacto.html
formImagen = document.getElementById("formImagen")

let imagenes = []

formImagen.addEventListener("submit", (e) => {
    e.preventDefault()
    let datosImagen = new FormData(e.target)
    let imagen = new Imagenes (datosImagen.get("usuario"), datosImagen.get("textoForm"), datosImagen.get("formImagen"))
    sessionStorage.setItem('carrito', JSON.stringify(imagen))
    imagenes.push(imagen)
    console.log(imagen)
    formImagen.reset()
})