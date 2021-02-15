document.querySelector('#dark').onclick = function (){document.querySelector('#theme').className = 'dark';} 
document.querySelector('#light').onclick = function (){document.querySelector('#theme').className = 'light';}
document.querySelector('#opener').onclick = function (){
  document.querySelector('.burger-open').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
};