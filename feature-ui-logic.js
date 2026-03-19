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