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
  let rotationUniform = gl.getUniformLocation(program, "u_rotation");

  let positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  let figure = window.createFontFigure("f", 10);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(figure), gl.STATIC_DRAW);

  requestAnimationFrame(function animate(){
    drawScene(gl, program, positionAttLocation, resolutionUniform, translationUniform, rotationUniform, positionBuffer, figure);
    requestAnimationFrame(animate);
  });

}


//rendering
function drawScene(
    gl,
    program,
    positionAttLocation,
    resolutionUniform,
    translationUniform,
    rotationUniform,
    positionBuffer,
    figure
){

  let translation = window.translation;
  let rotation = [Math.cos(window.angle*Math.PI/180), Math.sin(window.angle*Math.PI/180)];

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
  gl.uniform2fv(rotationUniform, rotation);

  let primitiveType = gl.TRIANGLES;
  offset = 0;
  let count = figure.length/2;
  gl.drawArrays(primitiveType, offset, count);
}
