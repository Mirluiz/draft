(function(){
  let rectangle = function(w, h){
    return [
        0, 0,
        0, w,
        h, 0,
        0, w,
        h, w,
        h, 0
    ];
  }

  window.createRectangle = rectangle;

})();