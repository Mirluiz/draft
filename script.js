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

  let resolutionUniform = gl.getUniformLocation(program, "u_resolution");
  // let translationUniform = gl.getUniformLocation(program, "u_translation");
  // let rotationUniform = gl.getUniformLocation(program, "u_rotation");
  let matrixUniform = gl.getUniformLocation(program, "u_matrix");

  let uniforms = {
    resolutionUniform, matrixUniform
  };

  let positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  let figure = window.createFontFigure("f", 2);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(figure), gl.STATIC_DRAW);

  requestAnimationFrame(function animate(){
    drawScene(gl, program, positionAttLocation, uniforms, positionBuffer, figure);
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
    figure
){
  let matrixUniform = uniforms.matrixUniform;
  let resolutionUniform = uniforms.resolutionUniform;

  let translationMatrix =window.matrix.m3.translate(window.translation[0], window.translation[1]) ;
  let rotateMatrix = window.matrix.m3.rotate(window.angle*Math.PI/180);
  let scaleMatrix = window.matrix.m3.scale(window.scale[0], window.scale[1]);



  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);
  gl.enableVertexAttribArray(positionAttLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  let size = 2;
  let type = gl.FLOAT;
  let normalize = false;
  let offset = 0;
  let stride = 0;
  gl.vertexAttribPointer(
      positionAttLocation, size, type, normalize, stride, offset
  )

  let projectionMatrix = window.matrix.m3.project(gl.canvas.width, gl.canvas.height);
  // let matrix = window.matrix.m3.multiple(projectionMatrix, rotateMatrix);
  let matrix = window.matrix.m3.identity();
  matrix = window.matrix.m3.multiple(projectionMatrix, matrix);
  matrix = window.matrix.m3.multiple(translationMatrix, matrix);
  matrix = window.matrix.m3.multiple(rotateMatrix, matrix);
  matrix = window.matrix.m3.multiple(scaleMatrix, matrix);


  // gl.uniform2f(resolutionUniform, gl.canvas.width, gl.canvas.height);
  gl.uniformMatrix3fv(matrixUniform, false, matrix)
  // gl.uniform2fv(translationUniform, translation);
  // gl.uniform2fv(rotationUniform, rotation);

  let primitiveType = gl.TRIANGLES;
  offset = 0;
  let count = figure.length/2;
  gl.drawArrays(primitiveType, offset, count);


}
