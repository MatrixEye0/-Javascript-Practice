
Array.prototype.antim = function () { // Iska matlab hai ki tum JavaScript ke built-in Array prototype par last() naam ka method add kar rahe ho.
                                      // Isliye arrays par tum ye likh sakte ho:
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};
const arr = [1, 2, 3,4,5,7];
const result= arr.antim(); 
console.log(result)
 