(function(){
  let translation = [0, 0];

  let xHandler = document.querySelector("#xRange");
  let yHandler = document.querySelector("#yRange");

  xHandler.addEventListener('input', function(){
    translation[0] = this.value;
  })

  yHandler.addEventListener('input', function(e){
    translation[1] = this.value;
  })

  window.translation = translation;

})();