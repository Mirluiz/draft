(function () {
    let vertexShader = `
        uniform vec2 u_resolution;
        uniform vec2 u_translation;
        
        attribute vec2 a_position;
        void main() {
          vec2 translated = a_position + u_translation;
          vec2 minimized = translated/u_resolution;
          vec2 pushedTopLeft = minimized - 1.0;
          gl_Position = vec4(pushedTopLeft * vec2(1, -1), 0, 1);
        }
    `

    let fragmentShader = `
    
        precision mediump float;        
        void main() {
            gl_FragColor = vec4(1, 0, 0.5, 1);
        }
    `


    window.shaders = {
        fragmentShader,
        vertexShader
    };
})();
