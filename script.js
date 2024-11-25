// script.js
function createGrid() {
    const container = document.getElementById('container');
    
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Add hover effect
        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        });
        
        container.appendChild(square);
    }
}

createGrid();