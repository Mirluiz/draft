(function(){
  window.translation = [0, 0, 0];
  window.scale = [2.0, 2.0, 2.0];
  window.angle = [30, 30, 10];

  let xTranslateHandler = document.querySelector("#xRange");
  let yTranslateHandler = document.querySelector("#yRange");
  let zTranslateHandler = document.querySelector("#zRange");

  let rotationHandlerX = document.querySelector("#rotateX");
  let rotationHandlerY = document.querySelector("#rotateY");
  let rotationHandlerZ = document.querySelector("#rotateZ");

  let xScaleHandler = document.querySelector("#xScale");
  let yScaleHandler = document.querySelector("#yScale");
  let zScaleHandler = document.querySelector("#zScale");

  xTranslateHandler.addEventListener('input', function(){
    window.translation[0] = +this.value;
  })

  yTranslateHandler.addEventListener('input', function(){
    window.translation[1] = +this.value;
  })

  zTranslateHandler.addEventListener('input', function(){
    window.translation[2] = +this.value;
  })


  xScaleHandler.addEventListener('input', function(){
    window.scale[0] = +this.value;
  })

  yScaleHandler.addEventListener('input', function(){
    window.scale[1] = +this.value;
  })

  zScaleHandler.addEventListener('input', function(){
    window.scale[2] = +this.value;
  })



  rotationHandlerX.addEventListener('input', function(){
    window.angle[0] = +this.value;
  })
  rotationHandlerY.addEventListener('input', function(){
    window.angle[1] = +this.value;
  })
  rotationHandlerZ.addEventListener('input', function(){
    window.angle[2] = +this.value;
  })



})();