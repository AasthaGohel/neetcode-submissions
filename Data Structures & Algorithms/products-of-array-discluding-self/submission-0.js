class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(0);

        let zeroCount = 0;
        let zeroIdx = -1;
        let prod = 1;


        for(let i=0;i<nums.length;i++) {
            if(nums[i]===0)
            {
                zeroCount++;
                zeroIdx = i;
            }
            else {
                prod*=nums[i];
            }
        }

        if(zeroCount===1)
        {
            res[zeroIdx] = prod;
        }
        
        if(zeroCount===0) {
            for(let i=0;i<nums.length;i++) {
                res[i] = Math.floor(prod/nums[i]);
            }
        }

        return res;


    }
}
