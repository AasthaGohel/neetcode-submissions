class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length-1;
        let res = [];

        while (left <= right) {
            let sum = numbers[left] + numbers[right];

            if (sum > target) right--;
            else if (sum < target) left++;
            else {
                res.push(left+1);
                res.push(right+1);
                return res;
            }

            
        }

        
    }
}
