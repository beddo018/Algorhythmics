/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target) {
    let result = -1;
    const sort = (array) => {
        if (array.length <= 1) {
            if (array[0] === target) {
                result = nums.indexOf(array[0]);
            } else {
                return;
            }
        } else {
            let midpoint = Math.floor(array.length / 2);
            let left = array.slice(0, midpoint);
            let right = array.slice(midpoint);
            let leftHigh = left[left.length - 1];
            let rightLow = right[0];
            if (leftHigh >= target) {
                if (leftHigh === target) { 
                    result = nums.indexOf(leftHigh)
                } else {
                    sort(left);
                }
            } else if (rightLow <= target) {
                if (rightLow === target) {
                    result = nums.indexOf(rightLow);
                } else {
                    sort(right);
                }
            }
        }
    }
    sort(nums);
    return result;
};