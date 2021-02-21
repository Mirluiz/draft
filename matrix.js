(function(){
  let m3 = {
    identity: function() {
      return [
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
      ];
    },
    translate: (tx, ty) => {
      return [
          1, 0, 0,
          0, 1, 0,
          tx, ty, 1
      ]
    },
    rotate: (angleRad) => {
      let c = Math.cos(angleRad);
      let s = Math.sin(angleRad);
      return [
          c, s , 0,
          -s, c, 0,
          0, 0 , 1
      ]
    },
    scale: (sx, sy) => {
      return [
          sx, 0, 0,
          0, sy, 0,
          0, 0, 1
      ]
    },
    multiple: (a, b) => {

      let a11 = a[0], a12 = a[1], a13 = a[2], a21 = a[3], a22 = a[4], a23 = a[5], a31 = a[6], a32 = a[7], a33 = a[8];
      let b11 = b[0], b12 = b[1], b13 = b[2], b21 = b[3], b22 = b[4], b23 = b[5], b31 = b[6], b32 = b[7], b33 = b[8];

      return  [
          a11*b11 + a12*b21 + a13*b31, a11*b12 + a12*b22 + a13*b32, a11*b13 + a12*b23 + a13*b33,
          a21*b11 + a22*b21 + a23*b31, a21*b12 + a22*b22 + a23*b32, a21*b13 + a22*b23 + a23*b33,
          a31*b11 + a32*b21 + a33*b31, a31*b12 + a32*b22 + a33*b32, a31*b13 + a32*b23 + a33*b33,
      ]
    },
    project: (w, h) => {
      return [
        2/w, 0, 0,
        0, -2/h, 0,
        0, 0, 1
      ]
    }
  }

  let m4 = {
    identity: function() {
      return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ];
    },
    translate: (tx, ty, tz) => {
      return [
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          tx, ty, tz, 1
      ]
    },
    rotate: {
      x: (angleRad) => {
        let c = Math.cos(angleRad);
        let s = Math.sin(angleRad);
        return [
          1, 0 , 0, 0,
          0, c, s , 0,
          0, -s, c, 0,
          0, 0 , 0, 1
        ]
      },
      y: (angleRad) => {
        let c = Math.cos(angleRad);
        let s = Math.sin(angleRad);
        return [
          c, 0 , s, 0,
          0, 1, 0 , 0,
          -s, 0, c, 0,
          0, 0 , 0, 1
        ]
      },
      z: (angleRad) => {
        let c = Math.cos(angleRad);
        let s = Math.sin(angleRad);
        return [
          c, -s, 0, 0,
          s, c, 0 , 0,
          0, 0, 1, 0,
          0, 0 , 0, 1
        ]
      }
    },
    scale: (sx, sy, sz) => {
      return [
          sx, 0, 0, 0,
          0, sy, 0, 0,
          0, 0, sz, 0,
          0, 0, 0, 1
      ]
    },
    project: (w, h, d) => {
      return [
        2 / w, 0, 0, 0,
        0, -2 / h, 0, 0,
        0, 0, 2 / d, 0,
        0, 0, 0, 1,
      ]
    }
  }

  let mCommon = {
    multiple: (a, b) => {
      if (a.length != b.length)return;

      let ret = [];
      let matrixSize = Math.sqrt(a.length);

      let i_cnt = 0;
      while (i_cnt < a.length) {

        let i_cnt_row = 0;
        let sum = 0;
        while (i_cnt_row < matrixSize){
          sum = sum + a[i_cnt_row + matrixSize*Math.floor(i_cnt/matrixSize)] * b[i_cnt_row * matrixSize + i_cnt % matrixSize];
          i_cnt_row++;
        }
        ret.push(sum);
        i_cnt++;
      }
      return ret;
    },
  }

  window.matrix = {
    m3,
    m4,
    mCommon
  };
})();