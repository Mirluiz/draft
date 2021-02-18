(function () {
    let vertexShader = `
    // атрибут, который будет получать данные из буфера
        attribute vec4 a_position;
         
        // все шейдеры имеют функцию main
        void main() {
         
          // gl_Position - специальная переменная вершинного шейдера,
          // которая отвечает за установку положения
          gl_Position = a_position;
        }
    `

    let fragmentShader = `
        // фрагментные шейдеры не имеют точности по умолчанию, поэтому нам необходимо её
        // указать. mediump подойдёт для большинства случаев. Он означает "средняя точность"
        precision mediump float;        
        void main() {
            // gl_FragColor - специальная переменная фрагментного шейдера.
            // Она отвечает за установку цвета.
            gl_FragColor = vec4(1, 0, 0.5, 1); // вернёт красновато-фиолетовый
        }
    `


    window.shaders = {
        fragmentShader,
        vertexShader
    };
})();
