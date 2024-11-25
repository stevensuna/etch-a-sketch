// script.js
function createGrid(size = 16) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing grid
    
    // Calculate new square size
    const squareSize = 960 / size;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
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