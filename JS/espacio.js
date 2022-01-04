//defino las constantes para insertar las img en "espacio.html"
const imagenEspacio1 = document.getElementById("imagenEspacio1")
const imagenEspacio2 = document.getElementById("imagenEspacio2")
const imagenEspacio3 = document.getElementById("imagenEspacio3")
const imagenEspacio4 = document.getElementById("imagenEspacio4")
const imagenEspacio5 = document.getElementById("imagenEspacio5")
const imagenEspacio6 = document.getElementById("imagenEspacio6")
const imagenEspacio7 = document.getElementById("imagenEspacio7")



//agrego las img y sus descripciones mediante innerHTML, seccion "espacio.html"
imagenEspacio1.innerHTML += `
    <img src="../assets/img/espacioimg1.png" alt="NebulaCreciente" class="espacio__imagenes width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">45 horas de exposición para crear una de las imágenes más detalladas de la Nebulosa Creciente.</h6>
`

imagenEspacio2.innerHTML += `
    <img src="../assets/img/espacioimg2.png" alt="NebulaCreciente" class="espacio__imagenes width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">Vía Láctea sobre los "huevos alienígenas" en el norte de California.</h6>
`

imagenEspacio3.innerHTML += `
    <img src="../assets/img/espacioimg3.png" alt="NebulaCreciente" class="espacio__imagenes width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">¡Una foto de la vía láctea tomada con mi Google pixel 4a!</h6>
`

imagenEspacio4.innerHTML += `
    <img src="../assets/img/espacioimg4.png" alt="NebulaCreciente" class="espacio__imagenes width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">Una hermosa noche en el Parque Nacional Glacier, Montana.</h6>
`

imagenEspacio5.innerHTML += `
    <img src="../assets/img/espacioimg5.png" alt="NebulaCreciente" class="espacio__imagenes">
    <h6 class="espacio__imagenes--texto2">“Saturno de noche” por la NASA.</h6>
`

imagenEspacio6.innerHTML += `
    <img src="../assets/img/espacioimg6.png" alt="NebulaCreciente" class="espacio__imagenes width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">Playa Whatipu en Nueva Zelanza.</h6>
`

imagenEspacio7.innerHTML += `
    <img src="../assets/img/espacioimg7.png" alt="NebulaCreciente" class="espacio__imagenes width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">La Luna en cielo nocturno de las montañas del Jura en Suiza.</h6>
`
