(function(){
  window.translation = [0, 0];
  window.angle = 0;

  let xHandler = document.querySelector("#xRange");
  let yHandler = document.querySelector("#yRange");
  let rotationHandler = document.querySelector("#rotate");

  xHandler.addEventListener('input', function(){
    window.translation[0] = +this.value;
  })

  yHandler.addEventListener('input', function(){
    window.translation[1] = +this.value;
  })

  rotationHandler.addEventListener('input', function(){
    window.angle = +this.value;
  })



})();