document.addEventListener('DOMContentLoaded', () => {
    const pedido = document.getElementById('pedido');
    const final = document.getElementById('final');
    const simBtn = document.getElementById('simBtn');
    const naoBtn = document.getElementById('naoBtn');

    // Ação para o botão "Sim"
    simBtn.addEventListener('click', () => {
        pedido.classList.add('hidden');
        final.classList.remove('hidden');
    });

    // Ação para o botão "Não" (opcional: faz algo divertido)
    naoBtn.addEventListener('click', () => {
        alert("Ops, parece que o botão 'Não' está com defeito! 😜 Tente o 'Sim'!");
    });
});