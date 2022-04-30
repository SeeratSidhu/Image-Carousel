
module.exports = {

  randomizeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
 
    return arr;
 }
}