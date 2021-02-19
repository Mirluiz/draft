(function () {
    let vertexShader = `
        uniform vec2 u_resolution;
        uniform vec2 u_translation;
        uniform vec2 u_rotation;
        
        attribute vec2 a_position;
        void main() {
          vec2 rotated = vec2(
                                a_position.x * u_rotation.x - a_position.y*u_rotation.y,
                                a_position.x * u_rotation.y + a_position.y*u_rotation.x
                              );
          vec2 translated = rotated + u_translation;
          
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
