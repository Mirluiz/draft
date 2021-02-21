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
          upLeftVertOffset + 0, 0, 0,
          upLeftVertOffset + upHorizLn, 0, 0,
          upLeftVertOffset + 0, upHorizW, 0,
          upLeftVertOffset + 0, upHorizW, 0,
          upLeftVertOffset + upHorizLn, 0, 0,
          upLeftVertOffset + upHorizLn, upHorizW, 0,

          // // center vertical
          centerLeftOffset + 0, centerTopOffset + 0, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, 0,
          centerLeftOffset + 0, centerTopOffset + centerHortW, 0,
          centerLeftOffset + 0, centerTopOffset + centerHortW, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW, 0,

          // left vertical
          0, 0, 0,
          leftVertW, 0, 0,
          0, leftVertLn, 0,
          0, leftVertLn, 0,
          leftVertW, 0, 0,
          leftVertW, leftVertLn, 0,
        ];
        break;
    }


    return ret;
  }


  let font3D = function(font, fontSize) {
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

        let height = 10*fontSize;

        ret = [
          // upper horizontal
          upLeftVertOffset + 0, 0, 0,
          upLeftVertOffset + upHorizLn, 0, 0,
          upLeftVertOffset + 0, upHorizW, 0,
          upLeftVertOffset + 0, upHorizW, 0,
          upLeftVertOffset + upHorizLn, 0, 0,
          upLeftVertOffset + upHorizLn, upHorizW, 0,

          // // center vertical
          centerLeftOffset + 0, centerTopOffset + 0, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, 0,
          centerLeftOffset + 0, centerTopOffset + centerHortW, 0,
          centerLeftOffset + 0, centerTopOffset + centerHortW, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW, 0,

          // left vertical
          0, 0, 0,
          leftVertW, 0, 0,
          0, leftVertLn, 0,
          0, leftVertLn, 0,
          leftVertW, 0, 0,
          leftVertW, leftVertLn, 0,



          // upper horizontal
          upLeftVertOffset + 0, 0, height,
          upLeftVertOffset + upHorizLn, 0, height,
          upLeftVertOffset + 0, upHorizW, height,
          upLeftVertOffset + 0, upHorizW, height,
          upLeftVertOffset + upHorizLn, 0, height,
          upLeftVertOffset + upHorizLn, upHorizW, height,

          // center vertical
          centerLeftOffset + 0, centerTopOffset + 0, height,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, height,
          centerLeftOffset + 0, centerTopOffset + centerHortW, height,
          centerLeftOffset + 0, centerTopOffset + centerHortW, height,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, height,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW, height,

          // left vertical
          0, 0, height,
          leftVertW, 0, height,
          0, leftVertLn, height,
          0, leftVertLn, height,
          leftVertW, 0, height,
          leftVertW, leftVertLn, height,

          //left vertical left wall
          0, 0, 0,
          0, 0, height,
          0, leftVertLn, 0,
          0, leftVertLn, 0,
          0, 0, height,
          0, leftVertLn, height,

          //left vertical right up wall
          leftVertW + 0, upHorizW + 0, 0,
          leftVertW + 0, centerTopOffset + 0, 0,
          leftVertW + 0, upHorizW + 0, height,
          leftVertW + 0, upHorizW + 0, height,
          leftVertW + 0, centerTopOffset + 0, 0,
          leftVertW + 0, centerTopOffset + 0, height,

          //left vertical right bottom wall
          leftVertW + 0, centerTopOffset + centerHortW, 0,
          leftVertW + 0, leftVertLn, 0,
          leftVertW + 0, centerTopOffset + centerHortW, height,
          leftVertW + 0, centerTopOffset + centerHortW, height,
          leftVertW + 0, leftVertLn, 0,
          leftVertW + 0, leftVertLn, height,

          //left vertical bottom wall
          0, leftVertLn, 0,
          leftVertW, leftVertLn, 0,
          0, leftVertLn, height,
          0, leftVertLn, height,
          leftVertW, leftVertLn, 0,
          leftVertW, leftVertLn, height,

          // top wall
          0, 0, 0,
          upHorizLn + upLeftVertOffset, 0, 0,
          0, 0, height,
          0, 0, height,
          upHorizLn + upLeftVertOffset, 0, 0,
          upHorizLn + upLeftVertOffset, 0, height,

          // top horizontal line bottom wall
          upLeftVertOffset + 0, upHorizW + 0, 0,
          upLeftVertOffset + upHorizLn, upHorizW + 0, 0,
          upLeftVertOffset + 0, upHorizW + 0, height,
          upLeftVertOffset + 0, upHorizW + 0, height,
          upLeftVertOffset + upHorizLn, upHorizW + 0, 0,
          upLeftVertOffset + upHorizLn, upHorizW + 0, height,

          // top horizontal line right wall
          upLeftVertOffset + upHorizLn, 0, 0,
          upLeftVertOffset + upHorizLn, upHorizW + 0, 0,
          upLeftVertOffset + upHorizLn, 0, height,
          upLeftVertOffset + upHorizLn, 0, height,
          upLeftVertOffset + upHorizLn, upHorizW + 0, 0,
          upLeftVertOffset + upHorizLn, upHorizW + 0, height,

          // center horizontal line upper wall
          centerLeftOffset + 0, centerTopOffset + 0, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, 0,
          centerLeftOffset + 0, centerTopOffset + 0, height,
          centerLeftOffset + 0, centerTopOffset + 0, height,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, height,

          // center horizontal line bottom wall
          centerLeftOffset + 0, centerTopOffset + centerHortW, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW, 0,
          centerLeftOffset + 0, centerTopOffset + centerHortW, height,
          centerLeftOffset + 0, centerTopOffset + centerHortW, height,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW, height,

          // center horizontal line right wall
          centerLeftOffset + centerHortLn, centerTopOffset + 0, 0,
          centerLeftOffset + centerHortLn, centerTopOffset +centerHortW, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, height,
          centerLeftOffset + centerHortLn, centerTopOffset + 0, height,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW, 0,
          centerLeftOffset + centerHortLn, centerTopOffset + centerHortW, height,
        ];
        break;
    }


    return ret;
  }



  window.createRectangle = rectangle;
  window.createFontFigure = font;
  window.create3DFontFigure = font3D;

})();