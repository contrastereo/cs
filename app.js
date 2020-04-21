const body = document.querySelector('body')
const board = document.querySelector(".board")

let numOfSquares = 16;
const sqmaker = ()=>{
  let sqTotal = (numOfSquares*numOfSquares);
  let sqSize = 100/numOfSquares
  document.querySelector(".board").style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`
  document.querySelector(".board").style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`
  for(i = 0; i < sqTotal; i++){
    let sq = document.createElement('div')
    sq.className = 'square';
    sq.addEventListener("mouseover", () =>{
      sq.style.backgroundColor="black"
    })
    board.appendChild(sq)
  }
}



document.addEventListener('DOMContentLoaded', sqmaker);