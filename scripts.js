/*
 -------- ETCH A GRID --------
Grid is standardized size (600px / 600 px)

VIA INPUT (and button)
    User can the x squared amount of squares they would like (e.g 16!) (max 100)
    button will take the input and run function to render boxes (div squares)

Squares will be rendered onto the screen
    js function - for loop will contain ;
        spawning of boxes
        appending to container box

COLOR/HOVER TBA
 */
const SQUARES = 64
const container = document.getElementById('sketch-box')

///SQUARES LOGIC YAY
function createSquares(squares) {
    const TOTAL_SQUARES = squares * squares
    const BOX_WIDTH = 800 / squares

    for (let i = 0; i < TOTAL_SQUARES; i++) {

        let newBox = document.createElement('div')
        newBox.setAttribute('style',
            `width:${BOX_WIDTH}px;height:${BOX_WIDTH}px;background-color: aliceblue;`)
        container.appendChild(newBox)

        newBox.addEventListener('mouseover', () => {
            newBox.style.backgroundColor = 'lightpink'
        })
    }
}

createSquares(SQUARES)