window.onload = function () {

  let canvas = document.getElementById('canvas');
  let gl  = canvas.getContext('webgl2');

  if (!gl){
    console.error('webgl2 doesn\'t work');
    return;
  }

  let vertexShaderText = window.shaders.vertexShader;
  let fragmentShaderText = window.shaders.fragmentShader;

  let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderText);
  let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderText);

  const program = createProgram(gl, vertexShader, fragmentShader);

  let positionAttLocation = gl.getAttribLocation(program, "a_position");
  let colorLocation = gl.getAttribLocation(program, "a_color");

  let matrixUniform = gl.getUniformLocation(program, "u_matrix");

  let uniforms = {
    matrixUniform,
    colorLocation

  };

  let positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  let figure = window.create3DFontFigure("f", 2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(figure), gl.STATIC_DRAW);

  let colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  setColors(gl);

  requestAnimationFrame(function animate(){
    drawScene(gl, program, positionAttLocation, uniforms, positionBuffer,colorBuffer, figure);
    requestAnimationFrame(animate);
  });

}


//rendering
function drawScene(
    gl,
    program,
    positionAttLocation,
    uniforms,
    positionBuffer,
    colorBuffer,
    figure
){
  let matrixUniform = uniforms.matrixUniform;
  let colorLocation = uniforms.colorLocation;

  let translationMatrix =window.matrix.m4.translate(window.translation[0], window.translation[1], window.translation[2]) ;
  let rotateXMatrix = window.matrix.m4.rotate.x(window.angle[0]*Math.PI/180);
  let rotateYMatrix = window.matrix.m4.rotate.y(window.angle[1]*Math.PI/180);
  let rotateZMatrix = window.matrix.m4.rotate.z(window.angle[2]*Math.PI/180);
  let scaleMatrix = window.matrix.m4.scale(window.scale[0], window.scale[1], 2);



  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_CLEAR_VALUE);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);
  gl.useProgram(program);
  gl.enableVertexAttribArray(positionAttLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);



  let size = 3;
  let type = gl.FLOAT;
  let normalize = false;
  let offset = 0;
  let stride = 0;
  gl.vertexAttribPointer(
      positionAttLocation, size, type, normalize, stride, offset
  )

  gl.enableVertexAttribArray(colorLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.vertexAttribPointer(
      colorLocation, 3, gl.UNSIGNED_BYTE, true, 0, 0
  )

  let projectionMatrix = window.matrix.m4.project(gl.canvas.width, gl.canvas.height, 400);
  let matrix = window.matrix.m4.identity();
  matrix = window.matrix.mCommon.multiple(projectionMatrix, matrix);
  matrix = window.matrix.mCommon.multiple(translationMatrix, matrix);
  matrix = window.matrix.mCommon.multiple(rotateXMatrix, matrix);
  matrix = window.matrix.mCommon.multiple(rotateYMatrix, matrix);
  matrix = window.matrix.mCommon.multiple(rotateZMatrix, matrix);
  matrix = window.matrix.mCommon.multiple(scaleMatrix, matrix);

  gl.uniformMatrix4fv(matrixUniform, false, matrix)

  let primitiveType = gl.TRIANGLES;
  offset = 0;
  let count = figure.length/3;
  gl.drawArrays(primitiveType, offset, count);


}
