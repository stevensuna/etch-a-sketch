// script.js
function createGrid(size = 16) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing grid
    
    const squareSize = 960 / size;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.passes = '0'; // Track number of interactions
        
        square.addEventListener('mouseenter', () => {
            if (square.dataset.passes === '0') {
                // First pass - set random RGB
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {
                // Subsequent passes - darken by 10%
                const currentColor = window.getComputedStyle(square).backgroundColor;
                const [r, g, b] = currentColor.match(/\d+/g).map(Number);
                const darkenFactor = 0.9; // 10% darker
                
                square.style.backgroundColor = `rgb(${r * darkenFactor}, ${g * darkenFactor}, ${b * darkenFactor})`;
            }
            
            square.dataset.passes = Number(square.dataset.passes) + 1;
        });
        
        container.appendChild(square);
    }
}

function changeGridSize() {
    let newSize = prompt('Enter number of squares per side (max 100):');
    newSize = parseInt(newSize);
    
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
}

// Add button event listener
document.getElementById('gridSize').addEventListener('click', changeGridSize);

// Create initial grid
createGrid();