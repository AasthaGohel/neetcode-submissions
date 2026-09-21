class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for(let num of nums) {
            seen.add(num);
        }


        return seen.size!==nums.length
    }
}
