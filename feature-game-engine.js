// feature-game-engine.js - Estudiant B: Motor del Joc

let codiSecret = []

document.addEventListener('DOMContentLoaded', () => {
    generarCodiSecret()
    window.codiSecret = codiSecret
})

function generarCodiSecret() {
    codiSecret = []
    for (let i = 0; i < 4; i++) {
        codiSecret.push(Math.floor(Math.random() * 10))
    }
    window.codiSecret = codiSecret
}

function validarIntent(intent) {
    let pistes = ['×', '×', '×', '×']
    let copiaCodi = [...codiSecret]
    let copiaIntent = [...intent]