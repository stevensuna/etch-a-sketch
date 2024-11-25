# Etch-A-Sketch

A browser-based drawing application inspired by the classic Etch A Sketch toy. Create pixel art by hovering your mouse over the grid!

## Features

- Dynamic grid size (up to 100x100)
- Random RGB colors on first hover
- Progressive darkening effect (10% darker with each pass)
- Responsive grid that maintains its overall size
- Smooth color transitions

## How to Use

1. Open `index.html` in your web browser
2. Hover your mouse over the grid squares to draw
3. Click the "Change Grid Size" button to adjust the grid resolution
   - Enter a number between 1 and 100
   - The grid will rebuild while maintaining the same overall size

## Technical Details

- Built with vanilla JavaScript, HTML, and CSS
- Uses CSS Flexbox for grid layout
- Implements dynamic DOM manipulation
- Features color manipulation using RGB values
- Responsive design with consistent 960px x 960px drawing area

## Implementation

The project consists of three main files:
- [index.html](index.html) - Basic HTML structure
- [styles.css](styles.css) - Grid and button styling
- [script.js](script.js) - Core drawing functionality

## Installation

No installation required! Simply clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/yourusername/etch-a-sketch.git
cd etch-a-sketch
```
## License
This project is licensed under the MIT License - see the [LICENSE] file for details.
