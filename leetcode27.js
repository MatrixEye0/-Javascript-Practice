var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
let nums = [2,3,4,5,2,3,2,9,2];
let k = removeElement(nums, 2);

console.log(k);                        
console.log(nums.slice(0,k)); 