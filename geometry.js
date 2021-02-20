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

  let font = function(font, fontSize){

    let ret = null;

    switch (font){
      case "f":

        let upHorizLn = 20*fontSize;
        let upHorizW = 7*fontSize;

        let centerHortLn = 10*fontSize;
        let centerHortW = 7*fontSize;

        let leftVertLn = 40*fontSize;
        let leftVertW = 10*fontSize;

        let upLeftVertOffset = leftVertW;
        let centerLeftOffset = leftVertW;
        let centerTopOffset = leftVertLn/2.5;

        ret = [
          // upper horizontal
          upLeftVertOffset + 0, 0,
          upLeftVertOffset + upHorizLn, 0,
          upLeftVertOffset + 0, upHorizW,
          upLeftVertOffset + 0, upHorizW,
          upLeftVertOffset + upHorizLn, 0,
          upLeftVertOffset + upHorizLn, upHorizW,

          // // center vertical
          centerLeftOffset + 0, centerTopOffset + 0,
          centerLeftOffset + centerHortLn, centerTopOffset + 0,
          centerLeftOffset + 0, centerTopOffset + centerHortW,
          centerLeftOffset + 0, centerTopOffset + centerHortW,
          centerLeftOffset + centerHortLn, centerTopOffset + 0,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW,

          // left vertical
          0, 0,
          leftVertW, 0,
          0, leftVertLn,
          0, leftVertLn,
          leftVertW, 0,
          leftVertW, leftVertLn,
        ];
        break;
    }


    return ret;
  }






  window.createRectangle = rectangle;
  window.createFontFigure = font;

})();