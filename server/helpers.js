
module.exports = {

  randomizeArray(arr) {

    for (let i = arr.length - 1; i > 0; i--) {

      //get a random index between 0 and i and swap arr items at indices i and j
      let j = Math.floor(Math.random() * (i));
      [arr[i], arr[j]] = [arr[j], arr[i]];

    }
 
    return arr;
 }
}