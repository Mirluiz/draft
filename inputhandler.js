(function(){
  window.translation = [0, 0];
  window.scale = [1.0, 1.0];
  window.angle = 0;

  let xTranslateHandler = document.querySelector("#xRange");
  let yTranslateHandler = document.querySelector("#yRange");
  let rotationHandler = document.querySelector("#rotate");

  let xScaleHandler = document.querySelector("#xScale");
  let yScaleHandler = document.querySelector("#yScale");

  xTranslateHandler.addEventListener('input', function(){
    window.translation[0] = +this.value;
  })

  yTranslateHandler.addEventListener('input', function(){
    window.translation[1] = +this.value;
  })


  xScaleHandler.addEventListener('input', function(){
    window.scale[0] = +this.value;
  })

  yScaleHandler.addEventListener('input', function(){
    window.scale[1] = +this.value;
  })

  rotationHandler.addEventListener('input', function(){
    window.angle = +this.value;
  })



})();