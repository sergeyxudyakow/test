const btn = document.getElementById('cont');

btn.addEventListener('click', function onClick(event) {

  document.body.style.backgroundColor = 'salmon';

  document.getElementById("cont").style.height = "500px";
  document.getElementById("cont").style.width = "45%";
  document.getElementById("cont").style.transition = ".4s ease-in-out";
  
  event.target.classList.add('animation');
});
