var x = [];

function grow() {

  x.push(new Array(1000000).join('x'));

  console.log(x);
  
}


document.querySelector('.grow').addEventListener('click', grow);
