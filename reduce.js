/* 
.it reduces an entire array into a single value. 
.single value is =>
                  . A number (sum, average, maximum) ,
                  . A string, An object, Another array ,
                  . Even a complex data structure like a lookup table.

1. Accumulator → Stores the result from previous iterations.
2. CurrentValue → Current element in the array.
3. InitialValue → Starting value of the accumulator.


//-------------------------------------syntax--------------------------------------

array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue); 
*/

const arr =[1,8,3,9]
const test = arr.reduce((acc,cur)=>{
    console.log(`Accumulator value : ${acc} and Current Value : ${cur}`);  
    return acc+cur
},0)
console.log(test);

//-----------------------------------------------------------------------------------------------------------

const productDetail = [
    { product: "Iphone 17 pro max", price: 153000 },
    { product: "Smart TV", price: 175000 },
    { product: "Air Conditioner", price: 43000 },
    { product: "Laptop", price: 97000 }
];

// Print each product with its GST
let totalBill = 0;
let totalGST = 0;

console.log("------------ Product Bill ------------");

productDetail.forEach((item) => {
    const gst = item.price * 18 / 100;
    const finalPrice = item.price + gst;

    totalBill += item.price;
    totalGST += gst;

    console.log(
        `Product : ${item.product}
Price   : ₹${item.price.toLocaleString()}
GST(18%): ₹${gst.toLocaleString()}
Total   : ₹${finalPrice.toLocaleString()}
---------------------------------------`
    );
});

console.log(`Subtotal   : ₹${totalBill.toLocaleString()}`);
console.log(`Total GST  : ₹${totalGST.toLocaleString()}`);
console.log(`Grand Total: ₹${(totalBill + totalGST).toLocaleString()}`);

