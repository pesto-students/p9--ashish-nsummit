function spiralOrder(arr) {
    let result = [];
    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;
    let dir = 0;
  
    while (top <= bottom && left <= right) {
      if (dir === 0) {
        for (let i = left; i <= right; i++) {
          result.push(arr[top][i]);
        }
        top++;
      } else if (dir === 1) {
        for (let i = top; i <= bottom; i++) {
          result.push(arr[i][right]);
        }
        right--;
      } else if (dir === 2) {
        for (let i = right; i >= left; i--) {
          result.push(arr[bottom][i]);
        }
        bottom--;
      } else if (dir === 3) {
        for (let i = bottom; i >= top; i--) {
          result.push(arr[i][left]);
        }
        left++;
      }
      dir = (dir + 1) % 4;
    }
    return result;
  }
  

module.exports = spiralOrder