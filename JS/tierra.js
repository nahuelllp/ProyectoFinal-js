//defino las constantes para insertar las img en "tierra.html"
const imagenEspacio8 = document.getElementById("imagenTierra1")
const imagenEspacio9 = document.getElementById("imagenTierra2")
const imagenEspacio10 = document.getElementById("imagenTierra3")
const imagenEspacio11 = document.getElementById("imagenTierra4")
const imagenEspacio12 = document.getElementById("imagenTierra5")
const imagenEspacio13 = document.getElementById("imagenTierra6")
const imagenEspacio14 = document.getElementById("imagenTierra7")
const imagenEspacio15 = document.getElementById("imagenTierra8")



//agrego las img y sus descripciones mediante innerHTML, seccion "tierra.html"
imagenEspacio8.innerHTML += `
    <img src="../assets/img/tierraimg1.png" alt="Árbol en lago" class="espacio__imagenes width__img">
    <h6 style="width: 500px;" class="tierra__imagenes--texto">Viejo árbol en el lago. Burgk, Turingia, Alemania.</h6>
`

imagenEspacio9.innerHTML += `
    <img src="../assets/img/tierraimg2.png" alt="Baños de la reina Giovanna" class="espacio__imagenes width__img">
    <h6 style="width: 500px;" class="tierra__imagenes--texto">Baños de la reina Giovanna, Italia.</h6>
`

imagenEspacio10.innerHTML += `
    <img src="../assets/img/tierraimg3.png" alt="Hora Dorada, Islandia" class="tierra__imagenes2 width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">La "hora dorada" dura incontables horas en Islandia.</h6>
`

imagenEspacio11.innerHTML += `
    <img src="../assets/img/tierraimg4.png" alt="Primavera Sur California" class="tierra__imagenes2 width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">Principios de primavera en el gran sur de California.</h6>
`

imagenEspacio12.innerHTML += `
    <img src="../assets/img/tierraimg5.png" alt="Cielo en llamas, Islandia" class="tierra__imagenes2 width__img">
    <h6 style="width: 500px;" class="espacio__imagenes--texto">Tierras altas de Islandia a las 4am, con el cielo en llamas.</h6>
`

imagenEspacio13.innerHTML += `
    <img src="../assets/img/tierraimg6.png" alt="Atardecer en Santa Fé" class="tierra__imagenes width__img">
    <h6 style="width: 500px;" class="tierra__imagenes--texto">Atardecer sobre la ribera, Santa Fé, Argentina.</h6>
`

imagenEspacio14.innerHTML += `
    <img src="../assets/img/tierraimg7.png" alt="Amanecer en Santa Fé." class="tierra__imagenes width__img">
    <h6 style="width: 500px;" class="tierra__imagenes--texto">Amanecer en Santa Fé.</h6>
`

imagenEspacio15.innerHTML += `
    <img src="../Assets/img/tierraimg8.png" alt="Atardecer en Hawaii" class="tierra__imagenes">
    <h6 style="width: 500px;" class="tierra__imagenes--texto3">Puesta de sol a lo largo de la costa en Keāhole Point en Big Island, Hawaii.</h6>
`