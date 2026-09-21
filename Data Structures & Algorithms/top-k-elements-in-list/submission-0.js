class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = [];

        const map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const sorted = [...map].sort((a, b) => b[1] - a[1]);


        for (let i = 0, j = 0; i < sorted.length && j < k; i++, j++) {
            res.push(sorted[i][0]);
        }

        return res;
    }
}
