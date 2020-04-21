const body = document.querySelector('body')
const board = document.querySelector(".board")
const reset = document.querySelector(".reset")
const more = document.querySelector(".more")
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

reset.addEventListener('click', ()=> {
  arr = Array.from(board.querySelectorAll(".square"));
  arr.forEach(e =>{
    e.style.backgroundColor = "white"
  })
})

more.addEventListener('click', ()=> {
  board.innerHTML = ""
  numOfSquares = Number(prompt('Tell me a number'))
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
  
})