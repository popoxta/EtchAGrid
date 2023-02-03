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
function getSquares(){
    const userOption = document.getElementById('squares')
    const squaresSelected = userOption.value
    createSquares(squaresSelected)
}
function createSquares(squares) {
    const TOTAL_SQUARES = squares * squares
    const BOX_WIDTH = 800 / squares


    //text content reset to remove children
    const container = document.getElementById('sketch-box')
    container.textContent = ""

    for (let i = 0; i < TOTAL_SQUARES; i++) {

        let newBox = document.createElement('div')
        newBox.setAttribute('style',
            `width:${BOX_WIDTH}px;height:${BOX_WIDTH}px;background-color: aliceblue;`)
        container.appendChild(newBox)

        newBox.addEventListener('mouseover', () => {
            if(newBox.style.backgroundColor === 'aliceblue'){
                newBox.style.backgroundColor = 'lightpink'
            } else {
                newBox.style.backgroundColor = 'aliceblue'
            }

        })
    }
}

//main functionality
const generateBtn = document.getElementById('generate-squares')
generateBtn.addEventListener("click", getSquares)