const menu=document.querySelector('.menu');if(menu){menu.addEventListener('click',()=>{menu.classList.toggle('open');menu.textContent=menu.classList.contains('open')?'×':'☰';});}
