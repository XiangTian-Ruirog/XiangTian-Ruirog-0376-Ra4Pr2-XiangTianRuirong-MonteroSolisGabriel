const MAX_RONDES = 5
let rondesRestants = MAX_RONDES

document.addEventListener('DOMContentLoaded', () => {
    initSelectors()
    setupEventListeners()
    logTerminal('SYSTEM: Terminal inicialitzada. Tens 5 intents.', 'normal')
})