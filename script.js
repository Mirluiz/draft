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
  let translationUniform = gl.getUniformLocation(program, "u_translation");

  let positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  let figure = window.createRectangle(100, 150);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(figure), gl.STATIC_DRAW);

  let translation = window.translation;

  requestAnimationFrame(function animate(){
    drawScene(gl, program, positionAttLocation, resolutionUniform, translationUniform, positionBuffer, translation, figure);
    requestAnimationFrame(animate);
  });

}


//rendering
function drawScene(gl, program, positionAttLocation, resolutionUniform, translationUniform,  positionBuffer, translation, figure){

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

  gl.uniform2f(resolutionUniform, gl.canvas.width, gl.canvas.height);
  gl.uniform2fv(translationUniform, translation);

  let primitiveType = gl.TRIANGLES;
  offset = 0;
  let count = figure.length/2;
  gl.drawArrays(primitiveType, offset, count);
}
