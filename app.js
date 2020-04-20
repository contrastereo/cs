const body = document.querySelector('body')
const board = document.querySelector(".board")
let numOfSquares = 4;
const sqmaker = ()=>{
  let sqTotal = (numOfSquares*numOfSquares);
  let sqSize = 100/numOfSquares
  for(i = 0; 0 < sqTotal; i++){
    let sq = document.createElement('div')
    sq.className = 'square';
    sq.style.height =  `${sqSize}%`;
    sq.style.width =  `${sqSize}%`;
    board.appendChild(sq)
    
  }
}



document.addEventListener('DOMContentLoaded', sqmaker);