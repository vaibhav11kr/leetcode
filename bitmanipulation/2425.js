/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let ans = 0;

    if(nums2.length %2 !== 0){
        for(let num of nums1){
            ans ^= num;
        }

    }

    if(nums1.length %2 !== 0){
        for(let num of nums2){
            ans ^= num;
        }

    }

    return ans;
};