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

      // Primera passada: coincidències exactes
    for (let i = 0; i < 4; i++) {
        if (copiaIntent[i] === copiaCodi[i]) {
            pistes[i] = '1'
            copiaCodi[i] = null
            copiaIntent[i] = null
        }
    }

        // Segona passada: números correctes en posició incorrecta
    for (let i = 0; i < 4; i++) {
        if (copiaIntent[i] === null) continue
       
        for (let j = 0; j < 4; j++) {
            if (copiaCodi[j] !== null && copiaIntent[i] === copiaCodi[j]) {
                pistes[i] = 'Ø'
                copiaCodi[j] = null
                break
            }
        }
    }
   
    window.pistes = pistes
    return pistes
}

// Exportar funcions
window.codiSecret = codiSecret
window.generarCodiSecret = generarCodiSecret
window.validarIntent = validarIntent