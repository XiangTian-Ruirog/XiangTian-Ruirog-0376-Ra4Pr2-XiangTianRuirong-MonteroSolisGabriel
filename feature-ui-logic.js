// feature-ui-logic.js - Estudiant A

const MAX_RONDES = 5
let rondesRestants = MAX_RONDES

document.addEventListener('DOMContentLoaded', () => {
    initSelectors()
    setupEventListeners()
    logTerminal('SYSTEM: Terminal inicialitzada. Tens 5 intents.', 'normal')
})

function initSelectors() {
    const selects = document.querySelectorAll('.code-input')
    selects.forEach(select => {
        select.innerHTML = ''
        for (let i = 0; i <= 9; i++) {
            const option = document.createElement('option')
            option.value = i
            option.textContent = i
            select.appendChild(option)
        }
        select.value = '0'
    })
}

function logTerminal(missatge, tipus) {
    const terminal = document.getElementById('terminal')
    const newLine = document.createElement('p')
    newLine.className = `line ${tipus}`
    
    const timestamp = new Date().toLocaleTimeString()
    
    if (tipus === 'exit') {
        newLine.innerHTML = `[${timestamp}] ✓ ${missatge}`
    } else if (tipus === 'error') {
        newLine.innerHTML = `[${timestamp}] ✗ ${missatge}`
    } else {
        newLine.innerHTML = `[${timestamp}] ${missatge}`
    }
    
    terminal.appendChild(newLine)
    terminal.scrollTop = terminal.scrollHeight
}

function setupEventListeners() {
    document.getElementById('btn-enviar').addEventListener('click', handleEnviarClick)
}

function getIntentValues() {
    const intent = []
    document.querySelectorAll('.code-input').forEach(select => {
        intent.push(parseInt(select.value))
    })
    return intent
}

function handleEnviarClick() {
    if (rondesRestants <= 0) {
        logTerminal('No queden més intents.', 'error')
        return
    }
    
    const intent = getIntentValues()
    
    if (typeof window.validarIntent === 'function') {
        const pistes = window.validarIntent(intent)
        logTerminal(`→ Intent ${MAX_RONDES - rondesRestants + 1}: [${intent.join(' ')}] → [${pistes.join(' ')}]`, 'normal')
        rondesRestants--
        updateRondesCounter()
        
        if (pistes.every(p => p === '1')) {
            logTerminal('VICTORIA! Codi desactivat!', 'exit')
            disableInputs()
        } else if (rondesRestants === 0) {
            logTerminal(`Game Over. El codi era: [${window.codiSecret.join(' ')}]`, 'error')
            disableInputs()
        }
    } else {
        logTerminal(`DEBUG - Intent: [${intent.join(' ')}]`, 'normal')
        rondesRestants--
        updateRondesCounter()
    }
}

function updateRondesCounter() {
    document.getElementById('rondes-restants').textContent = rondesRestants
}

function disableInputs() {
    document.querySelectorAll('.code-input').forEach(select => select.disabled = true)
    document.getElementById('btn-enviar').disabled = true
}